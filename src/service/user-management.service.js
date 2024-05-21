import axios from "axios";

const BASE_URL = 'http://localhost:4000/users';
const BASE_URL_MESSAGE = 'http://localhost:4000/groupMessage';
const BASE_URL_MESSAGE_201 = 'http://localhost:4000/group201';

export const getGroupMessagesTwoZeroOne = () => {
  return new Promise((resolve, reject) => {
    axios.get(BASE_URL_MESSAGE_201).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    });
  });
}


export const addGroupMessagesTwoZeroOne = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(BASE_URL_MESSAGE_201, data)
        .then(() => {
          resolve(true);
        }).catch((err) => {
          reject(err);
        })
  });
}

export const getGroupMessagesByName = (name) => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL_MESSAGE}?name=${name}`)
        .then((res) => {
          resolve(res.data);
        }).catch((err) => {
          reject(err);
        })
  });
}

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    axios.get(BASE_URL).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    });
  });
}

export const addUser = (data) => {
    return new Promise((resolve, reject) => {
      axios.post(BASE_URL, data)
          .then(() => {
            resolve(true);
          }).catch((err) => {
            reject(err);
          })
    });
}

// export const addToGroupMessage = (data) => {
//   return new Promise((resolve, reject) => {
//     axios.post(BASE_URL_MESSAGE, data)
//         .then(() => {
//           resolve(true);
//         }).catch((err) => {
//           reject(err);
//         })
//   });
// }


export const updateUser = (userId, data) => {
  return new Promise((resolve, reject) => {
    axios.put(`${BASE_URL}/${userId}`, data)
        .then(() => {
          resolve(true);
        }).catch((err) => {
          reject(err);
        })
  });
}

export const getUserById = (userId) => {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}/${userId}`)
          .then((res) => {
            resolve(res.data);
          }).catch((err) => {
            reject(err);
          })
    });
  }
  
  export const searchByUsername = (username) => {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}?username=${username}`)
          .then((res) => {
            resolve(res.data);
          }).catch((err) => {
            reject(err);
          })
    });
  }
  export const searchByEmail = (email) => {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}?email=${email}`)
          .then((res) => {

            resolve(res.data);
          }).catch((err) => {
            reject(err);
          })
    });
  }

  export const searchByPassword = (password) => {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}?password=${password}`)
          .then((res) => {
            resolve(res.data);
          }).catch((err) => {
            reject(err);
          })
    });
  }

  export const timeConverter = (time) => {
    
    let [hours, minutes, seconds] = time.split(':').map(Number);
    let period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Convert 0 to 12 for midnight or noon
    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
  }
