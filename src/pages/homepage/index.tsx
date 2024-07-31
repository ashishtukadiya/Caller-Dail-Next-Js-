import Commoncard from "@/components/Commoncard";
import AddPenaltyForm from "@/components/CommonModal";
import IconService from "@/utils/Icons";
import React, { useState } from "react";

const Index = () => {
  const [selectedPhone, setSelectedPhone] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (phone: number) => {
    setSelectedPhone(phone);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPhone(null);
  };
  const event: any = [
    {
      id: 1,
      image: IconService.profile1,
      name: "Amit Sharma",
      phone: 9123456789,
    },
    {
      id: 2,
      image: IconService.profile2,
      name: "Priya Singh",
      phone: 9234567890,
    },
    {
      id: 3,
      image: IconService.profile3,
      name: "Raj Patel",
      phone: 9345678901,
    },
    {
      id: 4,
      image: IconService.profile4,
      name: "Neha Gupta",
      phone: 9456789012,
    },
    {
      id: 5,
      image: IconService.profile4,
      name: "Arjun Reddy",
      phone: 9567890123,
    },
    {
      id: 6,
      image: IconService.profile4,
      name: "Pooja Mehta",
      phone: 9678901234,
    },
    {
      id: 7,
      image: IconService.profile4,
      name: "Vikram Das",
      phone: 9789012345,
    },
    {
      id: 8,
      image: IconService.profile4,
      name: "Anita Rao",
      phone: 9890123456,
    },
    {
      id: 9,
      image: IconService.profile4,
      name: "Ravi Kumar",
      phone: 9912345678,
    },
    {
      id: 10,
      image: IconService.profile4,
      name: "Sana Khan",
      phone: 9923456789,
    },
    {
      id: 11,
      image: IconService.profile4,
      name: "Kunal Joshi",
      phone: 9934567890,
    },
  ];

  return (
    <div>
      <div className="shadow-md">Team</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 xl:grid-cols- gap-4 p-4">
        {event.map((event) => (
          <Commoncard
            key={event.id}
            image={event.image}
            name={event.name}
            phone={event.phone}
            onCallClick={handleOpen}
          />
        ))}
      </div>
      <AddPenaltyForm
        open={open}
        onClose={handleClose}
        phone={selectedPhone}
        events={event}
      />
    </div>
  );
};

export default Index;
