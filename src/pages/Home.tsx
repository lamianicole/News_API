import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Searchbar from "../components/searchbar/Searchbar";
import NewsList from "../components/newsList/NewsList";
import { INewsArticle } from '../components/interfaces/Interfaces';

const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
    
        const [articles, setArticles] = useState<INewsArticle[]>([]);
        const [searchQuery, setSearchQuery] = useState<string>("");
        const [language, setLanguage] = useState<string>("en");
        const [isLoading, setIsLoading] = useState<boolean>(false);
        const [shouldFetch, setShouldFetch] = useState<boolean>(false);

// async function, um News-Artikel von der API zu fetchen
        const fetchNews = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://newsapi.org/v2/everything?q=${searchQuery}&language=${language}&apiKey=${apiKey}`);
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
            // setzt isLoading zurück auf false, wenn fetch abgeschlossen
            setIsLoading(false)
        };

        useEffect(() => {
            if (shouldFetch){
                fetchNews()
                    setShouldFetch(false)
            }
        }, [shouldFetch]);

        const handleSearch = () => {
            setShouldFetch(true);
        }

    return (
        <div>
            <Header />
            <Searchbar
            setSearchQuery= {setSearchQuery}
            setLanguage= {setLanguage}
            onSearch= {handleSearch} 
            />
            <NewsList articles={articles} isLoading={isLoading}/>
        </div>
    )
}

export default Home;