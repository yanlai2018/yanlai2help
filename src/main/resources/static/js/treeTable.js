init({
    title: 'Table Treegrid',
    desc: 'Use Plugin: <a href="https://github.com/maxazan/jquery-treegrid" target="_blank">jquery-treegrid</a> and bootstrap-table-treegrid.',
    links: [
        'https://cdnjs.cloudflare.com/ajax/libs/jquery-treegrid/0.2.0/css/jquery.treegrid.min.css',
        'bootstrap-table.min.css'
    ],
    scripts: [
        'https://cdnjs.cloudflare.com/ajax/libs/jquery-treegrid/0.2.0/js/jquery.treegrid.min.js',
        'bootstrap-table.min.js',
        'extensions/treegrid/bootstrap-table-treegrid.min.js'
    ]
})






var $table = $('#scoreBasis');
function mounted() {
    $table.bootstrapTable({
        url: 'webApp/treeGrid',
        striped: true,
        sidePagination: 'server',
        idField: 'id',
        columns: [
            {
                field: 'ck',
                checkbox: true
            },
            {
                field: 'name',
                title: '名称'
            },
            {
                field: 'status',
                title: '状态',
                sortable: true,
                align: 'center',
                formatter: 'statusFormatter'
            },
            {
                field: 'permissionValue',
                title: '权限值'
            }
        ],
        treeShowField: 'name',
        parentIdField: 'pid',
        onLoadSuccess: function(data) {
            $table.treegrid({
                treeColumn: 1,
                onChange: function() {
                    $table.bootstrapTable('resetWidth')
                }
            })
        }
    })
}
function typeFormatter(value, row, index) {
    if (value === 'menu') {
        return '菜单'
    }
    if (value === 'button') {
        return '按钮'
    }
    if (value === 'api') {
        return '接口'
    }
    return '-'
}
function statusFormatter(value, row, index) {
    if (value === 1) {
        return '<span class="label label-success">正常</span>'
    }
    return '<span class="label label-default">锁定</span>'
}