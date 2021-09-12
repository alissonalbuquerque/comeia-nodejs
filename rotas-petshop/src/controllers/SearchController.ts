import { Request, Response } from 'express'
import Pet from '../models/Pet'

export default class SearchController {

    public search(request: Request, response: Response) {
        const query: string = request.query.q as string

        if(!query) {
            response.redirect('/')
        }

        const petModel = new Pet()
        const pets = petModel.getFromName(query)

        return response.render('html/home', { pets, query })
    }

}