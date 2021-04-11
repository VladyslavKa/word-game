import axios from './../libs/axios';

export const requestAnswers = async () => {
  const { data } = await axios.get('/answers');

  return data;
};
