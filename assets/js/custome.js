



//jquery selector
// $(document).ready(function(){
    

//     $('#demo').html('hello');

//     $('.first').html('textcontent changed');

// })


// jquery events

$(document).ready(function(){
    $('h1').click(() => {
        $('h1').hide()
    })
    $('button').click(()=>{
        $('h1').show()
    })


    $('.hide').click(()=>{
        $('.box').hide(1000)
    })
    $('.show').click(()=>{
        $('.box').show(1000)
    })
    $('.toggle').click(()=>{
        $('.box').toggle(1000)
    })
    $('.slideUp').click(()=>{
        $('.box').slideUp(1000)
    })
    $('.slideDown').click(()=>{
        $('.box').slideDown(1000)
    })
    $('.slideToggle').click(()=>{
        $('.box').slideToggle(1000)
    })
    $('.fadeIn').click(()=>{
        $('.box').fadeIn(1000,()=>{
            alert('the box faded in now you can fade it out by clicking fadeOut button')
        });
    })
    $('.fadeOut').click(()=>{
        $('.box').fadeOut(1000)
    })
    $('.fadeToggle').click(()=>{
        $('.box').fadeToggle(1000)
    })
    $('.fadeTo').click(()=>{
        $('.box').fadeTo('slow',.15)
    })
})



// $('input').on('focus', function(){
//     $(this).val('right php')
// })
// $('input').on('blur', function(){
//     $(this).val('right MYSQL')
// })



// $('input').on('blur', function(){

//     let val = $(this).val('')
//     if(val == ''){

//         $(this).val('right MYSQL')
//     }else{
//         $(this).val('')
//     }
// });





//jquery on event 
$(document).ready(function(){
    $(".on-event").on({
        mouseenter: function(){
          $(this).css("background-color", "lightgray",);
        },
        mouseleave: function(){
          $(this).css("background-color", "lightblue");
        },
        click: function(){
          $(this).css("background-color", "yellow");
        }
      });
})


//jquery animate method


//jquery getter & setter
//getter
// let aa = $('h2').text('');
// let bb = $('h3').html('');
// let cc = $('input').val('');
// let dd = $('input').attr('type');
// console.log(aa)
// console.log(bb)
// console.log(cc)
// console.log(dd)

//setter
// $('h2').text('ami kamon');
// $('h3').html('tumi kamon');
// $('input').val('rrrrrrr');
// $('input').attr('type','text');


//jquery add
$(document).ready(()=>{
    $('.append').on('click',()=>{
        $('.js-add p').append('goodbye')
    })
    $('.prepend').on('click',()=>{
        $('.js-add p').prepend('goodbye')
    })
    $('.before').on('click',()=>{
        $('.js-add p').before('<span>how are you</span>')
    })
    $('.after').on('click',()=>{
        $('.js-add p').after('<span>how are you</span>')
    })
})



//jquery remove
$('.first').remove();
$('.second').empty('');


//jquery css classes
$(document).ready(()=>{
    $('.add').on('click',()=>{
        $('h4').addClass('css-class')
    })
    $('.remove').on('click',()=>{
        $('h4').removeClass('css-class')
    })
    $('.style-toggle').on('click',()=>{
        $('h4').toggleClass('css-class')
    })
})



