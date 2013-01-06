/*
################################################################################
#                 Copyright (C) 2013  Diego Rabatone Oliveira                  #
#                      <diraol(at)diraol(dot)eng(dot)br>                       #
#                                                                              #
#    This program is free software: you can redistribute it and/or modify      #
# it under the terms of the GNU Affero General Public License as published by  #
#      the Free Software Foundation, either version 3 of the License, or       #
#                     (at your option) any later version.                      #
#                                                                              #
#       This program is distributed in the hope that it will be useful,        #
#       but WITHOUT ANY WARRANTY; without even the implied warranty of         #
#        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         #
#             GNU Affero General Public License for more details.              #
#                                                                              #
#  You should have received a copy of the GNU Affero General Public License    #
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.     #
################################################################################
*/
/* Cycle plugin for home page */
$(document).ready(function(){
    var onBefore = function(curr, next, opts, fwd) {
        jQuery(next).find('.slideMsgs.double').find('h1').css({'display':'none', 'left':'-999px', 'opacity': 0});
        jQuery(next).find('.slideMsgs.double').find('h4').css({'display':'none', 'left':'-999px', 'opacity': 0});
    }

    var onAfter = function(curr, next, opts, fwd) {
        var width = $(document).width() - 980;
        var h1Height = jQuery(this).find('.slideMsgs.double').find('h1').height(true);
        jQuery(this).find('.slideMsgs.double').find('h1').css('display', 'block').delay(100).animate({'left': ((width / 2) + 70) +'px', 'opacity': 1}, 400, 'easeInQuad');
        jQuery(this).find('.slideMsgs.double').find('h4').css({display: 'block', top: h1Height + 'px'}).delay(400).animate({'left': ((width / 2) + 70) +'px', 'opacity': 1}, 250, 'easeInQuad');
    }

    if ($('#slides').length > 0){
        $('#slides').cycle({
            fx: 'scrollHorz',
            speed: 500,
            timeout: 5000,
            pause: 1,
            rev: 1,
            randomizeEffects: false,
            easing: 'easeInQuad', //jquery.easing library/plugin is required for this functionality
            next: '#sliderCtrls .next',
            prev: '#sliderCtrls .prev',
            before: onBefore,
            after: onAfter,
            pager: '',
            cleartypeNoBg: true
        });
    }
    /* slider controls position inside the page*/
    var left = Math.ceil((($(document).width()) - 980) / 2);
    $('#sliderCtrls').css('left', left+'px');
});
