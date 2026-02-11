// Staqd constants

const RETRY_INTERVAL_MS = 30000;
const MAX_RETRIES = 20;
const STACK_META_PATTERN = /<!-- stack-rebase:([\s\S]*?) -->/;

module.exports = { RETRY_INTERVAL_MS, MAX_RETRIES, STACK_META_PATTERN };
