import React from 'react'
import ReactDOM from 'react-dom'

const AppContainer = (props) => {
  const {text} = props;
  return (
    <div className="container">
      <p>{text}</p>
    </div>
  )
}

const App = document.getElementById('app')
ReactDOM.render(<AppContainer text="Testing React with Parcel"/>, App)
