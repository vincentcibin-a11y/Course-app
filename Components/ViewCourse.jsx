import axios from "axios";
import { useEffect, useState } from "react";

function ViewCourse() {

  const [course, setCourse] = useState([]);

  const fetchData = () => {
    axios
      .get("http://192.168.33.245:5001/api/courses")
      .then((response) => {
        setCourse(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">

      <table className="table table-bordered">

        <thead>
          <tr>
            <th>Name</th>
            <th>Duration</th>
            <th>Fee</th>
            <th>Mode</th>
            <th>Trainer</th>
            <th>Created At</th>
          </tr>
        </thead>

        <tbody>

          {course.map((value) => (
            <tr key={value.id}>
              <td>{value.course_name}</td>
              <td>{value.duration}</td>
              <td>{value.fee}</td>
              <td>{value.mode}</td>
              <td>{value.trainer}</td>
              <td>{value.created_at}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ViewCourse;