import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import prisma from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const postId = req.query.id;
  if (typeof postId !== "string") {
    return;
  }

  const session = await getSession({ req });

  console.log(session);

  //   const user = await prisma.user.findUnique({where: {}})

  //   const post = await prisma.post.update({
  //     where: { id: postId },
  //     data: { published: false },
  //   });
  //   console.log(post);
  res.json({ hey: "hjere" });
}
