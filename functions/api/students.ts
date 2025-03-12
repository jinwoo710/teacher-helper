import { drizzle } from 'drizzle-orm/d1';
import { students } from '../../src/db/schema';
import type { D1Database } from '@cloudflare/workers-types';

export interface Env {
  DB: D1Database;
}

export const onRequestGet = async ({ env }: { env: Env }) => {
  const db = drizzle(env.DB);
  const allStudents = await db.select().from(students);
  
  return new Response(JSON.stringify(allStudents), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const onRequestPost = async ({ request, env }: { request: Request, env: Env }) => {
  try {
    const db = drizzle(env.DB);
    const data = await request.json();
    
    await db.insert(students).values({
      studentId: data.studentId,
      name: data.name,
      gender: data.gender
    });
    
    return new Response(JSON.stringify({ success: true }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error" 
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};