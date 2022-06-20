import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './AllEmployee.css'

function AllEmployee(props) {



    const aEmployee = useSelector((state) => state.aEmployee);
    const dispatch = useDispatch();
    const [employeeSearch, setEmployeeSearch] = useState({ "name": null, "email": null, "designation": null, "experience": null });
    const [employee, setEmployee] = useState(aEmployee);
    const [filter, setFilter] = useState(false);


    const fnSearh = () => {
        if (employeeSearch.name || employeeSearch.email || employeeSearch.designation || employeeSearch.experience) {
            var afilter = aEmployee.filter(function (obj) {
                return ((employeeSearch.name ? obj.name.toLowerCase().includes(employeeSearch.name) : false) || (employeeSearch.email ? obj.email.toLowerCase().includes(employeeSearch.email) : false) ||
                    (employeeSearch.designation ? obj.designation.toLowerCase().includes(employeeSearch.designation) : false) || (employeeSearch.experience ? obj.experience.toLowerCase().includes(employeeSearch.experience) : false));
            })
            setEmployee(afilter);
            setFilter(true);
        } else {
            setFilter(false);
        }
    }
    const fnReset = () => {
        setEmployeeSearch({ "name": "", "email": "", "designation": "", "experience": "" });
        setEmployee(aEmployee);
        setFilter(false);
    }

    const fnChangeSearchValues = (oEvent) => {
        if (oEvent.target.id === "searchName") {

            setEmployeeSearch({
                ...employeeSearch,
                "name": oEvent.target.value.toLowerCase()
            });
        } else if (oEvent.target.id === "searchMail") {

            setEmployeeSearch({
                ...employeeSearch,
                "email": oEvent.target.value.toLowerCase()
            });
        } else if (oEvent.target.id === "searchDesignation") {

            setEmployeeSearch({
                ...employeeSearch,
                "designation": oEvent.target.value.toLowerCase()
            });
        } else {

            setEmployeeSearch({
                ...employeeSearch,
                "experience": oEvent.target.value.toLowerCase()
            });
        }
    }
    const fnDeleteEmployee = (key, object) => {
        var index;
        if (!filter) {
            index = key;
            dispatch({ type: "DELETE_EMPLOYEE", index });
        } else {
            for (var i = 0; i < aEmployee.length; i++) {
                if (object.name === aEmployee[i].name) {
                    index = i;
                    break;
                }
            }
            dispatch({ type: "DELETE_EMPLOYEE", index });
        }
    }

    useEffect(() => {
        setEmployee(aEmployee);
    }, [aEmployee]);

    return (
        <div>
            <h3>Search</h3>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Form.Group className="mb-3" controlId="searchName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => fnChangeSearchValues(e)} value={employeeSearch.name} />
                        </Form.Group>
                    </Grid>
                    <Grid item xs={3}>
                        <Form.Group className="mb-3" controlId="searchMail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" onChange={(e) => fnChangeSearchValues(e)} value={employeeSearch.email} />
                        </Form.Group>
                    </Grid>
                    <Grid item xs={3}>
                        <Form.Group className="mb-3" controlId="searchDesignation">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" onChange={(e) => fnChangeSearchValues(e)} value={employeeSearch.designation} />
                        </Form.Group>
                    </Grid>
                    <Grid item xs={3}>
                        <Form.Group className="mb-3" controlId="searchExperience">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control type="text" onChange={(e) => fnChangeSearchValues(e)} value={employeeSearch.experience} />
                        </Form.Group>
                    </Grid>
                </Grid>
            </Box>
            <Button variant="primary" type="submit" onClick={() => fnSearh()} className="btnCss">
                Search
            </Button>
            <Button variant="primary" type="submit" onClick={() => fnReset()} className="btnCss">
                Reset
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
                    {employee.map((item, index) => (
                        <tr>
                            
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.designation}</td>
                            <td>{item.experience}</td>
                            <td>
                                <DeleteIcon onClick={() => fnDeleteEmployee(index, item)} />
                            </td>
                        </tr>

                    ))}
                </tbody>
            </Table>
        </div >
    );
}


export default AllEmployee