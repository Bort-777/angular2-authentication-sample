import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router-deprecated';
import { AuthHttp } from 'angular2-jwt';
import ToDoList from './../todolist/todolist';
import {TodoStore} from './../store/todoStore';
import {Cat} from './../cat/cat';

let styles = require('./home.css');
let template = require('./home.html');


@Component({
  selector: 'home',
  directives: [[CORE_DIRECTIVES], ToDoList, Cat],
  template: template,
  styles: [styles]
})
export class Home {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  store: TodoStore;

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp, store: TodoStore) {
    this.store = store;
    this.jwt = localStorage.getItem('jwt');
    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
  }

  logout() {
    localStorage.removeItem('jwt');
    this.store.clear();
    this.router.parent.navigateByUrl('/login');
  }

  callAnonymousApi() {
    this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
  }

  callSecuredApi() {
    this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
  }

  _callApi(type, url) {
    this.response = null;
    if (type === 'Anonymous') {
      // For non-protected routes, just use Http
      this.http.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
    if (type === 'Secured') {
      // For protected routes, use AuthHttp
      this.authHttp.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
  }
}
