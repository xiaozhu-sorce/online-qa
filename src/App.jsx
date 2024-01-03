import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router'
import LoginPage from './pages/auth/login'
import Home from './pages/home'
import Password from './pages/auth/password'
import ProfileEdit from './pages/auth/profileEdit'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/admin' element={<Home />}>
        {/* <Route path='user' element={<User />} />
        <Route path='book' element={<Book />} />
        <Route path='history' element={<History />} /> */}
      </Route>
      <Route path='/user' element={<Password />}>
      
        {/* <Route path='mybook' element={<Mybook />} />
        <Route path='books' element={<BookList />} /> */}
      </Route>
    </Routes>
  )
}

export default Router
