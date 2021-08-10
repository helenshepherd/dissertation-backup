import { useContext } from "react";

import ParentContext from "../../store/parent-context";
import "./SearchBar.css";

const SearchBar = (props)=> {
    const ctx = useContext(ParentContext);

    return (
        <form>
            <div className='control-group'>
            <div className='form-control'>
                <label htmlFor='name'>Search</label>
                <input 
                    type='text' 
                    id='name'
                    onChange={ctx.onSearchInput}
                    value={ctx.searchInput}/>
            </div>
            <div className="form-actions">
                <button onSubmit={ctx.onSearchSubmit}>Clear</button>
            </div>
            </div>
        </form>
    )
}

export default SearchBar;