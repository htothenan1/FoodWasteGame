import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/LevelSelectionScreen.css"
import { IconStar, IconLock } from "@tabler/icons-react"
import { levelData } from "../data/levelData"

const LevelSelectionScreen = () => {
  const navigate = useNavigate()
  const [progress, setProgress] = useState({})

  useEffect(() => {
    const storedProgress =
      JSON.parse(localStorage.getItem("levelProgress")) || {}
    setProgress(storedProgress)
  }, [])

  const isLevelUnlocked = (level) => {
    if (level === 1) return true // Level 1 is always unlocked
    return progress[level - 1] >= 1 // Unlock if previous level has at least 1 star
  }

  const handleLevelSelect = (id) => {
    if (!isLevelUnlocked(id)) return
    const selectedLevel = levelData.find((level) => level.level === id)
    navigate(`/new-scene/`, {
      state: { items: selectedLevel.items, level: id },
    })
  }

  const handleRestart = () => {
    navigate("/")
  }

  return (
    <div className="scene-wrapper">
      <div className="scene-container">
        <div className="backdrop"></div>
        <h1 className="level-title">Select a Level</h1>
        <h1 className="sub-title">
          Gain at least one star to unlock next level
        </h1>

        {/* Quit Button */}
        <button className="quit-button" onClick={handleRestart}>
          Quit Game
        </button>

        {/* Level Grid */}
        <div className="level-grid">
          {levelData.map((level) => (
            <div
              key={level.level}
              className={`level-card ${
                isLevelUnlocked(level.level) ? "unlocked" : "locked"
              }`}
              onClick={() => handleLevelSelect(level.level)}
            >
              <h2>Level {level.level}</h2>
              <div className="stars-container">
                {[...Array(3)].map((_, index) => (
                  <IconStar
                    key={index}
                    fill={
                      index < (progress[level.level] || 0)
                        ? "#FFD700"
                        : "#D3D3D3"
                    }
                    color={
                      index < (progress[level.level] || 0)
                        ? "#FFD700"
                        : "#D3D3D3"
                    }
                  />
                ))}
              </div>
              {!isLevelUnlocked(level.level) && <IconLock size={48} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LevelSelectionScreen
