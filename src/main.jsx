import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './lifecycle/Parent'
import 'antd/dist/reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
