"use client";
import React, { SetStateAction, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { TextArea } from "@/components/ui/textarea";
import { useAppContext } from "@/hooks/useAppContext";
import { toast } from "sonner";
import { sendMail } from "@/lib/mail";



export function ContactForm( { setShowModal } : {setShowModal : React.Dispatch<SetStateAction<boolean>>} ) {
  const { setShowConfetti } = useAppContext();
  
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendMail({
        email,
        name,
        message
      })
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000)
      toast.success('Your message has been sent!', {
        duration: 3000,
        position: 'top-center'
      })
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!', {
        duration: 3000,
        position: 'top-center'
      })
    }finally { 
      setLoading(false);
      setShowModal(false)
    }
  
  };
  return (
    <>
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <form className="my-8" onSubmit={handleSubmit} autoComplete="off">
          <LabelInputContainer  className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ram Bahadur" type="text" />
          </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Your message</Label>
          <TextArea id="message" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="I want to know about ..." />
        </LabelInputContainer>
      

        <button
        disabled={loading}
          className="
          disabled:cursor-wait
          bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {loading ? 'Sending...': 'Send'}
           
          <BottomGradient />
        </button>


        
      </form>
    </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
