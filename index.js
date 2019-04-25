// Add your code here
// let formData = {name, email};

// let configurationObject = {
//   method: "POST",
//   headers: {
//   "Content-Type": "application/json",
//   "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };

function submitData(name, email){
   return fetch("http://localhost:3000/users", {
     method: "POST",
     headers: {
     "Content-Type": "application/json",
     "Accept": "application/json"
     },
     body: JSON.stringify({name, email})
   })
  .then(function(response){
    return response.json();
  })
  .then(function(object){
    return document.body.innerHTML = object.id
  })
  .catch(function(error){
    document.body.innerHTML = error
  })
}
