
"""

The stocks of a company are being surveyed to analyse the net profit of the company
 over a period of several months. D For an analysis parameter k, a group of k consecutive 
 months is said to be highly profitable if the values of the stock prices are strictly 
 increasing for those months. Given the stock prices of the company for n months and the analysis parameter k, 
 find the number of highly profitable months. Example Let the number of months be n 8, the stock prices 
 be stockPrices = [5, 3, 5, 7, 8] and the analysis parameter be k = 3.

"""


def countHighlyProfitableMonths(stockPrices, k):
    count = 0
    for i in range(0, len(stockPrices)-k+1):
        if any(stockPrices[i+j] >= stockPrices[i+j-1] for j in range(1, k)):
            count += 1
    return count


print(countHighlyProfitableMonths([5, 3, 5, 7, 8], 3))
