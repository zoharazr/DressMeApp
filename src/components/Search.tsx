const searchFilter = (data: any, text: string) => {
  if (text.length < 2) {
    return data.slice(0, 5);
  } else if (text) {
    const newData = data.filter((item: any) => {
      return (
        item.name.toLowerCase().indexOf(text) >= 0 ||
        item.brand.toLowerCase().indexOf(text) >= 0
      );
    });
    return newData;
  } else {
    return data;
  }
};

export default searchFilter;
