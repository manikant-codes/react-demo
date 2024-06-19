import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
      })
      .catch(function (error) {
        console.log("Error: ", error);
      });
  }, [url]);

  return data;
}

export default useFetch;
