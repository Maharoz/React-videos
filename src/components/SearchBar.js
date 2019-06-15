import React from 'react';


class SearchBar extends React.Component{

    state ={ term : ''};

    onInputCahnge = ()=>{

    };

    render(){
        return(
            <div className="search-bar ui segment">
            <form className="ui form">
              <div className="field">
                <label>Video search</label>
                <input 
                    type ="text" 
                    value={this.state.term}
                    onChange={this.onInputCahnge}/>
              </div>
            </form>
            </div>
        );
    }
}

export default SearchBar;