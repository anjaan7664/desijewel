import connectMongo from "@/utils/connectMongo";
import Design from "@/models/design.model";
import type { NextApiRequest, NextApiResponse } from "next";
import Cors from 'cors'

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const queryPerPage = parseInt(req.query.perPage as string);
    const queryPage = parseInt(req.query.page as string);
    const queryCategory = req.query.category;
    const queryMetal = req.query.metal;
    const queryType = req.query.sort || "";
    const result = await Design.paginate(
      { "info.category": queryCategory, "info.metal":queryMetal},
      {
        page: queryPage,
        limit: queryPerPage,
        sort: { "extra.hit": -1 },
      }
    );
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
