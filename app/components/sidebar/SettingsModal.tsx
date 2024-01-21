'use client';
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Modal from "../Modal";
import Input from "../inputs/Input";

interface SettingsModalProps {
    isOpen?: boolean;
    onClose: () => void;
    currentUser: User;
  }
  const SettingsModal: React.FC<SettingsModalProps> = ({ 
    isOpen, 
    onClose, 
    currentUser = {}
  }) => {
    const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  console.log(currentUser, '&TEST_CURRENT_USER')

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      image: currentUser?.image
    }
  });

  const image = watch('image');
  const handleUpload = (result: any) => {
    setValue('image', result.info.secure_url, { 
      shouldValidate: true 
    });
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/settings', data)
    .then(() => {
      router.refresh();
      onClose();
    })
    .catch(() => toast.error('Something went wrong!'))
    .finally(() => setIsLoading(false));
  }

  return (
  <Modal isOpen={isOpen} onClose={onClose}>
    <form onSubmit={handleSubmit(onSubmit)}>
     <div
     className="space-y-12"
     >
        <div className="border-b border-gray-900/10 pb-12">
        <h2
        className="text-base font-semibold leading-7 text-gray-900"
        >
            Profile
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
              Edit your public information.
        </p>

        <div className="mt-10 flex flex-col gap-y-8">
          <Input
          disabled={isLoading}
          label="Name" 
          id="name" 
          errors={errors} 
          required 
          register={register}
          />
        </div>
        </div>
     </div>
    </form>
  </Modal>
  )
}

export default SettingsModal