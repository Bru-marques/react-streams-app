import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValue) {
    console.log(formValue);
  }

  render() {
    return (
      <>
        <h2 className="ui center aligned icon header">
          <i className="circular video icon"></i>
          <div className="content">
            Create a new Stream
            <div className="sub header">
              Share something funny with your audience.
            </div>
          </div>
        </h2>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter your stream title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter the stream description"
          />
          <div className="ui vertical labeled icon buttons">
            <button className="ui button teal">
              <i className="upload icon"></i>
              Upload your stream
            </button>
          </div>
        </form>
      </>
    );
  }
}

//validation input data = only return if is some invalid input
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a stream title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a stream description";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
