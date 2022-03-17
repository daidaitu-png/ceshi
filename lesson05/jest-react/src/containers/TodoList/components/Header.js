import { Component } from "react";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
		this.state = {
			value: "",
		};
	}

	handleInputChange(e) {
		this.setState({
			value: e.target.value,
		});
	}
	handleInputKeyUp(e) {
		const { value } = this.state;
		if (e.keyCode === 13 && value) {
			this.props.addUndoItem(value);
			this.setState({ value: "" });
		}
	}

	render() {
		const { value } = this.state;
		return (
			<div className="header">
				<div className="header-content">
					TodoList
					<input
						className="header-input"
						type="text"
						data-test="input"
						value={value}
						onChange={this.handleInputChange}
						onKeyUp={this.handleInputKeyUp}
            placeholder="Add Todo"
					/>
				</div>
			</div>
		);
	}
}
