const formatDate = st => {
  let date = new Date(st);
  return (
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2)
  );
};

export default {
  getAllDatas: ({ data }) => data,
  getMonthReport: ({ data }) =>
    formatDate(
      new Date(data[0].startDate.getFullYear(), data[0].startDate.getMonth(), 1)
    ),
  getDistanceTraveled: ({ data }) =>
    data.reduce((prev, next) => prev + next.distance, 0).toFixed(2),
  getLengtData: ({ data }) => data.length,
  getSelectOnly: ({ select }) => select,
  MyEvents: ({ data }) => {
    const map = {};
    data.forEach(e =>
      (map[formatDate(e.startDate)] = map[formatDate(e.startDate)] || []).push([
        e.pointEntry,
        e.exitPoint
      ])
    );
    return map;
  }
};
