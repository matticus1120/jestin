import { useCallback, useEffect, useState } from "react";

const useGetTunes = async () => {
	const results = await fetch("/api/tunes");
	const data = await results.json();
	return data;
};

export default function Matt() {
	const [tunes, setTunes] = useState([]);

	const handleGetTunes = useCallback(async () => {
		const tuneResults = await useGetTunes();
		setTunes(tuneResults);
	}, []);

	useEffect(() => {
		handleGetTunes();
	}, []);

	return (
		<div>
			<h1>Get Tunes</h1>
			<button onClick={handleGetTunes}>Get Things</button>
			{tunes.length ? (
				<>
					{tunes.map((item) => (
						<p key={item.title}>
							{item.title}: {item.length}
						</p>
					))}
				</>
			) : (
				<></>
			)}
		</div>
	);
}
