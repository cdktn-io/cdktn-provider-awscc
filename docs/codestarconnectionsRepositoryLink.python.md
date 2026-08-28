# `codestarconnectionsRepositoryLink` Submodule <a name="`codestarconnectionsRepositoryLink` Submodule" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarconnectionsRepositoryLink <a name="CodestarconnectionsRepositoryLink" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link awscc_codestarconnections_repository_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer"></a>

```python
from cdktn_provider_awscc import codestarconnections_repository_link

codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_arn: str,
  owner_id: str,
  repository_name: str,
  encryption_key_arn: str = None,
  tags: IResolvable | typing.List[CodestarconnectionsRepositoryLinkTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.connectionArn">connection_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the CodeStarConnection. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.ownerId">owner_id</a></code> | <code>str</code> | the ID of the entity that owns the repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.repositoryName">repository_name</a></code> | <code>str</code> | The repository for which the link is being created. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | The ARN of the KMS key that the customer can optionally specify to use to encrypt RepositoryLink properties. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>]</code> | Specifies the tags applied to a RepositoryLink. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.connectionArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the CodeStarConnection.

The ARN is used as the connection reference when the connection is shared between AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#connection_arn CodestarconnectionsRepositoryLink#connection_arn}

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.ownerId"></a>

- *Type:* str

the ID of the entity that owns the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#owner_id CodestarconnectionsRepositoryLink#owner_id}

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.repositoryName"></a>

- *Type:* str

The repository for which the link is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#repository_name CodestarconnectionsRepositoryLink#repository_name}

---

##### `encryption_key_arn`<sup>Optional</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.encryptionKeyArn"></a>

- *Type:* str

The ARN of the KMS key that the customer can optionally specify to use to encrypt RepositoryLink properties.

If not specified, a default key will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#encryption_key_arn CodestarconnectionsRepositoryLink#encryption_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>]

Specifies the tags applied to a RepositoryLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#tags CodestarconnectionsRepositoryLink#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetEncryptionKeyArn">reset_encryption_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CodestarconnectionsRepositoryLinkTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>]

---

##### `reset_encryption_key_arn` <a name="reset_encryption_key_arn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetEncryptionKeyArn"></a>

```python
def reset_encryption_key_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CodestarconnectionsRepositoryLink resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isConstruct"></a>

```python
from cdktn_provider_awscc import codestarconnections_repository_link

codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformElement"></a>

```python
from cdktn_provider_awscc import codestarconnections_repository_link

codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformResource"></a>

```python
from cdktn_provider_awscc import codestarconnections_repository_link

codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import codestarconnections_repository_link

codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CodestarconnectionsRepositoryLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodestarconnectionsRepositoryLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodestarconnectionsRepositoryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodestarconnectionsRepositoryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryLinkArn">repository_link_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryLinkId">repository_link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList">CodestarconnectionsRepositoryLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connectionArnInput">connection_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.encryptionKeyArnInput">encryption_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.ownerIdInput">owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connectionArn">connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `repository_link_arn`<sup>Required</sup> <a name="repository_link_arn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryLinkArn"></a>

```python
repository_link_arn: str
```

- *Type:* str

---

##### `repository_link_id`<sup>Required</sup> <a name="repository_link_id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryLinkId"></a>

```python
repository_link_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tags"></a>

```python
tags: CodestarconnectionsRepositoryLinkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList">CodestarconnectionsRepositoryLinkTagsList</a>

---

##### `connection_arn_input`<sup>Optional</sup> <a name="connection_arn_input" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connectionArnInput"></a>

```python
connection_arn_input: str
```

- *Type:* str

---

##### `encryption_key_arn_input`<sup>Optional</sup> <a name="encryption_key_arn_input" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.encryptionKeyArnInput"></a>

```python
encryption_key_arn_input: str
```

- *Type:* str

---

##### `owner_id_input`<sup>Optional</sup> <a name="owner_id_input" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.ownerIdInput"></a>

```python
owner_id_input: str
```

- *Type:* str

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CodestarconnectionsRepositoryLinkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>]

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

---

##### `encryption_key_arn`<sup>Required</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarconnectionsRepositoryLinkConfig <a name="CodestarconnectionsRepositoryLinkConfig" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codestarconnections_repository_link

codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_arn: str,
  owner_id: str,
  repository_name: str,
  encryption_key_arn: str = None,
  tags: IResolvable | typing.List[CodestarconnectionsRepositoryLinkTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.connectionArn">connection_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the CodeStarConnection. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.ownerId">owner_id</a></code> | <code>str</code> | the ID of the entity that owns the repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.repositoryName">repository_name</a></code> | <code>str</code> | The repository for which the link is being created. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | The ARN of the KMS key that the customer can optionally specify to use to encrypt RepositoryLink properties. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>]</code> | Specifies the tags applied to a RepositoryLink. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the CodeStarConnection.

The ARN is used as the connection reference when the connection is shared between AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#connection_arn CodestarconnectionsRepositoryLink#connection_arn}

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

the ID of the entity that owns the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#owner_id CodestarconnectionsRepositoryLink#owner_id}

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

The repository for which the link is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#repository_name CodestarconnectionsRepositoryLink#repository_name}

---

##### `encryption_key_arn`<sup>Optional</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

The ARN of the KMS key that the customer can optionally specify to use to encrypt RepositoryLink properties.

If not specified, a default key will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#encryption_key_arn CodestarconnectionsRepositoryLink#encryption_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CodestarconnectionsRepositoryLinkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>]

Specifies the tags applied to a RepositoryLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#tags CodestarconnectionsRepositoryLink#tags}

---

### CodestarconnectionsRepositoryLinkTags <a name="CodestarconnectionsRepositoryLinkTags" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.Initializer"></a>

```python
from cdktn_provider_awscc import codestarconnections_repository_link

codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, , ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#key CodestarconnectionsRepositoryLink#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, , ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_repository_link#value CodestarconnectionsRepositoryLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CodestarconnectionsRepositoryLinkTagsList <a name="CodestarconnectionsRepositoryLinkTagsList" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import codestarconnections_repository_link

codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodestarconnectionsRepositoryLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodestarconnectionsRepositoryLinkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>]

---


### CodestarconnectionsRepositoryLinkTagsOutputReference <a name="CodestarconnectionsRepositoryLinkTagsOutputReference" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codestarconnections_repository_link

codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodestarconnectionsRepositoryLinkTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codestarconnectionsRepositoryLink.CodestarconnectionsRepositoryLinkTags">CodestarconnectionsRepositoryLinkTags</a>

---



