import { createClient } from 'contentful'; // named import
import { useEffect, useState } from 'react';

const PFetch = () => {
	const [projects, setProjects] = useState([]); // Step 1: Initialize State

	const Fetchdata = () => {
		const client = createClient({
			space: 'a9vq00s7s4xj',
			environment: 'master',
			accessToken: 'xXMohbUbF51Lt55zjs368O7DEq8zlIgkpUwb0Tl8Yjw',
		});
        // Step 2: Fetch Data
		client
			.getEntries({
				content_type: 'projects',
			})
			.then(response => {
				console.log('fetch practice - 1', response.items);
				const projects = response.items.map(item => {
					const { title, url, image } = item.fields;
					const id = item.sys.id;
					const img = image?.fields?.file?.url;
					return { title, url, img, id };
				});
				setProjects(projects); // Step 3: Process and Store Data
			})
			.catch(console.error);
	};

	useEffect(() => {
		Fetchdata(); // Step 4: Trigger Data Fetch on Component Mount
	}, []);

	return (
		<section className="projects">
			<div className="title">
				<h2>Projects</h2>
				<div className="underline"></div>
			</div>
			<div className="projects-center">
				{projects.map(project => {
					const { id, img, url, title } = project;
					return (
						<a
							key={id}
							href={url}
							target="_blank"
							rel="noreferrer"
							className="project">
							<img src={img} alt={title} className="img" />
							<h5>{title}</h5>
						</a>
					);
				})}
			</div>
		</section>
	);
};

export default PFetch;
