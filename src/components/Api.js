export class Api {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers;
    };

    //Информация о пользователе
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            //отклоняем промис в случае ошибки
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    };

    //Картинки с сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            //отклоняем промис в случае ошибки
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    };


    getAllData() {
        return Promise.all([this.getUserInfo(), this.getInitialCards()])
    };

    //Редактирование информации о пользователе
    changeUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.job
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            //отклоняем промис в случае ошибки
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    };


    //Создать новую карточку
    addNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            }),
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            //отклоняем промис в случае ошибки
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    };

    //Изменение аватара
    changeAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            //отклоняем промис в случае ошибки
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    };

    //Удаление карточки
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            //отклоняем промис в случае ошибки
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    };

    //Лайк
    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers,
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            //отклоняем промис в случае ошибки
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    removeLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            //отклоняем промис в случае ошибки
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }
}