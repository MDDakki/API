const postsElement = document.querySelector(".post-liste")
const id = localStorage.getItem("id")

async function Suche(event) {
    const id = event.target.value
    renderPosts(id)
}

async function renderPosts(id) {
    const API = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const data = await API.json()
    postsElement.innerHTML = data.map(post => PostsHtml(post)).join('')
}

function PostsHtml(post) {
    return `<div class="post">
    <div class="post__titel">
     ${post.title}
    </div> 
    <p class="post__body">
      ${post.body}
    </p>
  </div>`
} 

renderPosts(id)