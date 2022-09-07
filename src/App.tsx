import { Box } from '@chakra-ui/react';
import Header from './components/header';
import './App.css';
import Pricing from './components/Pricing';
import { Features } from './components/Features';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Pricing></Pricing>
      <Features></Features>
    </div>
  );
}

export default App;
