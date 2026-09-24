sos-app/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SOSButton.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ContactList.jsx
│   │   ├── NotificationToast.jsx
│   │   ├── Recorder.jsx
│   │   └── LiveMap.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Home.jsx        # Main dashboard after login
│   │
│   ├── services/
│   │   ├── LocationService.js
│   │   ├── SMSService.js
│   │   └── CallService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── README.md
 

import { useState } from 'react'

export default function ContactForm({ setContacts }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const addContact = () => {
    if(name && phone) {
      setContacts(prev => [...prev, {name, phone}])    
      setName(""); setPhone("")
    }
  }

  return ( 
    <div> 
      <input placeholder="Contact Name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="Phone Number" value={phone} onChange={e=>setPhone(e.target.value)} />
      <button onClick={addContact}>Add Contact</button>
    </div>
  )
}
