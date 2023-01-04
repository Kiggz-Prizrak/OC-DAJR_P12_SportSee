// user object 
const getUser = {
  id: null,
  userDatas: null,
  todayScore: null,
  keyData: null,
  activity: null,
  averageSessions: null,
  performance: {
    kind: null,
    data: null,
  },
};

// fetch data from api 

const fetchData = () => {
  return (
    fetch("http://127.0.0.1:5173/userDatas.json")
      .then((response) => response.json())
      //.then((data) => getUser.push(data));
      .then((data) => {
        getUser.id = data.id;
        getUser.userDatas = data.userInfos;
        getUser.todayScore = data.todayScore;
        getUser.userName = data.userName;
        getUser.keyData = data.keyData;
      })
  );
};
const fetchActivity = () => {
  return fetch("http://127.0.0.1:5173/activity.json")
    .then((res) => res.json())
    .then((res) => {
      getUser.activity = res.data.sessions;
      
    });
};
const fetchAverageSessions = () => {
  return fetch("http://127.0.0.1:5173/averageSessions.json")
  .then((res) => res.json())
  .then((res) => {
    getUser.averageSessions = res.data.sessions
  }) 
}
const fetchPerformance = () => {
  return fetch("http://127.0.0.1:5173/performance.json")
  .then((res) => res.json())
  .then((res) => {
    getUser.performance.kind = res.data.kind;
    getUser.performance.data = res.data.data;
  }) 

}

// Data class 
class User {
  constructor(datas) {
    this._id = datas.id;
    this._userDatas = datas.userDatas;
    this._todayScore = datas.todayScore;
    this._keyData = datas.keyData;
    this._activity = datas.activity;
    this._averageSessions = datas.averageSessions;
    this._performance = datas.performance;
  }

  get id() {
    return this._id;
  }
  get userDatas() {
    return this._userDatas;
  }

  get todayScore() {
    return this._todayScore;
  }

  get keyData() {
    return this._keyData;
  }

  get activity() {
    return this._activity;
  }

  get averageSessions() {
    return this._averageSessions;
  }

  get performance() {
    return this._performance;
  }
}

await fetchData();
await fetchActivity();
await fetchAverageSessions()
await fetchPerformance();

const UserData = new User(getUser);
console.log(getUser);

export default UserData;
