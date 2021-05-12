import React from 'react';
import 'bulma/css/bulma.css';


class Search extends React.Component {


    search = (e) =>{
        this.props.executeSearch(e.target.value);
    }

render(){
    return(
        <div>
            <input onChange={this.search} className="input" type="text"/>
        </div>
    )
}


}

export default Search;