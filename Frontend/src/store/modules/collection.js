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
  },
  NEW_ASSET (state, asset) {
    state.assets.push(asset)
  },
  DELETE_ASSET (state, id) {
    for (let i = 0; i < state.assets.length; i++) {
      if (state.assets[i].id === id) {
        state.assets.splice(i, 1)
      }
    }
  }
}

const actions = {
  // Add a new asset to the manager
  newAsset ({ state, commit, dispatch }, { asset }) {
    commit('NEW_ASSET', asset)
  },

  // Delete an asset from the system
  deleteAsset ({ state, commit, dispatch }, { assetId }) {
    commit('DELETE_ASSET', assetId)
  },

  // Look through assets and commit selected
  setCurrentCollection ({ state, commit, dispatch }, { assetId }) {
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
  },
  // Get a collection by id
  getCollectionById (state, getters) {
    return (id) => {
      let collection = getters.getCollection
      for (let i = 0; i < collection.length; i++) {
        if (collection[i].id === id) {
          return collection[i]
        }
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
