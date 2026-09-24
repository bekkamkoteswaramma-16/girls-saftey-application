export default function SOSButton({ onClick, active }) {
  return (
    <button 
      onClick={onClick}
      style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: active ? 'green' : 'red',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 0 30px rgba(255,0,0,0.5)'
      }}
    >
      {active ? 'ALERT ACTIVE' : 'SOS'}
    </button>
  )
}