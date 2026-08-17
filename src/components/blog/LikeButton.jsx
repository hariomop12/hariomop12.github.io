import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { cn } from '../../lib/utils'

const API_BASE = 'https://blog-likes.hariomvirkhare02.workers.dev'

function hasLiked(slug) {
  try {
    const liked = JSON.parse(localStorage.getItem('blog-liked') || '{}')
    return !!liked[slug]
  } catch {
    return false
  }
}

function setLikedLocal(slug, value) {
  const liked = JSON.parse(localStorage.getItem('blog-liked') || '{}')
  liked[slug] = value
  localStorage.setItem('blog-liked', JSON.stringify(liked))
}

export default function LikeButton({ slug }) {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)
  const [animate, setAnimate] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLiked(hasLiked(slug))
    fetch(`${API_BASE}/api/likes?slug=${encodeURIComponent(slug)}`)
      .then((res) => res.json())
      .then((data) => setCount(data.count || 0))
      .catch(() => {})
  }, [slug])

  async function handleClick() {
    if (loading) return

    const action = liked ? 'unlike' : 'like'
    setLoading(true)

    setLiked(!liked)
    setCount((c) => action === 'like' ? c + 1 : Math.max(c - 1, 0))
    setLikedLocal(slug, !liked)
    setAnimate(true)
    setTimeout(() => setAnimate(false), 300)

    try {
      const res = await fetch(`${API_BASE}/api/likes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, action }),
      })
      const data = await res.json()
      setCount(data.count)
    } catch {
      setLiked(liked)
      setCount((c) => action === 'like' ? Math.max(c - 1, 0) : c + 1)
      setLikedLocal(slug, liked)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
        'border hover:scale-105 active:scale-95',
        liked
          ? 'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20'
          : 'bg-secondary/60 border-border text-foreground/60 hover:text-foreground hover:bg-secondary'
      )}
    >
      <Heart
        size={18}
        className={cn(
          'transition-all duration-200',
          liked && 'fill-red-400',
          animate && 'scale-125'
        )}
      />
      <span>{count > 0 ? count : ''}</span>
    </button>
  )
}
