import { useState} from "react"
import './app.css'

function App() {
  	return (
    	<>
			<Header/>
      		<Counter/>
    	</>
  )
}

const Header = () => {
	return(
		<header className="judul">Simple Counter</header>
	)
}

const Counter = () => {
  	const [count, setcount] = useState(0);

  	const tambah = () => {
		setcount(count + 1);
  	}

	const kurang = () => {
		if(count > 0){
			setcount(count - 1);
		}
	}

	const reset = () => {
		setcount(0);
	}
	
	return(
		<>
		<div className="counter">
			<p>{count}</p>
		</div>
		<div className="tombolan">
			<button className="min-button" onClick={kurang}>-</button>

			<button className="reset" onClick={reset}>reset</button>
			<button className="plus-button" onClick={tambah}>+</button>
		</div>
		</>
	)
}


export default App
