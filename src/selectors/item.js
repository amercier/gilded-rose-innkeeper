/**
 * Get a search-by-property filter function.
 *
 * @param {string} property - Property in the subject object.
 * @param {string} query - Text to search.
 * @returns {Function} - Return a filter function of the type: `(subject: Object) => boolean`,
 * that returns `true` if `subject[property]` contains `query`, or `false` otherwise.
 */
function propertySearchFilter(property, query) {
  const searchQuery = query.toLowerCase();
  return subject => subject[property].toLowerCase().includes(searchQuery);
}

/**
 * Return all visible items.
 *
 * Right now all items are visible, so we just return all of them.
 *
 * @param {Object} state - Redux state.
 * @param {Item[]} state.items - All items.
 * @returns {Item[]} All visible items.
 */
function getVisibleItems({ items, nameSearch }) {
  return items.filter(propertySearchFilter('name', nameSearch));
}

export { getVisibleItems };
