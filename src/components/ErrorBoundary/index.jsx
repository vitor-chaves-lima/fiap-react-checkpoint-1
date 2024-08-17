import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
	const error = useRouteError();
	console.error(error);
	const errorMessage = error.data;
	return <div>{errorMessage}</div>;
}

export default ErrorBoundary;
