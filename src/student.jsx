function Student(props) {
    return (
<>
<div>


    <center>
<h1 style={{ color:"blue", textAlign:"center"}}> student information</h1>
<p style={{color:"red"}}> Name : {props.name}</p>
<p  style={{color:"red"}}> Age : {props.age}</p>
<p  style={{color:"red"}}> is a student: {props.isStudent ? "Yes":" No"}</p>

    </center>
</div>


</>


    );

}
export default Student;