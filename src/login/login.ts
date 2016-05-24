import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';
import {Component, OnInit} from '@angular/core';

let styles   = require('./login.css');
let template = require('./login.html');


@Component({
  selector: 'login',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})
export class Login {
  constructor(public router: Router, public http: Http) {
    (function (d) {
      var ref =  d.getElementsByTagName('script')[0];
      var js =  d.createElement('script');
      var js;
      js.id = 5;
      js.async = true;
      js.src = "//connect.facebook.net/en_US/sdk.js";

      ref.parentNode.insertBefore(js, ref);
    }
    (document));
    (function (d) {
      var ref =  d.getElementsByTagName('script')[0];
      var js =  d.createElement('script');
      var js;
      js.id = 5;
      js.async = true;
      js.src = "//vk.com/js/api/openapi.js";

      ref.parentNode.insertBefore(js, ref);
    }(document));
  }

  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }

  login(event, username, password) {
    if (event!=null) {
      event.preventDefault();
    }
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.json().id_token);
          this.router.parent.navigateByUrl('/home');
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  loginVK(event, username, password) {
    event.preventDefault();
    VK.init({
      apiId: 5476944
    });

    VK.Auth.login( (response) => {
    if (response.session) {
      VK.Auth.getLoginStatus(this.authInfo.bind(this));
      if (response.settings) {
        /* Выбранные настройки доступа пользователя, если они были запрошены */
        allert('/* Выбранные настройки доступа пользователя, если они были запрошены */');
      }
    } else {
      /* Пользователь нажал кнопку Отмена в окне авторизации */
    }
  });


      }

  authInfo(response) {
    if (response.session) {
    let username = response.session.mid ;
    let password = response.session.mid ;
    console.log(username, password);
    this.login(null, username, password);
    } else {
    alert('not auth');
    }
    }

  loginFB(event, username, password) {
      event.preventDefault();
      FB.init({
        appId      : 1767838473461435,
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.5' // use graph api version 2.5
      });
      FB.login((response) => {
          if (response.status === 'connected') {
            // Logged into your app and Facebook.
            FB.getLoginStatus(this.authInfoFB.bind(this));
            console.log('1');
          } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            console.log('2');
          } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            console.log('3');
          }
        });
    }
    authInfoFB(response) {
      let username = response.authResponse.userID;
      let password = response.authResponse.userID;
      this.login(null, username, password);
    }

}
