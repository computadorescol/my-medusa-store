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
render para guardar el backend cuando deploy en vercel 
backend> Dockerfile es para el render
monorepo
neon "connection-string" de project "carrito jaltech" es :
postgresql://neondb_owner:npg_8qCtGOsyfJ3e@ep-red-wind-aiyqgwsl-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
nuevo medusa postgres internal connection para my-medusa-store hasta 25 sept 2026 :
postgresql://medusajs_ntfz_user:XvRPxZ3T4zyXaU2kANPbDWD6Nsl2HfOA@dpg-da7oltpsrm7s739qtnog-a/medusajs_ntfz
redis-cli --tls -u redis://default:gQAAAAAAAs7xAAIgcDFlZDVlMDhiNjY4OTI0NDAwOGRiMTJiODVhNDhlOGU1MA@secure-lizard-184049.upstash.io:6379
UPSTASH_REDIS_REST_URL="https://secure-lizard-184049.upstash.io"
UPSTASH_REDIS_REST_TOKEN="gQAAAAAAAs7xAAIgcDFlZDVlMDhiNjY4OTI0NDAwOGRiMTJiODVhNDhlOGU1MA"    
para obtener el JWT_SECRET ir al terminal y 
powershell -Command "[Convert]::ToBase64String((1..32 | ForEach-Object {Get-Random -Maximum 256}))"
y devuelve esto token 
QeLCX26oBjrfLOBTVATcX75uSbwiD70pOOP4zS2QRjk=     listo !
y para obtener el COOKIE_SECRET pegar mismo script
powershell -Command "[Convert]::ToBase64String((1..32 | ForEach-Object {Get-Random -Maximum 256}))"
y otra vez devuelve otro token, esperar 1 minute mientras lo crea,
1oCp0kRQ+IwsGj8TDhUgPAdnPRTr+jlL4y8cgy6fQnE=   listo !
y esta es la url que da render
