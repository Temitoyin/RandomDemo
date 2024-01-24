import { unstable_noStore as noStore } from 'next/cache'
 
 const Component = ()  => {
  noStore()
  // cookies(), headers(), and other dynamic functions
  // will also opt into dynamic rendering, making
  // this env variable is evaluated at runtime
  const value = process.env.MY_VALUE
  return <>
  Component 1
  </>
  // ...
}
export default Component;