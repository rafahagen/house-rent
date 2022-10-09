
import { useEffect } from 'react';
import Navbar from './component/Navbar/Navbar';

function App() {
  const url = "https://raw.githubusercontent.com/mostakshahariyar/crouse_data/main/crouse.JSON"
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
