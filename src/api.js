const baseUrl = "https://conduit.productionready.io/api";

export const Articles = {
    getArticles: () => {
        return Promise.resolve([{id: 1}, {id: 2}]);
    }
};