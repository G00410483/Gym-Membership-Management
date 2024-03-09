import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditMemberModal({ show, handleClose, member, saveMember, removeMember }) {
  const [editedMember, setEditedMember] = useState({ ...member });

  const handleChange = (e) => {
    setEditedMember({ ...editedMember, [e.target.name]: e.target.value });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Member</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group controlId="formPPS">
            <Form.Label>PPS</Form.Label>
            <Form.Control
              value={editedMember.pps_number}
              readOnly
            />
          </Form.Group>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="first_name"
              value={editedMember.first_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formSecondName">
            <Form.Label>Second Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter second name"
              name="second_name"
              value={editedMember.second_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmailAddress">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email_address"
              value={editedMember.email_address}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPPS">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              value={editedMember.gender}
              readOnly
            />
          </Form.Group>
          <Form.Group controlId="formPPS">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              value={editedMember.date_of_birth}
              readOnly
            />
          </Form.Group>
          <Form.Group controlId="formPPS">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              value={editedMember.start_date}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label  >Type of Membership</Form.Label>
        <Form.Select aria-label="Membership select" className="form-control" value={editedMember.type_of_memebrship}
              onChange={handleChange}>
          <option value="basic">basic</option>
          <option value="premium">premium</option>
          <option value="VIP">VIP</option>
        </Form.Select>
      </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={() => removeMember(editedMember.pps_number)}>
          Remove
        </Button>
        <Button variant="primary" onClick={() => saveMember(editedMember)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditMemberModal;
