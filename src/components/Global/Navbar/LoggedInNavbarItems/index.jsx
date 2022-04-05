import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsBoxArrowInRight } from 'react-icons/bs';
import defaultImage from '../../../../assets/images/placeholder/user-default.png';

const ContainerDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;

const NameDiv = styled.div`
  display: none;

  @media(min-width: 768px) {
        display:block;
        color:white;
        font-size: 20px;
        margin-right: 15px;
    }
`;

const MoneyDiv = styled.div`
  color:white;
  font-size: 14px;
  margin-right: 10px;
  display: flex;
`;

const ImageDiv = styled.div`
  background-image: url(${defaultImage});
  background-size:contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 3px grey;
  margin-right: 16px;
  cursor: pointer;

  @media(min-width: 1024px) {
      margin-right: 0;
    }
`;

const Div = styled.div`
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Ul = styled.ul`
    list-style: none;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    flex-flow: column nowrap;
    justify-content: space-around;
    background-color: rgba(72, 74, 77, 1);
    width: 60%;
    padding: 15px;
    z-index: 10000;
    position: fixed;
    top: 0;
    right: 0;
    height: 30vh;

    li {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        padding: 15px 0;
        text-align: center;
        display: block;
        width: 100%;
        height: 100%;
        font-size: 22px;
        font-weight: 500;
        color: white;
        text-decoration: none;
    }

    a:hover {
        background-color: white;
        color: #484a4d;
    }

    .user_email {
        font-weight: 500;
        text-align: center;
      }

    @media(min-width: 768px) {
      .user_email {
        font-size: 20px;
      }

      li {
        height: 29%;
      }
    }

    @media(min-width: 1024px) {
      width: 25%;
      height: 100vh;

      li {
        height: 32%;
      }

      a{
        padding: 125px 0;
      }
    }
`;

const Button = styled.button`
    width: 100%;
    height: 30%;
    font-size: 22px;
    font-weight: 500;
    background-color: #484a4d;
    color:white;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    svg {
        margin-left: 5px;
        align-items: center;
    }

    &:hover {
        background-color: white;
        color: #484a4d;
    }

    @media(min-width: 768px) {
      height: 29%;
    }

    @media(min-width: 1024px) {
      height: 32%;
    }
`;

function LoggedInNavbarItems({ user, logOut }) {
  const [open, setOpen] = useState(false);
  const onClickHandler = () => setOpen(!open);
  const logOutHandler = () => {
    logOut();
    setOpen(!open);
  };
  return (
    <ContainerDiv>
      <NameDiv user={user}>
        { user.firstName }
        {' '}
        { user.lastName }
      </NameDiv>
      <MoneyDiv>
        (
        {user.balance}
        )
        {' '}
        💰
      </MoneyDiv>
      <ImageDiv open={open} onClick={onClickHandler} />
      <Div open={open} />
      <Ul open={open}>
        <div className="user_email">
          { user.email }
        </div>
        <li><Link onClick={onClickHandler} to="/profile">Perfil</Link></li>
        <li><Link onClick={logOutHandler} to="/login">Log out</Link></li>
        <Button type="button" className="close_menu" onClick={onClickHandler}>
          Volver
          <BsBoxArrowInRight style={{ marginLeft: '5px' }} />
        </Button>
      </Ul>
    </ContainerDiv>
  );
}

LoggedInNavbarItems.propTypes = {
  user: PropTypes.shape({
    balance: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  logOut: PropTypes.func.isRequired,
};

export default LoggedInNavbarItems;
