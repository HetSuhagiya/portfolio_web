import type { NextApiRequest, NextApiResponse } from 'next'
import { signToken } from '../../../utils/auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { password } = req.body

    // In a real application, you should use a secure password hash comparison
    // and store the password hash in environment variables
    if (password === process.env.ADMIN_PASSWORD) {
      const token = signToken()
      res.status(200).json({ token })
    } else {
      res.status(401).json({ message: 'Invalid password' })
    }
  } catch (error) {
    console.error('Error during login:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
} 