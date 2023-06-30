import './App.css';
import Layout from './components/Layouts/BackgroundShape/Layout.js';
import Footer from './components/Layouts/Pages/Footer/Footer.js';
import Review from './components/Layouts/Pages/Review/Review.js';
import Plan from './components/Layouts/Pages/choosePlans/Plan.js';

function App() {
  return (
    <div className="App">
     <Layout />
     <Plan />
     <Review />
     
     <Footer />
    </div>
  );
}

export default App;
