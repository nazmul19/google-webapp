function doGet(){
    var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/18DBNoNasaN1shnTdftU6b94IG6JjzQ2WRw_jXFj_xGQ/edit#gid=0");
    var ws = ss.getSheetByName("data");
    var template = HtmlService.createTemplateFromFile("page");
    template.data = ws.getDataRange().getValues();
    return template.evaluate();
}

function include(filename){
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function generateCertificate(i){
    var htmlOutput = HtmlService
        .createHtmlOutput('<p>A change of speed, a change of style...</p>')
        .setWidth(250)
        .setHeight(300);
        SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'My add-on');
}