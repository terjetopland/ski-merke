import {SkimerkeModal} from "../SkimerkeModal/SkimerkeModal";
import {useState} from "react";
import {AddPersonForm} from "./AddPersonForm";

export const AddPersonModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button className="btn btn-primary" onClick={() => setOpen(true)}>Legg til person info</button>
            <SkimerkeModal
                open={open}
                toggle={() => setOpen(!open)}
                headerChildren=
                    {
                        <div>Legg in dine opplysninger</div>
                    }
                bodyChildren=
                    {
                        <AddPersonForm/>
                    }
                footerChildren=
                    {
                        <div className="d-flex flex-column justify-content-center modal-btn">
                            <button className="btn btn-secondary" onClick={() => setOpen(!open)}>Avbryt</button>
                        </div>
                    }
            />
        </div>
    )
}