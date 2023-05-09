import React, { useState } from 'react'


const ContactCard = () => {
    const [showAge, setShowAge] = useState(false)

    return(
        <div className="contact-wrapper">
            <div className="contact-card">
            <img src="https://via.placeholder.com/150" alt="profile"></img>
        <div className="user-info">
            <p>Name: Anything</p>
            <p>Email: Anything@any.kj</p>
            <button onClick={()=>setShowAge(!showAge)}>Show Age</button>
            {showAge? <p>Age: 23</p> : null}
        </div>
        </div>
    </div>
    )
}

export default ContactCard