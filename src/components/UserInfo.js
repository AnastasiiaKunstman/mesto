export class UserInfo {
    constructor(usernameSelector, jobSelector) {
        this._username = document.querySelector(usernameSelector),
            this._job = document.querySelector(jobSelector)
    };

    getUserInfo() {
        this._personalInfo = {
            username: this._username.textContent,
            job: this._job.textContent
        };

        return this._personalInfo
    };

    setUserInfo(data) {
        this._username.textContent = data.username;
            this._job.textContent = data.job;
    }
};