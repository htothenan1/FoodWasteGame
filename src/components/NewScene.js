import React, { useState, useEffect } from "react"
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core"
import { useLocation, useNavigate } from "react-router-dom"
import { Howl } from "howler"
import { CSS } from "@dnd-kit/utilities"
import { motion, AnimatePresence } from "framer-motion"
import "../styles/NewScene.css"

const correctHomeSound = new Howl({
  src: ["/sounds/ding.wav"],
  volume: 0.5,
})

const incorrectHomeSound = new Howl({
  src: ["/sounds/wrong.mp3"],
})

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
    ></motion.div>
  )
}

const NewScene = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { items = [], totalPrice: initialTotalPrice = 0 } = location.state || {}
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [popupMessage, setPopupMessage] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice)
  const [amountLost, setAmountLost] = useState(0) // To track lost amount

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

  const unCapitalizeFirstLetter = (string) =>
    string.charAt(0).toLowerCase() + string.slice(1).toLowerCase()

  const calculateLossPercentage = () => {
    const percentageLost = (amountLost / initialTotalPrice) * 100
    return percentageLost.toFixed(2)
  }

  const handleDrop = (boxName) => {
    const currentItem = items[currentItemIndex]
    if (!currentItem) return

    if (currentItem.home.includes(boxName)) {
      correctHomeSound.play()
      setPopupMessage([
        `That's correct, ${currentItem.name} can be stored ${
          boxName === "Countertop" ? "on" : "in"
        } the ${unCapitalizeFirstLetter(boxName)}!`,
        `Pro Tip: ${currentItem.storage_tip}`,
      ])
    } else {
      setTotalPrice((prevTotal) => prevTotal - currentItem.price) // Decrease price when incorrect
      setAmountLost((prevLost) => prevLost + currentItem.price) // Track lost amount
      incorrectHomeSound.play()
      setPopupMessage([
        `Oops, wrong choice! You shouldn't store ${currentItem.name} ${
          boxName === "Countertop" ? "on" : "in"
        } the ${unCapitalizeFirstLetter(boxName)}.`,
        `Pro Tip: ${currentItem.storage_tip}`,
      ])
    }

    setPopupVisible(true)
  }

  const handlePopupClick = () => {
    setPopupVisible(false)
    setPopupMessage(null)
    setCurrentItemIndex((prevIndex) => prevIndex + 1)

    if (currentItemIndex + 1 >= items.length) {
      setGameOver(true)
    }
  }

  const handleRestart = () => {
    navigate("/")
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
        {/* Item name is hidden when popup is visible */}
        {currentItemIndex < items.length && !popupVisible && (
          <div className="item-name">
            <p>{capitalizeFirstLetter(items[currentItemIndex].name)}</p>
          </div>
        )}

        <div className="scene-container">
          <div className="backdrop"></div>

          {/* Compartment titles and drop areas */}
          <div className="pantry-name">
            <p>Pantry</p>
          </div>
          <Droppable
            name="Pantry"
            style={{
              bottom: "35%",
              left: "85%",
              width: "13vw",
              height: "13vw",
            }}
            onDrop={handleDrop}
          />
          <div className="fridge-name">
            <p>Fridge</p>
          </div>
          <Droppable
            name="Fridge"
            style={{
              bottom: "5%",
              left: "55%",
              width: "30vw",
              height: "30vw",
            }}
            onDrop={handleDrop}
          />
          <div className="freezer-name">
            <p>Freezer</p>
          </div>
          <Droppable
            name="Freezer"
            style={{
              bottom: "5%",
              left: "35%",
              width: "20vw",
              height: "20vw",
            }}
            onDrop={handleDrop}
          />
          <div className="countertop-name">
            <p>Countertop</p>
          </div>
          <Droppable
            name="Countertop"
            style={{
              bottom: "-5%",
              left: "2%",
              width: "25vw",
              height: "25vw",
            }}
            onDrop={handleDrop}
          />

          {/* Draggable Item */}
          {currentItemIndex < items.length && !popupVisible && (
            <Draggable item={items[currentItemIndex]} />
          )}

          {/* Persistent Popup */}
          <AnimatePresence>
            {popupVisible && (
              <motion.div
                className="popup-overlay"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={handlePopupClick}
              >
                <motion.div
                  className="popup-content"
                  initial={{ y: "-50%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-50%", opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <p>{popupMessage[0]}</p>
                  <p>{popupMessage[1]}</p>
                  <p className="tap-continue">Tap anywhere to continue</p>
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
                onClick={handleRestart}
              >
                <motion.div
                  className="popup-content"
                  initial={{ y: "-50%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-50%", opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <p>All items have been placed!</p>
                  <p>Total Money Lost: ${amountLost.toFixed(2)}</p>
                  <p className="tap-continue">Tap anywhere to restart</p>
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
