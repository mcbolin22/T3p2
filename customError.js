class CustomFancyError extends Error {
  constructor(message) {
    super(message)
    this.secretMessage = 'CustomFancyError';
  }

  toJSON() {
    return {
        secretMessage: this.secretMessage
    }
  }
}

module.exports = {CustomFancyError}