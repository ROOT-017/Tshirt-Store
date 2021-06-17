// C program to delete a linked list
//with pre difined linkedList.....
//LinkedList 15->154->9->17->100
//By ROOT
#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

/* Link list node */

struct Node
{

    int data;

    struct Node *next;
};

/* Function to delete the entire linked list */

void deleteList(struct Node **head_ref)
{

    /* deref head_ref to get the real head */

    struct Node *current = *head_ref;

    struct Node *next;

    while (current != NULL)

    {

        next = current->next;

        free(current);

        current = next;
    }

    /* deref head_ref to affect the real head back

      in the caller. */

    *head_ref = NULL;
}

void push(struct Node **head_ref, int new_data)
{

    /* allocate node */

    struct Node *new_node =

        (struct Node *)malloc(sizeof(struct Node));

    /* put in the data  */

    new_node->data = new_data;

    /* link the old list off the new node */

    new_node->next = (*head_ref);

    /* move the head to point to the new node */

    (*head_ref) = new_node;
}

/* Driver program to test count function*/

int main()
{

    /* Start with the empty list */

    struct Node *head = NULL;

    /* Use push() to construct below list

     15->154->9->17->100  */

    push(&head, 15);

    push(&head, 154);

    push(&head, 9);

    push(&head, 17);

    push(&head, 100);

    printf("\n Deleting linkedlist 15->154->9->17->100");

    deleteList(&head);

    printf("\n Linked list deleted Successfully😉");
}
