//Simple program which  takes in the cordinate in the form (x,y) and determined the quadrant to which it is found
//By ROOT😉
#include <stdio.h>
int main(void)
{
int x,y;
printf("Enter the coordinate in form (x,y):\n");
scanf("%d%d",&x,&y);
if(x>0&&y>0)
{
printf("The coordinate (%d,%d) are in the 1st quadrant",x,y);
}
else if(x<0&&y>0)
{
printf("The coordinate (%d,%d) are in the 2nd quadrant",x,y);
}
else if(x<0&&y<0)
{
printf("The coordinate (%d,%d) are in the 3rd quadrant",x,y);
}
else if(x>0&&y<0)
{
printf("The coordinate (%d,%d) are in the 4th quadrate",x,y);
}
else
{
printf("**DO IT YOURSELF FOOLISH BEING**");
}
	return 0;
}
