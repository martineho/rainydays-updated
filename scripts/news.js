const postUrl = "http://martineho.com/noroff/wp-json/wp/v2/posts?_embed";
const postCorsFixUrl = "https://noroffcors.herokuapp.com/" + postUrl;
const postsContainer = document.querySelector(".posts-container");

async function fetchPosts() {
    const response = await fetch(postCorsFixUrl);
    const results = await response.json();

    console.log(results);

    const posts = results;

    postsContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {

      if (i === 4) {
        break;
      }

      postsContainer.innerHTML +=
      `<div class="post">
          <button class="post-img"><img alt="${posts[i]._embedded['wp:featuredmedia'][0].alt_text}" src="${posts[i]._embedded['wp:featuredmedia'][0].source_url}"></button>
              <div class="post-description">
                  <div class="date">${posts[i].date}</div>
              <div class="title">${posts[i].title.rendered}</div>
        </div>`;

}

}
fetchPosts();