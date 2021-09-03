import React from 'react'
import ReactDOM from 'react-dom'

const AppContainer = (props) => {
  const {text} = props;
  return (
    <div className="container-fluid">
      <div className="flex bg-gray-100 py-24 justify-center">
          <div className="p-12 text-center max-w-2xl">
              <div className="md:text-3xl text-3xl font-bold">Want to discover more ?</div>
              <div className="text-xl font-normal mt-4">{text}
              </div>
              <div className="mt-6 flex justify-center h-12 relative">
                  <div className="flex shadow-md font-medium absolute py-2 px-4 text-green-100
              cursor-pointer bg-green-600 rounded text-lg tr-mt  svelte-jqwywd">Try it now</div>
              </div>
          </div>
      </div>
    </div>
  )
}

const App = document.getElementById('app')
ReactDOM.render(<AppContainer text="Testing React with Parcel"/>, App)
