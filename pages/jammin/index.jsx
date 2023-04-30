import { useCallback, useEffect, useState } from "react";

const useFetchTunes = () => {
	const [data, setData] = useState(null);

	const trigger = useCallback(() => {
		const fetchData = async () => {
			const response = await fetch(`/api/tunes`);
			const responseData = await response.json();
			setData(responseData);
		};

		fetchData();
	}, []);

	return { data, trigger };
};

const useFetchTune = () => {
	const [data, setData] = useState(null);

	const trigger = useCallback((id) => {
		const fetchData = async () => {
			const response = await fetch(`/api/tunes/${id}`);
			const responseData = await response.json();
			setData(responseData);
		};

		fetchData();
	}, []);

	return { data, trigger };
};

export default function Matt() {
	const { data: tunes, trigger: triggerGetTunes } = useFetchTunes();
	const { data: tune, trigger: triggerGetTune } = useFetchTune();

	useEffect(() => {
		triggerGetTunes();
	}, [triggerGetTunes]);

	return (
		<div>
			<h1>Get Tunes</h1>
			{tunes ? (
				<div>
					<h1>All the tunes are</h1>

					{tunes.map((item, index) => (
						<div key={item.title}>
							<p>{`${item.title}: ${item.length}`}</p>
							<button
								onClick={() => {
									triggerGetTune(index);
								}}
							>
								Get Info
							</button>
						</div>
					))}
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
