import React from 'react'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import {useContext,useState} from 'react';
import {ResumeContext} from '../../context/ResumeContext'

export default function Personaldetails({ nextStep }) {
    const {content,setHeaderContent} = useContext(ResumeContext);

    const handleInput = (e,type) => {
        e.preventDefault();
        setHeaderContent(e.target.value,type);
    }
    return (
        <div>
            <Typography color="primary" variant="h5">Personal Details</Typography> <br/>
            <form Validate autoComplete="off">
                <TextField onChange={ (e) => handleInput(e,'name') }  variant="outlined" id="standard-basic" label="Name" className="w-100 mb-2"  defaultValue={content.header.name} /> <br></br>
                <TextField onChange={ (e) => handleInput(e,'address') } variant="outlined" id="standard-basic" label="Address" className="w-100 mb-2"  defaultValue={content.header.address} /> <br></br>
                <TextField  onChange={ (e) => handleInput(e,'email') } variant="outlined" id="standard-basic" label="Email" className="w-100 mb-2" defaultValue={content.header.email} /><br></br>
                <TextField onChange={ (e) => handleInput(e,'phone') } variant="outlined" id="standard-basic" label="Phone" className="w-100 mb-2" defaultValue={content.header.phone} />
            </form>
            <Button className="mt-2 mb-2 float-right" variant="contained" color="primary" onClick={nextStep}>Next Step</Button>
        </div>
    )
}
