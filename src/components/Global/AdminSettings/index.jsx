import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSetting, AiOutlineFileAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Aside = styled.aside`
    display: ${({ role }) => (role === 'admin' ? 'flex' : 'none')};
    position: absolute;
    top: 95px;
    left: 15px;
    flex-flow: column nowrap;
    width: 15%;
    justify-content: space-around;
    align-items: flex-start;

    @media(max-width: 1024px) {
        display: none;
    }
`;

const Div = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    svg {
        align-self: center;
        justify-self: flex-start;
        cursor: pointer;
        color: black;
        font-size:40px;
        animation: ${({ rotation }) => (rotation ? 'spin 0.5s linear infinite' : 'none')};
    }

    @keyframes spin {
        100%{transform: rotate(180deg);}
    }

    .item-name {
        display: inline-block;
        font-size: 20px;
        margin-left: 5px;
        cursor: pointer;
    }

    .item-name:after {
        display: block;
        content: 'Tools';
        border-bottom: solid 2px black;
        transform: scaleX(0);
        transition: transform 0.5s ease-in-out;
        transform-origin: 0% 50%;
    }

    .item-name:hover:after {
        transform: scaleX(1);
    }
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};;
    margin-top: 15px;
    padding: 0;
    width: 100%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    transition: visibility 0s, opacity 1s linear;
    opacity: ${({ open }) => (open ? '1' : '0')};
`;

const Li = styled.li`
    font-size: 35px;
    cursor: pointer;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(-100%)')};
    transition: transform 0.3s ease-in-out;

    a {
        text-decoration: none;
        color: black;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    }

    .item-name {
        display: inline-block;
        font-size: 20px;
        margin-left: 5px;
    }

    .item-name:after {
        display: block;
        content: 'Crear un producto';
        border-bottom: solid 2px black;
        transform: scaleX(0);
        transition: transform 0.5s ease-in-out;
        transform-origin: 0% 50%;
    }

    .item-name:hover:after {
        transform: scaleX(1);
    }
`;

function AdminSettings() {
  const { user } = useAuth();
  const [rotation, setRotation] = useState(false);
  const [open, setOpen] = useState(false);
  const itemName = 'Crear un producto';
  const rotate = () => {
    setRotation(true);
    setTimeout(
      () => setRotation(false),
      500,
    );
    setOpen(!open);
  };
  return (
    <Aside role={user ? user.role : ''}>
      <Div onClick={rotate} rotation={rotation}>
        <AiOutlineSetting />
        <span className="item-name" />
      </Div>
      <Ul open={open}>
        <Li open={open} itemName={itemName}>
          <Link to="/products/create">
            <AiOutlineFileAdd />
            {' '}
            <span className="item-name" />
          </Link>
        </Li>
      </Ul>
    </Aside>
  );
}

export default AdminSettings;
