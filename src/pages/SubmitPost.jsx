import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";

const SubmitPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate a post submission
    toast({
      title: "Post submitted.",
      description: "Your post has been submitted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Clear form fields
    setTitle("");
    setContent("");
  };

  return (
    <Box maxW="800px" margin="auto" padding="4">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired marginBottom="4">
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter post title" />
        </FormControl>
        <FormControl isRequired marginBottom="4">
          <FormLabel>Content</FormLabel>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter post content" />
        </FormControl>
        <Button type="submit" colorScheme="orange">Submit Post</Button>
      </form>
    </Box>
  );
};

export default SubmitPost;