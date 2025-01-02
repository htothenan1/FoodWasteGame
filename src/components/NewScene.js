import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useDrag, useDrop } from "react-dnd"
import "../styles/NewScene.css"

const NewScene = () => {
  const location = useLocation()
  const [items, setItems] = useState(location.state?.items || [])
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [popupMessage, setPopupMessage] = useState(null)

  const handleDrop = (boxName) => {
    const currentItem = items[currentItemIndex]
    if (!currentItem) return

    // Show the overlay message
    setPopupMessage(`You placed ${currentItem.name} in ${boxName}.`)

    // Move to the next item
    setCurrentItemIndex((prevIndex) => prevIndex + 1)

    // Clear the message after a short delay
    setTimeout(() => setPopupMessage(null), 1500)
  }

  const Box = ({ name, style }) => {
    const [{ isOver }, dropRef] = useDrop({
      accept: "ITEM",
      drop: () => handleDrop(name),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    })

    return (
      <motion.div
        ref={dropRef}
        className="box-container"
        style={{
          ...style,
          backgroundColor: isOver ? "rgba(173, 216, 230, 0.7)" : "white",
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => handleDrop(name)} // Allow clicking to place the item
      >
        <p>{name}</p>
      </motion.div>
    )
  }

  const Item = ({ item }) => {
    const [{ isDragging }, dragRef] = useDrag({
      type: "ITEM",
      item: { name: item.name },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    })

    return (
      <div
        ref={dragRef}
        className="current-item"
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: "grab",
        }}
      >
        <img src={item.img} alt={item.name} className="item-image" />
        <p>{item.name}</p>
      </div>
    )
  }

  return (
    <div className="scene-wrapper">
      <div className="scene-container">
        {/* Backdrop */}
        <div className="backdrop"></div>

        {/* Boxes */}
        <Box
          name="Box 1"
          style={{ top: "10%", left: "10%", width: "20%", height: "25%" }}
        />
        <Box
          name="Box 2"
          style={{ top: "10%", left: "40%", width: "25%", height: "25%" }}
        />
        <Box
          name="Box 3"
          style={{ top: "10%", left: "75%", width: "15%", height: "30%" }}
        />

        {/* Item display lane */}
        {currentItemIndex < items.length && (
          <Item item={items[currentItemIndex]} />
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
  )
}

export default NewScene
