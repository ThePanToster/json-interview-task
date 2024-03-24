import jsonResourceVerify from '../src/verify';
import { AWSRolePolicy } from '../types/aws';

var exampleData: AWSRolePolicy = {
    PolicyName: "root",
    PolicyDocument: {
        Version: new Date("2012-10-17"),
        Statement: [
            {
                Sid: "IamListAccess",
                Effect: "Allow",
                Action: ["iam:ListRoles", "iam:ListUsers"],
                Resource: "*"
            }
        ]
    }
};

describe('testing jsonResourceVerify() method', () => {
    test('Resource: "*" should result in false', () => {
        expect(jsonResourceVerify(exampleData)).toBe(false);
    });
    test('Resource: "" should result in true', () => {
        exampleData.PolicyDocument.Statement[0].Resource = "";
        expect(jsonResourceVerify(exampleData)).toBe(true);
    });
    test('Resource: "**" should result in true', () => {
        exampleData.PolicyDocument.Statement[0].Resource = "**";
        expect(jsonResourceVerify(exampleData)).toBe(true);
    });
    test('Resource: "example*" should result in true', () => {
        exampleData.PolicyDocument.Statement[0].Resource = "example*";
        expect(jsonResourceVerify(exampleData)).toBe(true);
    });
});