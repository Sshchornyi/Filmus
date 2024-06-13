document.addEventListener('DOMContentLoaded', function () {
    var searchResults = JSON.parse(localStorage.getItem('searchResults'))
    //const searchResults = localStorage.getItem('searchResults')
    //console.log(searchResults)

    const contentType = document.getElementById('searchResultContent-type')
    if (searchResults && searchResults.length > 0) {

        for(let i = 0; i < searchResults.length; i++){
        const figure = document.createElement('figure')
        console.log(searchResults[0])
        const link = document.createElement('a')
        link.href = 'WatchPage.html'


        let elementData = ""
        elementData = searchResults[i]
        let elementDataArray = elementData.toString().split(',')
        let name = elementDataArray[1]
        let pathName = elementDataArray[2] +'/'+elementDataArray[0]
        


        const image = document.createElement('img')
        let path = pathName + '/poster.jpg'
        image.src = path
        image.setAttribute('alt','*poster*')

        console.log(path)
        

        link.appendChild(image)

        const caption = document.createElement('figcaption')
        caption.textContent = name

        figure.appendChild(link)
        figure.appendChild(caption)

        contentType.appendChild(figure)
    }
    }else{
        const p = document.createElement('p')
        p.textContent= 'Жодних результатів не знайдено!'
        contentType.appendChild(p)
    }
    localStorage.removeItem('searchResults')
});