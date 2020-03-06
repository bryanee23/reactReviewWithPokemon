import axios from 'axios';

const getPokemon = (query, callback) => {
  //TODO
  axios
    .get(query)
    .then(function (response) {
      // handle success
      callback(null, response)
      // console.log('reeeeeeeeeeee',response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

export default getPokemon;