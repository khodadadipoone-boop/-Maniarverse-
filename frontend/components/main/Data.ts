
export const items: string[] = [
   "all-stories" ,
   "add-child"
]

/** Matches backend `ChildResponse` (app/schemas/child.py). */
export interface Child {
  id: number;
  parent_id: number;
  name: string;
  birth_date: string | null;
  avatar_url: string | null;
  created_at: string;
}

/** Body for `POST /child/add` — matches backend `ChildCreate`. */
export type ChildCreateInput = {
  name: string;
  birth_date: string | null;
  avatar_url: string | null;
};

export type ActiveChildId = number | "all-stories";
