interface ClearFormProps {
  setMaritalStatus: (value: string) => void
  setStateOfResidence: (value: string) => void
  setNumberOfGoods: (value: string) => void
  setGoods: (value: any[]) => void
  setName: (value: string) => void
  setEmail: (value: string) => void
  setPhone: (value: string) => void
}

export const handleClear = ({
  setMaritalStatus,
  setStateOfResidence,
  setNumberOfGoods,
  setGoods,
  setName,
  setEmail,
  setPhone
}: ClearFormProps) => {
  setMaritalStatus('')
  setStateOfResidence('')
  setNumberOfGoods('')
  setGoods([])
  setName('')
  setEmail('')
  setPhone('')
} 