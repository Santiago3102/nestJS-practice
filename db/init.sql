SELECT 'CREATE DABASE crud_pg' 
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'crud_pg')\gexec