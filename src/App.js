import React, { useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import IngredientSelection from "./components/IngredientSelection"
import GameBoard from "./components/GameBoard"
import NewScene from "./components/NewScene"

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
    <DndProvider
      backend={isTouchDevice() ? TouchBackend : HTML5Backend} // Dynamically select backend
      options={isTouchDevice() ? { enableMouseEvents: true } : undefined} // Enable mouse events for touch devices
    >
      <Router>
        <Routes>
          {/* Ingredient Selection */}
          <Route
            path="/"
            element={<IngredientSelection onStartGame={handleStartGame} />}
          />

          {/* Game Board */}
          <Route
            path="/game-board"
            element={
              <GameBoard
                selectedIngredients={selectedIngredients}
                totalPrice={totalPrice}
              />
            }
          />

          {/* New Scene */}
          <Route path="/new-scene" element={<NewScene />} />
        </Routes>
      </Router>
    </DndProvider>
  )
}

export default App
