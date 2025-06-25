import logging
print("hola desde python")


numero = int(input("ingresa numero y te digo si es par o impar: "))

if numero % 2 == 0:

    logging.basicConfig(
        level=logging.DEBUG,
        format='%(asctime)s - %(levelname)s - %(message)s'
        
        
    )
    logging.debug("es par")
    
else:
   logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s'
    )
   logging.debug("es impar")