import { BreadcrumbGroup, Form, SpaceBetween, Button, Container, Header, Input, FormField, ExpandableSection } from "@cloudscape-design/components";
import { useState } from "react";
export default function SettingsSample() {
    const [firstField, setFirstField] = useState("");
    const [secondField, setSecondField] = useState("");
    const [thirdField, setThirdField] = useState("");


    const requestApi = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const requestBody = {
            param1: formData.get("firstField"),
            param2: formData.get("secondField"),
            param3: formData.get("thirdField"),
        };
        alert(JSON.stringify(requestBody));    
    };

    return (
        <div>
            <BreadcrumbGroup 
                items={[
                    { text: "System", href: "#" },
                    { text: "Components", href: "#components" },
                    {
                        text: "Breadcrumb group",
                        href: "#components/breadcrumb-group"
                    }
                ]}
                ariaLabel="Breadcrumbs"
            />

            <form onSubmit={requestApi}>
                <Form
                    actions={
                        <SpaceBetween direction="horizontal" size="xs">
                            <Button formAction="none" variant="link">
                                Cancel
                            </Button>
                            <Button variant="primary">Submit</Button>
                        </SpaceBetween>
                    }
                    header={<Header variant="h1">Form header</Header>}
                >
                    <Container
                        header={
                            <Header variant="h2">
                                Form container header
                            </Header>
                        }
                    >
                        <SpaceBetween direction="vertical" size="l">
                            <FormField label="First field">
                                <Input
                                    name="firstField"
                                    value={firstField}
                                    onChange={e => setFirstField(e.detail.value)}
                                />
                            </FormField>
                            <FormField label="Second field">
                                <Input
                                    name="SecondFiled"
                                    value={secondField}
                                    onChange={e => setSecondField(e.detail.value)}
                                />
                            </FormField>
                            <FormField label="Third field">
                                <Input
                                    name="thirdField"
                                    value={thirdField}
                                    onChange={(e) => setThirdField(e.detail.value)}
                                />
                            </FormField>
                        </SpaceBetween>
                        <ExpandableSection headerText="Static website hosting">
                            After you enable your S3 bucket for static website
                            hosting, web browsers can access your content
                            through the Amazon S3 website endpoint for the
                            bucket.
                        </ExpandableSection>
                    </Container>
                </Form>
            </form>

        </div>
    );
}