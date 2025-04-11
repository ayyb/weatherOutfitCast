import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Outfit {
	image: string;
	comment: string;
	items: {
		top: string;
		bottom: string;
		shoes: string;
		accessories?: string[];
	};
}

export function OutfitViewer() {
	const [currentOutfit, setCurrentOutfit] = useState<Outfit>({
		image: "/outfits/casual1.jpg",
		comment: "캐주얼한 룩으로 데일리하게",
		items: {
			top: "반팔 티셔츠",
			bottom: "청바지",
			shoes: "스니커즈",
			accessories: ["캡 모자", "선글라스"],
		},
	});

	const outfits: Outfit[] = [
		{
			image: "/outfits/casual1.jpg",
			comment: "캐주얼한 룩으로 데일리하게",
			items: {
				top: "반팔 티셔츠",
				bottom: "청바지",
				shoes: "스니커즈",
				accessories: ["캡 모자", "선글라스"],
			},
		},
		{
			image: "/outfits/business1.jpg",
			comment: "세련된 비즈니스 캐주얼",
			items: {
				top: "체크 셔츠",
				bottom: "슬랙스",
				shoes: "로퍼",
				accessories: ["시계", "가죽 벨트"],
			},
		},
		{
			image: "/outfits/street1.jpg",
			comment: "편안한 스트릿 스타일",
			items: {
				top: "후드티",
				bottom: "조거 팬츠",
				shoes: "하이탑 스니커즈",
				accessories: ["백팩", "비니"],
			},
		},
	];

	return (
		<Card>
			<CardContent className="p-4">
				<div className="flex flex-col items-center gap-4">
					<img
						src={currentOutfit.image}
						alt="추천 스타일"
						className="w-full h-[400px] object-cover rounded-lg"
					/>
					<p className="text-center text-gray-600">{currentOutfit.comment}</p>
					<div className="w-full space-y-2">
						<div className="grid grid-cols-2 gap-2">
							<div className="bg-gray-50 p-2 rounded">
								<p className="font-medium">상의</p>
								<p className="text-sm text-gray-600">{currentOutfit.items.top}</p>
							</div>
							<div className="bg-gray-50 p-2 rounded">
								<p className="font-medium">하의</p>
								<p className="text-sm text-gray-600">{currentOutfit.items.bottom}</p>
							</div>
							<div className="bg-gray-50 p-2 rounded">
								<p className="font-medium">신발</p>
								<p className="text-sm text-gray-600">{currentOutfit.items.shoes}</p>
							</div>
							<div className="bg-gray-50 p-2 rounded">
								<p className="font-medium">악세서리</p>
								<p className="text-sm text-gray-600">
									{currentOutfit.items.accessories?.join(", ")}
								</p>
							</div>
						</div>
					</div>
					<div className="flex gap-2">
						{outfits.map((outfit, index) => (
							<Button
								key={index}
								variant="outline"
								onClick={() => setCurrentOutfit(outfit)}
								className={currentOutfit.image === outfit.image ? "bg-gray-100" : ""}
							>
								스타일 {index + 1}
							</Button>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
} 