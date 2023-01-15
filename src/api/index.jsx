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
    fetch("http://localhost:3000/user/18")
      .then((res) => res.json())
      //.then((data) => getUser.push(data));
      .then((res) => {
        console.log(res);
        getUser.id = res.data.id;
        getUser.userDatas = res.data.userInfos;
        getUser.todayScore = res.data.todayScore || res.data.score;
        getUser.userName = res.data.userName;
        getUser.keyData = res.data.keyData;
      })
  );
};
const fetchActivity = () => {
  return fetch("http://localhost:3000/user/18/activity")
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      getUser.activity = res.data.sessions;
    });
};
const fetchAverageSessions = () => {
  return fetch("http://localhost:3000/user/18/average-sessions")
    .then((res) => res.json())
    .then((res) => {
      
      console.log(res);
      getUser.averageSessions = res.data.sessions;
    }); 
}
const fetchPerformance = () => {
  return fetch("http://localhost:3000/user/18/performance")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      getUser.performance.kind = res.data.kind;
      getUser.performance.data = res.data.data;
    }); 

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
