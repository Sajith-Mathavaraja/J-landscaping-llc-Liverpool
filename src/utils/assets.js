export const getAssetUrl = (path) => {
  if (!path) return '';
  if (typeof path !== 'string') return path;
  if (path.indexOf('http://') === 0 || path.indexOf('https://') === 0) return path;
  const cleanPath = path.charAt(0) === '/' ? path.slice(1) : path;
  const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : '/J-landscaping-llc-Liverpool/';
  const prefix = base.charAt(base.length - 1) === '/' ? base : base + '/';
  return prefix + cleanPath;
};
