import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OutfitViewer } from "@/components/OutfitViewer";

export const Route = createFileRoute("/recommend")({
	component: RecommendPage,
});

function RecommendPage() {
	return (
		<div className="container mx-auto p-4">
			<Card className="mb-6">
				<CardHeader>
					<CardTitle>추천 스타일</CardTitle>
				</CardHeader>
				<CardContent>
					<OutfitViewer />
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>스타일 가이드</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<p className="text-gray-600">
							오늘의 날씨와 계절에 맞는 스타일을 추천드립니다. 각 스타일은 실제
							코디네이션을 참고하여 구성되었습니다.
						</p>
						<ul className="list-disc list-inside text-gray-600">
							<li>날씨: 맑음, 25°C</li>
							<li>계절: 여름</li>
							<li>추천 스타일: 캐주얼, 비즈니스 캐주얼, 스트릿</li>
						</ul>
					</div>
				</CardContent>
			</Card>
		</div>
	);
} 