'use server';
import { z } from 'zod';
import { date } from 'zod/v4';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

export async function createInvoice(formData: FormData) {
  console.log('Form Data', formData);
  const rawFormData = {
    cutomerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };

 
}
