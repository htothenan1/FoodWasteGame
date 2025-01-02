import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import "../styles/NewScene.css"

const NewScene = () => {
  const location = useLocation()
  const [items, setItems] = useState(location.state?.items || [])
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [boxContents, setBoxContents] = useState({
    box1: [],
    box2: [],
    box3: [],
  })

  const handleBoxTap = (boxName) => {
    if (currentItemIndex < items.length) {
      const placedItem = items[currentItemIndex]

      // Add the item to the tapped box
      setBoxContents((prevContents) => ({
        ...prevContents,
        [boxName]: [...prevContents[boxName], placedItem],
      }))

      // Move to the next item
      setCurrentItemIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <div className="scene-wrapper">
      <div className="scene-container">
        {/* Backdrop */}
        <div className="backdrop"></div>

        {/* Boxes */}
        <div
          className="box-container"
          style={{ top: "20%", left: "10%", width: "20%", height: "30%" }}
          onClick={() => handleBoxTap("box1")}
        >
          <p>Box 1</p>
          <ul>
            {boxContents.box1.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>

        <div
          className="box-container"
          style={{ top: "50%", left: "40%", width: "25%", height: "25%" }}
          onClick={() => handleBoxTap("box2")}
        >
          <p>Box 2</p>
          <ul>
            {boxContents.box2.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>

        <div
          className="box-container"
          style={{ top: "30%", left: "75%", width: "15%", height: "40%" }}
          onClick={() => handleBoxTap("box3")}
        >
          <p>Box 3</p>
          <ul>
            {boxContents.box3.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>

        {/* Display the current item */}
        {currentItemIndex < items.length && (
          <div className="current-item">
            <p>{items[currentItemIndex].name}</p>
          </div>
        )}

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
