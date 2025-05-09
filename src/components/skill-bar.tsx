"use client"

import { useEffect, useState } from "react"

interface SkillBarProps {
  skill: string
  level: number
}

export function SkillBar({ skill, level }: SkillBarProps) {
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    // Animation à l'apparition
    const timer = setTimeout(() => {
      setWidth(level)
    }, 300)
    return () => clearTimeout(timer)
  }, [level])
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-200">{skill}</span>
        <span className="text-pink-400">{level}%</span>
      </div>
      <div className="w-full bg-zinc-800 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-pink-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  )
}