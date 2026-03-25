import { PenLine, Rss } from 'lucide-react'
import { motion } from 'framer-motion'
import { getAllPosts, getAllTags } from '../lib/blog'
import PostCard from '../components/blog/PostCard'

export default function Blog() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <section className="min-h-[calc(100vh-80px)] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20">
              <PenLine size={20} className="text-orange-400" />
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl gradient-text">
              Blog
            </h1>
          </div>
          <p className="text-foreground/55 text-lg max-w-xl">
            Thoughts on backend development, distributed systems, and the occasional deep dive into the code that runs the world.
          </p>
        </motion.div>

        {tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-3 mb-8 flex-wrap"
          >
            <Rss size={14} className="text-foreground/30" />
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono rounded-full bg-foreground/[0.04] border border-foreground/[0.08] text-foreground/50 hover:text-orange-400 hover:border-orange-500/30 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}

        <div className="space-y-4">
          {posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-foreground/40 font-mono text-sm">
                No posts yet. Drop an MDX file in <code className="text-orange-400">src/content/blogs/</code> to get started.
              </p>
            </motion.div>
          ) : (
            posts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
