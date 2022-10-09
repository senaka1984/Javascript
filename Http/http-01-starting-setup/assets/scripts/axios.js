const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const postList = document.querySelector("ul");

async function fetchPosts1() {
  try {
    const postsData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    for (const post of postsData.data) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  try {
    const userId = Math.random();

    const post = {
      title: title,
      body: content,
      userId: userId,
    };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

createPost("DUMMY", "Hdfbdb sdkjskj");

fetchPosts1();
