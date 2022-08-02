import './App.css';
import JSONDATA from './MOCK_DATA.json'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" placeholder='Search...'onChange = {handleChange}/>
      {JSONDATA.filter((element) => {
        if(search === "") {
          return element
        } else if(element.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
          return element
        }
      }).map((val,key) => {
        return (
        <div className='user' key={key}>
          <p>{val.first_name}</p>
        </div>  
      )}
      )}
    </div>
  );
}

export default App;
