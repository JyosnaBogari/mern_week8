import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterContextProvider from './contexts/CounterContextProvider.jsx'
import UserContextProvider from './contexts/UserContextProvider.jsx'

createRoot(document.getElementById('root')).render(

    // wrap root component with provider
    // the components which are connected to the "App" can be used the contexts
    <UserContextProvider>
    <CounterContextProvider>
    <App />
    </CounterContextProvider>
    </UserContextProvider>
)
