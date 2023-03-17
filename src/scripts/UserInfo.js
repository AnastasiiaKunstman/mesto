export class UserInfo {
    constructor(usernameSelector, jobSelector) {
        this._usernameSelector = document.querySelector(usernameSelector),
        this._jobSelector = document.querySelector(jobSelector)
    };

    getUserInfo() {
        this._personalInfo = {
        username: this._usernameSelector.textContent,
        job: this._jobSelector.textContent
        };

        return this._personalInfo
    };

    setUserInfo(data) {
        this._usernameSelector.textContent = data.username,
        this._jobSelector.textContent = data.job
    };
};