const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
  { title: "post three", body: "this is post three" },
  { title: "post four", body: "this is post four" },
];
const getId = document.getElementById("posts");
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    getId.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "post five", body: "this is post five" }, getPosts);
