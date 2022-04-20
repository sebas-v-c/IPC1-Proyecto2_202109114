
function Card(props) {
  return (
    // The children are the content inside something
    <div
      className='card'
      style={{
        backgroundColor: props.color,
        width: '18rem'
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
