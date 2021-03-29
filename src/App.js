import React, { PureComponent } from 'react';
import { Input } from 'antd';

const { Search } = Input;

class App extends PureComponent {
    onSearch = (value) => console.log(value);

    render() {
        return (
            <Search
                placeholder="input search text"
                onSearch={this.onSearch}
                style={{ width: 200 }}
            />
        );
    }
}

export default App;
