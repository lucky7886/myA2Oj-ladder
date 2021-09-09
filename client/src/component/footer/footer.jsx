import React, { useEffect } from 'react';

import Typography from '@material-ui/core/Typography';

const Footer = () => {
  return (
    <>
      <Typography style={{ fontSize: "19px", color: "white", marginLeft: "auto" }}> {Date()}</Typography>
    </>
  );
}

export default Footer;
