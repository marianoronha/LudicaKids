fetch("http://localhost:3000/api/responsaveis")
// /api/teste- roda API
  .then(res => res.json())
  .then(data => {
    console.log(data);

    document.getElementById("resultado").innerText =
      data.responsaveis;
  })
  .catch(err => console.error(err));