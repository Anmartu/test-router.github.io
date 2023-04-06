import { Link, Routes, Route } from 'react-router-dom'
import './App.css'

const arr = ['Collections','Projects', 'About', 'Process', 'Contact']
const arrCD = ['O1','O2','O3','O4']
const arrPD = ['P1','P2','P3','P4','P5','P6']


const Home = () => <h1>Home</h1>
const CollectionDetail = () => <h1>Collection Detail</h1>
const ProjectDetail = () => <h1>Project Detail</h1>

const Projects = () => {
  if (window.location.pathname == '/Projects'){
  return (
    <>
  <h1>Projects</h1>
  {arrCD.map(col => 
    <li key={col}><Link to={`/Collections/${col}`}>{col}</Link></li>
    )}
    </>
  )
} else {
  return <h1>Projects</h1>
}
}
console.log(window.location.pathname)

function App() {


  return (
    <>
    <nav>
      <ul>
        <li> <Link to={'/'}> Home </Link></li>
        {arr.map(col => (
      <li key={col}><Link to={`/${col}`}>{col}</Link></li>))}
      </ul>
    </nav>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/:nom' element={<Projects />}/>
    <Route path='/collections/:nom' element={<CollectionDetail />}/>
    <Route path='/projects/:nom' element={<ProjectDetail />}/>


   </Routes>
   </>
  )
}

export default App
