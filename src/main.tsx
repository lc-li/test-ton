// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

const manifestUrl = "https://lc-li.github.io/test-ton/tonconnect-mainfest.json"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>
);
