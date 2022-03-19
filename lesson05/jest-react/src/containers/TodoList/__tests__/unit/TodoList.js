import { shallow, mount, EnzymeAdapter } from "enzyme";
import TodoList from "../../index";

describe("TodoList 组件", () => {
	it("初始化列表为空", () => {
		const wrapper = shallow(<TodoList />);
		expect(wrapper.state("undoList")).toEqual([]);
	});
	it("TodoList 应该给Header 传递一个增加 undoList 内容的方法", () => {
		const wrapper = shallow(<TodoList />);
		const Header = wrapper.find("Header");
		expect(Header.prop("addUndoItem")).toBe(wrapper.instance().addUndoItem);
	});
	it("当 addUndoItem 被执行时， undoList 应该新增内容", () => {
		const wrapper = shallow(<TodoList />);
		const Header = wrapper.find("Header");
		const addFunc = Header.prop("addUndoItem");
		addFunc("学习React");
		expect(wrapper.state("undoList").length).toBe(1);
		expect(wrapper.state("undoList")[0]).toEqual({
			status: "div",
			value: "学习React",
		});
		addFunc("学习Vue");
		expect(wrapper.state("undoList").length).toBe(2);
	});

	it("当 addUndoItem 被执行时， undoList 应该新增内容", () => {
		const wrapper = shallow(<TodoList />);
		const { addUndoItem } = wrapper.instance();
		const content = "学习React";
		addUndoItem(content);
		expect(wrapper.state("undoList").length).toBe(1);
		expect(wrapper.state("undoList")[0]).toEqual({
			status: "div",
			value: content,
		});
		addUndoItem(content);
		expect(wrapper.state("undoList").length).toBe(2);
	});

	it("TodoList 应该给未完成列表传递 list 数据，以及 deleteItem,changeStatus，handleBlur,valueChange 方法", () => {
		const wrapper = shallow(<TodoList />);
		const UndoList = wrapper.find("UndoList");
		expect(UndoList.prop("list")).toBeTruthy();
		expect(UndoList.prop("deleteItem")).toBeTruthy();
		expect(UndoList.prop("changeStatus")).toBeTruthy();
		expect(UndoList.prop("handleBlur")).toBeTruthy();
		expect(UndoList.prop("valueChange")).toBeTruthy();
	});

	it("当 deleteItem 方法被执行时， undoList 应该删除内容", () => {
		const wrapper = shallow(<TodoList />);
		const data = [
			{ status: "div", value: "学习jest" },
			{ status: "div", value: "学习tdd" },
			{ status: "div", value: "学习bdd" },
		];
		wrapper.setState({
			undoList: data,
		});
		wrapper.instance().deleteItem(1);
		expect(wrapper.state("undoList")).toEqual([data[0], data[2]]);
	});

	it("当 changeStatus 方法被执行时， undoList 数据项status被更改", () => {
		const wrapper = shallow(<TodoList />);
		const data = [
			{ status: "div", value: "学习jest" },
			{ status: "div", value: "学习tdd" },
			{ status: "div", value: "学习bdd" },
		];
		wrapper.setState({
			undoList: data,
		});
		wrapper.instance().changeStatus(1);
		expect(wrapper.state("undoList")[1]).toEqual({
			...data[1],
			status: "input",
		});
	});

	it("当 handleBlur 方法被执行时， undoList 数据项status被更改", () => {
		const wrapper = shallow(<TodoList />);
		const data = [
			{ status: "input", value: "学习jest" },
			{ status: "div", value: "学习tdd" },
			{ status: "div", value: "学习bdd" },
		];
		wrapper.setState({
			undoList: data,
		});
		wrapper.instance().handleBlur(0);
		expect(wrapper.state("undoList")[0]).toEqual({
			...data[0],
			status: "div",
		});
	});

	it("当 valueChange 方法被执行时， undoList 数据项value被更改", () => {
		const wrapper = shallow(<TodoList />);
		const data = [
			{ status: "input", value: "学习jest" },
			{ status: "div", value: "学习tdd" },
		];
		const value = "dell lee";
		wrapper.setState({
			undoList: data,
		});
		wrapper.instance().valueChange(0, value);
		expect(wrapper.state("undoList")[0]).toEqual({
			...data[0],
			value,
		});
	});
});
