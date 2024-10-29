import * as React from 'react';
import { Html, Button } from "@react-email/components";

interface EmailProps {
  username: string;
  userurl: string; // Added url to the interface
}

export default function SendEmails({ username, userurl }: EmailProps): JSX.Element {
  return (
    <Html lang="en">
      <Button className='bg-slate-600 text-white rounded' href={userurl}>Click me</Button>
    </Html>
  );
}
