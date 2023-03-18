const createTodo = async (todo) => {
  let options = {
    method: "POST",
    Headers: {
      "Content-type": "application/jshon",
    },
    body: JSON.stringify(todo),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};
const getTodo = async (id) => {
  let responce = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + id
  );
  let r = await responce.json();
  return r;
};

const mainFunc = async () => {
  let todo = {
    title: "Rahul",
    body: "ECE",
    userId: 50,
  };
  let todor = await createTodo(todo);
  console.log(todor);
  console.log(await getTodo(5));
};

mainFunc();

//   .then((response) => response.json())
//   .then((json) => console.log(json));
