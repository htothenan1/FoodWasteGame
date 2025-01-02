import React from "react"
import "../styles/NewScene.css"

const NewScene = () => {
  return (
    <div className="scene-wrapper">
      {/* Scene Container */}
      <div className="scene-container">
        {/* Backdrop */}
        <div className="backdrop"></div>

        {/* Container 1 */}
        <div
          className="box-container"
          style={{ top: "20%", left: "10%", width: "20%", height: "30%" }}
        >
          <p>Box 1</p>
        </div>

        {/* Container 2 */}
        <div
          className="box-container"
          style={{ top: "50%", left: "40%", width: "25%", height: "25%" }}
        >
          <p>Box 2</p>
        </div>

        {/* Container 3 */}
        <div
          className="box-container"
          style={{ top: "30%", left: "75%", width: "15%", height: "40%" }}
        >
          <p>Box 3</p>
        </div>
      </div>
    </div>
  )
}

export default NewScene
