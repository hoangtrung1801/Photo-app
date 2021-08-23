import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { getUrlImage } from "../../global/function";
import { selectAllPhotos } from "./photoSlice";

const Content = ({ photos }) => (
  <Row sm="2" md="3" lg="4" className="gu">
    {photos.map((photo) => (
      <Col>
        <img src={getUrlImage(photo.id)} alt="Loading ..." />
      </Col>
    ))}
  </Row>
);

const PhotoPage = () => {
  const photos = useSelector(selectAllPhotos());
  console.log(photos);

  return (
    <div className="PhotoPage">
      {photos.length === 0 && <h1>Have no photos</h1>}
      {photos.length > 0 && (
        <>
          <h1>Photos</h1>
          <Content photos={photos} />
        </>
      )}
    </div>
  );
};

export default PhotoPage;
