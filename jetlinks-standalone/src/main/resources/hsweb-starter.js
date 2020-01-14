//组件信息
var info = {
    groupId: "org.jetlinks",
    artifactId: "jetlinks-community",
    version: "1.0.0",
    website: "http://github.com/jetlinks/jetlinks-community",
    comment: "jetlinks"
};

var menus = [
];
var autzSettings = [
    {
        "permission": "protocol-supports",
        "id": "638a9d26f31890b7d59544251bc638db",
        "actions": java.util.Arrays.asList("query", "save", "delete"),
        "dimensionType": "user",
        "dimensionTarget": "admin",
        "dimensionTargetName": "超级管理员",
        "dimensionTypeName": "用户",
        "state": 1
    }, {
        "permission": "file",
        "id": "41ef31347373c3020573b5975569de05",
        "actions": java.util.Arrays.asList("upload-static"),
        "dimensionType": "user",
        "dimensionTarget": "admin",
        "dimensionTargetName": "超级管理员",
        "dimensionTypeName": "用户",
        "state": 1
    }, {
        "permission": "device-product",
        "id": "f4754ac5a714ec97a4e5d6ef60083975",
        "actions": java.util.Arrays.asList("query", "save", "delete"),
        "dimensionType": "user",
        "dimensionTarget": "admin",
        "dimensionTargetName": "超级管理员",
        "dimensionTypeName": "用户",
        "state": 1
    }, {
        "permission": "device-instance",
        "id": "ef85383c8adb52fcbeb7b4fe6686c6c6",
        "actions": java.util.Arrays.asList("query", "save", "delete"),
        "dimensionType": "user",
        "dimensionTarget": "admin",
        "dimensionTargetName": "超级管理员",
        "dimensionTypeName": "用户",
        "state": 1
    }, {
        "permission": "device-properties",
        "id": "936f59a0ef4cabb17b5028f8339895d3",
        "actions": java.util.Arrays.asList("query", "save", "delete"),
        "dimensionType": "user",
        "dimensionTarget": "admin",
        "dimensionTargetName": "超级管理员",
        "dimensionTypeName": "用户",
        "state": 1
    }, {
        "permission": "dictionary",
        "id": "7dc2cb54ddd22053368c84d8ad8362f3",
        "actions": java.util.Arrays.asList("query", "save", "delete"),
        "dimensionType": "user",
        "dimensionTarget": "admin",
        "dimensionTargetName": "超级管理员",
        "dimensionTypeName": "用户",
        "state": 1
    }, {
        "permission": "user",
        "id": "5f59ccf52ea4c79f5eacc10cbf40d02",
        "actions": java.util.Arrays.asList("add", "query", "get", "save", "update", "delete"),
        "dimensionType": "user",
        "dimensionTarget": "admin",
        "dimensionTargetName": "超级管理员",
        "dimensionTypeName": "用户",
        "state": 1
    }, {
        "permission": "dimension",
        "id": "89884beecc62035bc9b8d6e6b2b6a593",
        "actions": java.util.Arrays.asList("add", "import", "query", "get", "save", "update", "delete", "export"),
        "dimensionType": "user",
        "dimensionTarget": "admin",
        "dimensionTargetName": "超级管理员",
        "dimensionTypeName": "用户",
        "state": 1
    }, {
        "permission": "permission",
        "id": "31e57a1df89c14607758e3dbe618912a",
        "actions": java.util.Arrays.asList("add", "query", "get", "save", "update", "delete"),
        "dimensionType": "user",
        "dimensionTarget": "admin",
        "dimensionTargetName": "超级管理员",
        "dimensionTypeName": "用户",
        "state": 1
    }, {
        "permission": "menu",
        "id": "7ebc7d1b4316ba444bc64ae6059cd201",
        "actions": java.util.Arrays.asList("add", "query", "get", "save", "update", "delete"),
        "dimensionType": "user",
        "dimensionTarget": "admin",
        "dimensionTargetName": "超级管理员",
        "dimensionTypeName": "用户",
        "state": 1
    }, {
        "permission": "autz-setting",
        "id": "4e03a0db0a50c678f6b6e32cf9c31583",
        "actions": java.util.Arrays.asList("query", "save", "delete"),
        "dimensionType": "user",
        "dimensionTarget": "admin",
        "dimensionTargetName": "超级管理员",
        "dimensionTypeName": "用户",
        "state": 1
    }];
//版本更新信息
var versions = [
    {
        version: "3.0.0",
        upgrade: function (context) {

        }
    }
];

function initialize(context) {
    var database = context.database;

    database.dml().upsert("s_autz_setting_info").values(autzSettings).execute().sync();
}

function install(context) {


}


//设置依赖
dependency.setup(info)
    .onInstall(install)
    .onUpgrade(function (context) { //更新时执行
        var upgrader = context.upgrader;
        upgrader.filter(versions)
            .upgrade(function (newVer) {
                newVer.upgrade(context);
            });
    })
    .onUninstall(function (context) { //卸载时执行

    }).onInitialize(initialize);