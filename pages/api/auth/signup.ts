import { hashPassword } from "@/utils/auth";
import connectMongo from "@/utils/connectMongo";
import User from "@/models/user.model";
import type { NextApiRequest, NextApiResponse } from "next";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const email = req.body.email.toLowerCase();
  const password = req.query.password as string;

  console.log(email);
  console.log(password);

  await connectMongo();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    return;
  }

  const hashedPassword = await hashPassword(password);
  const newUser = new User({
    email,
    password: hashedPassword,
  });
  await newUser.save();

  return res.status(200).json({ message: "User created!", user: newUser });
}

export default handler;
