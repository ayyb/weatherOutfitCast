import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Route = createFileRoute("/recommend")({
	component: RecommendPage,
});

function RecommendPage() {
	const outfits = [
		{
			top: "https://example.com/top1.jpg",
			bottom: "https://example.com/bottom1.jpg",
			comment: "30대 남성은 이런 스타일이 인기 있어요",
		},
		{
			top: "https://example.com/top2.jpg",
			bottom: "https://example.com/bottom2.jpg",
			comment: "청량감 있는 룩으로 여름을 시원하게",
		},
	];

	return (
		<div className="container mx-auto p-4">
			<Card className="mb-6">
				<CardHeader>
					<CardTitle>오늘의 추천 스타일</CardTitle>
				</CardHeader>
				<CardContent>
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={30}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						className="w-full"
					>
						{outfits.map((outfit, index) => (
							<SwiperSlide key={index}>
								<div className="flex flex-col items-center gap-4">
									<div className="grid grid-cols-2 gap-4 w-full">
										<img
											src={outfit.top}
											alt="상의"
											className="w-full h-64 object-cover rounded-lg"
										/>
										<img
											src={outfit.bottom}
											alt="하의"
											className="w-full h-64 object-cover rounded-lg"
										/>
									</div>
									<p className="text-center text-gray-600">{outfit.comment}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>추천 스타일 카드</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{outfits.map((outfit, index) => (
							<Card key={index}>
								<CardContent className="p-4">
									<div className="flex flex-col items-center gap-2">
										<div className="grid grid-cols-2 gap-2 w-full">
											<img
												src={outfit.top}
												alt="상의"
												className="w-full h-32 object-cover rounded-lg"
											/>
											<img
												src={outfit.bottom}
												alt="하의"
												className="w-full h-32 object-cover rounded-lg"
											/>
										</div>
										<p className="text-sm text-center text-gray-600">
											{outfit.comment}
										</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
} 