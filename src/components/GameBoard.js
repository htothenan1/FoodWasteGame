import React, { useState, useEffect } from "react"
import { useDrop } from "react-dnd"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Howl } from "howler"
import Item from "./Item"
import "../styles/GameBoard.css"

const Section = ({ name, imageSrc, onDrop, showSparkles, setShowSparkles }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: "ITEM",
    drop: (item) => {
      onDrop(item, name)
      setShowSparkles(true)
      setTimeout(() => setShowSparkles(false), 500) // Sparkles last for 500ms
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })

  return (
    <motion.div
      ref={dropRef}
      className="section"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
      whileHover={{ scale: 1.1 }}
      animate={{
        scale: isOver ? 1.15 : 1,
        transition: { duration: 0.2 },
      }}
    >
      <AnimatePresence>
        {showSparkles && (
          <motion.div
            className="sparkles"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            ✨
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const GameBoard = ({ selectedIngredients, totalPrice }) => {
  const [domains, setDomains] = useState({
    "Crisper Drawer": [],
    "Bottom Drawer": [],
    "Door Shelves Left": [],
    "Door Shelves Right": [],
    "Top Shelves": [],
    Freezer: [],
    Pantry: [],
    Countertop: [],
  })

  const [basket, setBasket] = useState(selectedIngredients) // Use the ingredients array
  const [showGameOver, setShowGameOver] = useState(false)
  const [popupMessage, setPopupMessage] = useState(null) // Store the popup message
  const navigate = useNavigate()

  const [sparkles, setSparkles] = useState({})

  const onReturnToSelection = () => {
    navigate("/")
  }

  const placeItemSound = new Howl({
    src: ["/sounds/ding.wav"],
    volume: 0.5, // Adjust volume (0.0 to 1.0)
  })

  const handleDrop = (item, domainName) => {
    setDomains((prevState) => ({
      ...prevState,
      [domainName]: [...prevState[domainName], item],
    }))

    setBasket((prevBasket) =>
      prevBasket.filter((b) => b.item_id !== item.item_id)
    )

    // Play sound effect for item placement
    placeItemSound.play()

    // Set a dummy popup message
    setPopupMessage(
      `You placed ${item.name} in the ${domainName}. ${item.storage_tip}`
    )
  }

  // Check if the basket is empty and show the "Game Over" message
  // useEffect(() => {
  //   if (basket.length === 0) {
  //     setShowGameOver(true)
  //   }
  // }, [basket])

  return (
    <div className="game-container">
      <div className="game-title">
        <h1>Place your items correctly</h1>
        <p>Total: ${totalPrice.toFixed(2)}</p>
        <button
          onClick={() =>
            navigate("/new-scene", {
              state: { items: selectedIngredients },
            })
          }
        >
          Go to New Scene
        </button>
      </div>

      {/* Overlay Popup */}
      {popupMessage && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0, scale: 0.8 }} // Start transparent and slightly smaller
          animate={{ opacity: 1, scale: 1 }} // Animate to fully visible and normal size
          exit={{ opacity: 0, scale: 0.8 }} // Exit with fade and shrink
          transition={{ duration: 0.3, ease: "easeOut" }} // Smooth easing
        >
          <motion.div
            className="popup-content"
            initial={{ y: "-100%", opacity: 0 }} // Slide in from top
            animate={{ y: "0%", opacity: 1 }} // Slide to position with opacity
            exit={{ y: "-100%", opacity: 0 }} // Slide out upwards
            transition={{ duration: 0.3, ease: "easeOut" }} // Smooth easing
          >
            <p>{popupMessage}</p>
            {basket.length === 0 ? (
              <button
                className="popup-button"
                onClick={() => {
                  setPopupMessage(null)
                  setShowGameOver(true)
                }}
              >
                Got it!
              </button>
            ) : (
              <button
                className="popup-button"
                onClick={() => setPopupMessage(null)}
              >
                Got it!
              </button>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Game Over Popup */}
      {showGameOver && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0, scale: 0.8 }} // Start transparent and slightly smaller
          animate={{ opacity: 1, scale: 1 }} // Animate to fully visible and normal size
          exit={{ opacity: 0, scale: 0.8 }} // Exit with fade and shrink
          transition={{ duration: 0.3, ease: "easeOut" }} // Smooth easing
        >
          <motion.div
            className="popup-content"
            initial={{ y: "-100%", opacity: 0 }} // Slide in from top
            animate={{ y: "0%", opacity: 1 }} // Slide to position with opacity
            exit={{ y: "-100%", opacity: 0 }} // Slide out upwards
            transition={{ duration: 0.3, ease: "easeOut" }} // Smooth easing
          >
            <h2>Game Over!</h2>
            <p>All items have been placed. Try playing again with new items!</p>
            <button className="popup-button" onClick={onReturnToSelection}>
              Restart Game
            </button>
          </motion.div>
        </motion.div>
      )}

      <div className="game-board">
        {/* Pantry */}
        <div className="pantry">
          <Section
            name="Pantry"
            imageSrc="/pantry.png"
            onDrop={handleDrop}
            showSparkles={sparkles.Pantry}
            setShowSparkles={(value) =>
              setSparkles((prev) => ({ ...prev, Pantry: value }))
            }
          />
        </div>
        {/* Fridge/Freezer */}
        <div className="fridge-freezer">
          <div className="fridge">
            <div className="fridge-door-left">
              <Section
                name="Door Shelves Left"
                imageSrc="/left.png"
                onDrop={handleDrop}
                showSparkles={sparkles["Door Shelves Left"]}
                setShowSparkles={(value) =>
                  setSparkles((prev) => ({
                    ...prev,
                    "Door Shelves Left": value,
                  }))
                }
              />
            </div>
            <div className="fridge-main">
              <div className="shelves">
                <Section
                  name="Top Shelves"
                  imageSrc="/shelves.png"
                  onDrop={handleDrop}
                  showSparkles={sparkles["Top Shelves"]}
                  setShowSparkles={(value) =>
                    setSparkles((prev) => ({ ...prev, "Top Shelves": value }))
                  }
                />
              </div>
              <div className="crisper">
                <Section
                  name="Crisper Drawer"
                  imageSrc="/crisper.png"
                  onDrop={handleDrop}
                  showSparkles={sparkles["Crisper Drawer"]}
                  setShowSparkles={(value) =>
                    setSparkles((prev) => ({
                      ...prev,
                      "Crisper Drawer": value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="fridge-door-right">
              <Section
                name="Door Shelves Right"
                imageSrc="/right.png"
                onDrop={handleDrop}
                showSparkles={sparkles["Door Shelves Right"]}
                setShowSparkles={(value) =>
                  setSparkles((prev) => ({
                    ...prev,
                    "Door Shelves Right": value,
                  }))
                }
              />
            </div>
          </div>
          <div className="freezer">
            <Section
              name="Freezer"
              imageSrc="/freezer.png"
              onDrop={handleDrop}
              showSparkles={sparkles.Freezer}
              setShowSparkles={(value) =>
                setSparkles((prev) => ({ ...prev, Freezer: value }))
              }
            />
          </div>
        </div>

        {/* Countertop */}
        <div className="countertop">
          <Section
            name="Countertop"
            imageSrc="/countertop.png"
            onDrop={handleDrop}
            showSparkles={sparkles["Countertop"]}
            setShowSparkles={(value) =>
              setSparkles((prev) => ({ ...prev, Countertop: value }))
            }
          />
        </div>
      </div>

      {/* Basket */}
      <div className="basket">
        {basket.map((item) => (
          <Item key={item.item_id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default GameBoard
