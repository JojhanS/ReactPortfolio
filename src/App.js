import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Project from './components/project';
import Footer from './components/footer';
import Nav from './components/navigation';

const App = () => {
  return(
      <div>
          <Header/>
          <Nav />
          <Project />
          <Footer />
      </div>
  );
};


export default App;
