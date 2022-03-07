import { useState, useEffect } from "react";
import "./App.css";
import {
  Button,
  Container,
  Header,
  Form,
  TableHeaderCell,
  Table,
} from "semantic-ui-react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [hobby, setHobby] = useState("");

  const [data, setData] = useState(null);

  const userData = {
    name,
    age,
    salary,
    hobby,
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, age, salary, hobby);

    axios
      .post(
        "https://sheet.best/api/sheets/f4baa050-d6f6-492e-8d40-fbe26ef8f992",
        userData
      )
      .then((res) => {
        console.log(res);
        alert("data insreted successfully");
        window.location.reload();
      });
    setName("");
    setAge("");
    setSalary("");
    setHobby("");
  };

  useEffect(() => {
    axios
      .get("https://sheet.best/api/sheets/f4baa050-d6f6-492e-8d40-fbe26ef8f992")
      .then((res) => setData(res));
  }, []);

  if (!data) {
    return <div />;
  }

  console.log(data);
  return (
    <Container className="container">
      <br />
      <br />
      <Header as="h2">react Google sheet</Header>
      <Form className="form" onSubmit={submitHandler}>
        <Form.Field>
          <label htmlFor="name">name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="name">age</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="name">salary</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter your salary"
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="name">hobby</label>
          <input
            type="text"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
            placeholder="Enter your hobby"
          />
        </Form.Field>

        <Button color="blue" type="submit">
          Submit
        </Button>
      </Form>

      <hr />

      <Table celled>
        <Table.Header>
          <TableHeaderCell>naem</TableHeaderCell>
          <TableHeaderCell>age</TableHeaderCell>
          <TableHeaderCell>salary</TableHeaderCell>
          <TableHeaderCell>hobby</TableHeaderCell>
        </Table.Header>

        <Table.Body>
          {data.data.map((val,idx)=>(
            <Table.Row key={idx}>
              <Table.Cell>{val.name}</Table.Cell>
              <Table.Cell>{val.age}</Table.Cell>
              <Table.Cell>{val.salary}</Table.Cell>
              <Table.Cell>{val.hobby}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}

export default App;
