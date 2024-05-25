document.addEventListener('DOMContentLoaded', function () {
     const apiKey = '96ee6e6e97ca47e09c33c780cc713cf5'; // Replace with your News API key
     const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
 
     // Fetch news articles from News API
     fetch(apiUrl)
         .then(response => response.json())
         .then(data => {
               displayNews(data.articles);
         })
         .catch(error => {
             console.log('Error fetching news:', error);
         });
});

// Display news articles on the page
function displayNews(articles) {
     const newsContainer = document.getElementById('news-container');
     articles.forEach(article => {
          const articleElement = document.createElement('div');
          articleElement.className = 'news-article';
          articleElement.innerHTML = `
               <a href="${article.url}" class="news" target="_blank">
                    <div class="news-image"><img src="${article.urlToImage
                    }" ></div>
                    <div class="news-title">${article.title}</div>
                    <div class="news-description">${article.description}</div>
               </a>
          `;
          newsContainer.appendChild(articleElement);
     });
}
 
let searchInput = document.querySelector('#inputs');
let searchResultContainer = document.querySelector('#searchResult-container');
let searchResultssss = document.querySelector('.searchResult');
let close = document.querySelector('.close').addEventListener('click', ()=> {
     searchResultssss.style.display = 'none'
});

document.querySelector('.searchh').addEventListener('click',displayResults);
searchInput.addEventListener('input',displayResults);

function displayResults () {
     searchResultssss.style.display = 'block'
    // Function to filter items based on a search query
    function filterItems(query) {
        return items.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.club.toLowerCase().includes(query.toLowerCase()) ||
            item.country.toLowerCase().includes(query.toLowerCase()) ||
            (typeof item.number === 'number' && item.number.toString().includes(query))
        );
    }

    let searchTerm = searchInput.value.toLowerCase();
    const filteredItems = filterItems(searchTerm);

    // Clear previous search results
    searchResultContainer.innerHTML = '';

    // Iterate over filtered items and create HTML elements
    filteredItems.forEach(item => {
        let searchResultEach = document.createElement('div');
        searchResultEach.classList.add('searchResult-Each');

        searchResultEach.innerHTML =`
          <div class="imags"><img src="${item.image}" alt="${item.name}"></div>
          <div class="namee">${item.name}</div>
          <div class="club">${item.club}</div>
          <div class="number">${item.number}</div>
          <div class="country">${item.country}</div>
        `
        searchResultContainer.appendChild(searchResultEach);
    });
}

// Sample array of items
const items = [
//     Names of footballers, current club, country, number, player picture url from a football site, 50 players, give each id
     { id: 1, name: 'Cristiano Ronaldo', club: 'Manchester United', country: 'Portugal', number: 7, image: 'https://www.google.com/search?q=cristiano+ronaldo+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 2, name: 'Lionel Messi', club: 'Paris Saint-Germain', country: 'Argentina', number: 30, image: 'https://www.google.com/search?q=lionel+messi+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 3, name: 'Neymar Jr', club: 'Paris Saint-Germain', country: 'Brazil', number: 10, image: 'https://www.google.com/search?q=neymar+jr+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 4, name: 'Kylian Mbappe', club: 'Paris Saint-Germain', country: 'France', number: 7, image: 'https://www.google.com/search?q=kylian+mbappe+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 5, name: 'Mohamed Salah', club: 'Liverpool', country: 'Egypt', number: 11, image: 'https://www.google.com/search?q=mohamed+salah+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 6, name: 'Kevin De Bruyne', club: 'Manchester City', country: 'Belgium', number: 17, image: 'https://www.google.com/search?q=kevin+de+bruyne+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 7, name: 'Robert Lewandowski', club: 'Bayern Munich', country: 'Poland', number: 9, image: 'https://www.google.com/search?q=robert+lewandowski+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 8, name: 'Sadio Mane', club: 'Liverpool', country: 'Senegal', number: 10, image: 'https://www.google.com/search?q=sadio+mane+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 9, name: 'Harry Kane', club: 'Tottenham Hotspur', country: 'England', number: 10, image: 'https://www.google.com/search?q=harry+kane+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 10, name: 'Romelu Lukaku', club: 'Chelsea', country: 'Belgium', number: 9, image: 'https://www.google.com/search?q=romelu+lukaku+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 11, name: 'Karim Benzema', club: 'Real Madrid', country: 'France', number: 9, image: 'https://www.google.com/search?q=karim+benzema+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 12, name: 'Luis Suarez', club: 'Atletico Madrid', country: 'Uruguay', number: 9, image: 'https://www.google.com/search?q=luis+suarez+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 13, name: 'Eden Hazard', club: 'Real Madrid', country: 'Belgium', number: 7, image: 'https://www.google.com/search?q=eden+hazard+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 14, name: 'Gareth Bale', club: 'Real Madrid', country: 'Wales', number: 11, image: 'https://www.google.com/search?q=gareth+bale+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 15, name: 'Antoine Griezmann', club: 'Atletico Madrid', country: 'France', number: 7, image: 'https://www.google.com/search?q=antoine+griezmann+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 16, name: 'Paul Pogba', club: 'Manchester United', country: 'France', number: 6, image: 'https://www.google.com/search?q=paul+pogba+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 17, name: 'Bruno Fernandes', club: 'Manchester United', country: 'Portugal', number: 18, image: 'https://www.google.com/search?q=bruno+fernandes+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 18, name: 'Raheem Sterling', club: 'Manchester City', country: 'England', number: 7, image: 'https://www.google.com/search?q=raheem+sterling+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 19, name: 'Trent Alexander-Arnold', club: 'Liverpool', country: 'England', number: 66, image: 'https://www.google.com/search?q=trent+alexander-arnold+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 20, name: 'Alisson Becker', club: 'Liverpool', country: 'Brazil', number: 1, image: 'https://www.google.com/search?q=alisson+becker+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 21, name: 'Thibaut Courtois', club: 'Real Madrid', country: 'Belgium', number: 1, image: 'https://www.google.com/search?q=thibaut+courtois+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 22, name: 'Ederson Moraes', club: 'Manchester City', country: 'Brazil', number: 31, image: 'https://www.google.com/search?q=ederson+moraes+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 23, name: 'Marc-Andre ter Stegen', club: 'Barcelona', country: 'Germany', number: 1, image: 'https://www.google.com/search?q=marc-andre+ter+stegen+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 24, name: 'Jan Oblak', club: 'Atletico Madrid', country: 'Slovenia', number: 13, image: 'https://www.google.com/search?q=jan+oblak+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 25, name: 'Virgil van Dijk', club: 'Liverpool', country: 'Netherlands', number: 4, image: 'https://www.google.com/search?q=virgil+van+dijk+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 26, name: 'Ruben Dias', club: 'Manchester City', country: 'Portugal', number: 3, image: 'https://www.google.com/search?q=ruben+dias+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 27, name: 'Aymeric Laporte', club: 'Manchester City', country: 'France', number: 14, image: 'https://www.google.com/search?q=aymeric+laporte+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 28, name: 'Andrew Robertson', club: 'Liverpool', country: 'Scotland', number: 26, image: 'https://www.google.com/search?q=andrew+robertson+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 29, name: 'Joao Cancelo', club: 'Manchester City', country: 'Portugal', number: 27, image: 'https://www.google.com/search?q=joao+cancelo+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 30, name: 'Joshua Kimmich', club: 'Bayern Munich', country: 'Germany', number: 6, image: 'https://www.google.com/search?q=joshua+kimmich+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 31, name: 'Frenkie de Jong', club: 'Barcelona', country: 'Netherlands', number: 21, image: 'https://www.google.com/search?q=frenkie+de+jong+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 32, name: 'Luka Modric', club: 'Real Madrid', country: 'Croatia', number: 10, image: 'https://www.google.com/search?q=luka+modric+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 33, name: 'N\'Golo Kante', club: 'Chelsea', country: 'France', number: 7, image: 'https://www.google.com/search?q=n%27golo+kante+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 34, name: 'Casemiro', club: 'Real Madrid', country: 'Brazil', number: 14, image: 'https://www.google.com/search?q=casemiro+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 35, name: 'Sergio Busquets', club: 'Barcelona', country: 'Spain', number: 5, image: 'https://www.google.com/search?q=sergio+busquets+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 36, name: 'Marco Verratti', club: 'Paris Saint-Germain', country: 'Italy', number: 6, image: 'https://www.google.com/search?q=marco+verratti+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 37, name: 'Georginio Wijnaldum', club: 'Paris Saint-Germain', country: 'Netherlands', number: 18, image: 'https://www.google.com/search?q=georginio+wijnaldum+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 38, name: 'Toni Kroos', club: 'Real Madrid', country: 'Germany', number: 8, image: 'https://www.google.com/search?q=toni+kroos+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 39, name: 'Thiago Alcantara', club: 'Liverpool', country: 'Spain', number: 6, image: 'https://www.google.com/search?q=thiago+alcantara+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 40, name: 'Luka Modric', club: 'Real Madrid', country: 'Croatia', number: 10, image: 'https://www.google.com/search?q=luka+modric+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 41, name: 'N\'Golo Kante', club: 'Chelsea', country: 'France', number: 7, image: 'https://www.google.com/search?q=n%27golo+kante+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 42, name: 'Casemiro', club: 'Real Madrid', country: 'Brazil', number: 14, image: 'https://www.google.com/search?q=casemiro+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
     { id: 43, name: 'Sergio Busquets', club: 'Barcelona', country: 'Spain', number: 5, image: 'https://www.google.com/search?q=sergio+busquets+images&rlz=1C1GCEU_enKE832KE832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ3YKz1JjzAhVQ8hQKHZJ6D6IQ_AUIBigB&biw=1366&bih=657#imgrc=2e2u7v5qOZbJrM' },
];