"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Title from "./Title";
import { ContactForm } from "./ContactForm";
import { useState } from "react";


export function ContactDialog() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  }
  return (
    <Dialog open={showModal} onOpenChange={handleClose}>
        <div className="cursor-pointer" onClick={() => setShowModal(true)}>
        <Title text="Contact Me 📬"  className="flex flex-col justify-center items-center md:items-start"  />
        </div>
       
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            {`Drop Me a Line, Let's Start a Conversation!`}
          </DialogDescription>
        </DialogHeader>
        <ContactForm setShowModal={setShowModal} />
      </DialogContent>
    </Dialog>

  );
}
