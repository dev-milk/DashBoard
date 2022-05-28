import React, { useState } from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

function AlertSuccess(props) {
  const [show, setShow] = useState(true);

  const {
    variant,
    dismissible,
    children,
  } = props;

  return (
    show && (
      <BootstrapAlert
        variant={variant}
        dismissible={dismissible}
        onClose={() => setShow(false)}
      >
        {children}
        <p>Amazon Prime、NetFlexにてファイナルシーズン配信中 !</p>
      </BootstrapAlert>
    )
  )
}

export default AlertSuccess;