import './App.css';
import Form from "./components/form/Form";
import ResultList from "./components/result-list/ResultList";
import {useState} from "react";

function App() {
    const [state, setState] = useState({results: [{key:1, value: "hello"}]})
  return (
    <div className="App">
      <h1>ByteHaven: A Key Value Store</h1>
        <p>"Keys and values dance in perfect harmony within the realm of byte<span>Haven</span>"</p>
        <main className={"main"}>
            <ResultList results={state.results}/>
            <Form/>
        </main>

    </div>
  );
}

export default App;
