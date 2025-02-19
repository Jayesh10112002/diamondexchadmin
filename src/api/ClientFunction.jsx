// api/ClientFunction.jsx
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_API_URL, CLIENT_URL } from "./constant"; // Adjust the import path as necessary
import { encryptData } from "../Utils/EncryptData";
import { decryptData } from "../Utils/Decrypt";

export const baseURL = BASE_API_URL;

if (!baseURL) {
  console.log(
    "> BaseURL error, please check your env file or visit api/ClientFunction.jsx file to see more details..., Thanks!..."
  );
}

const api = axios.create({
  baseURL: baseURL, // Add the protocol (http or https) before the hostname
});

const handleRequest = async (method, url, data = null, customHeaders = {}) => {
  const token = localStorage.getItem("token");
  let requestData = null;
  if (data) {
    requestData = encryptData(data);
  }
  try {
    const response = await api({
      method,
      url,
      data: requestData,
      headers: {
        ...customHeaders,
        Authorization: `Bearer ${token}`,
      },
    });
    const decryptedData = decryptData(response?.data?.data);
    console.log(decryptedData);
    return decryptData(response?.data?.data);
  } catch (error) {
    const decryptedData = decryptData(error?.response?.data?.data);
    if (
      decryptedData.message === "Login Error" ||
      decryptedData.message === "User Not Persent in DataBase"
    ) {
      window.location.href = CLIENT_URL;
    }
    if (decryptedData.success === false && decryptedData.message) {
      toast.error(
        decryptedData?.message || "Something Went Wrong In Api Calling"
      );
    }
    return decryptedData;
  }
};

// API functions
export const fetchData = (url) => handleRequest("get", url);
export const postData = (url, data) => handleRequest("post", url, data);
export const updateData = (url, data) => handleRequest("put", url, data);
export const deleteData = (url, data) => handleRequest("delete", url, data);
export const requestData = (method, url, data) =>
  handleRequest(method, url, data);

// Utility functions
export function generateTransactionId(phoneNumber) {
  phoneNumber = String(phoneNumber);
  const seed = Date.now();
  const combinedString = phoneNumber + seed;
  const hashCode = combinedString.split("").reduce((hash, char) => {
    const charCode = char.charCodeAt(0);
    return (hash << 5) - hash + charCode;
  }, 0);

  const positiveHashCode = Math.abs(hashCode) % 100000000;

  const transactionId = positiveHashCode.toString().padStart(8, "0");

  return transactionId;
}

export function formatTime(dateString) {
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedTime = new Date(dateString).toLocaleTimeString([], options);
  return formattedTime;
}

export function generateRandomEmail() {
  const domains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "example.com",
    "domain.com",
  ];
  const usernameLength = Math.floor(Math.random() * 10) + 5; // Random length between 5 and 14
  const username = Array.from({ length: usernameLength }, () =>
    getRandomChar()
  ).join("");
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${username}@${domain}`;
}

function getRandomChar() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return chars[Math.floor(Math.random() * chars.length)];
}

export function validateEmail(email) {
  const validTLDs = [
    ".cc",
    ".com",
    ".org",
    ".net",
    ".edu",
    ".gov",
    ".mil",
    ".co.uk",
    ".de",
    ".jp",
    ".fr",
    ".au",
    ".us",
    ".ru",
    ".ch",
    ".it",
    ".nl",
    ".se",
    ".no",
    ".es",
    ".ca",
    ".eu",
    ".nz",
    ".in",
    ".cn",
    ".br",
    ".za",
    ".ar",
    ".mx",
    ".asia",
    ".biz",
    ".info",
    ".mobi",
    ".name",
    ".online",
    ".pro",
    ".site",
    ".tech",
    ".website",
    ".xyz",
    ".club",
    ".email",
    ".store",
    ".shop",
    ".blog",
    ".io",
    ".me",
    ".app",
  ];

  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (regex.test(email)) {
    const domain = email.substring(email.lastIndexOf("."));
    return validTLDs.includes(domain);
  }
  return false;
}

export const formatSeconds = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return [
    Math.floor(minutes / 10),
    minutes % 10,
    Math.floor(seconds / 10),
    seconds % 10,
  ];
};

export function getMappedValue(input) {
  switch (input) {
    case "l":
      return "Big";
    case "n":
      return "Small";
    case "t":
      return "Violet";
    case "d":
      return "Red";
    case "x":
      return "Green";
    default:
      return input;
  }
}
