
import './App.css';
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {

  const greeting = 'Ofertas imperdibles!';  

  return (  
      <div className="container-fluid">  
        <NavBar />
        <ItemListContainer greeting={greeting}/>             
      </div>    
  );
}

export default App;
