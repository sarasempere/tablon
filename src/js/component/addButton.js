import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import IconButton from "@material-ui/core/IconButton";
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import { Form } from "../component/form";

export const AddButton = () => {
	//const { store, actions } = useContext(Context);
	const [modal, setModal] = useState(false);
	return (
		<>
			<div className="principal">
				<div className="secundario">
					<Button
						color="success"
						onClick={() => {
							setModal(!modal);
						}}>
						+
					</Button>
				</div>
			</div>

			<Modal isOpen={modal}>
				<ModalHeader>Cargar Imagen</ModalHeader>
				<ModalBody>
					<Form />
				</ModalBody>
				<ModalFooter>
					<IconButton
						onClick={() => {
							setModal(!modal);
						}}>
						X
					</IconButton>
				</ModalFooter>
			</Modal>
		</>
	);
};
