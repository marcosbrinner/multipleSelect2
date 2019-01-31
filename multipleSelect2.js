(function ($) {
    $.fn.multipleSelect2 = function (options) {
        var settings = $.extend({
            data: null,
            value: null,
            width: "half",
            resort: true,
            template: null,
            selectionTemplate: null,
            onSelect: null,
            onDeselect: null,
            avaliableText: 'Avalibable',
            selectedText: 'Selected',
            disabled: false
        }, options);
        var fistElement = null;
        var secondElement = null;
        var element = $(this[0]).addClass("multipleSelect2");
        var createBase = function (element) {
            element.html(""
                + "<div class='multipleSelect2-" + settings.width + "'>"
                + "<div class='label avalibleLable'>"
                + "<span>" + settings.avaliableText + "</span>"
                + "<button type='button'></button>"
                + "</div>"
                + "<div class='thisInner'>"
                + "<ul class='firstColumn'></ul>"
                + "</div>"
                + "</div>"
                + "<div class='multipleSelect2-right multipleSelect2-" + settings.width + "'>"
                + "<div class='label selectedLable'>"
                + "<span>" + settings.selectedText + "</span>"
                + "<button type='button'></button>"
                + "</div>"
                + "<div class='thisInner'>"
                + "<ul class='secondColumn'></ul>"
                + "</div>"
                + "</div>");
        };
        var selectOne = function () {
            if (settings.disabled)
                return;
            var _this = $(this);
            var _value = settings.data[_this.data('inc')];
            if (settings.onSelect != null) {
                settings.onSelect(_this, _value);
            }
            secondElement.prepend(_this.bind("click", deselectOne));
        };
        var deselectOne = function () {
            if (settings.disabled)
                return;
            var _this = $(this);
            var _value = settings.data[_this.data('inc')];
            if (settings.onDeselect != null) {
                settings.onDeselect(_this, _value);
            }
            fistElement.prepend(_this.bind("click", selectOne));
        };

        var getSelectedItens = function () {
            var temp = secondElement.find("li[data-inc]");
            var _data = [];
            $.each(temp, function (k, v) {
                var _this = $(temp[k]).data('inc');
                _data.push(settings.data[_this]);
            });
            return _data;
        };
        var getSelection = function () {
            var temp = getSelectedItens();
            var _data = [];
            $.each(temp, function (k, v) {
                var _this = temp[k].Value;
                _data.push(_this);
            });
            return _data;
        };

        var selectAll = function () {
            if (settings.disabled)
                return;
            var elements = fistElement.find("[data-inc]");
            $.each(elements, function (k, v) {
                var _this = $(elements[k]);
                var _value = settings.data[_this.data('inc')];
                if (settings.onSelect != null) {
                    settings.onSelect(_this, _value);
                }
                secondElement.prepend(_this.bind("click", deselectOne));
            });
        }

        var deselectAll = function () {
            if (settings.disabled)
                return;
            var elements = secondElement.find("[data-inc]");
            $.each(elements, function (k, v) {
                var _this = $(elements[k]);
                var _value = settings.data[_this.data('inc')];
                if (settings.onSelect != null) {
                    settings.onSelect(_this, _value);
                }
                fistElement.prepend(_this.bind("click", selectOne));
            });
        }

        var getSelectionByTemplate = function () {
            var temp = getSelectedItens();
            var _data = [];
            $.each(temp, function (k, v) {
                var _this = temp[k];
                _data.push(settings.selectionTemplate(_this));
            });
            return _data;
        };

        var Start = function () {
            createBase(element);
            fistElement = element.find(".firstColumn");
            secondElement = element.find(".secondColumn");
            if (settings.template != null) {
                $.each(settings.data, function (dk, dv) {
                    fistElement.append("<li data-inc='" + dk + "'>" + settings.template(settings.data[dk]) + "</li>");
                });
            } else {
                $.each(settings.data, function (dk, dv) {
                    fistElement.append("<li data-inc='" + dk + "'>" + settings.data[dk].Text + "</li>");
                });
            }
            fistElement.find('li[data-inc]').bind("click", selectOne);
            element.find('.avalibleLable button').bind("click", selectAll);
            element.find('.selectedLable button').bind("click", deselectAll);
        };
        Start();

        return {
            getItens: function () {
                if (settings.selectionTemplate == null) {
                    return getSelection();
                } else {
                    return getSelectionByTemplate();
                }
            },

            countItens: function () {
                return getSelectedItens().length;
            },

            anyItem: function () {
                if (getSelectedItens().length > 0) {
                    return true;
                } else {
                    return false;
                }
            },

            disable: function (value) {
                settings.disabled = value;
            }
        };

    }
}(jQuery));