const postUrl = "http://martineho.com/noroff/wp-json/wp/v2/posts?_embed";
const postCorsFixUrl = "https://noroffcors.herokuapp.com/" + url;
const postsContainer = document.querySelector(".posts-container");

async function fetchPosts() {
    const response = await fetch(postCorsFixUrl);
    const results = await response.json();

    console.log(results);

    const posts = results;

    container.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {

      if (i === 4) {
        break;
      }

      container.innerHTML +=
      `<div class="post">
            <button class="post-img">
                <img src="${posts[i]._embedded['wp:featuredmedia'][0].source_url}">
            </button>
                <div class="post-description">
                     <div class="date">6 colours</div>
                      <div class="title">${posts[i].name}</div>
              </div>
          </div>`;

}

}
fetchPosts();