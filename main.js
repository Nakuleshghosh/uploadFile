 $("form").on("change", ".upload-field", function(){
     $(this).parent(".file-upload").attr("data-text",$(this).val().replace(/.*(\/|\\)/,''));
 })
