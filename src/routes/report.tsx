import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

// 임시 데이터
const weeklyData = [
	{ date: "2024-04-01", cold: 2, good: 5, hot: 1 },
	{ date: "2024-04-02", cold: 1, good: 6, hot: 1 },
	{ date: "2024-04-03", cold: 0, good: 7, hot: 1 },
	{ date: "2024-04-04", cold: 1, good: 6, hot: 1 },
	{ date: "2024-04-05", cold: 2, good: 5, hot: 1 },
	{ date: "2024-04-06", cold: 3, good: 4, hot: 1 },
	{ date: "2024-04-07", cold: 2, good: 5, hot: 1 },
];

const dailyRecords = [
	{
		date: "2024-04-07",
		records: [
			{
				time: "오전 9시",
				top: "반팔 티셔츠",
				bottom: "청바지",
				feedback: "적당함",
			},
			{
				time: "오후 2시",
				top: "반팔 티셔츠",
				bottom: "반바지",
				feedback: "더웠음",
			},
		],
	},
	{
		date: "2024-04-06",
		records: [
			{
				time: "오전 10시",
				top: "긴팔 티셔츠",
				bottom: "청바지",
				feedback: "추웠음",
			},
		],
	},
];

export const Route = createFileRoute("/report")({
	component: ReportPage,
});

function ReportPage() {
	return (
		<div className="container mx-auto p-4">
			<div className="flex justify-between items-center mb-6">
				<Button variant="outline" asChild>
					<Link to="/">홈으로</Link>
				</Button>
				<h1 className="text-2xl font-bold">옷차림 리포트</h1>
				<div className="w-[100px]" />
			</div>

			<Tabs defaultValue="weekly" className="space-y-4">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="weekly">주간 리포트</TabsTrigger>
					<TabsTrigger value="all">전체 리포트</TabsTrigger>
				</TabsList>

				<TabsContent value="weekly" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>주간 피드백 통계</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="h-[300px]">
								<ResponsiveContainer width="100%" height="100%">
									<BarChart data={weeklyData}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="date" />
										<YAxis />
										<Tooltip />
										<Bar dataKey="cold" fill="#3b82f6" name="추웠음" />
										<Bar dataKey="good" fill="#22c55e" name="적당함" />
										<Bar dataKey="hot" fill="#ef4444" name="더웠음" />
									</BarChart>
								</ResponsiveContainer>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>일별 기록</CardTitle>
						</CardHeader>
						<CardContent>
							<Accordion type="single" collapsible className="w-full">
								{dailyRecords.map((day) => (
									<AccordionItem key={day.date} value={day.date}>
										<AccordionTrigger>{day.date}</AccordionTrigger>
										<AccordionContent>
											<div className="space-y-4">
												{day.records.map((record, index) => (
													<div
														key={index}
														className="flex justify-between items-center p-2 border rounded-lg"
													>
														<div className="font-medium">{record.time}</div>
														<div className="text-gray-500">
															{record.top} + {record.bottom}
														</div>
														<div
															className={`px-2 py-1 rounded ${
																record.feedback === "추웠음"
																	? "bg-blue-100 text-blue-800"
																	: record.feedback === "적당함"
																	? "bg-green-100 text-green-800"
																	: "bg-red-100 text-red-800"
															}`}
														>
															{record.feedback}
														</div>
													</div>
												))}
											</div>
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="all">
					<Card>
						<CardHeader>
							<CardTitle>전체 기록</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-500">전체 기록이 여기에 표시됩니다.</p>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
} 