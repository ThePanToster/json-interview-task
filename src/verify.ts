import { AWSRolePolicy } from '../types/aws.js'

const jsonResourceVerify = (data: AWSRolePolicy): boolean =>
    data.PolicyDocument.Statement[0].Resource !== "*";

export default jsonResourceVerify;