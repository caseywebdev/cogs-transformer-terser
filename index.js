import { minify } from 'terser';

export default async ({ file: { buffer }, options }) => {
  const { code } = await minify(buffer.toString(), options);
  return { buffer: Buffer.from(`${code}\n`) };
};
