
import {Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Main from './Pages/Main/Main';
function App() {
  return (
    <Routes>
    <Route path="/" exact element={<Layout />} />
    <Route path="/main/:id" element={<Main/>} />
  </Routes>
  );
}

export default App;
