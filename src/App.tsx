import { Box } from '@chakra-ui/react';
import Header from './components/header';
import './App.css';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
