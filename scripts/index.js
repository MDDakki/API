// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function GetUsers() {
    const Response = await fetch("https://jsonplaceholder.typicode.com/users")
    const Data = await Response.json()
    const benutzerlist = document.querySelector('.benutzer-liste')

    benutzerlist.innerHTML = Data.map(benutzer => `<div class="benutzer-karte">
    <div class="benutzer-karte__container">
      <h3>${benutzer.name}</h4>
        <p><b>Email:</b> ${benutzer.email}</p>
        <p><b>Webseite:</b> <a href="https://${benutzer.website}" target="_blank">${benutzer.website}</a></p>
        <p><b>Handy Nummer:</b> ${benutzer.phone}</p>
    </div>
  </div>`).join('')
}

GetUsers()