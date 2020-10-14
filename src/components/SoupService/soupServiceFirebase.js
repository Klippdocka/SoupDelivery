import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import styled from 'styled-components';

const SoupWrapper = styled.div`
`;

const SoupService = (props) => {

const [items, setItems] = useState([]);


useEffect(() => {

    axios.getSoups()
    .then(response => {
        setItems(response.data);
       

    })

}, []);

    return (
<div>
{items.map((element, index) => {
            return (<SoupWrapper key={index} item={element} id={element.id} value={element.title}>
                    <p>{element.title}</p>
            </SoupWrapper>
            );
        })}
</div>
    );


}

export default SoupService;