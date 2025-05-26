import { createClient } from '@redis/client'

const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: {
    reconnectStrategy: (retries) => {
      if (retries > 10) {
        return new Error('Redis max retries reached')
      }
      return Math.min(retries * 100, 3000)
    }
  }
})

redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err)
})

redisClient.on('connect', () => {
  console.log('Redis Client Connected')
})

// Connect to Redis
redisClient.connect().catch((err) => {
  console.error('Redis Connection Error:', err)
})

export default redisClient 