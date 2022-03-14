import { addDivToBody } from "./dom";

import $ from "jquery";

test("测试 addDivToBody", () => {
	addDivToBody();
	addDivToBody();
	console.log($("body").find("div").length);
	expect($("body").find("div").length).toBe(2);
});
