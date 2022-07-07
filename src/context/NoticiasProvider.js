import { createContext, useEffect, useState } from "react";
import axios from "axios";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=c105012511a84a1897f5b95b3840de26`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      console.log(data);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <NoticiasContext.Provider
      value={{ categoria, handleChangeCategoria, noticias }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };
export default NoticiasContext;
