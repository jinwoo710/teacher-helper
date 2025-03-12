import type { D1Database } from '@cloudflare/workers-types';
import {students} from "./db/schema"
import { drizzle } from 'drizzle-orm/d1';
export interface Env {
    DB:D1Database;
}

export default {
    async fetch(request:Request, env:Env): Promise<Response>{
        const db = drizzle(env.DB);
        const url= new URL(request.url);
        if(url.pathname === '/api/students' && request.method == 'GET'){
            const allStudents = await db.select().from(students);
            return new Response(JSON.stringify(allStudents), {
                headers: { 'Content-Type': 'application/json' }
              });
            
        }

        if(url.pathname === '/api/students' && request.method == "POST") {
            try{
            const data = await request.json();
            await db.insert(students).values({
                id: data.id,
                name:data.name,
                gender:data.gender
                
            })
            return new Response(JSON.stringify({ success: true }), {
                headers: { 'Content-Type': 'application/json' }
              });
            } catch (error) {
                return new Response(JSON.stringify({ 
                  success: false, 
                  error: error instanceof Error ? error.message : "Unknown error" 
                }), {
                  status: 400,
                  headers: { 'Content-Type': 'application/json' }
                });
            }
        }
        return new Response("Not Found", { status: 404 });
    }
    
}