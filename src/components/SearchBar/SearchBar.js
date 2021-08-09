import { useRef, useState } from "react";

const SearchBar = (props)=> {
    const [enteredText, setEnteredText] = useState(''); //use ref if only want value when submitted

    const inputChangeHandler = event => {
        setEnteredText(event.target.value);
        console.log(event.target.value);
    }

    const searchSubmissionHandler = event => {
        event.preventDefault(); //stops http request being sent
        console.log(enteredText);
        setEnteredText('');
    }

    return (
        <form>
            <div>
                <label>Search</label>
                <input 
                    type='text' 
                    onChange={inputChangeHandler}
                    value={enteredText}/>
            </div>
            <div>
                <button onSubmit={searchSubmissionHandler}>Search</button>
            </div>
        </form>
    )
}

export default SearchBar;