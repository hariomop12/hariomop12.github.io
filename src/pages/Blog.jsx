import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PenLine, X } from 'lucide-react'
import { getAllPosts, getAllTags } from '../lib/blog'
import PostCard from '../components/blog/PostCard'
import { cn } from '../lib/utils'

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTag = searchParams.get('tag')
  const allPosts = getAllPosts()
  const tags = getAllTags()

  const posts = activeTag
    ? allPosts.filter((p) => p.tags?.some((t) => t === activeTag))
    : allPosts

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
            <button
              onClick={() => setSearchParams({})}
              className={cn(
                'px-2.5 py-1 text-xs rounded border transition-colors',
                !activeTag
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-secondary text-foreground/60 border-transparent hover:border-border'
              )}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchParams({ tag })}
                className={cn(
                  'px-2.5 py-1 text-xs rounded border transition-colors',
                  activeTag === tag
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-secondary text-foreground/60 border-transparent hover:border-border'
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {activeTag && (
          <div className="flex items-center gap-2 mb-6 text-sm text-foreground/60">
            <span>Filtered by</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 text-primary text-xs">
              {activeTag}
              <button onClick={() => setSearchParams({})} className="hover:text-foreground">
                <X size={12} />
              </button>
            </span>
            <span>({posts.length} posts)</span>
          </div>
        )}

        <div className="space-y-4">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-foreground/50 text-sm">
                {activeTag
                  ? `No posts found with tag "${activeTag}".`
                  : 'No posts yet. Drop an MDX file in '}
                {!activeTag && (
                  <code className="text-primary">src/content/blogs/</code>
                )}
                {!activeTag && ' to get started.'}
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
