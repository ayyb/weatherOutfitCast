import { createRootRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Navbar } from "@/components/Navbar";

export const Route = createRootRoute({
	component: Root,
});

function Root() {
	return (
		<>
			<Navbar />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
}
