import { PenLine } from 'lucide-react'
import { getAllPosts, getAllTags } from '../lib/blog'
import PostCard from '../components/blog/PostCard'

export default function Blog() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <section className="min-h-[calc(100vh-80px)] py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-secondary border border-border">
            <PenLine size={18} className="text-primary" />
          </div>
          <h1 className="font-bold text-4xl md:text-5xl">Blog</h1>
        </div>
        <p className="text-foreground/60 text-lg max-w-xl mb-8">
          Thoughts on backend development, distributed systems, and the
          occasional deep dive into the code that runs the world.
        </p>

        {tags.length > 0 && (
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded bg-secondary text-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-4">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-foreground/50 text-sm">
                No posts yet. Drop an MDX file in{' '}
                <code className="text-primary">src/content/blogs/</code> to get
                started.
              </p>
            </div>
          ) : (
            posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
