import React, { Component } from "react"
import ReactDOM from "react-dom"
// import Button from "./Button"
// import ComponentA from "./ComponentA"
// import ComponentB from "./ComponentB"
import "./styles.css"

class App extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            clock: 1000,
            cup: 'água'
        }
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                cup: 'suco de maracujá'
            })
        }, 3000)
    }

    modifyCup = () => {
        this.setState({
            cup: 'café'
        })
    }

    render() {
        const { clock, cup } = this.state
        return(
            <div>
                <h1>{clock}</h1>
                <button onClick={() => this.modifyCup()} >{cup}</button>
            </div>
        )
    }
}

// function soma(a, b) {
//     alert(a + b)
// }

// const App = () => {

//     return (
//         <div className="App">
//             <div>
//                 Hello World
//             </div>
//             <div>
//                 <Button onClick={() => soma(10, 20)} name="Dernival Liandro" />
//                 <ComponentA>
//                     <ComponentB>
//                         <Button onClick={() => soma(40, 20)} name="Alícia Liandro" />
//                     </ComponentB>
//                 </ComponentA>
//             </div>
//         </div>
//     )
// }

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)