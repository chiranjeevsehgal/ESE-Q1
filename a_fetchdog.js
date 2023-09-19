document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('fetchbutton')
    btn.addEventListener('click', fetchimg)
})

function fetchimg(){
    var xhr = new XMLHttpRequest()
    var url='https://dog.ceo/api/breeds/image/random'
    xhr.open('GET', url, true)
    xhr.onload=function(){
        if (xhr.status===200){
            var dogimgs = JSON.parse(xhr.responseText)
            displayimg(dogimgs)
        }
    }
    xhr.send();
};

function displayimg(dogimgs){
    var list = document.getElementById('imageField')
    data = dogimgs.message
    var img = document.createElement('img')
    img.src = data

    list.appendChild(img)
}

window.onload = function () {
    fetchimg();
  };

