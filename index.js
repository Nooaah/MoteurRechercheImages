function envoyer()
{
    var inputRecherche = document.getElementById('inputRecherche');
    inputRecherche.style.marginTop = '0px';
    var recherche = inputRecherche.value;
    console.log(recherche);
    var images = document.getElementById('div_image');
    images.innerHTML = '';



    getAjax(`https://api.unsplash.com/search/photos?client_id=17dd4488ccc46e89e2aff30172d4d77295a5448dd70674140330b75057d61397&page=1&query=${recherche}`, function(reponse) {
        var reponse = JSON.parse(reponse);
        results = reponse.results;

        var erreur = document.getElementById('resultat_alert');
        if (reponse.total == 0)
        {
            
            erreur.classList = 'alert alert-danger';
            erreur.textContent = `Il n'y a aucune photo correspondant à votre recherche : ${recherche}`;
        }
        else
        {
            erreur.classList = 'alert alert-success';
            erreur.textContent = `Voici le résultat pour votre recherche : ${recherche}`;
        }
        
        for (i=0;i<results.length;i++)
        {
            var image = document.createElement('img');
            image.src = results[i].urls.raw;
            image.style.width = '500px';
            image.style.padding = '10px';
            image.style.borderRadius = '15px';
            document.getElementById('div_image').appendChild(image);
        }

    });


}
