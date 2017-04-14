import React, {Component} from 'react';


class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''};
  }
  render(){
    return(
      <div className="search form-group">
        <input className="form-control" onChange={event => this.onInputChange(event.target.value)}
               value={this.state.term}/>
               {/* {this.state.term} */}
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
