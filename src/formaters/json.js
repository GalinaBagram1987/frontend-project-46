const getJson = (arrayObj) => {
  const json = JSON.stringify(arrayObj, null, 4);
  return json;
};

export default getJson;
