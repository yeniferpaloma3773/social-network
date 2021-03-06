export default () => {
  const viewLogIn = `<header class="log_sign-header">
    <div class="logo-icon"><img src="./assets/logoDesktop.png" /></div>
    <div class="logo-principal"><img src="./assets/logo-limatopia.png" />
    </div><a href="https://yeniferpaloma3773.github.io/social-network"/"> <button class="content-about">
      <p>ABOUT US</p></button>
    </a>
  </header>
  <section class="All-sectionsb">
    <section class="sectionFather">
      <section class="sectionSon">
        <div id="circle1"></div>
        <div id="circle2"></div>
        <div class="logo-principalMobile"><img src="./assets/logo-limatopia.png" /></div><a href="#/logIn"></a>
        <section id="containerLogIn">
          <h1>Log In</h1>
          <section class="sectionSubTitle">
            <h2 class="LogIn">Log in</h2>
            <a href="#/recovery-pass">Olvidé mi contraseña?</a>
          </section>
          <form class="container" id="logInForm">
            <div class="item"><input type="email" id="email" placeholder="Email" spellcheck="false" />
              <img src="./assets/email.png" alt="email" /></div>
            <div class="item"><img src="./assets/passw.jpg" alt="password" />
              <input type="password" id="password" placeholder="Password" spellcheck="false" style="border:none" />
              <button id="eye"> <img id="imgEye" src="https://storage.googleapis.com/md-links/closeye.png"></img> </button>
            </div>
          </form><span class="signIn" id="signInSpan">Log in con...</span>
          <section class="sectionNetworks"><img src="./assets/g.jpg" alt="Gmail" id="gmail" /><img src="./assets/fb.jpg"
              alt="Facebook" id="facebook" />
          </section>
          <section class="loginButton">
            <section class="loginButtonSon"><button type="submit" id="logIn">Log in</button>
            </section>
          </section>
          <p>No tienes una cuenta aún?<span> <a href="#/signUp">Sign up</a></span></p>
        </section>
      </section>
    </section><!-- Vista para ser mostrada al ingresar login, es solo una estrutura -->
    <section class="container-Publications-Profile"></section>
  </section>
  <footer></footer>`;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewLogIn;
  return divElement;
};
