/* pages/confirmation.js */

import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import AppContext from "../components/context";
import Link from "next/link";

function Checkout() {
  // get app context
  const { isAuthenticated } = useContext(AppContext);

  return (
    <Row>
      <Col>
        <h1>Success!</h1>
        <p>Thank you for your order.</p>
        <p><Link href="/">Return home</Link></p>
      </Col>
    </Row>
  );
  // }
}
export default Checkout;
