
import './App.css'
import NavBar from './components/NavBar'
import MoodFilter from './components/MoodFilter'
import Footer from './components/Footer';
import ContentList from './components/ContentList'
import ContentContainer from './components/ContentContainer';

function App() {
 

  return (
    <>
    <NavBar/>
    <ContentList/>
    <MoodFilter/>
    <Footer/>
    <ContentContainer/> 
    </>
  )
}

export default App
