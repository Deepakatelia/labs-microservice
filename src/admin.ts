import dotenv from "dotenv";
dotenv.config();

export const nat_server = process.env.NATS || "nats://localhost:4222";
export const kafka_server = process.env.KAFKA || "localhost:9092";
export const nats_timeout = 20000;
export const AUTH_URL = process.env.AUTH_URL || "http://localhost:5001";
export const AUTHORIZATION_URL = process.env.AUTHORIZATION_URL || "http://localhost:5002";
