import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt } from "lucide-react";

interface OutfitCardProps {
	top: string;
	bottom: string;
}

export function OutfitCard({ top, bottom }: OutfitCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>추천 옷차림</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex justify-center gap-8">
					<div className="flex flex-col items-center">
						<Shirt className="h-12 w-12 text-blue-500" />
						<p className="mt-2">{top}</p>
					</div>
					<div className="flex flex-col items-center">
						<p className="mt-2">{bottom}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
} 