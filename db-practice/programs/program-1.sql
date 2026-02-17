-- Program 1 (Oracle SQL)
-- Simple table + insert + query

CREATE TABLE students (
  id NUMBER PRIMARY KEY,
  name VARCHAR2(100) NOT NULL,
  stage NUMBER NOT NULL
);

INSERT INTO students (id, name, stage) VALUES (1, 'Ali', 2);
INSERT INTO students (id, name, stage) VALUES (2, 'Sara', 2);

SELECT id, name, stage
FROM students
ORDER BY id;
