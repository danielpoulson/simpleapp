import axios from 'axios';

export const GET_CHANGES = 'GET_CHANGES';

export function getChanges(data) {
  const url = `http://localhost:9005/api/changes/${data}`;
  axios.get(url).then(function (response) {
    console.log(response);
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });

}
