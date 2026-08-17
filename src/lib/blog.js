const posts = import.meta.glob('/src/content/blogs/*.mdx', { eager: true })

function calculateReadingTime(content) {
  const text = content.replace(/---[\s\S]*?---/, '').replace(/```[\s\S]*?```/g, '').replace(/<[^>]+>/g, '').replace(/[#*`>\[\]()!]/g, '')
  const words = text.split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return minutes
}

export function getAllPosts() {
  return Object.entries(posts)
    .map(([path, mod]) => {
      const slug = path.split('/').pop().replace('.mdx', '')
      const Component = mod.default
      const frontmatter = mod.frontmatter || {}
      const rawContent = mod.default?.toString?.() || ''

      return {
        slug,
        component: Component,
        title: frontmatter.title || 'Untitled',
        date: frontmatter.date ? new Date(frontmatter.date) : new Date(),
        description: frontmatter.description || '',
        tags: frontmatter.tags || [],
        published: frontmatter.published !== false,
        readingTime: calculateReadingTime(rawContent),
      }
    })
    .filter((post) => post.published)
    .sort((a, b) => b.date - a.date)
}

export function getPostBySlug(slug) {
  const allPosts = getAllPosts()
  return allPosts.find((post) => post.slug === slug)
}

export function getAllTags() {
  const allPosts = getAllPosts()
  const tags = new Set()
  allPosts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tags.add(tag))
    }
  })
  return Array.from(tags)
}
