import axios from "axios"

export default {
  state: {
    news: [],
    category: 'general',
    country: 'us',
    currentPage: 1,
    totalPages: 0
  },
  getters: {
  },
  mutations: {
    FETCH_NEWS(state, data) {
      state.news = data.articles;
      state.totalPages = Math.ceil(data.totalResults/20);
    },
    SET_COUNTRY(state, data) {
      state.country = data;
    },
    SET_CATEGORY(state, data) {
      state.category = data;
    },
    SET_PAGE(state, data) {
      state.currentPage = data;
    }
  },
  actions: {
    fetchNews({commit, state}, {country=state.country, category=state.category, page=1}) {
      var url1 = 'https://newsapi.org/v2/top-headlines?' +
          `country=${country}&`+
          `category=${category}&`+
          `page=${page}&`+
          'apiKey=ed935bd90ae34628ba0ce75949a90737';
      axios.get(url1)
      .then((res) => {
        console.log(res);
        commit('FETCH_NEWS', res.data);
        return res.data;
      }).catch((err) => {
        console.log(err);
      });

      commit('SET_COUNTRY', country);
      commit('SET_PAGE', page);
      commit('SET_CATEGORY', category);
    }
  }
}
