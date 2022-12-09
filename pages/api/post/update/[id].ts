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

  // Get inputs
  const { title, content, preview, published } = req.body;

  if (session?.user?.email) {
    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    // Get post
    const post = await prisma.post.findUnique({ where: { id: postId } });

    // Check that user is owner of post
    if (post?.authorId === user?.id) {
      // Update post
      const post = await prisma.post.update({
        where: { id: postId },
        data: req.body,
      });

      console.log(post);
    }
  }

  res.json({ hey: "hjere" });
}
