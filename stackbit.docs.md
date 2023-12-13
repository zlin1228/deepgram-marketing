# Stackbit Documentation

## 1. Access

To start using Stackbit, follow these steps:

1. Visit [Stackbit](https://app.stackbit.com/) to create an account if you don't already have one.
2. For access, reach out to either:

- Jill Gelinas (jgelinas@webstacks.com)
- Jordan Esguerra (jesguerra@webstacks.com)
- Nathan Smith (nsmith@webstacks.com).

## 2. Running the Project

> **Important**: We have encountered timeout issues both when using Stackbit Studio and during local development. Please
> be aware of this while working on projects. We are actively looking for solutions to this problem and will update the
> team as soon as we have more information.

There are two options for running your project with Stackbit:

### 2.1 Stackbit Studio UI Editor

You can run your project directly from the Stackbit studio UI editor. However, please note that we have encountered some
timeout issues when using this method, and it may require several builds to get your project up and running.

### 2.2 Local Development (Recommended)

To avoid the issues encountered with the Stackbit studio, we recommend using local development. Here's how to do it:

**Setting Up Local Development**

DatoCMS uses webhooks to synchronize data. To work with Stackbit in local development, the easiest method is to use an
ngrok tunnel and pass the tunnel URL when running `stackbit dev`.

**Install ngrok**

1. Sign up for an ngrok account [here](https://dashboard.ngrok.com/signup).
2. Install the agent on your machine.

**Start ngrok Agent**

With your development server running in another terminal window, start the ngrok agent on port 8090.

```shell
ngrok http 8090
```

This will output a publicly-accessible URL from which you can access `localhost:8090`.

**Start Stackbit Dev**

When starting `stackbit dev`, use the ngrok URL as part of the `csi-webhook-url` option, being sure to maintain the path
`/_stackbit/onWebhook`.

```shell
stackbit dev --csi-webhook-url https://xyz.ngrok.app/_stackbit/onWebhook
```

Now you can open `localhost:8090/_stackbit` and start developing locally.

**Restarting ngrok**

When restarting the ngrok agent, you will typically receive a different URL. This will result in an error saying that a
webhook with a name `stackbit-webhook-local` already exists. If this happens, delete the `stackbit-webhook-local`
webhook in your DatoCMS project settings.

For a more detailed explanation on local development, please refer to the
[Stackbit Local Development Documentation](https://docs.stackbit.com/integrations/content-sources/datocms#local-development).

## 3. Stackbit Annotations

Annotations in Stackbit allow for inline editing of HTML elements, by mapping content in the source code to its place in
the structure of the rendered page. This is done using two primary data attributes:

- `data-sb-object-id`: This attribute scopes all descendant elements within the context of the given ID value. This way,
  any field path mentioned in HTML descendants is attributed to the document with the specified ID. An ID value is
  required for inline editing, and this attribute is typically the unique identifier for the document in the content
  source module.

- `data-sb-field-path`: This attribute provides a path from the root of the document, identifying the field to be edited
  in the content source, and can include additional instruction on how to locate the content for that field in the DOM.

There are numerous ways to use annotations and it also covers various advanced field path patterns including nested
objects, changing document context, and unwrapped children.

For a more detailed explanation on how to use annotations and examples of their usage, please refer to the official
[Stackbit Annotations Documentation](https://docs.stackbit.com/reference/annotations).

## 4. Helpful Links

Here are some helpful links that you can refer to:

- [Stackbit Annotations Documentation](https://docs.stackbit.com/reference/annotations)
- [Stackbit DatoCMS Integration Documentation](https://docs.stackbit.com/integrations/content-sources/datocms)
- [Stackbit Content Modeling Documentation](https://docs.stackbit.com/reference/config/content-modeling)
- [Stackbit Model Properties Documentation](https://docs.stackbit.com/reference/config/content-modeling/models)
- [Stackbit Field Properties Documentation](https://docs.stackbit.com/reference/config/content-modeling/fields)
