import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { VscThreeBars } from 'react-icons/vsc';
import { BsBoxArrowInRight } from 'react-icons/bs';

const Div = styled.div`
    display: ${({ open }) => (open ? 'block' : 'none')};
    width: 100%;
    height: 100vh;
    z-index: 9999;
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);

    @media(min-width: 768px) {
        display:none;
    }
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
        height: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        padding: 20px 0;
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

    @media(min-width: 768px) {
        position: initial;
        transform: initial;
        transition: initial;
        height: auto;
        flex-flow: row wrap;
        width: 30%;
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-content: center;

        li {
            width: 45%;
            display: inline-block;
            justify-content: center;
            align-content: center;
            background-color: $black;
            border: 1px white solid;
            border-radius: 4px;
        }

        li:hover {
            background-color: white;
            color: black;
        }

        a {
            width: 100%;
            padding: 0;
            font-size: 12px;
            font-weight: 500;
            padding: 10px 8px;
        }
    }

    @media(min-width: 1024px) {
        a {
            font-size: 14px;
            font-weight: 600;
        }
    }

    @media(min-width: 1200px) {
        width: 25%;
        li {
            width: 45%;
        }

        a {
            font-size: 15px;
        }
    }

    @media(min-width: 1500px) {
        width: 20%;
    }
`;

const Span = styled.span`
    display: flex;
    font-size: 30px;
    justify-content: flex-end;
    padding: 15px;
    
    svg {
        align-self: center;
        cursor: pointer;
    }

    @media(min-width: 768px) {
        display:none;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 33%;
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
        display:none;
    }
`;

function LoggedOutNavbarItems() {
  const [open, setOpen] = useState(false);
  const onClickHandler = () => setOpen(!open);
  return (
    <>
      <Span open={open} onClick={onClickHandler}>
        <VscThreeBars />
      </Span>
      <Div open={open} />
      <Ul open={open}>
        <li><Link onClick={onClickHandler} to="/login">Ingresar</Link></li>
        <li><Link onClick={onClickHandler} to="/register">Registrarse</Link></li>
        <Button type="button" className="close_menu" onClick={onClickHandler}>
          Volver
          <BsBoxArrowInRight style={{ marginLeft: '5px' }} />
        </Button>
      </Ul>
    </>
  );
}

export default LoggedOutNavbarItems;
