import React from "react";
import UK from "../assets/images/UK.jpg";
import Logo2 from "../assets/images/Logo2.png";
import { Link } from "react-router-dom";

export default function Funciona() {
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
      <section className="funciona_img">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-12 text-center mt-5 pt-5">
              <h1 className="text-white">
                <b> Como Funciona</b>
              </h1>
              <p className="text-white">
                Tem uma propriedade para arrendar? Explicamos como <br />
                pode rentabiliza-la
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5">
              <div className="bg-white shadow-lg p-3 b-r-2">
                <div className="form-inline">
                  <i className="fa fa-desktop p-3 bg_light_color"></i>
                  <div className="d-flex">
                    <a href="/" className="ml-3 border rounded-circle p_12">
                      1
                    </a>
                    <div className="details">
                      <div className="details">
                        <h6 className="">
                          <b>Criar o an??ncio</b>
                        </h6>
                        <p className="f-s-15">
                          Gebore sa nuncis mais compilatuconsivelor uma
                          descri????o inglese conciso importance <br />
                          Defined eges propriedade para que es inquince
                          banaannte o que esperar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="bg-white shadow-lg p-3 b-r-2">
                <div className="form-inline">
                  <i className="fa fa-file-alt p-3 bg_light_color"></i>
                  <div className="d-flex">
                    <a href="/" className="ml-3 border rounded-circle p_12">
                      2
                    </a>
                    <div className="details">
                      <div className="details">
                        <h6 className="">
                          <b>Define as condi????es de arrendamento</b>
                        </h6>
                        <p className="f-s-15">
                          Gebore sa nuncis mais compilatuconsivelor uma
                          descri????o inglese conciso importance <br />
                          Defined eges propriedade para que es inquince
                          banaannte o que esperar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="bg-white shadow-lg p-3 b-r-2">
                <div className="form-inline">
                  <i className="fa fa-camera-retro p-3 bg_light_color"></i>
                  <div className="d-flex">
                    <a href="/" className="ml-3 border rounded-circle p_12">
                      3
                    </a>
                    <div className="details">
                      <div className="details">
                        <h6 className="">
                          <b>Adicione fotografias de propriedade</b>
                        </h6>
                        <p className="f-s-15">
                          Gebore sa nuncis mais compilatuconsivelor uma
                          descri????o inglese conciso importance <br />
                          Defined eges propriedade para que es inquince
                          banaannte o que esperar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="bg-white shadow-lg p-3 b-r-2">
                <div className="form-inline">
                  <i className="fa fa-credit-card p-3 bg_light_color"></i>
                  <div className="d-flex">
                    <a href="/" className="ml-3 border rounded-circle p_12">
                      4
                    </a>
                    <div className="details">
                      <div className="details">
                        <h6 className="">
                          <b>Recibe pedidos de reserve</b>
                        </h6>
                        <p className="f-s-15">
                          Sempre que houver alguem interessado onte enviar?? um
                          pedido de reserva com aquilo que <br />
                          procura ou recusados at?? 24h, a partir deste tempo j??
                          n??o ?? possivel acoltar a reserva
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="bg-white shadow-lg p-3 b-r-2">
                <div className="form-inline">
                  <i className="fa fa-envelope p-3 bg_light_color"></i>
                  <div className="d-flex">
                    <a href="/" className="ml-3 border rounded-circle p_12_1">
                      5
                    </a>
                    <div className="details">
                      <div className="details">
                        <h6 className="">
                          <b>Reserva confirmada</b>
                        </h6>
                        <p className="f-s-15">
                          Ap??s confirmera reserva procure dar o molimo de
                          informa????es indica????es ao seu novo inquilina
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="bg-white shadow-lg p-3 b-r-2">
                <div className="form-inline">
                  <i className="fa fa-home p-3 bg_light_color"></i>
                  <div className="d-flex">
                    <a href="/" className="ml-3 border rounded-circle p_12">
                      6
                    </a>
                    <div className="details">
                      <div className="details">
                        <h6 className="">
                          <b>Receba os seus novos inquilinos</b>
                        </h6>
                        <p className="f-s-15">
                          E importante que recebe para que se possas conhecer e
                          esclarecer eventuais d??vide <br />
                          meses pode tamb??m ser um dos t??picos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="bg-white shadow-lg p-3 b-r-2">
                <div className="form-inline">
                  <i className="fa fa-money-bill-alt p-3 bg_light_color"></i>
                  <div className="d-flex">
                    <a href="/" className="ml-3 border rounded-circle p_12">
                      7
                    </a>
                    <div className="details">
                      <div className="details">
                        <h6 className="">
                          <b>Receba o seu primeiro pagamento</b>
                        </h6>
                        <p className="f-s-15">
                          Diando confirmada debitamos ao inquilino a primeira
                          ronda e guardamos este valor ate <br />
                          est?? cometo, o dinheiro libertado para o seu cart??o,
                          que deve adicionar nos m??todos de pagamin
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-3 mb-3 text-center">
              <button className="btn btn-outline-light_brown col-md-4">
                Criar o an??ncio
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg_color pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-3 mt-5 pt-5 text-center">
              <h6 className="">
                <b className="border_129">
                  N??o tem tempo ou n??o est?? perto da sua propriedade? A UriHosts
                  tem a solu????o!
                </b>
              </h6>
              <h1 className="mt-5">
                <b>Conhe??a Os Nossos Unipackages</b>
              </h1>
            </div>
            <div className="col-md-4">
              <div className="bg-white b-r-2 p-3">
                <i className="fa fa-cog p-3 bg_light_color"></i>
                <h5 className="mt-3">
                  <b>N??s somos o senhorio por si!</b>
                </h5>
                <p className="f-s-15 font-size">
                  De forma a libertar as preocupa????es durante o ano letivo,
                  asseguramos o acompanhamento personalizado aos estudantes, de
                  modo a garantir a manuten????o da casa e respetiva
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white b-r-2 p-3">
                <i className="fa fa-credit-card p-3 bg_light_color"></i>
                <h5 className="mt-3">
                  <b>Pagamentos seguros</b>
                </h5>
                <p className="f-s-15 font-size">
                  Os pagamentos das rendas dos inquilinos s??o feitos de forma
                  segura e transparente. Temos tamb??m uma prote????o contra saidas
                  antecipadas do h??spede para que n??o haja imprevistos!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white b-r-2 p-3">
                <i className="fa fa-lock p-3 bg_light_color"></i>
                <h5 className="mt-3">
                  <b>Acesso total ?? UniDesk</b>
                </h5>
                <p className="f-s-15 font-size">
                  Atrav??s da nossa plataforma poder?? verificar os hospedes
                  atuais, respetivas informa????es contratuais, todas as
                  transa????es, eventuais repara????es existentes e adicionar
                  despeses se aplic??vel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5 pt-5">
            <div className="col-md-6 mt-3">
              <div className="bg-white p-3 b-r-2 shadow-lg">
                <h5 className="text-center">
                  <b>Gest??o da casa</b>
                </h5>
                <div className="form-inline">
                  <a href="/" className="ml-3 border rounded-circle p-52">
                    <i className="fa fa-check"></i>
                  </a>
                  <div className="details">
                    <p className="f-s-15 mt-17">
                      Comunica????o e representa????o dopropriet??rio
                    </p>
                  </div>
                </div>
                <div className="form-inline">
                  <a href="/" className="ml-3 border rounded-circle p-52">
                    <i className="fa fa-check"></i>
                  </a>
                  <div className="details">
                    <p className="f-s-15 mt-17">
                      Gest??o de rendas e avisos de pagamento
                    </p>
                  </div>
                </div>
                <div className="form-inline">
                  <a href="/" className="ml-3 border rounded-circle p-52">
                    <i className="fa fa-check"></i>
                  </a>
                  <div className="details">
                    <p className="f-s-15 mt-17">
                      Coordena????o de manuten????o e repara????es
                    </p>
                  </div>
                </div>
                <div className="form-inline">
                  <a href="/" className="ml-3 border rounded-circle p-52">
                    <i className="fa fa-check"></i>
                  </a>
                  <div className="details">
                    <p className="f-s-15 mt-17">Gest??o de despesas</p>
                  </div>
                </div>
                <div className="form-inline">
                  <a href="/" className="ml-3 border rounded-circle p-52">
                    <i className="fa fa-check"></i>
                  </a>
                  <div className="details">
                    <p className="f-s-15 mt-17">
                      Check-in/check-out dos estudantes.
                    </p>
                  </div>
                </div>
                <hr />
                <h4 className="text-center">
                  <b>Pre??o Sob Consulta</b>
                </h4>
                <div className="col-md-12 text-center">
                  <button className="btn btn-outline-light_brown col-md-6">
                    Saber mais
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="bg-white p-3 b-r-2 shadow-lg text-center">
                <h5 className="text-center">
                  <b>Gest??o da casa premium</b>
                </h5>
                <h6 className="text-center mt-5">
                  <b>Gest??o da casa</b>
                </h6>
                <i className="fa fa-plus text-center"></i>
                <div className="form-inline">
                  <a href="/" className="ml-3 border rounded-circle p-52">
                    <i className="fa fa-check"></i>
                  </a>
                  <div className="details">
                    <p className="f-s-15 mt-17">
                      Sess??o fotogr??fica e cria????o de an??ncios
                    </p>
                  </div>
                </div>
                <div className="form-inline pb-5">
                  <a href="/" className="ml-3 border rounded-circle p-52">
                    <i className="fa fa-check"></i>
                  </a>
                  <div className="details">
                    <p className="f-s-15 mt-17">
                      Limpezas ??s ??reas comuns e vistoria semestral.
                    </p>
                  </div>
                </div>
                <hr className="mt-5" />
                <h4 className="text-center">
                  <b>Pre??o Sob Consulta</b>
                </h4>
                <div className="col-md-12 text-center">
                  <button className="btn btn-outline-light_brown col-md-6">
                    Saber mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5 pt-5">
            <div className="col-md-6 mt-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54649.93807907335!2d74.41155021786663!3d31.120260694682667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919b97b6553a0cd%3A0x9306801f64aa8ed2!2sKasur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1648647384173!5m2!1sen!2s"
                width="555"
                height="327"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-6 p-0">
              <div className="bg_light_pink b-r-22 p-3 mt-3">
                <h3 className="mt-5 ml-5">
                  <b>Onde Estamos?</b>
                </h3>
                <button className="btn btn-white ml-5">
                  <i className="fa fa-map-marker-alt p-2 rounded-circle bg_pink"></i>{" "}
                  Portugal continental e ilhas{" "}
                </button>
                <p className="f-s-15 ml-5 mt-3">
                  Pode anunciar o seu espa??o de forma gratuita em todo o <br />{" "}
                  territ??rio nacional.
                </p>
                <p className="f-s-15 ml-5 mt-3">
                  Nas zonas assinaladas j?? pode encontrar os nossos unipackages!
                </p>
                <button className="btn btn-outline-light_brown ml-5">
                  Sober Mais
                </button>
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
                  <a href="/">Sobre n??s</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Torne-se um parceiro</a>
                </li>
                <li>
                  <a href="/">Termos e condi????es </a>
                </li>
                <li>
                  <a href="/">Pol??tica de cookies </a>
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
                  <a href="/">Iniciar sess??o/Regista</a>
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
                  <a href="/">Iniciar sess??o/ Registar</a>
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
      {/* Modal Box */}
      <div
        className="modal fade bd-example-modal-lg"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content p-3">
            <div className="row">
              <div className="col-md-12 text-center">
                <h5>
                  <b>Detalhes do Pagamento</b>
                </h5>
              </div>
              <div className="col-md-12 mt-3">
                <h6 className="text_heading">
                  <b> Via Unihosts</b>
                </h6>
                <div className="border b-r-2 b-color pl-3 pr-3 pt-3">
                  <h5>
                    <b>Primeira Renda</b>
                  </h5>
                  <p className="float-right mt-29">
                    300???&nbsp;&nbsp;{" "}
                    <i className="fa fa-chevron-up icons_2"></i>
                  </p>
                  <p className="f-s-15_1">
                    Pagamento antecipado respetivo ao m??s de Fevereiro
                  </p>
                </div>
              </div>
              <div className="col-md-12 mt-3">
                <h6 className="text_heading">
                  <b> Ao Senhorio</b>
                </h6>
                <div className="border b-r-2 b-color pl-3 pr-3 pt-3">
                  <h5>
                    <b>No dia do Check-in</b>
                  </h5>
                  <p className="float-right mt-29">
                    300???&nbsp;&nbsp;{" "}
                    <i className="fa fa-chevron-up icons_2"></i>
                  </p>
                  <p className="f-s-15_1">Cau????o</p>
                  <p className="float-right mt-35 mr-25">300???</p>
                </div>
              </div>
              <div className="col-md-12 mt-3">
                <h6 className="text_heading">
                  <b> Ao Senhorio</b>
                </h6>
                <div className="border b-r-2 b-color pl-3 pr-3 pt-3">
                  <h5>
                    <b>Mensalidade a pagar</b>
                  </h5>
                  <p className="float-right mt-29">
                    300???&nbsp;&nbsp;{" "}
                    <i className="fa fa-chevron-up icons_2"></i>
                  </p>
                  <p className="f-s-15_1">Renda Mensal de Mar??o 2022</p>
                  <p className="float-right mt-35 mr-25">300???</p>
                  <p className="f-s-15_1">Renda Mensal de Abril 2022</p>
                  <p className="float-right mt-35 mr-25">300???</p>
                  <p className="f-s-15_1">Renda Mensal de Maio 2022</p>
                  <p className="float-right mt-35 mr-25">300???</p>
                  <p className="f-s-15_1">Renda Mensal de Junho 2022</p>
                  <p className="float-right mt-35 mr-25">300???</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
