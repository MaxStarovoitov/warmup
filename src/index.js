module.exports = function warmup(temperature) {
	// your implementation here
	if (typeof temperature == 'number') {
		const cTemp = temperature;
		const fTemp = cTemp * 9/5 + 32;

		return fTemp;
	}

	return false;
};
