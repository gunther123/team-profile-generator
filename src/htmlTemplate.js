function renderHTML(data){
    let main =''

    for(i=0; i < data.length; i++){
        let name = data[i].name;
        let id = data[i].id;
        let email = data[i].email;
        let role = data[i].getRole();
        let info;

        if (role === 'Manager'){
            info = 'Office Number: ' + data[i].officeNumber;
        }
        else if(role === 'Engineer'){
            info = 'Github Username: ' + data[i].github;
        }
        else if(role === 'Intern'){
            info = 'School: ' + data[i].school;
        }
        else{
            console.log('This role does not exist');
        }

        main = main + `
        <div class="row">
         <div class="column">
          <div class="card">
              <img src="./test-image.jpg" alt="JaneDoe" style="width:100%">
              <div class="container">
              <h2>${name}</h2>
              <p class="title">Title: ${role}</p>
              <p>Employee ID: ${id}</p>
              <p>Email: ${email}</p>
              <p>${info}</p>
          </div>
        </div> 
      </div>`
    }



    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    <body>
    <header class="header">
    <h1>Team Profile</h1>
    </header>
    ${main}
    </body>
    </html>`
}

module.exports = renderHTML;