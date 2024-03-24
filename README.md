# A method that verifies the input JSON data

## Requirements

- [Node.js](https://nodejs.org) installed

## Building

1. Clone the repository
   ```
   git clone https://github.com/ThePanToster/json-interview-task.git
   cd json-interview-task
   ```

2. Initialize node modules
   ```
   npm i
   ```

3. Compile TypeScript into JS
   ```
   npm run build
   ```

## Using

- Place JSON files defined as  [AWS::IAM::RolePolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-role-policy.html) into `data` directory
- Run the code with `npm run start`
- You can also run unit tests with `npm run test`
