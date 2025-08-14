// src/components/layouts/SocketProvider.tsx

"use client";

import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SocketContext } from "@/lib/hooks/useSocket";
import { useAppSelector } from "@/lib/hooks/hooks";

/**
 * A client-side component that establishes and provides a WebSocket connection
 * for authenticated users.
 */
export default function SocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAppSelector((state) => state.auth.token);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    let newSocket: Socket | undefined;

    // Only attempt to connect if the user is authenticated (has a token).
    if (token) {
      // Construct the base URL for the WebSocket server.
      const socketUrl =
        process.env.NEXT_PUBLIC_BACKEND_API_URL!.replace("/api/v1", "") || "";

      // Initialize the socket connection, passing the auth token.
      newSocket = io(socketUrl, {
        auth: { token },
        transports: ["websocket", "polling"],
      });

      setSocket(newSocket);

      newSocket.on("connect", () => {
        console.log("WebSocket connected successfully.");
      });

      newSocket.on("disconnect", () => {
        console.log("WebSocket disconnected.");
      });
    }

    // The cleanup function runs when the token changes (e.g., on logout) or the component unmounts.
    return () => {
      if (newSocket) {
        newSocket.disconnect();
        setSocket(null);
      }
    };
  }, [token]); // This effect re-runs whenever the user's token changes.

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
