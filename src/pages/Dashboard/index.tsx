import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo" />
      <Title>Explore Repository Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/26489511?s=460&u=91dbf175d1ad5cd97f83a72a3a7890ce22cca10e&v=4"
            alt="Walafi Ferreira"
          />

          <div>
            <strong>teste</strong>
            <p>Lorem ipsum dolor sit, amet consectetur</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
