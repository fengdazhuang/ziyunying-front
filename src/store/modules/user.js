import {userLogin,userLogout} from '@/api/user';
import { getToken, setToken, removeToken } from '@/utils/auth'

const getDefaultState = () => {
  return {
    my_token: getToken(),
    name: '',
    avatar: '',
    userInfo: localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.my_token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USER_INFO: (state, action) => {
    state.userInfo = action;
    localStorage.setItem('userInfo',JSON.stringify(state.userInfo))
  },
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      userLogin(userInfo).then(res => {
          if(res.status === 200){
            commit('SET_TOKEN', res.data.success);
            setToken(res.data.success)
            commit('SET_USER_INFO', res.data);
          }
          resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    // return new Promise((resolve, reject) => {
    //   getInfo(state.my_token).then(response => {
    //     const { data } = response
    //
    //     if (!data) {
    //       return reject('Verification failed, please Login again.')
    //     }
    //
    //     const { name, avatar } = data
    //
    //     commit('SET_NAME', name)
    //     commit('SET_AVATAR', avatar)
    //     resolve(data)
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },

  // user logout
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      userLogout().then(res => {
        removeToken(); // must remove  token  first
        commit('RESET_STATE');
        resolve(res);
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  },
  SET_USER_INFO({ commit }, data) {
    commit('SET_USER_INFO', data)
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions
}

