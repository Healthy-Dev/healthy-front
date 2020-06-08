// TODO: function to convert an object to FormData

export const buildFormData = (formData, data, parentKey) => {
	if (
		data &&
		typeof data === "object" &&
		!(data instanceof Date) &&
		!(data instanceof File) &&
		!(data instanceof Blob) &&
		!(Array.isArray(data) && !data.length)
	) {
		Object.keys(data).forEach((key) => {
			buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
		});
	} else {
		const value = data == null ? "" : data;

		formData.append(parentKey, value);
	}
};

export const jsonToFormData = (data) => {
	const formData = new FormData();

	buildFormData(formData, data);

	return formData;
};

/* const createDataObject = () => {
	let formData = new FormData();
	formData.append("title", title);
	formData.append("description", description);
	formData.append("photo", photoBlob, imageFileName);
	formData.append("externalUrl", externalUrl);
	for (const pair of formData.entries()) {
		console.log(pair[0] + ", " + pair[1]);
	}
	return formData;
}; */
