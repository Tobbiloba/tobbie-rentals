// import './App.css';
import MenuBar from './components/MenuBar';
import HomePage from './components/HomePage';
import ReasonsWhy from './components/ReasonsWhy';
import SelectRide from './components/SelectRide';
import Steps from './components/Steps';
import CustomerReview from './components/CustomerReview';
import Footer from './components/Footer';


function App() {
  return (
    // <div className=''>

    <div className='w-[100vw] overflow-x-hidden'>
      <MenuBar />
      <HomePage />
      <ReasonsWhy />
      <SelectRide />
      <Steps />
      <CustomerReview />
      <Footer />

    </div>

    // </div>
  );
}

export default App;
