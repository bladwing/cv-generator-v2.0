import React from 'react';
import PerPreview from "../personal/PerPreview"
import useLocalStorage from 'react-use-localstorage';

const ExpPreview = () => {

    const [name] = useLocalStorage('name');
    const [lastname] = useLocalStorage('lastname');
    const [file] = useLocalStorage('file');
    const [about] = useLocalStorage('about');
    const [mail] = useLocalStorage('email');
    const [phone] = useLocalStorage('phone');

    return (
        <div>
            <PerPreview name={name} lastname={lastname} file={file} about={about} mail={mail} phone={phone}/>


            <div>
                <h3></h3>
            </div>
   
        </div>
    );
};

export default ExpPreview;