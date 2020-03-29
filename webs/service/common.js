
  define(["axios"], function(axios) {

    let instance = axios.create();
    instance.defaults.headers.common
    instance.defaults.timeout = 2000; //默认超时时间，2秒。
    return {
        getNation: function(id) {
            return instance({
                method: 'get',
                url: '/api/nations/'+id
            })
        },
        getNations: function() {
            return instance({
                method: 'get',
                url: '/api/nations'
            })
        },
        deleteNation: function(id) {
            return instance({
                method: 'delete',
                url: '/api/nations/' + id
            })
        },
        getCity: function(id) {
            return instance({
                method: 'get',
                url: '/api/cities/'+id
            })
        },
        getCities: function() {
            return instance({
                method: 'get',
                url: '/api/cities'
            })
        },
        getProvince: function(id) {
            return instance({
                method: 'get',
                url: '/api/provinces/'+id
            })
        },
        getProvinces: function() {
            return instance({
                method: 'get',
                url: '/api/provinces'
            })
        },
        add: function(info) {
            return instance({
                method: 'post',
                url: '/api/common/add',
                data: info
            })
        },
        edit: function(info) {
            return instance({
                method: 'put',
                url: '/api/common/edit',
                data: info
            })
        }
    }
});