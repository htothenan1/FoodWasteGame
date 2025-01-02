import React from "react"
import { useDrag } from "react-dnd"
import "../styles/Basket.css"

const Item = ({ item }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "ITEM",
    item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }

  return (
    <div
      ref={dragRef}
      className="item"
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <img src={item.img} alt={item.name} className="item-image" />
      <p className="item-name">{capitalizeFirstLetter(item.name)}</p>
    </div>
  )
}

export default Item
