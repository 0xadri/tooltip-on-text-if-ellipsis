/*
 *  Title: Tooltip to ellipsis
 *
 *  Created by: Adrien Berthou
 *
 *  Description: Adds a tooltip to any text having an ellipsis
 *
 *  Module strategy based on :
 *  - comment of Maciej Baron on www.impressivewebs.com/my-current-javascript-design-pattern
 *  - presentation from Paul Irish https://www.youtube.com/watch?v=i_qE1iAmjFg
 *
 */
// requires jQuery
;(function(tooltipOnTextIfEllipsis, window, document, undefined) {

    var isEllipsisActive = function (e) {
        return (e.offsetWidth < e.scrollWidth);
    }

    tooltipOnTextIfEllipsis.setup = function( tagSelectorPotentiallyHavingEllipsis ) {

        $(tagSelectorPotentiallyHavingEllipsis).each(function() {
            if (isEllipsisActive($(this)[0]) && !$(this).attr('title')) {
                var tooltipVal = $(this).val() || $(this).text();  /* use JS truthy & falsy values */
                $(this).attr('title', tooltipVal);
                /* $(this).css('border-bottom', '1px dotted #A8A8A8'); */
            }
        });

    }

}(window.tooltipOnTextIfEllipsis = window.tooltipOnTextIfEllipsis || {}, this, this.document));
