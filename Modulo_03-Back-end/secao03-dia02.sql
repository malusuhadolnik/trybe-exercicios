SELECT * FROM pixar.box_office;  -- movie_id, rating, domestic_sales, international_sales
SELECT * FROM pixar.movies; 

-- exercício 1
SELECT t1.domestic_sales, t1.international_sales, t2.title
FROM pixar.box_office AS t1
INNER JOIN pixar.movies AS t2
ON t1.movie_id = t2.id;

-- exercício 2
SELECT t1.domestic_sales + t1.international_sales AS 'número de vendas', t2.title
FROM pixar.box_office AS t1
INNER JOIN pixar.movies AS t2
ON t1.movie_id = t2.id
WHERE t1.international_sales > t1.domestic_sales;

-- exercício 3
SELECT t1.rating, t2.title
FROM pixar.box_office AS t1
INNER JOIN pixar.movies AS t2
ON t1.movie_id = t2.id
ORDER BY t1.rating DESC;

-- exercício 4
SELECT t1.name, t1.location, t2.title
FROM pixar.theater AS t1
LEFT JOIN pixar.movies AS t2
ON t1.id = t2.theater_id
ORDER BY t1.name;