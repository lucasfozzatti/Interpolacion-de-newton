import eel
import sys
sys.path.append("..")
eel.init("htmls")

lista = ["1","2","3"]

@eel.expose                         # PASAR PARAMETROS DE LOS RESULTADOS
def obtener(a,b):
    return a+b



eel.start("index.html", size=(400,400))    