var navButtonsArray = ['Culture', 'Food', 'People', 'Landscapes', 'Point of Interests', 'Animals', 'Music']

var outputDiv: Element | null = document.querySelector(".nav-buttons")

navButtonsArray.forEach(function(item){
    var title = document.createElement('p')
    title.textContent = item
    if(outputDiv !== null){
        outputDiv.appendChild(title)
    }
   
})
