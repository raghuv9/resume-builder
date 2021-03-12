import React from 'react'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import {ResumeContext} from '../../context/ResumeContext'
import {useContext} from 'react';

export default function Hobbies({previousStep,nextStep }) {
    const {content,setHobbiesContent} = useContext(ResumeContext);

    const handleChange = (e,index) => {
        e.preventDefault();
        setHobbiesContent(e.target.value,index);
    }
    return (
        <div>
            <Typography color="primary" variant="h5">Hobbies</Typography><br/>
            <form Validate autoComplete="off">
                {
                    content.hobbies.map((hobbie,i) => (
                        <TextField value={hobbie} variant="outlined" onChange={ e => handleChange(e,i) } label="Hobbie" className="w-100 mb-2" /> 
                    ))
                }
            </form>
            <Button variant="contained" color="secondary" onClick={previousStep}>Previous Step</Button>
            <Button className="float-right" variant="contained" color="primary" onClick={nextStep}>Next Step</Button>
        </div>
    )
}
