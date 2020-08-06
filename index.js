function submitData(name, email){
    let responseObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: name, email: email})
    }
    return fetch('http://localhost:3000/users', responseObj)
        .then(response => response.json())
        .then(newEntry => {
            let pTag = document.createElement('p')
            pTag.innerHTML = newEntry.id
            document.body.appendChild(pTag)
        })
        .catch(error =>{
            document.body.innerHTML = error.message
        })
}