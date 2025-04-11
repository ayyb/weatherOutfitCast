import { createFileRoute } from "@tanstack/react-router";
import { UserProfileForm } from "@/components/UserProfileForm";

export const Route = createFileRoute("/profile")({
	component: ProfilePage,
});

function ProfilePage() {
	return (
		<div className="container mx-auto py-8">
			<div className="max-w-2xl mx-auto">
				<UserProfileForm />
			</div>
		</div>
	);
} 