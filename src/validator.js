// Stack metadata validator

const { parseStackMeta } = require('./utils');

function validateStack(prBody) {
  const meta = parseStackMeta(prBody);
  if (!meta) return { valid: false, error: 'No stack metadata found' };
  if (!Array.isArray(meta.children)) return { valid: false, error: 'children must be an array' };
  for (const child of meta.children) {
    if (!child.branch || !child.pr) {
      return { valid: false, error: 'Each child must have branch and pr' };
    }
  }
  return { valid: true, meta };
}

module.exports = { validateStack };
