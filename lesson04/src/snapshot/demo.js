export const generateConfig = () => {
	return {
		server: "http://localhost",
		port: 8080,
	};
};

export const generateAnotherConfig = () => {
	return {
		server: "http://localhost",
		port: 8080,
		time: new Date(),
	};
};
