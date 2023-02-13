import logo from './logo.svg';
import './App.css';

import { ImagesProvider } from './context/images.provider';
import { LoaderProvider } from './context/loader.provider';
import  Images  from './components/images-grid/Images';

function App() {
  return (
    <LoaderProvider>
      <ImagesProvider>
        <Images />
      </ImagesProvider>
    </LoaderProvider>

  );
}

export default App;
