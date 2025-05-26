import type { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken } from '../../../utils/auth'
import redisClient from '../../../lib/redis'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Verify admin token
    const token = req.headers.authorization?.split(' ')[1]
    if (!token || !verifyToken(token)) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    // Get current maintenance mode status
    const currentStatus = await redisClient.get('maintenanceMode')
    const newStatus = currentStatus !== 'true'
    
    // Toggle the status
    await redisClient.set('maintenanceMode', newStatus.toString())
    
    res.status(200).json({ maintenanceMode: newStatus })
  } catch (error) {
    console.error('Error toggling maintenance mode:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
} 