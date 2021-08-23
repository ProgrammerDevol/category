import pkg from 'jsonwebtoken'
const PRIVATE_KEY = 'olma' 
const { sign, verify } = pkg


export default {
	sign: (payload) => sign(payload, PRIVATE_KEY),
	verify: (token) => verify(token, PRIVATE_KEY),
}
