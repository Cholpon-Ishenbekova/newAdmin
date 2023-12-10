import React from "react";
import "./record.scss";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/record_list/List";
import AddRecord from "../../components/new_records/AddRecord";
import { userInputs } from "../../recordForm";

function Record() {
  return (
    <div className="record">
      <div className="recordContainer">
        <Navbar />
        <div className="charts">
          <AddRecord inputs={ userInputs} title="Add Records" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest IN & OUT</div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Record;
