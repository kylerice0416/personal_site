"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import type { TranslationShowcaseData } from "@/sanity/lib/queries"

type Props = { data: TranslationShowcaseData }

export function TranslationSlider({ data }: Props) {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pos = ((clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.min(Math.max(pos, 5), 95))
  }, [])

  const onMouseDown = () => setIsDragging(true)
  const onTouchStart = () => setIsDragging(true)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (isDragging) updatePos(e.clientX) }
    const onTouchMove = (e: TouchEvent) => { if (isDragging) updatePos(e.touches[0].clientX) }
    const onUp = () => setIsDragging(false)

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("touchmove", onTouchMove)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("touchend", onUp)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("touchend", onUp)
    }
  }, [isDragging, updatePos])

  const chineseText = data?.chineseText ?? '山不在高，有仙則名。水不在深，有龍則靈。斯是陋室，惟吾德馨。'
  const englishText = data?.englishText ?? 'A mountain need not be tall — if immortals dwell there, it is famous. A river need not be deep — if a dragon inhabits it, it is sacred. This is a humble room, yet my virtue fills it with fragrance.'
  const chineseLabel = data?.chineseLabel ?? 'Original · 繁體中文'
  const englishLabel = data?.englishLabel ?? 'Translation · English'
  const eyebrow = data?.eyebrow ?? 'Translation in Action'

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-8">
        {eyebrow}
      </p>

      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-lg border border-border select-none"
        style={{ cursor: isDragging ? "ew-resize" : "default" }}
      >
        {/* English panel — base layer (right side) */}
        <div className="relative flex flex-col min-h-64 md:min-h-80">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 md:p-12 text-center">
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">{englishLabel}</p>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl">{englishText}</p>
          </div>
        </div>

        {/* Chinese panel — clipped overlay (left side) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 md:p-12 bg-muted text-center"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">{chineseLabel}</p>
          <p className="text-lg md:text-xl leading-relaxed">{chineseText}</p>
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-primary"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Handle */}
          <button
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md cursor-ew-resize"
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            aria-label="Drag to compare"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M5 3L1 8l4 5V3zm6 0v10l4-5-4-5z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
