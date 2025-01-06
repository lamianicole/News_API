import "./newsCard.css";
import { INewsArticle } from "../interfaces/Interfaces";

interface NewsCardProps {
    article: INewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({article}) => {
    return (
        <div className="news-card">
            <img src={article.urlToImage} alt={article.title}/>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url}>Read more</a>
        </div>
    );
};

export default NewsCard;