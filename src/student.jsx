function student(props) {
    return (
<>
<div>

    <center>
<h1> student information</h1>
<p> Name : {props.name}</p>
<p> Age : {props.age}</p>
<p> is a student: {props.isStudent ? "Yes":" No"}</p>

    </center>
</div>


</>


    )
}