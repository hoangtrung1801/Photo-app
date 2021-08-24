import { keyUnplash } from "global/constant";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Input, Row } from "reactstrap";

const PhotoFind = () => {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);

  const submit = (target, e) => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=50&query=${target.value}&client_id=${keyUnplash}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
    e.target.reset();
  };

  return (
    <div className="PhotoFind">
      <Form onSubmit={handleSubmit(submit)}>
        <Row>
          <Col sm={10}>
            <Input {...register("value")} />
          </Col>
          <Col sm={2}>
            <Button color="primary">Search</Button>
          </Col>
        </Row>
      </Form>

      <Row xs="1" sm="2" md="3" lg="4" className="gy-3 mt-3">
        {data.map((photo) => (
          <Col>
            <img src={photo.urls.raw + "&w=200&dpr=2"} alt="Loading..." />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PhotoFind;
