const state = {
  currentAsset: {},
  assets: [
    {
      id: 1,
      serialNumber: '1234',
      attributes: [
        {key: 'thingId', value: '00000001'},
        {key: 'IMEI', value: '8374937983749384798'},
        {key: 'IMSI', value: '8759847594759847594'}
      ],
      service: [
        {date: '2019-02-01', message: 'Byttet deksel på batterilokk'},
        {date: '2019-02-02', message: 'Sensor sluttet og virke. Byttet'},
        {date: '2019-02-03', message: 'Noe er galt med dette'}
      ],
      collection: 1
    }
  ]
}

const mutations = {
  SET_CURRENT_ASSET (state, asset) {
    state.currentAsset = asset
  },
  SAVE_ASSET (state, asset) {
    state.assets.push(asset)
  },
  DELETE_ASSET (state, asset) {
    for (let i = 0; i < state.assets.length; i++) {
      if (asset.id === state.assets[i].id) {
        state.assets.splice(i, 1)
      }
    }
  }
}

const actions = {
  // Save an asset to the system
  saveAsset ({ commit, dispatch }, { asset }) {
    commit('SAVE_ASSET', asset)
  },

  // Delete an asset from the system
  deleteAsset ({ commit, dispatch }, { asset }) {
    commit('DELETE_ASSET', asset)
  },

  // Set current asset
  setCurrentAsset ({ commit, getters }, { id }) {
    let assets = getters.getAssets
    for (let i = 0; i < assets.length; i++) {
      if (assets[i].id === id) {
        commit('SET_CURRENT_ASSET', assets[i])
      }
    }
  }
}

const getters = {
  getAssets: (state) => {
    return state.assets
  },
  getCurrentAsset: (state) => {
    return state.currentAsset
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
