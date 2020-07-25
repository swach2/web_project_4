export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(this.baseUrl + '/cards', {
      headers: this.headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getUserInfo() {
    return fetch(this.baseUrl + '/users/me', {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAppInfo() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  setUserInfo({ name, about }) {
    return fetch(this.baseUrl + '/users/me', {
      headers: this.headers,
      method: "PATCH",
      body: JSON.stringify({ name, about }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setAvatar({ avatar }) {
    return fetch(this.baseUrl + '/users/me/avatar', {
      headers: this.headers,
      method: "PATCH",
      body: JSON.stringify({ avatar }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addCard({ name, link }) {
    return fetch(this.baseUrl + '/cards', {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify({ name, link }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteCard({ cardId }) {
    return fetch(this.baseUrl + '/cards/' + cardId, {
      headers: this.headers,
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setLike({ cardLiked, cardId }) {
    return fetch(this.baseUrl + '/cards/likes/' + cardId, {
      headers: this.headers,
      method: cardLiked ? "PUT" : "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
