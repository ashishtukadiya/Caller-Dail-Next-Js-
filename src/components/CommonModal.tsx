import React, { useEffect, useMemo, useState } from "react";
import { Box, Button, Modal, Typography, IconButton } from "@mui/material";
import DialpadIcon from "@mui/icons-material/Dialpad";
import { Close } from "@mui/icons-material";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import VideoChatOutlinedIcon from "@mui/icons-material/VideoChatOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";
import Image from "next/image";
import IconService from "@/utils/Icons";
import VolumeMuteSharpIcon from "@mui/icons-material/VolumeMuteSharp";
import VolumeOffSharpIcon from "@mui/icons-material/VolumeOffSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import GraphicEqSharpIcon from "@mui/icons-material/GraphicEqSharp";
import KeyboardAltSharpIcon from "@mui/icons-material/KeyboardAltSharp";

interface AddPenaltyFormProps {
  open: boolean;
  onClose: () => void;
  phone: number | null;
  events: Array<{ id: number; phone: number; name: string; image: string }>;
}

const Numpad: React.FC<{ onNumberClick: (num: string) => void }> = ({
  onNumberClick,
}) => {
  const numbers = [
    { value: "1", letters: "" },
    { value: "2", letters: "ABC" },
    { value: "3", letters: "DEF" },
    { value: "4", letters: "GHI" },
    { value: "5", letters: "JKL" },
    { value: "6", letters: "MNO" },
    { value: "7", letters: "PQRS" },
    { value: "8", letters: "TUV" },
    { value: "9", letters: "WXYZ" },
    { value: "*", letters: "" },
    { value: "0", letters: "" },
    { value: "#", letters: "" },
  ];

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} mt={2}>
        {numbers.map((num, index) => (
          <Button
            key={index}
            variant="outlined"
            color="primary"
            onClick={() => onNumberClick(num.value)}
            style={{
              height: "64px",
              width: "64px",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            {num.value}
            <Typography variant="caption">{num.letters}</Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

const AddPenaltyForm: React.FC<AddPenaltyFormProps> = ({
  open,
  onClose,
  phone,
  events,
}) => {
  const [number, setNumber] = useState("");
  const [isNumberEntered, setIsNumberEntered] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [callDetails, setCallDetails] = useState<{
    name: string;
    phone: string;
    duration: string;
  } | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0); // New state for call duration

  const handleNumberClick = (num: string) => {
    setNumber((prev) => {
      const newNumber = prev + num;
      if (newNumber) {
        setIsNumberEntered(true);
      }
      return newNumber;
    });
  };

  const handleClear = () => {
    setNumber((prev) => {
      const newNumber = prev.slice(0, -1);
      if (newNumber === "") {
        setIsNumberEntered(false);
      }
      return newNumber;
    });
  };

  const handleSuggestionClick = (suggestedNumber: string) => {
    setNumber(suggestedNumber);
    setIsNumberEntered(true);
  };

  const handleCall = () => {
    if (isNumberEntered) {
      const selectedEvent = events.find(
        (event) => event.phone.toString() === number
      );

      if (selectedEvent) {
        setIsCalling(true);
        setCallDetails({
          name: selectedEvent.name,
          phone: selectedEvent.phone.toString(),
          duration: "00:00",
        });
        setCallDuration(0); // Reset the duration
      }
    }
  };

  const handleEndCall = () => {
    setIsCalling(false);
    setCallDetails(null);
    setNumber("");
  };

  const handleMuteToggle = () => {
    setIsMuted((prev) => !prev);
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCalling) {
      timer = setInterval(() => {
        setCallDuration((prevDuration) => prevDuration + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isCalling]);

  const filteredEvents = useMemo(() => {
    const results = events.filter((event) =>
      event.phone.toString().includes(number)
    );
    return results.slice(0, 3);
  }, [number, events]);

  useEffect(() => {
    if (!open) {
      setNumber("");
      setIsNumberEntered(false);
      setIsCalling(false);
      setCallDetails(null);
      setIsMuted(false);
    }
  }, [open]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    border: "2px solid #000",
    borderRadius: 1,
  };

  return (
    <Modal
      disableEnforceFocus
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box mt={2}>
          {!isCalling && (
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="flex justify-between">
                <Typography variant="h6" className="mb-10">
                  {isNumberEntered ? `${number}` : "Enter Name/Number"}
                  {isNumberEntered && (
                    <CancelSharpIcon
                      onClick={handleClear}
                      className="float-right cursor-pointer"
                    />
                  )}
                </Typography>
              </div>
              {number && filteredEvents.length > 0 && (
                <Box
                  mt={2}
                  sx={{
                    maxHeight: "150px",
                    overflowY: "scroll",
                    "::-webkit-scrollbar": {
                      display: "none",
                    },
                    scrollbarWidth: "none",
                  }}
                >
                  <ul
                    style={{
                      padding: 0,
                      margin: 0,
                      listStyleType: "none",
                    }}
                  >
                    {filteredEvents.map((event) => (
                      <li
                        key={event.id}
                        onClick={() =>
                          handleSuggestionClick(event.phone.toString())
                        }
                        style={{
                          cursor: "pointer",
                          padding: "4px 8px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        {event.name} - {event.phone}
                      </li>
                    ))}
                  </ul>
                </Box>
              )}
            </div>
          )}
        </Box>
        {isCalling && (
          <>
            <Box mt={2} textAlign="center">
              <Typography variant="h6">{callDetails?.name}</Typography>
              <Typography variant="body1">{callDetails?.phone}</Typography>
              <Typography variant="body2">{formatDuration(callDuration)}</Typography>
            </Box>

            <div className="flex flex-col gap-4 mt-10">
              <div className="flex flex-row justify-center items-center gap-10">
                <div className="flex flex-col items-center gap-2">
                  <PhonePausedIcon className="cursor-pointer" />
                  <Typography variant="body3">Hold</Typography>
                </div>
                <div className="flex flex-col gap-2">
                  <IconButton onClick={handleMuteToggle}>
                    {isMuted ? (
                      <div className="flex flex-col items-center gap-2">
                        <VolumeMuteSharpIcon className="cursor-pointer" />
                        <Typography variant="body3">Speaker</Typography>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <VolumeOffSharpIcon className="cursor-pointer" />
                        <Typography variant="body3">Mute</Typography>
                      </div>
                    )}
                  </IconButton>
                </div>
                <div className="flex flex-col  items-center gap-2">
                  <AddSharpIcon className="cursor-pointer" />
                  <Typography variant="body3">Add Call</Typography>
                </div>
              </div>
              <div className="flex flex-row  justify-center items-center gap-10">
                <div className="flex flex-col  items-center gap-2">
                  <Image
                    src={IconService.conference}
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Typography variant="body3">Conference</Typography>
                </div>
                <div className="flex flex-col  items-center gap-2">
                  <Image
                    src={IconService.callTransfer}
                    alt=""
                    width={20}
                    height={20}
                  />
                  <Typography variant="body3">Transfer</Typography>
                </div>
                <div className="flex flex-col  items-center gap-2">
                  <Image
                    src={IconService.callTransfer}
                    alt=""
                    width={20}
                    height={20}
                  />
                  <Typography variant="body3">Transfer</Typography>
                </div>
              </div>
              <div className="flex flex-row  justify-center items-center gap-10">
                <div className="flex flex-col  items-center gap-2">
                  <GraphicEqSharpIcon className="cursor-pointer" />
                  <Typography variant="body3">Record</Typography>
                </div>
                <div>
                  <div className="flex flex-col  items-center gap-2">
                    <KeyboardAltSharpIcon className="cursor-pointer" />
                    <Typography variant="body3">Keypad</Typography>
                  </div>
                </div>

                <div className="flex flex-col  items-center gap-2">
                  <VideoChatOutlinedIcon className="cursor-pointer" />
                  <Typography variant="body3">Video</Typography>
                </div>
              </div>
            </div>
          </>
        )}
        {!isCalling && <Numpad onNumberClick={handleNumberClick} />}
        <Box display="flex" justifyContent="space-between" width="100%" mt={5}>
          <IconButton>
            <VideoChatOutlinedIcon className="cursor-pointer" />
          </IconButton>
          {isCalling ? (
            <Image
              src={IconService.callend}
              onClick={handleEndCall}
              alt=""
              width={30}
              height={30}
            />
          ) : (
            <Image
              src={IconService.callDial}
              onClick={handleCall}
              alt=""
              width={30}
              height={30}
            />
          )}
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddPenaltyForm;
