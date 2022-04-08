import React from "react";
import UK from "../assets/images/UK.jpg";
import Memorandum from "../assets/images/Memorandum.jpg";
import Download from "../assets/images/download.jpg";
import Maxres from "../assets/images/maxresdefault.jpg";
import Logo2 from "../assets/images/Logo2.png";
import { Link } from "react-router-dom";


export default function Quiser() {
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
            <b> Unihosts.</b>{" "}
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
          <div className="row">
            <div className="col-md-6">
              <a
                href="/"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                <h3>
                  <b>Pertence Onde Tu Quiseres!</b>
                </h3>
              </a>
            </div>
            <div className="col-md-6">
              <div className="form-group w-25 ml-auto">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Categoria</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mt-3">
                <div className="img_box">
                  <img src={Memorandum} className="rounded_1" alt="" />
                  <div className="overlay_1">
                    <p className="para_6">
                      <b>
                        5 dicas importantes <br />
                        para os senhorios
                      </b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="img_box">
                  <img src={Memorandum} className="rounded_1" alt="" />
                  <div className="overlay_1">
                    <p className="para_6">
                      <b>
                        5 dicas importantes <br />
                        para os senhorios
                      </b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="img_box">
                  <img src={Download} className="rounded_1" alt="" />
                  <div className="overlay_1">
                    <p className="para_6">
                      <b>
                        Animais de estimação <br />- Sim ou Não
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5 mt-3">
              <div className="card b-r-2">
                <img
                  className="card_img b-r-2 p-3"
                  src={Maxres}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h6 className="card-title f-s-19">
                    <b>
                      5 formas de melhorar o consumo <br />
                      energético da sua casa
                    </b>
                  </h6>
                  <p className="f-s-11">
                    É certo que Portugal tem melhorado muito no que diz respeito
                    ao consumo energético das suas casas, devido à implementação
                    de várias políticas
                  </p>
                  <p>22 de Janeiro de 2022</p>
                  <p className="float-right mt-40">By Unihosts</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-3">
              <div className="card b-r-2">
                <img
                  className="card_img b-r-2 p-3"
                  src={Maxres}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h6 className="card-title f-s-19">
                    <b>
                      5 formas de melhorar o consumo <br />
                      energético da sua casa
                    </b>
                  </h6>
                  <p className="f-s-11">
                    É certo que Portugal tem melhorado muito no que diz respeito
                    ao consumo energético das suas casas, devido à implementação
                    de várias políticas
                  </p>
                  <p>22 de Janeiro de 2022</p>
                  <p className="float-right mt-40">By Unihosts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-md-4 m-auto">
              <div className="bg_light_pink b-r-10 pl-3 pt-3">
                <div className="d-flex">
                  <i className="fa fa-bell text-white"></i>
                  <div className="details_1">
                    <p className="f-s-10 ml-3">
                      Receba notificações sempre que houver novidades por aqui
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg_color_2 mt-3">
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
      {/* Modal box */}
      <div
        className="modal fade bd-example-modal-lg"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div
            style={{borderRadius: "20px !important"}}
            className="modal-content p-3 bg_image_01 pb-5"
          >
            <form action="">
              <div className="row">
                <div className="col-md-6 mt-5">
                  <div className="bg-white p-3 mt-5 pb-5 b-r-2 mb-5">
                    <h3>
                      Queremos ser uns <br />
                      fiéis mensageiros!
                    </h3>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mt-4"
                        placeholder="Email"
                      />
                    </div>
                    <button
                      className="btn btn-outline-light_brown col-12"
                      type="submit"
                    >
                      <i className="fa fa-bell"></i> Notifique-me
                    </button>
                    <p className="mt-5">
                      Ao carregar em Notifique-me aceita a nossa
                    </p>
                    <a href="/" className="text_brown text-center">
                      politica de tratamento de dados.
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
