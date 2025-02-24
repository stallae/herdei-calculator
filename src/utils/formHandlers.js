export const handleClear = ({
  setMaritalStatus,
  setStateOfResidence,
  setNumberOfGoods,
  setGoods,
  setName,
  setEmail,
  setPhone
}) => {
  setMaritalStatus('')
  setStateOfResidence('')
  setNumberOfGoods('')
  setGoods([])
  setName('')
  setEmail('')
  setPhone('')
}
