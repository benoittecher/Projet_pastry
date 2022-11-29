export const getVignette = (pastry) => {
    const {name, description, id} = pastry;
    const image = pastry.images != null && pastry.images.length > 0 ? pastry.images[0].name : "";

    return `
            <div class="col-4">
            <div class="card">
            <img src="assets/img/${image}" class="card-img-top" alt="${name}">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <a href="http://127.0.0.1:5500/?action=details&id=${id}" class="btn btn-primary">Voir en détails</a>
            </div>
            </div>
            </div>`;
}

export const getDetails = (pastry) => {
    const {name, description, recipeSummary,  origin, images} = pastry;
    const image = pastry.images != null && pastry.images.length > 0 ? pastry.images[0].name : "";
    return `
            <div class="col-12">
            <div class="card">
            <img src="assets/img/${image}" class="card-img-top" alt="${name}">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Lieu d'origine : ${origin.name}</p>
            <p class="card-text">${description}</p>
            <h6 class="card-title">Ingrédients</h5>
            <p class="card-text">${recipeSummary}</p>
            <a href="http://127.0.0.1:5500/" class="btn btn-primary">Retour à la page principale</a>
            </div>
            </div>
            </div>`;
}
export const addForm = () => {
    return `
        <h5>Ajout d'une patisserie</h5>
        <form action="#" method="get">
            <label for="name">Nom</label>
            <input type="text" id="name" name="name" placeholder="Nom de la patisserie">
            <label for="description">Description</label>
            <input type="text" name="description" id="description" placeholder="Description de la patisserie">
            <label for="image">Photo</label>
            <input type="file" name="image" id="image">
            <button class="btn btn-primary">Envoyer</button>
        </form>
    `
}