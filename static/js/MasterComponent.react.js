import React from 'react';
import $ from 'jquery';
import Table from './Table.react.js';

var MasterComponent = React.createClass({
    getInitialState: function(){
        return({
            teachers: null,
            courses: null,
            loaded: false
        })
    },
    
    componentWillMount: function(){
        console.log("Master cWM");
        $.ajax({
            type: 'GET',
            url: 'http://' + serverIP +':8080/data',
            success: function(response){
                var parsed = JSON.parse(response);
                this.setState({
                    teachers: parsed.teachers,
                    courses: parsed.courses,
                    loaded: true
                });
            }.bind(this),
        });
    },

    render: function(){
        console.log('Master render');
        if(!this.state.loaded)
            return ( <div> Loading data from data.json... </div> )
        return (
            <div>
                <Table columns={this.state.teachers} rows={this.state.courses}/>
            </div>
        );
    }
});

export default MasterComponent;
