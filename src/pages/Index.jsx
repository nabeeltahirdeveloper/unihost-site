import React from "react";
import UK from "../assets/images/UK.jpg";
import MomDad from "../assets/images/mom-and-dad.jpg";
import Maxres from "../assets/images/maxresdefault.jpg";
import BrownBed from "../assets/images/brown-bed.jpg";
import Tomar from "../assets/images/tomar.jpg";
import Peniche from "../assets/images/Peniche.jpg";
import Marina from "../assets/images/marina-vigneria.jpg";
import Brazil from "../assets/images/Brazil.png";
import Logo from "../assets/images/logo.jpg";
import Abrantes from "../assets/images/Abrantes.jpg";
import Leiria from "../assets/images/Leiria.jpg";
import Braga from "../assets/images/braga.jpg";
import Setubal from "../assets/images/Setubal.jpg";
import WhiteBed from "../assets/images/white-bed.jpeg";
import Profile from "../assets/images/Profile.jpg";
import Profile2 from "../assets/images/Profile2.jpg";
import Memorandum from "../assets/images/Memorandum.jpg";
import Download from "../assets/images/download.jpg";
import Legs from "../assets/images/Legs.jpg";
import Logo2 from "../assets/images/Logo2.png";

export default function Index() {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg" id="nav">
          <a href="#" className="icon_01 text-dark">
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
                    <img
                      src={UK}
                      width="20px"
                      style={{ display: "inline-block" }}
                      alt=""
                    />{" "}
                    EN
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
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
          <a className="navbar-brand" href="#">
            <img src={Logo} width="200px" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Anuncie a sua propriedade
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Como funciona?
                  </a>
                  <a className="dropdown-item" href="#">
                    Anuncia!
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contactos
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button
                className="btn btn-outline-light_brown my-2 my-sm-0"
                type="submit"
              >
                Registar
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
      <section className="bg_image pb-5">
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-12 mt-5 pt-5 text-white pb-5">
              <h1>
                A tua <ion-icon name="home-outline"></ion-icon> à distância de
                um
                <br />
                click!
              </h1>
              <form action="">
                <div className="row">
                  <div className="col-md-2 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Encontrar em..."
                    />
                  </div>
                  <div className="col-md-2 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Entrada"
                    />
                  </div>
                  <div className="col-md-2 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Saida"
                    />
                  </div>
                  <div className="col-md-2 mt-3">
                    <button className="btn btn-outline-light_brown">
                      <i className="fa fa-search"></i>
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
            <div className="col-md-4 mt-5">
              <div className="d-flex content-manage">
                <h1>
                  <ion-icon name="home-outline"></ion-icon>
                </h1>
                <div className="details">
                  <h6 className="text-dark heading_1">
                    <b> Seguro e Verficado </b>
                  </h6>
                  <p className="f-s-15">
                    Valorizamos e protegemos a <br />
                    integridade das listas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="d-flex content-manage">
                <h1>
                  <ion-icon name="home-outline"></ion-icon>
                </h1>
                <div className="details">
                  <h6 className="text-dark heading_1">
                    <b> Seguro e Verficado </b>
                  </h6>
                  <p className="f-s-15">
                    Tens 24th apos a entrada para <br />
                    confirmar se a casa que <br />
                    reservaste corresponde.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="d-flex content-manage">
                <h1>
                  <ion-icon name="home-outline"></ion-icon>
                </h1>
                <div className="details">
                  <h6 className="text-dark heading_1">
                    <b>
                      Procura rapida e <br />
                      inteligente
                    </b>
                  </h6>
                  <p className="f-s-15">
                    De forma simplificada <br />
                    encontra o teu espaco a ideal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-12">
              <span>
                <h1>Os quartos em destaque na tua area</h1>
                <span className="float-right mt-42">
                  Ver Mais <i className="fa fa-arrow-right"></i>
                </span>
              </span>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={WhiteBed} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_1">Quarto Privado</p>
                  <p className="para">€320</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={MomDad} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_1">Quarto Partilhado</p>
                  <p className="para">€320</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={Maxres} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_1">Case Interia</p>
                  <p className="para">€320</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={BrownBed} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_1">Quarto Privado</p>
                  <p className="para">€320</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg_color">
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-12 pt-5 text-center">
              <h1>Explore as nossas cidades + populares!</h1>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={Tomar} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_2">
                    <b> Tomar </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={Peniche} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_3">
                    <b> Peniche </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={Marina} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_4">
                    <b> Rio Marina </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={Brazil} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_4">
                    <b> Santarem </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={Abrantes} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_4">
                    <b> Abrantes </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={Leiria} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_5">
                    <b> Leiria </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={Braga} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_5">
                    <b> Braga </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={Setubal} className="rounded_1" alt="" />
                <div className="overlay">
                  <p className="para_3">
                    <b> Setúbal </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5">
              <h1>
                <b> Como Funciona? </b>
              </h1>
            </div>
            <div className="col-md-4 mt-3">
              <div className="border_1 p-3">
                <h1>
                  <ion-icon name="document-text-outline"></ion-icon>
                </h1>
                <h4>
                  <b>Pesquisa</b>
                </h4>
                <p className="f-s-15">
                  De forma intuitiva defina a <br />
                  localizacâo, datas e <br />
                  varacteristicas que pretende <br />
                  para um estadia ideal!
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="border_1 p-3">
                <h1>
                  <ion-icon name="documents-outline"></ion-icon>
                </h1>
                <h4>
                  <b>Reserva</b>
                </h4>
                <p className="f-s-15">
                  Assim que o pedido for <br />
                  confirmado irâs agilizar e <br />
                  esclarecer com o senhorio a <br />
                  data de mudança e entregra e entrega das.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="border_1 p-3">
                <h1>
                  <ion-icon name="calendar-outline"></ion-icon>
                </h1>
                <h4>
                  <b>Mudança</b>
                </h4>
                <p className="f-s-15">
                  O primeiro Pagamento so areâ <br />
                  transferido apos verificares a <br />
                  casa, estamos aqui para <br />
                  qualquer questâo.Boa estadia!
                </p>
              </div>
            </div>
          </div>
          <form action="#">
            <div className="row">
              <div className="col-md-12 mt-5 text-center">
                <button
                  className="btn btn-outline-light_brown mb-5"
                  type="submit"
                >
                  Encontrar <ion-icon name="home-outline"></ion-icon> em...
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="bg_color mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5 text-center">
              <h1>
                <b>Testemunhos</b>
              </h1>
            </div>
            <div className="row owl-carousel owl-theme mt-5 mb-4">
              <div className="item">
                <div className="bg-white p-3">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    Enquanto Senhorio foi muito prâtico <br />
                    para comunicar o menu alojamento! <br />
                    Intuitivo e a funcionalidade de daber <br />
                    quem vai ficar na minha casa ajuda <br />
                    muito!A Plitica de proteçâo de <br />
                    proprietârios e algo que ma faz querer <br />
                    repetir a experiecia sem medo.
                  </p>
                  <div className="d-flex mt-5">
                    <img src={Profile} width="50px" alt="" />
                    <div className="details">
                      <h6 className="text-dark heading_1">
                        <b> John Doe </b>
                      </h6>
                      <p className="f-s-15">Proprietârio UniHosts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="bg-white p-3">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    Enquanto Senhorio foi muito prâtico <br />
                    para comunicar o menu alojamento! <br />
                    Intuitivo e a funcionalidade de daber <br />
                    quem vai ficar na minha casa ajuda <br />
                    muito!A Plitica de proteçâo de <br />
                    proprietârios e algo que ma faz querer <br />
                    repetir a experiecia sem medo.
                  </p>
                  <div className="d-flex mt-5">
                    <img src={Profile2} width="50px" alt="" />
                    <div className="details">
                      <h6 className="text-dark heading_1">
                        <b> John Doe </b>
                      </h6>
                      <p className="f-s-15">Proprietârio UniHosts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="bg-white p-3">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    Enquanto Senhorio foi muito prâtico <br />
                    para comunicar o menu alojamento! <br />
                    Intuitivo e a funcionalidade de daber <br />
                    quem vai ficar na minha casa ajuda <br />
                    muito!A Plitica de proteçâo de <br />
                    proprietârios e algo que ma faz querer <br />
                    repetir a experiecia sem medo.
                  </p>
                  <div className="d-flex mt-5">
                    <img src={Profile} width="50px" alt="" />
                    <div className="details">
                      <h6 className="text-dark heading_1">
                        <b> John Doe </b>
                      </h6>
                      <p className="f-s-15">Proprietârio UniHosts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="bg-white p-3">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    Enquanto Senhorio foi muito prâtico <br />
                    para comunicar o menu alojamento! <br />
                    Intuitivo e a funcionalidade de daber <br />
                    quem vai ficar na minha casa ajuda <br />
                    muito!A Plitica de proteçâo de <br />
                    proprietârios e algo que ma faz querer <br />
                    repetir a experiecia sem medo.
                  </p>
                  <div className="d-flex mt-5">
                    <img src={Profile2} width="50px" alt="" />
                    <div className="details">
                      <h6 className="text-dark heading_1">
                        <b> John Doe </b>
                      </h6>
                      <p className="f-s-15">Proprietârio UniHosts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="bg-white p-3">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    Enquanto Senhorio foi muito prâtico <br />
                    para comunicar o menu alojamento! <br />
                    Intuitivo e a funcionalidade de daber <br />
                    quem vai ficar na minha casa ajuda <br />
                    muito!A Plitica de proteçâo de <br />
                    proprietârios e algo que ma faz querer <br />
                    repetir a experiecia sem medo.
                  </p>
                  <div className="d-flex mt-5">
                    <img src={Profile} width="50px" alt="" />
                    <div className="details">
                      <h6 className="text-dark heading_1">
                        <b> John Doe </b>
                      </h6>
                      <p className="f-s-15">Proprietârio UniHosts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="bg-white p-3">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    Enquanto Senhorio foi muito prâtico <br />
                    para comunicar o menu alojamento! <br />
                    Intuitivo e a funcionalidade de daber <br />
                    quem vai ficar na minha casa ajuda <br />
                    muito!A Plitica de proteçâo de <br />
                    proprietârios e algo que ma faz querer <br />
                    repetir a experiecia sem medo.
                  </p>
                  <div className="d-flex mt-5">
                    <img src={Profile2} width="50px" alt="" />
                    <div className="details">
                      <h6 className="text-dark heading_1">
                        <b> John Doe </b>
                      </h6>
                      <p className="f-s-15">Proprietârio UniHosts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="bg-white p-3">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    Enquanto Senhorio foi muito prâtico <br />
                    para comunicar o menu alojamento! <br />
                    Intuitivo e a funcionalidade de daber <br />
                    quem vai ficar na minha casa ajuda <br />
                    muito!A Plitica de proteçâo de <br />
                    proprietârios e algo que ma faz querer <br />
                    repetir a experiecia sem medo.
                  </p>
                  <div className="d-flex mt-5">
                    <img src={Profile} width="50px" alt="" />
                    <div className="details">
                      <h6 className="text-dark heading_1">
                        <b> John Doe </b>
                      </h6>
                      <p className="f-s-15">Proprietârio UniHosts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="bg-white p-3">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    Enquanto Senhorio foi muito prâtico <br />
                    para comunicar o menu alojamento! <br />
                    Intuitivo e a funcionalidade de daber <br />
                    quem vai ficar na minha casa ajuda <br />
                    muito!A Plitica de proteçâo de <br />
                    proprietârios e algo que ma faz querer <br />
                    repetir a experiecia sem medo.
                  </p>
                  <div className="d-flex mt-5">
                    <img src={Profile2} width="50px" alt="" />
                    <div className="details">
                      <h6 className="text-dark heading_1">
                        <b> John Doe </b>
                      </h6>
                      <p className="f-s-15">Proprietârio UniHosts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="bg-white p-3">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    Enquanto Senhorio foi muito prâtico <br />
                    para comunicar o menu alojamento! <br />
                    Intuitivo e a funcionalidade de daber <br />
                    quem vai ficar na minha casa ajuda <br />
                    muito!A Plitica de proteçâo de <br />
                    proprietârios e algo que ma faz querer <br />
                    repetir a experiecia sem medo.
                  </p>
                  <div className="d-flex mt-5">
                    <img src={Profile} width="50px" alt="" />
                    <div className="details">
                      <h6 className="text-dark heading_1">
                        <b> John Doe </b>
                      </h6>
                      <p className="f-s-15">Proprietârio UniHosts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 p-0">
              <div className="bg_color p-5 b-r-1">
                <h3>
                  <b>
                    Tem Uma <br />
                    Propriedade?
                  </b>
                </h3>
                <p>
                  Comece jâ a ancuniciar e rentabilize <br />o seu imovel!
                </p>
                <button className="btn btn-outline-light_brown bordr-radius">
                  Anunciar
                </button>
              </div>
            </div>

            <div className="col-md-6 p-0">
              <div className="bg_img_1">
                <button className="btn_1" type="submit">
                  <b>Quero saber mais...</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>
                <b>Blog</b>
              </h1>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-3 mt-3">
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
            <div className="col-md-3 mt-3">
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
            <div className="col-md-3 mt-3">
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
            <div className="col-md-3 mt-3">
              <div className="img_box">
                <img src={Legs} className="rounded_1" alt="" />
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
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5 className="text_color">Os nossos parceiros</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg">
                <div className="">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link ml-5" href="#">
                        MakeLess <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link ml-5" href="#">
                        <ion-icon name="hand-right-outline"></ion-icon> coworks
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  ml-5" href="#">
                        <ion-icon name="leaf-outline"></ion-icon>greener
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  ml-5" href="#">
                        {" "}
                        <ion-icon name="ellipse-outline"></ion-icon>SAAS TODAY
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  ml-5" href="#">
                        Dorfus
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  ml-5" href="#">
                        Askimat
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
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
                  <a href="#">Sobre nós</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Torne-se um parceiro</a>
                </li>
                <li>
                  <a href="#">Termos e condições</a>
                </li>
                <li>
                  <a href="#">Política de cookies</a>
                </li>
                <li>
                  <a href="#">Fale connosco</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mt-5 pt-5">
              <h6 className="text-white">
                <b> Estudantes</b>
              </h6>
              <ul className="un_order">
                <li>
                  <a href="#">Como alugar</a>
                </li>
                <li>
                  <a href="#">Ajuda para os Estudantes</a>
                </li>
                <li>
                  <a href="#">Iniciar sessão/Regista</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mt-5 pt-5">
              <h6 className="text-white">
                <b> Senhorios</b>
              </h6>
              <ul className="un_order">
                <li>
                  <a href="#">Como funciona</a>
                </li>
                <li>
                  <a href="#">Ajuda para os senhorios</a>
                </li>
                <li>
                  <a href="#">Iniciar sessão/ Registar</a>
                </li>
                <li>
                  <a href="#" className="btn btn-outline-light_brown_1">
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
    </div>
  );
}
