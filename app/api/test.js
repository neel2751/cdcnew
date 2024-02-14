export const dynamic = "force-dynamic";
export default function handler(req, res) {
  res.status(200).json({ message: "My first API route" });
}
