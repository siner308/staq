// Stack Queue utilities

function parseStackMeta(body) {
  const pattern = /<!-- stack-rebase:([\s\S]*?) -->/;
  const match = body.match(pattern);
  if (!match) return null;
  try {
    return JSON.parse(match[1]);
  } catch {
    return null;
  }
}

module.exports = { parseStackMeta };
