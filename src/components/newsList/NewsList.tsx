import NewsCard from "../newsCard/NewsCard";
import Loading from "../loading/Loading";
import './newsList.css'
import { INewsArticle } from '../interfaces/Interfaces';

interface NewsListProps {
    articles: INewsArticle[];
    isLoading: boolean;
}

const NewsList: React.FC<NewsListProps> = ({articles, isLoading}) => {
    if (isLoading) return <Loading/>;

    return (
        <div className="news-list">
            {articles.map((article, index) => (
                <NewsCard key={index} article={article}/>
            ))}
        </div>
    );
};

export default NewsList;
