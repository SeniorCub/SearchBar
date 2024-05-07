// api key = 96ee6e6e97ca47e09c33c780cc713cf5
document.addEventListener('DOMContentLoaded', function () {
     const apiKey = '96ee6e6e97ca47e09c33c780cc713cf5'; // Replace with your News API key
     const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
 
     // Fetch news articles from News API
     fetch(apiUrl)
         .then(response => response.json())
         .then(data => {
             if (data.status === 'ok') {
               console.log(data);
                 displayNews(data.articles);
             } else {
                 console.error('Error fetching news:', data.message);
             }
         })
         .catch(error => {
             console.error('Error fetching news:', error);
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
 });
 