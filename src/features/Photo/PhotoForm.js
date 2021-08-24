import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { getUrlImage } from "../../global/function";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { addNewPhoto } from "./photoSlice";
import { useHistory } from "react-router-dom";

import { options } from "../../global/constant";
import { Controller, useForm } from "react-hook-form";

const InputForm = ({ label, register, required }) => (
  <FormGroup row className="mb-3">
    <Label sm={2} for={label} className="text-capitalize">
      {label}
    </Label>
    <Col sm={10}>
      <Input {...register(label, { required })} />
    </Col>
  </FormGroup>
);

const SelectForm = ({ label, control, required, options }) => (
  <FormGroup row className="mb-3">
    <Label sm={2} for={label} className="text-capitalize">
      {label}
    </Label>

    <Col sm={10}>
      <Controller
        name={label}
        control={control}
        defaultValue={false}
        rules={{ required }}
        render={({ field }) => <Select {...field} options={options} />}
      />
    </Col>
  </FormGroup>
);

const RandomPhotoForm = ({ label, register, onClick, randomNumber }) => (
  <FormGroup row>
    <Label sm={2}>Photo</Label>
    <Col sm={4}>
      <Button onClick={onClick}>Random photo</Button>
    </Col>
    <Col sm={6}>
      <img
        src={getUrlImage(randomNumber)}
        width={300}
        height={300}
        alt="Please try again ...."
      />
    </Col>
  </FormGroup>
);

const PhotoForm = () => {
  const { register, handleSubmit, control } = useForm();

  const [randomNumber, setRandomNumber] = useState(1);

  const dispatch = useDispatch();
  const history = useHistory();

  const randomPhoto = (e) => {
    e.preventDefault();
    setRandomNumber(Math.floor(Math.random() * 1000));
  };

  const submit = (data) => {
    data.id = randomNumber;
    console.log(data);
    dispatch(addNewPhoto({ ...data, category: data.category.value }));
    history.push("/");
  };

  return (
    <div className="PhotoForm">
      <h1>New Photo</h1>
      <Form onSubmit={handleSubmit(submit)}>
        <InputForm label="title" register={register} required={true} />
        <SelectForm
          label="category"
          control={control}
          required={true}
          options={options}
        />
        <RandomPhotoForm
          onClick={randomPhoto}
          randomNumber={randomNumber}
          label="id"
          register={register}
        />

        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
};

export default PhotoForm;
