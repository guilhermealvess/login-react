import React, { Component } from "react";
import { Input, Button, Form, Label } from "reactstrap";

export default class Login extends Component {
  /* constructor(props) {
    super(props);
  } */

  async signIn() {
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    const data = { username: email, password: password };
    /* MOCKADO
      const response = await axios.get(
      "http://www.mocky.io/v2/5e0e61e33300002b00aa8b38",
      data
    ); */

    fetch("http://localhost:5000/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response => {
      console.log("REQUEST", data);
      console.log("RESPONSE", response);
      if (response.status === 202) {
        console.log("DEU CERTO!");
        response.json().then(r => {
          console.log(r);
          localStorage.setItem("token", r.token);
        });
      } else {
        console.log("LOGIN RECUSADO!");
        response.json().then(r => console.log(r));
      }
    });
  }

  render() {
    return (
      <div className="text-center">
        <Form class="form-signin">
          <img
            class="mb-4"
            src="https://getbootstrap.com.br/docs/4.1/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h1 class="h3 mb-3 font-weight-normal">Login</h1>
          <Label for="inputEmail" class="sr-only">
            Endereço de email
          </Label>
          <Input
            type="email"
            id="inputEmail"
            onChange={e => (this.email = e.target.value)}
            class="form-control"
            placeholder="Seu email"
            required
            autofocus
          />
          <Label for="inputPassword" class="sr-only">
            Senha
          </Label>
          <Input
            type="password"
            id="inputPassword"
            onChange={e => (this.password = e.target.value)}
            class="form-control"
            placeholder="Senha"
            required
          />
          <div class="checkbox mb-3">
            <Label>
              <Input type="checkbox" value="remember-me" /> Lembrar de mim
            </Label>
          </div>
          <Button
            class="btn btn-log btn-primary btn-block"
            block
            onClick={this.signIn}
          >
            {" "}
            Login{" "}
          </Button>
          <p class="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
        </Form>
      </div>
    );
  }
}
