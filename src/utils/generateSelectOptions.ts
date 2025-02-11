export const generateSelectOptions = (data: any, keyName: string) => {
    const options = data?.data.map((item: {_id: string, [key: string]: any}) => ({
        value: item._id,
        label: item[keyName]
    }));
    return options;
}