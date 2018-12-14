class Github
{
    constructor(client_id,client_secret)
    {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.repost_count = 7;
        this.repos_sort =  'created: asc';
    }
    async fetchUser(user)
    {
        const userDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const userData = await userDataRequest.json();
        const repositoryRequest = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repost_count}&sort=${this.repos_sort}`);
        const repositories = await repositoryRequest.json();
        return {userData, repositories};
    }
}

module.exports = Github;