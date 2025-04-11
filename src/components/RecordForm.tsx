import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	RadioGroup,
	RadioGroupItem,
} from "@/components/ui/radio-group";

const formSchema = z.object({
	top: z.string().min(1, "상의를 선택해주세요"),
	bottom: z.string().min(1, "하의를 선택해주세요"),
	feedback: z.string().min(1, "피드백을 선택해주세요"),
});

const tops = [
	{ value: "tshirt", label: "반팔 티셔츠" },
	{ value: "longsleeve", label: "긴팔 티셔츠" },
	{ value: "sweater", label: "스웨터" },
	{ value: "jacket", label: "자켓" },
];

const bottoms = [
	{ value: "shorts", label: "반바지" },
	{ value: "jeans", label: "청바지" },
	{ value: "slacks", label: "슬랙스" },
	{ value: "leggings", label: "레깅스" },
];

const feedbacks = [
	{ value: "cold", label: "추웠음" },
	{ value: "good", label: "적당함" },
	{ value: "hot", label: "더웠음" },
];

export function RecordForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			top: "",
			bottom: "",
			feedback: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		// TODO: API 호출로 데이터 저장
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>옷차림 정보 입력</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="top"
							render={({ field }) => (
								<FormItem>
									<FormLabel>상의</FormLabel>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="상의를 선택해주세요" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{tops.map((top) => (
												<SelectItem key={top.value} value={top.value}>
													{top.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="bottom"
							render={({ field }) => (
								<FormItem>
									<FormLabel>하의</FormLabel>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="하의를 선택해주세요" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{bottoms.map((bottom) => (
												<SelectItem key={bottom.value} value={bottom.value}>
													{bottom.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="feedback"
							render={({ field }) => (
								<FormItem>
									<FormLabel>피드백</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="flex flex-col space-y-1"
										>
											{feedbacks.map((feedback) => (
												<FormItem key={feedback.value} className="flex items-center space-x-3 space-y-0">
													<FormControl>
														<RadioGroupItem value={feedback.value} />
													</FormControl>
													<FormLabel className="font-normal">
														{feedback.label}
													</FormLabel>
												</FormItem>
											))}
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" className="w-full">
							저장하기
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
} 