const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const postList = document.querySelector('ul');

function sendHttpRequest(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = function () {
      //const resposneData = JSON.parse(xhr.response);

      resolve(xhr.response);

      // const listOfPosts = xhr.response;

      // for (const post of listOfPosts) {
      //   const postEl = document.importNode(postTemplate.content, true);
      //   postEl.querySelector("h2").textContent = post.title.toUpperCase();
      //   postEl.querySelector("p").textContent = post.body;
      //   listElement.append(postEl);
      // }
    };

    xhr.send();
  });

  return promise;
}

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

// xhr.responseType = "json";

// xhr.onload = function () {
//   //const resposneData = JSON.parse(xhr.response);
//   const listOfPosts = xhr.response;

//   for (const post of listOfPosts) {
//     const postEl = document.importNode(postTemplate.content, true);
//     postEl.querySelector("h2").textContent = post.title.toUpperCase();
//     postEl.querySelector("p").textContent = post.body;
//     listElement.append(postEl);
//   }

//   console.log(listOfPosts);
// };

// xhr.send();

function fetchPosts() {
  sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts").then(
    (responseDate) => {
      for (const post of responseDate) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase();
        postEl.querySelector("p").textContent = post.body;
        postEl.querySelector('li').id = post.id;
        listElement.append(postEl);
      }
    }
  );
}

// ------------------ Async Await approach -----------------//

async function fetchPosts1() {
  const postsData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  for (const post of postsData) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector('li').id = post.id;
    listElement.append(postEl);
  }
}

fetchPosts1();

postList.addEventListener('click', event => {
  if(event.target.tagName === 'BUTTON')
  {
    const postId = event.target.closest('li').id;

    sendHttpRequest('DELETE', `https://sds/${postId}`);
  }
});