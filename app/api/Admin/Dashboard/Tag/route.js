import TagSection from "@/models/tagModel";
import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

// export async function POST(request) {
//   const check = await request.json();
//   const { tagName } = check;
//   if (!tagName || typeof tagName !== "string") {
//     return NextResponse.json({ message: "Invalid data", status: 400 });
//   } else {
//     try {
//       await connect();
//       const tagsArray = [{ tagName }];
//       // Check if tags already exist in the collection

//       // Convert tag names to case-insensitive regex patterns
//       const regexPatterns = tagsArray.map(
//         (tag) => new RegExp(`^${tag.tagName}$`, "i")
//       );

//       const existingTags = await TagSection.find({
//         "tags.tagName": { $in: regexPatterns },
//       });
//       //   const existingTags = await TagSection.find({
//       //     "tags.tagName": { $in: tagsArray.map((tag) => tag.tagName) },
//       //   });

//       if (existingTags.length > 0) {
//         return NextResponse.json({
//           status: 400,
//           error: "One or more tags already exist",
//         });
//       }
//       const newTag = new TagSection({
//         tags: tagsArray,
//       });
//       const savedTag = await newTag.save();
//       console.info(savedTag);
//       if (!savedTag) {
//         return NextResponse.json({
//           status: 401,
//           error: "Failed to create a new user ",
//         });
//       } else {
//         return NextResponse.json({
//           status: 201,
//           success: "User is Registerd...",
//           savedTag,
//         });
//       }
//     } catch (error) {
//       return NextResponse.json({ status: 500, error: error.message });
//     }
//   }
//   //   const { id } = req.query;
// }

export async function POST(request) {
  const check = await request.json();
  const { tagName } = check;
  try {
    await connect();
    const tagsArray = [{ tagName }];

    // Check if the tag already exists (case-insensitive)
    const existingTag = await TagSection.findOne({
      "tags.tagName": { $regex: new RegExp(`^${tagName}$`, "i") },
    });
    if (existingTag) {
      // Tag already exists, return an appropriate response
      return NextResponse.json({
        status: 400,
        success: false,
        message: "Tag already exists",
      });
    }
    // If the tag does not exist, add it to the tags array
    const updatedTagSection = await TagSection.updateOne(
      {},
      { $addToSet: { tags: tagsArray } },
      { upsert: true }
    );
    return NextResponse.json({
      status: 201,
      message: "Tag is created...",
      success: true,
      updatedTagSection,
    });
  } catch (e) {
    return NextResponse.json({
      status: 500,
      error: e.message,
    });
  }
}

export async function GET() {
  try {
    await connect();
    // const query = request.url.searchParams.get("q");
    const tags = await TagSection.find({});
    return NextResponse.json({
      status: 200,
      success: true,
      data: tags,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      success: false,
      error: error.message,
    });
  }
}

export async function PUT(request) {
  const check = await request.json();
  const { tagName, id } = check;
  try {
    await connect();
    // Check if the tag already exists (case-insensitive)
    const existingTag = await TagSection.findOne({
      "tags.tagName": { $regex: new RegExp(`^${tagName}$`, "i") },
    });
    if (existingTag) {
      // Tag already exists, return an appropriate response
      return NextResponse.json({
        status: 400,
        success: false,
        message: "Tag already exists",
      });
    }
    // If the tag does not exist, add it to the tags array
    const updatedTagSection = await TagSection.updateOne(
      { "tags._id": id },
      { $set: { "tags.$.tagName": tagName } }
    );
    return NextResponse.json({
      status: 201,
      message: "Tag is created...",
      success: true,
      updatedTagSection,
    });
  } catch (e) {
    return NextResponse.json({
      status: 500,
      error: e.message,
    });
  }
}

export async function DELETE(request) {
  try {
    const { tagId } = await request.json();
    await connect();

    // Remove the tag using Mongoose
    const result = await TagSection.updateOne(
      {},
      { $pull: { tags: { _id: tagId } } }
    );

    if (result.modifiedCount > 0) {
      return NextResponse.json({
        status: 200,
        message: `Successfully deleted tag with ID ${tagId}`,
        success: true,
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: `No tag found with ID ${tagId}`,
        success: false,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      success: false,
      error: error.message,
    });
  }
}
