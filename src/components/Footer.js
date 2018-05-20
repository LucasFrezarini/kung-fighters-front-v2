import React, { Component } from "react";

class Footer extends Component {

  render(){
    return (
      <footer id="footer">{/*Footer*/}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-sm-2">
                  <div className="companyinfo">
                    <h2><span>Kung</span>Fighters</h2>
                    <p>Lutando para trazer Tudo o que você precisa para seus treinos</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="address">
                    <img src="images/home/map.png" alt="" />
                    <p>Rua dos Alfineiros - Embaixo da Escada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <p className="pull-right">Designed by <span><a target="_blank" rel="noopener noreferrer" href="http://www.themeum.com">Me Motha'Fucka'!</a></span></p>
              </div>
            </div>
          </div>       
        </footer>
    );
  }
}

export default Footer;