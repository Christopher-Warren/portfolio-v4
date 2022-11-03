import prisma from "../../../lib/prisma";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const postId = req.query.id;
  if (typeof postId !== "string") {
    return;
  }

  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true },
  });
  res.json(post);
}
