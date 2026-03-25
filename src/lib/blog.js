const posts = import.meta.glob('/src/content/blogs/*.mdx', { eager: true })

export function getAllPosts() {
  return Object.entries(posts)
    .map(([path, mod]) => {
      const slug = path.split('/').pop().replace('.mdx', '')
      const Component = mod.default
      const frontmatter = mod.frontmatter || {}
      
      return {
        slug,
        component: Component,
        title: frontmatter.title || 'Untitled',
        date: frontmatter.date ? new Date(frontmatter.date) : new Date(),
        description: frontmatter.description || '',
        tags: frontmatter.tags || [],
        published: frontmatter.published !== false,
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
