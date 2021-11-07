import { Request, Response } from  'express'
import { CreateCourseService } from './CreateCourseService'

const courseService = new CreateCourseService()


export function createCourse(req:Request, res:Response ) {
    courseService.execute({
        name:'NodeJS',
        educator: 'Dani',
        duration: 10
    
    })

    return res.send()
}