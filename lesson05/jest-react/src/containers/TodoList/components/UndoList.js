import { Component } from "react";

export default class UndoList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { list, deleteItem, changeStatus, handleBlur, valueChange } =
			this.props;
		return (
			<div className="undo-list">
				<div className="undo-list-title">
					正在进行
					<div data-test="count" className="undo-list-count">
						{list.length}
					</div>
				</div>
				<ul className="undo-list-content">
					{list.map((item, index) => {
						return (
							<li
								onClick={() => changeStatus(index)}
								className="undo-list-item"
								data-test="list-item"
								key={`${item}-${index}`}
							>
								{item.status === "div" ? (
									item.value
								) : (
									<input
										className="undo-list-input"
										data-test="input"
										value={item.value}
										onBlur={() => handleBlur(index)}
										onChange={(e) => valueChange(index, e.target.value)}
									/>
								)}
								<span
									data-test="delete-item"
									className="undo-list-delete"
									onClick={(e) => {
										e.stopPropagation(); // 阻止事件冒泡focus
										deleteItem(index);
									}}
								>
									-
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
