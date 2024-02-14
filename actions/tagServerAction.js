import axios from "axios";

export const handleTagDelete = async (id, onSuccess) => {
  //   console.log(`Deleting ${id}`);

  //   let result = window.confirm("Are you sure to delete this Tag?");
  //   console.log(result);
  //   if (result) {
  try {
    const response = await axios.delete(`/api/Admin/Dashboard/Tag`, {
      data: { tagId: id },
    });
    if (response.data.success) {
      console.log("success ");
      // Handle successful deletion, e.g., update UI
      //   return myTagData();
      onSuccess();
      // Navigate to another page (e.g., '/next')
      //   router.push("/next");
    } else {
      // Handle deletion failure, e.g., show error message
      console.error(response.data.message);
    }
  } catch (error) {
    alert(error.message);
  }
  //   }
};

export const myTagData = async () => {
  try {
    const response = await axios.get("/api/Admin/Dashboard/Tag");
    return response.data.data[0].tags;
    // return data;
    // setData(response.data.data[0].tags);
  } catch (error) {
    console.log(error.response);
  }
};

export const homeSectionData = async (id = "") => {
  if (id) {
    console.log(id);
    // using the axios get request find with id
    const res = await axios.get(`/api/Admin/Dashboard/HomeApi/${id}`, {
      params: {
        id,
        name: "test",
      },
    });
    return res.data;
  } else {
    try {
      // get the home section data with tag join object id
      const response = await axios.get("/api/Admin/Dashboard/HomeApi");
      if (response.data.success) {
        return response.data.data;
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
};
