import React, {Component} from 'react';
import List from './List';
import firebase from 'firebase';
import {Link} from 'react-router-dom';

class Sidemenu extends Component {
    componentDidMount(){

        let self = this;
        firebase.database().ref("news").on('value',function(snapshot){
            self.setState({ news: Object.values(snapshot.val()) });
        });

    }

    constructor(props){
      super(props);
      this.state = {news: []};
    };
render(){
return(
<div id="side-menu">
<Link to="/home">
<h1 className="side-menu__head title">Informe de España</h1>
</Link>
<hr/>
{this.state.news.length ? <List items={this.state.news}/> : 'Cargando...'}
</div>
);
}
};

export default Sidemenu;