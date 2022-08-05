const axios = require('axios');


const totalPop = async () => {
    try {
      const { data } = await axios.get('https://restcountries.com/v3.1/all');
      let total = 0;
      for(let i = 0; i < data.length; i++) {
        total += data[i].population
      }
      return total
    } catch (error) {
      console.error(error)
    }
  }

  let total = totalPop();
