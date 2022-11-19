import { makeAutoObservable } from "mobx";

export default class Users {
  constructor() {
    this._data = [];
    makeAutoObservable(this);
  }

  setData(data) {
    this._data = data;
  }

  getData() {
    return this._data;
  }
}
