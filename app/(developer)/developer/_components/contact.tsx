import { contactCommand } from '@/app/data';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="space-y-4">
      {contactCommand.map((contact, index) => {
        const Icon = contact.icon;
        return (
          <div key={index} className="flex gap-4 items-center">
            <div>
              <Icon className="size-8" />
              <div>{contact.title}</div>
            </div>
            <Link href={contact.link} className="text-2xl text-blue-500">
              {contact.username}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Contact;
