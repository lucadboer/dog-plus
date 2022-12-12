import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [dog, setDog] = useState('')

  async function getDog() {
    const dogImage = await axios.get('https://dog.ceo/api/breeds/image/random')
    const data = await dogImage.data
    setDog(data.message)
  }

  console.log(dog);
  

  return (
    <div className="App">
      <h2>Clique abaixo para gerar um doguinho aleatório</h2>
      <div className="card">
        <button onClick={getDog}>
          Gerar doguinho
        </button>
        <img src={dog} alt="" />
      </div>
    </div>
  )
}

export default App
