class Github
{
    constructor(client_id,client_secret)
    {
        this.cliente_id = client_id;
        this.client_secret = client_secret;
    }
    async fetchUser(user)
    {
        const userDataRequest = await fetch(`http://api.github.com/users/?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        console.log(userDataRequest);
    }
}

module.exports = Github;