module.exports = function(data) {
	if(data instanceof String) {
		return data;
	} else if (data instanceof Object) {
		try {
		    return JSON.stringify(data);
		} catch(error){
		    return error;
		}		
	}
};