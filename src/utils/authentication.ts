import axios from "axios";
import { Request } from "express";
import { Strategy } from "passport-strategy";
import * as environment from "../admin";

export class AuthenticationStrategy extends Strategy {
	name = "bearer";
	private tag = "AuthenticationStrategy";

	async authenticate(req: Request): Promise<void> {
		console.log(`[${this.tag}] authenticate`);
		const { authorization } = req.headers;

		if (!authorization) {
			this.fail("No authorization header", 401);
			return;
		}

		const token = authorization.split("Bearer ").pop();
		console.log(`[${this.tag}] token: ${token}`);

		if (!token) {
			this.fail("No token provided", 401);
			return;
		}

		try {
			const response = await axios.get(
				`${environment.AUTH_URL}/validateToken?access_token=${token}`
			);
			const { uId, role, auth0Id: authId } = response.data;
			console.log("data...",response.data)
			if (!authId) {
				this.fail("No sub", 401);
				return;
			}
			const user: Express.User = {
				uId,
				authId,
				role,
			};
			console.log(`[${this.tag}] user: ${JSON.stringify(user)}`);
			this.success(user);
		} catch (error: unknown) {
			console.error(`[${this.tag}] error: ${error}`);
			if (axios.isAxiosError(error)) {
				const { data } = error.response ?? {};
				this.fail(data?.message, 401);
				return;
			}
			this.fail(error, 401);
		}
	}
}
