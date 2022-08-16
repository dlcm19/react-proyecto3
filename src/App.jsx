
import './App.css'
import Location from './components/Location'
import myHook from './hook/myHook'
import InputSearch from './components/InputSearch'
import ResidentInfo from './components/ResidentInfo'




function App() {

const randomLocation = Math.floor(Math.random() * (126 + 1) -1 )
const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`
const location = myHook(URL)


  return (
    <article className="App">
      <article className='container_input'>
          <div>
            <InputSearch location={location} />
          </div>
          
          <div>
          <Location location={location} />
        </div>
     </article>
     <br />
     <article className='article_App_ResidentInfo'>
     {
          location?.residents.map(url => (
            <ResidentInfo 
             key={url}
             url={url}
            />
            
          ))
        }
     </article>
    </article>
  )
}

export default App
