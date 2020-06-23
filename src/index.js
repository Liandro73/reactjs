import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function sum(a, b) {
    return a + b;
}

function primeiroJSX() {
    return (
        <div className="teste">
            Dernival Liandro - Introdução ao ReactJS
            <h3>Soma: {sum(10, 20)}</h3>
        </div>
    )
}

const App = () => {

    return (
        <div className="App">
            Hello World
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)