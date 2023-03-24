let a = [
  "Initilising hack tool",
  "Connecting to facebook",
  "connecting to the server 1",
  "Retriving data from the server",
  "Connectio failed. Retrying.....",
  "Trying Brute Force",
  "200k Passwords tried...",
  "Macth not found...",
  "Macth not found...",
  "Macth not found...",
  "Another 200k password tried...",
  "Macth Found",
  "Accessing Account",
  "Hacking tool sucessfully initilized",
];

const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

const showHack = async (message) => {
  await sleep(2);
  document.getElementById("text");
  text.innerHTML = text.innerHTML + message + "<br>";
};

(async () => {
  for (let i = 0; i < a.length; i++) {
    await showHack(a[i]);
  }
})();
