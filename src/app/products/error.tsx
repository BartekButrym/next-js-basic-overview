'use client';

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
	return (
		<div>
			<h1>Error in reviewId</h1>
			<p>{error.message}</p>
			<button onClick={reset}>Try again</button>
		</div>
	);
}
