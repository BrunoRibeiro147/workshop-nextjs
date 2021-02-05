import { useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next'

type Profile = {
	name: string;
	bio: string;
}

type ProfileProps = {
	profile: Profile;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {

	return (
		<>
			<h1>Perfil</h1>
			<p>Nome: {profile.name}</p>
			<p>Bio: {profile.bio}</p>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{ params: { username: 'BrunoRibeiro147' } }
		],
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { username } = params;

	const response = await fetch(`https://api.github.com/users/${username}`)

	const profile = await response.json();

	return {
		props: {
			profile,
		},
		revalidate: 10,
	}
}

export default Profile;