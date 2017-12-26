/* eslint react/prefer-stateless-function: 0 */
import 'whatwg-fetch';
import React from 'react';

const HTML = document.getElementsByTagName('html')[0];

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      status: 'WAITING',
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      postcode: '',
      answer: '',
      guests: '',
      kids: '',
    };
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch('https://jyrixue4ac.execute-api.ap-southeast-2.amazonaws.com/dev/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...this.state,
      }),
    }).then((res) => {
      if (res.status === 200) { // Success
        this.setState({
          status: 'DONE',
        });
      }
    });

    return false;
  }

  rsvp() {
    HTML.classList.add('form-is-loaded');
    this.setState({
      status: 'WORKING',
    });
  }

  render() {
    return (
      <div>
        <h1>It’s a date</h1>
        <h2>August 25 2018</h2>

        {this.state.status === 'WAITING' &&
          <div>
            <p>Dillon &amp; Linda are getting married in Buchanan, MI</p>
            <button
              onClick={() => this.rsvp()}
              className="c-btn  c-btn--primary  c-btn--ghost  is-spacer"
              type="button"
            >
              RSVP
            </button>
          </div>
        }
        {this.state.status === 'WORKING' &&
          <form className="c-form" onSubmit={e => this.handleSubmit(e)}>
            <div className="o-layout">
              <div className="o-layout__item  u-1/2@tablet">
                <label htmlFor="name">
                  <span className="u-hidden-visually">Name</span>
                  <input
                    value={this.state.name}
                    onChange={e => this.handleInputChange(e)}
                    name="name"
                    type="text"
                    id="name"
                    className="c-input"
                    placeholder="Full Name"
                    required
                  />
                </label>
              </div>
              <div className="o-layout__item  u-1/2@tablet">
                <label htmlFor="email" >
                  <span className="u-hidden-visually">Email</span>
                  <input
                    value={this.state.email}
                    onChange={e => this.handleInputChange(e)}
                    name="email"
                    type="email"
                    id="email"
                    className="c-input"
                    placeholder="Email"
                    required
                  />
                </label>
              </div>
              <div className="o-layout__item  u-1/2@tablet">
                <label htmlFor="address" >
                  <span className="u-hidden-visually">Address</span>
                  <input
                    value={this.state.address}
                    onChange={e => this.handleInputChange(e)}
                    name="address"
                    type="text"
                    id="address"
                    className="c-input"
                    placeholder="Street Address"
                    required
                  />
                </label>
              </div>
              <div className="o-layout__item  u-1/2@tablet">
                <label htmlFor="city" >
                  <span className="u-hidden-visually">City</span>
                  <input
                    value={this.state.city}
                    onChange={e => this.handleInputChange(e)}
                    name="city"
                    type="text"
                    id="city"
                    className="c-input"
                    placeholder="City"
                    required
                  />
                </label>
              </div>
              <div className="o-layout__item  u-1/2@tablet">
                <label htmlFor="state">
                  <span className="u-hidden-visually">State</span>
                  <input
                    value={this.state.state}
                    onChange={e => this.handleInputChange(e)}
                    name="state"
                    type="text"
                    id="state"
                    className="c-input"
                    placeholder="State"
                    required
                  />
                </label>
              </div>
              <div className="o-layout__item  u-1/2@tablet">
                <label htmlFor="postcode">
                  <span className="u-hidden-visually">Postcode</span>
                  <input
                    value={this.state.postcode}
                    onChange={e => this.handleInputChange(e)}
                    name="postcode"
                    type="text"
                    id="postcode"
                    className="c-input"
                    placeholder="Postcode"
                    required
                  />
                </label>
              </div>
              <div className="o-layout__item">
                <div className="c-select">
                  <label htmlFor="answer">
                    <span className="u-hidden-visually">Yay or Nay?</span>
                    <select
                      value={this.state.answer}
                      onChange={e => this.handleInputChange(e)}
                      name="answer"
                      id="answer"
                      className="c-input"
                      required
                    >
                      <option value="">Will you be joining us?</option>
                      <option value="Yay">Yes, I would love to</option>
                      <option value="Nay">Sorry, no can do</option>
                    </select>
                    <i className="icon-keyboard_arrow_down" />
                  </label>
                </div>
              </div>
              <div className="o-layout__item  u-1/2@tablet">
                <div className="c-select">
                  <label htmlFor="guests">
                    <span className="u-hidden-visually">No. of Adult Guests?</span>
                    <select
                      value={this.state.guests}
                      onChange={e => this.handleInputChange(e)}
                      name="guests"
                      id="guests"
                      className="c-input"
                      required
                    >
                      <option value="">No. of Adult Guests?</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                    <i className="icon-keyboard_arrow_down" />
                  </label>
                </div>
              </div>
              <div className="o-layout__item  u-1/2@tablet">
                <div className="c-select">
                  <label htmlFor="kids">
                    <span className="u-hidden-visually">No. of Kids?</span>
                    <select
                      value={this.state.kids}
                      onChange={e => this.handleInputChange(e)}
                      name="kids"
                      id="kids"
                      className="c-input"
                      required
                    >
                      <option value="">No. of Kids?</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                    <i className="icon-keyboard_arrow_down" />
                  </label>
                </div>
              </div>
              <div className="o-layout__item">
                <label htmlFor="promise">
                  <input type="checkbox" className="c-checkbox" id="promise" required />
                  <span>
                    I promise to bring lots of fun, laughter and love!
                    <i className="icon-check" />
                  </span>
                </label>
              </div>
              <div className="o-layout__item">
                <button
                  className="c-btn  c-btn--primary  c-btn--ghost  u-float-right"
                  type="submit"
                >
                  SEND
                </button>
              </div>
            </div>
          </form>
        }
        {this.state.status === 'DONE' &&
          <div>
            <h1>Hoorray!</h1>
            <p>Thanks for letting us know!</p>
          </div>
        }
      </div>
    );
  }
}
