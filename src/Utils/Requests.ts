import {IRestaurantData} from './../Interfaces';

const Requests = {
  obtainRestaurants: (
    page: number,
    searchString?: string,
  ): Promise<IRestaurantData> => {
    return fetch(
      `https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants?page=${page}&limit=10&search=${
        searchString ? searchString : ''
      }`,
    )
      .then(response => {
        return response.json().then(restaurants => {
          return restaurants.data;
        });
      })
      .catch(e => {
        console.log(JSON.parse(e));
      });
  },
};
export default Requests;
