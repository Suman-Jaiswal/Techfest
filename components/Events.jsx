import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Carousel from "./Carousel";
import Box from "@mui/material/Box";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useInView } from "react-intersection-observer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const events = [
  {
    eventName: "Byte Bandits CTF",
  },
  { eventName: "Hackistica" },
  { eventName: "Divide By Zero" },
  { eventName: "Code Golf" },
  { eventName: "Surprise Language" },
];

function Events() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [event, setEvent] = React.useState({ eventName: "" });
  const handleOpen = (idx) => {
    setEvent(events[idx]);
    console.log(events);
    setOpen(true);
  };
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      });

      animation2.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      });
      animation3.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: "-10vw",
      });
      animation2.start({
        opacity: 0,
        x: "10vw",
      });
      animation3.start({
        opacity: 0,
        x: "-5vw",
        // scale: 0.5,
      });
    }
  });

  return (
    <motion.Reactdiv
      id="sponsors"
      ref={ref}
      className="h-screen w-screen bg-[#faf3ea]"
    >
      <motion.div className="bg-[#faf3ea] h-screen m-6">
        <motion.h1
          className="text-white text-9xl mb-10 ml-10"
          animate={animation}
          style={{
            fontFamily: "valorax Regular",
            fontWeight: "normal",
            fontSize: "100px",
          }}
        >
          EVENTS
        </motion.h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-8">
          <motion.div
            className="flux bg-[#111b53] w-100 h-[400px] shadow-2xl text-white rounded-lg border-[3px] p-0"
            whileHover={{ y: "-10px" }}
            animate={animation}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.4 }}
          >
            <h1
              className="p-0 w-100 text-center m-0 text-sm mt-10"
              style={{
                fontFamily: "valorax Regular",
                fontWeight: "normal",
                fontSize: "30px",
              }}
            >
              competitions
            </h1>
            <p
              style={{
                fontFamily: ["JetBrains Mono", "monospace"],
                fontSize: "20px",
                lineHeight: "1.5",
              }}
              className="p-5 mt-6"
            >
              NOW IS THE PERFECT TIME TO PREPARE FOR HACKTOBERFEST. GET A JUMP
              START BY FINDING PROJECTS TO CONTRIBUTE TO, ADDING THE
              ‘HACKTOBERFEST’ TAG TO YOUR PROJECTS, OR FAMILIARIZING YOURSELF
              WITH GIT.
            </p>
            <div className="mt-8 text-sm w-100 text-center">
              <Button value="KNOW MORE!" ml="0"></Button>
            </div>
          </motion.div>
          <motion.div
            className="flux bg-[#111b53] w-100 h-[400px] shadow-2xl text-white rounded-lg border-[3px] p-0"
            whileHover={{ y: "-10px" }}
            animate={animation}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.4 }}
          >
            <h1
              className="p-0 w-100 text-center m-0 text-sm mt-10"
              style={{
                fontFamily: "valorax Regular",
                fontWeight: "normal",
                fontSize: "30px",
              }}
            >
              workshops
            </h1>
            <p
              style={{
                fontFamily: ["JetBrains Mono", "monospace"],
                fontSize: "20px",
                lineHeight: "1.5",
              }}
              className="p-5 mt-6"
            >
              NOW IS THE PERFECT TIME TO PREPARE FOR HACKTOBERFEST. GET A JUMP
              START BY FINDING PROJECTS TO CONTRIBUTE TO, ADDING THE
              ‘HACKTOBERFEST’ TAG TO YOUR PROJECTS, OR FAMILIARIZING YOURSELF
              WITH GIT.
            </p>
            <div className="mt-8 text-sm w-100 text-center">
              <Button value="KNOW MORE!" ml="0"></Button>
            </div>
          </motion.div>
          <motion.div
            className="flux bg-[#111b53] w-100 h-[400px] shadow-2xl text-white rounded-lg border-[3px] p-0"
            whileHover={{ y: "-10px" }}
            animate={animation2}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.4 }}
          >
            <h1
              className="p-0 w-100 text-center m-0 text-sm mt-10"
              style={{
                fontFamily: "valorax Regular",
                fontWeight: "normal",
                fontSize: "30px",
              }}
            >
              tech talks & speakers
            </h1>
            <p
              style={{
                fontFamily: ["JetBrains Mono", "monospace"],
                fontSize: "20px",
                lineHeight: "1.5",
              }}
              className="p-5 mt-6"
            >
              NOW IS THE PERFECT TIME TO PREPARE FOR HACKTOBERFEST. GET A JUMP
              START BY FINDING PROJECTS TO CONTRIBUTE TO, ADDING THE
              ‘HACKTOBERFEST’ TAG TO YOUR PROJECTS, OR FAMILIARIZING YOURSELF
              WITH GIT.
            </p>
            <div className="mt-8 text-sm w-100 text-center">
              <Button value="KNOW MORE!" ml="0"></Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box sx={style}>
              <h1 className="text-black">{event.eventName}</h1>
            </Box>
          </motion.div>
        </Modal>
      </motion.div>
    </motion.Reactdiv>
  );
}

export default Events;
