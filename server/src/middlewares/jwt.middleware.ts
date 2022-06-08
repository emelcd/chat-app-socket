import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express'

const JWT_SECRET : string = process.env.JWT_SECRET

export default (req:Request, res:Response, next:NextFunction) => {
  const token = req.header('Authorization').split(' ')[1]
  if(!token) {
    return res.status(401).send('Unauthorized')
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.body.user = decoded
    next()
  }
  catch(error) {
    res.status(401).send('Unauthorized')
  }
  

}