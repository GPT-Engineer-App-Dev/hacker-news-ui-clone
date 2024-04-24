import { useEffect, useState } from 'react';
import { Box, Heading, List, ListItem, Link, Text, useColorModeValue, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page');
      const data = await response.json();
      setNewsItems(data.hits.slice(0, 10));
    };
    fetchNews();
  }, []);

  const bgColor = useColorModeValue("brand.700", "brand.900");
  const navigate = useNavigate();

  return (
    <Box maxW="800px" margin="auto" padding="4" bgColor={bgColor}>
      <Heading as="h1" size="xl" marginBottom="8" color="white">Hacker News Clone</Heading>
      <Button colorScheme="orange" size="lg" marginBottom="8" onClick={() => navigate('/submit')}>
        Submit Post
      </Button>
      <List spacing={3}>
        {newsItems.map(item => (
          <ListItem key={item.objectID} padding="4" boxShadow="md" borderRadius="md" bgColor={bgColor}>
            <Link href={item.url} isExternal>
              {item.title} <FaExternalLinkAlt />
            </Link>
            <Text fontSize="sm" color="white">Points: {item.points} by {item.author} | {item.num_comments} comments</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;