function safelyGet(object, path) {
	const dotIndex = path.indexOf('.');

	if (dotIndex !== -1) {
		if (object[path.slice(0, dotIndex)]) {
			return safelyGet(object[path.slice(0, dotIndex)], path.slice(dotIndex + 1));
		}
	}

	return object[path];
}
