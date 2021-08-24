import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { Col, FormGroup, Input, Label } from "reactstrap";

export const InputForm = ({ label, register, required }) => (
  <FormGroup row className="mb-3">
    <Label sm={2} for={label} className="text-capitalize">
      {label}
    </Label>
    <Col sm={10}>
      <Input {...register(label, { required })} />
    </Col>
  </FormGroup>
);

export const SelectForm = ({ label, control, required, options }) => (
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
