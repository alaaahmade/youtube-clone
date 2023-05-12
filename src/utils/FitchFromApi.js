import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '4962f45b11mshab95d327067e4a3p1350b2jsn9dcb023c952c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
