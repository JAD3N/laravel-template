import React from 'react'
import { Link, Head } from '@inertiajs/inertia-react'

function Layout({ children }) {
	return (
		<>
			{/* <Head>
				<title>Test</title>
			</Head> */}
			<main>
				<header>
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
				</header>
				<article>{children}</article>
			</main>
		</>
	)
}

export default Layout;
