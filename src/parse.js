module.exports = function(data) {
	if(data instanceof Object) {
		return data;
	} else if (typeof data == 'string') {
		try {
		    return JSON.parse(data);
		} catch(error){
		    return error;
		}
	}
};