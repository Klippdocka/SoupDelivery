import React, { useState, useEffect } from 'react';
import axios from '../../axios';



const SoupService = (props) => {

const [soup, setSoup] = useState('')


useEffect(() => {

    axios.get('https://soup-delivery-34dda.firebaseio.com/items.json')
    .then(response => {
        console.log(response);
    })

});

    return (
<div>

</div>
    );


}

export default SoupService;