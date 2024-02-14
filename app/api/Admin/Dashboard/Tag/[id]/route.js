import { NextResponse } from "next/server";

// export async function DELETE(request) {
//   const { _id } = check;
//   console.log(check);
//   return NextResponse.json({
//     status: 200,
//     data: _id,
//     message: "user find and update",
//   });
// }
// export const GET = async (req, { params }) => {
//     const { client, bucket } = await connectToDb();

//     const { data } = params;

//     const files = await bucket
//       .find({
//         filename: data,
//       })
//       .toArray();

//     // the resulat is an array and i take the first
//     //element that i found
//     const file = files[0];

//     //reading file using openDownloadStreamByName
//     const stream = bucket.openDownloadStreamByName(file.filename);

//     return new NextResponse(stream, {
//       Headers: { "Content-Type": file.contentType },
//     });
//   };
