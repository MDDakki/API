const postsElement = document.querySelector(".post-liste")

async function fetching() {
    const id = localStorage.getItem("id")
    const API = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const data = await API.json()

    postsElement.innerHTML = data.map(post =>`<div class="post">
    <div class="post__titel">
     ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`).join('')
}

fetching()