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

    const [position] = useLocalStorage('position');
    const [company] = useLocalStorage('company');
    const [startDate] = useLocalStorage('startDate');
    const [endDate] = useLocalStorage('endDate');
    const [jobDescription] = useLocalStorage('jobDescription');

    return (
        <div>
            <PerPreview name={name} lastname={lastname} file={file} about={about} mail={mail} phone={phone}/>

            <div className='Expirience-info'>
                <h3>{position}</h3>
                <h3>{company}</h3>
                <h4>{startDate} - {endDate}</h4>
                <p>{jobDescription}</p>
            </div>
        </div>
    );
};

export default ExpPreview;