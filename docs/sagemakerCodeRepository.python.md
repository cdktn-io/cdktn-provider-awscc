# `sagemakerCodeRepository` Submodule <a name="`sagemakerCodeRepository` Submodule" id="@cdktn/provider-awscc.sagemakerCodeRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerCodeRepository <a name="SagemakerCodeRepository" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository awscc_sagemaker_code_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_code_repository

sagemakerCodeRepository.SagemakerCodeRepository(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  git_config: SagemakerCodeRepositoryGitConfig,
  code_repository_name: str = None,
  tags: IResolvable | typing.List[SagemakerCodeRepositoryTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.gitConfig">git_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a></code> | Configuration details for the Git repository, including the URL where it is located and the ARN of the AWS Secrets Manager secret that contains the credentials used to access the repository. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.codeRepositoryName">code_repository_name</a></code> | <code>str</code> | The name of the Git repository. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>]</code> | An array of key-value pairs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `git_config`<sup>Required</sup> <a name="git_config" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.gitConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a>

Configuration details for the Git repository, including the URL where it is located and the ARN of the AWS Secrets Manager secret that contains the credentials used to access the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#git_config SagemakerCodeRepository#git_config}

---

##### `code_repository_name`<sup>Optional</sup> <a name="code_repository_name" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.codeRepositoryName"></a>

- *Type:* str

The name of the Git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#code_repository_name SagemakerCodeRepository#code_repository_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>]

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#tags SagemakerCodeRepository#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putGitConfig">put_git_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.resetCodeRepositoryName">reset_code_repository_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_git_config` <a name="put_git_config" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putGitConfig"></a>

```python
def put_git_config(
  repository_url: str,
  branch: str = None,
  secret_arn: str = None
) -> None
```

###### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putGitConfig.parameter.repositoryUrl"></a>

- *Type:* str

The URL where the Git repository is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#repository_url SagemakerCodeRepository#repository_url}

---

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putGitConfig.parameter.branch"></a>

- *Type:* str

The default branch for the Git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#branch SagemakerCodeRepository#branch}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putGitConfig.parameter.secretArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#secret_arn SagemakerCodeRepository#secret_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerCodeRepositoryTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>]

---

##### `reset_code_repository_name` <a name="reset_code_repository_name" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.resetCodeRepositoryName"></a>

```python
def reset_code_repository_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerCodeRepository resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_code_repository

sagemakerCodeRepository.SagemakerCodeRepository.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_code_repository

sagemakerCodeRepository.SagemakerCodeRepository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_code_repository

sagemakerCodeRepository.SagemakerCodeRepository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_code_repository

sagemakerCodeRepository.SagemakerCodeRepository.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerCodeRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerCodeRepository to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerCodeRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerCodeRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryArn">code_repository_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.gitConfig">git_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference">SagemakerCodeRepositoryGitConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList">SagemakerCodeRepositoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryNameInput">code_repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.gitConfigInput">git_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryName">code_repository_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `code_repository_arn`<sup>Required</sup> <a name="code_repository_arn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryArn"></a>

```python
code_repository_arn: str
```

- *Type:* str

---

##### `git_config`<sup>Required</sup> <a name="git_config" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.gitConfig"></a>

```python
git_config: SagemakerCodeRepositoryGitConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference">SagemakerCodeRepositoryGitConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.tags"></a>

```python
tags: SagemakerCodeRepositoryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList">SagemakerCodeRepositoryTagsList</a>

---

##### `code_repository_name_input`<sup>Optional</sup> <a name="code_repository_name_input" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryNameInput"></a>

```python
code_repository_name_input: str
```

- *Type:* str

---

##### `git_config_input`<sup>Optional</sup> <a name="git_config_input" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.gitConfigInput"></a>

```python
git_config_input: IResolvable | SagemakerCodeRepositoryGitConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerCodeRepositoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>]

---

##### `code_repository_name`<sup>Required</sup> <a name="code_repository_name" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryName"></a>

```python
code_repository_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerCodeRepositoryConfig <a name="SagemakerCodeRepositoryConfig" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_code_repository

sagemakerCodeRepository.SagemakerCodeRepositoryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  git_config: SagemakerCodeRepositoryGitConfig,
  code_repository_name: str = None,
  tags: IResolvable | typing.List[SagemakerCodeRepositoryTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.gitConfig">git_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a></code> | Configuration details for the Git repository, including the URL where it is located and the ARN of the AWS Secrets Manager secret that contains the credentials used to access the repository. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.codeRepositoryName">code_repository_name</a></code> | <code>str</code> | The name of the Git repository. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>]</code> | An array of key-value pairs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `git_config`<sup>Required</sup> <a name="git_config" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.gitConfig"></a>

```python
git_config: SagemakerCodeRepositoryGitConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a>

Configuration details for the Git repository, including the URL where it is located and the ARN of the AWS Secrets Manager secret that contains the credentials used to access the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#git_config SagemakerCodeRepository#git_config}

---

##### `code_repository_name`<sup>Optional</sup> <a name="code_repository_name" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.codeRepositoryName"></a>

```python
code_repository_name: str
```

- *Type:* str

The name of the Git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#code_repository_name SagemakerCodeRepository#code_repository_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerCodeRepositoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>]

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#tags SagemakerCodeRepository#tags}

---

### SagemakerCodeRepositoryGitConfig <a name="SagemakerCodeRepositoryGitConfig" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_code_repository

sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig(
  repository_url: str,
  branch: str = None,
  secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.repositoryUrl">repository_url</a></code> | <code>str</code> | The URL where the Git repository is located. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.branch">branch</a></code> | <code>str</code> | The default branch for the Git repository. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.secretArn">secret_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the git repository. |

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

The URL where the Git repository is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#repository_url SagemakerCodeRepository#repository_url}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.branch"></a>

```python
branch: str
```

- *Type:* str

The default branch for the Git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#branch SagemakerCodeRepository#branch}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#secret_arn SagemakerCodeRepository#secret_arn}

---

### SagemakerCodeRepositoryTags <a name="SagemakerCodeRepositoryTags" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_code_repository

sagemakerCodeRepository.SagemakerCodeRepositoryTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#key SagemakerCodeRepository#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_code_repository#value SagemakerCodeRepository#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerCodeRepositoryGitConfigOutputReference <a name="SagemakerCodeRepositoryGitConfigOutputReference" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_code_repository

sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.repositoryUrlInput">repository_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `repository_url_input`<sup>Optional</sup> <a name="repository_url_input" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.repositoryUrlInput"></a>

```python
repository_url_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerCodeRepositoryGitConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a>

---


### SagemakerCodeRepositoryTagsList <a name="SagemakerCodeRepositoryTagsList" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_code_repository

sagemakerCodeRepository.SagemakerCodeRepositoryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerCodeRepositoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerCodeRepositoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>]

---


### SagemakerCodeRepositoryTagsOutputReference <a name="SagemakerCodeRepositoryTagsOutputReference" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_code_repository

sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerCodeRepositoryTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerCodeRepository.SagemakerCodeRepositoryTags">SagemakerCodeRepositoryTags</a>

---



