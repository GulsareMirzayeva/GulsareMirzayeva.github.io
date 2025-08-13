import newPic from '../assets/flayer_post.jpg';

export default function VacationToastContent() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflow: 'visible',
      }}
    >
      <img
  src={newPic}
  alt="Helloprint elan"
  style={{
    width: '100%',
    height: 'auto',
    borderRadius: '6px',
    objectFit: 'contain',
    backgroundColor: '#fff'
  }}
/>
    </div>
  );
}
