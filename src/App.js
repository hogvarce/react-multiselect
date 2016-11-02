import React from 'react';
import Multiselect from './Multiselect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h2>Multiselect:</h2><br />
                    <Multiselect />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;