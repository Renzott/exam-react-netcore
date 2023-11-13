export const getCurrentDate = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const monthString = month < 10 ? `0${month}` : month;

    return `${year}-${monthString}-${day}`;
}