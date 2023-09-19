document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('fetchbutton')
    btn.addEventListener('click', fetchdetails)
  })
  
  function fetchdetails(){
  
    var xhr = new XMLHttpRequest
    var url = 'd_dogs.json'
    xhr.open('GET', url, true)
    xhr.onload = function(){
      if(xhr.status ===200){
        var dogdata = JSON.parse(xhr.responseText)
        displaydetails(dogdata)
      }
    }
    xhr.send();
  }
  
  function displaydetails(dogdata){
    var lst = document.getElementById('dogField')
    var ul =document.createElement('ul')
  
    dogdata.forEach(function(dog){
      var li = document.createElement('li')
      var breed = document.createElement('h3')
      breed.textContent = 'Breed: ' + dog.breed
      var color = document.createElement('p')
      color.textContent = 'Color: ' + dog.color
      var country = document.createElement('p')
      country.textContent = 'Country: ' + dog.country
  
      li.appendChild(breed)
      li.appendChild(color)
      li.appendChild(country)
  
      ul.appendChild(li)
    })
    
    lst.appendChild(ul)
  }