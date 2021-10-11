const state = {
    name: window.localStorage.getItem('currentCity') || '深圳',
    cityId: window.localStorage.getItem('currentCityId') || 30
}

const actions = {

}

const  mutations = {
    CITY_INFO(state, payload){
        state.name = payload.name
        state.cityId = payload.cityId
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}