import Axios from 'axios';

import getConfig from 'next/config';

const usersService = (() => {

  let {
    publicRuntimeConfig: { apiBaseUrl },
  } = getConfig();

  //SSR workaround
  if(typeof(apiBaseUrl) === 'undefined') apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const axios = Axios.create(); 

  const getUsers = async () => {
    try {
      let url = apiBaseUrl;  

      let usersResponse = await axios.get(url);

      let users = usersResponse.data;

      return {
        users,
        withError: false,
      };
    } catch (error) {
      //console.log(error);

      return {
        users: [],
        withError: true,
      };
    }
  };

  return {
    getUsers,
  }
})();

export default usersService;