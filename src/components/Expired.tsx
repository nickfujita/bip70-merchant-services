import * as React from "react"

export interface ExpiredProps {
  paymentId: string
}

export class Expired extends React.Component<ExpiredProps, any> {
  constructor(props: ExpiredProps, context: any) {
    super(props, context)
    this.state = {}
  }

  render(): JSX.Element {
    return (
      <div id="expired">
        <p>
          <span className="glyphicon glyphicon-remove" />
        </p>
        <p className="cardTitle">Invoice Expired</p>
        <p className="cardText">
          An invoice is only valid for 15 minutes. Return to the merchant if you
          would like to resubmit a payment.
        </p>
        <p id="invoiceIdLabel">Invoice ID</p>
        <p id="invoiceId" className="cardText">
          {this.props.paymentId}
        </p>
        <p>
          <a href="https://developer.bitcoin.com" target="_blank">
            Try Again
          </a>
        </p>
      </div>
    )
  }
}
