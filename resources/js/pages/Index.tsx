import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';

function Index(): JSX.Element {
	const [value, setValue] = useState(0);

	useEffect(() => {
		const id = setInterval(() => setValue(value => value + 1), 1000);
		return () => clearInterval(id);
	}, [setValue]);

	return (
		<Layout>Index {value}</Layout>
	);
}

export default Index;
