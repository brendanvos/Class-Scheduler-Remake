import React from 'react';

var DataCell = React.createClass({
    displayName: "DataCell",

    render: function(){
        console.log("DataCell render");
        var content = "-";
        switch(this.props.status){
            case true:
                content = <span className = "glyphicon glyphicon-ok" />;
                break;
            case false:
                content = <span className = "glyphicon glyphicon-remove" />;
                break;
        }
        return (
            <td className="table-cell" key={this.props.key} onClick={this.props.onClick} status={this.props.status}>
                {content}
            </td>
        );
    }
});

export default DataCell;
