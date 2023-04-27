import React from 'react'
function Child1(props) {
  console.log("child component")
  return (
    <div>
        <h3>Child component</h3>
    </div>
  )
}

export default React.memo(Child1);