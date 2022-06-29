var reportsWidget = {
  options: {
    containerSelector: ".reports",
    template:
      "{{#.}}" +
      '<article class="reports_item">' +
        '<a class="reports_image" href="{{cover}}" target="_blank">' +
            '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
        "</a>" +
        '<footer class="reports_docs">' +
            "{{#documents}}" +
            '<h3 class="reports_title">' +
                '<a class="reports_name" href="{{url}}" target="_blank">{{title}}</a>' +
                '<a class="reports_details" href="{{url}}" target="_blank"> ({{file_size}} {{file_type}})</a>' +
            "</h3>" +
            "{{/documents}}" +
        "</footer>" +
      "</article>" +
      "{{/.}}",
  },

  init: function () {
    this.renderReports(reportData || []);
  },

  renderReports: function (reports) {
    var inst = this,
      options = inst.options;

    $(options.containerSelector).html(
      Mustache.render(options.template, reports)
    );
  },
};

reportsWidget.init();
