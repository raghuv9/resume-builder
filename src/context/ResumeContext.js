import React, { createContext, useState, useEffect } from "react";

export const ResumeContext = createContext();

export const  ResumeContextProvider = (props) => {
    const [content,setContent] = useState({
        header:{
            name:'',
            address:'',
            email:'',
            phone:''
        },
        professionalsummary:'professionalsummary',
        employeementhistory: {
            company: "",
            position: "",
            start: "",
            end: "",
            desc: ""
          },
          education: [
            {
            institution: "",
            board: "",
            gpa: "",
            gradYear: ""
          }],
        skills:['html','css','js','react','node','express'],
        hobbies:['cycling','reading books','travelling'],
        honours:['Best student','Employee of the year','Guinness record'],
        languages:['English','Hindi','Telugu']
    });

    const setHeaderContent = (data,type) => {
        var localheader = content.header;
        switch (type) {
            case 'name':
                localheader.name = data;
                setContent({...content,header: localheader});
                break;
            case 'address':
                localheader.address = data;
                setContent({...content,header:localheader})
                break;
            case 'email':
                localheader.email = data;
                setContent({...content,header:localheader})
                break;
            case 'phone':
                localheader.phone = data;
                setContent({...content,header:localheader})
                break;
            default:
                break;
        }
    }
    const setEducationContent = (data,type) => {
        var localeducation = content.education;
        switch (type) {
            case 'institution':
                localeducation[0].institution = data;
                setContent({...content,education:localeducation });
                break;
            case 'board':
                localeducation[0].board = data;
                setContent({...content,education:localeducation });
                break;
            case 'gpa':
                localeducation[0].gpa = data;
                setContent({...content,education:localeducation });
                break;
            case 'year':
                localeducation[0].gradYear = data;
                setContent({...content,education:localeducation });
                break;
            default:
                break;
        }
    }
    const setProfessionalContent = (data,type) => {
        var localemployeement = content.employeementhistory;
        switch (type) {
            case 'company':
                localemployeement.company = data;
                setContent({...content,employeementhistory: localemployeement});
                break;
            case 'position':
                localemployeement.position = data;
                setContent({...content,employeementhistory: localemployeement});
                break;
            case 'start':
                localemployeement.start = data;
                setContent({...content,employeementhistory: localemployeement});
                break;
            case 'end':
                localemployeement.end = data;
                setContent({...content,employeementhistory: localemployeement});
                break;
            case 'desc':
                localemployeement.desc = data;
                setContent({...content,employeementhistory:localemployeement})
                break;
            case 'professionalsummary':
                setContent({...content,professionalsummary:data})
                break;
            default:
                break;
        }
    }
    const setHonorsContent = (data) => {
        console.log('inisde setHonorsContent',data);
    }
    const setSkillsContent = (data,index) => {
        console.log('skills',data,index);
        var localskills = content.skills;
        localskills[index] = data;
        setContent({...content,skills:localskills})

    }
    const setHobbiesContent = (data,index) => {
        var localhobbies = content.hobbies;
        localhobbies[index] = data;
        setContent({...content,hobbies:localhobbies});
    }
    const setHonoursContent = (data,index) => {
        var localhonours = content.honours;
        localhonours[index] = data;
        setContent({...content,honours:localhonours});
    }
    const setLanguageContent = (data,index) => {
        var localLanguages = content.languages;
        localLanguages[index] = data;
        setContent({...content,languages:localLanguages});
    } 
   return(
    <ResumeContext.Provider value={{ 
        content,
        setHeaderContent,
        setEducationContent,
        setProfessionalContent,
        setHonorsContent,
        setSkillsContent,
        setHobbiesContent,
        setLanguageContent,
        setHonoursContent
     }}>
         { props.children }
    </ResumeContext.Provider>
   );
}