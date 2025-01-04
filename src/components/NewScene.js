import React, { useState, useEffect } from "react"
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core"
import { useLocation, useNavigate } from "react-router-dom"
import { CSS } from "@dnd-kit/utilities"
import { motion, AnimatePresence } from "framer-motion"
import "../styles/NewScene.css"

const Draggable = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: item.name,
    })

  const style = {
    transform: CSS.Translate.toString(transform || { x: 0, y: 0 }),
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="current-item"
    >
      <img src={item.img} alt={item.name} />
    </div>
  )
}

const Droppable = ({ name, style, onDrop }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: name,
  })

  const boxImages = {
    Pantry: "/pantry.png",
    Fridge: "/fridge3.png",
    Freezer: "/freezer.png",
    Countertop: "/countertop.png",
  }

  return (
    <motion.div
      ref={setNodeRef}
      className="box-container"
      style={{
        ...style,
        backgroundColor: "transparent",
        backgroundImage: `url(${boxImages[name]})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        cursor: "pointer",
      }}
      animate={isOver ? { scale: 1.1 } : { scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => onDrop(name)}
    />
  )
}

const NewScene = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { items = [], totalPrice = 0 } = location.state || {}
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [popupMessage, setPopupMessage] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [gameOver, setGameOver] = useState(false) // New state for game over popup

  useEffect(() => {
    const handleTouchMove = (e) => {
      if (isDragging) e.preventDefault()
    }
    document.body.style.overflow = isDragging ? "hidden" : "auto"
    window.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [isDragging])

  const handleDrop = (boxName) => {
    const currentItem = items[currentItemIndex]
    if (!currentItem) return

    setPopupMessage(
      `You placed ${currentItem.name} in ${boxName}. ${currentItem.storage_tip}`
    )
    setCurrentItemIndex((prevIndex) => prevIndex + 1)

    // Check if all items have been placed
    if (currentItemIndex + 1 >= items.length) {
      setTimeout(() => {
        setGameOver(true) // Trigger game over popup
      }, 1500)
    } else {
      setTimeout(() => setPopupMessage(null), 1500)
    }
  }

  const handleRestart = () => {
    navigate("/") // Redirect back to the ingredient selection screen
  }

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

  return (
    <DndContext
      onDragStart={() => setIsDragging(true)}
      onDragEnd={({ over }) => {
        setIsDragging(false)
        if (over && currentItemIndex < items.length) {
          handleDrop(over.id)
        }
      }}
    >
      <div className="scene-wrapper">
        {currentItemIndex < items.length && (
          <div className="item-name">
            <p>{capitalizeFirstLetter(items[currentItemIndex].name)}</p>
          </div>
        )}

        <div className="scene-container">
          <div className="backdrop"></div>

          <Droppable
            name="Pantry"
            style={{
              bottom: "30%",
              left: "0%",
              width: "13vw",
              height: "13vw",
            }}
            onDrop={handleDrop}
          />
          <Droppable
            name="Fridge"
            style={{
              bottom: "5%",
              left: "17%",
              width: "30vw",
              height: "30vw",
            }}
            onDrop={handleDrop}
          />
          <Droppable
            name="Freezer"
            style={{
              bottom: "5%",
              left: "50%",
              width: "20vw",
              height: "20vw",
            }}
            onDrop={handleDrop}
          />
          <Droppable
            name="Countertop"
            style={{
              bottom: "0%",
              left: "75%",
              width: "25vw",
              height: "25vw",
            }}
            onDrop={handleDrop}
          />

          {currentItemIndex < items.length && (
            <Draggable item={items[currentItemIndex]} />
          )}

          {/* Overlay Popup */}
          <AnimatePresence>
            {popupMessage && (
              <motion.div
                className="popup-overlay"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="popup-content"
                  initial={{ y: "-50%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-50%", opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <p>{popupMessage}</p>
                </motion.div>
              </motion.div>
            )}

            {/* Game Over Popup */}
            {gameOver && (
              <motion.div
                className="popup-overlay"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="popup-content"
                  initial={{ y: "-50%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-50%", opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <p>All items have been placed!</p>
                  <button onClick={handleRestart}>Restart Game</button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </DndContext>
  )
}

export default NewScene
