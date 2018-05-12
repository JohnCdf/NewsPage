import React, { Component } from 'react';

import '../assets/stylesheets/landing.css';

import {Link} from 'react-router-dom';

import firebase from 'firebase';
import Header from '../components/Header.js';
import Sidemenu from '../components/Sidemenu.js';

class Home extends Component {
  componentDidMount(){
    var self = this;

    firebase.database().ref("news").on("value", function(snapshot) {
      let array = Object.values(snapshot.val());
      let articles = array.map((item, i)=>{
        return(
          <div className="article-large" key={i} >
              <img src={item.img} className="img-responsive" alt=""/>
              <br/>
              <Link to={"article?id="+item.id}>
                {item.title}
              </Link>
              <br/>
                <em>Categoria: {item.category}</em>
              <hr/>
              {
                item.content.length > 175 ? <span>{item.content.slice(0, 175)}....</span> : <span>{item.content}</span>
              }
          </div>
            )
        });

      self.setState({articles});

        
      });

  }
  constructor(props){
    super(props);
    this.state = {
      articles: []
    };
  };
  render(){
    
      return(
        <div className='Home'>
        <Sidemenu />
        <Header/>
        <div>
            {this.state.articles.length ? this.state.articles : <h1> Cargando Noticias... </h1>}
        </div>
        </div>
      )
}
}

export default Home;