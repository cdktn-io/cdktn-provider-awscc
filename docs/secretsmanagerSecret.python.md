# `secretsmanagerSecret` Submodule <a name="`secretsmanagerSecret` Submodule" id="@cdktn/provider-awscc.secretsmanagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecret <a name="SecretsmanagerSecret" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret awscc_secretsmanager_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecret(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  generate_secret_string: SecretsmanagerSecretGenerateSecretString = None,
  kms_key_id: str = None,
  name: str = None,
  replica_regions: IResolvable | typing.List[SecretsmanagerSecretReplicaRegions] = None,
  secret_string: str = None,
  tags: IResolvable | typing.List[SecretsmanagerSecretTags] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.generateSecretString">generate_secret_string</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a></code> | A structure that specifies how to generate a password to encrypt and store in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the new secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.replicaRegions">replica_regions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>]</code> | A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.secretString">secret_string</a></code> | <code>str</code> | The text to encrypt and store in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>]</code> | A list of tags to attach to the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.type">type</a></code> | <code>str</code> | The exact string that identifies the third-party partner that holds the external secret. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.description"></a>

- *Type:* str

The description of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#description SecretsmanagerSecret#description}

---

##### `generate_secret_string`<sup>Optional</sup> <a name="generate_secret_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.generateSecretString"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

A structure that specifies how to generate a password to encrypt and store in the secret.

To include a specific string in the secret, use `SecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.
We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#generate_secret_string SecretsmanagerSecret#generate_secret_string}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret.

An alias is always prefixed by `alias/`, for example `alias/aws/secretsmanager`. For more information, see [About aliases](https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html).
To use a KMS key in a different account, use the key ARN or the alias ARN.
If you don't specify this value, then Secrets Manager uses the key `aws/secretsmanager`. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
If the secret is in a different AWS account from the credentials calling the API, then you can't use `aws/secretsmanager` to encrypt the secret, and you must create and use a customer managed KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.name"></a>

- *Type:* str

The name of the new secret.

The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-
Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#name SecretsmanagerSecret#name}

---

##### `replica_regions`<sup>Optional</sup> <a name="replica_regions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.replicaRegions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>]

A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#replica_regions SecretsmanagerSecret#replica_regions}

---

##### `secret_string`<sup>Optional</sup> <a name="secret_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.secretString"></a>

- *Type:* str

The text to encrypt and store in the secret.

We recommend you use a JSON structure of key/value pairs for your secret value. To generate a random password, use `GenerateSecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#secret_string SecretsmanagerSecret#secret_string}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>]

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

- *Type:* str

The exact string that identifies the third-party partner that holds the external secret.

For more information, see [Managed external secret partners](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-partners.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#type SecretsmanagerSecret#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString">put_generate_secret_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putReplicaRegions">put_replica_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetGenerateSecretString">reset_generate_secret_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetReplicaRegions">reset_replica_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetSecretString">reset_secret_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_generate_secret_string` <a name="put_generate_secret_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString"></a>

```python
def put_generate_secret_string(
  exclude_characters: str = None,
  exclude_lowercase: bool | IResolvable = None,
  exclude_numbers: bool | IResolvable = None,
  exclude_punctuation: bool | IResolvable = None,
  exclude_uppercase: bool | IResolvable = None,
  generate_string_key: str = None,
  include_space: bool | IResolvable = None,
  password_length: typing.Union[int, float] = None,
  require_each_included_type: bool | IResolvable = None,
  secret_string_template: str = None
) -> None
```

###### `exclude_characters`<sup>Optional</sup> <a name="exclude_characters" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString.parameter.excludeCharacters"></a>

- *Type:* str

A string of the characters that you don't want in the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_characters SecretsmanagerSecret#exclude_characters}

---

###### `exclude_lowercase`<sup>Optional</sup> <a name="exclude_lowercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString.parameter.excludeLowercase"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to exclude lowercase letters from the password.

If you don't include this switch, the password can contain lowercase letters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_lowercase SecretsmanagerSecret#exclude_lowercase}

---

###### `exclude_numbers`<sup>Optional</sup> <a name="exclude_numbers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString.parameter.excludeNumbers"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_numbers SecretsmanagerSecret#exclude_numbers}

---

###### `exclude_punctuation`<sup>Optional</sup> <a name="exclude_punctuation" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString.parameter.excludePunctuation"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to exclude the following punctuation characters from the password: ``!

" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~``. If you don't include this switch, the password can contain punctuation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_punctuation SecretsmanagerSecret#exclude_punctuation}

---

###### `exclude_uppercase`<sup>Optional</sup> <a name="exclude_uppercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString.parameter.excludeUppercase"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to exclude uppercase letters from the password.

If you don't include this switch, the password can contain uppercase letters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_uppercase SecretsmanagerSecret#exclude_uppercase}

---

###### `generate_string_key`<sup>Optional</sup> <a name="generate_string_key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString.parameter.generateStringKey"></a>

- *Type:* str

The JSON key name for the key/value pair, where the value is the generated password.

This pair is added to the JSON structure specified by the `SecretStringTemplate` parameter. If you specify this parameter, then you must also specify `SecretStringTemplate`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#generate_string_key SecretsmanagerSecret#generate_string_key}

---

###### `include_space`<sup>Optional</sup> <a name="include_space" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString.parameter.includeSpace"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to include the space character. If you include this switch, the password can contain space characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#include_space SecretsmanagerSecret#include_space}

---

###### `password_length`<sup>Optional</sup> <a name="password_length" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString.parameter.passwordLength"></a>

- *Type:* typing.Union[int, float]

The length of the password. If you don't include this parameter, the default length is 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#password_length SecretsmanagerSecret#password_length}

---

###### `require_each_included_type`<sup>Optional</sup> <a name="require_each_included_type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString.parameter.requireEachIncludedType"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation.

If you don't include this switch, the password contains at least one of every character type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#require_each_included_type SecretsmanagerSecret#require_each_included_type}

---

###### `secret_string_template`<sup>Optional</sup> <a name="secret_string_template" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString.parameter.secretStringTemplate"></a>

- *Type:* str

A template that the generated string must match.

When you make a change to this property, a new secret version is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#secret_string_template SecretsmanagerSecret#secret_string_template}

---

##### `put_replica_regions` <a name="put_replica_regions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putReplicaRegions"></a>

```python
def put_replica_regions(
  value: IResolvable | typing.List[SecretsmanagerSecretReplicaRegions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putReplicaRegions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SecretsmanagerSecretTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_generate_secret_string` <a name="reset_generate_secret_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetGenerateSecretString"></a>

```python
def reset_generate_secret_string() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_replica_regions` <a name="reset_replica_regions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetReplicaRegions"></a>

```python
def reset_replica_regions() -> None
```

##### `reset_secret_string` <a name="reset_secret_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetSecretString"></a>

```python
def reset_secret_string() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecretsmanagerSecret resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isConstruct"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecret.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecretsmanagerSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecretsmanagerSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecretsmanagerSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretString">generate_secret_string</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference">SecretsmanagerSecretGenerateSecretStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegions">replica_regions</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList">SecretsmanagerSecretReplicaRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList">SecretsmanagerSecretTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretStringInput">generate_secret_string_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegionsInput">replica_regions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretStringInput">secret_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretString">secret_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `generate_secret_string`<sup>Required</sup> <a name="generate_secret_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretString"></a>

```python
generate_secret_string: SecretsmanagerSecretGenerateSecretStringOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference">SecretsmanagerSecretGenerateSecretStringOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `replica_regions`<sup>Required</sup> <a name="replica_regions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegions"></a>

```python
replica_regions: SecretsmanagerSecretReplicaRegionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList">SecretsmanagerSecretReplicaRegionsList</a>

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tags"></a>

```python
tags: SecretsmanagerSecretTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList">SecretsmanagerSecretTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `generate_secret_string_input`<sup>Optional</sup> <a name="generate_secret_string_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretStringInput"></a>

```python
generate_secret_string_input: IResolvable | SecretsmanagerSecretGenerateSecretString
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `replica_regions_input`<sup>Optional</sup> <a name="replica_regions_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegionsInput"></a>

```python
replica_regions_input: IResolvable | typing.List[SecretsmanagerSecretReplicaRegions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>]

---

##### `secret_string_input`<sup>Optional</sup> <a name="secret_string_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretStringInput"></a>

```python
secret_string_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SecretsmanagerSecretTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secret_string`<sup>Required</sup> <a name="secret_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretString"></a>

```python
secret_string: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretConfig <a name="SecretsmanagerSecretConfig" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  generate_secret_string: SecretsmanagerSecretGenerateSecretString = None,
  kms_key_id: str = None,
  name: str = None,
  replica_regions: IResolvable | typing.List[SecretsmanagerSecretReplicaRegions] = None,
  secret_string: str = None,
  tags: IResolvable | typing.List[SecretsmanagerSecretTags] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description">description</a></code> | <code>str</code> | The description of the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.generateSecretString">generate_secret_string</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a></code> | A structure that specifies how to generate a password to encrypt and store in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name">name</a></code> | <code>str</code> | The name of the new secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replicaRegions">replica_regions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>]</code> | A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.secretString">secret_string</a></code> | <code>str</code> | The text to encrypt and store in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>]</code> | A list of tags to attach to the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.type">type</a></code> | <code>str</code> | The exact string that identifies the third-party partner that holds the external secret. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#description SecretsmanagerSecret#description}

---

##### `generate_secret_string`<sup>Optional</sup> <a name="generate_secret_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.generateSecretString"></a>

```python
generate_secret_string: SecretsmanagerSecretGenerateSecretString
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

A structure that specifies how to generate a password to encrypt and store in the secret.

To include a specific string in the secret, use `SecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.
We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#generate_secret_string SecretsmanagerSecret#generate_secret_string}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret.

An alias is always prefixed by `alias/`, for example `alias/aws/secretsmanager`. For more information, see [About aliases](https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html).
To use a KMS key in a different account, use the key ARN or the alias ARN.
If you don't specify this value, then Secrets Manager uses the key `aws/secretsmanager`. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
If the secret is in a different AWS account from the credentials calling the API, then you can't use `aws/secretsmanager` to encrypt the secret, and you must create and use a customer managed KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the new secret.

The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-
Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#name SecretsmanagerSecret#name}

---

##### `replica_regions`<sup>Optional</sup> <a name="replica_regions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replicaRegions"></a>

```python
replica_regions: IResolvable | typing.List[SecretsmanagerSecretReplicaRegions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>]

A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#replica_regions SecretsmanagerSecret#replica_regions}

---

##### `secret_string`<sup>Optional</sup> <a name="secret_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.secretString"></a>

```python
secret_string: str
```

- *Type:* str

The text to encrypt and store in the secret.

We recommend you use a JSON structure of key/value pairs for your secret value. To generate a random password, use `GenerateSecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#secret_string SecretsmanagerSecret#secret_string}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SecretsmanagerSecretTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>]

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

```python
type: str
```

- *Type:* str

The exact string that identifies the third-party partner that holds the external secret.

For more information, see [Managed external secret partners](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-partners.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#type SecretsmanagerSecret#type}

---

### SecretsmanagerSecretGenerateSecretString <a name="SecretsmanagerSecretGenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.Initializer"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString(
  exclude_characters: str = None,
  exclude_lowercase: bool | IResolvable = None,
  exclude_numbers: bool | IResolvable = None,
  exclude_punctuation: bool | IResolvable = None,
  exclude_uppercase: bool | IResolvable = None,
  generate_string_key: str = None,
  include_space: bool | IResolvable = None,
  password_length: typing.Union[int, float] = None,
  require_each_included_type: bool | IResolvable = None,
  secret_string_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeCharacters">exclude_characters</a></code> | <code>str</code> | A string of the characters that you don't want in the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeLowercase">exclude_lowercase</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to exclude lowercase letters from the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeNumbers">exclude_numbers</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludePunctuation">exclude_punctuation</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to exclude the following punctuation characters from the password: ``! |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeUppercase">exclude_uppercase</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to exclude uppercase letters from the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.generateStringKey">generate_string_key</a></code> | <code>str</code> | The JSON key name for the key/value pair, where the value is the generated password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.includeSpace">include_space</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to include the space character. If you include this switch, the password can contain space characters. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.passwordLength">password_length</a></code> | <code>typing.Union[int, float]</code> | The length of the password. If you don't include this parameter, the default length is 32 characters. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.requireEachIncludedType">require_each_included_type</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.secretStringTemplate">secret_string_template</a></code> | <code>str</code> | A template that the generated string must match. |

---

##### `exclude_characters`<sup>Optional</sup> <a name="exclude_characters" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeCharacters"></a>

```python
exclude_characters: str
```

- *Type:* str

A string of the characters that you don't want in the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_characters SecretsmanagerSecret#exclude_characters}

---

##### `exclude_lowercase`<sup>Optional</sup> <a name="exclude_lowercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeLowercase"></a>

```python
exclude_lowercase: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to exclude lowercase letters from the password.

If you don't include this switch, the password can contain lowercase letters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_lowercase SecretsmanagerSecret#exclude_lowercase}

---

##### `exclude_numbers`<sup>Optional</sup> <a name="exclude_numbers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeNumbers"></a>

```python
exclude_numbers: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_numbers SecretsmanagerSecret#exclude_numbers}

---

##### `exclude_punctuation`<sup>Optional</sup> <a name="exclude_punctuation" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludePunctuation"></a>

```python
exclude_punctuation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to exclude the following punctuation characters from the password: ``!

" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~``. If you don't include this switch, the password can contain punctuation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_punctuation SecretsmanagerSecret#exclude_punctuation}

---

##### `exclude_uppercase`<sup>Optional</sup> <a name="exclude_uppercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeUppercase"></a>

```python
exclude_uppercase: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to exclude uppercase letters from the password.

If you don't include this switch, the password can contain uppercase letters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_uppercase SecretsmanagerSecret#exclude_uppercase}

---

##### `generate_string_key`<sup>Optional</sup> <a name="generate_string_key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.generateStringKey"></a>

```python
generate_string_key: str
```

- *Type:* str

The JSON key name for the key/value pair, where the value is the generated password.

This pair is added to the JSON structure specified by the `SecretStringTemplate` parameter. If you specify this parameter, then you must also specify `SecretStringTemplate`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#generate_string_key SecretsmanagerSecret#generate_string_key}

---

##### `include_space`<sup>Optional</sup> <a name="include_space" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.includeSpace"></a>

```python
include_space: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to include the space character. If you include this switch, the password can contain space characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#include_space SecretsmanagerSecret#include_space}

---

##### `password_length`<sup>Optional</sup> <a name="password_length" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.passwordLength"></a>

```python
password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of the password. If you don't include this parameter, the default length is 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#password_length SecretsmanagerSecret#password_length}

---

##### `require_each_included_type`<sup>Optional</sup> <a name="require_each_included_type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.requireEachIncludedType"></a>

```python
require_each_included_type: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation.

If you don't include this switch, the password contains at least one of every character type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#require_each_included_type SecretsmanagerSecret#require_each_included_type}

---

##### `secret_string_template`<sup>Optional</sup> <a name="secret_string_template" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.secretStringTemplate"></a>

```python
secret_string_template: str
```

- *Type:* str

A template that the generated string must match.

When you make a change to this property, a new secret version is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#secret_string_template SecretsmanagerSecret#secret_string_template}

---

### SecretsmanagerSecretReplicaRegions <a name="SecretsmanagerSecretReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.Initializer"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretReplicaRegions(
  kms_key_id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ARN, key ID, or alias of the KMS key to encrypt the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.region">region</a></code> | <code>str</code> | A string that represents a ``Region``, for example "us-east-1". |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The ARN, key ID, or alias of the KMS key to encrypt the secret.

If you don't include this field, Secrets Manager uses `aws/secretsmanager`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.region"></a>

```python
region: str
```

- *Type:* str

A string that represents a ``Region``, for example "us-east-1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#region SecretsmanagerSecret#region}

---

### SecretsmanagerSecretTags <a name="SecretsmanagerSecretTags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.Initializer"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.key">key</a></code> | <code>str</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.value">value</a></code> | <code>str</code> | The string value associated with the key of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#key SecretsmanagerSecret#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.value"></a>

```python
value: str
```

- *Type:* str

The string value associated with the key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#value SecretsmanagerSecret#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerSecretGenerateSecretStringOutputReference <a name="SecretsmanagerSecretGenerateSecretStringOutputReference" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeCharacters">reset_exclude_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeLowercase">reset_exclude_lowercase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeNumbers">reset_exclude_numbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludePunctuation">reset_exclude_punctuation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeUppercase">reset_exclude_uppercase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetGenerateStringKey">reset_generate_string_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetIncludeSpace">reset_include_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetPasswordLength">reset_password_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetRequireEachIncludedType">reset_require_each_included_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetSecretStringTemplate">reset_secret_string_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_characters` <a name="reset_exclude_characters" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeCharacters"></a>

```python
def reset_exclude_characters() -> None
```

##### `reset_exclude_lowercase` <a name="reset_exclude_lowercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeLowercase"></a>

```python
def reset_exclude_lowercase() -> None
```

##### `reset_exclude_numbers` <a name="reset_exclude_numbers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeNumbers"></a>

```python
def reset_exclude_numbers() -> None
```

##### `reset_exclude_punctuation` <a name="reset_exclude_punctuation" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludePunctuation"></a>

```python
def reset_exclude_punctuation() -> None
```

##### `reset_exclude_uppercase` <a name="reset_exclude_uppercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeUppercase"></a>

```python
def reset_exclude_uppercase() -> None
```

##### `reset_generate_string_key` <a name="reset_generate_string_key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetGenerateStringKey"></a>

```python
def reset_generate_string_key() -> None
```

##### `reset_include_space` <a name="reset_include_space" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetIncludeSpace"></a>

```python
def reset_include_space() -> None
```

##### `reset_password_length` <a name="reset_password_length" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetPasswordLength"></a>

```python
def reset_password_length() -> None
```

##### `reset_require_each_included_type` <a name="reset_require_each_included_type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetRequireEachIncludedType"></a>

```python
def reset_require_each_included_type() -> None
```

##### `reset_secret_string_template` <a name="reset_secret_string_template" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetSecretStringTemplate"></a>

```python
def reset_secret_string_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharactersInput">exclude_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercaseInput">exclude_lowercase_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbersInput">exclude_numbers_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuationInput">exclude_punctuation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercaseInput">exclude_uppercase_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKeyInput">generate_string_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpaceInput">include_space_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLengthInput">password_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedTypeInput">require_each_included_type_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplateInput">secret_string_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharacters">exclude_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercase">exclude_lowercase</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbers">exclude_numbers</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuation">exclude_punctuation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercase">exclude_uppercase</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKey">generate_string_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpace">include_space</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLength">password_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedType">require_each_included_type</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplate">secret_string_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_characters_input`<sup>Optional</sup> <a name="exclude_characters_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharactersInput"></a>

```python
exclude_characters_input: str
```

- *Type:* str

---

##### `exclude_lowercase_input`<sup>Optional</sup> <a name="exclude_lowercase_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercaseInput"></a>

```python
exclude_lowercase_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude_numbers_input`<sup>Optional</sup> <a name="exclude_numbers_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbersInput"></a>

```python
exclude_numbers_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude_punctuation_input`<sup>Optional</sup> <a name="exclude_punctuation_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuationInput"></a>

```python
exclude_punctuation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude_uppercase_input`<sup>Optional</sup> <a name="exclude_uppercase_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercaseInput"></a>

```python
exclude_uppercase_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `generate_string_key_input`<sup>Optional</sup> <a name="generate_string_key_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKeyInput"></a>

```python
generate_string_key_input: str
```

- *Type:* str

---

##### `include_space_input`<sup>Optional</sup> <a name="include_space_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpaceInput"></a>

```python
include_space_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `password_length_input`<sup>Optional</sup> <a name="password_length_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLengthInput"></a>

```python
password_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_each_included_type_input`<sup>Optional</sup> <a name="require_each_included_type_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedTypeInput"></a>

```python
require_each_included_type_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `secret_string_template_input`<sup>Optional</sup> <a name="secret_string_template_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplateInput"></a>

```python
secret_string_template_input: str
```

- *Type:* str

---

##### `exclude_characters`<sup>Required</sup> <a name="exclude_characters" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharacters"></a>

```python
exclude_characters: str
```

- *Type:* str

---

##### `exclude_lowercase`<sup>Required</sup> <a name="exclude_lowercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercase"></a>

```python
exclude_lowercase: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude_numbers`<sup>Required</sup> <a name="exclude_numbers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbers"></a>

```python
exclude_numbers: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude_punctuation`<sup>Required</sup> <a name="exclude_punctuation" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuation"></a>

```python
exclude_punctuation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude_uppercase`<sup>Required</sup> <a name="exclude_uppercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercase"></a>

```python
exclude_uppercase: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `generate_string_key`<sup>Required</sup> <a name="generate_string_key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKey"></a>

```python
generate_string_key: str
```

- *Type:* str

---

##### `include_space`<sup>Required</sup> <a name="include_space" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpace"></a>

```python
include_space: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `password_length`<sup>Required</sup> <a name="password_length" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLength"></a>

```python
password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_each_included_type`<sup>Required</sup> <a name="require_each_included_type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedType"></a>

```python
require_each_included_type: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `secret_string_template`<sup>Required</sup> <a name="secret_string_template" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplate"></a>

```python
secret_string_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecretsmanagerSecretGenerateSecretString
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

---


### SecretsmanagerSecretReplicaRegionsList <a name="SecretsmanagerSecretReplicaRegionsList" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecretsmanagerSecretReplicaRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecretsmanagerSecretReplicaRegions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>]

---


### SecretsmanagerSecretReplicaRegionsOutputReference <a name="SecretsmanagerSecretReplicaRegionsOutputReference" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecretsmanagerSecretReplicaRegions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>

---


### SecretsmanagerSecretTagsList <a name="SecretsmanagerSecretTagsList" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecretsmanagerSecretTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecretsmanagerSecretTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>]

---


### SecretsmanagerSecretTagsOutputReference <a name="SecretsmanagerSecretTagsOutputReference" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecretsmanagerSecretTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>

---



