fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F')
.then(response => response.json())
.then(data => {
    const newsList = document.getElementById('news-list');
    data.items.forEach(item => {
        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');//newly added
        const button = document.createElement('button');
        const a = document.createElement('a');
        h2.textContent = item.title;
        a.textContent = 'Read more';
        a.href = item.link;
        a.target = '_blank';

        li.appendChild(h2);
    
        li.appendChild(document.createTextNode(item.description));
        li.appendChild(a);
        h3.textContent = `Author: ~ ${item.author}`;
        button.textContent = 'DELETE';
        li.appendChild(button);
        li.appendChild(h3);
        button.addEventListener('click', ()=>{
            newsList.removeChild(li);
        })
        //li.appendChild(item.author);


        newsList.append(li);

    });
})


