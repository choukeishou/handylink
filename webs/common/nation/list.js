define([
    'text!./list.html',
    'service/common'
  ], function(Template, common) {
    return {
        name: "list",
        template: Template,
        data: function(){
            return {
                totalDatas: [],
                tableDatas: [],
                currentPage: 0,
                pageSize: 10
            };
        },
        methods: {
            initData: function() {
                common.getNations().then(
                    (response) => {
                        this.totalDatas = response.data;
                        this.initCurrentPage()
                    },
                    (error) => {
                        console.log(error)
                    })
            },
            initCurrentPage: function() {
                let begin = this.pageSize*(this.currentPage-1)
                let end = Math.min(this.pageSize*this.currentPage, this.totalDatas.length)
                
                this.tableDatas = this.totalDatas.slice(begin, end)
            },
            handleSizeChange: function(size) {
                this.pageSize = size
                this.initCurrentPage()
            },
            handleCurrentChange: function(pageNo) {
                this.currentPage = pageNo
                this.initCurrentPage()
            },
            deleteNation: function (row) {
                common.deleteNation(row.id).then(
                    (response) => {
                        if (response.data == "OK") {
                            console.log("民族删除成功！")

                            this.tableDatas = this.tableDatas.filter(
                                    (item) => {return item.id != row.id});
                        } else {
                            console.log("民族删除失败！")
                            console.log(response.data)
                        }
                    },
                    (error) => {
                        console.log("民族删除失败！")
                        console.log(error)
                    }
                )
            },
            editNation: function(row) {
                this.$router.push({
                        name: "common_edit",
                        params: {type: "nation", id: row.id}
                    })
            },
            addNation: function() {
                this.$router.push({
                        name: "common_add",
                        params: {type: "nation"}
                    })
            }
        },
        mounted(){
          this.initData();
        }
    }
  })