import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";
import { server_calls } from "../api/server";
import {
  DataGrid,
  GridColDef,
  gridPaginationModelSelector,
} from "@mui/x-data-grid";
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, hideable: true },
  { field: "make", headerName: "Make", flex: 0.5 },
  { field: "model", headerName: "Model", flex: 0.5 },
  { field: "year", headerName: "Year", flex: 0.5 },
  { field: "body_style", headerName: "Body Style", flex: 0.5 },
  { field: "value", headerName: "Value", flex: 0.5 },
  { field: "color", headerName: "Color", flex: 0.5 },
  { field: "seating", headerName: "Seating", flex: 0.5 },
];

function DataTable() {
  let [open, setOpen] = useState(false);
  const { contactData, getData } = useGetData();
  const [selectionModel, setSelectionModel] = useState<string[]>([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <Modal id={selectionModel} open={open} onClose={handleClose} />
      <div className="flex flex-row">
        <div>
          <button
            className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white"
            onClick={() => handleOpen()}
          >
            Create New Car
          </button>
        </div>
        <Button
          onClick={handleOpen}
          className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white"
        >
          Update
        </Button>
        <Button
          onClick={deleteData}
          className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white"
        >
          Delete
        </Button>
      </div>
      <div
        className={open ? "hidden" : "container mx-10 my-5 flex flex-col"}
        style={{ height: 450, width: "100%" }}
      >
        <h2 className="p-3 bg-slate-300 my-2 rounded">My Garage</h2>
        <DataGrid
          rows={contactData}
          columns={columns}
          // how to make page size a defined number
          autoPageSize
          checkboxSelection={true}
          onRowSelectionModelChange={(item: any) => {
            setSelectionModel(item);
          }}
        />
      </div>
    </>
  );
}

export default DataTable;
