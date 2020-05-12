import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logo} alt="Github Explorer icon" />
			<Title>Explore repositórios no GitHub</Title>

			<Form>
				<input placeholder="Digite aqui" />
				<button type="submit">Buscar</button>
			</Form>

			<Repositories>
				<a href="teste">
					<img
						src="https://avatars3.githubusercontent.com/u/12296400?s=400&u=12bb04026b457caad8edb63cc24fa28bf92f6c6e&v=4"
						alt="user avatar"
					/>

					<div>
						<strong>repo-cool-name</strong>
						<p>descripttion cool também</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="teste">
					<img
						src="https://avatars3.githubusercontent.com/u/12296400?s=400&u=12bb04026b457caad8edb63cc24fa28bf92f6c6e&v=4"
						alt="user avatar"
					/>

					<div>
						<strong>repo-cool-name</strong>
						<p>descripttion cool também</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="teste">
					<img
						src="https://avatars3.githubusercontent.com/u/12296400?s=400&u=12bb04026b457caad8edb63cc24fa28bf92f6c6e&v=4"
						alt="user avatar"
					/>

					<div>
						<strong>repo-cool-name</strong>
						<p>descripttion cool também</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="teste">
					<img
						src="https://avatars3.githubusercontent.com/u/12296400?s=400&u=12bb04026b457caad8edb63cc24fa28bf92f6c6e&v=4"
						alt="user avatar"
					/>

					<div>
						<strong>repo-cool-name</strong>
						<p>descripttion cool também</p>
					</div>

					<FiChevronRight size={20} />
				</a>
			</Repositories>
		</>
	);
};

export default Dashboard;
