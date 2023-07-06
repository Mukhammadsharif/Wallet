export const getShortAddress = (address: string) => {
  if (address.length < 6) return address
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`
}
