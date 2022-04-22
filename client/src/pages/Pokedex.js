import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import UserService from '../services/user.service';
import PokedexLayout from '../components/layout/PokedexLayout';

import UserService from '../services/user.service';

import "bootstrap/dist/css/bootstrap.min.css";


function PokedexPage(props) {
  let navigate = useNavigate();
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    setUserLoading(true);
    UserService.getPage()
      .then(
        (res) => {
          console.log(res);
          setUserLoading(false)
        }).catch(function (error) {
          if (error.response) {
            console.log(error.response.status);
          }
          navigate('/login')
        }
        )
  }, []);

  if (userLoading) {
    return (
      <div>
        Verificando...
      </div>
    );
  }

  return (
    <div>
      <PokedexLayout />
    </div>
  );
}



export default PokedexPage;
