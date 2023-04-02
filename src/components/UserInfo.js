export class UserInfo {
    constructor(usernameSelector, jobSelector, avatarSelector) {
        this._username = document.querySelector(usernameSelector);
        this._job = document.querySelector(jobSelector);
        this._userAvatar = document.querySelector(avatarSelector);
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

    setUserAvatar(data) {
        this._userAvatar.src = data.avatar;
    }
};