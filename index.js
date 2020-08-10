function main(){
    getDogsFromDB();
    getCatsFromDB();
    getUserFromDB();
    getRobotFromDB();
    createNewDog();
    createNewUser();
}

function getDogsFromDB(){
    fetch('http://localhost:3000/dogs')
    .then(resp=> resp.json())
    .then(dogData=> {
        dogData.forEach(dog =>{
            //console.log(dog)
            renderDog(dog)
        })
    })
}

function renderDog(dog){
    const dogList = document.getElementById('dog-list')
    const li = document.createElement('li')
    li.innerText = `name: ${dog.dogName} - breed: ${dog.dogBreed}`
    dogList.append(li)
}

function getCatsFromDB(){
    fetch("http://localhost:3000/cats")
        .then(resp=> resp.json())
        .then(catData=> {
            catData.forEach(cat=>{
                renderCat(cat)
            })
        })
}

function renderCat(cat){
    const catList = document.getElementById('cat-list')
    const li = document.createElement('li')
    li.innerText = `name: ${cat.catName} - breed: ${cat.catBreed}`
    catList.append(li)
}

function getUserFromDB(){
    fetch("http://localhost:3000/users")
        .then(resp=> resp.json())
        .then(userData=> {
            userData.forEach(user =>{
                renderUser(user)
            })
        })
}

function renderUser(user){
    const userList = document.getElementById('user-list')
    const li = document.createElement('li')
    li.innerText = `name: ${user.userName} - email: ${user.email}`
    userList.append(li)
}

function getRobotFromDB(){
    fetch("http://localhost:3000/robots")
        .then(resp=> resp.json())
        .then(robotData=>{
            robotData.forEach(robot=>{
                renderRobot(robot)
            })
        })
}

function renderRobot(robot){
    const robotList = document.getElementById('robots-list')
    const li = document.createElement('li')
    li.innerText = `name: ${robot.robotName} - type: ${robot.robotType}`
    robotList.append(li)
}

function createNewDog(){
    const form = document.querySelector('#dog-form')
    form.addEventListener('submit', function(event){
        event.preventDefault()
        
        const dogInfo = {
            "dogName": event.target[0].value,
            "dogBreed": event.target[1].value
        }
        
        const confObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(dogInfo)
          };    
    
          fetch("http://localhost:3000/dogs", confObj)
            .then(resp=> resp.json())
            .then(dog=> {
                renderDog(dog)
            })
    })
}

function createNewUser(){
    const form = document.querySelector('#user-form')
    form.addEventListener('submit', function(event){
        event.preventDefault()
        
        const userInfo = {
            "userName": event.target[0].value,
            "email": event.target[1].value
        }

        const confObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
          };
        fetch("http://localhost:3000/users", confObj)
          .then(resp=> resp.json())
          .then(user=> {
              renderUser(user)    
          })
    })
    
}
main()