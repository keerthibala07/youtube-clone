export const API_KEY='AIzaSyC9lU5f7o9_3uJz3gSwRuRYoniOlA81gn0';


export const value_converter =(value) =>{
if(value>=1000000)
  {
    return Math.floor(value/1000000)+"M";
  }
  else if(value>=1000)
    {
      return Math.floor(value/1000)+"K";
    }
    else 
    {
      return value;

    }
}