import { getUrlImage } from "global/function";
import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
  Row
} from "reactstrap";
import PhotoFilter from "./PhotoFilter";
import { selectAllPhotos, selectCurFilter } from "./photoSlice";

const Content = ({ photos }) => (
  <Row xs="1" sm="2" md="3" lg="4" className="gy-3 mt-3">
    {photos.map((photo) => (
      <Col>
        <Card>
          <CardImg
            top
            width="100%"
            src={getUrlImage(photo.id)}
            alt="Loading..."
          />
          <CardBody>
            <CardTitle tag="h4">{photo.title}</CardTitle>
            <CardSubtitle
              tag="span"
              className="text-muted fw-lighter text-capitalize"
            >
              {photo.category}
            </CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    ))}
  </Row>
);

const PhotoPage = () => {
  const photos = useSelector(selectAllPhotos());
  const curFilter = useSelector(selectCurFilter());

  return (
    <div className="PhotoPage">
      {photos.length === 0 && <p>You do not have photos ...</p>}
      {photos.length > 0 && (
        <>
          <h1>My Photo</h1>
          <PhotoFilter />
          <Content
            photos={photos.filter(
              ({ category }) => curFilter === "all" || category === curFilter
            )}
          />
        </>
      )}
    </div>
  );
};

export default PhotoPage;
