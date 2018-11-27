import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {this.props.caret}
        </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>{this.props.header}</DropdownItem>
                    {/* <DropdownItem disabled>Action</DropdownItem> */}
                    <DropdownItem>{this.props.item1}</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>{this.props.item2}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}