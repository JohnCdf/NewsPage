import React, {Component} from 'react';
import Header from '../components/Header';
import Sidemenu from '../components/Sidemenu';

import '../assets/stylesheets/article.css';

import firebase from 'firebase';
import { clearInterval } from 'timers';

const queryString = require('query-string');

class Article extends Component {
    componentDidMount(){
        this.renderArticle()
    }
    componentWillReceiveProps(){
        let self = this;
        let id = queryString.parse(this.props.location.search).id;

        let refresh = setInterval(function(){
            if(id === self.state.article.id){
                clearInterval(refresh);
            }
            self.renderArticle()
        })
        
    }
    renderArticle(){
        document.getElementById('side-menu').setAttribute('class', 'slideClosed');
        let queryString = require('query-string');
        let id = queryString.parse(this.props.location.search).id;
        
        let self = this;

        firebase.database().ref('news').once('value',function(snapshot){
            let news = Object.values(snapshot.val());
            for (let i = 0; i < news.length; i++) {
                let element = news[i];
                if(Number(element.id) === Number(id)){
                    self.setState({article:element});
                    break;
                } else if ( i === news.length-1){
                    self.setState({article:{title:'No se ha encontrado este articulo', content:'Vuelve a la pagina principal.'}});
                }
            }
            
            
        })
    }
      constructor(props){
        super(props);
        this.state = {article : Object};
        this.renderArticle = this.renderArticle.bind(this);
      };
    render(){
        return(
            <div>
            <Sidemenu/>
            <Header/>
            <div className="article-page section">
            <h1 className="title">{this.state.article.title}</h1>
            {this.state.article.by ? <p className="subtitle">{"Por: " + this.state.article.by}</p> : ''}
            <hr/>
            <img src={this.state.article.img} alt=""/>
            <p className="content">{this.state.article.content}</p>
            </div>
            </div>
        )
    }
}

export default Article;