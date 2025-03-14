import { useQuery } from "@tanstack/react-query";
import { getConversationQuery } from "../querries";
import { DashboardData } from "../types";

export function useConvStats() {
    const convId = window.localStorage.getItem("convId");
    if (!convId) throw new Error("convId MUST be !");
    return useQuery<DashboardData>(getConversationQuery(convId));
}