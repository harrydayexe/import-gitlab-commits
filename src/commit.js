class Commit {
    /**
     * Create a Commit object
     * @param {Date} committedAt
     * @param {string} projectID
     * @param {string} hash
     */
    constructor(committedAt, projectID, hash) {
        this.CommittedAt = committedAt;
        this.Message = `Project: ${projectID} commit: ${hash}`
    }

    /**
     * Parse a commit message
     * @param message The commit message to parse
     */
    static ParseCommitMessage(message) {
        const messagePartsCount = 4;

        let messageParts = message.split(" ");
        if (messageParts.length < messagePartsCount) {
            return {
                'projectID': 0,
                'hash': "",
                'error': `wrong commit message: ${message}`
            };
        }

        let id = parseInt(messageParts[1], 10);
        if (isNaN(id)) {
            return {
                'projectID': 0,
                'hash': "",
                'error': `failed to convert ${messageParts[1]} to project id.`
            };
        }

        return {
            'projectID': id,
            'hash': messageParts[2],
            'error': NaN
        };
    }
}