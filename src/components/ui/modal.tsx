import { Modal } from "antd";
import { ReactElement, useState } from "react";

const OpenModal = ({btnText}: {btnText: string | ReactElement}) => {

  const [openResponsive, setOpenResponsive] = useState(false);

  return (
    <>
      <div onClick={() => setOpenResponsive(true)}>
        {btnText}
      </div>
      <Modal
        title="Modal responsive width"
        centered
        open={openResponsive}
        onOk={() => setOpenResponsive(false)}
        onCancel={() => setOpenResponsive(false)}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default OpenModal;
