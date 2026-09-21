import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {TaskContextProvider} from './context/Context'
import { I18nProvider } from './i18n/I18nContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <I18nProvider>
    <TaskContextProvider>
            <App />
    </TaskContextProvider>
    </I18nProvider>
)
