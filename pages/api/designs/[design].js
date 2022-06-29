import connectMongo from "@/utils/connectMongo";
import Design from "@/models/design.model";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  try {
    await connectMongo();
    const queryImage = req.query.design;
    const design = await Design.findOne({ image: queryImage });
console.log('image rendered');
    res.json(design);
    res.end()
  } catch (error) {
    console.log(error);
    res.json({ error });
    res.end()
  }
}
