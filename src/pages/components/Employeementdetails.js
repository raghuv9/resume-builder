import React from 'react'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Typography } from '@material-ui/core';
import {ResumeContext} from '../../context/ResumeContext'
import {useContext} from 'react';

export default function Employeementdetails({previousStep,nextStep }) {
    const {content,setProfessionalContent} = useContext(ResumeContext);

    const handleChange = (e,type) => {
        e.preventDefault();
        setProfessionalContent(e.target.value,type);
    }
    return (
        <div>
            <Typography color="primary" variant="h5">Employement Details</Typography> <br/>
            <form Validate autoComplete="off">
               <TextareaAutosize rowsMax={4} aria-label="maximum height" onChange={ e => handleChange(e,'professionalsummary') } placeholder="Professional summary" className="w-100 mb-2" />
                <TextField variant="outlined" onChange={ e => handleChange(e,'company') } label="company" className="w-100 mb-2" /> 
                <TextField variant="outlined" onChange={ e => handleChange(e,'position') }  label="position" className="w-100 mb-2" />
                <TextField variant="outlined" onChange={ e => handleChange(e,'start') }  label="start" className="w-100 mb-2" />
                <TextField variant="outlined"  onChange={ e => handleChange(e,'end') }  label="end" className="w-100 mb-2" />
                <TextareaAutosize rowsMax={4} aria-label="maximum height"  onChange={ e => handleChange(e,'desc') }  label="description" placeholder="Projects description" className="w-100 mb-2" />
            </form>
            <Button variant="contained" color="secondary" onClick={previousStep}>Previous Step</Button>
            <Button className="float-right" variant="contained" color="primary" onClick={nextStep}>Next Step</Button>
        </div>
    )
}
