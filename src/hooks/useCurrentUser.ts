"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect } from "react";

export function useCurrentUser() {
  const user = useQuery(api.users.getCurrentUser);
  const createOrGet = useMutation(api.users.createOrGet);

  // Sync user into Convex DB on first sign-in
  useEffect(() => {
    if (user === null) {
      createOrGet();
    }
  }, [user, createOrGet]);

  return {
    user,
    isLoading: user === undefined,
    isSignedIn: !!user,
  };
}
