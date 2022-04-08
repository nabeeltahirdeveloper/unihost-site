import React from "react";
import Logo2 from "../assets/images/Logo2.png";
import UK from "../assets/images/UK.jpg";
import CardImgTop from "../assets/images/maxresdefault.jpg";
import { Link } from "react-router-dom";

export default function Escospe() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg" id="nav">
          <a href="/" className="icon_01 text-dark">
            <div className="mt-16">
              <i className="fa fa-phone-alt"></i>&nbsp;
              <span>+351 914 626 616</span>&nbsp;&nbsp;
              <i className="fa fa-envelope"></i>&nbsp;
              <span>info@unihosts.pk</span>
            </div>
          </a>
          <div className="collapse navbar-collapse">
            <ul className="ml-auto">
              <div className="form-inline">
                <div className="icon_01 text-dark">
                  <i className="fab fa-facebook-f icon_03"></i>
                  <i className="fab fa-instagram ml-2 icon_02"></i>
                  <i className="fab fa-twitter ml-2 icon_02"></i>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-transparrent dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src={UK} width="20px" alt="" /> EN
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </div>
      <hr className="horizontal" />
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <b> Unihosts.</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Anuncie a sua propriedade
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">
                    Como funciona?
                  </a>
                  <a className="dropdown-item" href="/">
                    Anuncia!
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contactos
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button
                className="btn btn-outline-light_brown my-2 my-sm-0"
                type="submit"
              >
                <Link className="nav-link" to="register">
                Registar
                </Link>
              </button>
              <button
                className="btn btn-outline-light_brown my-2 my-sm-0 ml-3"
                type="submit"
              >
                Iniciar sessao
              </button>
            </form>
          </div>
        </nav>
      </div>
      <hr />
      <section>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse">
              <form action="">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      <input
                        type="text"
                        className="form-control border_color"
                        placeholder="Encontrar em..."
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <input
                        type="text"
                        className="form-control border_color"
                        placeholder="Entrada"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <input
                        type="text"
                        className="form-control border_color"
                        placeholder="Saida"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <button className="btn btn-outline-light_brown">
                        <i className="fa fa-search"></i>
                      </button>
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </nav>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <b className="">23 espaços</b> &nbsp;
              <span className="f-s-15">disponiveis pora Peniche</span>
              <form action="">
                <div className="row">
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Tipo De Espaço</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Presço</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Comodidades</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="card">
                      <div className="owl-carousel owl-theme">
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title f-s-19">
                          <b>
                            {" "}
                            Quarto Privado em T3 - Peniche{" "}
                            <i className="fa fa-star"></i>&nbsp;{" "}
                            <span className="span_12"> 4.9</span>
                          </b>
                        </h6>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">2 Hospedes</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Cama
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Quarto
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Casa De Banho
                            </a>
                          </li>
                        </ul>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">Wifi</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Conzinha
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Secretaria
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Varanda
                            </a>
                          </li>
                        </ul>
                        <button className="btn btn_trasparrnet">
                          <i className="fa fa-heart"></i>&nbsp; Favoritos
                        </button>
                        <h6 className="float-right text-center">
                          300€/Mes <br />
                          Despesas incluidas{" "}
                          <i className="fa fa-info-circle"></i>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="card">
                      <div className="owl-carousel owl-theme">
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title f-s-19">
                          <b>
                            {" "}
                            Quarto Privado em T3 - Peniche{" "}
                            <i className="fa fa-star"></i>&nbsp;{" "}
                            <span className="span_12"> 4.9</span>
                          </b>
                        </h6>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">2 Hospedes</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Cama
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Quarto
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Casa De Banho
                            </a>
                          </li>
                        </ul>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">Wifi</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Conzinha
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Secretaria
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Varanda
                            </a>
                          </li>
                        </ul>
                        <button className="btn btn_trasparrnet">
                          <i className="fa fa-heart"></i>&nbsp; Favoritos
                        </button>
                        <h6 className="float-right text-center">
                          300€/Mes <br />
                          Despesas incluidas{" "}
                          <i className="fa fa-info-circle"></i>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="card">
                      <div className="owl-carousel owl-theme">
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title f-s-19">
                          <b>
                            {" "}
                            Quarto Privado em T3 - Peniche{" "}
                            <i className="fa fa-star"></i>&nbsp;{" "}
                            <span className="span_12"> 4.9</span>
                          </b>
                        </h6>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">2 Hospedes</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Cama
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Quarto
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Casa De Banho
                            </a>
                          </li>
                        </ul>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">Wifi</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Conzinha
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Secretaria
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Varanda
                            </a>
                          </li>
                        </ul>
                        <button className="btn btn_trasparrnet">
                          <i className="fa fa-heart"></i>&nbsp; Favoritos
                        </button>
                        <h6 className="float-right text-center">
                          300€/Mes <br />
                          Despesas incluidas{" "}
                          <i className="fa fa-info-circle"></i>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="card">
                      <div className="owl-carousel owl-theme">
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title f-s-19">
                          <b>
                            {" "}
                            Quarto Privado em T3 - Peniche{" "}
                            <i className="fa fa-star"></i>&nbsp;{" "}
                            <span className="span_12"> 4.9</span>
                          </b>
                        </h6>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">2 Hospedes</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Cama
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Quarto
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Casa De Banho
                            </a>
                          </li>
                        </ul>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">Wifi</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Conzinha
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Secretaria
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Varanda
                            </a>
                          </li>
                        </ul>
                        <button className="btn btn_trasparrnet">
                          <i className="fa fa-heart"></i>&nbsp; Favoritos
                        </button>
                        <h6 className="float-right text-center">
                          300€/Mes <br />
                          Despesas incluidas{" "}
                          <i className="fa fa-info-circle"></i>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="card">
                      <div className="owl-carousel owl-theme">
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title f-s-19">
                          <b>
                            {" "}
                            Quarto Privado em T3 - Peniche{" "}
                            <i className="fa fa-star"></i>&nbsp;{" "}
                            <span className="span_12"> 4.9</span>
                          </b>
                        </h6>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">2 Hospedes</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Cama
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Quarto
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Casa De Banho
                            </a>
                          </li>
                        </ul>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">Wifi</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Conzinha
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Secretaria
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Varanda
                            </a>
                          </li>
                        </ul>
                        <button className="btn btn_trasparrnet">
                          <i className="fa fa-heart"></i>&nbsp; Favoritos
                        </button>
                        <h6 className="float-right text-center">
                          300€/Mes <br />
                          Despesas incluidas{" "}
                          <i className="fa fa-info-circle"></i>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="card">
                      <div className="owl-carousel owl-theme">
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title f-s-19">
                          <b>
                            {" "}
                            Quarto Privado em T3 - Peniche{" "}
                            <i className="fa fa-star"></i>&nbsp;{" "}
                            <span className="span_12"> 4.9</span>
                          </b>
                        </h6>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">2 Hospedes</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Cama
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Quarto
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Casa De Banho
                            </a>
                          </li>
                        </ul>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">Wifi</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Conzinha
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Secretaria
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Varanda
                            </a>
                          </li>
                        </ul>
                        <button className="btn btn_trasparrnet">
                          <i className="fa fa-heart"></i>&nbsp; Favoritos
                        </button>
                        <h6 className="float-right text-center">
                          300€/Mes <br />
                          Despesas incluidas{" "}
                          <i className="fa fa-info-circle"></i>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="card">
                      <div className="owl-carousel owl-theme">
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title f-s-19">
                          <b>
                            {" "}
                            Quarto Privado em T3 - Peniche{" "}
                            <i className="fa fa-star"></i>&nbsp;{" "}
                            <span className="span_12"> 4.9</span>
                          </b>
                        </h6>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">2 Hospedes</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Cama
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Quarto
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Casa De Banho
                            </a>
                          </li>
                        </ul>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">Wifi</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Conzinha
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Secretaria
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Varanda
                            </a>
                          </li>
                        </ul>
                        <button className="btn btn_trasparrnet">
                          <i className="fa fa-heart"></i>&nbsp; Favoritos
                        </button>
                        <h6 className="float-right text-center">
                          300€/Mes <br />
                          Despesas incluidas{" "}
                          <i className="fa fa-info-circle"></i>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="card">
                      <div className="owl-carousel owl-theme">
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title f-s-19">
                          <b>
                            {" "}
                            Quarto Privado em T3 - Peniche{" "}
                            <i className="fa fa-star"></i>&nbsp;{" "}
                            <span className="span_12"> 4.9</span>
                          </b>
                        </h6>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">2 Hospedes</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Cama
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Quarto
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Casa De Banho
                            </a>
                          </li>
                        </ul>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">Wifi</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Conzinha
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Secretaria
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Varanda
                            </a>
                          </li>
                        </ul>
                        <button className="btn btn_trasparrnet">
                          <i className="fa fa-heart"></i>&nbsp; Favoritos
                        </button>
                        <h6 className="float-right text-center">
                          300€/Mes <br />
                          Despesas incluidas{" "}
                          <i className="fa fa-info-circle"></i>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="card">
                      <div className="owl-carousel owl-theme">
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title f-s-19">
                          <b>
                            {" "}
                            Quarto Privado em T3 - Peniche{" "}
                            <i className="fa fa-star"></i>&nbsp;{" "}
                            <span className="span_12"> 4.9</span>
                          </b>
                        </h6>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">2 Hospedes</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Cama
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Quarto
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Casa De Banho
                            </a>
                          </li>
                        </ul>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">Wifi</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Conzinha
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Secretaria
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Varanda
                            </a>
                          </li>
                        </ul>
                        <button className="btn btn_trasparrnet">
                          <i className="fa fa-heart"></i>&nbsp; Favoritos
                        </button>
                        <h6 className="float-right text-center">
                          300€/Mes <br />
                          Despesas incluidas{" "}
                          <i className="fa fa-info-circle"></i>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="card">
                      <div className="owl-carousel owl-theme">
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="item">
                          <img
                            className="card-img-top"
                            src={CardImgTop}
                            alt="Card image cap"
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title f-s-19">
                          <b>
                            {" "}
                            Quarto Privado em T3 - Peniche{" "}
                            <i className="fa fa-star"></i>&nbsp;{" "}
                            <span className="span_12"> 4.9</span>
                          </b>
                        </h6>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">2 Hospedes</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Cama
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Quarto
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              1 Casa De Banho
                            </a>
                          </li>
                        </ul>
                        <ul
                          style={{ marginLeft: "-36px" }}
                          className="form-inline"
                        >
                          <li>
                            <a href="/">Wifi</a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Conzinha
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Secretaria
                            </a>
                          </li>
                          <li>
                            <a href="/" className="ml-3">
                              Varanda
                            </a>
                          </li>
                        </ul>
                        <button className="btn btn_trasparrnet">
                          <i className="fa fa-heart"></i>&nbsp; Favoritos
                        </button>
                        <h6 className="float-right text-center">
                          300€/Mes <br />
                          Despesas incluidas{" "}
                          <i className="fa fa-info-circle"></i>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-5 mt-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54649.93807907335!2d74.41155021786663!3d31.120260694682667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919b97b6553a0cd%3A0x9306801f64aa8ed2!2sKasur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1648647384173!5m2!1sen!2s"
                width="560"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="pagination mt-5 mb-5">
                <li>
                  <a href="/">
                    <i className="fa fa-chevron-left"></i>
                  </a>
                </li>
                <li className="active_1">
                  <a href="/">1</a>
                </li>
                <li>
                  <a href="/">2</a>
                </li>
                <li>
                  <a href="/">3</a>
                </li>
                <li>
                  <a href="/">4</a>
                </li>
                <li>
                  <a href="/">5</a>
                </li>
                <li>
                  <a href="/">6</a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg_color_2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-5 pt-2">
              <img src={Logo2} className="img-fluid" alt="" />
            </div>
            <div className="col-md-2 mt-5 pt-5">
              <h6 className="text-white">
                <b> Unihosts</b>
              </h6>
              <ul className="un_order">
                <li>
                  <a href="/">Sobre nós</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Torne-se um parceiro</a>
                </li>
                <li>
                  <a href="/">Termos e condições </a>
                </li>
                <li>
                  <a href="/">Política de cookies </a>
                </li>
                <li>
                  <a href="/">Fale connosco </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mt-5 pt-5">
              <h6 className="text-white">
                <b> Estudantes</b>
              </h6>
              <ul className="un_order">
                <li>
                  <a href="/">Como alugar</a>
                </li>
                <li>
                  <a href="/">Ajuda para os Estudantes</a>
                </li>
                <li>
                  <a href="/">Iniciar sessão/Regista</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mt-5 pt-5">
              <h6 className="text-white">
                <b> Senhorios</b>
              </h6>
              <ul className="un_order">
                <li>
                  <a href="/">Como funciona</a>
                </li>
                <li>
                  <a href="/">Ajuda para os senhorios</a>
                </li>
                <li>
                  <a href="/">Iniciar sessão/ Registar</a>
                </li>
                <li>
                  <a href="/" className="btn btn-outline-light_brown_1">
                    Anuncie a sua propriedade
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mt-5 pt-5">
              <div className="form-inline">
                <div className="icon_01 text-dark">
                  <i className="fab fa-facebook-f icon_03_1"></i>
                  <i className="fab fa-instagram ml-2 icon_02_1"></i>
                  <i className="fab fa-twitter ml-2 icon_02_1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
