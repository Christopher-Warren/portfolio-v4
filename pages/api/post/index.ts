import { getSession } from "next-auth/react";

import prisma from "../../../lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { title, content } = req.body;

  const session = await getSession({ req });
  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: { connect: { email: session?.user?.email || undefined } },
    },
  });
  res.json(result);
}
