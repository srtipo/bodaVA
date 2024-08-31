import { useState } from "react";
import { ToAcceptButton } from "./ToAcceptButton.jsx";
import { ToCancelButton } from "./ToCancelButton.jsx";
import confetti from "canvas-confetti";
export  function Person({person,URL}) {

    const [status,setStatus] = useState("PENDING")
    const  getData = async () => {
        const response = await fetch(`${URL}/people/${person.id}`)
        const json = await response.json();
        setStatus(json.status)
        return json
        
    }
    const data   = getData().then(data => data)

    const cancelInvitation = async () => {
        const response = await makeRequest(person.id,"REJECTED")
        const json = await response.json();
        setStatus(json.status)
        
        
    }
    const acceptInvitation = async () => {
        const response = await makeRequest(person.id,"ACCEPTED")
        const json = await response.json();
        confetti();
        setStatus(json.status)
       
    }
    const makeRequest =  async (id,status) => {
        return await  fetch(`${URL}/people/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({status:status})
        })
    }
    return (
        <div style={{display : 'flex'}}> 
            <div style={{display:'flex',alignItems:'center',paddingInline:'3%',minWidth:'60%'}}>
                <p class="person"style={{color:'var(--primary-color)',alignItems:'center',marginBlock:'1%'}} id={person.id}>  {person.name}</p>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',minWidth:'35%',maxWidth:'40%'}}>
                {(status === "PENDING" || status === "REJECTED") &&
                    <div onClick={acceptInvitation} >
                        <ToAcceptButton id={person.id} > </ToAcceptButton>
                    </div>
                }
                {(status === "PENDING" || status === "ACCEPTED") &&
                    <div onClick={cancelInvitation} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <ToCancelButton id={person.id} ></ToCancelButton>
                    </div>
                }
                {status === "ACCEPTED" &&
                    <p style={{color:'var(--primary-color)',marginBlock:'1%'}} >  Aceptada</p>
                }
                {status === "REJECTED" &&
                    <p style={{color:'var(--primary-color)',marginBlock:'1%'}} >  Rechazada</p>
                }
            </div>
            
        </div>

    );
}