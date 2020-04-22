import fetch from 'fetch';
const APIKEY = "trnsl.1.1.20200323T114756Z.0f4ccf293f07f299.9418735e8221083e1a3e3b6fd344717caa5b58a8"

componentDidMount(){
    new service().getLanguages()
       .then(response => {                
         console.log(response)
         // if (response) {
         //     this.setState(
         //         { allLanguages: response.data.result }
         //     )
         // }
     })
     .catch(error => {
         console.log('Error fetching and parsing data', error);
     })
   }


   