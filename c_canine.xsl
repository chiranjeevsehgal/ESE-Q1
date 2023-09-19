<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <title>Canine Details</title>
                <style>
                    #maintable{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        margin: auto;
                        width: 616px;
                    }
                </style>
            </head>
            <body>
                <div id="maintable">
                <h1>Canine Data</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Breed</th>
                            <th>Color</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:apply-templates select="dogs/dog"/>
                    </tbody>
                </table>
                </div>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="dog">
        <tr>
            <td><xsl:value-of select="breed"/></td>
            <td><xsl:value-of select="color"/></td>
            <td><xsl:value-of select="country"/></td>
        </tr>
    </xsl:template>

</xsl:stylesheet>