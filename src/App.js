import './App.css';
import {observer} from 'mobx-react-lite'

const App = observer((props) => {
  console.log('props ->',props)
  return (
    <div className="App">
      <header className="App-header">
        <div>Counter</div>
        <p>Value: {props.store.count}</p>
        <div className='btns'>
        <button type='button' onClick={()=>props.store.increment()}>Increment</button>
        <button type='button' onClick={()=>props.store.decrement()}>Decrement</button>
        </div>
        
      </header>
    </div>
  );
})

export default App;
