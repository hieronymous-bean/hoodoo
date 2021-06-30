import router from './router.js';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";


// init store //
export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    authentication: {
      namespaced: true,
      state: () => ({
        user: null,
        userId: null
      }),
      mutations: {
        storeUser (state, user) {
          state.user = user
        },
        storeUserId (state, id) {
          state.userId = id
        },
        clearAuthenticationState (state) {
          state.user = null,
          state.userId = null,
          state.id = null
        }
      },
      getters: {
        loggedIn(state) {
          return !!state.user
        },
        getCurrentUser(state) {
          return state.user
        },
        getUserId(state) {
          return state.userId
        },
      },
      actions: {
        loadInitialAuthenticationState({ commit }) {
          const signedIn = window.gapi.auth2.getAuthInstance().currentUser.get();
          if (signedIn) {
            commit('storeUser', signedIn.mc);
            commit('storeUserId', window.gapi.auth2.getAuthInstance().currentUser.get().getId());
          } else {
            commit('clearAuthenticationState');
          }
        },
        logIn({ commit }) {
          window.gapi.auth2.getAuthInstance().signIn()
          .then(function(result) {
            commit('storeUser',result)
            db.collection('users').get().then(querySnapshot => {
              const documents = querySnapshot.docs.map(doc => doc.data());
              console.log(documents)
            })
          })
          .catch(error => error)
        },
        logOut({ commit }, {} = {}) {
          return window.gapi.auth2.getAuthInstance().signOut().then(() => {
            commit('clearAuthenticationState', null)
            commit('application/clearApplicationState', null, { root: true })
            commit('meetings/clearMeetingsState', null, { root: true })
            commit('templates/clearTemplatesState', null, { root: true })
            setTimeout(function () {
              router.push('/')
            }, 1000)
          })
          .catch((error) => {
            console.log(error);
          });
        }
      }
    },
    
    application: {
      plugins: [createPersistedState()],
      namespaced: true,
      state: () => ({
        activeSidebarMenu: null
      }),
      mutations: {
        storeActiveSidebarMenu (state, menu) {
          state.activeSidebarMenu = menu
        },
        clearApplicationState (state) {
          state.activeSidebarMenu = null
        }
      },
      getters: {
        getActiveSidebarMenu(state) {
          return state.activeSidebarMenu
        },
      },
      actions: {
        
      }
    },
    
    meetings: {
      plugins: [createPersistedState()],
      namespaced: true,
      state: () => ({
        selectedMeeting: null,
        calendarEvents: null,
        availableMeetings: null
      }),
      mutations: {
        storeSelectedMeeting (state, meeting) {
          state.selectedMeeting = meeting
        },
        storeCalendarEvents (state, events) {
          state.calendarEvents = events
        },
        storeAvailableMeetings (state, meetings) {
          state.availableMeetings = meetings
        },
        clearMeetingsState (state) {
          state.selectedMeeting = null
          state.calendarEvents = null
          state.availableMeetings = null
        }
      },
      getters: {
        getActiveMeeting(state) {
          return state.activeMeeting
        },
        getCalendarEvents(state) {
          return state.calendarEvents
        },
        getUserMeetings(state) {
          return state.userMeetings
        },
      },
      actions: {
        
      }
    },
    
    templates: {
      plugins: [createPersistedState()],
      namespaced: true,
      state: () => ({
        availableTemplates: null
      }),
      mutations: {
        storeAvailableTemplates (state, templates) {
          state.availableTemplates= templates
        },
        clearTemplatesState (state) {
          state.availableTemplates = null
        }
      },
      getters: {
        getAvailableTemplates(state) {
          return state.availableTemplates
        }
      },
      actions: {
        
      }
    }
  }
})