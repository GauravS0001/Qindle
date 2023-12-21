/** @format */

export const getAppConfigJson = async (url) => {
  const resp = await fetch(url);
  console.log('resp', resp)
  return resp.json();
};
