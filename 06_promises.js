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
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject("Error:Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post promise", body: "post using promise" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Promise.all

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "good bye")
);
const promise4 = fetch("https://dev.dashmed.in/sample-data").then((res) =>
  res.json()
);
Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
