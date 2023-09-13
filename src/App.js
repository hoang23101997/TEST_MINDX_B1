import TodoApp from "./components/TodoApp/TodoApp";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  ); 
}
const Home = () => {
  return (
    <div className="App">
      <div className="container">
        <TodoApp />
      </div>
      <Footer />
    </div>
  );}

export default App;
