import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";

function CreateTask({ modal, toggle ,save}) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    }
    else{
        setDescription(value)
    }
  };

  const handleSave = () => {
      let taskObj = {}
      taskObj["Name"] =taskName
      taskObj["Description"] = description
      save(taskObj)

  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="text-center">
          Create Task
        </ModalHeader>
        <ModalBody>
          <form >
            <div className="form-group">
              <label htmlFor="Task Name">Task Name</label>
              <input
                type="text"
                className="form-control"
                value={taskName}
                onChange={handleChange}
                name="taskName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Description">Description</label>
              <textarea
                rows="5"
                className="form-control"
                value={description}
                onChange={handleChange}
                name="taskDecription"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave} >
            Create
          </Button>{" "}
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateTask;
