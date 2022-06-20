import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import './NewEntry.css'
function NewEntry() {
    const [employee, setEmployee] = useState({ "id": "", "name": "", "email": "", "designation": "", "experience": "" });

    const aEmployeeDetails = useSelector(state => state.aEmployee);
    const dispatch = useDispatch();
    const fnChangeFormValues = (oEvent) => {
        if (oEvent.target.id === "formName") {
            var firstName = oEvent.target.value;
            setEmployee({
                ...employee,
                "name": oEvent.target.value
            });
        } else if (oEvent.target.id === "formEmail") {
            var secondName = oEvent.target.value;
            setEmployee({
                ...employee,
                "email": oEvent.target.value
            });
        } else if (oEvent.target.id === "formDesignation") {
            var email = oEvent.target.value;
            setEmployee({
                ...employee,
                "designation": oEvent.target.value
            });
        } else {
            var password = oEvent.target.value;
            setEmployee({
                ...employee,
                "experience": oEvent.target.value
            });
        }


    }

    const fnAddEmployee = () => {
        if (employee.name && employee.email && employee.designation && employee.experience) {
            employee.id = aEmployeeDetails.length + 1;
            aEmployeeDetails.push(employee);
            setEmployee({ "id": "", "name": "", "email": "", "designation": "", "experience": "" })
            dispatch({ type: "ADD_EMPLOYEE", employee });

        } else {
            alert("Enter all fields")
        }
    }

    const fnRemoveEmployeeData = (index) => {
        dispatch({ type: "DELETE_EMPLOYEE", index })
    }



    return (
        <div>
            <Form className='newEntryFormCss'>
                <Form.Group as={Row} className="mb-3" controlId="formName">
                    <Form.Label column sm="6">
                        Name
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control type="text" onChange={(e) => fnChangeFormValues(e)} value={employee.name} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formEmail">
                    <Form.Label column sm="6">
                        Email
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control type="text" onChange={(e) => fnChangeFormValues(e)} value={employee.email} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formDesignation">
                    <Form.Label column sm="6">
                        Designation
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control type="text" onChange={(e) => fnChangeFormValues(e)} value={employee.designation} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formExperience">
                    <Form.Label column sm="6">
                        Experience
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control type="text" onChange={(e) => fnChangeFormValues(e)} value={employee.experience} />
                    </Col>
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" onClick={() => fnAddEmployee()} className='submitBtn'>
                Submit
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>designation</th>
                        <th>experience</th>
                    </tr>
                </thead>
                <tbody>
                    {aEmployeeDetails.map((item, key) => (
                        <tr>

                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.designation}</td>
                            <td>{item.experience}</td>
                            <td>
                                <DeleteIcon onClick={() => fnRemoveEmployeeData(key)} />
                            </td>
                        </tr>

                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default NewEntry;
