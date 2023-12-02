import './App.css'
import Consultoncy from './conponents/Consultoncy'
import Header from './conponents/Header'
import Projects from './conponents/Projects'
import Product_Category from './conponents/Product_Category'
import ReviewSlider from './conponents/ReviewSlider'
import BestOffer from './conponents/BestOffer'



function App() {

  return (
    <>
      <Header></Header>
      <BestOffer></BestOffer>
      <Consultoncy></Consultoncy>
      <Product_Category></Product_Category>
      <Projects></Projects>
      <ReviewSlider></ReviewSlider>
      
    </>
  )
}

export default App
