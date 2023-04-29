import { useCallback, useEffect, useState } from "react";

export default function Matt() {
	const [tunes, setTunes] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`/api/tunes`);
			const data = await response.json();
			setTunes(data);
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Get Tunes</h1>
			{tunes ? (
				<div>
					<h1>All the tunes are</h1>
					{tunes.map((item) => (
						<p key={item.title}>
							{`${item.title}: ${item.length}`} -{" "}
							<button>Get Info</button>
						</p>
					))}
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
