import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  console.log(url);
  //extract id from this url
  //   let id = url.searchParams.get("id");
  let name = url.searchParams.getAll("name");
  console.log(name);

  //   const { params } = request.params.getAll("id");
  //   const { id } = request.nextUrl.searchParams.get("id");
  //   const url = new URL(request.url);
  //   console.log("this is the url", url);
  //   //extract id from this url
  //   let id = url.searchParams.get("id");
  // console.log(id);
  //   console.log("Request:", request);
  //   const id = await request.query.id;
  //   const { id } = await request.params;
  console.log("ID:", name);
  try {
    return NextResponse.json({
      status: 200,
      data: name,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: error.message,
    });
  }
}

// export async function GET(request) {
//   // get the id form here
//   try {
//     console.log("req.query:", request.query.id);
//     const { id } = await request.query.id;
//     console.log(id);
//     return NextResponse.json({
//       message: `This is a custom response for the ID ${id}`,
//     });
//   } catch (error) {
//     return NextResponse.json({
//       status: 500,
//       error: error.message,
//     });
//   }
// }
