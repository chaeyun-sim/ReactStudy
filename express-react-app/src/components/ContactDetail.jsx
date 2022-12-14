import React, {Component} from "react";
import PropTypes from "prop-types"

class ContactDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            name: '',
            phone: '',
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    };

    handleToggle() {
        if (!this.state.isEdit){
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone,
            })
        } else {
            this.handleEdit();
        };
        this.setState({
            isEdit: !this.state.isEdit
        });
    };

    handleChange(event) {
        let nextState = {};
        nextState[event.target.name] = event.target.value;
        this.setState(nextState)
    };

    handleEdit(){
        this.props.onEdit(this.state.name, this.state.phone);
    };

    handleKeyPress(event){
        // if(event.charCode === 13){
        //     this.handleToggle();
        // }
        if(event.key === 'Enter'){
            this.handleToggle();
        }
    }

    render() {
        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );

        const edit = (
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyPress}
                    />
                </p>    
            </div>
        );

        const view = this.state.isEdit ? edit : details;
        const mode = this.state.isEdit ? 'OK' : 'Edit';

        const removeBtn = this.props.isSelected ? <button onClick={this.props.onRemove}>Remove</button> : ''
        const editBtn = this.props.isSelected ? <button onClick={this.handleToggle}>{mode}</button> : ''

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : <div>Not Selected</div>}
                <p>
                    {removeBtn}
                    {editBtn}
                </p>
            </div>
        )
    }
};


ContactDetail.defaultProps = {
    contact: {
        name: '',
        phone: ''
    },
    onRemove: () => {
        console.error('onRemove not defined')
    },
    onEdit: () => {
        console.error('onEdit not defined')
    }
};

ContactDetail.propTypes = {
    contact: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
}

export default ContactDetail;