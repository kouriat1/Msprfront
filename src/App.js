import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Accueil from './components/Accueil';
import Shop from './components/shop';
import Plantes from './components/mesPlantes';
import Contact from './components/contact';
import MyCamera from './components/camera';
import Detaille from './components/Detaille/detaille';
import Annonce from './components/Annonce/annonce';
import Historique from './components/Historique/historique';


function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
      {user && <Route path='/' exact element={<Login />} />}
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/accueil' exact element={<Accueil />} />
      <Route path='/shop' exact element={<Shop />} />
      <Route path='/mesPlantes' exact element={<Plantes />} />
      <Route path='/contact' exact element={<Contact />} />
      <Route path='/camera' exact element={<MyCamera />} />
      <Route path='/Detaille' exact element={<Detaille />} />
      <Route path='/Annonce' exact element={<Annonce />} />
      <Route path='/Historique' exact element={<Historique />} />


      <Route path='/' exact element={<Login />} />

    </Routes>
  );
}

export default App;
