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

    postSoup(soup, indexToWrite){
        console.log("inside: " + indexToWrite)
        return this.instance.put(`/items/${indexToWrite}.json`, soup);
        
    }

}


export default new Axios()