// src/components/pages/admin/users/UserManagement.tsx
"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import toast from "react-hot-toast";

import { useDebounce } from "@/lib/hooks/useDebounce";
import {
  useGetAdminUsersQuery,
  useDeleteUserMutation,
} from "@/lib/features/admin/adminApiSlice";
import { AdminUserRow } from "@/lib/features/admin/adminTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ManagementPageLayout from "../layouts/ManagementPageLayout";
import PaginationControls from "@/components/shared/PaginationControls";
import { DeleteConfirmationDialog } from "@/components/shared/DeleteConfirmationDialog";

// --- Actions Component for each table row ---
function UserActions({ user }: { user: AdminUserRow }) {
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  const handleDelete = async () => {
    try {
      await deleteUser(user.id).unwrap();
      toast.success(`User @${user.username} has been deleted.`);
    } catch (error) {
      toast.error("Failed to delete user.");
    }
  };

  return (
    <DeleteConfirmationDialog
      onConfirm={handleDelete}
      title="Are you absolutely sure?"
      description={`This will permanently delete the account for @${user.username}. This action cannot be undone.`}
      trigger={
        <Button variant="destructive" size="sm" disabled={isDeleting}>
          Delete
        </Button>
      }
    />
  );
}

// --- Main Page Component ---
export default function UserManagement() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data, isLoading, isError } = useGetAdminUsersQuery({
    page,
    q: debouncedSearchTerm,
  });

  const users = data?.data.users ?? [];
  const pagination = data?.data.pagination;

  return (
    <ManagementPageLayout
      title="User Management"
      description="View, search, and delete user accounts."
      itemCount={pagination?.totalItems ?? 0}
      controls={
        <Input
          placeholder="Search by username or phone..."
          className="w-full max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      }
    >
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Username</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Date Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center h-24">
                  Loading users...
                </TableCell>
              </TableRow>
            ) : isError ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center h-24 text-destructive"
                >
                  Failed to load users.
                </TableCell>
              </TableRow>
            ) : users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center h-24">
                  No users found.
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    @{user.username}
                  </TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    {format(new Date(user.createdAt), "PP")}
                  </TableCell>
                  <TableCell className="text-right">
                    <UserActions user={user} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      {pagination && pagination.totalPages > 1 && (
        <PaginationControls pagination={pagination} onPageChange={setPage} />
      )}
    </ManagementPageLayout>
  );
}
