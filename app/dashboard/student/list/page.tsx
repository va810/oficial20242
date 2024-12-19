import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { sql } from "@vercel/postgres";


export default async function list() {
 
    const { rows }= await sql`SELECT * FROM students`

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50%]">Nome</TableHead>
                        <TableHead>E-mail</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((student) => (
                        <TableRow key={student.id}>
                            <TableCell className="font-medium">{student.name}</TableCell>
                            <TableCell>{student.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )

}