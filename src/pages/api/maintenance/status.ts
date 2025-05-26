import type { NextApiRequest, NextApiResponse } from 'next'
import redisClient from '../../../lib/redis'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const maintenanceMode = await redisClient.get('maintenanceMode')
    res.status(200).json({ maintenanceMode: maintenanceMode === 'true' })
  } catch (error) {
    console.error('Error fetching maintenance status:', error)
    // If Redis is not available, default to maintenance mode off
    res.status(200).json({ maintenanceMode: false })
  }
} 