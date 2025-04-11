import { createFileRoute, Link } from "@tanstack/react-router";
import { RecordForm } from "@/components/RecordForm";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/record")({
	component: RecordPage,
});

function RecordPage() {
	return (
		<div className="container mx-auto p-4">
			<div className="flex justify-between items-center mb-6">
				<Button variant="outline" asChild>
					<Link to="/">홈으로</Link>
				</Button>
				<h1 className="text-2xl font-bold">오늘의 옷차림 기록</h1>
				<div className="w-[100px]" /> {/* 균형을 위한 빈 div */}
			</div>
			<RecordForm />
		</div>
	);
} 