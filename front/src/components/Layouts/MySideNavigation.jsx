import { useState, useEffect } from "react";
import { SideNavigation } from "@cloudscape-design/components";
import { useNavigate, useLocation } from "react-router-dom";

export default function MyTopNavigation() {
    /*
    const [activeHref, setActiveHref] = React.useState(
        "#/page2"
    );
    */
    const navigate = useNavigate();
    const location = useLocation();

    const [activeHref, setActiveHref] = useState(location.pathname)

    useEffect(() => {
        setActiveHref(location.pathname);
    }, [location.pathname]);

    return (
        <SideNavigation
            activeHref={activeHref}
            header={{ href: "/", text: "Service name" }}
            onFollow={event => {
                if (!event.detail.external) {
                    event.preventDefault();
                    navigate(event.defaul.href);
                    setActiveHref(event.detail.href);
                }
            }}
            items={[
                { type: "link", text: "Page 1", href: "" },
                { type: "link", text: "Page 2", href: "/page2" },
                {
                    type: "section",
                    text: "Section 1",
                    items: [
                        {
                            type: "link",
                            text: "Page 4",
                            href: "#/page4"
                        },
                        {
                            type: "link",
                            text: "Page 5",
                            href: "#/page5"
                        },
                        {
                            type: "link",
                            text: "Page 6",
                            href: "#/page6"
                        }
                    ]
                },
                {
                    type: "section",
                    text: "Section 2",
                    items: [
                        {
                            type: "link",
                            text: "Page 7",
                            href: "#/page7"
                        },
                        {
                            type: "link",
                            text: "Page 8",
                            href: "#/page8"
                        },
                        {
                            type: "link",
                            text: "Page 9",
                            href: "#/page9"
                        }
                    ]
                }
            ]}
        />
    );
}