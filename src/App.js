import './App.css';
import Navbar from './Components/Navbar';
import TextFormsid from './Components/TextForm'

function App() {
  return (
    <>
      <Navbar title='TextUtil' about='About Us' />
      <div className="container my-3">
        <TextFormsid heading="Enter the text to analyze"/>  
      </div>
      
    </>
  );
}

export default App;
