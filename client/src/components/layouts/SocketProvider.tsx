// src/components/layouts/SocketProvider.tsx
"use client";

import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SocketContext } from "@/lib/hooks/useSocket";
import { useAppSelector } from "@/lib/hooks/hooks";

export default function SocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAppSelector((state) => state.auth.token);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    let newSocket: Socket | undefined;

    if (token) {
      const socketUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL!.replace(
        "/api/v1",
        ""
      );

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

    // Cleanup function runs when the token changes (e.g., on logout).
    return () => {
      if (newSocket) {
        newSocket.disconnect();
        setSocket(null);
      }
    };
  }, [token]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
