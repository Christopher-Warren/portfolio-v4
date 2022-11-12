import prisma from "../../../lib/prisma";

import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const postId = req.query.id;
  if (typeof postId !== "string") {
    return;
  }

  const session = await getSession({ req });

  const isAdmin = session?.user?.email === process.env.ADMIN_CHRIS;

  if (!session || !isAdmin) {
    res.json({ unauthorized: "You must be an admin to create posts" });
  }

  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true },
  });
  res.json(post);
}
