import React, { useState } from 'react';


export default function Form() {
    const [formData, setformData] = useState ({
        isAgree : false, 
        gender : ""
    })

    return (
        <form>
            <div>
                <lable> SurdegsBröd : </lable>
                <input type="radio"/>
            </div>
        </form>
    )
}