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
    transform: transform ? CSS.Translate.toString(transform) : undefined,
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
      <img src={item.img} alt={item.name} className="item-image" />
      <p>{item.name}</p>
    </div>
  )
}

const Droppable = ({ name, style, onDrop }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: name,
  })

  return (
    <motion.div
      ref={setNodeRef}
      className="box-container"
      style={{
        ...style,
        backgroundColor: isOver ? "rgba(173, 216, 230, 0.7)" : "white",
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => onDrop(name)}
    >
      <p>{name}</p>
    </motion.div>
  )
}

const NewScene = () => {
  const location = useLocation()
  const [items, setItems] = useState(location.state?.items || []) // Items passed from GameBoard
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [popupMessage, setPopupMessage] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  // Disable scrolling on mobile while dragging
  useEffect(() => {
    document.body.style.overflow = isDragging ? "hidden" : "auto"
    return () => (document.body.style.overflow = "auto")
  }, [isDragging])

  const handleDrop = (boxName) => {
    const currentItem = items[currentItemIndex]
    if (!currentItem) return

    setPopupMessage(`You placed ${currentItem.name} in ${boxName}.`)
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
            name="Box 1"
            style={{ top: "10%", left: "10%", width: "20%", height: "25%" }}
            onDrop={handleDrop}
          />
          <Droppable
            name="Box 2"
            style={{ top: "10%", left: "40%", width: "25%", height: "25%" }}
            onDrop={handleDrop}
          />
          <Droppable
            name="Box 3"
            style={{ top: "10%", left: "75%", width: "15%", height: "30%" }}
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
