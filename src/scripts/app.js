// let articleURL = data.response.docs[1].web_url
// let snippet =  data.response.docs[1].lead_paragraph
// let headline = data.response.docs[1].headline.main

// let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=how-to-save-our-planet&api-key=HJHjXXlYvEwnMXdzDlPDwGGCLAsUnvId'
// console.log(url.response);
  

let api = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'
let search = 'how-to-save-our-planet'
let query = `q=${search}`
let apiKey =  '&api-key=HJHjXXlYvEwnMXdzDlPDwGGCLAsUnvId' 
let url = api + query + apiKey

let main = document.querySelector('main')

fetch(url)
        .then(res => {
          return res.json()
        })
        .then(data => {
          let articles = data.response.docs
          for(let i = 0; i < articles.length; i++){
            let a = document.createElement('a')
            let section = document.createElement('section')
            let h1 = document.createElement('h1')
            let image = document.createElement('img')
            let p = document.createElement('p')
            let articleURL = articles[i].web_url
            let snippet =  articles[i].snippet
            let headline = articles[i].headline.main
            h1.textContent = headline
            p.textContent = snippet
            // image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkAhaZGk1t3ejhmZEZhBCqMkDZY3vTzmJ-2UkyRB7AhPIG4AR'
            image.src = `./src/image/sea-creatures/sea-creatures-${i}.jpg`
            a.href = articleURL
            section.classList.add('section')
            section.classList.add('wrapper')
            section.appendChild(h1)
            section.appendChild(image)
            section.appendChild(p) 
            a.appendChild(section)
            main.appendChild(a)
          }
        })
        .catch(err => {
          console.log("error has occurred")
          console.log(err)
        })



