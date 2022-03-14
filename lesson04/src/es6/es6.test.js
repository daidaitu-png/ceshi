jest.mock("../utils/utils.js");

import Utils from "../utils/utils";
import demoFunction from "./es6";

test("测试 demoFunction", () => {
	demoFunction();
	expect(Utils).toHaveBeenCalled();
	console.log(Utils.mock.instances[0]);
  expect(Utils.mock.instances[0].a).toHaveBeenCalled()
});
