import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id='' smooth>
      <div class="visme_d" data-title="Customer Contact Form" data-url="x4vvy83n-customer-contact-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="95794"></div>
    </div>
  );
};

export default Contact;
