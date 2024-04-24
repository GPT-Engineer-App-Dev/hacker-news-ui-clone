import { Box, Heading, List, ListItem, Link, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  const newsItems = [
    { id: 1, title: "Y Combinator introduces new AI startup program", url: "https://news.ycombinator.com", points: 150, author: "johndoe", comments: 30 },
    { id: 2, title: "React 18 released: What's new?", url: "https://reactjs.org", points: 100, author: "janedoe", comments: 25 },
    { id: 3, title: "Understanding the basics of Blockchain", url: "https://blockchain.com", points: 200, author: "alice", comments: 40 }
  ];

  return (
    <Box maxW="800px" margin="auto" padding="4">
      <Heading as="h1" size="xl" marginBottom="8">Hacker News Clone</Heading>
      <List spacing={3}>
        {newsItems.map(item => (
          <ListItem key={item.id} padding="4" boxShadow="md" borderRadius="md">
            <Link href={item.url} isExternal>
              {item.title} <FaExternalLinkAlt />
            </Link>
            <Text fontSize="sm">Points: {item.points} by {item.author} | {item.comments} comments</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;