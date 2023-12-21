/* Handles and check access-token validation
 */
import createReducer from '../../lib/createReducer';
import * as types from './../startup/types';


let _dummy = {
  "id": 407,
  "name": "Jardiance Met 12.5 mg/1000 mg",
  "slug": "jardiance-met-12-5-mg-1000-mg",
  "permalink": "https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/",
  "date_created": "2023-02-05T08:20:10",
  "date_created_gmt": "2023-02-05T08:20:10",
  "date_modified": "2023-02-05T08:30:58",
  "date_modified_gmt": "2023-02-05T08:30:58",
  "type": "simple",
  "status": "publish",
  "featured": false,
  "catalog_visibility": "visible",
  "description": "",
  "short_description": "<p class=\"MedicalDescription_contentToBeShown__vbYaa\">Jardiance Met 12.5mg/1000mg tablet is an anti-diabetic medication. It contains a combination of empagliflozin and metformin as active substances. Jardiance Met 12.5mg/1000mg tablet is used for the ma</p>\n<p class=\"MedicalDescription_readMoreTarget__XSPzK\">nagement of type 2 diabetes in adults along with diet and exercise. Type 2 diabetes is a condition where your pancreas does not make enough insulin to effectively control the blood sugar level and your body is unable to use its own insulin effectively. This medicine works by lowering the blood sugar level. Take Jardiance Met 12.5mg/1000mg tablet in the exact dose and duration as prescribed by your doctor. Before starting this medicine, inform your doctor if you are pregnant/breastfeeding and about your complete medical history. It is important to make certain lifestyle changes like having a balanced diet and regular exercise along with this medicine to help to manage blood sugar levels better.</p>\n",
  "sku": "",
  "price": "357",
  "regular_price": "420",
  "sale_price": "357",
  "date_on_sale_from": null,
  "date_on_sale_from_gmt": null,
  "date_on_sale_to": null,
  "date_on_sale_to_gmt": null,
  "on_sale": true,
  "purchasable": true,
  "total_sales": 0,
  "virtual": false,
  "downloadable": false,
  "downloads": [],
  "download_limit": -1,
  "download_expiry": -1,
  "external_url": "",
  "button_text": "",
  "tax_status": "taxable",
  "tax_class": "",
  "manage_stock": false,
  "stock_quantity": null,
  "backorders": "no",
  "backorders_allowed": false,
  "backordered": false,
  "low_stock_amount": null,
  "sold_individually": false,
  "weight": "0.01",
  "dimensions": {
    "length": "22",
    "width": "22",
    "height": "22"
  },
  "shipping_required": true,
  "shipping_taxable": true,
  "shipping_class": "",
  "shipping_class_id": 0,
  "reviews_allowed": false,
  "average_rating": "0.00",
  "rating_count": 0,
  "upsell_ids": [
    399
  ],
  "cross_sell_ids": [
    194,
    175,
    187,
    105
  ],
  "parent_id": 0,
  "purchase_note": "",
  "categories": [
    {
      "id": 17,
      "name": "Allopathy Medicines",
      "slug": "medicines"
    }
  ],
  "tags": [
    {
      "id": 44,
      "name": "Diabetes",
      "slug": "diabetes"
    },
    {
      "id": 396,
      "name": "Empagliflozin",
      "slug": "empagliflozin"
    },
    {
      "id": 397,
      "name": "Jardiance",
      "slug": "jardiance"
    },
    {
      "id": 398,
      "name": "medicine",
      "slug": "medicine"
    },
    {
      "id": 395,
      "name": "Metformin",
      "slug": "metformin"
    }
  ],
  "images": [
    {
      "id": 414,
      "date_created": "2023-02-05T08:26:38",
      "date_created_gmt": "2023-02-05T08:26:38",
      "date_modified": "2023-02-05T08:26:38",
      "date_modified_gmt": "2023-02-05T08:26:38",
      "src": "https://www.shop.darjeelingtour.in/wp-content/uploads/2023/02/jardiance_met_12_5_1000mg_tablet_10_s_0.jpg",
      "name": "jardiance_met_12_5_1000mg_tablet_10_s_0",
      "alt": ""
    },
    {
      "id": 408,
      "date_created": "2023-02-05T08:15:26",
      "date_created_gmt": "2023-02-05T08:15:26",
      "date_modified": "2023-02-05T08:15:26",
      "date_modified_gmt": "2023-02-05T08:15:26",
      "src": "https://www.shop.darjeelingtour.in/wp-content/uploads/2023/02/Jardiance1.jpg",
      "name": "Jardiance1",
      "alt": ""
    },
    {
      "id": 409,
      "date_created": "2023-02-05T08:15:28",
      "date_created_gmt": "2023-02-05T08:15:28",
      "date_modified": "2023-02-05T08:15:28",
      "date_modified_gmt": "2023-02-05T08:15:28",
      "src": "https://www.shop.darjeelingtour.in/wp-content/uploads/2023/02/Jardiance2.jpg",
      "name": "Jardiance2",
      "alt": ""
    },
    {
      "id": 410,
      "date_created": "2023-02-05T08:15:29",
      "date_created_gmt": "2023-02-05T08:15:29",
      "date_modified": "2023-02-05T08:15:29",
      "date_modified_gmt": "2023-02-05T08:15:29",
      "src": "https://www.shop.darjeelingtour.in/wp-content/uploads/2023/02/jardiance3.jpg",
      "name": "jardiance3",
      "alt": ""
    },
    {
      "id": 411,
      "date_created": "2023-02-05T08:15:31",
      "date_created_gmt": "2023-02-05T08:15:31",
      "date_modified": "2023-02-05T08:15:31",
      "date_modified_gmt": "2023-02-05T08:15:31",
      "src": "https://www.shop.darjeelingtour.in/wp-content/uploads/2023/02/jardiance4.jpg",
      "name": "jardiance4",
      "alt": ""
    }
  ],
  "attributes": [],
  "default_attributes": [],
  "variations": [],
  "grouped_products": [],
  "menu_order": 0,
  "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#8377;</span>420.00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#8377;</span>357.00</bdi></span></ins>",
  "related_ids": [
    13,
    162,
    167,
    399,
    194
  ],
  "meta_data": [
    {
      "id": 1539,
      "key": "asin",
      "value": "B082W9J6DQ"
    },
    {
      "id": 1540,
      "key": "_asin",
      "value": "field_63dbedf94095d"
    },
    {
      "id": 1541,
      "key": "country_of_origin",
      "value": "India"
    },
    {
      "id": 1542,
      "key": "_country_of_origin",
      "value": "field_63dbee8bb6b1f"
    },
    {
      "id": 1543,
      "key": "manufacturer",
      "value": "Boehringer Ingelheim Pharma Gmbh & Co. Kg"
    },
    {
      "id": 1544,
      "key": "_manufacturer",
      "value": "field_63dbf52c1c976"
    },
    {
      "id": 1545,
      "key": "brand",
      "value": "Jardiance Met"
    },
    {
      "id": 1546,
      "key": "_brand",
      "value": "field_63dbf5441c977"
    },
    {
      "id": 1547,
      "key": "hsn_code",
      "value": ""
    },
    {
      "id": 1548,
      "key": "_hsn_code",
      "value": "field_63dbf5501c978"
    },
    {
      "id": 1549,
      "key": "manufacturer_address",
      "value": ""
    },
    {
      "id": 1550,
      "key": "_manufacturer_address",
      "value": "field_63dbf5721c979"
    },
    {
      "id": 1551,
      "key": "returnable",
      "value": "Not Returnable"
    },
    {
      "id": 1552,
      "key": "_returnable",
      "value": "field_63dbf5a21c97a"
    },
    {
      "id": 1553,
      "key": "material",
      "value": ""
    },
    {
      "id": 1554,
      "key": "_material",
      "value": "field_63dbf79e5882b"
    },
    {
      "id": 1555,
      "key": "color",
      "value": "White"
    },
    {
      "id": 1556,
      "key": "_color",
      "value": "field_63dbf7ab5882c"
    },
    {
      "id": 1557,
      "key": "style",
      "value": ""
    },
    {
      "id": 1558,
      "key": "_style",
      "value": "field_63dbfc5a1b200"
    },
    {
      "id": 1559,
      "key": "cash_on_delivery",
      "value": "1"
    },
    {
      "id": 1560,
      "key": "_cash_on_delivery",
      "value": "field_63dbfc651b201"
    },
    {
      "id": 1561,
      "key": "net_quantity",
      "value": "10"
    },
    {
      "id": 1562,
      "key": "_net_quantity",
      "value": "field_63dc01116b060"
    },
    {
      "id": 1563,
      "key": "label",
      "value": "Bestseller"
    },
    {
      "id": 1564,
      "key": "_label",
      "value": "field_63dd5673e0d93"
    },
    {
      "id": 1565,
      "key": "delivery",
      "value": "1 day"
    },
    {
      "id": 1566,
      "key": "_delivery",
      "value": "field_63dd5732d9084"
    },
    {
      "id": 1567,
      "key": "model_number",
      "value": ""
    },
    {
      "id": 1568,
      "key": "_model_number",
      "value": "field_63dbf6e9504fc"
    },
    {
      "id": 1569,
      "key": "model_name",
      "value": ""
    },
    {
      "id": 1570,
      "key": "_model_name",
      "value": "field_63dbf706504fd"
    },
    {
      "id": 1571,
      "key": "part_number",
      "value": ""
    },
    {
      "id": 1572,
      "key": "_part_number",
      "value": "field_63dbf712504fe"
    },
    {
      "id": 1573,
      "key": "product_features",
      "value": ""
    },
    {
      "id": 1574,
      "key": "_product_features",
      "value": "field_63dbf71f504ff"
    },
    {
      "id": 1575,
      "key": "warranty",
      "value": ""
    },
    {
      "id": 1576,
      "key": "_warranty",
      "value": "field_63dbf74050500"
    },
    {
      "id": 1577,
      "key": "components_included",
      "value": ""
    },
    {
      "id": 1578,
      "key": "_components_included",
      "value": "field_63dbf98058b86"
    },
    {
      "id": 1579,
      "key": "model_year",
      "value": ""
    },
    {
      "id": 1580,
      "key": "_model_year",
      "value": "field_63dbf99658b87"
    },
    {
      "id": 1581,
      "key": "battery_composition",
      "value": ""
    },
    {
      "id": 1582,
      "key": "_battery_composition",
      "value": "field_63dbf9ad58b88"
    },
    {
      "id": 1583,
      "key": "importer",
      "value": ""
    },
    {
      "id": 1584,
      "key": "_importer",
      "value": "field_63dbfbf2c61c8"
    },
    {
      "id": 1585,
      "key": "display",
      "value": ""
    },
    {
      "id": 1586,
      "key": "_display",
      "value": "field_63dc00867dd72"
    },
    {
      "id": 1587,
      "key": "resolution",
      "value": ""
    },
    {
      "id": 1588,
      "key": "_resolution",
      "value": "field_63dc00977dd73"
    },
    {
      "id": 1589,
      "key": "os",
      "value": ""
    },
    {
      "id": 1590,
      "key": "_os",
      "value": "field_63dc00a37dd74"
    },
    {
      "id": 1591,
      "key": "uses",
      "value": "<div class=\"SubSection_section__y3rQh\">\r\n<div class=\"Text_text__i_fng\">Jardiance Met 12.5mg/1000mg tablet is used to manage type 2 diabetes mellitus along with diet and exercise:</div>\r\n</div>\r\n<div class=\"SubSection_section__y3rQh\">\r\n<ul class=\"List_list__rx_Xk\">\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">in adults whose diabetes is not adequately controlled by metformin alone or metformin with other medicines for diabetes.</div></li>\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">in patients already being treated with a combination of empagliflozin and metformin as separate medicines.</div></li>\r\n</ul>\r\n</div>"
    },
    {
      "id": 1592,
      "key": "_uses",
      "value": "field_63d64d19159f2"
    },
    {
      "id": 1593,
      "key": "side_effects",
      "value": "<ul class=\"List_list__rx_Xk\">\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">Nausea</div></li>\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">Vomiting</div></li>\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">Abdominal pain</div></li>\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">Diarrhoea</div></li>\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">Loss of appetite</div></li>\r\n</ul>"
    },
    {
      "id": 1594,
      "key": "_side_effects",
      "value": "field_63da3babe928f"
    },
    {
      "id": 1595,
      "key": "indications",
      "value": "<ul class=\"List_list__rx_Xk\">\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">If you are allergic to empagliflozin, metformin or any of the other ingredients of Jardiance Met 12.5mg/1000mg tablet.</div></li>\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">If you have any type of metabolic acidosis (a condition where there is too much acid in the body fluids) like lactic acidosis or diabetic ketoacidosis.</div></li>\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">If you had a diabetic pre-coma.</div></li>\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">If you have kidney failure or liver problems.</div></li>\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">If you have any condition which may affect your kidneys like severe infection, dehydration (due to severe vomiting/diarrhoea or less fluid intake) or shock.</div></li>\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">If you have any disease which may cause a deficiency of oxygen supply to the tissues, like heart failure, respiratory failure, recent heart attack or shock.</div></li>\r\n \t<li>\r\n<div class=\"Text_text__i_fng List_text__7rJzx\">If you drink large amounts of alcohol.</div></li>\r\n</ul>"
    },
    {
      "id": 1596,
      "key": "_indications",
      "value": "field_63da3c467f720"
    },
    {
      "id": 1597,
      "key": "dosage",
      "value": "Always take JARDIANCE MET 12.5/1000MG TABLET as directed by your physician. Swallow the medicine as a whole and do not crush or chew the medicine. Your doctor will decide the correct dose and duration for you depending upon your age, body weight and disease condition. Do not stop taking JARDIANCE MET 12.5/1000MG TABLET without informing your doctor.\r\n\r\n&nbsp;\r\n\r\n&nbsp;"
    },
    {
      "id": 1598,
      "key": "_dosage",
      "value": "field_63da3c647f721"
    },
    {
      "id": 1599,
      "key": "precautions",
      "value": "<div id=\"np_tab9_1\" class=\"druginfo_cont druginfo-dv active\">\r\n<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n<div class=\"inner-content\">\r\n<h4>PREGNANCY</h4>\r\nJARDIANCE MET 12.5/1000MG TABLET is not recommended for use in pregnant women. Consult your doctor before taking JARDIANCE MET 12.5/1000MG TABLET.\r\n\r\n</div>\r\n<div class=\"clear1\"></div>\r\n</div>\r\n</div>\r\n</div>\r\n<div id=\"np_tab9_2\" class=\"druginfo_cont druginfo-dv active\">\r\n<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n<div class=\"inner-content\">\r\n<h4>BREASTFEEDING</h4>\r\nJARDIANCE MET 12.5/1000MG TABLET is not recommended for use in breastfeeding women. Consult your doctor before taking JARDIANCE MET 12.5/1000MG TABLET.\r\n\r\n</div>\r\n<div class=\"clear1\"></div>\r\n</div>\r\n</div>\r\n</div>\r\n<div id=\"np_tab9_3\" class=\"druginfo_cont druginfo-dv active\">\r\n<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n<div class=\"inner-content\">\r\n<h4>DRIVING AND USING MACHINES</h4>\r\nDo not drive or operate any tools or machines if you experience dizziness after taking JARDIANCE MET 12.5/1000MG TABLET.\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div id=\"np_tab9_4\" class=\"druginfo_cont druginfo-dv active\">\r\n<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n<div class=\"inner-content\">\r\n<h4>ALCOHOL</h4>\r\nAvoid consumption of alcohol while taking JARDIANCE MET 12.5/1000MG TABLET since it may increase the risk of lactic acidosis.\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div id=\"np_tab9_5\" class=\"druginfo_cont druginfo-dv active\">\r\n<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n<div class=\"inner-content\">\r\n<h4>KIDNEY</h4>\r\nJARDIANCE MET 12.5/1000MG TABLET is not recommended for use in patients with severe kidney disease. Consult your doctor before taking JARDIANCE MET 12.5/1000MG TABLET.\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div id=\"np_tab9_6\" class=\"druginfo_cont druginfo-dv active\">\r\n<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n<div class=\"inner-content\">\r\n<h4>LIVER</h4>\r\nJARDIANCE MET 12.5/1000MG TABLET is not recommended for use in patients with liver problems. Consult your doctor before taking JARDIANCE MET 12.5/1000MG TABLET.\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div id=\"np_tab9_7\" class=\"druginfo_cont druginfo-dv active\">\r\n<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n<div class=\"inner-content\">\r\n<h4>ALLERGY</h4>\r\nDo not take JARDIANCE MET 12.5/1000MG TABLET if you are allergic to Empagliflozin or Metformin.\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div id=\"np_tab9_9\" class=\"druginfo_cont druginfo-dv active\">\r\n<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n<div class=\"inner-content\">\r\n<h4>HEART DISEASE</h4>\r\nJARDIANCE MET 12.5/1000MG TABLET is not recommended for use in patients with heart problems (such as recent heart attack or failure, cardiogenic shock (problems in blood circulation) or abnormal breathing). Consult your doctor before taking JARDIANCE MET 12.5/1000MG TABLET.\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div id=\"np_tab9_10\" class=\"druginfo_cont druginfo-dv active\">\r\n<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n<div class=\"inner-content\">\r\n<h4>OTHERS</h4>\r\nJARDIANCE MET 12.5/1000MG TABLET is not recommended for use if you:\r\n<ul>\r\n \t<li>Have uncontrolled diabetes with nausea, vomiting, rapid weight loss, diarrhea, lactic acidosis (lactic acid build up in the bloodstream) or ketoacidosis (ketone bodies accumulate in the blood)</li>\r\n \t<li>Have ever had a diabetic pre-coma</li>\r\n \t<li>Have severe systemic infections affecting your lungs or kidneys</li>\r\n \t<li>Have severe dehydration (either due to vomiting or diarrhea)</li>\r\n \t<li>Are alcoholic</li>\r\n \t<li>Have type I diabetes</li>\r\n \t<li>Have an upcoming major surgery</li>\r\n</ul>\r\nBefore taking JARDIANCE MET 12.5/1000MG TABLET inform your doctor if you:\r\n<ul>\r\n \t<li>Need to undergo an examination with iodination contrast agents (Ex. X-ray or scan)</li>\r\n</ul>\r\n<strong>Use in pediatrics:</strong>\r\n\r\nJARDIANCE MET 12.5/1000MG TABLET is generally not recommended for use in children and adolescents (under 18 years of age). Consult your child’s doctor for advice.\r\n\r\n<strong>Use in geriatrics:</strong>\r\n\r\nJARDIANCE MET 12.5/1000MG TABLET should be used with caution in elderly patients (aged 65 years or above). Your doctor may assess your kidney function more frequently during treatment with JARDIANCE MET 12.5/1000MG TABLET. Consult your doctor before taking JARDIANCE MET 12.5/1000MG TABLET\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</div>"
    },
    {
      "id": 1600,
      "key": "_precautions",
      "value": "field_63da3c947f722"
    },
    {
      "id": 1601,
      "key": "storage",
      "value": "<ul>\r\n \t<li>Keep JARDIANCE MET 12.5/1000MG TABLET out of reach of children</li>\r\n \t<li>Store at room temperature</li>\r\n</ul>"
    },
    {
      "id": 1602,
      "key": "_storage",
      "value": "field_63da3d5ed4fac"
    },
    {
      "id": 1603,
      "key": "prescription",
      "value": "1"
    },
    {
      "id": 1604,
      "key": "_prescription",
      "value": "field_63dbefd8780a5"
    },
    {
      "id": 1605,
      "key": "pack_size",
      "value": "10 Tablet(s) in Strip"
    },
    {
      "id": 1606,
      "key": "_pack_size",
      "value": "field_63dbf66893434"
    },
    {
      "id": 1607,
      "key": "composition",
      "value": "Empagliflozin(12.5 Mg) + Metformin(1000.0 Mg)"
    },
    {
      "id": 1608,
      "key": "_composition",
      "value": "field_63dbf67a93435"
    },
    {
      "id": 1609,
      "key": "ingredient",
      "value": ""
    },
    {
      "id": 1610,
      "key": "_ingredient",
      "value": "field_63dbf69593436"
    },
    {
      "id": 1611,
      "key": "best_before",
      "value": "31 DEC 2023"
    },
    {
      "id": 1612,
      "key": "_best_before",
      "value": "field_63dbfd4ef06eb"
    },
    {
      "id": 1613,
      "key": "interactions",
      "value": "<strong>A. Drug-Drug interactions:</strong>\r\n\r\nBefore taking JARDIANCE MET 12.5/1000MG TABLET inform your doctor, if you are taking any of these medicines:\r\n<ul>\r\n \t<li>Diuretics (medicines used to increase urine output) Ex. furosemide, chlorothiazide, hydrochlorothiazide</li>\r\n \t<li>Other medicines used to treat diabetes (Ex. insulin, glipizide, glyburide<strong>, </strong>glimepiride)</li>\r\n \t<li>Cimetidine (used to treat stomach ulcers)</li>\r\n \t<li>Verapamil, ranolazine (used to treat chest pain)</li>\r\n \t<li>Dolutegravir (used to treat HIV infection)</li>\r\n \t<li>Trimethoprim (used to treat bacterial infection)</li>\r\n \t<li>Isavuconazole (used to treat fungal infection)</li>\r\n \t<li>Crizotinib, olaparib, vandetanib (used to treat certain forms of cancer)</li>\r\n \t<li>Bronchodilators (used to treat asthma) Ex. salbutamol, salmeterol, formoterol, ipratropium</li>\r\n \t<li>Corticosteroids (used to treat inflammation) Ex. dexamethasone, prednisolone</li>\r\n \t<li>Medicines used to treat pain and inflammation (such as ibuprofen and celecoxib)</li>\r\n \t<li>Medicines used to treat high blood pressure (Ex. captopril, enalapril, losartan, valsartan)</li>\r\n \t<li>Medicines containing alcohol (such as cough syrup)</li>\r\n \t<li>Iodinated contrast agents (used during an X-ray or scan)</li>\r\n</ul>\r\n<strong>Overdosage:</strong>\r\n\r\nIf you or anyone else accidentally take too much of JARDIANCE MET 12.5/1000MG TABLET, contact your doctor immediately or go to the nearest hospital straight away as it could lead to a life-threatening condition called lactic acidosis. Symptoms of lactic acidosis might include nausea, vomiting, stomach pain with muscle cramps, decreased heartbeat, general weakness with severe tiredness, difficulty in breathing or reduced body temperature."
    },
    {
      "id": 1614,
      "key": "_interactions",
      "value": "field_63dc393b9d0be"
    },
    {
      "id": 1615,
      "key": "_dwps_table",
      "value": "0"
    },
    {
      "id": 1616,
      "key": "_yoast_wpseo_primary_product_cat",
      "value": "17"
    },
    {
      "id": 1617,
      "key": "_yoast_wpseo_estimated-reading-time-minutes",
      "value": "0"
    },
    {
      "id": 1618,
      "key": "_yoast_wpseo_wordproof_timestamp",
      "value": ""
    },
    {
      "id": 1620,
      "key": "theraupatic_classification",
      "value": "Type II diabetes mellitus"
    },
    {
      "id": 1621,
      "key": "_theraupatic_classification",
      "value": "field_63df66d3b93f6"
    },
    {
      "id": 1622,
      "key": "dosage_form",
      "value": "Tablets"
    },
    {
      "id": 1623,
      "key": "_dosage_form",
      "value": "field_63df670fb93f7"
    }
  ],
  "stock_status": "instock",
  "has_options": false,
  "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v20.0 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>Jardiance Met 12.5 mg/1000 mg - Asra</title>\n<!-- Admin only notice: this page does not show a meta description because it does not have one, either write it for this page specifically or go into the [Yoast SEO - Settings] menu and set up a template. -->\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"Jardiance Met 12.5 mg/1000 mg - Asra\" />\n<meta property=\"og:description\" content=\"Jardiance Met 12.5mg/1000mg tablet is an anti-diabetic medication. It contains a combination of empagliflozin and metformin as active substances. Jardiance Met 12.5mg/1000mg tablet is used for the ma nagement of type 2 diabetes in adults along with diet and exercise. Type 2 diabetes is a condition where your pancreas does not make enough insulin to effectively control the blood sugar level and your body is unable to use its own insulin effectively. This medicine works by lowering the blood sugar level. Take Jardiance Met 12.5mg/1000mg tablet in the exact dose and duration as prescribed by your doctor. Before starting this medicine, inform your doctor if you are pregnant/breastfeeding and about your complete medical history. It is important to make certain lifestyle changes like having a balanced diet and regular exercise along with this medicine to help to manage blood sugar levels better.\" />\n<meta property=\"og:url\" content=\"https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/\" />\n<meta property=\"og:site_name\" content=\"Asra\" />\n<meta property=\"article:modified_time\" content=\"2023-02-05T08:30:58+00:00\" />\n<meta property=\"og:image\" content=\"https://www.shop.darjeelingtour.in/wp-content/uploads/2023/02/jardiance_met_12_5_1000mg_tablet_10_s_0.jpg\" />\n\t<meta property=\"og:image:width\" content=\"600\" />\n\t<meta property=\"og:image:height\" content=\"600\" />\n\t<meta property=\"og:image:type\" content=\"image/jpeg\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/\",\"url\":\"https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/\",\"name\":\"Jardiance Met 12.5 mg/1000 mg - Asra\",\"isPartOf\":{\"@id\":\"https://www.shop.darjeelingtour.in/#website\"},\"datePublished\":\"2023-02-05T08:20:10+00:00\",\"dateModified\":\"2023-02-05T08:30:58+00:00\",\"breadcrumb\":{\"@id\":\"https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://www.shop.darjeelingtour.in/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Shop\",\"item\":\"https://www.shop.darjeelingtour.in/shop/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Jardiance Met 12.5 mg/1000 mg\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://www.shop.darjeelingtour.in/#website\",\"url\":\"https://www.shop.darjeelingtour.in/\",\"name\":\"Asra\",\"description\":\"Just another WordPress site\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://www.shop.darjeelingtour.in/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"}]}</script>\n<!-- / Yoast SEO plugin. -->",
  "yoast_head_json": {
    "title": "Jardiance Met 12.5 mg/1000 mg - Asra",
    "robots": {
      "index": "index",
      "follow": "follow",
      "max-snippet": "max-snippet:-1",
      "max-image-preview": "max-image-preview:large",
      "max-video-preview": "max-video-preview:-1"
    },
    "canonical": "https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/",
    "og_locale": "en_US",
    "og_type": "article",
    "og_title": "Jardiance Met 12.5 mg/1000 mg - Asra",
    "og_description": "Jardiance Met 12.5mg/1000mg tablet is an anti-diabetic medication. It contains a combination of empagliflozin and metformin as active substances. Jardiance Met 12.5mg/1000mg tablet is used for the ma nagement of type 2 diabetes in adults along with diet and exercise. Type 2 diabetes is a condition where your pancreas does not make enough insulin to effectively control the blood sugar level and your body is unable to use its own insulin effectively. This medicine works by lowering the blood sugar level. Take Jardiance Met 12.5mg/1000mg tablet in the exact dose and duration as prescribed by your doctor. Before starting this medicine, inform your doctor if you are pregnant/breastfeeding and about your complete medical history. It is important to make certain lifestyle changes like having a balanced diet and regular exercise along with this medicine to help to manage blood sugar levels better.",
    "og_url": "https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/",
    "og_site_name": "Asra",
    "article_modified_time": "2023-02-05T08:30:58+00:00",
    "og_image": [
      {
        "width": 600,
        "height": 600,
        "url": "https://www.shop.darjeelingtour.in/wp-content/uploads/2023/02/jardiance_met_12_5_1000mg_tablet_10_s_0.jpg",
        "type": "image/jpeg"
      }
    ],
    "twitter_card": "summary_large_image",
    "schema": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/",
          "url": "https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/",
          "name": "Jardiance Met 12.5 mg/1000 mg - Asra",
          "isPartOf": {
            "@id": "https://www.shop.darjeelingtour.in/#website"
          },
          "datePublished": "2023-02-05T08:20:10+00:00",
          "dateModified": "2023-02-05T08:30:58+00:00",
          "breadcrumb": {
            "@id": "https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/#breadcrumb"
          },
          "inLanguage": "en-US",
          "potentialAction": [
            {
              "@type": "ReadAction",
              "target": [
                "https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/"
              ]
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.shop.darjeelingtour.in/product/jardiance-met-12-5-mg-1000-mg/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.shop.darjeelingtour.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Shop",
              "item": "https://www.shop.darjeelingtour.in/shop/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Jardiance Met 12.5 mg/1000 mg"
            }
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://www.shop.darjeelingtour.in/#website",
          "url": "https://www.shop.darjeelingtour.in/",
          "name": "Asra",
          "description": "Just another WordPress site",
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.shop.darjeelingtour.in/?s={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          ],
          "inLanguage": "en-US"
        }
      ]
    }
  },
  "_links": {
    "self": [
      {
        "href": "https://www.shop.darjeelingtour.in/wp-json/wc/v3/products/407"
      }
    ],
    "collection": [
      {
        "href": "https://www.shop.darjeelingtour.in/wp-json/wc/v3/products"
      }
    ]
  }
}

const initialState = {
  category: [],
  categoryChild: [],
  categoryChild2: [],
  categoryData: [], //holds category data for list page
  detailsData: { dImages: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'] },//holds details page data
  detailImages: 'loading',
  searchData: [],
  detailsLoad: false
};

const shopReducer = createReducer(initialState, {

  [types.SET_SHOP_CATEGORY_CHILD_ACTIVE](state, action) {
    state.categoryChild2.forEach(element => {
      element.clickedItem = false
      if (element.id == action.response) {
        element.clickedItem = true
      }
    });
    return {
      ...state
    };
  },
  [types.SET_SEARCH_PRODUCTS](state, action) {
    return {
      ...state,
      searchData: action.response
    };
  },
  [types.SET_SHOP_CATEGORY](state, action) {
    return {
      ...state,
      category: action.response
    };
  },

  [types.SET_SHOP_CHILD2_CATEGORY_DATA](state, action) {
    console.log('action.response', action.response)
    return {
      ...state,
      categoryChild2: action.response
    };
  },
  [types.SET_SHOP_CHILD_CATEGORY_DATA](state, action) {
    console.log('action.response', action.response)
    return {
      ...state,
      categoryChild: action.response
    };
  },
  [types.SET_SHOP_CATEGORY_DATA](state, action) {
    return {
      ...state,
      categoryData: action.response//[_dummy]//
    };
  },
  [types.SET_SHOP_DETAIL_RESET](state, action) {
    return {
      ...state,
      detailsLoad: false
    };
  },

  [types.SET_SHOP_DETAIL_DATA](state, action) {
    console.log(action)
    let detailImages = []
    action.response.images?.forEach(element => {
      detailImages.push(element.src)
    });
    action.response.dImages = detailImages;

    let relatedProducts = []
    action.response.related_ids?.forEach(element => {
      relatedProducts.push(element)
    });
    action.response.relatedProducts = relatedProducts;

    try {

      action.response.regular_price = parseFloat(action.response.regular_price);
      action.response.sale_price = parseFloat(action.response.sale_price);
      action.response.discounted_price = Math.round(((action.response.regular_price - action.response.sale_price) / (action.response.regular_price)) * 100)
      if (action.response.regular_price == action.response.sale_price) {
        action.response.discounted_price = 0;
      }
    } catch (error) {
      action.response.discounted_price = 0;
      console.log('error', error)
    }

    return {
      ...state,
      detailImages: detailImages,
      detailsData: action.response,
      detailsLoad: true
    };
  },
});
export default shopReducer;
