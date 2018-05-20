import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <section id="slider">{/*slider*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#slider-carousel" data-slide-to="1"></li>
                    <li data-target="#slider-carousel" data-slide-to="2"></li>
                  </ol>
                  
                  <div className="carousel-inner">
                    <div className="item active">
                      <div className="col-sm-6">
                        <h1><span>Kung</span>Fighters</h1>
                        <h2>Arte Marcial Supera Traumas</h2>
                        <p>Através do Kun Fu, muitos alcançam maior equilíbrio emocional e satisfação corporal</p>
                        <button type="button" className="btn btn-default get">Saiba Mais</button>
                      </div>
                      <div className="col-sm-6">
                        <img src="images/home/carousel/1.png" className="girl img-responsive" alt="" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="col-sm-6">
                        <h1><span>Kung</span>Fighters</h1>
                        <h2>Arsenal Variado</h2>
                        <p>Mais de 400 produtos que possam satisfazer suas necessidades</p>
                        <button type="button" className="btn btn-default get">Explorar</button>
                      </div>
                      <div className="col-sm-6">
                        <img src="images/home/carousel/2.png" className="girl img-responsive" alt="" />
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-sm-6">
                        <h1><span>Kung</span>Fighters</h1>
                        <h2>Equipamentos de diversos os modelos</h2>
                        <p>Roupas e equipamentos específicos para todos os tipo de pessoas</p>
                        <button type="button" className="btn btn-default get">Explorar</button>
                      </div>
                      <div className="col-sm-6">
                        <img src="images/home/carousel/3.png" className="girl img-responsive" alt="" />
                      </div>
                    </div>

                    <div className="item">
                      <div className="col-sm-6">
                        <h1><span>Kung</span>Fighters</h1>
                        <h2>Dança do Dragão Chinês</h2>
                        <p>Incentivamos todo tipo de representação cultural que dissemine a cultura chinesa por todo o país</p>
                        <button type="button" className="btn btn-default get">Saiba Mais</button>
                      </div>
                      <div className="col-sm-6">
                        <img src="images/home/carousel/4.jpg" className="girl img-responsive" alt="" />
                      </div>
                    </div>
                    
                  </div>
                  
                  <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                    <i className="fa fa-angle-left"></i>
                  </a>
                  <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Slider;