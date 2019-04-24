export default {
  getAllDatas: ({ data }) => data,
  getDistanceTraveled: ({ data }) =>
    data.reduce((prev, next) => prev + next.distance, 0).toFixed(2),
  getLengtData: ({ data }) => data.length,
  getMonth: ({ data }) => data[0].startDate.getMonth()
};
