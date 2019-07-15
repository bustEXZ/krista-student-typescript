import React, {Component} from 'react';
import Search from "./Search";


export interface MainComponentState {
    searchValue: string;
    counter: number;
    list: string[];
}

class MainComponent extends Component<{}, MainComponentState> {
    state: MainComponentState = {
        searchValue: "",
        counter: 0,
        list: ["Hello", "from", "React"]
    };

    onChangeSearch = (value: string) => {
        this.setState({
            searchValue: value
        })
    };

    increaseValue = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    decreaseValue = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    };

    render() {
        const { counter, searchValue } = this.state;

        return (
            <div>
                <Search value={searchValue} onChangeHandler={this.onChangeSearch} />
                <div>
                    Значение из поиска: {searchValue}
                </div>
                <hr />
                <div>
                    Hello from React (MainComponent.tsx)
                </div>
                <hr />
                <div>
                    <button onClick={this.increaseValue}>+1</button>
                    <button onClick={this.decreaseValue}>-1</button>
                    <div>
                        Значение: {this.state.counter}
                    </div>
                </div>
                <hr />
                <div>
                    Вывод списка:
                    {this.state.list.map((element, index) => <li key={index}>{element}</li>)}
                </div>
            </div>
        );
    }
}

export default MainComponent;
