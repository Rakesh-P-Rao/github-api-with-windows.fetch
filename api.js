let githubServer = "https://api.github.com/users";
//if want to communicate to any server use window.fetch() and also other ways are ajax and axios

window.fetch(githubServer).then(data => {
    //convert readable_stream into json data
    data.json().then(gitUsers => {
        let output = [];
        for (let user of gitUsers) {
            output += `
            <div>
                <img src = "${user.avatar_url}"</img> 
                <h1>user : ${user.login}</h1>
                <a href = "${user.html_url}" target="_blank">details</a>
            </div>`;
        }
        document.getElementById("template").innerHTML = output;
    }).catch(err => console.log(err))
}).catch((err) => console.log(err));
