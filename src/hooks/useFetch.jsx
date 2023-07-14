import { useEffect, useState } from "react";

const useFetch = (graphQuery) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      await fetch(process.env.GRAPHQL_CMS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: graphQuery,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setBookmarks(res.data.bookmarks);
          setCategories(res.data.categories);
        });
    };
    fetchData();
  }, [graphQuery]);
  return [bookmarks, categories];
};

export default useFetch;
