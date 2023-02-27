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
  const { title, content, preview, published, previewImage, tags } = req.body;

  if (session?.user?.email) {
    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    // Get post
    const post = await prisma.post.findUnique({ where: { id: postId } });

    // Check that user is owner of post
    if (post?.authorId === user?.id) {
      const now = new Date();
      // Update post
      const post = await prisma.post.update({
        where: { id: postId },
        data: {
          title,
          content,
          preview,
          previewImage,
          published,
          tags,
          editedAt: now,
        },
      });
    }
  }
}
