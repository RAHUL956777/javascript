const url = "https://api.github.com/users/rahul956777";

const xar = new XMLHttpRequest();
xar.open("GET", url);
xar.send();
xar.onreadystatechange = function () {
  if (xar.readyState === 4) {
    const data = JSON.parse(this.responseText);

    console.log(data);

    const h1 = document.getElementById("h1");
    h1.textContent = `Name: ${data.name}`;

    const h3 = document.getElementById("h3");
    h3.textContent = `About${data.bio}`;

    const pElement = document.getElementById("p");
    pElement.textContent = `id:${data.id}`;

    const avatar = document.getElementById("avatar");
    avatar.src = `${data.avatar_url}`;
  }
};
