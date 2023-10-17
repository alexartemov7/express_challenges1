let students = ['Alex', 'Mesut', 'Joelle']

export function addStudent(req, res) {
    const newStudent = req.body
    students.push(newStudent.name)
    res.status(201).send({message : "Students added.", success: true})
}