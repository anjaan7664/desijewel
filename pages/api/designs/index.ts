import connectMongo from "@/utils/connectMongo";
import Design from "@/models/design.model";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const queryPerPage = parseInt(req.query.perPage as string);
    const queryPage = parseInt(req.query.page as string);
    const queryCategory = req.query.category;
    const queryType = req.query.sort || "";
    const result = await Design.paginate(
      { "info.category": queryCategory},
      {
        page: queryPage,
        limit: queryPerPage,
        sort: { hit: -1 },
      }
    );
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
