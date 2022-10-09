const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const postList = document.querySelector("ul");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");

function sendRequest(method, url, data = null) {
  return fetch(url).then((response) => {
    if(response.status >= 200 && response.status < 300)
    {
        return response.json();
    }
    else
    {
        throw new Error('Something went wrong');
    }    
  }).catch(error => {
    console.log(error);
    throw new Error('Something went wrong Server Side')
  });
}

function sendRequest1(method, url, data = null) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
  }).then((response) => {
    if(response.status >= 200 && response.status < 300)
    {
        return response.json();
    }
    else
    {
        return response.json().then(errorData => {
            console.log(errorData);
            throw new Error('Something went wrong');
        })
       
    }    
  }).catch(error => {
    console.log(error);
    throw new Error('Something went wrong Server Side')
  });
}

async function fetchPosts2() {
  const postsData = await sendRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/pos"
  );

  for (const post of postsData) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector("li").id = post.id;
    listElement.append(postEl);
  }
}

async function createPost1(title, content) {
  try {
    const userId = Math.random();

    const post = {
      title: title,
      body: content,
      userId: userId,
    };

    sendRequest1("Post", "https://jsonplaceholder.typicode.com/pos", post);
  } catch (error) {
    alert(error);
  }
}

fetchPosts2();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost1(enteredTitle, enteredContent);
});
