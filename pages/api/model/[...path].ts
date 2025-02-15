/
import { getEnhancedPrisma } from 'server/enhanced-db';

export default NextRequestHandler({
    getPrisma: (req, res) => getEnhancedPrisma({ req, res }),
});
