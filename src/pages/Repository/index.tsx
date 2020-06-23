import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface PepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<PepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} /> Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/26489511?s=400&u=91dbf175d1ad5cd97f83a72a3a7890ce22cca10e&v=4"
            alt="Walafi"
          />
          <div>
            <strong>Faceboock/React</strong>
            <p>Lorem, ipsum dolor sit amet laborum </p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1223</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>145</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1223</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="hauhauhauh">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
