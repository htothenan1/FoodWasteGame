import React from "react"
import { useDrag } from "react-dnd"
import "../styles/Basket.css"

const Basket = ({ emoji }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "ITEM",
    item: { emoji },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div
      ref={dragRef}
      className="item"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: isDragging ? "pointer" : "pointer", // Dynamically change the cursor
      }}
    >
      {emoji}
    </div>
  )
}

export default Basket
