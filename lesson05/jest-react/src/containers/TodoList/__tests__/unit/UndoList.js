import { shallow, mount, EnzymeAdapter } from "enzyme";
import UndoList from "../../components/UndoList";
import { findTestWrapper } from "../../../../utils/testUtils";

describe("UndoList 组件", () => {
	it("UndoList 渲染样式正常", () => {
		const wrapper = shallow(<UndoList list={[]} />);
		expect(wrapper).toMatchSnapShot;
	});

	it("未完成列表，当数据为空数组时，count 数目为0，列表无内容", () => {
		const wrapper = shallow(<UndoList list={[]} />);
		const countElem = findTestWrapper(wrapper, "count");
		const listItems = findTestWrapper(wrapper, "list-item");
		expect(countElem.text()).toEqual("0");
		expect(listItems.length).toEqual(0);
	});

	it("未完成列表，当数据有内容时，count 数目为数据长度，列表不为空", () => {
		const listData = [
			{ status: "div", value: "学习jest" },
			{ status: "div", value: "学习tdd" },
			{ status: "div", value: "学习bdd" },
		];
		const wrapper = shallow(<UndoList list={listData} />);
		const countElem = findTestWrapper(wrapper, "count");
		const listItems = findTestWrapper(wrapper, "list-item");
		expect(countElem.text()).toEqual("3");
		expect(listItems.length).toEqual(3);
	});

	it("未完成列表，当数据有内容时，要存在删除按钮", () => {
		const listData = [
			{ status: "div", value: "学习jest" },
			{ status: "div", value: "学习tdd" },
			{ status: "div", value: "学习bdd" },
		];
		const wrapper = shallow(<UndoList list={listData} />);
		const deleteItems = findTestWrapper(wrapper, "delete-item");
		expect(deleteItems.length).toEqual(3);
	});

	it("未完成列表，当数据有内容时，点击某个删除按钮，会调用删除方法", () => {
		const listData = [
			{ status: "div", value: "学习jest" },
			{ status: "div", value: "学习tdd" },
			{ status: "div", value: "学习bdd" },
		];
		const fn = jest.fn();
		const index = 1;
		const wrapper = shallow(<UndoList deleteItem={fn} list={listData} />);
		const deleteItems = findTestWrapper(wrapper, "delete-item");
		deleteItems.at(index).simulate("click", {
			stopPropagation: () => {},
		});
		expect(fn).toHaveBeenCalledWith(index);
	});

	it("但某一项被点击时，触发执行 changeStatus 函数", () => {
		const listData = [
			{ status: "div", value: "学习jest" },
			{ status: "div", value: "学习tdd" },
			{ status: "div", value: "学习bdd" },
		];
		const fn = jest.fn();
		const index = 1;
		const wrapper = shallow(<UndoList changeStatus={fn} list={listData} />);
		const deleteItems = findTestWrapper(wrapper, "list-item");
		deleteItems.at(index).simulate("click");
		expect(fn).toHaveBeenCalledWith(index);
	});

	it("但某一项status 是input时，展示输入框", () => {
		const listData = [
			{ status: "input", value: "学习jest" },
			{ status: "div", value: "学习tdd" },
			{ status: "div", value: "学习bdd" },
		];
		const wrapper = shallow(<UndoList list={listData} />);
		const inputItems = findTestWrapper(wrapper, "input");
		expect(inputItems.length).toBe(1);
	});

	it("但某一项输入框失去焦点时，触发执行 handleBlur 函数", () => {
		const listData = [
			{ status: "input", value: "学习jest" },
			{ status: "div", value: "学习tdd" },
			{ status: "div", value: "学习bdd" },
		];
		const fn = jest.fn();
		const wrapper = shallow(<UndoList handleBlur={fn} list={listData} />);
		const inputElems = findTestWrapper(wrapper, "input");
		inputElems.simulate("blur");
		expect(fn).toHaveBeenCalledWith(0);
	});

	it("但某一项输入框变更时，触发执行 valueChange 函数", () => {
		const listData = [{ status: "input", value: "学习jest" }];
		const value = "学习tdd";
		const fn = jest.fn();
		const wrapper = shallow(<UndoList valueChange={fn} list={listData} />);
		const inputElems = findTestWrapper(wrapper, "input");
		inputElems.simulate("change", {
			target: { value },
		});
		expect(fn).toHaveBeenCalledWith(0, value);
	});
});
