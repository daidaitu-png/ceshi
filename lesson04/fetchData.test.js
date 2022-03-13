import {
	fetchData,
	fetchData1,
	fetchData2,
	fetchData3,
	fetchData4,
} from "./fetchData";

test("fetchData 返回结果为{success:true}", (done) => {
	fetchData((data) => {
		expect(data).toEqual({
			success: true,
		});
		done();
	});
});

test("fetchData1 返回结果为 {success:true}", () => {
	return fetchData1().then((response) => {
		expect(response.data).toEqual({
			success: true,
		});
	});
});

test("fetchData2 返回结果为 404", () => {
	expect.assertions(1);
	return fetchData2().catch((e) => {
		expect(e.toString().indexOf("404") > -1).toBe(true);
	});
});

test("fetchData3 返回结果为 {success:true}", () => {
	return expect(fetchData3()).resolves.toMatchObject({
		data: {
			success: true,
		},
	});
});

test("fetchData3 返回结果为 {success:true}", async () => {
	await expect(fetchData3()).resolves.toMatchObject({
		data: {
			success: true,
		},
	});
});

test("fetchData3 返回结果为 {success:true}", async () => {
	const response = await fetchData3();
	expect(response.data).toEqual({
		success: true,
	});
});

test("fetchData4 返回结果为 404", () => {
	return expect(fetchData4()).rejects.toThrow();
});

test("fetchData4 返回结果为 404", async () => {
	await expect(fetchData4()).rejects.toThrow();
});

test("fetchData4 返回结果为 404", async () => {
	expect.assertions(1);
	try {
		await fetchData4();
	} catch (error) {
		expect(error.toString()).toEqual(
			"Error: Request failed with status code 404"
		);
	}
});
