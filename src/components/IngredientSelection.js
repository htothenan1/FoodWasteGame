import React, { useState } from "react"
import { Howl } from "howler"
import { useNavigate } from "react-router-dom"
import { ingredients } from "../data/ingredients"
import "../styles/IngredientSelection.css"

const IngredientSelectionScreen = ({ onStartGame }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [totalPrice, setTotalPrice] = useState(0) // State for total price
  const [activeCategory, setActiveCategory] = useState("vegetables")
  const navigate = useNavigate()

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

  const clickSound = new Howl({
    src: ["/sounds/click.wav"],
    volume: 0.5, // Adjust volume (0.0 to 1.0)
  })

  const swishSound = new Howl({
    src: ["/sounds/swish.mp3"],
    volume: 0.5, // Adjust volume (0.0 to 1.0)
  })

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

  const handleRandomize = () => {
    const shuffled = [...ingredients].sort(() => 0.5 - Math.random())
    const randomSelection = shuffled.slice(0, 10)
    setSelectedIngredients(randomSelection)
    const total = randomSelection.reduce(
      (acc, ingredient) => acc + ingredient.price,
      0
    )
    setTotalPrice(total)
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
    <div className="ingredient-selection">
      <div className="header">
        <h1>Choose Up to 10 Foods</h1>
        <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
      </div>
      <div className="button-group">
        <button onClick={handleRandomize} className="randomize-button">
          Randomize Selection
        </button>
        <button
          onClick={handleProceed}
          disabled={selectedIngredients.length === 0}
          className="proceed-button"
        >
          Proceed to Kitchen
        </button>
      </div>
      <div className="ingredient-container">
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
              {/* <p className="price-tag">${ingredient.price.toFixed(2)}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IngredientSelectionScreen
