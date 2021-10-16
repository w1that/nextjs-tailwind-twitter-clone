import { tweets } from "../../../data";
import Cors from 'cors'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default function handler(req, res) {
  await cors(req,res)
    res.status(200).json(tweets)
  }