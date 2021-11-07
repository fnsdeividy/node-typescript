"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
var CreateCourseService_1 = require("./CreateCourseService");
var courseService = new CreateCourseService_1.CreateCourseService();
function createCourse(req, res) {
    courseService.execute({
        name: 'NodeJS',
        educator: 'Dani',
        duration: 10
    });
    return res.send();
}
exports.createCourse = createCourse;
