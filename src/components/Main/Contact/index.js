import React from 'react'
import * as emailjs from 'emailjs-com'
import './style.scss'
import $ from 'jquery'
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



class Contact extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      valid: false,
      alert: null,
      email: "",
      subject: "",
      content: "",
    }

    this.formSubmitHandle = this.formSubmitHandle.bind(this);
  }


  inputChanged = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }


  formSubmitHandle = async (e) => {
    e.preventDefault();
    const newValid = (this.checkAllFieldNotEmpty() && this.checkEmailIsValid());

    if(newValid) {
      await this.submitMessage();
    }
    else {
      var newAlert = "";
      if(!this.checkEmailIsValid()){
        newAlert = "Twój email jest niepoprawny"
      }
      if(!this.checkAllFieldNotEmpty()){
        newAlert = "Wszystkie pola są wymagane"
      }
      this.setState({
        alert: newAlert
      })
    }

    this.setState({ valid: newValid });
  }


  checkAllFieldNotEmpty = () => {
    return (this.state.email !== '' && this.state.subject !== '' && this.state.message !== '')
  }


  checkEmailIsValid = () => {
    return emailPattern.test(this.state.email)
  }


  submitMessage = async () => {
    await emailjs.sendForm(
      "gmail",
      "rate_react_app_temp",
      "contact-form",
      "user_YXnOK9G7fuSdKvrmM6Z4l"
    )
    .then(res => {
      this.setState({ alert: "Wiadomość została wysłana" })
      $("input[name='email']").html('');
      $("input[name='subject']").html('');
      $("input[name='message']").html('');
    })
    .catch(status => console.error(status));
  }


  render = () => {
    let alertColor = this.state.valid ? 'success' : 'danger';
    return (
      <form id="contact-form" method="POST" onSubmit={this.formSubmitHandle}>
        <h3 className="text-center mb-4"><i className="fa fa-envelope"/>Formularz kontaktowy</h3>
        {this.state.alert &&
          <div className={'btn btn-' + alertColor}>{this.state.alert}</div>
        }
        <input name="email" onChange={this.inputChanged} type="email" className="form-control m-2 bg-dark border-secondary" placeholder="Twój email"/>
        <input name="subject" onChange={this.inputChanged} type="text" className="form-control m-2 bg-dark border-secondary" placeholder="Temat"/>
        <textarea name="message" onChange={this.inputChanged} className="form-control m-2 bg-dark border-secondary" placeholder="Treść"></textarea>
        <div className="d-flex justify-content-between">
          <input type="submit" className="btn btn-default mt-2" value="Wyślij wiadomość"/>
          <small><b>* Wszystkie pola są wymagane</b></small>
        </div>
      </form>
    )
  }
}

export default Contact;
