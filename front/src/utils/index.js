export const groupBy = (arr, property) => {
  return arr.reduce((acc, cur) => {
    acc[cur[property]] = [...acc[cur[property]] || [], cur];
    return acc;
  }, {});
}

export const COLLUMNS_NAME = ['ToDo', 'Doing', 'Done'];