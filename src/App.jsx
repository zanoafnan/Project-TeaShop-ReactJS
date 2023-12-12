import React from "react"
import NavBar from "./components/NavBar"
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Product from "./components/Product";
import Review from "./components/Review";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      < NavBar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="products">
          <Product />
        </div>

        

        <div id="review">
          <Review />
        </div>

        <div id="about">
          <About />
        </div>
      </main>

      <Footer />
    </div>

  )
}

export default App