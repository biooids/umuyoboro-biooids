// src/lib/hooks/useSocket.ts

"use client";

import { createContext, useContext } from "react";
import { Socket } from "socket.io-client";

/**
 * The React Context that will hold the global Socket.IO client instance.
 * Components will consume this context to get access to the socket.
 */
export const SocketContext = createContext<Socket | null>(null);

/**
 * A custom hook to easily access the socket instance from any component
 * within the SocketProvider.
 *
 * @returns The active Socket.IO client instance.
 * @throws An error if the hook is used outside of a SocketProvider.
 */
export const useSocket = () => {
  const socket = useContext(SocketContext);
  if (!socket) {
    // This check ensures that the hook is used correctly within the component tree.
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return socket;
};
