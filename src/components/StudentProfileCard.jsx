function StudentProfileCard({
  name,
  studentId,
  major,
  year,
  gpa,
}) {
  return (
    <div className="student-profile">
      <div className="profile-top">
        <div className="profile-avatar">
          AB
        </div>

        <div>
          <p className="profile-label">GACHON UNIVERSITY</p>
          <h3>{name}</h3>
        </div>

        <span className="profile-status">
          STUDENT
        </span>
      </div>

      <div className="profile-details">
        <div>
          <span>Student ID</span>
          <strong>{studentId}</strong>
        </div>

        <div>
          <span>Major</span>
          <strong>{major}</strong>
        </div>

        <div>
          <span>Year</span>
          <strong>{year}</strong>
        </div>

        <div>
          <span>GPA</span>
          <strong>{gpa}</strong>
        </div>
      </div>

      <div className="profile-footer">
        <span>Computer Science</span>
        <span>2026</span>
      </div>
    </div>
  );
}

export default StudentProfileCard;