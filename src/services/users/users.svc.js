import Axios from 'axios';

const usersService = (() => {

  const axios = Axios.create(); 

  const getUsers = async () => {
    try {
      //TO-DO: move this to next config  
      let url = 'https://mocki.io/v1/a583d6c9-5dc5-4672-8356-ce35779beb17';  

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