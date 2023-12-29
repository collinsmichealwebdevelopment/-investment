import  ReactDOM  from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './shared/UserReducer'
import { Toaster } from './components/ui/toaster'

const store = configureStore({
    reducer: {
        users: UserReducer
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    <Toaster />
    </Provider>
    </BrowserRouter>
)