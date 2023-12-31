import React, { Component } from "react";

class Refund extends Component{

  constructor(props){
      super(props);
      this.state = {
          rnTicketNumber: '',
          rnPaymentType: '',
          rnAmount: '',
          rnReason: '',
          rnResult: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    writeMessageApi = async () => {
      console.log("Save comment:")

      var message = "OK"
      if (this.state.rnTicketNumber === null || this.state.rnTicketNumber === '' || this.state.rnTicketNumber === 'X123456') {
        message =  '01: InvalidTicketNumber';
      } else if (this.state.rnPaymentType === null || this.state.rnPaymentType === '' || this.state.rnPaymentType !== 'Card') {
        message = '02: Invalid payment type';
      } else if (this.state.rnAmount === null || this.state.rnAmount === '' || this.state.rnAmount > 1000) {
        message =  '03: Invalid amount';
      } else if (this.state.rnReason === null || this.state.rnReason === '') {
        message = '04: Reason required';
      } else {
        const randNo = Math.floor((Math.random() * 10) + 1)
    
        if (randNo < 8) {
          message = '00: Ticket refunded';
        } else {
          message =  '98: Refund error';
        }
      }
      
      console.log("Response:" + message)
      return message;
    }

    handleSubmit(event) {

      event.preventDefault();

      this.writeMessageApi(this.state)
        .then(message =>  this.setState({rnResult: message }))
    }

    render(){
        return(
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <h1 className="title">Refunds</h1>
                                <p className="description"> Enter refund </p>
                            </div>
                            <div>
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="ticketNumber">
                                        <input
                                            type="text"
                                            name="ticketNumber"
                                            id="ticketNumber"
                                            value={this.state.rnTicketNumber}
                                            onChange={(e)=>{this.setState({rnTicketNumber: e.target.value});}}
                                            placeholder="Ticket Number *"
                                        />
                                    </label>

                                    <label htmlFor="paymentType">
                                        <input
                                            type="text"
                                            name="paymentType"
                                            id="paymentType"
                                            value={this.state.rnPaymentType}
                                            onChange={(e)=>{this.setState({rnPaymentType: e.target.value});}}
                                            placeholder="Payment Type *"
                                        />
                                    </label>

                                    <label htmlFor="amount">
                                        <input
                                            type="text"
                                            name="amount"
                                            id="amount"
                                            value={this.state.rnAmount}
                                            onChange={(e)=>{this.setState({rnAmount: e.target.value});}}
                                            placeholder="Amount (GBP) *"
                                        />
                                    </label>
                                    <label htmlFor="reason">
                                        <textarea
                                            type="text"
                                            id="reason"
                                            name="reason"
                                            value={this.state.rnReason}
                                            onChange={(e)=>{this.setState({rnReason: e.target.value});}}
                                            placeholder="Reason *"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="submit">Submit</button>
                                </form>
                            </div>
                            <br/><br/>

                            <label htmlFor="result">
                                <input
                                    type="text"
                                    id="result"
                                    name="result"
                                    readOnly
                                    value={this.state.rnResult}
                                    onChange={(e)=>{this.setState({rnResult: e.target.value});}}
                                    placeholder=""
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Refund;
