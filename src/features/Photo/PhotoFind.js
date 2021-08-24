import { keyUnplash } from "global/constant";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Form,
  Input,
  Modal,
  ModalBody,
  Row,
  Toast,
  ToastBody
} from "reactstrap";
import { InputForm, SelectForm } from "common/CustomForm";
import { options } from "global/constant";
import { useDispatch } from "react-redux";
import { addNewPhoto } from "./photoSlice";

const PhotoFind = () => {
  const { register, handleSubmit } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    control: control2
  } = useForm();

  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [urlNewPhoto, setUrlNewPhoto] = useState("");
  const [notice, setNotice] = useState(false);

  const dispatch = useDispatch();

  const searchPhotos = (target, e) => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=50&query=${target.value}&client_id=${keyUnplash}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
    e.target.reset();
  };

  const onClickAdd = (url) => {
    setUrlNewPhoto(url);
    setModal(true);
  };

  const addPhoto = (data) => {
    data.id = -1;
    data.category = data.category.value;
    data.url = urlNewPhoto;

    dispatch(addNewPhoto(data));

    setModal(false);
    setNotice(true);
    setTimeout(() => setNotice(false), 2000);
  };

  return (
    <div className="PhotoFind">
      <Form onSubmit={handleSubmit(searchPhotos)}>
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
        {data.map((photo, idx) => (
          <Col key={idx}>
            <Card>
              <CardImg
                top
                width="100%"
                src={photo.urls.raw + "&w=200&dpr=2"}
                alt="Loading..."
              />
              <CardBody className="d-flex justify-content-between">
                <Button
                  outline
                  size="sm"
                  onClick={() => onClickAdd(photo.urls.raw + "&w=200&dpr=2")}
                >
                  Add
                </Button>
                <a
                  href={photo.links.html}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted"
                >
                  View
                </a>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalBody>
          <Form onSubmit={handleSubmit2(addPhoto)}>
            <InputForm label="title" register={register2} required={true} />
            <SelectForm
              label="category"
              control={control2}
              required={true}
              options={options}
            />
            <div className="d-block mb-3">
              <img src={urlNewPhoto} alt="Loading..." />
            </div>
            <Button>Submit</Button>
          </Form>
        </ModalBody>
      </Modal>

      <Toast className="fixed-bottom bg-info" isOpen={notice}>
        <ToastBody>Add success !</ToastBody>
      </Toast>
    </div>
  );
};

export default PhotoFind;
