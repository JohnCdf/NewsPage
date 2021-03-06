import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class List extends Component {
    componentDidMount(){
        var news = this.props.items.map((item, i)=>{
            return(
                <Link className="subtitle" key={i} to={"article?id="+item.id} onClick={document.getElementById('side-menu').setAttribute('class', 'slideClosed')}>
                {item.title}
                </Link>
            )
        });

        this.setState({news})
    }
    constructor(props){
      super(props);
      this.state = {news: []};
    };
render(){
      return(
        <div className='side-list section'>
            {this.state.news.length ? this.state.news : <h2> Cargando Noticias... </h2>}
        </div>
      )
}

};

export default List;