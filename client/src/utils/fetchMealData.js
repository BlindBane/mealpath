import axios from 'axios';

const fetchMealData = () => {
  return axios
    .get('/api/meals')
    .then(response => {
      return response.data.meals;
      // this.setState({
      //   mealData: response.data.meals
      // });
    })
    .catch(error => {
      console.log(error);
    });
};

export default fetchMealData;
