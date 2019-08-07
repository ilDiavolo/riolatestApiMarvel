const marvel = {
    render: () => {
                
        const urlApi = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3f21fe7922922955ecc99ed2579b353b&hash=505b249acb290944acfc0c21c3c8c29b'
        const contenido = document.querySelector('#marvelrow')
        let contenidoHTML = ''

        fetch(urlApi)
        .then( res => res.json())
        .then( data => {
            data.data.results.forEach(el => {
                console.log(el)
                let urlHero = el.urls[0].url

                contenidoHTML += `
                    <div class="col-md-4">
                        <a href="${urlHero}" target="_blank" >
                            <img src="${el.thumbnail.path}.${el.thumbnail.extension}" alt="${el.name}" class="img-thumbnail">
                        </a>
                        <h3>${el.name}</h3>
                    </div>
                `
            });

            contenido.innerHTML = contenidoHTML
        })
        
    }
    
}

marvel.render()