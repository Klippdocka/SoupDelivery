import axios from 'axios';



class Axios {
    constructor() {

        this.instance = axios.create({
            baseURL: 'https://soup-delivery-34dda.firebaseio.com/'
        });

    }

    getSoups() {
        return this.instance.get('https://soup-delivery-34dda.firebaseio.com/items.json')
    }


    postSoup(){
        return this.instance.post('/NewItems.json')
    }

}


export default new Axios()