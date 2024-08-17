import { createBrowserRouter } from "react-router-dom";

import BaseLayout from "./layouts/Base";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/about",
				element: <h1>About</h1>,
			},
			{
				path: "/contact",
				element: <h1>Contact</h1>,
			},
		],
		errorElement: <ErrorBoundary />,
	},
]);

export default router;
