const BASE_URL = "/api";

export async function addStudent(student) {

  const request = await fetch(`${BASE_URL}/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  const response = await request.json();
  return response;
  
}

export async function editStudent(student) {

  const response = await fetch(`${BASE_URL}/students/${student.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  return response
  
}

export async function deleteStudent(student) {
  
  const response = await fetch(`${BASE_URL}/students/${student.id}`, {
    method: "DELETE",
  });

  return response;

}

export async function getStudents() {
  const request = await fetch(`${BASE_URL}/students/list`);
  const studentList = await request.json();
  return studentList;
}

export async function uploadPicture(picture) {

  const formData = new FormData();
  formData.append('file', picture);

  const response = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData
  });


  const data = await response.json();

  return data.url;

}
