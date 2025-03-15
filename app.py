from flask import Flask, render_template, request
import json

#takes on product and turns it into a json string
def to_json(obj):
    return json.dumps(obj, separators=(",",":"), allow_nan=False, default=lambda obj: obj.__dict__)
#takes array of objects and makes an array of strings
def jsonify(arr):
    result = ""
    for i in arr :
        result += (to_json(i)) + ","
    result =  result[0 : result.rfind(",")]
    return result

class Product :

    def __init__(self, title, category, price, description): 
                self.title=title
                self.category= category
                self.price= price
                self.description= description
                



productList = []  
JSONproductList = ""
cart = ""
numItems = 0

productList.append( Product("Bed", "bedroom", 300.00, "A bed."))
productList.append( Product("Glasses", "kitchen", 25.00, "Set of four glasses."))
productList.append( Product("Soap Dish", "bathroom", 10.00, "A soap dish"))
productList.append( Product("Computer", "computers", 1000.00, "A computer."))
productList.append( Product("Tablet", "tables", 500.00, "A tablet."))
productList.append( Product("Television", "televisions", 190.00, "A television."))
productList.append( Product("Meat", "meat", 25.00, "Beef"))
productList.append( Product("Vegetables", "vegetables", 5.00, "Some vegetables."))
productList.append( Product("Milk", "dairy", 6.00, "Some milk."))

JSONproductList = jsonify(productList)


app = Flask(__name__)



@app.route("/")
def runApp():
    return render_template('indexSalesTemplate.html', data = JSONproductList )
@app.route('/process', methods = ['POST'])
def getCartData() :
     cart = request.get_json()
     print(cart)
     return "success"
@app.route("/cartTemplate.html")
def goToCart():
    return render_template('cartTemplate.html')

@app.route("/accountTemplate.html")
def goToAccount():
    return render_template('accountTemplate.html')
@app.route("/indexSalesTemplate.html")
def goToHome():
    print("going home")
    return render_template('indexSalesTemplate.html', data = JSONproductList)



