import ProgressBar from './components/ProgressBar'

function App() {
  return (<>
    <div className="container">
      <ProgressBar steps={150} time={5000}/>
    </div>
  </>)
}

export default App;
