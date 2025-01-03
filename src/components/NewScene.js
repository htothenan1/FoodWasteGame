import React, { useState, useEffect } from "react"
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core"
import { useLocation } from "react-router-dom"
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

  // Map box names to image files stored in the public folder
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
        backgroundColor: "transparent", // Removed blue background change
        backgroundImage: `url(${boxImages[name]})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        cursor: "pointer", // Change cursor when hovering over the box
      }}
      animate={isOver ? { scale: 1.1 } : { scale: 1 }} // Apply scale animation on drop
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => onDrop(name)}
    />
  )
}

const NewScene = () => {
  const location = useLocation()
  const [items, setItems] = useState(location.state?.items || []) // Items passed from GameBoard
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [popupMessage, setPopupMessage] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

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
    setTimeout(() => setPopupMessage(null), 1500)
  }

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
        <div className="scene-container">
          {/* Backdrop */}
          <div className="backdrop"></div>

          {/* Boxes */}
          <Droppable
            name="Pantry"
            style={{
              bottom: "35%",
              left: "0%",
              width: "18vw",
              height: "18vw",
            }}
            onDrop={handleDrop}
          />
          <Droppable
            name="Fridge"
            style={{
              bottom: "10%",
              left: "45%",
              width: "35vw",
              height: "35vw",
            }}
            onDrop={handleDrop}
          />
          <Droppable
            name="Freezer"
            style={{
              bottom: "10%",
              left: "25%",
              width: "20vw",
              height: "20vw",
            }}
            onDrop={handleDrop}
          />

          <Droppable
            name="Countertop"
            style={{
              bottom: "0%",
              left: "80%",
              width: "28vw",
              height: "28vw",
            }}
            onDrop={handleDrop}
          />

          {/* Item display lane */}
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
          </AnimatePresence>

          {/* Message when all items are placed */}
          {currentItemIndex >= items.length && (
            <div className="message">
              <p>All items have been placed!</p>
            </div>
          )}
        </div>
      </div>
    </DndContext>
  )
}

export default NewScene
