import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { getUrlImage } from "../../global/function";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { addNewPhoto } from "./photoSlice";
import { useHistory } from "react-router-dom";

const options = [
  { value: "favorite", label: "Favorite" },
  { value: "nature", label: "Nature" },
  { value: "beach", label: "Beach" }
];

const PhotoForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [randomNumber, setRandomNumber] = useState(1);

  const dispatch = useDispatch();
  const history = useHistory();

  const randomPhoto = (e) => {
    e.preventDefault();
    setRandomNumber(Math.floor(Math.random() * 1000));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(addNewPhoto({ title, category, id: randomNumber }));
    history.push("/");
  };

  return (
    <div className="PhotoForm">
      <h1>New Photo</h1>
      <Form onSubmit={submit}>
        <FormGroup row>
          <Label sm={2} for="title">
            Title
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Enter title of photo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label sm={2} for="category">
            Catergory
          </Label>
          <Col sm={10}>
            <Select options={options} onChange={(e) => setCategory(e.value)} />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label sm={2}>Photo</Label>
          <Col sm={6}>
            <Button onClick={randomPhoto}>Random photo</Button>
            <img
              src={getUrlImage(randomNumber)}
              width={300}
              height={300}
              alt="Please try again ...."
            />
          </Col>
          <Col sm={4}></Col>
        </FormGroup>

        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
};

export default PhotoForm;
