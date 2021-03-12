import React from 'react';
import {useState} from 'react';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import CreateIcon from '@material-ui/icons/Create';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import DehazeIcon from '@material-ui/icons/Dehaze';
import LanguageIcon from '@material-ui/icons/Language';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { ResumeContext } from '../../../context/ResumeContext';
import { useContext } from 'react';

export default function Template1() {
    const { content } = useContext(ResumeContext);
    return (
        <div>
            {/* professional summary */}
            <div className="row p-4">
                <div className="col-md-8 text-left ">
                    <div className="row">
                        <div className="col-md-12 text-left mb-4">
                            <Typography variant="h5"> { content.header.name } </Typography>
                            <Typography variant="p"> <TelegramIcon />   { content.header.address }   </Typography> <br/>
                            <Typography variant="p"> <EmailIcon />  { content.header.email }   </Typography> <br/>
                            <Typography variant="p"> <PhoneAndroidIcon />  {  content.header.phone }   </Typography>
                        </div>
                    </div>
                    <div className="mb-4">
                        <Typography variant="h5"> <CreateIcon /> Professional summary </Typography> <br/>
                        <p> {content.professionalsummary} </p>
                        {/* professional summary content */}
                    </div>
                    <div className="mb-4">
                        <Typography variant="h5"> <WorkIcon /> Employement history </Typography> <br/>
                       
                        <span> <b>Company:</b> { content.employeementhistory.company }</span> &nbsp;
                        <span><b>Position:</b>{ content.employeementhistory.position }</span> &nbsp;
                        <span><b>Start:</b>{ content.employeementhistory.start } </span> &nbsp;
                        <span><b>End:</b>{ content.employeementhistory.end } </span> &nbsp;
                        <p> <b>Desscription :</b> { content.employeementhistory.desc } </p>
                        {/* Employement content */}
                    </div>
                    <div className="mb-4">
                        <Typography variant="h5"> <SchoolIcon /> Education </Typography> <br/>
                        {
                            content.education.map((edu,index) => (
                                <>
                                    <span><b>Institution:</b> &nbsp;{ edu.institution }</span> &nbsp;
                                    <span><b>Board:</b> &nbsp;{ edu.board }</span> &nbsp;
                                    <span><b>Gpa:</b> &nbsp;{ edu.gpa } </span> &nbsp;
                                    <span><b>Year:</b> &nbsp;{ edu.gradYear } </span> &nbsp;
                                </>
                            ))
                        }
                       
                        {/* Employement content */}
                    </div>
                    <div className="mb-4">
                        <Typography variant="h5"> <BookmarksIcon /> Honours </Typography> <br/>
                        {/* Honours content */}
                         {/* Honours content */}
                         { content.honours.map((honour,index) => (
                                <p>{ honour }</p>
                            ))
                        } 
                    </div>
                </div>
                <div className="col-md-4 text-right page-right">
                    <div className="row">
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-8 text-left">
                            <div className="mb-4" id="resumebody">
                                <Typography variant="h5"> <LineWeightIcon /> Skills </Typography> <br/>
                                { content.skills.map((skill,index) => (
                                    <p>{ skill }</p>
                                ))
                                } 

                            </div>
                            <div className="mb-4">
                                <Typography variant="h5"> <DehazeIcon /> Hobbies </Typography> <br/>
                                {/* Honours content */}
                                { content.hobbies.map((hobbie,index) => (
                                    <p>{ hobbie }</p>
                                ))
                                } 
                            </div>
                            <div className="mb-4">
                                <Typography variant="h5"> <LanguageIcon  /> Langs</Typography> <br/>
                                {/* Honours content */}
                                { content.languages.map((lang,index) => (
                                    <p>{ lang }</p>
                                ))
                                } 
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}
