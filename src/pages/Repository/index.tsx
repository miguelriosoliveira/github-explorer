import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
	repository: string;
}

const Repository: React.FC = () => {
	const { params } = useRouteMatch<RepositoryParams>();

	return (
		<>
			<Header>
				<img src={logo} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={20} />
					Voltar
				</Link>
			</Header>

			<RepositoryInfo>
				<header>
					<img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="alt" />
					<div>
						<strong>facebook/react</strong>
						<p>
							A declarative, efficient, and flexible JavaScript library for building user
							interfaces.
						</p>
					</div>
				</header>

				<ul>
					<li>
						<strong>9999</strong>
						<span>Stars</span>
					</li>
					<li>
						<strong>9999</strong>
						<span>Stars</span>
					</li>
					<li>
						<strong>9999</strong>
						<span>Stars</span>
					</li>
				</ul>
			</RepositoryInfo>

			<Issues>
				<Link to="asdasd">
					<div>
						<strong>asdasdasd</strong>
						<p>asdasdasd</p>
					</div>
					<FiChevronRight size={20} />
				</Link>
			</Issues>
		</>
	);
};

export default Repository;
