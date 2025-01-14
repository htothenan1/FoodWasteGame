import React, { useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import LandingPage from "./components/LandingPage"
import IngredientSelection from "./components/IngredientSelection"
import GameBoard from "./components/GameBoard"
import NewScene from "./components/NewScene"
import "./styles/App.css"

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  // Check for touch support
  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    )
  }

  const handleStartGame = ({ ingredients, totalPrice }) => {
    setSelectedIngredients(ingredients)
    setTotalPrice(totalPrice)
  }

  return (
    <>
      {/* Rotate Phone Warning Overlay */}
      <div className="rotate-overlay">
        <img
          src="/assets/air_art.png"
          alt="Rotate your phone"
          className="rotate-icon"
        />
        <p>Please rotate your device to landscape mode!</p>
      </div>

      <DndProvider
        backend={isTouchDevice() ? TouchBackend : HTML5Backend}
        options={isTouchDevice() ? { enableMouseEvents: true } : undefined}
      >
        <Router>
          <Analytics />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/ingredient-selection"
              element={<IngredientSelection onStartGame={handleStartGame} />}
            />
            <Route
              path="/game-board"
              element={
                <GameBoard
                  selectedIngredients={selectedIngredients}
                  totalPrice={totalPrice}
                />
              }
            />
            <Route path="/new-scene" element={<NewScene />} />
          </Routes>
        </Router>
      </DndProvider>
    </>
  )
}

export default App
