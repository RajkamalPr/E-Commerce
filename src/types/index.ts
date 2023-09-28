export type productType = {
  [key: string]: any
}
export interface reviewType {
  [key: string]: any
  //   [key: string]: {
  id: number
  name: string
  rating: number
  comment: string
  user: number
  timestamps: string
  //   }
}
export type userType = {
  [key: string]: any
  //   [key: string]: {
  id: number
  name: string
  lastname: string
  email: string
  password: string
  isAdmin: boolean
  timestamps: string
  //   }
}
export interface cart {
  name?: string
  qty?: string
  image?: string
  price?: string
  product?: string
}
