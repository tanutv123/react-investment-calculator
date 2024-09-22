import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Result from "./components/Result.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const isValidInput = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevState => {
            return {
                ...prevState,
                [inputIdentifier]: +newValue
            }
        })
    }

    return (
        <>
            <Header/>
            <UserInput userInput={userInput} handleChange={handleChange}/>
            {isValidInput ? <Result userInput={userInput}/> : <p className='center'>Please enter a duration greater than 0</p>}
        </>
    )
}

export default App
