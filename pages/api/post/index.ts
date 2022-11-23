import { getSession } from "next-auth/react";

import prisma from "../../../lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";

interface ExtendedNextRequest extends NextApiRequest {
  body: {
    title: string;
    content: string;
    published: boolean;
    preview?: string;
  };
}

export default async function handle(
  req: ExtendedNextRequest,
  res: NextApiResponse<any>
) {
  const { title, content, published, preview } = req.body;

  const session = await getSession({ req });

  const isAdmin = session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_CHRIS;

  const sanitizedUri = title
    .replace(/[^a-zA-Z 0-9]/g, "")
    .trimEnd()
    .trimStart()
    .replaceAll(" ", "-");

  if (!session || !isAdmin) {
    res.json({ unauthorized: "You must be an admin to create posts" });
  }

  const result = await prisma.post.create({
    data: {
      title,
      content,
      published,
      preview,
      slug: sanitizedUri,
      author: { connect: { email: session?.user?.email || undefined } },
    },
  });

  res.json(result);
}
