const formatDate = st => {
  let date = new Date(st);
  console.log(typeof st, st, date);
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
  getDistanceTraveled: ({ data }) =>
    data.reduce((prev, next) => prev + next.distance, 0).toFixed(2),
  getLengtData: ({ data }) => data.length,
  MyEvents: ({ data }) => {
    const map = {};
    data.forEach(e =>
      (map[formatDate(e.startDate)] = map[formatDate(e.startDate)] || []).push([
        e
      ])
    );
    return map;
  }
};
