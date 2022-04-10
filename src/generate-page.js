

const makeManager = (bosses) => {
    return ` 
    ${bosses.map(({ name, id, email, number }) => {
        return `
<div class="card" style="width: 18rem;">
<div class="card-header">
        ${name} - Manager
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
        <li class="list-group-item">Office Number: ${number}</li>
    </ul>
    </div>`
    })
            .join('')}
    `
}

const makeEngineer = (engineers) => {
    return `
    ${engineers.map(({ name, id, email, engGit }) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            ${name} - Engineer
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
            <li class="list-group-item">Github: <a href="${engGit}" target="_blank">${engGit}</a></li>
        </ul>
    </div>
    `
}).join('')}
    `

}

const makeInterns = (interns) => {
    return `
     
    ${interns.map(({name, id, email, school}) => {
    return`
    <div class="card" style="width: 18rem;">
    <div class="card-header">
        ${name} - Intern
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
        <li class="list-group-item">School: ${school}</li>
    </ul>
</div>
    `
})
.join('')}
    `
}

const createHTML = (bosses, engineers, interns) => {

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <title>Team Roster</title>
</head>

<body>
    <header>
        <h1>Dev Team Roster</h1>
    </header>

    <main>
    <div class="container d-flex justify-content-evenly">
${makeManager(bosses)}
${makeEngineer(engineers)}
${makeInterns(interns)}
</div>

    </main>


</body>

</html>
`
}

module.exports = {createHTML} 