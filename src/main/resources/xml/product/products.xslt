<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <!-- Template principal -->
    <xsl:template match="/">
        {
        "products": [
        <xsl:for-each select="products/product">
            {
            "produitId": "<xsl:value-of select="produitId"/>",
            "categories": "<xsl:value-of select="categories"/>",
            "product_name": "<xsl:value-of select="product_name"/>",
            "product_img": "<xsl:value-of select="product_img"/>",
            "product_price": "<xsl:value-of select="product_price"/>",
            "baseColor": "<xsl:value-of select="baseColor"/>",
            "description": "<xsl:value-of select="description"/>",
            "gender": "<xsl:value-of select="gender"/>",
            "subCategory": "<xsl:value-of select="subCategory"/>",
            "vendeurId": "<xsl:value-of select="vendeurId"/>"
            }
            <xsl:if test="position() != last()">,</xsl:if>
        </xsl:for-each>
        ]
        }
    </xsl:template>
</xsl:stylesheet>
