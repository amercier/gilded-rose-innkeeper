import React from 'react';
import { string, node } from 'prop-types';

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="nofollow noopener noreferrer">
    {children}
  </a>
);

ExternalLink.propTypes = {
  href: string.isRequired,
  children: node.isRequired,
};

export { ExternalLink };
