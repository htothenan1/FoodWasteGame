import React, { useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { AnimatePresence, motion } from "framer-motion"
import GameBoard from "./components/GameBoard"
import IngredientSelection from "./components/IngredientSelection"

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [totalPrice, setTotalPrice] = useState(0) // State for total price
  const [showGameBoard, setShowGameBoard] = useState(false)
  const [isInitialRender, setIsInitialRender] = useState(true) // Flag to track initial render

  const handleStartGame = ({ ingredients, totalPrice }) => {
    setSelectedIngredients(ingredients)
    setTotalPrice(totalPrice) // Set total price from IngredientSelection
    setShowGameBoard(true)
    setIsInitialRender(false) // Set flag to false after first interaction
  }

  // Slide-in/out animation variants
  const pageVariants = {
    hidden: { x: "100vw", opacity: 0 }, // Starts off-screen to the right
    visible: { x: 0, opacity: 1 }, // Moves to the center of the screen
    exit: { x: "-100vw", opacity: 0 }, // Exits off-screen to the left
  }

  const pageTransition = { type: "tween", duration: 0.6 }

  return (
    <DndProvider backend={HTML5Backend}>
      <AnimatePresence mode="wait">
        {showGameBoard ? (
          <motion.div
            key="gameBoard"
            initial={isInitialRender ? {} : "hidden"} // No animation on initial render
            animate="visible"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <GameBoard
              selectedIngredients={selectedIngredients}
              totalPrice={totalPrice} // Pass total price to GameBoard
            />
          </motion.div>
        ) : (
          <motion.div
            key="ingredientSelection"
            initial={isInitialRender ? {} : "hidden"} // No animation on initial render
            animate="visible"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <IngredientSelection onStartGame={handleStartGame} />
          </motion.div>
        )}
      </AnimatePresence>
    </DndProvider>
  )
}

export default App
