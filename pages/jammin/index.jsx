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
	const [singleTune, setSingleTune] = useState();
	const { data: tunes, trigger: triggerGetTunes } = useFetchTunes();
	// const { data: tune, trigger: triggerGetTune } = useFetchTune();

	useEffect(() => {
		triggerGetTunes();
	}, [triggerGetTunes]);

	return (
		<div>
			<h1>All the Tunes</h1>
			{tunes ? (
				<div>
					{tunes.map((item, index) => (
						<p key={item.title}>
							{`${item.title}: ${item.length}`} -{" "}
							{/* <button
								onClick={() => {
									triggerGetTune(index);
								}}
							>
								Get Info
							</button> */}
						</p>
					))}
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
