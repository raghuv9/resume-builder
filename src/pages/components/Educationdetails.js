import React from 'react'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import {ResumeContext} from '../../context/ResumeContext'
import {useContext} from 'react';

export default function Educationdetails({previousStep,nextStep }) {
    const {content,setEducationContent} = useContext(ResumeContext);

    const handleChange = (e,type) => {
        e.preventDefault();
        setEducationContent(e.target.value,type);
    }
    return (
        <div>
            <Typography color="primary" variant="h5">Education</Typography> <br/>
            <form Validate autoComplete="off">
                <TextField variant="outlined" onChange={ e => handleChange(e,'institution') } label="Institution" className="w-100 mb-2" /> 
                <TextField variant="outlined" onChange={ e => handleChange(e,'board') }  label="Board" className="w-100 mb-2" />
                <TextField variant="outlined" onChange={ e => handleChange(e,'gpa') }  label="Gpa" className="w-100 mb-2" />
                <TextField variant="outlined"  onChange={ e => handleChange(e,'year') }  label="Year" className="w-100 mb-2" />
            </form>
            <Button variant="contained" color="secondary" onClick={previousStep}>Previous Step</Button>
            <Button className="float-right" variant="contained" color="primary" onClick={nextStep}>Next Step</Button>
        </div>
    )
}
