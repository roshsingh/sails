/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	firstName : {
  		type : 'string',
  		defaultsTo : ''
  	},
  	lastName : {
  		type : 'string',
  		defaultsTo : ''
  	},
  	email : {
  		type : 'string',
  		defaultsTo : ''
  	},
  	phone : {
  		type : 'string',
  		defaultsTo : ''
  	},
  	getFullName: function (){
      return this.firstName + ' ' + this.lastName;
    },
  }
};
  	


