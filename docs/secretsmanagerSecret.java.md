# `secretsmanagerSecret` Submodule <a name="`secretsmanagerSecret` Submodule" id="@cdktn/provider-awscc.secretsmanagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecret <a name="SecretsmanagerSecret" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret awscc_secretsmanager_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecret;

SecretsmanagerSecret.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .generateSecretString(SecretsmanagerSecretGenerateSecretString)
//  .kmsKeyId(java.lang.String)
//  .name(java.lang.String)
//  .replicaRegions(IResolvable|java.util.List<SecretsmanagerSecretReplicaRegions>)
//  .secretString(java.lang.String)
//  .tags(IResolvable|java.util.List<SecretsmanagerSecretTags>)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.generateSecretString">generateSecretString</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a></code> | A structure that specifies how to generate a password to encrypt and store in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the new secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.replicaRegions">replicaRegions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>></code> | A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.secretString">secretString</a></code> | <code>java.lang.String</code> | The text to encrypt and store in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>></code> | A list of tags to attach to the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The exact string that identifies the third-party partner that holds the external secret. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#description SecretsmanagerSecret#description}

---

##### `generateSecretString`<sup>Optional</sup> <a name="generateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.generateSecretString"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

A structure that specifies how to generate a password to encrypt and store in the secret.

To include a specific string in the secret, use `SecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.
We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#generate_secret_string SecretsmanagerSecret#generate_secret_string}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret.

An alias is always prefixed by `alias/`, for example `alias/aws/secretsmanager`. For more information, see [About aliases](https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html).
To use a KMS key in a different account, use the key ARN or the alias ARN.
If you don't specify this value, then Secrets Manager uses the key `aws/secretsmanager`. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
If the secret is in a different AWS account from the credentials calling the API, then you can't use `aws/secretsmanager` to encrypt the secret, and you must create and use a customer managed KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the new secret.

The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-
Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#name SecretsmanagerSecret#name}

---

##### `replicaRegions`<sup>Optional</sup> <a name="replicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.replicaRegions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>>

A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#replica_regions SecretsmanagerSecret#replica_regions}

---

##### `secretString`<sup>Optional</sup> <a name="secretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.secretString"></a>

- *Type:* java.lang.String

The text to encrypt and store in the secret.

We recommend you use a JSON structure of key/value pairs for your secret value. To generate a random password, use `GenerateSecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#secret_string SecretsmanagerSecret#secret_string}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>>

A list of tags to attach to the secret.

Each tag is a key and value pair of strings in a JSON text string, for example:
`[{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}]`
Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc".
Stack-level tags, tags you apply to the CloudFormation stack, are also attached to the secret.
If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an `Access Denied` error. For more information, see [Control access to secrets using tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#tag-secrets-abac) and [Limit access to identities with tags that match secrets' tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#auth-and-access_tags2).
For information about how to format a JSON parameter for the various command line tool environments, see [Using JSON for Parameters](https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json). If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.
The following restrictions apply to tags:

* Maximum number of tags per secret: 50
* Maximum key length: 127 Unicode characters in UTF-8
* Maximum value length: 255 Unicode characters in UTF-8
* Tag keys and values are case sensitive.
* Do not use the `aws:` prefix in your tag names or values because AWS reserves it for AWS use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.
* If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : /

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The exact string that identifies the third-party partner that holds the external secret.

For more information, see [Managed external secret partners](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-partners.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#type SecretsmanagerSecret#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString">putGenerateSecretString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putReplicaRegions">putReplicaRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetGenerateSecretString">resetGenerateSecretString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetReplicaRegions">resetReplicaRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetSecretString">resetSecretString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGenerateSecretString` <a name="putGenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString"></a>

```java
public void putGenerateSecretString(SecretsmanagerSecretGenerateSecretString value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

---

##### `putReplicaRegions` <a name="putReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putReplicaRegions"></a>

```java
public void putReplicaRegions(IResolvable|java.util.List<SecretsmanagerSecretReplicaRegions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putReplicaRegions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SecretsmanagerSecretTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGenerateSecretString` <a name="resetGenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetGenerateSecretString"></a>

```java
public void resetGenerateSecretString()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetName"></a>

```java
public void resetName()
```

##### `resetReplicaRegions` <a name="resetReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetReplicaRegions"></a>

```java
public void resetReplicaRegions()
```

##### `resetSecretString` <a name="resetSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetSecretString"></a>

```java
public void resetSecretString()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetTags"></a>

```java
public void resetTags()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsmanagerSecret resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isConstruct"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecret;

SecretsmanagerSecret.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecret;

SecretsmanagerSecret.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecret;

SecretsmanagerSecret.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecret;

SecretsmanagerSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecretsmanagerSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecretsmanagerSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecretsmanagerSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecretsmanagerSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretString">generateSecretString</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference">SecretsmanagerSecretGenerateSecretStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegions">replicaRegions</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList">SecretsmanagerSecretReplicaRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList">SecretsmanagerSecretTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretStringInput">generateSecretStringInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegionsInput">replicaRegionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretStringInput">secretStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretString">secretString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `generateSecretString`<sup>Required</sup> <a name="generateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretString"></a>

```java
public SecretsmanagerSecretGenerateSecretStringOutputReference getGenerateSecretString();
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference">SecretsmanagerSecretGenerateSecretStringOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `replicaRegions`<sup>Required</sup> <a name="replicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegions"></a>

```java
public SecretsmanagerSecretReplicaRegionsList getReplicaRegions();
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList">SecretsmanagerSecretReplicaRegionsList</a>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tags"></a>

```java
public SecretsmanagerSecretTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList">SecretsmanagerSecretTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `generateSecretStringInput`<sup>Optional</sup> <a name="generateSecretStringInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretStringInput"></a>

```java
public IResolvable|SecretsmanagerSecretGenerateSecretString getGenerateSecretStringInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `replicaRegionsInput`<sup>Optional</sup> <a name="replicaRegionsInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegionsInput"></a>

```java
public IResolvable|java.util.List<SecretsmanagerSecretReplicaRegions> getReplicaRegionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>>

---

##### `secretStringInput`<sup>Optional</sup> <a name="secretStringInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretStringInput"></a>

```java
public java.lang.String getSecretStringInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SecretsmanagerSecretTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secretString`<sup>Required</sup> <a name="secretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretString"></a>

```java
public java.lang.String getSecretString();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretConfig <a name="SecretsmanagerSecretConfig" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecretConfig;

SecretsmanagerSecretConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .generateSecretString(SecretsmanagerSecretGenerateSecretString)
//  .kmsKeyId(java.lang.String)
//  .name(java.lang.String)
//  .replicaRegions(IResolvable|java.util.List<SecretsmanagerSecretReplicaRegions>)
//  .secretString(java.lang.String)
//  .tags(IResolvable|java.util.List<SecretsmanagerSecretTags>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.generateSecretString">generateSecretString</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a></code> | A structure that specifies how to generate a password to encrypt and store in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the new secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replicaRegions">replicaRegions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>></code> | A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.secretString">secretString</a></code> | <code>java.lang.String</code> | The text to encrypt and store in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>></code> | A list of tags to attach to the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.type">type</a></code> | <code>java.lang.String</code> | The exact string that identifies the third-party partner that holds the external secret. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#description SecretsmanagerSecret#description}

---

##### `generateSecretString`<sup>Optional</sup> <a name="generateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.generateSecretString"></a>

```java
public SecretsmanagerSecretGenerateSecretString getGenerateSecretString();
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

A structure that specifies how to generate a password to encrypt and store in the secret.

To include a specific string in the secret, use `SecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.
We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#generate_secret_string SecretsmanagerSecret#generate_secret_string}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret.

An alias is always prefixed by `alias/`, for example `alias/aws/secretsmanager`. For more information, see [About aliases](https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html).
To use a KMS key in a different account, use the key ARN or the alias ARN.
If you don't specify this value, then Secrets Manager uses the key `aws/secretsmanager`. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
If the secret is in a different AWS account from the credentials calling the API, then you can't use `aws/secretsmanager` to encrypt the secret, and you must create and use a customer managed KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the new secret.

The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-
Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#name SecretsmanagerSecret#name}

---

##### `replicaRegions`<sup>Optional</sup> <a name="replicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replicaRegions"></a>

```java
public IResolvable|java.util.List<SecretsmanagerSecretReplicaRegions> getReplicaRegions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>>

A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#replica_regions SecretsmanagerSecret#replica_regions}

---

##### `secretString`<sup>Optional</sup> <a name="secretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.secretString"></a>

```java
public java.lang.String getSecretString();
```

- *Type:* java.lang.String

The text to encrypt and store in the secret.

We recommend you use a JSON structure of key/value pairs for your secret value. To generate a random password, use `GenerateSecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#secret_string SecretsmanagerSecret#secret_string}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SecretsmanagerSecretTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>>

A list of tags to attach to the secret.

Each tag is a key and value pair of strings in a JSON text string, for example:
`[{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}]`
Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc".
Stack-level tags, tags you apply to the CloudFormation stack, are also attached to the secret.
If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an `Access Denied` error. For more information, see [Control access to secrets using tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#tag-secrets-abac) and [Limit access to identities with tags that match secrets' tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#auth-and-access_tags2).
For information about how to format a JSON parameter for the various command line tool environments, see [Using JSON for Parameters](https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json). If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.
The following restrictions apply to tags:

* Maximum number of tags per secret: 50
* Maximum key length: 127 Unicode characters in UTF-8
* Maximum value length: 255 Unicode characters in UTF-8
* Tag keys and values are case sensitive.
* Do not use the `aws:` prefix in your tag names or values because AWS reserves it for AWS use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.
* If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : /

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The exact string that identifies the third-party partner that holds the external secret.

For more information, see [Managed external secret partners](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-partners.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#type SecretsmanagerSecret#type}

---

### SecretsmanagerSecretGenerateSecretString <a name="SecretsmanagerSecretGenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecretGenerateSecretString;

SecretsmanagerSecretGenerateSecretString.builder()
//  .excludeCharacters(java.lang.String)
//  .excludeLowercase(java.lang.Boolean|IResolvable)
//  .excludeNumbers(java.lang.Boolean|IResolvable)
//  .excludePunctuation(java.lang.Boolean|IResolvable)
//  .excludeUppercase(java.lang.Boolean|IResolvable)
//  .generateStringKey(java.lang.String)
//  .includeSpace(java.lang.Boolean|IResolvable)
//  .passwordLength(java.lang.Number)
//  .requireEachIncludedType(java.lang.Boolean|IResolvable)
//  .secretStringTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeCharacters">excludeCharacters</a></code> | <code>java.lang.String</code> | A string of the characters that you don't want in the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeLowercase">excludeLowercase</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to exclude lowercase letters from the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeNumbers">excludeNumbers</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludePunctuation">excludePunctuation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to exclude the following punctuation characters from the password: ``! |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeUppercase">excludeUppercase</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to exclude uppercase letters from the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.generateStringKey">generateStringKey</a></code> | <code>java.lang.String</code> | The JSON key name for the key/value pair, where the value is the generated password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.includeSpace">includeSpace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to include the space character. If you include this switch, the password can contain space characters. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.passwordLength">passwordLength</a></code> | <code>java.lang.Number</code> | The length of the password. If you don't include this parameter, the default length is 32 characters. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.requireEachIncludedType">requireEachIncludedType</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.secretStringTemplate">secretStringTemplate</a></code> | <code>java.lang.String</code> | A template that the generated string must match. |

---

##### `excludeCharacters`<sup>Optional</sup> <a name="excludeCharacters" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeCharacters"></a>

```java
public java.lang.String getExcludeCharacters();
```

- *Type:* java.lang.String

A string of the characters that you don't want in the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#exclude_characters SecretsmanagerSecret#exclude_characters}

---

##### `excludeLowercase`<sup>Optional</sup> <a name="excludeLowercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeLowercase"></a>

```java
public java.lang.Boolean|IResolvable getExcludeLowercase();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to exclude lowercase letters from the password.

If you don't include this switch, the password can contain lowercase letters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#exclude_lowercase SecretsmanagerSecret#exclude_lowercase}

---

##### `excludeNumbers`<sup>Optional</sup> <a name="excludeNumbers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeNumbers"></a>

```java
public java.lang.Boolean|IResolvable getExcludeNumbers();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#exclude_numbers SecretsmanagerSecret#exclude_numbers}

---

##### `excludePunctuation`<sup>Optional</sup> <a name="excludePunctuation" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludePunctuation"></a>

```java
public java.lang.Boolean|IResolvable getExcludePunctuation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to exclude the following punctuation characters from the password: ``!

" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~``. If you don't include this switch, the password can contain punctuation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#exclude_punctuation SecretsmanagerSecret#exclude_punctuation}

---

##### `excludeUppercase`<sup>Optional</sup> <a name="excludeUppercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeUppercase"></a>

```java
public java.lang.Boolean|IResolvable getExcludeUppercase();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to exclude uppercase letters from the password.

If you don't include this switch, the password can contain uppercase letters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#exclude_uppercase SecretsmanagerSecret#exclude_uppercase}

---

##### `generateStringKey`<sup>Optional</sup> <a name="generateStringKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.generateStringKey"></a>

```java
public java.lang.String getGenerateStringKey();
```

- *Type:* java.lang.String

The JSON key name for the key/value pair, where the value is the generated password.

This pair is added to the JSON structure specified by the `SecretStringTemplate` parameter. If you specify this parameter, then you must also specify `SecretStringTemplate`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#generate_string_key SecretsmanagerSecret#generate_string_key}

---

##### `includeSpace`<sup>Optional</sup> <a name="includeSpace" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.includeSpace"></a>

```java
public java.lang.Boolean|IResolvable getIncludeSpace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to include the space character. If you include this switch, the password can contain space characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#include_space SecretsmanagerSecret#include_space}

---

##### `passwordLength`<sup>Optional</sup> <a name="passwordLength" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.passwordLength"></a>

```java
public java.lang.Number getPasswordLength();
```

- *Type:* java.lang.Number

The length of the password. If you don't include this parameter, the default length is 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#password_length SecretsmanagerSecret#password_length}

---

##### `requireEachIncludedType`<sup>Optional</sup> <a name="requireEachIncludedType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.requireEachIncludedType"></a>

```java
public java.lang.Boolean|IResolvable getRequireEachIncludedType();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation.

If you don't include this switch, the password contains at least one of every character type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#require_each_included_type SecretsmanagerSecret#require_each_included_type}

---

##### `secretStringTemplate`<sup>Optional</sup> <a name="secretStringTemplate" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.secretStringTemplate"></a>

```java
public java.lang.String getSecretStringTemplate();
```

- *Type:* java.lang.String

A template that the generated string must match.

When you make a change to this property, a new secret version is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#secret_string_template SecretsmanagerSecret#secret_string_template}

---

### SecretsmanagerSecretReplicaRegions <a name="SecretsmanagerSecretReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecretReplicaRegions;

SecretsmanagerSecretReplicaRegions.builder()
//  .kmsKeyId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ARN, key ID, or alias of the KMS key to encrypt the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.region">region</a></code> | <code>java.lang.String</code> | A string that represents a ``Region``, for example "us-east-1". |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The ARN, key ID, or alias of the KMS key to encrypt the secret.

If you don't include this field, Secrets Manager uses `aws/secretsmanager`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

A string that represents a ``Region``, for example "us-east-1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#region SecretsmanagerSecret#region}

---

### SecretsmanagerSecretTags <a name="SecretsmanagerSecretTags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecretTags;

SecretsmanagerSecretTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.key">key</a></code> | <code>java.lang.String</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.value">value</a></code> | <code>java.lang.String</code> | The string value associated with the key of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#key SecretsmanagerSecret#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The string value associated with the key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/secretsmanager_secret#value SecretsmanagerSecret#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerSecretGenerateSecretStringOutputReference <a name="SecretsmanagerSecretGenerateSecretStringOutputReference" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecretGenerateSecretStringOutputReference;

new SecretsmanagerSecretGenerateSecretStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeCharacters">resetExcludeCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeLowercase">resetExcludeLowercase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeNumbers">resetExcludeNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludePunctuation">resetExcludePunctuation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeUppercase">resetExcludeUppercase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetGenerateStringKey">resetGenerateStringKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetIncludeSpace">resetIncludeSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetPasswordLength">resetPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetRequireEachIncludedType">resetRequireEachIncludedType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetSecretStringTemplate">resetSecretStringTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeCharacters` <a name="resetExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeCharacters"></a>

```java
public void resetExcludeCharacters()
```

##### `resetExcludeLowercase` <a name="resetExcludeLowercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeLowercase"></a>

```java
public void resetExcludeLowercase()
```

##### `resetExcludeNumbers` <a name="resetExcludeNumbers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeNumbers"></a>

```java
public void resetExcludeNumbers()
```

##### `resetExcludePunctuation` <a name="resetExcludePunctuation" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludePunctuation"></a>

```java
public void resetExcludePunctuation()
```

##### `resetExcludeUppercase` <a name="resetExcludeUppercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeUppercase"></a>

```java
public void resetExcludeUppercase()
```

##### `resetGenerateStringKey` <a name="resetGenerateStringKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetGenerateStringKey"></a>

```java
public void resetGenerateStringKey()
```

##### `resetIncludeSpace` <a name="resetIncludeSpace" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetIncludeSpace"></a>

```java
public void resetIncludeSpace()
```

##### `resetPasswordLength` <a name="resetPasswordLength" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetPasswordLength"></a>

```java
public void resetPasswordLength()
```

##### `resetRequireEachIncludedType` <a name="resetRequireEachIncludedType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetRequireEachIncludedType"></a>

```java
public void resetRequireEachIncludedType()
```

##### `resetSecretStringTemplate` <a name="resetSecretStringTemplate" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetSecretStringTemplate"></a>

```java
public void resetSecretStringTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharactersInput">excludeCharactersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercaseInput">excludeLowercaseInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbersInput">excludeNumbersInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuationInput">excludePunctuationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercaseInput">excludeUppercaseInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKeyInput">generateStringKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpaceInput">includeSpaceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLengthInput">passwordLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedTypeInput">requireEachIncludedTypeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplateInput">secretStringTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharacters">excludeCharacters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercase">excludeLowercase</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbers">excludeNumbers</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuation">excludePunctuation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercase">excludeUppercase</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKey">generateStringKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpace">includeSpace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLength">passwordLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedType">requireEachIncludedType</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplate">secretStringTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeCharactersInput`<sup>Optional</sup> <a name="excludeCharactersInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharactersInput"></a>

```java
public java.lang.String getExcludeCharactersInput();
```

- *Type:* java.lang.String

---

##### `excludeLowercaseInput`<sup>Optional</sup> <a name="excludeLowercaseInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercaseInput"></a>

```java
public java.lang.Boolean|IResolvable getExcludeLowercaseInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeNumbersInput`<sup>Optional</sup> <a name="excludeNumbersInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbersInput"></a>

```java
public java.lang.Boolean|IResolvable getExcludeNumbersInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludePunctuationInput`<sup>Optional</sup> <a name="excludePunctuationInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuationInput"></a>

```java
public java.lang.Boolean|IResolvable getExcludePunctuationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeUppercaseInput`<sup>Optional</sup> <a name="excludeUppercaseInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercaseInput"></a>

```java
public java.lang.Boolean|IResolvable getExcludeUppercaseInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `generateStringKeyInput`<sup>Optional</sup> <a name="generateStringKeyInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKeyInput"></a>

```java
public java.lang.String getGenerateStringKeyInput();
```

- *Type:* java.lang.String

---

##### `includeSpaceInput`<sup>Optional</sup> <a name="includeSpaceInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpaceInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeSpaceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `passwordLengthInput`<sup>Optional</sup> <a name="passwordLengthInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLengthInput"></a>

```java
public java.lang.Number getPasswordLengthInput();
```

- *Type:* java.lang.Number

---

##### `requireEachIncludedTypeInput`<sup>Optional</sup> <a name="requireEachIncludedTypeInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedTypeInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireEachIncludedTypeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `secretStringTemplateInput`<sup>Optional</sup> <a name="secretStringTemplateInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplateInput"></a>

```java
public java.lang.String getSecretStringTemplateInput();
```

- *Type:* java.lang.String

---

##### `excludeCharacters`<sup>Required</sup> <a name="excludeCharacters" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharacters"></a>

```java
public java.lang.String getExcludeCharacters();
```

- *Type:* java.lang.String

---

##### `excludeLowercase`<sup>Required</sup> <a name="excludeLowercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercase"></a>

```java
public java.lang.Boolean|IResolvable getExcludeLowercase();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeNumbers`<sup>Required</sup> <a name="excludeNumbers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbers"></a>

```java
public java.lang.Boolean|IResolvable getExcludeNumbers();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludePunctuation`<sup>Required</sup> <a name="excludePunctuation" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuation"></a>

```java
public java.lang.Boolean|IResolvable getExcludePunctuation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeUppercase`<sup>Required</sup> <a name="excludeUppercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercase"></a>

```java
public java.lang.Boolean|IResolvable getExcludeUppercase();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `generateStringKey`<sup>Required</sup> <a name="generateStringKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKey"></a>

```java
public java.lang.String getGenerateStringKey();
```

- *Type:* java.lang.String

---

##### `includeSpace`<sup>Required</sup> <a name="includeSpace" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpace"></a>

```java
public java.lang.Boolean|IResolvable getIncludeSpace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `passwordLength`<sup>Required</sup> <a name="passwordLength" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLength"></a>

```java
public java.lang.Number getPasswordLength();
```

- *Type:* java.lang.Number

---

##### `requireEachIncludedType`<sup>Required</sup> <a name="requireEachIncludedType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedType"></a>

```java
public java.lang.Boolean|IResolvable getRequireEachIncludedType();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `secretStringTemplate`<sup>Required</sup> <a name="secretStringTemplate" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplate"></a>

```java
public java.lang.String getSecretStringTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.internalValue"></a>

```java
public IResolvable|SecretsmanagerSecretGenerateSecretString getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

---


### SecretsmanagerSecretReplicaRegionsList <a name="SecretsmanagerSecretReplicaRegionsList" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecretReplicaRegionsList;

new SecretsmanagerSecretReplicaRegionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.get"></a>

```java
public SecretsmanagerSecretReplicaRegionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecretsmanagerSecretReplicaRegions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>>

---


### SecretsmanagerSecretReplicaRegionsOutputReference <a name="SecretsmanagerSecretReplicaRegionsOutputReference" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecretReplicaRegionsOutputReference;

new SecretsmanagerSecretReplicaRegionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecretsmanagerSecretReplicaRegions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>

---


### SecretsmanagerSecretTagsList <a name="SecretsmanagerSecretTagsList" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecretTagsList;

new SecretsmanagerSecretTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.get"></a>

```java
public SecretsmanagerSecretTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecretsmanagerSecretTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>>

---


### SecretsmanagerSecretTagsOutputReference <a name="SecretsmanagerSecretTagsOutputReference" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.secretsmanager_secret.SecretsmanagerSecretTagsOutputReference;

new SecretsmanagerSecretTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecretsmanagerSecretTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>

---



