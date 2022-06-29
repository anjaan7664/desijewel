
import connectMongo from "@/utils/connectMongo";
import Design from "@/models/design.model";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const queryPerPage = req.query.perPage;
    const queryPage = req.query.page;
    const queryCategory = req.query.category;
    const queryType = req.query.type || "";
    const result = await Design.paginate(
      { category: queryCategory, type: queryType },
      {
        page: 1,
        limit: 12,
        sort: { hit: -1 },
      }
    );
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
