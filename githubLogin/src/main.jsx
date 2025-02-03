import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  //<StrictMode>//only useful in development mode
    <App />
  //</StrictMode>,    to avoid rerender(twice) that will coz problem in github Auth
  //we get the one time code
  //First Render:we use the one time codde ,and we get an access token
  //Second Render: we use the one time code ,and we get an error from our server sayingthat that code is used
)
