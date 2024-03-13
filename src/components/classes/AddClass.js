// AddClassModal.js
import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { daysOfWeek } from '../constants';

function AddClass({ show, handleClose, handleAddClass }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Class</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleAddClass}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formClassName">
            <Form.Label>Class Name</Form.Label>
            <Form.Control type="text" name="class_name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formInstructorName">
            <Form.Label>Instructor Name</Form.Label>
            <Form.Control type="text" name="instructor_name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" name="time" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDay">
            <Form.Label>Day</Form.Label>
            <Form.Select name="day" required>
              {daysOfWeek.map((day, index) => (
                <option key={index} value={day}>{day}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMaxCapacity">
            <Form.Label>Max Capacity</Form.Label>
            <Form.Control type="number" name="max_capacity" required />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddClass;
