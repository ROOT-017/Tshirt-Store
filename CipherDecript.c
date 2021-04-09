#include <stdio.h>

int main()
{
    char message[1000], ch;
    int key, i;

    printf("Enter text to be decrypted: ");
    gets(message);
    printf("Enter the derytion key: ");
    scanf("%d", &key);

    for (i = 0; message[i] != '\0'; i++)
    {
        ch = message[i];
        if (ch >= 'a' && ch <= 'z')
        {
            ch = ch - key;
            if (ch < 'a')
            {
                ch = ch + 'z' - 'a' + 1;
            }
            message[i] = ch;
        }
        else if (ch >= 'A' && ch <= 'Z')
        {
            ch = ch - key;
            if (ch < 'A')
            {
                ch = ch + 'Z' - 'A' + 1;
            }
            message[i] = ch;
        }
    }
    printf("Decryted message: %s", message);
    return 0;
}