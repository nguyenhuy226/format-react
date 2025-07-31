import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@ant-design/v5-patch-for-react-19';
import '@/assets/tailwind.css'
// import { Provider } from 'react-redux'
import { Provider } from 'react-redux';
import { store } from '@/stories'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </StrictMode>
  ,
)
