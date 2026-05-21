"use client"

import { useEffect, useState } from "react"

type Props = { zh: string; en: string }

type Phase = "hold_zh" | "deleting" | "typing_en" | "hold_en" | "deleting_en" | "typing_zh"

export function TypewriterWord({ zh, en }: Props) {
  const [displayed, setDisplayed] = useState(zh)
  const [phase, setPhase] = useState<Phase>("hold_zh")
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (phase === "hold_zh") {
      setDisplayed(zh)
      setShowCursor(false)
      timeout = setTimeout(() => setPhase("deleting"), 2000)

    } else if (phase === "deleting") {
      setShowCursor(true)
      if (displayed.length === 0) {
        setPhase("typing_en")
        return
      }
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1))
      }, 80)

    } else if (phase === "typing_en") {
      setShowCursor(true)
      if (displayed === en) {
        setPhase("hold_en")
        return
      }
      timeout = setTimeout(() => {
        setDisplayed(en.slice(0, displayed.length + 1))
      }, 70)

    } else if (phase === "hold_en") {
      setShowCursor(false)
      timeout = setTimeout(() => setPhase("deleting_en"), 3000)

    } else if (phase === "deleting_en") {
      setShowCursor(true)
      if (displayed.length === 0) {
        setPhase("typing_zh")
        return
      }
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1))
      }, 80)

    } else if (phase === "typing_zh") {
      setShowCursor(true)
      if (displayed === zh) {
        setPhase("hold_zh")
        return
      }
      timeout = setTimeout(() => {
        setDisplayed(zh.slice(0, displayed.length + 1))
      }, 100)
    }

    return () => clearTimeout(timeout)
  }, [phase, displayed, zh, en])

  return (
    <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded inline-block">
      {displayed}
      {showCursor && (
        <span className="typewriter-cursor">|</span>
      )}
    </span>
  )
}
