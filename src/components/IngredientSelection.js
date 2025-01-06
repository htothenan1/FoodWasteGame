import React, { useState } from "react"
import { Howl } from "howler"
import { useNavigate } from "react-router-dom"
import { ingredients } from "../data/ingredients"
import "../styles/IngredientSelection.css"

const clickSound = new Howl({
  src: ["/sounds/click.wav"],
  volume: 0.5,
})

const swishSound = new Howl({
  src: ["/sounds/swish.mp3"],
  volume: 0.5,
})

const IngredientSelectionScreen = ({ onStartGame }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [activeCategory, setActiveCategory] = useState("vegetables")
  const navigate = useNavigate()

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

  const toggleIngredient = (ingredient) => {
    const isSelected = selectedIngredients.includes(ingredient)

    if (isSelected) {
      setSelectedIngredients((prev) =>
        prev.filter((item) => item !== ingredient)
      )
      clickSound.play()
      setTotalPrice((prevTotal) => prevTotal - ingredient.price)
    } else if (selectedIngredients.length < 10) {
      setSelectedIngredients((prev) => [...prev, ingredient])
      clickSound.play()
      setTotalPrice((prevTotal) => prevTotal + ingredient.price)
    }
  }

  const handleProceed = () => {
    swishSound.play()
    navigate("/new-scene", {
      state: {
        items: selectedIngredients,
        totalPrice: totalPrice,
      },
    })
  }

  const filteredIngredients = ingredients.filter(
    (ingredient) =>
      ingredient.category.toLowerCase() === activeCategory.toLowerCase()
  )

  const categories = Array.from(
    new Set(
      ingredients.map((ingredient) =>
        capitalizeFirstLetter(ingredient.category)
      )
    )
  )

  return (
    <div className="scene-wrapper">
      {/* Main container with consistent aspect ratio and background */}
      <div className="scene-container">
        <div className="backdrop"></div>

        {/* Title and Total Price */}
        <div className="ingredient-title-container">
          <h1 className="ingredient-title">Select Your Ingredients</h1>
          <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
        </div>

        {/* Category Bar */}
        <div className="ingredient-categories">
          {categories.map((category) => (
            <div
              key={category}
              className={`category-item ${
                activeCategory.toLowerCase() === category.toLowerCase()
                  ? "active"
                  : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Ingredient Grid */}
        <div className="ingredient-list">
          {filteredIngredients.map((ingredient) => (
            <div
              key={ingredient.item_id}
              className={`ingredient-item ${
                selectedIngredients.includes(ingredient) ? "selected" : ""
              }`}
              onClick={() => toggleIngredient(ingredient)}
            >
              <img src={ingredient.img} alt={ingredient.name} />
              <p>{capitalizeFirstLetter(ingredient.name)}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="button-group">
          <button onClick={() => navigate("/")} className="randomize-button">
            Back to Home
          </button>
          <button
            onClick={handleProceed}
            disabled={selectedIngredients.length === 0}
            className="proceed-button"
          >
            Proceed to Kitchen
          </button>
        </div>
      </div>
    </div>
  )
}

export default IngredientSelectionScreen
