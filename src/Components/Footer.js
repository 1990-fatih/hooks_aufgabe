import React from "react";



function Footer() {
  return (
<div style={{position:"relative",
    bottom:"0", width:"20%",
    className:"row"}} >
        
    <div style={{position:"absolut", textAlign: "center"}}>
        <ul style={{listStyleType:"none", display:"flex"}}>
            <li><a style={{marginLeft:"40%"}} href="">Impressum</a></li>
            <li><a style={{marginLeft:"10%"}} href="">Datenschutzerklärung</a></li>
            <li><a style={{marginLeft:"10%"}} href="">Über Uns</a></li>
            <li><a style={{marginLeft:"10%"}} href="">Satzung</a></li>
            <li><a style={{marginLeft:"10%"}} href="">News</a></li>
            <li><a style={{marginLeft:"10%"}} href="">Karriere bei BBZ e.V.</a></li>
            <li> <a style={{marginLeft:"10%"}} href="">Ansprechpartner</a></li>
        </ul>  
    </div>
    <div style={{position:"relative"}}>
        <h2>Westring 11, 44787 Bochum</h2>
    </div>
    <div style={{position:"absolut", class:"container-fluid"}}>    
    <div class="row">
        <ul>Bildungsscheck NRW</ul>
        <ul>ESF Basissprachkurse</ul>
        <ul>Flüchtlingsberatung</ul>
        <ul>Integrationskurse</ul>
        <ul>Sprachprüfungen</ul>
    </div>
    <div class="row">
        <form>
            <div style={{class:"col-md-9"}}>
            <div>
                <input type="String"  id="name" placeholder="Name"/>
            </div>
            <div>
                <input type="String"  id="email" placeholder="e-mail"/>
            </div>
            <div>
                <input type="String" placeholder="Sie sreiben uns!"/>
            </div>
            </div>
            <div style={{class:"col-md-9"}}>
               <div>
                <input type="checkbox" id="check"/>
                <label for="check">Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen gespeichert werden.</label>
            </div>
            <div>
                <button type="submit">Senden</button>
            </div> 
            </div>
            
        </form>
    </div>
    </div>
    <div style={{alignContent:"center"}}>
        <ul style={{listStyleType:"none", display:"flex"}}>
            <li><p>Staatlich anerkannte Weiterbildungseinrichtung</p></li>
            <li><p>Zertifiziert nach AZAV Geprüfte Qualität</p></li>
            <li><p>Anerkannter Träger der freien Jugendhilfe gemäß § 75 SGB VIII</p></li>
        </ul>      
    </div>
        <div>
         <img style={{ textAlign: "center", width:"100%"}} src="https://bbz-ev.de/wp-content/uploads/2021/07/BBZ-Logo.png"/>
        </div>
        <div style={{listStyleType:"none", display:"flex", position:"relative"}}>
        <ul style={{listStyleType:"none"}}>
        <li style={{ width:"50", marginRight:"10px"}}><img src="https://bbz-ev.de/wp-content/uploads/2021/07/FOWRUM-Logo-1-1-300x79.png"/></li> 
        <li style={{ width:"50", marginRight:"10px"}}><img src="https://bbz-ev.de/wp-content/uploads/2021/07/LernSmart-Logo-1-768x203.png"/></li> 
        <li style={{ width:"50", marginRight:"10px"}}><img src="https://bbz-ev.de/wp-content/uploads/2021/07/FJB-1-1536x334.png"/></li>  
        <li style={{ width:"50", marginRight:"10px"}}><img src="https://bbz-ev.de/wp-content/uploads/2021/07/FESA-Logo-1-768x203.png"/></li> 
        </ul>
        
        </div>

</div>
  )
}

export default Footer