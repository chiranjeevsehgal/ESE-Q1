from lxml import etree
import xmlschema

xml_file = "c_canine.xml"
xsd_file = "c_canine.xsd"
xsl_file = "c_canine.xsl"

validator = xmlschema.XMLSchema(xsd_file)

if validator.is_valid(xml_file):
    print("XML file is valid.")
    xml_tree = etree.parse(xml_file)
    xsl_tree = etree.parse(xsl_file)

    transform = etree.XSLT(xsl_tree)
    html_result = transform(xml_tree)
    
    with open("c_canine.html", "wb") as html_file:
        html_file.write(etree.tostring(html_result, pretty_print=True))

    print("XML to HTML transformation complete.")

else:
    print("XML file is not valid.")
    print(validator.validate(xml_file))




