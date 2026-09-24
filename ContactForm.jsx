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
