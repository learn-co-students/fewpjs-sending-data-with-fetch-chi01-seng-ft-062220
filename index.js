//Link: https://learn.co/tracks/web-development-immersive-3-1-module-three/front-end-web-programming/communication-with-the-server/sending-data-with-fetch-lab
function submitData(name, email){
  let configurationObject = {
    //makes a POST request to /user with a name and email
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify( {
      name,
      email
    } )
  }
  
  return fetch("http://localhost:3000/users", configurationObject)
  .then(function(response){
    return response.json()
  })
  // handles the POST request response, 
  // retrieves the new id value and appends it to the DOM
  .then(function(object) {
    document.body.innerHTML = object["id"]
  })
  // handles a failed POST request using catch, 
  // appends the error message to the DOM
  .catch(function(error) {
    document.body.innerHTML = error.message
  });

}