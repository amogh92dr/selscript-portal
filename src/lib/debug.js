export default function debugLog(...rest) {
  if (process.env.NODE_ENV !== 'development') return;
  console.log(...rest); // eslint-disable-line no-console
}
