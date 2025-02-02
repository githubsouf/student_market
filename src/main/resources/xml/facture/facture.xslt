<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/orderData">
        <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Invoice - STUDENTSPHERE</title>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 20px; padding: 20px; }
                    .invoice-container { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
                    h1, h2 { color: #333; }
                    .header { text-align: center; margin-bottom: 20px; }
                    .details, .items { margin-bottom: 20px; }
                    .items table { width: 100%; border-collapse: collapse; }
                    .items th, .items td { padding: 10px; border-bottom: 1px solid #ddd; text-align: left; }
                    .total { text-align: right; font-weight: bold; margin-top: 20px; }
                </style>
            </head>
            <body>
                <div class="invoice-container">
                    <div class="header">
                        <h1>STUDENTSPHERE</h1>
                        <h2>Invoice</h2>
                    </div>
                    <div class="details">
                        <p><strong>User:</strong> <xsl:value-of select="user"/></p>
                        <p><strong>Payment Type:</strong> <xsl:value-of select="paymentType"/></p>
                        <p><strong>Address:</strong> <xsl:value-of select="address"/></p>
                    </div>
                    <div class="items">
                        <table>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                            <xsl:for-each select="cartItem">
                                <tr>
                                    <td><xsl:value-of select="product/productName"/></td>
                                    <td><xsl:value-of select="product/categories"/></td>
                                    <td>$<xsl:value-of select="product/productPrice"/></td>
                                    <td><xsl:value-of select="quantity"/></td>
                                    <td>$<xsl:value-of select="product/productPrice * quantity"/></td>
                                </tr>
                            </xsl:for-each>
                        </table>
                    </div>
                    <div class="total">
                        <p>Total: $<xsl:value-of select="totalPrice"/></p>
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
