import React, { useState } from 'react'
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
            <div>
                <p>Button clicked {count} times</p>
            </div>
            <button onClick={Add}>Click Me</button>
    </div>
  )
}

export default App
