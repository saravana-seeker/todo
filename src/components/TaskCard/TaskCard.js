import React, { useState } from "react";
import EditTask from "../CreateTask/EditTask";
import "./TaskCard.css";

function TaskCard({ taskObj, index , DeleteTask ,updateListArray}) {
  const [modal,setModal] = useState(false)
  const toggle = () => {
    setModal(!modal)
  }
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];
  const updateTask = (obj) => {
    updateListArray(obj,index)

  }
  const handleDelete = () => {
    DeleteTask(index)
  };

  return (
    <div className="col-lg-3 col-md-3 col-6 m-2" key={index}>
      <div className="card-box " >
        <div className="card" >
          <div
            className="card-header"
            style={{ "backgroundColor": colors[index % 5].primaryColor }}
          >
            {taskObj.Name}
          </div>
          <div className="card-body">
            <p>{taskObj.Description}</p>
            <i
              className="far fa-edit m-1"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
                
              }}
              onClick={()=> setModal(true)}
            ></i>
            <i
              className="fas fa-trash-alt"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={handleDelete}
            ></i>{" "}
          </div>
          <EditTask  modal={modal}  toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
