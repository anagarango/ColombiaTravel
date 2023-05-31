var navButtonsArray = ['Culture', 'Food', 'People', 'Landscapes', 'Point of Interests', 'Animals', 'Music']

var ouputDiv = document.querySelector(".nav-buttons")

navButtonsArray.forEach(function(item){
    var title = document.createElement('p')
    title.textContent = item
    ouputDiv.appendChild(title)
})
