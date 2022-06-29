import connectMongo from "@/utils/connectMongo";
import Design from "@/models/design.model";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  try {
    await connectMongo();
    const queryPerPage = req.query.perPage;
    const queryPage = req.query.page;
    const queryCategory =  req.query.category ;
    const queryType =  req.query.type || '';

    // const design = await Design.find({ query }).limit(10);
    const designs = await Design.paginate({dp:'1', category: queryCategory, type: queryType}, {
        page: queryPage,
        limit: queryPerPage,
        sort: { hit: -1 },
      }, function (err, result) {
        console.log('category rendered');
        res.json(result);
        
      });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}