 const series = [
    ["Bones", "Кістки","Series"],
    ["Constellation", "Сузір'я","Series"],
    ["Hannibal", "Ганнібал","Series"],
    ["LD&R", "Любов смерть і роботи","Series"],
    ["Manhunt", "Полювання на вбивцю","Series"],
    ["Sherlock", "Шерлок","Series"],
    ["Supernatural", "Надприродне","Series"],
    ["Witcher", "Відьмак","Series"]

];
const movies = [
    ["Tusk", "Бивень", "Films"],
    ["Menu", "Меню", "Films"],
    ["Midsommer", "Сонцестояння", "Films"],
    ["Pearl", "Перл", "Films"],
    ["Sonic", "Сонік", "Films"],
    ["LOR", "Володар кілець", "Films"],
    ["Hustle", "Шахрайки", "Films"],
    ["Dune", "Дюна", "Films"],
    ["D&D", "Підземелля і дракони: Честь злодіїв", "Films"],
    ["American Psycho", "Американський психопат", "Films"],
];
const cartoons = [
    ["ATLA", "Аватар: Останній маг повітря","Cartoons"],
    ["JackieChan", "Джекі Чан","Cartoons"],
    ["Kung-Fu Panda", "Кунг-фу Панда","Cartoons"],
    ["Shrek", "Шрек","Cartoons"],
    ["TMNT", "Черепашки Мутанти Ніндзя","Cartoons"]
]
const anime = [
    ["Castlevania", "Кастлванія","Anime"],
    ["Frieren", "Фрірен","Anime"],
    ["Hellsing", "Гелсінг: війна з поганню","Anime"],
    ["Mashl", "Машл: Магія та М'язи","Anime"],
    ["Naruto", "Наруто", "Anime"],
    ["Spirited Away", "Віднесені привидами","Anime"]
]

document.getElementById('search-field').setAttribute('autocomplete', 'off');

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let searchInput = document.getElementById('search-field').value
    searchInput = searchInput.toLowerCase().trim()
    let filteredSearch
    if (searchInput != null && searchInput.length > 0) {
        let filteredAnime =  anime.filter((item) => item[1].toLowerCase().includes(searchInput))
        let filteredCartoons = cartoons.filter((item) => item[1].toLowerCase().includes(searchInput))
        let filteredMovies = movies.filter((item) => item[1].toLowerCase().includes(searchInput))
        let filteredSeries = series.filter((item) => item[1].toLowerCase().includes(searchInput))


        filteredSearch = filteredAnime.concat(filteredCartoons,filteredMovies,filteredSeries)

        console.log(filteredSearch)

    }
    //alert(filteredSearch.join('; '))
    localStorage.setItem('searchResults', JSON.stringify(filteredSearch));//збереження в пам'яті
    window.location.href = 'searchResult.html'

});

