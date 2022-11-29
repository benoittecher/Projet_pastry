import Pastry from '../models/pastryModel.js';
import Image from '../models/imageModel.js';

class PastryService {

    constructor(pastries){
        this.pastries = pastries;
    }
    getAll = async () => {
        const response = await fetch('../../pastries.json');
        const dataJson = await response.json();

        let pastries = [];
        dataJson.forEach(p => {
            let images = [];
            p.images.forEach(i => {
                let image = new Image(
                    i.id,
                    i.name
                );
                images.push(image);
                });
            let pastry = new Pastry(
                p.id,
                p.name,
                p.description,
                p.recipeSummary,
                p.origin,
                images
            );
            pastries.push(pastry);
        })
        return pastries;
    }

    isValidId = async (id) => {
        const response = await fetch('../../pastries.json');
        const dataJson = await response.json();
        for(let i = 0; i < dataJson.length; i++){
            if(dataJson[i].id == id) return true;
        }
        return false;
        /*dataJson.forEach(p => {
            console.log(p.id == id);
            if(p.id == id) return true;
        });
        return false;*/
    }

    findById = async (id) => {
        const response = await fetch('../../pastries.json');
        const dataJson = await response.json();
        
        let filtered = dataJson.filter(p => 
            p.id == id
        );
        return (filtered != null ? filtered[0] : null);
    }

    add = (pastry) => {
       this.pastries = [...this.pastries, pastry];
    }

    removeById = (id) => {
        this.pastries = this.pastries.filter(p => p.id != id);
    }

}

export default new PastryService();
