import { shallow, mount, EnzymeAdapter } from "enzyme";
import UndoList from "../../components/UndoList";
import { findTestWrapper } from "../../../../utils/testUtils";

it("未完成列表，当数据为空数组时，count 数目为0，列表无内容", () => {
	const wrapper = shallow(<UndoList list={[]} />);
	const countElem = findTestWrapper(wrapper, "count");
	const listItems = findTestWrapper(wrapper, "list-item");
	expect(countElem.text()).toEqual("0");
	expect(listItems.length).toEqual(0);
});

it("未完成列表，当数据有内容时，count 数目为数据长度，列表不为空", () => {
	const listData = ["学习jest", "学习tdd", "学习bdd"];
	const wrapper = shallow(<UndoList list={listData} />);
	const countElem = findTestWrapper(wrapper, "count");
	const listItems = findTestWrapper(wrapper, "list-item");
	expect(countElem.text()).toEqual("3");
	expect(listItems.length).toEqual(3);
});

it("未完成列表，当数据有内容时，要存在删除按钮", () => {
	const listData = ["学习jest", "学习tdd", "学习bdd"];
	const wrapper = shallow(<UndoList list={listData} />);
	const deleteItems = findTestWrapper(wrapper, "delete-item");
	expect(deleteItems.length).toEqual(3);
});

it("未完成列表，当数据有内容时，点击某个删除按钮，会调用删除方法", () => {
	const listData = ["学习jest", "学习tdd", "学习bdd"];
	const fn = jest.fn();
	const index = 1;
	const wrapper = shallow(<UndoList deleteItem={fn} list={listData} />);
	const deleteItems = findTestWrapper(wrapper, "delete-item");
	deleteItems.at(index).simulate("click");
	expect(fn).toHaveBeenCalledWith(index);
});

