module.exports = (templateData) => {

  const { engineers, interns, manager } = templateData
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
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            El Jefe
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:</li>
            <li class="list-group-item">Email:</li>
            <li class="list-group-item">Office Number:</li>
        </ul>
    </div>

    <div class="card" style="width: 18rem;">
        <div class="card-header">
            El Que Jala
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:</li>
            <li class="list-group-item">Email:</li>
            <li class="list-group-item">Github:</li>
        </ul>
    </div>

    <div class="card" style="width: 18rem;">
        <div class="card-header">
            El Que Trae el Cafe
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:</li>
            <li class="list-group-item">Email:</li>
            <li class="list-group-item">School:</li>
        </ul>
    </div>
</div>

    </main>


</body>

</html>
`
}