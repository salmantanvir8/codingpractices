
var lengthOfLongestSubstring = function(s) {
    
    let slidingWindow=""
    let max=0;
    for(let i=0; i<s.length;i++){
        if(slidingWindow.includes(s.charAt(i))){
     console.log("-> sliding value= ",slidingWindow , ",index value = ", s.charAt(i), 
     ",sliding string index=", slidingWindow.indexOf(s.charAt(i)))
     slidingWindow= slidingWindow.slice(slidingWindow.indexOf(s.charAt(i))+1)
     console.log("->after ",slidingWindow)
     slidingWindow+=s.charAt(i);
        }
        else{
        slidingWindow += s.charAt(i);
        // console.log("-> ",slidingWindow)
        max = Math.max(max,slidingWindow.length)
        }               
    }
return max;

};


lengthOfLongestSubstring("abcabcbb")