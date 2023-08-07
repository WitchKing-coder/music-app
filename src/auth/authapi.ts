import jwt from "jsonwebtoken";
import date from "date-and-time";

export const signDevToken = (
    clientId: string,
    keyId: string,
    privateKey: string,
    userId: string | undefined = undefined
) => {
    const alg = "ES256";
    return jwt.sign(
        {
            iss: clientId,
            iat: new Date().getTime() / 1000,
            exp: date.addDays(new Date(), 14).getTime() / 1000,
            sub: userId,
        },
        privateKey,
        {
            algorithm: alg,
            header: {
                alg,
                kid: keyId,
            },
        }
    );
};