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
import { Input } from "@/components/ui/input";
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
	name: z.string().min(2, "이름은 2글자 이상이어야 합니다"),
	nickname: z.string().min(2, "닉네임은 2글자 이상이어야 합니다"),
	age: z.string().min(1, "나이를 입력해주세요"),
	gender: z.string().min(1, "성별을 선택해주세요"),
	country: z.string().min(1, "국가를 선택해주세요"),
	city: z.string().min(1, "도시를 선택해주세요"),
	climatePreference: z.string().min(1, "기후 선호도를 선택해주세요"),
});

const countries = [
	{ value: "kr", label: "대한민국" },
	{ value: "jp", label: "일본" },
	{ value: "us", label: "미국" },
];

const cities = [
	{ value: "seoul", label: "서울" },
	{ value: "busan", label: "부산" },
	{ value: "tokyo", label: "도쿄" },
	{ value: "newyork", label: "뉴욕" },
];

const climatePreferences = [
	{ value: "hot", label: "더위를 잘 탐" },
	{ value: "cold", label: "추위를 잘 탐" },
	{ value: "normal", label: "보통" },
];

export function UserProfileForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			nickname: "",
			age: "",
			gender: "",
			country: "",
			city: "",
			climatePreference: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		// TODO: API 호출로 데이터 저장
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>사용자 정보 입력</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>이름</FormLabel>
										<FormControl>
											<Input placeholder="이름을 입력해주세요" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="nickname"
								render={({ field }) => (
									<FormItem>
										<FormLabel>닉네임</FormLabel>
										<FormControl>
											<Input placeholder="닉네임을 입력해주세요" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="age"
								render={({ field }) => (
									<FormItem>
										<FormLabel>나이</FormLabel>
										<FormControl>
											<Input type="number" placeholder="나이를 입력해주세요" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="gender"
								render={({ field }) => (
									<FormItem>
										<FormLabel>성별</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="성별을 선택해주세요" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="male">남성</SelectItem>
												<SelectItem value="female">여성</SelectItem>
												<SelectItem value="other">기타</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="country"
								render={({ field }) => (
									<FormItem>
										<FormLabel>국가</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="국가를 선택해주세요" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{countries.map((country) => (
													<SelectItem key={country.value} value={country.value}>
														{country.label}
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
								name="city"
								render={({ field }) => (
									<FormItem>
										<FormLabel>도시</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="도시를 선택해주세요" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{cities.map((city) => (
													<SelectItem key={city.value} value={city.value}>
														{city.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="climatePreference"
							render={({ field }) => (
								<FormItem>
									<FormLabel>기후 선호도</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="flex flex-col space-y-1"
										>
											{climatePreferences.map((preference) => (
												<FormItem key={preference.value} className="flex items-center space-x-3 space-y-0">
													<FormControl>
														<RadioGroupItem value={preference.value} />
													</FormControl>
													<FormLabel className="font-normal">
														{preference.label}
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