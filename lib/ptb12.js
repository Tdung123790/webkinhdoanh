function giaiptb1(a,b)
{
    if(a==0 && b==0)
        return "Phương trình vô số nghiệm";
    else if (a==0 && b!=0)
        return "Phương trình vô nghiệm";
    else
        return "Phương trình có nghiệm x = " + (-b/a);
}
function giaiptb2(a,b,c)
{
    if(a==0)
        return giaiptb1(b,c);
    else
    {
        var d = b*b - 4*a*c;
        if(d<0)
            return "Phương trình vô nghiệm";
        else if(d==0)
            return "Phương trình có nghiệm kép x1 = x2 = " + (-b/(2*a));
        else
            return "Phương trình có 2 nghiệm phân biệt: x1 = " + ((-b + Math.sqrt(d))/(2*a)) + ", x2 = " + ((-b - Math.sqrt(d))/(2*a));
    }
}