import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import "./styles.css"

function soma(a, b) {
    alert(a + b)
}

const App = () => {

    return (
        <div className="App">
            <div>
                Hello World
            </div>
            <div>
                <Button onClick={() => soma(10, 20)} name="Dernival Liandro" />
                <ComponentA>
                    <ComponentB>
                        <Button onClick={() => soma(40, 20)} name="Alícia Liandro" />
                    </ComponentB>
                </ComponentA>
            </div>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)