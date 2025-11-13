import './App.css'
import { SplitScreen } from './components/split-screen'

const LeftSideComp = ()=>{
  return(
    <h1 style={{backgroundColor: 'crimson'}}>I'm Left</h1>
  )
}

const RightSideComp=()=>{
  return(
    <h1 style={{backgroundColor: 'burlywood'}}>I'm Right</h1>
  )
}

function App() {
  return (
    <SplitScreen Left={LeftSideComp} Right={RightSideComp}/>
  )
}

export default App
