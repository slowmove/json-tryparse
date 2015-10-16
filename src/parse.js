module.exports = function(data) {
	if(data instanceof Object) {
		return data;
	} else if (data instanceof String) {
		try {
		    return JSON.parse(data);
		} catch(error){
		    return error;
		}		
	}
};