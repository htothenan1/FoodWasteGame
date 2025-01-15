import React from "react"
import { useNavigate } from "react-router-dom"
import { Howl } from "howler"
import "../styles/LandingPage.css"

const swishSound = new Howl({
  src: ["/sounds/swish.mp3"],
  volume: 0.1,
})

const LandingPage = () => {
  const navigate = useNavigate()

  const handlePlayNow = () => {
    swishSound.play()
    navigate("/level-selection")
  }

  return (
    <div className="scene-wrapper">
      <div className="scene-container">
        {/* Background image managed through CSS */}
        <div className="backdrop"></div>

        {/* Title and Subtitle Container */}
        <div className="landing-title-container">
          <h1 className="landing-title">Ready, Set, Store!</h1>
          <p className="landing-subtitle">A Fun Food Storage Game</p>
        </div>

        {/* Call to Action Button */}
        <button className="play-now-button" onClick={handlePlayNow}>
          Play Now!
        </button>
      </div>
    </div>
  )
}

export default LandingPage
