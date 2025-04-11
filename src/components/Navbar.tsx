import { Link } from "@tanstack/react-router";

export function Navbar() {
	return (
		<nav className="bg-white shadow-sm">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<div className="flex space-x-4">
						<Link
							to="/"
							className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
						>
							홈
						</Link>
						<Link
							to="/recommend"
							className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
						>
							추천
						</Link>
						<Link
							to="/profile"
							className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
						>
							프로필
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
} 