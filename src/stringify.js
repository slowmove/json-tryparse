module.exports = function(data) {
	if(typeof data == "string") {
		return data;
	} else if (data instanceof Object) {
		try {
		    return JSON.stringify(data);
		} catch(error){
		    return error;
		}
	}
};