import React, {Component} from 'react';
import Logo from '../assets/logo-main.jpg';
import {Link} from 'react-router-dom';

class Header extends Component {
    slideToggle(){
        var side = document.getElementById('side-menu');
        var width = side.clientWidth;

        side.removeAttribute('class');
        if(width === 0 ){
            side.setAttribute('class', 'slideOpen');
        } else {
            side.setAttribute('class', 'slideClosed');
        }
    }

    constructor(props){
      super(props);
      this.slideToggle = this.slideToggle.bind(this);
    };
render(){
return(
    <div className="header-master">
    <div className="header-pre container-fluid">
        <span className="pull-left">Informe de España - JohnCdf</span><Link to="articles/"> Ocurrencias Publicas </Link><Link to="articles/"> El diario </Link><Link to="articles/"> Londres directo </Link>
    </div>

<div className="header-main">
<div className="header-main__left">
<img src={Logo} alt="N" className="img-responsive"/><Link to="/home">Informe de España</Link>
</div>

<div className="header-main__right">
<button className="btn fa fa-bars" onClick={this.slideToggle}></button>
</div>
</div>

</div>
);
}
};
export default Header;