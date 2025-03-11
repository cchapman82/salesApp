from flask import Flask, render_template
import json

class Product :

    def __init__(self, title, category, price, description): 
                self.title=title
                self.category= category
                self.price= price
                self.description= description
                
productList = []
cart = []
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


app = Flask(__name__)


@app.route("/")
def runApp():
    JSONproductList = jsonify(productList)
    print(productList)
    print()
    print(JSONproductList)
    stringJSONproductList = str(JSONproductList)
    print(stringJSONproductList)
    
    return render_template('indexSalesTemplate.html', productList = JSONproductList)


@app.route("/cartTemplate.html")
def goToCart():
    return render_template('cartTemplate.html')

def to_json(obj):
    return json.dumps(obj, separators=(",",":"), allow_nan=False, default=lambda obj: obj.__dict__)

def jsonify(arr):
    result = []
    for i in arr :
        result.append(to_json(i))
    return result
