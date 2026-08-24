para ingresar a postgres
PS C:\Users\Pilaresco> psql -h localhost -U postgres -d postgres
Password for user postgres: d702d702

para mirar todas las bases de datos que hay creadas
desde users/pilaresco/ 
psql -U postgres -c "\l"
para conocer si la conexion esta correcta 
desde /my-medusa-store > psql -U postgres -h localhost -d medusa-store -c "SELECT 'Conexión exitosa' as status;"
para crear el primer admin luego de la instalacion se usa yarn
my-medusa-store > yarn medusa user -e admin@medusa-test.com -p supersecret

para correr el server backend my-medusa-store> npm run dev 
login en backend :localhost:9000/app :  en el form : admin@medusa-test.com y supersecret ( enter por default)
api_key esta en localhost:9000 en settings  
para iniciar  el server frontend > my-medusa-store>my-medusa-storefront> npm run dev .. da error por lo pnpm..  y el viernes 21 ago 2pm lo inicie asi : my-medusa-storefront> pnpm storefront:dev  y localhost:8000
