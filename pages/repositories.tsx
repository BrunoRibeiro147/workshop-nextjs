import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next'

type Repo = {
	name: string;
}

type RepositoriesProps = {
	repos: Repo[]
}

const Repositories: React.FC<RepositoriesProps> = ({ repos }) => {

	// const [repos, setRepos] = useState<Repo[]>([])

	// useEffect(() => {
	// 	fetch('https://api.github.com/orgs/clubpetro/repos')
	// 		.then(response => response.json())
	// 		.then(data => setRepos(data));
	// }, []);


	return (
		<>
			<h1>Repositórios</h1>
			<ul>
				{
					repos.map(repo => (
						<li key={repo.name}>Nome: {repo.name}</li>
					))
				}
			</ul>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch('https://api.github.com/orgs/clubpetro/repos')

	const repos = await response.json();

	return {
		props: {
			repos,
		},
	}

}

export default Repositories;