/**
 * Return all visible items.
 *
 * Right now all items are visible, so we just return all of them.
 *
 * @param {Object} state - Redux state.
 * @param {Item[]} state.items - All items.
 * @returns {Item[]} All visible items.
 */
function getVisibleItems({ items }) {
  return items;
}

export { getVisibleItems };
