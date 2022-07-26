import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-example-2.herokuapp.com/api",
});

export const fetchArticles = ()=>{
    return api.get('/articles').then(({data})=>{
        return data.articles;
    })
}
