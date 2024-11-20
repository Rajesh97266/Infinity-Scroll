// Unsplash API
const count = 10;
const apikey = "DH27u5shkERXOs7lGV5cRaIF8BN6DdlzY5pQoePQohg";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

//Get Ohotos from unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    // Catch Error Here
  }
}

getPhotos();
