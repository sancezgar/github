class UI
{
    constructor()
    {
        this.profile = document.getElementById('profile');
    }
    showProfile(user)
    {
        //console.log(user);
        this.profile.innerHTML = `
            <div class="card mt-2 animated bounceInLeft">
                <img src="${user.avatar_url}" class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title">${user.name} / ${user.login}</h3>
                <div>
                <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">Ver perfil</a>
                <span class="badge badge-success">
                    Seguidores: ${user.followers}
                </span>
                <span class="badge badge-primary">
                    Siguiendo: ${user.following}
                </span>
                <span class="badge badge-warning">
                    Compania: ${user.company}
                </span>
                <span class="badge badge-info">
                    Blog: ${user.blog}
                </span>
            </div>
        `;
        this.clearMessage();
    }

    showMessage(message, cssClass)
    {
        this.clearMessage();
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        const profile = document.querySelector("#profile");
        content.insertBefore(div,profile);
    }

    clearMessage()
    {
        const alertFound = document.querySelector('.alert');
        if(alertFound)
        {
            alertFound.remove();
        }
    }

    showRepositories(repositories)
    {
        console.log(repositories);
        var template = '';
        repositories.forEach(element => {
            template += `
                <div class="card card-body mt-2 animated bounceInUp">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${element.html_url}" target="_blank">${element.name}</a>
                        </div>
                        <div class="col-md-6">

                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('repositories').innerHTML = template;
    }
}


module.exports = UI;