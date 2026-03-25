import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '../../lib/utils'

export default function PostCard({ post, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className={cn(
          'group block p-6 rounded-2xl border border-border/50',
          'bg-foreground/[0.02] hover:bg-foreground/[0.04]',
          'hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5',
          'transition-all duration-300'
        )}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3 text-xs text-foreground/40">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {format(post.date, 'MMM d, yyyy')}
            </span>

          </div>
          <ArrowRight
            size={16}
            className="flex-shrink-0 mt-1 transition-all duration-300 text-foreground/30 group-hover:text-orange-400 group-hover:translate-x-1"
          />
        </div>

        <h3 className="mb-2 text-xl font-bold transition-colors font-display text-foreground group-hover:text-orange-400">
          {post.title}
        </h3>

        {post.description && (
          <p className="mb-4 text-sm leading-relaxed text-foreground/55 line-clamp-2">
            {post.description}
          </p>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-orange-500/10 text-orange-400/80 border border-orange-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.article>
  )
}
