export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    const url = new URL(request.url)

    if (url.pathname === '/api/likes' && request.method === 'GET') {
      const slug = url.searchParams.get('slug')
      if (!slug) {
        return new Response(JSON.stringify({ error: 'slug required' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      const count = await env.BLOG_LIKES.get(`likes:${slug}`)
      return new Response(JSON.stringify({ slug, count: Number(count) || 0 }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    if (url.pathname === '/api/likes' && request.method === 'POST') {
      const { slug, action } = await request.json()
      if (!slug || !['like', 'unlike'].includes(action)) {
        return new Response(JSON.stringify({ error: 'slug and action (like/unlike) required' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      let count = Number(await env.BLOG_LIKES.get(`likes:${slug}`)) || 0
      count = action === 'like' ? count + 1 : Math.max(count - 1, 0)
      await env.BLOG_LIKES.put(`likes:${slug}`, String(count))

      return new Response(JSON.stringify({ slug, count }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response('Not found', { status: 404, headers: corsHeaders })
  },
}
