import express, { Request, Response, NextFunction} from 'express';
import createError from 'http-errors';
import cors from 'cors';
import { corsOptionsDelegate } from './cors'
import fetch from 'node-fetch';

let heroeRouter = express.Router();

/* GET home page. */
heroeRouter.route('/:name')
.options( cors(corsOptionsDelegate), (req: Request, res: Response) => {res.sendStatus(200); })
.get( cors(), async (req: Request, res: Response, next: NextFunction) => {
  //res.json({ title: 'Express' });
  try {
    const key = process.env.HEROE_KEY || '3629579853760197'
    const url = process.env.HEROE_URL || 'https://superheroapi.com/api/'
    const hero = await fetch(`${url}${key}/search/${req.params.name}`)
    const heroRes = await hero.json()
    console.log(heroRes)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(heroRes)
    
  } catch(e) {
    res.json(createError(500, `Error: ${e}`))
    next(e)
  }
});

export default heroeRouter;
