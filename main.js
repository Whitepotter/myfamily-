var images = ["20181021_144145.jpg","20190926_204201.jpg", "20210124_193015(1).jpg" , "20200212_111643.jpg", "20200212_110451.jpg" ];
var names = ["Family book","Neha Jain", "Surendra Jain", "Diti Jain", "Aashi Jain"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage =images [i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName =names [i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
