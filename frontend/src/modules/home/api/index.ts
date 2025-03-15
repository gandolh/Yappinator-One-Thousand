import { api } from "@/lib/axios";

export async function sendFile(data: any) {
    return await api.post("/api/sendFile", data)
}

export async function getCache() {
    
}

export async function getConvById(convId : string){
    return await api.get(`/api/${convId}`)
}