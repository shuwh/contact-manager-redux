import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Contact from "./Contact";
import * as actionTypes from "../../actions/types";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContact();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    contacts: state.contact.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getContact: dispatch({ type: actionTypes.GET_CONTACTS })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
