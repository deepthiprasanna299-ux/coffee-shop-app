import { useState } from 'react'

const FALLBACK =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop&q=90&auto=format'

function ProductImageInner({
  src,
  srcHd,
  alt,
  className = '',
  wrapperClassName = '',
  loading = 'lazy',
}) {
  const [loaded, setLoaded] = useState(false)
  const sources = [srcHd, src, FALLBACK].filter(Boolean)
  const [sourceIndex, setSourceIndex] = useState(0)
  const displaySrc = sources[sourceIndex] || FALLBACK

  const handleError = () => {
    setLoaded(false)
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((i) => i + 1)
    }
  }

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!loaded && <div className="absolute inset-0 image-shimmer" aria-hidden />}
      <img
        key={displaySrc}
        src={displaySrc}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={handleError}
        className={`h-full w-full object-cover transition-all duration-500 ease-out ${
          loaded ? 'scale-100 opacity-100' : 'scale-[1.02] opacity-0'
        } ${className}`}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coffee-900/20 via-transparent to-white/5"
        aria-hidden
      />
    </div>
  )
}

export default function ProductImage(props) {
  return <ProductImageInner key={`${props.src}-${props.srcHd}`} {...props} />
}
