import React, { Component } from 'react';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='contact' className='d-flex justify-content-end bg-info'>
                <div className=' w-50 contactDiv'>
                    <h5 className='text-center m-3'>Contact me</h5>
                    <form className='contactForm col s12'>
                        <div class="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input type="text" class="validate" />
                                <label for="icon_prefix">First Name</label>
                            </div></div>
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">email</i>
                                <input type="tel" class="validate" />
                                <label for="icon_telephone">Email</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">mode_edit</i>
                                <textarea className="materialize-textarea"></textarea>
                                <label for="icon_prefix2">Your Message</label>
                            </div>
                        </div>
                        <button className='waves-effect waves-light btn'>Send</button>
                    </form>
                </div>
            </div>);
    }
}

export default Contact;