import React from 'react';
import DataCell from './DataCell.react.js'

var Table = React.createClass({
    getInitialState: function(){
        return({
            statuses: {},
        });
    },

    onClick: function(row, column){
        console.log("you clicked a cell!");
        var currentStatus = this.state.statuses[column + row];
        switch(currentStatus){
            case null:
                currentStatus = true;
                break;
            case true:
                currentStatus = false;
                break;
            default:
                currentStatus = null;
        }
        var temp = this.state.statuses;
        temp[column + row] = currentStatus;
        this.setState({statuses: temp});
    },

    componentDidMount: function(){
        console.log("Table cDM");
        var temp = {};
        this.props.rows.map(function(row){
            this.props.columns.map(function(column){
                                
                if(!(column+row in temp)){
                    temp[column + row] = null;
                }
            }.bind(this));
        }.bind(this));
        this.setState({statuses: temp});
    },

    render: function(){
        console.log('Table render');
        var headers = this.props.columns.map(function(column){           
            return(
                <th scope='col' key={column}>{column}</th>
            )
        });
        var rows = this.props.rows.map(function(row){
            var cells = this.props.columns.map(function(column){
                var click = function(){
                    this.onClick(row, column);
                }.bind(this);
                return(
                    <DataCell column={column} row={row} status={this.state.statuses[column + row]} onClick={click}/>
                );
            }.bind(this));
            return(
                <tr key={row}>
                    <th scope='row'>{row}</th>
                    {cells}
                </tr>
            );
        }.bind(this));
        return(
            <table>
                <thead>
                    <tr>
                        <th key='empty'></th>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
});

export default Table;
