import { createClient } from 'contentful'; // named import

const client = createClient({
	space: 'a9vq00s7s4xj',
	environment: 'master',
	accessToken: 'xXMohbUbF51Lt55zjs368O7DEq8zlIgkpUwb0Tl8Yjw',
});

client
	.getEntries({
		content_type: 'projects',
	})
	.then(response => {
        //console.log('fetch practice - 1', response.items)
        const projects = response.items.map(item => {
            const {title, url, image} = item.fields;
            const id = item.sys.id;
            const img = image?.fields?.file?.url;
            return {title, url, img, id};
        })
        return projects;
        
    })
	.catch(console.error);

