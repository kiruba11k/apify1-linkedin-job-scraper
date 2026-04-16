# Use the official Apify Node.js image
FROM apify/actor-node:20

# Copy package.json and package-lock.json to the image
COPY package*.json ./

# Install only production dependencies
RUN npm install --quiet --only=prod

# Copy the rest of the source code
COPY . ./

# Start the actor
CMD ["npm", "start"]
