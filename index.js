/**
 * 
 * @param {String} url 
 * @returns {Boolean}
 */
const isValidUrl = (url) => {
  let bool = false;
  try {
    bool = !!new URL(url);
  } catch { }
  return bool;
}

export {
  isValidUrl
}

export default isValidUrl;