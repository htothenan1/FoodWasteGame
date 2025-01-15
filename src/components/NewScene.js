import React, { useState, useEffect } from "react"
import { useWindowSize } from "react-use"
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core"
import { useLocation, useNavigate } from "react-router-dom"
import { Howl } from "howler"
import { CSS } from "@dnd-kit/utilities"
import { IconCheck, IconX } from "@tabler/icons-react"
import { motion, AnimatePresence } from "framer-motion"
import Confetti from "react-confetti" // Importing confetti effect
import "../styles/NewScene.css"

const correctHomeSound = new Howl({
  src: ["/sounds/ding.wav"],
  volume: 0.1,
})

const incorrectHomeSound = new Howl({
  src: ["/sounds/wrong.mp3"],
  volume: 0.1,
})

const gameStartSound = new Howl({
  src: ["/sounds/start.wav"],
  volume: 0.2,
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

const Droppable = ({ name, style, onDrop, onTextClick }) => {
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
    <>
      {/* Clickable Text */}
      <motion.p
        className={`${name.toLowerCase()}-name`}
        onClick={() => onDrop(name)}
      >
        {name}
      </motion.p>

      {/* Drop Zone */}
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
    </>
  )
}

const NewScene = () => {
  const { width } = useWindowSize() // This dynamically gets the screen size
  const location = useLocation()
  const navigate = useNavigate()
  const {
    items = [],
    level,
    totalPrice: initialTotalPrice = 0,
  } = location.state || {}
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [popupMessage, setPopupMessage] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice)
  const [amountLost, setAmountLost] = useState(0) // To track lost amount
  const [correctItemsCount, setCorrectItemsCount] = useState(0) // New State to Track Correct Items
  const [showConfetti, setShowConfetti] = useState(false) // For confetti trigger

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

  useEffect(() => {
    gameStartSound.play()
  }, [])

  // const unCapitalizeFirstLetter = (string) =>
  //   string.charAt(0).toLowerCase() + string.slice(1).toLowerCase()

  // const calculateLossPercentage = () => {
  //   const percentageLost = (amountLost / initialTotalPrice) * 100
  //   return percentageLost.toFixed(2)
  // }

  const handleDrop = (boxName) => {
    const currentItem = items[currentItemIndex]
    if (!currentItem) return

    if (currentItem.home.includes(boxName)) {
      correctHomeSound.play()
      setCorrectItemsCount((prevCount) => prevCount + 1) // Count Correct Items
      setPopupMessage([
        `That's correct!`,
        `Pro Tip: ${currentItem.storage_tip}`,
      ])
    } else {
      setTotalPrice((prevTotal) => prevTotal - currentItem.price) // Decrease price when incorrect
      setAmountLost((prevLost) => prevLost + currentItem.price) // Track lost amount
      incorrectHomeSound.play()
      setPopupMessage([
        `Oops, wrong choice!`,
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
      if (correctItemsCount === 10) {
        setShowConfetti(true) // Trigger confetti if perfect score
      }
    }
  }

  const handleRestart = () => {
    navigate("/")
  }

  const handleContinue = () => {
    if (correctItemsCount >= 8) {
      const starsEarned =
        correctItemsCount === 10 ? 3 : correctItemsCount === 9 ? 2 : 1
      const storedProgress =
        JSON.parse(localStorage.getItem("levelProgress")) || {}
      storedProgress[level] = Math.max(starsEarned, storedProgress[level] || 0)
      localStorage.setItem("levelProgress", JSON.stringify(storedProgress))
    }
    navigate("/level-selection")
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
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti numberOfPieces={400} width={width} recycle={false} />
      )}

      <div className="scene-wrapper">
        <div className="scene-container">
          <div className="backdrop"></div>
          {currentItemIndex < items.length && !popupVisible && (
            <div className="item-name">
              <p>{capitalizeFirstLetter(items[currentItemIndex].name)}</p>
            </div>
          )}
          <div className="instructions">
            <p>Drag each item into its correct home</p>
          </div>

          {/* Quit Button - Fixed in Top Right Corner */}
          <button className="quit-button" onClick={handleRestart}>
            Quit Game
          </button>

          {/* Compartment titles and drop areas */}
          {/* <div className="pantry-name">
            <p>Pantry</p>
          </div> */}
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
          {/* <div className="fridge-name">
            <p>Fridge</p>
          </div> */}
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
          {/* <div className="freezer-name">
            <p>Freezer</p>
          </div> */}
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
          {/* <div className="countertop-name">
            <p>Countertop</p>
          </div> */}
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
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {popupMessage[0] === `That's correct!` ? (
                      <IconCheck color="black" />
                    ) : (
                      <IconX color="black" />
                    )}
                    <p className="success-title">{popupMessage[0]}</p>
                  </div>
                  <p className="storage-tip">{popupMessage[1]}</p>
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
                onClick={handleContinue}
              >
                <motion.div className="popup-content">
                  <p>{`${
                    correctItemsCount > 7 ? "Nice Job!" : "Not quite!"
                  } You got ${correctItemsCount} out of ${
                    items.length
                  } correct${correctItemsCount > 7 ? "!" : "."}`}</p>
                  <p>Total Money Lost: ${amountLost.toFixed(2)}</p>
                  <p className="tap-continue">Tap anywhere to continue</p>
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
