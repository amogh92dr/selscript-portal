import React from 'react';

import classes from './Footer.module.css';

const Footer = () => (
  <div className={classes.footer}>
    <nav className="clearfix p2">
      <div className="sm-col">
        <div className={classes.copyright}>
          &copy; {new Date().getFullYear()} Catapult Health. All Rights Reserved.
        </div>
      </div>
      <div className="sm-col-right">
        <div className="sm-col">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.catapulthealth.com/notice-of-privacy-practices/"
            className="btn"
          >
            Notice of Privacy Practices
          </a>
        </div>
        <div className="sm-col">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.catapulthealth.com/terms-of-use/"
            className="btn"
          >
            Terms of Use
          </a>
        </div>
        <div className="sm-col">
          <a
            href="mailto:support@virtualcheckup.com?subject=Virtual%20Checkup%20Questionnaire%20Support%20Request"
            className="btn"
          >
            Email Support
          </a>
        </div>
        <div className="sm-col">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.catapulthealth.com/contact-us/"
            className="btn"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  </div>
);

export default Footer;
