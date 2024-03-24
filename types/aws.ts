type AWSRolePolicy = {
    PolicyName: string,
    PolicyDocument: {
        Version: Date,
        Statement: [
            {
                Sid: string,
                Effect: string,
                Action: Array<string>,
                Resource: string
            }
        ]
    }
}

export { AWSRolePolicy };