import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { Button, Input } from '@/components/common';
import { Textarea } from '../../common/Textarea';
import { contactFormSchema } from '@/utils/validators';
import { ContactFormData } from '../../../types/contact.types';

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Here you would typically send the data to your backend
      console.log('Form data:', data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow-lg">
      <h3 className="mb-6 text-2xl font-bold text-gray-900">Send us a message</h3>

      {isSubmitted && (
        <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800">
          <p className="font-medium">Message sent successfully!</p>
          <p className="text-sm">We'll get back to you as soon as possible.</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Name"
          {...register('name')}
          error={errors.name?.message}
          placeholder="John Doe"
          required
        />

        <Input
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          placeholder="john@example.com"
          required
        />

        <Input
          label="Phone"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          placeholder="+1 (239) 516-5873"
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Service Interested In
          </label>
          <select
            {...register('service')}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors duration-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          >
            <option value="">Select a service</option>
            <option value="publication">Publication & Republication</option>
            <option value="website">Website Development</option>
            <option value="marketing">Digital Marketing</option>
            <option value="design">Graphic Design</option>
            <option value="publicist">Publicist Services</option>
          </select>
        </div>

        <Input
          label="Subject"
          {...register('subject')}
          error={errors.subject?.message}
          placeholder="How can we help you?"
          required
        />

        <Textarea
          label="Message"
          {...register('message')}
          error={errors.message?.message}
          placeholder="Tell us about your project..."
          rows={5}
          required
        />

        <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
          <Send className="mr-2 h-5 w-5" />
          Send Message
        </Button>
      </form>
    </div>
  );
};