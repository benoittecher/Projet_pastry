import pastryService from "./services/pastryService.js";
import {getVignette, getDetails, addForm} from "./factories/pastrydomFactory.js";

const container = document.querySelector('.container .row');
let params = new URLSearchParams(document.location.search);
let action = params.get("action");
console.log("action :" + action);
let pastryView;
switch(action){
    case "details": 
        let id = params.get("id");
        if(id != null){
            let isValidId = await pastryService.isValidId(id);
            if(isValidId){
                let pastry = await pastryService.findById(id);
                pastryView = getDetails(pastry);
                container.innerHTML = pastryView;
            }
        }
    break;
    case "add":
        container.innerHTML = addForm();
    break;
    default:
        let pastries = pastryService
        .getAll()
        .then(data => {
            data.forEach(pastry => {
                pastryView = getVignette(pastry);
                container.innerHTML += pastryView;
            });

        });
    break;
}
    

