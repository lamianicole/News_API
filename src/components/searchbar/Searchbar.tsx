interface SearchbarProps {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
    onSearch: () => void; 
}

const Searchbar: React.FC<SearchbarProps> = ({setSearchQuery, setLanguage, onSearch}) => {
    return (
        <div className="searchbar-container">
            <input 
            type="text"
            placeholder="Type to search"
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <select onChange={(e) => setLanguage(e.target.value)}>
                <option value="en">Englisch</option>
                <option value="de">Deutsch</option>
            </select>
            <button onClick={onSearch}>Search</button>
        </div>
    )
};

export default Searchbar;