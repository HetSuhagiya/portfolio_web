import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export function signToken() {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined')
  }
  return jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '24h' })
}

export function verifyToken(token: string) {
  if (!JWT_SECRET) {
    return false
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    return decoded && (decoded as any).role === 'admin'
  } catch (error) {
    return false
  }
} 