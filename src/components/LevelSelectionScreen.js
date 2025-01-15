import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/LevelSelectionScreen.css"
import { IconStar } from "@tabler/icons-react"
import { levelData } from "../data/levelData"

const LevelSelectionScreen = () => {
  const navigate = useNavigate()
  const [progress, setProgress] = useState({})

  useEffect(() => {
    const storedProgress =
      JSON.parse(localStorage.getItem("levelProgress")) || {}
    setProgress(storedProgress)
  }, [])

  const handleLevelSelect = (id) => {
    const selectedLevel = levelData.find((level) => level.level === id)
    navigate(`/new-scene/`, {
      state: { items: selectedLevel.items, level: id },
    })
  }

  return (
    <div className="scene-wrapper">
      <div className="scene-container">
        <div className="backdrop"></div>
        <h1 className="level-title">Select a Level</h1>
        <div className="level-grid">
          {levelData.map((level) => (
            <div
              onClick={() => handleLevelSelect(level.level)}
              key={level.level}
              className="level-card"
            >
              <h2>Level {level.level}</h2>
              <div className="stars-container">
                {[...Array(3)].map((_, index) => (
                  <IconStar
                    key={index}
                    color={
                      index < (progress[level.level] || 0)
                        ? "#FFD700"
                        : "#D3D3D3"
                    }
                  />
                ))}
              </div>
              {/* <button
                className="play-button"
                onClick={() => handleLevelSelect(level.level)}
              >
                Play Level {level.level}
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LevelSelectionScreen
