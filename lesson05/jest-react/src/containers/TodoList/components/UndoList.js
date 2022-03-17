import { Component } from "react";

export default class UndoList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { list, deleteItem } = this.props;
		return (
			<div className="undo-list">
				<div className="undo-list-title">
					正在进行
					<div data-test="count" className="undo-list-count">
						{list.length}
					</div>
				</div>
				<ul  className="undo-list-content">
					{list.map((item, index) => {
						return (
							<li  className="undo-list-item" data-test="list-item" key={`${item}-${index}`}>
								{item}
								<span
									data-test="delete-item"
                  className="undo-list-delete"
									onClick={() => {
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
