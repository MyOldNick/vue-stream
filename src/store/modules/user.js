//mutation types
import { SET_USER } from "../types/userTypes"
//constants
import { API } from "../../constants/API"

const user = {

    state: () => ({
        user: {}
    }),

    getters: {},

    mutations: {

        [SET_USER](state, payload) {
            state.user = payload
        }

    },

    actions: {
        //TODO: create fetch helper

        async createUser({ commit }, data) {

            const body = JSON.stringify(data)

            const res = await fetch(`${API}register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: body
            })

            const result = await res.json()

            commit(SET_USER, result)

        },

        async loginUser({ commit }, data) {

            const body = JSON.stringify(data)

            const res = await fetch(`${API}login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: body
            })

            const result = await res.json()

            commit(SET_USER, result)

        }

    },
}


export default user