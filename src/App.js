import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import viber from './viber.jpg';



function App() {
  
  return  <div className="container">
  <Card heading="The Lion king"
  imgsrc={viber}
  discription="lion king animal describes"
  link="https://www.javatpoint.com/reactjs-tutorial"
  />
  <Card 
  heading="Dark"
  imgsrc={viber}
  discription="this movies is all about past present and future"
  link=""
  />
  <Card />
  <Card />
  <Card />
  
  
  </div>
  
  
}

export default App;
