async function GetUsers() {
  const Response = await fetch("https://jsonplaceholder.typicode.com/users");
  const Data = await Response.json();
  const benutzerlist = document.querySelector(".benutzer-liste");

  benutzerlist.innerHTML = Data.map((benutzer) => BenutzerHTML(benutzer)).join("")
}

GetUsers();

function PostsZeigen(id) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/benutzer.html`
}

function BenutzerHTML(benutzer) {
  return `<div class="benutzer-karte" onclick="PostsZeigen(${benutzer.id})">
    <div class="benutzer-karte__container">
      <h3>${benutzer.name}</h4>
        <p><b>Email:</b> ${benutzer.email}</p>
        <p><b>Webseite:</b> <a href="https://${benutzer.website}" target="_blank">${benutzer.website}</a></p>
        <p><b>Handy Nummer:</b> ${benutzer.phone}</sp>
    </div>
  </div>`;
}
