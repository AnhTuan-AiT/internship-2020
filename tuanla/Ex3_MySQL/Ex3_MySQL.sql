use baseweb;


create table Category (
	category_id int not null auto_increment,
	category_name varchar(60) not null,
	created_stamp timestamp default current_timestamp,
	last_updated_stamp timestamp,
	description varchar(255),
    primary key(category_id)
);

create table Product(
	product_id int not null auto_increment,
    product_name varchar(60) not null,
    link text,
    price int,
    quantity int,
    sold_quantity int,
    description varchar(255),
    category_id int,
    primary key(product_id),
    foreign key(category_id) references Category(category_id)
);


insert into category(category_name, description) values ("Apple", "Tập đoàn Apple");
insert into category(category_name, description) values ("Samsung", "Tập đoàn Samsug");

insert into product(product_name, quantity, sold_quantity, category_id) value ("Điện thoại Note 10", 1000, 500, 2);
insert into product(product_name, quantity, sold_quantity, category_id) value ("Điện thoại S8", 1300, 1000, 2);
insert into product(product_name, quantity, sold_quantity, category_id) value ("Điện thoại S10", 1340, 40, 2);
insert into product(product_name, quantity, sold_quantity, category_id) value ("Điện thoại S9", 11000, 7800, 2);
insert into product(product_name, quantity, sold_quantity, category_id) value ("Điện thoại S7", 1060, 965, 2);
insert into product(product_name, quantity, sold_quantity, category_id) value ("Điện thoại S6", 46351, 3545, 2);

insert into product(product_name, quantity, sold_quantity, category_id) value ("Điện thoại Iphone X", 3534, 742, 1);
insert into product(product_name, quantity, sold_quantity, category_id) value ("Điện thoại Iphone XI", 5636, 2445, 1);
insert into product(product_name, quantity, sold_quantity, category_id) value ("Apple watch", 10000, 5678, 1);
insert into product(product_name, quantity, sold_quantity, category_id) value ("Macbook Air 2020", 23434, 3870, 1);
insert into product(product_name, quantity, sold_quantity, category_id) value ("Macbook Pro 2020", 67892, 9635, 1);
insert into product(product_name, quantity, sold_quantity) value ("Điện thoại Iphone 8", 4826, 279 );


select * 
from product p inner join category c on p.category_id = c.category_id
where p.product_name like N'%Điện thoại%' and c.category_name = 'Apple';

select 	c.category_id,
		c.category_name,
		count(*) no_product
from product p inner join category c on p.category_id = c.category_id
group by category_id
order by no_product DESC;

select *
from product
order by sold_quantity DESC limit 10

