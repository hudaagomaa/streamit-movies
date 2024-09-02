import "./App.css";
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";
import Header from "./components/header/Header";
import SinglePage from "./components/watch/SinglePage"
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <HomePage/>
        <Routes>
        <Route exact path='/' component={HomePage} />
     
        <Route path='/singlepage/:id' component={SinglePage} exact />
   
     </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

///   
