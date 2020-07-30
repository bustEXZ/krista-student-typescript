import React, {useState} from 'react';
import Search from "./Search";

const MainComponent = () => {
    const [searchValue, setSearch] = useState<string>("")
    const [counter, setCounter] = useState<number>(0)
    const [list, setList] = useState<string[]>(["Hello", "from", "React"])
    const onChangeSearch = (value: string) => {
        setSearch(value);
    };

    const increaseValue = () => {
        setCounter(counter + 1);
    };

    const decreaseValue = () => {
        setCounter(counter - 1);
    };
    return (
        <div>
            <Search value={searchValue} onChangeHandler={onChangeSearch}/>
            <div>
                Значение из поиска: {searchValue}
            </div>
            <hr/>
            <div>
                Hello from React (MainComponent.tsx)
            </div>
            <hr/>
            <div>
                <button onClick={increaseValue}>+1</button>
                <button onClick={decreaseValue}>-1</button>
                <div>
                    Значение: {counter}
                </div>
            </div>
            <hr/>
            <div>
                Вывод списка:
                {list.map((element, index) => <li key={index}>{element}</li>)}
            </div>
        </div>
    );
}

export default MainComponent;
