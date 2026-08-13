# `ecrPublicRepository` Submodule <a name="`ecrPublicRepository` Submodule" id="@cdktn/provider-awscc.ecrPublicRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrPublicRepository <a name="EcrPublicRepository" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository awscc_ecr_public_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_public_repository

ecrPublicRepository.EcrPublicRepository(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  repository_catalog_data: EcrPublicRepositoryRepositoryCatalogData = None,
  repository_name: str = None,
  repository_policy_text: str = None,
  tags: IResolvable | typing.List[EcrPublicRepositoryTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.repositoryCatalogData">repository_catalog_data</a></code> | <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a></code> | The details about the repository that are publicly visible in the Amazon ECR Public Gallery. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.repositoryName">repository_name</a></code> | <code>str</code> | The name to use for the public repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.repositoryPolicyText">repository_policy_text</a></code> | <code>str</code> | The JSON repository policy text to apply to the public repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `repository_catalog_data`<sup>Optional</sup> <a name="repository_catalog_data" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.repositoryCatalogData"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a>

The details about the repository that are publicly visible in the Amazon ECR Public Gallery.

For more information, see [Amazon ECR Public repository catalog data](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-catalog-data.html) in the *Amazon ECR Public User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_catalog_data EcrPublicRepository#repository_catalog_data}

---

##### `repository_name`<sup>Optional</sup> <a name="repository_name" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.repositoryName"></a>

- *Type:* str

The name to use for the public repository.

The repository name may be specified on its own (such as `nginx-web-app`) or it can be prepended with a namespace to group the repository into a category (such as `project-a/nginx-web-app`). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_name EcrPublicRepository#repository_name}

---

##### `repository_policy_text`<sup>Optional</sup> <a name="repository_policy_text" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.repositoryPolicyText"></a>

- *Type:* str

The JSON repository policy text to apply to the public repository.

For more information, see [Amazon ECR Public repository policies](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-policies.html) in the *Amazon ECR Public User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_policy_text EcrPublicRepository#repository_policy_text}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#tags EcrPublicRepository#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putRepositoryCatalogData">put_repository_catalog_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryCatalogData">reset_repository_catalog_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryName">reset_repository_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryPolicyText">reset_repository_policy_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_repository_catalog_data` <a name="put_repository_catalog_data" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putRepositoryCatalogData"></a>

```python
def put_repository_catalog_data(
  about_text: str = None,
  architectures: typing.List[str] = None,
  operating_systems: typing.List[str] = None,
  repository_description: str = None,
  usage_text: str = None
) -> None
```

###### `about_text`<sup>Optional</sup> <a name="about_text" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putRepositoryCatalogData.parameter.aboutText"></a>

- *Type:* str

Provide a detailed description of the repository.

Identify what is included in the repository, any licensing details, or other relevant information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#about_text EcrPublicRepository#about_text}

---

###### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putRepositoryCatalogData.parameter.architectures"></a>

- *Type:* typing.List[str]

Select the system architectures that the images in your repository are compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#architectures EcrPublicRepository#architectures}

---

###### `operating_systems`<sup>Optional</sup> <a name="operating_systems" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putRepositoryCatalogData.parameter.operatingSystems"></a>

- *Type:* typing.List[str]

Select the operating systems that the images in your repository are compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#operating_systems EcrPublicRepository#operating_systems}

---

###### `repository_description`<sup>Optional</sup> <a name="repository_description" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putRepositoryCatalogData.parameter.repositoryDescription"></a>

- *Type:* str

The description of the public repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_description EcrPublicRepository#repository_description}

---

###### `usage_text`<sup>Optional</sup> <a name="usage_text" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putRepositoryCatalogData.parameter.usageText"></a>

- *Type:* str

Provide detailed information about how to use the images in the repository.

This provides context, support information, and additional usage details for users of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#usage_text EcrPublicRepository#usage_text}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EcrPublicRepositoryTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>]

---

##### `reset_repository_catalog_data` <a name="reset_repository_catalog_data" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryCatalogData"></a>

```python
def reset_repository_catalog_data() -> None
```

##### `reset_repository_name` <a name="reset_repository_name" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryName"></a>

```python
def reset_repository_name() -> None
```

##### `reset_repository_policy_text` <a name="reset_repository_policy_text" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetRepositoryPolicyText"></a>

```python
def reset_repository_policy_text() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EcrPublicRepository resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isConstruct"></a>

```python
from cdktn_provider_awscc import ecr_public_repository

ecrPublicRepository.EcrPublicRepository.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ecr_public_repository

ecrPublicRepository.EcrPublicRepository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ecr_public_repository

ecrPublicRepository.EcrPublicRepository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ecr_public_repository

ecrPublicRepository.EcrPublicRepository.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EcrPublicRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EcrPublicRepository to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EcrPublicRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EcrPublicRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryCatalogData">repository_catalog_data</a></code> | <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference">EcrPublicRepositoryRepositoryCatalogDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList">EcrPublicRepositoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryCatalogDataInput">repository_catalog_data_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryPolicyTextInput">repository_policy_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryPolicyText">repository_policy_text</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository_catalog_data`<sup>Required</sup> <a name="repository_catalog_data" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryCatalogData"></a>

```python
repository_catalog_data: EcrPublicRepositoryRepositoryCatalogDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference">EcrPublicRepositoryRepositoryCatalogDataOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tags"></a>

```python
tags: EcrPublicRepositoryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList">EcrPublicRepositoryTagsList</a>

---

##### `repository_catalog_data_input`<sup>Optional</sup> <a name="repository_catalog_data_input" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryCatalogDataInput"></a>

```python
repository_catalog_data_input: IResolvable | EcrPublicRepositoryRepositoryCatalogData
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a>

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `repository_policy_text_input`<sup>Optional</sup> <a name="repository_policy_text_input" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryPolicyTextInput"></a>

```python
repository_policy_text_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EcrPublicRepositoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `repository_policy_text`<sup>Required</sup> <a name="repository_policy_text" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.repositoryPolicyText"></a>

```python
repository_policy_text: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcrPublicRepositoryConfig <a name="EcrPublicRepositoryConfig" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_public_repository

ecrPublicRepository.EcrPublicRepositoryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  repository_catalog_data: EcrPublicRepositoryRepositoryCatalogData = None,
  repository_name: str = None,
  repository_policy_text: str = None,
  tags: IResolvable | typing.List[EcrPublicRepositoryTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryCatalogData">repository_catalog_data</a></code> | <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a></code> | The details about the repository that are publicly visible in the Amazon ECR Public Gallery. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryName">repository_name</a></code> | <code>str</code> | The name to use for the public repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryPolicyText">repository_policy_text</a></code> | <code>str</code> | The JSON repository policy text to apply to the public repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `repository_catalog_data`<sup>Optional</sup> <a name="repository_catalog_data" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryCatalogData"></a>

```python
repository_catalog_data: EcrPublicRepositoryRepositoryCatalogData
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a>

The details about the repository that are publicly visible in the Amazon ECR Public Gallery.

For more information, see [Amazon ECR Public repository catalog data](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-catalog-data.html) in the *Amazon ECR Public User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_catalog_data EcrPublicRepository#repository_catalog_data}

---

##### `repository_name`<sup>Optional</sup> <a name="repository_name" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

The name to use for the public repository.

The repository name may be specified on its own (such as `nginx-web-app`) or it can be prepended with a namespace to group the repository into a category (such as `project-a/nginx-web-app`). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_name EcrPublicRepository#repository_name}

---

##### `repository_policy_text`<sup>Optional</sup> <a name="repository_policy_text" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.repositoryPolicyText"></a>

```python
repository_policy_text: str
```

- *Type:* str

The JSON repository policy text to apply to the public repository.

For more information, see [Amazon ECR Public repository policies](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-policies.html) in the *Amazon ECR Public User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_policy_text EcrPublicRepository#repository_policy_text}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EcrPublicRepositoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#tags EcrPublicRepository#tags}

---

### EcrPublicRepositoryRepositoryCatalogData <a name="EcrPublicRepositoryRepositoryCatalogData" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_public_repository

ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData(
  about_text: str = None,
  architectures: typing.List[str] = None,
  operating_systems: typing.List[str] = None,
  repository_description: str = None,
  usage_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.aboutText">about_text</a></code> | <code>str</code> | Provide a detailed description of the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | Select the system architectures that the images in your repository are compatible with. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.operatingSystems">operating_systems</a></code> | <code>typing.List[str]</code> | Select the operating systems that the images in your repository are compatible with. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.repositoryDescription">repository_description</a></code> | <code>str</code> | The description of the public repository. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.usageText">usage_text</a></code> | <code>str</code> | Provide detailed information about how to use the images in the repository. |

---

##### `about_text`<sup>Optional</sup> <a name="about_text" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.aboutText"></a>

```python
about_text: str
```

- *Type:* str

Provide a detailed description of the repository.

Identify what is included in the repository, any licensing details, or other relevant information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#about_text EcrPublicRepository#about_text}

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

Select the system architectures that the images in your repository are compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#architectures EcrPublicRepository#architectures}

---

##### `operating_systems`<sup>Optional</sup> <a name="operating_systems" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.operatingSystems"></a>

```python
operating_systems: typing.List[str]
```

- *Type:* typing.List[str]

Select the operating systems that the images in your repository are compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#operating_systems EcrPublicRepository#operating_systems}

---

##### `repository_description`<sup>Optional</sup> <a name="repository_description" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.repositoryDescription"></a>

```python
repository_description: str
```

- *Type:* str

The description of the public repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#repository_description EcrPublicRepository#repository_description}

---

##### `usage_text`<sup>Optional</sup> <a name="usage_text" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData.property.usageText"></a>

```python
usage_text: str
```

- *Type:* str

Provide detailed information about how to use the images in the repository.

This provides context, support information, and additional usage details for users of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#usage_text EcrPublicRepository#usage_text}

---

### EcrPublicRepositoryTags <a name="EcrPublicRepositoryTags" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_public_repository

ecrPublicRepository.EcrPublicRepositoryTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.property.key">key</a></code> | <code>str</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.property.value">value</a></code> | <code>str</code> | A ``value`` acts as a descriptor within a tag category (key). |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.property.key"></a>

```python
key: str
```

- *Type:* str

One part of a key-value pair that make up a tag.

A `key` is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#key EcrPublicRepository#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags.property.value"></a>

```python
value: str
```

- *Type:* str

A ``value`` acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_public_repository#value EcrPublicRepository#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrPublicRepositoryRepositoryCatalogDataOutputReference <a name="EcrPublicRepositoryRepositoryCatalogDataOutputReference" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_public_repository

ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetAboutText">reset_about_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetArchitectures">reset_architectures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetOperatingSystems">reset_operating_systems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetRepositoryDescription">reset_repository_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetUsageText">reset_usage_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_about_text` <a name="reset_about_text" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetAboutText"></a>

```python
def reset_about_text() -> None
```

##### `reset_architectures` <a name="reset_architectures" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetArchitectures"></a>

```python
def reset_architectures() -> None
```

##### `reset_operating_systems` <a name="reset_operating_systems" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetOperatingSystems"></a>

```python
def reset_operating_systems() -> None
```

##### `reset_repository_description` <a name="reset_repository_description" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetRepositoryDescription"></a>

```python
def reset_repository_description() -> None
```

##### `reset_usage_text` <a name="reset_usage_text" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.resetUsageText"></a>

```python
def reset_usage_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.aboutTextInput">about_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.architecturesInput">architectures_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.operatingSystemsInput">operating_systems_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.repositoryDescriptionInput">repository_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.usageTextInput">usage_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.aboutText">about_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.operatingSystems">operating_systems</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.repositoryDescription">repository_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.usageText">usage_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `about_text_input`<sup>Optional</sup> <a name="about_text_input" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.aboutTextInput"></a>

```python
about_text_input: str
```

- *Type:* str

---

##### `architectures_input`<sup>Optional</sup> <a name="architectures_input" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.architecturesInput"></a>

```python
architectures_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operating_systems_input`<sup>Optional</sup> <a name="operating_systems_input" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.operatingSystemsInput"></a>

```python
operating_systems_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repository_description_input`<sup>Optional</sup> <a name="repository_description_input" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.repositoryDescriptionInput"></a>

```python
repository_description_input: str
```

- *Type:* str

---

##### `usage_text_input`<sup>Optional</sup> <a name="usage_text_input" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.usageTextInput"></a>

```python
usage_text_input: str
```

- *Type:* str

---

##### `about_text`<sup>Required</sup> <a name="about_text" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.aboutText"></a>

```python
about_text: str
```

- *Type:* str

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operating_systems`<sup>Required</sup> <a name="operating_systems" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.operatingSystems"></a>

```python
operating_systems: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repository_description`<sup>Required</sup> <a name="repository_description" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.repositoryDescription"></a>

```python
repository_description: str
```

- *Type:* str

---

##### `usage_text`<sup>Required</sup> <a name="usage_text" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.usageText"></a>

```python
usage_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogDataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrPublicRepositoryRepositoryCatalogData
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryRepositoryCatalogData">EcrPublicRepositoryRepositoryCatalogData</a>

---


### EcrPublicRepositoryTagsList <a name="EcrPublicRepositoryTagsList" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_public_repository

ecrPublicRepository.EcrPublicRepositoryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrPublicRepositoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcrPublicRepositoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>]

---


### EcrPublicRepositoryTagsOutputReference <a name="EcrPublicRepositoryTagsOutputReference" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_public_repository

ecrPublicRepository.EcrPublicRepositoryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrPublicRepositoryTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrPublicRepository.EcrPublicRepositoryTags">EcrPublicRepositoryTags</a>

---



