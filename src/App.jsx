import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import DataFetchingComponent from './components/DataFetchingComponent'
import CounterComponent from './components/CounterComponent'
import ButtonComponent from './components/ButtonComponent'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/button" element={<ButtonComponent label="Click Me" onClickHandler={() => alert('Button Clicked!')} />} />
            <Route path="/counter" element={<CounterComponent />} />
            <Route path="/data-fetching" element={<DataFetchingComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App