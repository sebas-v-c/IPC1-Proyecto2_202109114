import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/user.service';
import AuthService from '../services/auth.service';



function UserInfo() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    UserService.getPage()
      .then(
        (res) => {
          console.log(res.data.message);
          setIsLoading(false)
        }).catch(
          (error) => {
            console.log(error);
            navigate('/login');
          })
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <div>Verificando...</div>
  }

  const user = AuthService.getCurrentUser();

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
