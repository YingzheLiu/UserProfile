import React from "react";
import Image from "react-bootstrap/Image";
import "./UserProfile.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserProfile({ user, props }) {
  const socialMedia = [];

  user.socialMedia.forEach((aSocialMedia) => {
    socialMedia.push(
      <SocialMediaIcon
        link={aSocialMedia.link}
        icon={aSocialMedia.icon}
        color={aSocialMedia.color}
      />
    );
  });
  return (
    <>
      <Card
        border="danger"
        style={{
          width: props.cardWidth,
          backgroundColor: props.cardBackgroundColor,
        }}
      >
        <Card.Body className="m-3">
          <Row>
            <Col className="mr-3">
              <Image src="NikkiLiuPic.jpeg" roundedCircle />
            </Col>
            <Col style={{ marginTop: "30px" }}>
              <Row>
                <h4>
                  <strong>{user.name}</strong>
                </h4>
              </Row>
              <Row>
                <small className="text-muted mb-1">{user.position}</small>
              </Row>
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
          <Row className="mt-3">
            <p>{user.bio}</p>
          </Row>
          {user.detailLink && (
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
