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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error:Something went wrong");
      }
    }, 2000);
  });
}
// async function init() {
//   await createPost({ title: "post async", body: "this is post async" });
//   getPosts();
// }
// init();

// Async Await with fetch
async function fetchSampleData() {
  const res = await fetch("https://dev.dashmed.in/sample-data");
  const data = await res.json();
  console.log(data.data[0].medName);
}
fetchSampleData();
