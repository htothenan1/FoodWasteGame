import React, { useState } from "react"
import { Howl } from "howler"
import { useNavigate } from "react-router-dom"
import {
  IconLeaf,
  IconApple,
  IconMeat,
  IconMilk,
  IconGrain,
  IconFish,
  IconNut,
  IconTipJarEuro,
  IconBottle,
  IconPepper,
  IconEggs,
} from "@tabler/icons-react"
import { ingredients } from "../data/ingredients"
import "../styles/IngredientSelection.css"

const clickSound = new Howl({
  src: ["/sounds/click.wav"],
  volume: 0.1,
})

const swishSound = new Howl({
  src: ["/sounds/swish.mp3"],
  volume: 0.1,
})

const categories = [
  { name: "vegetables", icon: <IconLeaf color="white" /> },
  { name: "fruits", icon: <IconApple color="white" /> },
  { name: "meats", icon: <IconMeat color="white" /> },
  { name: "dairy", icon: <IconMilk color="white" /> },
  { name: "grains", icon: <IconGrain color="white" /> },
  { name: "seafoods", icon: <IconFish color="white" /> },
  { name: "legumes", icon: <IconEggs color="white" /> },
  { name: "nuts and seeds", icon: <IconNut color="white" /> },
  { name: "canned goods", icon: <IconTipJarEuro color="white" /> },
  { name: "spices and herbs", icon: <IconPepper color="white" /> },
  { name: "oils", icon: <IconBottle color="white" /> },
]

const IngredientSelectionScreen = ({ onStartGame }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [activeCategory, setActiveCategory] = useState("vegetables")
  const navigate = useNavigate()

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

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

  const handleProceed = () => {
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

  return (
    <div className="scene-wrapper">
      <div className="scene-container">
        <div className="backdrop"></div>

        {/* Title and Total Price */}
        <div className="ingredient-title-container">
          <h1 className="ingredient-title">
            Select up to 10 Ingredients ({selectedIngredients.length})
          </h1>
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
          {/* <p className="total-price">Total: ${totalPrice.toFixed(2)}</p> */}
        </div>

        {/* Category Bar with Icons */}
        <div className="ingredient-categories">
          {categories.map(({ name, icon }) => (
            <div
              key={name}
              className={`category-item ${
                activeCategory.toLowerCase() === name.toLowerCase()
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                clickSound.play()
                setActiveCategory(name)
              }}
            >
              {icon}
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
      </div>
    </div>
  )
}

export default IngredientSelectionScreen
