import React from 'react';
import { string, node } from 'prop-types';

/**
 * Render a link to an external web page.
 *
 * @example
 * <Link href="https://reactjs.org/">React</Link>
 * // Renders a <a> element
 *
 * @param {Object} props - React component properties.
 * @param {string} props.href - Href attribute.
 * @param {*} props.children - Child nodes.
 * @returns {React.Element} The rendered <a> element.
 */
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
