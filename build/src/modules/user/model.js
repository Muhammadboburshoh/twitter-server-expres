"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("../../pg");
var model = {
    signin: function (_a) {
        var username = _a.username, password = _a.password;
        var SQL = "\n      select\n        user_id, username\n      from users\n      where username = $1 and password = crypt($2, password)\n    ";
        return pg_1.row(SQL, username, password);
    },
    many: function () {
        var SQL = "\n      select\n        username,\n        extract(year from joined_at) as since\n      from users\n    ";
        return pg_1.rows(SQL);
    }
};
exports.default = model;
