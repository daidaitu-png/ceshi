import { fetchData } from "./demo";
import axios from "axios";

jest.mock("axios");

test("测试 fetchData", () => {
	axios.get.mockResolvedValue({
		data: "(function(){return '123'})()",
	});
	return fetchData().then((data) => {
		expect(eval(data)).toEqual("123");
	});
});
