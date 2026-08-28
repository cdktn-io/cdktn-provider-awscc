# `codecommitRepository` Submodule <a name="`codecommitRepository` Submodule" id="@cdktn/provider-awscc.codecommitRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodecommitRepository <a name="CodecommitRepository" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository awscc_codecommit_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepository(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  repository_name: str,
  code: CodecommitRepositoryCode = None,
  kms_key_id: str = None,
  repository_description: str = None,
  tags: IResolvable | typing.List[CodecommitRepositoryTags] = None,
  triggers: IResolvable | typing.List[CodecommitRepositoryTriggers] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.repositoryName">repository_name</a></code> | <code>str</code> | The name of the new repository to be created. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a></code> | Information about code to be committed to a repository after it is created in an AWS CloudFormation stack. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID of the AWS Key Management Service encryption key used to encrypt and decrypt the repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.repositoryDescription">repository_description</a></code> | <code>str</code> | A comment or description about the new repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>]</code> | One or more tag key-value pairs to use when tagging this repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.triggers">triggers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>]</code> | Information about a trigger for a repository. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.repositoryName"></a>

- *Type:* str

The name of the new repository to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#repository_name CodecommitRepository#repository_name}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.code"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a>

Information about code to be committed to a repository after it is created in an AWS CloudFormation stack.

Information about code is only used in resource creation. Updates to a stack will not reflect changes made to code properties after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#code CodecommitRepository#code}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The ID of the AWS Key Management Service encryption key used to encrypt and decrypt the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#kms_key_id CodecommitRepository#kms_key_id}

---

##### `repository_description`<sup>Optional</sup> <a name="repository_description" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.repositoryDescription"></a>

- *Type:* str

A comment or description about the new repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#repository_description CodecommitRepository#repository_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>]

One or more tag key-value pairs to use when tagging this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#tags CodecommitRepository#tags}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.Initializer.parameter.triggers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>]

Information about a trigger for a repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#triggers CodecommitRepository#triggers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putCode">put_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putTriggers">put_triggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetRepositoryDescription">reset_repository_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetTriggers">reset_triggers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_code` <a name="put_code" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putCode"></a>

```python
def put_code(
  branch_name: str = None,
  s3: CodecommitRepositoryCodeS3 = None
) -> None
```

###### `branch_name`<sup>Optional</sup> <a name="branch_name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putCode.parameter.branchName"></a>

- *Type:* str

Optional.

Specifies a branch name to be used as the default branch when importing code into a repository on initial creation. If this property is not set, the name main will be used for the default branch for the repository. Changes to this property are ignored after initial resource creation. We recommend using this parameter to set the name to main to align with the default behavior of CodeCommit unless another name is needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#branch_name CodecommitRepository#branch_name}

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putCode.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a>

Information about the Amazon S3 bucket that contains a ZIP file of code to be committed to the repository.

Changes to this property are ignored after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#s3 CodecommitRepository#s3}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CodecommitRepositoryTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>]

---

##### `put_triggers` <a name="put_triggers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putTriggers"></a>

```python
def put_triggers(
  value: IResolvable | typing.List[CodecommitRepositoryTriggers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.putTriggers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>]

---

##### `reset_code` <a name="reset_code" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_repository_description` <a name="reset_repository_description" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetRepositoryDescription"></a>

```python
def reset_repository_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.resetTriggers"></a>

```python
def reset_triggers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CodecommitRepository resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isConstruct"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepository.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isTerraformElement"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isTerraformResource"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepository.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CodecommitRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodecommitRepository to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodecommitRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodecommitRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.cloneUrlHttp">clone_url_http</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.cloneUrlSsh">clone_url_ssh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference">CodecommitRepositoryCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList">CodecommitRepositoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.triggers">triggers</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList">CodecommitRepositoryTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.codeInput">code_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryDescriptionInput">repository_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.triggersInput">triggers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryDescription">repository_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `clone_url_http`<sup>Required</sup> <a name="clone_url_http" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.cloneUrlHttp"></a>

```python
clone_url_http: str
```

- *Type:* str

---

##### `clone_url_ssh`<sup>Required</sup> <a name="clone_url_ssh" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.cloneUrlSsh"></a>

```python
clone_url_ssh: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.code"></a>

```python
code: CodecommitRepositoryCodeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference">CodecommitRepositoryCodeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.tags"></a>

```python
tags: CodecommitRepositoryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList">CodecommitRepositoryTagsList</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.triggers"></a>

```python
triggers: CodecommitRepositoryTriggersList
```

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList">CodecommitRepositoryTriggersList</a>

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.codeInput"></a>

```python
code_input: IResolvable | CodecommitRepositoryCode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `repository_description_input`<sup>Optional</sup> <a name="repository_description_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryDescriptionInput"></a>

```python
repository_description_input: str
```

- *Type:* str

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CodecommitRepositoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>]

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.triggersInput"></a>

```python
triggers_input: IResolvable | typing.List[CodecommitRepositoryTriggers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `repository_description`<sup>Required</sup> <a name="repository_description" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryDescription"></a>

```python
repository_description: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodecommitRepositoryCode <a name="CodecommitRepositoryCode" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode.Initializer"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepositoryCode(
  branch_name: str = None,
  s3: CodecommitRepositoryCodeS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode.property.branchName">branch_name</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a></code> | Information about the Amazon S3 bucket that contains a ZIP file of code to be committed to the repository. |

---

##### `branch_name`<sup>Optional</sup> <a name="branch_name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

Optional.

Specifies a branch name to be used as the default branch when importing code into a repository on initial creation. If this property is not set, the name main will be used for the default branch for the repository. Changes to this property are ignored after initial resource creation. We recommend using this parameter to set the name to main to align with the default behavior of CodeCommit unless another name is needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#branch_name CodecommitRepository#branch_name}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode.property.s3"></a>

```python
s3: CodecommitRepositoryCodeS3
```

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a>

Information about the Amazon S3 bucket that contains a ZIP file of code to be committed to the repository.

Changes to this property are ignored after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#s3 CodecommitRepository#s3}

---

### CodecommitRepositoryCodeS3 <a name="CodecommitRepositoryCodeS3" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.Initializer"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepositoryCodeS3(
  bucket: str = None,
  key: str = None,
  object_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.property.bucket">bucket</a></code> | <code>str</code> | The name of the Amazon S3 bucket that contains the ZIP file with the content that will be committed to the new repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.property.key">key</a></code> | <code>str</code> | The key to use for accessing the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.property.objectVersion">object_version</a></code> | <code>str</code> | The object version of the ZIP file, if versioning is enabled for the Amazon S3 bucket. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the Amazon S3 bucket that contains the ZIP file with the content that will be committed to the new repository.

This can be specified using the name of the bucket in the AWS account. Changes to this property are ignored after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#bucket CodecommitRepository#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.property.key"></a>

```python
key: str
```

- *Type:* str

The key to use for accessing the Amazon S3 bucket.

Changes to this property are ignored after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#key CodecommitRepository#key}

---

##### `object_version`<sup>Optional</sup> <a name="object_version" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3.property.objectVersion"></a>

```python
object_version: str
```

- *Type:* str

The object version of the ZIP file, if versioning is enabled for the Amazon S3 bucket.

Changes to this property are ignored after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#object_version CodecommitRepository#object_version}

---

### CodecommitRepositoryConfig <a name="CodecommitRepositoryConfig" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepositoryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  repository_name: str,
  code: CodecommitRepositoryCode = None,
  kms_key_id: str = None,
  repository_description: str = None,
  tags: IResolvable | typing.List[CodecommitRepositoryTags] = None,
  triggers: IResolvable | typing.List[CodecommitRepositoryTriggers] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.repositoryName">repository_name</a></code> | <code>str</code> | The name of the new repository to be created. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a></code> | Information about code to be committed to a repository after it is created in an AWS CloudFormation stack. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID of the AWS Key Management Service encryption key used to encrypt and decrypt the repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.repositoryDescription">repository_description</a></code> | <code>str</code> | A comment or description about the new repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>]</code> | One or more tag key-value pairs to use when tagging this repository. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.triggers">triggers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>]</code> | Information about a trigger for a repository. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

The name of the new repository to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#repository_name CodecommitRepository#repository_name}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.code"></a>

```python
code: CodecommitRepositoryCode
```

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a>

Information about code to be committed to a repository after it is created in an AWS CloudFormation stack.

Information about code is only used in resource creation. Updates to a stack will not reflect changes made to code properties after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#code CodecommitRepository#code}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The ID of the AWS Key Management Service encryption key used to encrypt and decrypt the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#kms_key_id CodecommitRepository#kms_key_id}

---

##### `repository_description`<sup>Optional</sup> <a name="repository_description" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.repositoryDescription"></a>

```python
repository_description: str
```

- *Type:* str

A comment or description about the new repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#repository_description CodecommitRepository#repository_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CodecommitRepositoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>]

One or more tag key-value pairs to use when tagging this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#tags CodecommitRepository#tags}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryConfig.property.triggers"></a>

```python
triggers: IResolvable | typing.List[CodecommitRepositoryTriggers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>]

Information about a trigger for a repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#triggers CodecommitRepository#triggers}

---

### CodecommitRepositoryTags <a name="CodecommitRepositoryTags" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags.Initializer"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepositoryTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags.property.key">key</a></code> | <code>str</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags.property.value">value</a></code> | <code>str</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#key CodecommitRepository#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#value CodecommitRepository#value}

---

### CodecommitRepositoryTriggers <a name="CodecommitRepositoryTriggers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.Initializer"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepositoryTriggers(
  branches: typing.List[str] = None,
  custom_data: str = None,
  destination_arn: str = None,
  events: typing.List[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.branches">branches</a></code> | <code>typing.List[str]</code> | The branches to be included in the trigger configuration. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.customData">custom_data</a></code> | <code>str</code> | Any custom data associated with the trigger to be included in the information sent to the target of the trigger. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.destinationArn">destination_arn</a></code> | <code>str</code> | The ARN of the resource that is the target for a trigger (for example, the ARN of a topic in Amazon SNS). |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.events">events</a></code> | <code>typing.List[str]</code> | The repository events that cause the trigger to run actions in another service, such as sending a notification through Amazon SNS. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.name">name</a></code> | <code>str</code> | The name of the trigger. |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.branches"></a>

```python
branches: typing.List[str]
```

- *Type:* typing.List[str]

The branches to be included in the trigger configuration.

If you specify an empty array, the trigger applies to all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#branches CodecommitRepository#branches}

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

Any custom data associated with the trigger to be included in the information sent to the target of the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#custom_data CodecommitRepository#custom_data}

---

##### `destination_arn`<sup>Optional</sup> <a name="destination_arn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

The ARN of the resource that is the target for a trigger (for example, the ARN of a topic in Amazon SNS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#destination_arn CodecommitRepository#destination_arn}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

The repository events that cause the trigger to run actions in another service, such as sending a notification through Amazon SNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#events CodecommitRepository#events}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#name CodecommitRepository#name}

---

## Classes <a name="Classes" id="Classes"></a>

### CodecommitRepositoryCodeOutputReference <a name="CodecommitRepositoryCodeOutputReference" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepositoryCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resetBranchName">reset_branch_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.putS3"></a>

```python
def put_s3(
  bucket: str = None,
  key: str = None,
  object_version: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.putS3.parameter.bucket"></a>

- *Type:* str

The name of the Amazon S3 bucket that contains the ZIP file with the content that will be committed to the new repository.

This can be specified using the name of the bucket in the AWS account. Changes to this property are ignored after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#bucket CodecommitRepository#bucket}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.putS3.parameter.key"></a>

- *Type:* str

The key to use for accessing the Amazon S3 bucket.

Changes to this property are ignored after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#key CodecommitRepository#key}

---

###### `object_version`<sup>Optional</sup> <a name="object_version" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.putS3.parameter.objectVersion"></a>

- *Type:* str

The object version of the ZIP file, if versioning is enabled for the Amazon S3 bucket.

Changes to this property are ignored after initial resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#object_version CodecommitRepository#object_version}

---

##### `reset_branch_name` <a name="reset_branch_name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resetBranchName"></a>

```python
def reset_branch_name() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference">CodecommitRepositoryCodeS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.branchNameInput">branch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.s3"></a>

```python
s3: CodecommitRepositoryCodeS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference">CodecommitRepositoryCodeS3OutputReference</a>

---

##### `branch_name_input`<sup>Optional</sup> <a name="branch_name_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.branchNameInput"></a>

```python
branch_name_input: str
```

- *Type:* str

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | CodecommitRepositoryCodeS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a>

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodecommitRepositoryCode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCode">CodecommitRepositoryCode</a>

---


### CodecommitRepositoryCodeS3OutputReference <a name="CodecommitRepositoryCodeS3OutputReference" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepositoryCodeS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resetObjectVersion">reset_object_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_object_version` <a name="reset_object_version" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.resetObjectVersion"></a>

```python
def reset_object_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.objectVersionInput">object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.objectVersion">object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `object_version_input`<sup>Optional</sup> <a name="object_version_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.objectVersionInput"></a>

```python
object_version_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.objectVersion"></a>

```python
object_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodecommitRepositoryCodeS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryCodeS3">CodecommitRepositoryCodeS3</a>

---


### CodecommitRepositoryTagsList <a name="CodecommitRepositoryTagsList" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepositoryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodecommitRepositoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodecommitRepositoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>]

---


### CodecommitRepositoryTagsOutputReference <a name="CodecommitRepositoryTagsOutputReference" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepositoryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodecommitRepositoryTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTags">CodecommitRepositoryTags</a>

---


### CodecommitRepositoryTriggersList <a name="CodecommitRepositoryTriggersList" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepositoryTriggersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodecommitRepositoryTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodecommitRepositoryTriggers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>]

---


### CodecommitRepositoryTriggersOutputReference <a name="CodecommitRepositoryTriggersOutputReference" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codecommit_repository

codecommitRepository.CodecommitRepositoryTriggersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetBranches">reset_branches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetCustomData">reset_custom_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetDestinationArn">reset_destination_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetEvents">reset_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branches` <a name="reset_branches" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetBranches"></a>

```python
def reset_branches() -> None
```

##### `reset_custom_data` <a name="reset_custom_data" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetCustomData"></a>

```python
def reset_custom_data() -> None
```

##### `reset_destination_arn` <a name="reset_destination_arn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetDestinationArn"></a>

```python
def reset_destination_arn() -> None
```

##### `reset_events` <a name="reset_events" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetEvents"></a>

```python
def reset_events() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.branchesInput">branches_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.customDataInput">custom_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.destinationArnInput">destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.branches">branches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.customData">custom_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branches_input`<sup>Optional</sup> <a name="branches_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.branchesInput"></a>

```python
branches_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_data_input`<sup>Optional</sup> <a name="custom_data_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.customDataInput"></a>

```python
custom_data_input: str
```

- *Type:* str

---

##### `destination_arn_input`<sup>Optional</sup> <a name="destination_arn_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.destinationArnInput"></a>

```python
destination_arn_input: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.branches"></a>

```python
branches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_data`<sup>Required</sup> <a name="custom_data" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodecommitRepositoryTriggers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codecommitRepository.CodecommitRepositoryTriggers">CodecommitRepositoryTriggers</a>

---



