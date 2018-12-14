const UI = require('./ui');
const Github = require('./github');

const {client_id,client_secret} = require('./config.json');


const github1 = new Github(client_id,client_secret);
const ui = new UI();

const userForm = document.getElementById("userForm");

userForm.addEventListener('submit',function(e){
    
    var textSearch = document.getElementById('textSearch').value;
    if(textSearch != '')
    {
        github1.fetchUser(textSearch).
            then(data => {
                if(data.userData.message === 'Not Found')
                {
                    ui.showMessage('No existe el usuario','alert alert-danger col-md-12 mt-2');
                }
                else
                {
                    ui.showProfile(data.userData);
                    ui.showRepositories(data.repositories);
                }
            });

    }
    e.preventDefault();

})
