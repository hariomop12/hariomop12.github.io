import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'

export default function PostCard({ post }) {
  return (
    <article>
      <Link
        to={`/blog/${post.slug}`}
        className="group block p-6 rounded-lg border border-border bg-secondary/40 hover:border-primary transition-colors"
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3 text-xs text-foreground/50">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {format(post.date, 'MMM d, yyyy')}
            </span>
          </div>
          <ArrowRight
            size={16}
            className="flex-shrink-0 mt-1 text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all"
          />
        </div>

        <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {post.description && (
          <p className="mb-4 text-sm leading-relaxed text-foreground/60 line-clamp-2">
            {post.description}
          </p>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded bg-secondary text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  )
}
