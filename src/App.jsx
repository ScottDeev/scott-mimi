import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./TeamProj/pages/SignIn"
import SignUp from "./TeamProj/pages/SignUp"

function App() {

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <SignUp/>
          }/>
          <Route path="/signin" element={
            <SignIn/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
