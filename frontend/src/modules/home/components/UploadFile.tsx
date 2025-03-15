"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Upload, FileIcon } from "lucide-react"
import { parseWapp } from "../utils"

export default function FileInput() {
    const [file, setFile] = useState<File | null>(null)
    const [fileContent, setFileContent] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
            setFileContent(null) // Reset content when new file is selected
        }
    }

    const removeFile = () => {
        setFile(null)
        setFileContent(null)
        if (inputRef.current) {
            inputRef.current.value = ""
        }
    }

    const readFileContent = () => {
        if (!file) return

        const reader = new FileReader()
        reader.onload = (e) => {
            const content = e.target?.result as string
            setFileContent(content)
            //TODO: PARSE
            const parsed = parseWapp(content);
            console.log(parsed);
            //TODO: SEND TO API

            //TODO: save it to local storage
            // window.localStorage.setItem('convId', 'id')
        }
        reader.onerror = () => {
            console.error("Error reading file")
        }
        reader.readAsText(file)
    }

    const triggerFileInput = () => {
        inputRef.current?.click()
    }

    return (
        <div className="w-full max-w-md mx-auto space-y-6">
            <div className="space-y-2">
                <Label htmlFor="file-upload">Upload Text File</Label>
                <div
                    className="border-2 border-dashed rounded-lg p-6 cursor-pointer hover:bg-muted/50 transition-colors text-center"
                    onClick={triggerFileInput}
                >
                    <Input
                        ref={inputRef}
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".txt,.text,.md,.csv,.json,.xml,.html,.css,.js,.ts"
                    />
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Click to upload a text file</p>
                    <p className="text-xs text-muted-foreground">TXT, MD, CSV, JSON, etc.</p>
                </div>
            </div>

            {file && (
                <div className="space-y-4 mt-4">
                    <div className="text-sm font-medium">Selected File</div>
                    <div className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                        <div className="flex items-center space-x-2">
                            <FileIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                            <span className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(0)} KB</span>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={removeFile}>
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove file</span>
                        </Button>
                    </div>
                </div>
            )}

            <Button onClick={readFileContent} className="w-full mt-4" disabled={!file}>
                Read File Content
            </Button>
        </div>
    )
}

