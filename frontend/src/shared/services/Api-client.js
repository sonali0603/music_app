import axios from 'axios'
export const Ops={
  Allsongs:[],
  Apiclient_searchallsong(){ 
    const searchvalue1='latest'
    const URL=`https://itunes.apple.com/search?term=${searchvalue1}`;
    const search = async()=>{
      const response=await axios.get(URL);
      console.log('RESPONSE ',response)
      const data=response.data.results
      console.log('DATA',data)
      console.log('all songs **********', this.Allsongs)
      return data
    }
    this.Allsongs=search();

},
 Apiclient_searchsong(searchvalue){ 
  var searchvalue1=' ';
  (searchvalue==='latest')?searchvalue1=searchvalue:searchvalue1=searchvalue.current.value
    const URL=`https://itunes.apple.com/search?term=${searchvalue1}&country=IN`;
    const search = async()=>{
      const response= await axios.get(URL);
      console.log('response',response.data);
      return response.data;
    }
    return search();
}
}
