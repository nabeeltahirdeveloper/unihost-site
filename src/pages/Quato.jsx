import React from "react";
import ModernBedroom from "../assets/images/modern-bed.jpg";
import Sypialnie from "../assets/images/sypialnie.jpg";
import MasterBed from "../assets/images/master-bed.jpg";
import Img from "../assets/images/images.jpeg";
import Img5 from "../assets/images/5.jpg";
import ABed from "../assets/images/white-bed.jpeg";
import Profile2 from "../assets/images/Profile2.jpg";
import MomDad from "../assets/images/mom-and-dad.jpg";
import Maxres from "../assets/images/maxresdefault.jpg";
import Logo2 from "../assets/images/Logo2.png";
import BrownBed from "../assets/images/brown-bed.jpg";
import { Link } from "react-router-dom";


export default function Quato() {
  return (
    <>
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
            <div className="col-md-7 mt-3">
              <img src={ModernBedroom} className="img-fluid" alt="" />
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-4 mt-3">
                  <img
                    style={{ height: "190px !important" }}
                    src={Sypialnie}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-md-8 p-0 mt-3">
                  <img
                    style={{ height: "190px !important" }}
                    src={MasterBed}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-md-8 mt-3">
                  <img
                    style={{ height: "190px !important" }}
                    src={Img}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-md-4 mt-3">
                  <img
                    style={{ height: "190px !important" }}
                    src={Img5}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mt-3">
              <h1>
                <b> Quarto privado em Peniche </b>
              </h1>
              <div className="row">
                <div className="col-md-3 mt-3">
                  <div className="bg-white shadow-lg text-center b-r-2">
                    <h1 className="pt-3">
                      <ion-icon name="people-outline"></ion-icon>
                    </h1>
                    <p className="pb-3">2 pessoas</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="bg-white shadow-lg text-center b-r-2">
                    <h1 className="pt-3">
                      <ion-icon name="bed-outline"></ion-icon>
                    </h1>
                    <p className="pb-3">1 Cama</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="bg-white shadow-lg text-center b-r-2">
                    <h1 className="pt-3">
                      <ion-icon name="people-outline"></ion-icon>
                    </h1>
                    <p className="pb-3">1 Quarto</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="bg-white shadow-lg text-center b-r-2">
                    <h1 className="pt-3">
                      <ion-icon name="bed-outline"></ion-icon>
                    </h1>
                    <p className="pb-3">1 Casa de Barho</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5>
                    <b>Descrição</b>
                  </h5>
                  <p>
                    Quarto privado em T3 na zona de Peniche. T3 localizado numa
                    zona calma de Peniche e apenas a 1,7 Km da ESTM. O
                    apartamento é composto por 1 sala de estar agradável, 3
                    quartos com cama de casal, 1 cozinha totalmente equipada, 2
                    casas de banho e 2 varandas com vista mar. A casa está
                    totalmente equipada e mobilada consoante as fotografias.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="bg-white p-3 shadow-lg">
                    <h5 className="text-center">
                      <b>Condições da casa</b>
                    </h5>
                    <div className="row">
                      <div className="col-md-4 mt-3">
                        <div className="text-center">
                          <h2>
                            <ion-icon name="footsteps-outline"></ion-icon>
                          </h2>
                          <p className="f-s-12">
                            Animais nao <br />
                            Permitidos
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 mt-3">
                        <div className="text-center">
                          <h2>
                            <ion-icon name="footsteps-outline"></ion-icon>
                          </h2>
                          <p className="f-s-12">
                            Animais nao <br />
                            Permitidos
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 mt-3">
                        <div className="text-center">
                          <h2>
                            <ion-icon name="footsteps-outline"></ion-icon>
                          </h2>
                          <p className="f-s-12">
                            Animais nao <br />
                            Permitidos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-5">
                  <div className="bg-white b-r-2 border shadow-lg">
                    <h4 className="text-center pt-3">
                      <b> Sala de estar </b>
                    </h4>
                    <div className="row p-3 text-center">
                      <div className="col-md-2">
                        <h1>
                          <ion-icon name="flame-outline"></ion-icon>
                        </h1>
                        <p>lareira</p>
                      </div>
                      <div className="col-md-2">
                        <h1>
                          <ion-icon name="flame-outline"></ion-icon>
                        </h1>
                        <p>lareira</p>
                      </div>
                      <div className="col-md-2">
                        <h1>
                          <ion-icon name="tv-outline"></ion-icon>
                        </h1>
                        <p>TV</p>
                      </div>
                      <div className="col-md-2">
                        <h1>
                          <ion-icon name="tablet-landscape-outline"></ion-icon>
                        </h1>
                        <p>Table</p>
                      </div>
                      <div className="col-md-2">
                        <h1>
                          <ion-icon name="mic-outline"></ion-icon>
                        </h1>
                        <p>cadeiras</p>
                      </div>
                      <div className="col-md-2">
                        <h1>
                          <ion-icon name="game-controller-outline"></ion-icon>
                        </h1>
                        <p>videojogos</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-5">
                  <h5>
                    <b>Mais quartos nesta casa</b>
                  </h5>
                  <div className="row">
                    <div className="col-md-4 mt-3">
                      <div className="img_box">
                        <img src={ABed} className="rounded_1" alt="" />
                        <div className="overlay">
                          <p className="para_1">Quarto Privado</p>
                          <p className="para">300€/mes</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mt-3">
                      <div className="img_box">
                        <img
                          src="images/mom-and-dad.jpg"
                          className="rounded_1"
                          alt=""
                        />
                        <div className="overlay">
                          <p className="para_1">Quarto Partilhado</p>
                          <p className="para">300€/mes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-5">
                  <h5>
                    4.71 <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star text-secondary"></i>
                  </h5>
                  <p>5 comentarios</p>
                  <hr />
                  <div className="row">
                    <div className="col-md-3 mt-3">
                      <h5>localizacâo</h5>
                    </div>
                    <div className="col-md-3 mt-3">
                      (4.7)<i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star text-secondary"></i>
                    </div>
                    <div className="col-md-3 mt-3">
                      <h5>Senhorio</h5>
                    </div>
                    <div className="col-md-3 mt-3">
                      (4.7)<i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star text-secondary"></i>
                    </div>
                    <div className="col-md-3 mt-3">
                      <h5>Qualidade - preco</h5>
                    </div>
                    <div className="col-md-3 mt-3">
                      (4.7)<i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star text-secondary"></i>
                    </div>
                    <div className="col-md-3 mt-3">
                      <h5>Avaliacao Geral</h5>
                    </div>
                    <div className="col-md-3 mt-3">
                      (4.7)<i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star text-secondary"></i>
                    </div>
                    <div className="col-md-3 mt-3">
                      <h5>Comodidades</h5>
                    </div>
                    <div className="col-md-3 mt-3">
                      (4.7)<i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star text-secondary"></i>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mt-3">
                      <div className="border p-3">
                        <div className="d-flex">
                          <img
                            className="rounded-circle"
                            src={Profile2}
                            width="30px"
                            height="30px"
                            alt=""
                          />
                          <div className="details">
                            <h6 className="text-dark heading_1">
                              <b> Shawn Rodgers </b>
                            </h6>
                            <p className="f-s-15">Java Tech Lead</p>
                          </div>
                          <p style={{ marginLeft: "50px" }}>
                            4.2<i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star text-secondary"></i>
                          </p>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mt-3">
                      <div className="border p-3">
                        <div className="d-flex">
                          <img
                            className="rounded-circle"
                            src={Profile2}
                            width="30px"
                            height="30px"
                            alt=""
                          />
                          <div className="details">
                            <h6 className="text-dark heading_1">
                              <b> Shawn Rodgers </b>
                            </h6>
                            <p className="f-s-15">Java Tech Lead</p>
                          </div>
                          <p style={{ marginLeft: "50px" }}>
                            4.2<i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star text-secondary"></i>
                          </p>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mt-3">
                      <div className="border p-3">
                        <div className="d-flex">
                          <img
                            className="rounded-circle"
                            src={Profile2}
                            width="30px"
                            height="30px"
                            alt=""
                          />
                          <div className="details">
                            <h6 className="text-dark heading_1">
                              <b> Shawn Rodgers </b>
                            </h6>
                            <p className="f-s-15">Java Tech Lead</p>
                          </div>
                          <p style={{ marginLeft: "50px" }}>
                            4.2<i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star text-secondary"></i>
                          </p>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mt-3">
                      <div className="border p-3">
                        <div className="d-flex">
                          <img
                            className="rounded-circle"
                            src={Profile2}
                            width="30px"
                            height="30px"
                            alt=""
                          />
                          <div className="details">
                            <h6 className="text-dark heading_1">
                              <b> Shawn Rodgers </b>
                            </h6>
                            <p className="f-s-15">Java Tech Lead</p>
                          </div>
                          <p style={{ marginLeft: "50px" }}>
                            4.2<i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star text-secondary"></i>
                          </p>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12 text-center mt-5 mb-5">
                      <button
                        className="btn btn-outline-light_brown my-2 my-sm-0"
                        type="submit"
                      >
                        Ver todo os comentarios
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-3 mb-3">
              <form action="">
                <div className="border b-r-2">
                  <h5 className="text_heading text-center pt-3">
                    <b> 300€/Mes </b>
                  </h5>
                  <p className="text-center">
                    Despesas incluidas <i className="fa fa-info-circle"></i>
                  </p>
                  <hr />

                  <div className="row p-3">
                    <div className="col-md-6">
                      <div className="form-group ml-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="text-left"
                        >
                          entrada
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder=" First Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mr-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="text-left"
                        >
                          saida
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder=" Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mr-3 ml-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="text-left"
                        >
                          Hospedes
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="ml-3">Pagamento</p>
                      <p className="ml-3">
                        1 <sup>a</sup> Renda
                      </p>
                      <p className="float-right mt-43">€300</p>
                      <p className="ml-3">Taxa do Servico</p>
                      <p className="float-right mt-43">€0</p>
                    </div>
                    <div className="col-md-8">
                      <p className="ml-3 border-bottom-0">
                        Detalhes do Pagamento
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="col-md-12">
                    <p className="ml-3">Total</p>
                    <p className="float-right mt-43">€300</p>
                  </div>
                  <div className="col-md-12 pb-3">
                    <button className="btn btn-outline-light_brown col-md-12">
                      Enviar pedido de reserva
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5>
                <b> Este espaço localiza-se nesta zona </b>
              </h5>
            </div>
            <div className="row">
              <div className="col-md-6 mt-3">
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
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5>
                <b> Sobre o seu senhorio </b>
              </h5>
            </div>
            <div className="col-md-3 text-center">
              <div className="bg-white shadow-lg p-3">
                <img
                  src={Profile2}
                  width="150px"
                  className="rounded-circle"
                  alt=""
                />
                <h5>
                  <b> Maria </b>
                </h5>
                <p>
                  Senhoria desde <br />
                  2020
                </p>
                <hr />
                <div className="d-flex justify-content-center">
                  <i className="fa fa-envelope anker_12"></i>
                  <div className="details">
                    <h6 className="text-dark heading_1">
                      <b>
                        Taxa de resposta <br />
                        90%
                      </b>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <h5>
                <b>Olá, sou a Maria!</b>
              </h5>
              <p className="f-s-15">
                Tenho 4 casas em Peniche e já fui estudante <br />
                também. Quero que os meus inquilinos se sintam <br />
                bem e estou sempre disponivel para ajudar naquilo <br />
                que for preciso:
              </p>
              <div className="row">
                <div className="col-md-12">
                  <div className="border bg-white p-3 shadow-lg">
                    <h5>
                      <b>Politica de Cancelamento</b>
                    </h5>
                    <div className="d-flex">
                      <p className="rounded-circle bg-warning p-3"></p>
                      <h6 className="ml-3 mt-2">
                        <b>Flexive!</b>
                      </h6>
                    </div>
                    <p className="f-s-15">
                      Ate 30 dias antes do check-in 100% do valor da ronda e
                      reembolsado. Depois <br />
                      desso periodo o até 7 dias antes, o valor reembolsado é de
                      50% Após esse <br />
                      periodo o pagamento integral
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5 mb-5">
              <h5>
                <b>Casas semelhantes</b>
              </h5>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={ABed} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_1">Quarto Privado</p>
                  <p className="para">320€/mes</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={MomDad} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_1">Quarto Partilhado</p>
                  <p className="para">320€/mes</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={Maxres} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_1">Case Interia</p>
                  <p className="para">320€/mes</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={BrownBed} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_1">Quarto Privado</p>
                  <p className="para">320€/mes</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center mt-5 mb-5">
              <button
                className="btn btn-outline-light_brown my-2 my-sm-0"
                type="submit"
              >
                Encontrar mais <ion-icon name="home-outline"></ion-icon> em
                Peniche
              </button>
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
    </>
  );
}
