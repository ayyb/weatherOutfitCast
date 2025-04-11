import { createFileRoute, Link } from "@tanstack/react-router";
import { WeatherCard } from "@/components/WeatherCard";
import { OutfitCard } from "@/components/OutfitCard";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<div className="container mx-auto p-4">
			<div className="flex justify-end gap-2 mb-4">
				<Button variant="outline" asChild>
					<Link to="/report">리포트 보기</Link>
				</Button>
				<Button asChild>
					<Link to="/record">옷차림 기록하기</Link>
				</Button>
			</div>
			<div className="grid gap-4">
				<WeatherCard temperature={23} condition="구름 조금" />
				<OutfitCard top="반팔 티셔츠" bottom="반바지" />
			</div>
		</div>
	);
}
