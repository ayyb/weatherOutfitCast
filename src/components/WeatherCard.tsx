import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud } from "lucide-react";

interface WeatherCardProps {
	temperature: number;
	condition: string;
}

export function WeatherCard({ temperature, condition }: WeatherCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Cloud className="h-6 w-6" />
					오늘의 날씨
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					<p className="text-2xl font-bold">{temperature}°C</p>
					<p className="text-gray-500">{condition}</p>
				</div>
			</CardContent>
		</Card>
	);
} 