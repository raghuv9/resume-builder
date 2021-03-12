import React from 'react'
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import StepWizard from 'react-step-wizard';
import Personaldetails from './components/Personaldetails';
import Employeementdetails from './components/Employeementdetails';
import Educationdetails from './components/Educationdetails';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Honours from './components/Honours';
import Languages from './components/Languages';
import { Typography } from '@material-ui/core';
import {useState} from 'react';
import Template1 from './components/templates/Template1';


export const Dashboard = () => {
    const handleInput = (value,value2) =>{
    
    }
    const handleSaveToPDF = (event) => {
        event.preventDefault();
        window.print();
    };
    return (
        <div className="container-fluid">
            
            {/* row */}
            <div className="row"> 
                <div className="mt-4 pt-4 bg-white sidebar-height sidebar-border-right  col-md-3 col-sm-12 col-xs-12">
                    <Button className="mt-2 mb-2 w-100" variant="contained" color="primary">Add Your Details</Button>
                    <Card className="mt-2">
                        <CardContent>
                            <StepWizard>
                                <Personaldetails />
                                <Employeementdetails />
                                <Educationdetails />
                                <Skills />
                                <Hobbies />
                                <Honours/>
                                <Languages/>
                            </StepWizard>
                        </CardContent>
                    </Card><br/>
                    <Button  variant="outlined" color="secondary"  onClick={(event) => handleSaveToPDF(event) }>
                        Download/Print
                    </Button>
                </div>
                <div className="ml-4 mt-4 shadow bg-white col-md-8 col-sm-12 col-xs-12">                   
                    <div className="page p-4" size="A4">
                     {/*  templates */}
                     <Template1 />
                    </div>
                </div>
            </div>
        </div>
    )
}
