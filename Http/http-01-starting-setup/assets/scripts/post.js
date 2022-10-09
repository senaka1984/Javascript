const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");

function SendPostRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = function () {
      //const resposneData = JSON.parse(xhr.response);
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject("Something went wrong");
      }
    };

    xhr.onerror = function() {
        reject( new Error ('something went wrong'));
    }

    xhr.send(JSON.stringify(data));
  });

  return promise;
}

async function createPost(title, content) {
  try {
    const userId = Math.random();

    const post = {
      title: title,
      body: content,
      userId: userId,
    };

    SendPostRequest("Post", "https://jsonplaceholder.typicode.com/posts", post);
  } catch (error) {
    console.log(error);
  }
}

createPost("DUMMY", "Hdfbdb sdkjskj");

fetchButton.addEventListener("click", createPost);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});
