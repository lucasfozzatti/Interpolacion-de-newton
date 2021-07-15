import eel
import sys
import numpy as np
import sympy as sym
import matplotlib.pyplot as plt
sys.path.append("..")
eel.init("interpolacion-de-newton/htmls")

xlist = []
ylist = []

@eel.expose                         # PASAR PARAMETROS DE LOS RESULTADOS
def obtener(Xlist,Ylist,div):

    xi = np.array(Xlist)
    for m in range(len(Xlist)):
        xlist.append(float(Xlist[m]))
    for m in range(len(Ylist)):
        ylist.append(float(Ylist[m]))    
    xi = np.array(xlist)    
    fi = np.array(ylist)
    n = len(xi)
    dfinita = np.zeros(shape=(n,n),dtype=float)
    dDividida = div
    n = len(dfinita)
    print(xlist,dDividida)
    x = sym.Symbol('x')
    
    polinomio = fi[0]
    for j in range(1,n,1):
        factor = dDividida[j-1]
        termino = 1
        for k in range(0,j,1):
            termino = termino*(x-xi[k])
        polinomio = polinomio + termino*factor

    # simplifica multiplicando entre (x-xi)
    polisimple = polinomio.expand()

    # polinomio para evaluacion numérica
    px = sym.lambdify(x,polisimple)

    # Puntos para la gráfica
    muestras = 101
    a = np.min(xi)
    b = np.max(xi)
    pxi = np.linspace(a,b,muestras)
    pfi = px(pxi)

    # SALIDA
    np.set_printoptions(precision = 4)
    print('dDividida: ')
    print(dDividida)
    print('polinomio: ')
    print(polinomio)
    print('polinomio simplificado: ' )
    print(polisimple)

    plt.plot(xi,fi,'o', label = 'Puntos')
    ##for i in range(0,n,1):
    ##    plt.axvline(xi[i],ls='--', color='yellow')
    plt.plot(pxi,pfi, label = 'Polinomio')
    plt.legend()
    plt.xlabel('xi')
    plt.ylabel('fi')
    plt.title('Diferencias Divididas - Newton')
    
    
    retorno = ["","-----------Reemplazamos en la Fórmula----------- " ,"", str(polinomio), "", "-------------------Simplificamos----------------","", str(polisimple)]
    
    
    return retorno
@eel.expose    
def grafico():
   plt.show()    

eel.start("index.html", size=(400,400))    