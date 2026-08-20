# `codegurureviewerRepositoryAssociation` Submodule <a name="`codegurureviewerRepositoryAssociation` Submodule" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodegurureviewerRepositoryAssociation <a name="CodegurureviewerRepositoryAssociation" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association awscc_codegurureviewer_repository_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  type: str,
  bucket_name: str = None,
  connection_arn: str = None,
  owner: str = None,
  tags: IResolvable | typing.List[CodegurureviewerRepositoryAssociationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the repository to be associated. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of repository to be associated. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.connectionArn">connection_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.owner">owner</a></code> | <code>str</code> | The owner of the repository. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>]</code> | The tags associated with a repository association. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.name"></a>

- *Type:* str

Name of the repository to be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.type"></a>

- *Type:* str

The type of repository to be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association#type CodegurureviewerRepositoryAssociation#type}

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.bucketName"></a>

- *Type:* str

The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}

---

##### `connection_arn`<sup>Optional</sup> <a name="connection_arn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.connectionArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.owner"></a>

- *Type:* str

The owner of the repository.

For a Bitbucket repository, this is the username for the account that owns the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>]

The tags associated with a repository association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetConnectionArn">reset_connection_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CodegurureviewerRepositoryAssociationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>]

---

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_connection_arn` <a name="reset_connection_arn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetConnectionArn"></a>

```python
def reset_connection_arn() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CodegurureviewerRepositoryAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CodegurureviewerRepositoryAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodegurureviewerRepositoryAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodegurureviewerRepositoryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodegurureviewerRepositoryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.associationArn">association_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList">CodegurureviewerRepositoryAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArnInput">connection_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArn">connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `association_arn`<sup>Required</sup> <a name="association_arn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.associationArn"></a>

```python
association_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tags"></a>

```python
tags: CodegurureviewerRepositoryAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList">CodegurureviewerRepositoryAssociationTagsList</a>

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `connection_arn_input`<sup>Optional</sup> <a name="connection_arn_input" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArnInput"></a>

```python
connection_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CodegurureviewerRepositoryAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodegurureviewerRepositoryAssociationConfig <a name="CodegurureviewerRepositoryAssociationConfig" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  type: str,
  bucket_name: str = None,
  connection_arn: str = None,
  owner: str = None,
  tags: IResolvable | typing.List[CodegurureviewerRepositoryAssociationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.name">name</a></code> | <code>str</code> | Name of the repository to be associated. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.type">type</a></code> | <code>str</code> | The type of repository to be associated. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connectionArn">connection_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.owner">owner</a></code> | <code>str</code> | The owner of the repository. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>]</code> | The tags associated with a repository association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the repository to be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of repository to be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association#type CodegurureviewerRepositoryAssociation#type}

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}

---

##### `connection_arn`<sup>Optional</sup> <a name="connection_arn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

The owner of the repository.

For a Bitbucket repository, this is the username for the account that owns the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CodegurureviewerRepositoryAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>]

The tags associated with a repository association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}

---

### CodegurureviewerRepositoryAssociationTags <a name="CodegurureviewerRepositoryAssociationTags" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : /

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : /

---

## Classes <a name="Classes" id="Classes"></a>

### CodegurureviewerRepositoryAssociationTagsList <a name="CodegurureviewerRepositoryAssociationTagsList" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodegurureviewerRepositoryAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodegurureviewerRepositoryAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>]

---


### CodegurureviewerRepositoryAssociationTagsOutputReference <a name="CodegurureviewerRepositoryAssociationTagsOutputReference" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodegurureviewerRepositoryAssociationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTags">CodegurureviewerRepositoryAssociationTags</a>

---



