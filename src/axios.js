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

    postSoup(soup){
        return this.instance.post('/items.json', soup);
        
    }

}


export default new Axios()