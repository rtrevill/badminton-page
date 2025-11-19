import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
// import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import LearnToPlay from './pages/LearnToPlay.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong Page!</h1>,
    children: [ 
      {
        index: true,
        element: <Home />
      },
      {
        path: '/learn',
        element: <LearnToPlay />
      }
    ]
  }

])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

