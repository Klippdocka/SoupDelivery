import axios from 'axios';



class Axios {
    constructor() {

        this.instance = axios.create({
            baseURL: 'https://soup-delivery-34dda.firebaseio.com/'
        });

    }

    getSoups() {
        return this.instance.get('/items.json')
    }

    /*postSoup(soup, indexToWrite){
        return this.instance.put(`/items/${indexToWrite}.json`, soup);
        
    }*/

    updateSoups(soups){
        return this.instance.put(`/items.json`, soups);
        
    }
}


export default new Axios()