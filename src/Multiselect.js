import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import SelectField from 'material-ui/SelectField';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import _ from 'lodash';

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },

    customWidth: {
        width: 150,
    },
};


export default class Multiselect extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            values: []
        };
    }

    state = {
        value: 1,
    };

    handleCheckbox = (label, event, value) => {
        if (value) {
            this.setState({
                values: [...this.state.values, label].filter(onlyUnique)
            });
        } else {
            const values = this.state.values.filter(value => {
                return value != label;
            }).filter(onlyUnique);
            this.setState({
                values
            });
        }
    };

    handleChange = (event, index, value) => {
        this.setState({value});
    };

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        console.log(_.some(this.state.values, "Simple"));
        return (
            <div>
                <TextField
                    hintText="Hint Text"
                    onFocus={this.handleTouchTap}
                    value={this.state.values.toString()}
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu>
                        <Checkbox
                            label="Simple"
                            style={styles.checkbox}
                            defaultChecked={(existInArray(this.state.values, "Simple")) ? true : false}
                            onCheck={this.handleCheckbox.bind(this, 'Simple')}
                        />
                        <Checkbox
                            label="SimpleTwo"
                            style={styles.checkbox}
                            defaultChecked={(existInArray(this.state.values, "SimpleTwo")) ? true : false}
                            onCheck={this.handleCheckbox.bind(this, 'SimpleTwo')}
                        />
                        <Checkbox
                            label="SimpleThree"
                            style={styles.checkbox}
                            defaultChecked={(existInArray(this.state.values, "SimpleThree")) ? true : false}
                            onCheck={this.handleCheckbox.bind(this, 'SimpleThree')}
                        />
                    </Menu>
                </Popover>
            </div>
        );
    }
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function existInArray(arr, value) {
    let conjunction = arr.filter(a => {
        return a == value;
    });
    return (conjunction.length) ? true : false;
}