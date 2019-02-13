const state = {
  currentAsset: {},
  assets: [
    {
      id: 1,
      name: 'Temperatur logger',
      manufacturer: 'Novamar AS',
      parts: [
        {partName: 'ThermoCouple sensor', manufacturer: 'Omega', webAddress: 'https://omega.com', model: 'abc123'},
        {partName: 'Kina boks', manufacturer: 'Kina boks firma', webAddress: 'https://kina.com', model: 'KINA KINA'}
      ],
      documents: [
        {fileName: 'efm32 datasheet', fileType: 'pdf', size: 200}
      ]
    },
    {
      id: 2,
      name: 'Sylinderformet bøye',
      manufacturer: 'Novamar AS'
    }
  ]
}

const mutations = {
  // Set current asset
  SET_CURRENT_ASSET (state, asset) {
    state.currentAsset = asset
    console.log(asset)
  }
}

const actions = {
  // Look through assets and commit selected
  setCurrentAsset ({ state, commit, dispatch }, { assetId }) {
    for (let i = 0; i < state.assets.length; i++) {
      if (state.assets[i].id === assetId) {
        commit('SET_CURRENT_ASSET', state.assets[i])
        return
      }
    }

    commit('SET_CURRENT_ASSET', null)
  }
}

const getters = {
  getCollection (state) {
    return state.assets
  },
  getCurrentCollection (state) {
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
