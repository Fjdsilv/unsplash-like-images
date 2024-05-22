// import customFetch from "../utils"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { myUseContext } from "../context/Context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = myUseContext();

  const response = useQuery({
    queryKey: ["images", searchTerm],
    // queryFn: async () => {
    //   const result = await axios.get(url);
    //   console.log(result)
    //   return result.data
    // queryFn: () => axios.get(url)
    queryFn: async () => {
      const { data } = await axios.get(`${url}&query=${searchTerm}`);
      // console.log(data);
      return data;
    },
  })
  // console.log(response)
  // console.log(response.data)
  // console.log(response.data.data)


  if (response.isPending) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was a error...</h4>
      </section>
    )
  }

  const results = response.data.results;
  // console.log(results);

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {
        results.map((item) => {
          const url = item?.urls?.regular; 
          return (
            <img 
              key={item.id} 
              src={url} 
              alt={item.alt_descripition} 
              className="img"
            />
          )
        })
      }
    </section>
  )
}
export default Gallery