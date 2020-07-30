import React, {FC} from 'react';

export interface SearchProps {
    value: string;
    onChangeHandler: (value: string) => void;
}

const Search: FC<SearchProps> = ({ value, onChangeHandler }) => (
    <input
        onChange={event => onChangeHandler(event.target.value)}
        value={value}
        type="text"
        placeholder="Поиск"
    />
);

export default Search;
