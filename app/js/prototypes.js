if(typeof(String.prototype.condense) === "undefined") {
	String.prototype.condense = function() {
		return String(this).replace(/\s/g, '');
	};
}