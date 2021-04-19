import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
export default function UserProfile({
  user,
  cardWidth = "25rem",
  cardBackgroundColor = "#FAF6F5",
  cardBorderColor = "#ed1c24",
  fontFamily = "Gotham Black, Helvetica Neue, Helvetica, Arial, sans-serif",
}) {
  const socialMedia = [];

  user &&
    user.socialMedia &&
    user.socialMedia.forEach((aSocialMedia, index) => {
      socialMedia.push(
        <SocialMediaIcon
          link={aSocialMedia.link}
          icon={aSocialMedia.icon}
          color={aSocialMedia.color}
          key={index}
        />
      );
    });
  return (
    <>
      <Card
        style={{
          width: cardWidth,
          backgroundColor: cardBackgroundColor,
          borderColor: cardBorderColor,
          borderWidth: "initial",
        }}
      >
        <Card.Body
          className="m-3"
          style={{
            fontFamily: fontFamily,
          }}
        >
          <Row>
            {user && user.imgLink && (
              <Col className="mr-3">
                <Image
                  src={user.imgLink}
                  roundedCircle
                  style={{
                    width: "160px",
                  }}
                />
              </Col>
            )}
            <Col style={{ marginTop: "30px" }}>
              {user && user.name && (
                <Row>
                  <h4>
                    <strong>{user.name}</strong>
                  </h4>
                </Row>
              )}
              {user && user.position && (
                <Row>
                  <small className="text-muted mb-1">{user.position}</small>
                </Row>
              )}
              <Row className="mt-1">
                {socialMedia.map((icon, index) => {
                  return (
                    <Col className="col-1" key={index}>
                      {icon}
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
          {user && user.bio && (
            <Row className="mt-3">
              <p>{user.bio}</p>
            </Row>
          )}
          {user && user.detailLink && (
            <Button
              href={user.detailLink}
              variant="outline-danger"
              style={{ float: "right" }}
            >
              Learn more about me
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

function SocialMediaIcon({ link, icon, color }) {
  return (
    <a href={link}>
      <FontAwesomeIcon icon={icon} size="1x" color={color} />
    </a>
  );
}
UserProfile.propTypes = {
  user: PropTypes.object,
  cardWidth: PropTypes.string,
  cardBackgroundColor: PropTypes.string,
  cardBorderColor: PropTypes.string,
  fontFamily: PropTypes.string,
};
SocialMediaIcon.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.object,
  color: PropTypes.string,
};
