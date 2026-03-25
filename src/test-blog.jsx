import { getAllPosts } from './lib/blog'

export default function Test() {
  const posts = getAllPosts()
  console.log('Test Component - Posts:', posts)
  
  return (
    <div>
      <h1>Test Blog Posts</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}
