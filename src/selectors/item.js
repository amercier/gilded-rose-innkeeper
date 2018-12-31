/**
 * Get a function that filters objects having a string property matching a given search query.
 *
 * @param {string} property - Property in the subject object.
 * @param {string} query - Text to search.
 * @returns {Function} - A function of the type: `(subject: Object) => boolean`, that returns `true`
 * if `subject[property]` contains `query`, or `false` otherwise.
 */
function propertySearchFilter(property, query) {
  const searchQuery = query.toLowerCase();
  return subject => subject[property].toLowerCase().includes(searchQuery);
}

/**
 * Get a function that filters objects having a number property within a given min/max range.
 *
 * @param {string} property - Property in the subject object.
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {Function} - A function of the type: `(subject: Object) => boolean`, that returns
 * `false` if `subject[property]` is lower than `min` or higher than `max`. Otherwise returns
 * `true`.
 */
function propertyMinMaxFilter(property, min, max) {
  return subject => subject[property] >= min && subject[property] <= max;
}

/**
 * Get a function that combine filters.
 *
 * @param {Function} filters - Filter functions of the type: `(subject: Object) => boolean`.
 * @returns {Function} - A function of the type: `(subject: Object) => boolean`, that returns `true`
 * if ALL filters return `true`, `false` if ANY of the filters returns `false`.
 */
function all(...filters) {
  return subject => filters.every(filter => filter(subject));
}

/**
 * Return all visible items.
 *
 * Right now all items are visible, so we just return all of them.
 *
 * @param {Object} state - Redux state.
 * @returns {Item[]} All visible items.
 */
function getVisibleItems({
  items,
  nameSearch,
  qualityRangeStart,
  qualityRangeEnd,
}) {
  return Object.values(items).filter(
    all(
      propertySearchFilter('name', nameSearch),
      propertyMinMaxFilter('quality', qualityRangeStart, qualityRangeEnd),
    ),
  );
}

export { getVisibleItems };
