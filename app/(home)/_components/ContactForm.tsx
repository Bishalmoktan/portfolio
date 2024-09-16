'use client';
import React, { SetStateAction, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { TextArea } from '@/components/ui/textarea';
import { useAppContext } from '@/hooks/useAppContext';
import { toast } from 'sonner';
import { sendMail } from '@/lib/mail';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

export const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Please provide your name.',
  }),
  email: z.string().email('Please provide a valid email.').min(1, {
    message: 'Please provide an email.',
  }),
  message: z.string().min(1, {
    message: 'Please write some message.',
  }),
});

export function ContactForm({
  setShowModal,
}: {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: '',
      name: '',
    },
  });

  const { setShowConfetti } = useAppContext();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    console.log(values);
    try {
      await sendMail({
        ...values,
      });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      toast.success('Your message has been sent!', {
        duration: 3000,
        position: 'top-center',
      });
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!', {
        duration: 3000,
        position: 'top-center',
      });
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };
  return (
    <>
      <div className='mx-auto w-full max-w-md rounded-none bg-black p-4 shadow-input md:rounded-2xl md:p-8'>
        <Form {...form}>
          <form
            className='my-8'
            onSubmit={form.handleSubmit(handleSubmit)}
            autoComplete='off'
          >
            <LabelInputContainer className='mb-4'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Label htmlFor='name'>Name</Label>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id='name'
                        placeholder='Ram Bahadur'
                        type='text'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='text-red-500' />
                  </FormItem>
                )}
              />
            </LabelInputContainer>

            <LabelInputContainer className='mb-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Label htmlFor='email'>Email</Label>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id='email'
                        placeholder='example@gmail.com'
                        type='text'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='text-red-500' />
                  </FormItem>
                )}
              />
            </LabelInputContainer>

            <LabelInputContainer className='mb-4'>
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Label htmlFor='message'>Message</Label>
                    </FormLabel>
                    <FormControl>
                      <TextArea
                        id='message'
                        placeholder='Your message'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='text-red-500' />
                  </FormItem>
                )}
              />
            </LabelInputContainer>

            <button
              disabled={loading}
              className='group/btn relative block h-10 w-full rounded-md bg-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900 font-medium text-white shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] disabled:cursor-wait'
              type='submit'
            >
              {loading ? 'Sending...' : 'Send'}

              <BottomGradient />
            </button>
          </form>
        </Form>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className='absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100' />
      <span className='absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100' />
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
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  );
};
