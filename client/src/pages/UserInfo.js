import { Card } from 'react-bootstrap';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


function UserInfo() {
  let navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);

  return (
    <Card style={{ width: '25rem' }}>
      <Card.Title>Ficha de Entrenador</Card.Title>
      <Card.Img variant="left" src={user.avatar} />
      <Card.Body>
        <Card.Title><h3>{user.name}</h3></Card.Title>
        <Card.Text>
          Token JWT: <br />
          <strong>{user.token}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UserInfo;
