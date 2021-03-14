
import './App.css';
import NavBar from "./components/NavBar";
import  ItemListContainer from "./components/ItemListContainer";
import { useFetchProducts } from './hooks/useFetchProducts';

function App() {

  const greeting = 'Ofertas imperdibles!';

  const { data:products } = useFetchProducts();

  return (    
      <div className="container-fluid">  
        <NavBar />
        <ItemListContainer greeting={greeting} items={products}/>        
      </div>    
  );
}

export default App;
