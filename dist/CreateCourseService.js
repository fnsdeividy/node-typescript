"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourseService = void 0;
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    CreateCourseService.prototype.execute = function (_a) {
        var name = _a.name, educator = _a.educator, duration = _a.duration;
        console.log(name, duration, educator);
    };
    return CreateCourseService;
}());
exports.CreateCourseService = CreateCourseService;
