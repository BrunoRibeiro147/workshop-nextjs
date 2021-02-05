import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next'

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

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch('https://api.github.com/users/BrunoRibeiro147')

	const profile = await response.json();

	return {
		props: {
			profile,
		},
		revalidate: 10,
	}
}

export default Profile;