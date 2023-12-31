const fetchValue = async () => {
  const myUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aoa0Cp2AIrloXom8gGRB/scores/';
  let result = '';
  try {
    const value = await fetch(myUrl);
    const response = await value.json();
    result = response.result;
  } catch (error) {
    return error;
  }
  return result;
};

export default fetchValue;