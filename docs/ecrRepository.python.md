# `ecrRepository` Submodule <a name="`ecrRepository` Submodule" id="@cdktn/provider-awscc.ecrRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRepository <a name="EcrRepository" id="@cdktn/provider-awscc.ecrRepository.EcrRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository awscc_ecr_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepository(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  empty_on_delete: bool | IResolvable = None,
  encryption_configuration: EcrRepositoryEncryptionConfiguration = None,
  image_scanning_configuration: EcrRepositoryImageScanningConfiguration = None,
  image_tag_mutability: str = None,
  image_tag_mutability_exclusion_filters: IResolvable | typing.List[EcrRepositoryImageTagMutabilityExclusionFilters] = None,
  lifecycle_policy: EcrRepositoryLifecyclePolicy = None,
  repository_name: str = None,
  repository_policy_text: str = None,
  tags: IResolvable | typing.List[EcrRepositoryTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.emptyOnDelete">empty_on_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, deleting the repository force deletes the contents of the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a></code> | The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.imageScanningConfiguration">image_scanning_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a></code> | The ``imageScanningConfiguration`` parameter is being deprecated, in favor of specifying the image scanning configuration at the registry level. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.imageTagMutability">image_tag_mutability</a></code> | <code>str</code> | The tag mutability setting for the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.imageTagMutabilityExclusionFilters">image_tag_mutability_exclusion_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters">EcrRepositoryImageTagMutabilityExclusionFilters</a>]</code> | A list of filters that specify which image tags are excluded from the repository's image tag mutability setting. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.lifecyclePolicy">lifecycle_policy</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy">EcrRepositoryLifecyclePolicy</a></code> | Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html). |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.repositoryName">repository_name</a></code> | <code>str</code> | The name to use for the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.repositoryPolicyText">repository_policy_text</a></code> | <code>str</code> | The JSON repository policy text to apply to the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags">EcrRepositoryTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `empty_on_delete`<sup>Optional</sup> <a name="empty_on_delete" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.emptyOnDelete"></a>

- *Type:* bool | cdktn.IResolvable

If true, deleting the repository force deletes the contents of the repository.

If false, the repository must be empty before attempting to delete it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#empty_on_delete EcrRepository#empty_on_delete}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>

The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#encryption_configuration EcrRepository#encryption_configuration}

---

##### `image_scanning_configuration`<sup>Optional</sup> <a name="image_scanning_configuration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.imageScanningConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a>

The ``imageScanningConfiguration`` parameter is being deprecated, in favor of specifying the image scanning configuration at the registry level.

For more information, see `PutRegistryScanningConfiguration`.
The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#image_scanning_configuration EcrRepository#image_scanning_configuration}

---

##### `image_tag_mutability`<sup>Optional</sup> <a name="image_tag_mutability" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.imageTagMutability"></a>

- *Type:* str

The tag mutability setting for the repository.

If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#image_tag_mutability EcrRepository#image_tag_mutability}

---

##### `image_tag_mutability_exclusion_filters`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filters" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.imageTagMutabilityExclusionFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters">EcrRepositoryImageTagMutabilityExclusionFilters</a>]

A list of filters that specify which image tags are excluded from the repository's image tag mutability setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#image_tag_mutability_exclusion_filters EcrRepository#image_tag_mutability_exclusion_filters}

---

##### `lifecycle_policy`<sup>Optional</sup> <a name="lifecycle_policy" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.lifecyclePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy">EcrRepositoryLifecyclePolicy</a>

Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#lifecycle_policy EcrRepository#lifecycle_policy}

---

##### `repository_name`<sup>Optional</sup> <a name="repository_name" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.repositoryName"></a>

- *Type:* str

The name to use for the repository.

The repository name may be specified on its own (such as `nginx-web-app`) or it can be prepended with a namespace to group the repository into a category (such as `project-a/nginx-web-app`). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#repository_name EcrRepository#repository_name}

---

##### `repository_policy_text`<sup>Optional</sup> <a name="repository_policy_text" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.repositoryPolicyText"></a>

- *Type:* str

The JSON repository policy text to apply to the repository.

For more information, see [Amazon ECR repository policies](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#repository_policy_text EcrRepository#repository_policy_text}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags">EcrRepositoryTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#tags EcrRepository#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.putImageScanningConfiguration">put_image_scanning_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.putImageTagMutabilityExclusionFilters">put_image_tag_mutability_exclusion_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.putLifecyclePolicy">put_lifecycle_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetEmptyOnDelete">reset_empty_on_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetImageScanningConfiguration">reset_image_scanning_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetImageTagMutability">reset_image_tag_mutability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetImageTagMutabilityExclusionFilters">reset_image_tag_mutability_exclusion_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetLifecyclePolicy">reset_lifecycle_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetRepositoryName">reset_repository_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetRepositoryPolicyText">reset_repository_policy_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  encryption_type: str = None,
  kms_key: str = None
) -> None
```

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putEncryptionConfiguration.parameter.encryptionType"></a>

- *Type:* str

The encryption type to use.

If you use the `KMS` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
If you use the `KMS_DSSE` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the `KMS` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created.
If you use the `AES256` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#encryption_type EcrRepository#encryption_type}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putEncryptionConfiguration.parameter.kmsKey"></a>

- *Type:* str

If you use the ``KMS`` encryption type, specify the KMS key to use for encryption.

The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#kms_key EcrRepository#kms_key}

---

##### `put_image_scanning_configuration` <a name="put_image_scanning_configuration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putImageScanningConfiguration"></a>

```python
def put_image_scanning_configuration(
  scan_on_push: bool | IResolvable = None
) -> None
```

###### `scan_on_push`<sup>Optional</sup> <a name="scan_on_push" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putImageScanningConfiguration.parameter.scanOnPush"></a>

- *Type:* bool | cdktn.IResolvable

The setting that determines whether images are scanned after being pushed to a repository.

If set to `true`, images will be scanned after being pushed. If this parameter is not specified, it will default to `false` and images will not be scanned unless a scan is manually started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#scan_on_push EcrRepository#scan_on_push}

---

##### `put_image_tag_mutability_exclusion_filters` <a name="put_image_tag_mutability_exclusion_filters" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putImageTagMutabilityExclusionFilters"></a>

```python
def put_image_tag_mutability_exclusion_filters(
  value: IResolvable | typing.List[EcrRepositoryImageTagMutabilityExclusionFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putImageTagMutabilityExclusionFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters">EcrRepositoryImageTagMutabilityExclusionFilters</a>]

---

##### `put_lifecycle_policy` <a name="put_lifecycle_policy" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putLifecyclePolicy"></a>

```python
def put_lifecycle_policy(
  lifecycle_policy_text: str = None,
  registry_id: str = None
) -> None
```

###### `lifecycle_policy_text`<sup>Optional</sup> <a name="lifecycle_policy_text" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putLifecyclePolicy.parameter.lifecyclePolicyText"></a>

- *Type:* str

The JSON repository policy text to apply to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#lifecycle_policy_text EcrRepository#lifecycle_policy_text}

---

###### `registry_id`<sup>Optional</sup> <a name="registry_id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putLifecyclePolicy.parameter.registryId"></a>

- *Type:* str

The AWS account ID associated with the registry that contains the repository.

If you do? not specify a registry, the default registry is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#registry_id EcrRepository#registry_id}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EcrRepositoryTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags">EcrRepositoryTags</a>]

---

##### `reset_empty_on_delete` <a name="reset_empty_on_delete" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetEmptyOnDelete"></a>

```python
def reset_empty_on_delete() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_image_scanning_configuration` <a name="reset_image_scanning_configuration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetImageScanningConfiguration"></a>

```python
def reset_image_scanning_configuration() -> None
```

##### `reset_image_tag_mutability` <a name="reset_image_tag_mutability" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetImageTagMutability"></a>

```python
def reset_image_tag_mutability() -> None
```

##### `reset_image_tag_mutability_exclusion_filters` <a name="reset_image_tag_mutability_exclusion_filters" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetImageTagMutabilityExclusionFilters"></a>

```python
def reset_image_tag_mutability_exclusion_filters() -> None
```

##### `reset_lifecycle_policy` <a name="reset_lifecycle_policy" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetLifecyclePolicy"></a>

```python
def reset_lifecycle_policy() -> None
```

##### `reset_repository_name` <a name="reset_repository_name" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetRepositoryName"></a>

```python
def reset_repository_name() -> None
```

##### `reset_repository_policy_text` <a name="reset_repository_policy_text" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetRepositoryPolicyText"></a>

```python
def reset_repository_policy_text() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EcrRepository resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.isConstruct"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepository.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepository.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EcrRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EcrRepository to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EcrRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EcrRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference">EcrRepositoryEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageScanningConfiguration">image_scanning_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference">EcrRepositoryImageScanningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutabilityExclusionFilters">image_tag_mutability_exclusion_filters</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList">EcrRepositoryImageTagMutabilityExclusionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.lifecyclePolicy">lifecycle_policy</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference">EcrRepositoryLifecyclePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryUri">repository_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList">EcrRepositoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.emptyOnDeleteInput">empty_on_delete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageScanningConfigurationInput">image_scanning_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutabilityExclusionFiltersInput">image_tag_mutability_exclusion_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters">EcrRepositoryImageTagMutabilityExclusionFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutabilityInput">image_tag_mutability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.lifecyclePolicyInput">lifecycle_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy">EcrRepositoryLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryPolicyTextInput">repository_policy_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags">EcrRepositoryTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.emptyOnDelete">empty_on_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutability">image_tag_mutability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryPolicyText">repository_policy_text</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.encryptionConfiguration"></a>

```python
encryption_configuration: EcrRepositoryEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference">EcrRepositoryEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_scanning_configuration`<sup>Required</sup> <a name="image_scanning_configuration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageScanningConfiguration"></a>

```python
image_scanning_configuration: EcrRepositoryImageScanningConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference">EcrRepositoryImageScanningConfigurationOutputReference</a>

---

##### `image_tag_mutability_exclusion_filters`<sup>Required</sup> <a name="image_tag_mutability_exclusion_filters" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutabilityExclusionFilters"></a>

```python
image_tag_mutability_exclusion_filters: EcrRepositoryImageTagMutabilityExclusionFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList">EcrRepositoryImageTagMutabilityExclusionFiltersList</a>

---

##### `lifecycle_policy`<sup>Required</sup> <a name="lifecycle_policy" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.lifecyclePolicy"></a>

```python
lifecycle_policy: EcrRepositoryLifecyclePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference">EcrRepositoryLifecyclePolicyOutputReference</a>

---

##### `repository_uri`<sup>Required</sup> <a name="repository_uri" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryUri"></a>

```python
repository_uri: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.tags"></a>

```python
tags: EcrRepositoryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList">EcrRepositoryTagsList</a>

---

##### `empty_on_delete_input`<sup>Optional</sup> <a name="empty_on_delete_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.emptyOnDeleteInput"></a>

```python
empty_on_delete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | EcrRepositoryEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>

---

##### `image_scanning_configuration_input`<sup>Optional</sup> <a name="image_scanning_configuration_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageScanningConfigurationInput"></a>

```python
image_scanning_configuration_input: IResolvable | EcrRepositoryImageScanningConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a>

---

##### `image_tag_mutability_exclusion_filters_input`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filters_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutabilityExclusionFiltersInput"></a>

```python
image_tag_mutability_exclusion_filters_input: IResolvable | typing.List[EcrRepositoryImageTagMutabilityExclusionFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters">EcrRepositoryImageTagMutabilityExclusionFilters</a>]

---

##### `image_tag_mutability_input`<sup>Optional</sup> <a name="image_tag_mutability_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutabilityInput"></a>

```python
image_tag_mutability_input: str
```

- *Type:* str

---

##### `lifecycle_policy_input`<sup>Optional</sup> <a name="lifecycle_policy_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.lifecyclePolicyInput"></a>

```python
lifecycle_policy_input: IResolvable | EcrRepositoryLifecyclePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy">EcrRepositoryLifecyclePolicy</a>

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `repository_policy_text_input`<sup>Optional</sup> <a name="repository_policy_text_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryPolicyTextInput"></a>

```python
repository_policy_text_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EcrRepositoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags">EcrRepositoryTags</a>]

---

##### `empty_on_delete`<sup>Required</sup> <a name="empty_on_delete" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.emptyOnDelete"></a>

```python
empty_on_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `image_tag_mutability`<sup>Required</sup> <a name="image_tag_mutability" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutability"></a>

```python
image_tag_mutability: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `repository_policy_text`<sup>Required</sup> <a name="repository_policy_text" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryPolicyText"></a>

```python
repository_policy_text: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRepositoryConfig <a name="EcrRepositoryConfig" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepositoryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  empty_on_delete: bool | IResolvable = None,
  encryption_configuration: EcrRepositoryEncryptionConfiguration = None,
  image_scanning_configuration: EcrRepositoryImageScanningConfiguration = None,
  image_tag_mutability: str = None,
  image_tag_mutability_exclusion_filters: IResolvable | typing.List[EcrRepositoryImageTagMutabilityExclusionFilters] = None,
  lifecycle_policy: EcrRepositoryLifecyclePolicy = None,
  repository_name: str = None,
  repository_policy_text: str = None,
  tags: IResolvable | typing.List[EcrRepositoryTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.emptyOnDelete">empty_on_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, deleting the repository force deletes the contents of the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a></code> | The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.imageScanningConfiguration">image_scanning_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a></code> | The ``imageScanningConfiguration`` parameter is being deprecated, in favor of specifying the image scanning configuration at the registry level. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.imageTagMutability">image_tag_mutability</a></code> | <code>str</code> | The tag mutability setting for the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.imageTagMutabilityExclusionFilters">image_tag_mutability_exclusion_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters">EcrRepositoryImageTagMutabilityExclusionFilters</a>]</code> | A list of filters that specify which image tags are excluded from the repository's image tag mutability setting. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.lifecyclePolicy">lifecycle_policy</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy">EcrRepositoryLifecyclePolicy</a></code> | Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html). |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.repositoryName">repository_name</a></code> | <code>str</code> | The name to use for the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.repositoryPolicyText">repository_policy_text</a></code> | <code>str</code> | The JSON repository policy text to apply to the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags">EcrRepositoryTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `empty_on_delete`<sup>Optional</sup> <a name="empty_on_delete" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.emptyOnDelete"></a>

```python
empty_on_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, deleting the repository force deletes the contents of the repository.

If false, the repository must be empty before attempting to delete it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#empty_on_delete EcrRepository#empty_on_delete}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: EcrRepositoryEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>

The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#encryption_configuration EcrRepository#encryption_configuration}

---

##### `image_scanning_configuration`<sup>Optional</sup> <a name="image_scanning_configuration" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.imageScanningConfiguration"></a>

```python
image_scanning_configuration: EcrRepositoryImageScanningConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a>

The ``imageScanningConfiguration`` parameter is being deprecated, in favor of specifying the image scanning configuration at the registry level.

For more information, see `PutRegistryScanningConfiguration`.
The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#image_scanning_configuration EcrRepository#image_scanning_configuration}

---

##### `image_tag_mutability`<sup>Optional</sup> <a name="image_tag_mutability" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.imageTagMutability"></a>

```python
image_tag_mutability: str
```

- *Type:* str

The tag mutability setting for the repository.

If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#image_tag_mutability EcrRepository#image_tag_mutability}

---

##### `image_tag_mutability_exclusion_filters`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filters" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.imageTagMutabilityExclusionFilters"></a>

```python
image_tag_mutability_exclusion_filters: IResolvable | typing.List[EcrRepositoryImageTagMutabilityExclusionFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters">EcrRepositoryImageTagMutabilityExclusionFilters</a>]

A list of filters that specify which image tags are excluded from the repository's image tag mutability setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#image_tag_mutability_exclusion_filters EcrRepository#image_tag_mutability_exclusion_filters}

---

##### `lifecycle_policy`<sup>Optional</sup> <a name="lifecycle_policy" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.lifecyclePolicy"></a>

```python
lifecycle_policy: EcrRepositoryLifecyclePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy">EcrRepositoryLifecyclePolicy</a>

Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#lifecycle_policy EcrRepository#lifecycle_policy}

---

##### `repository_name`<sup>Optional</sup> <a name="repository_name" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

The name to use for the repository.

The repository name may be specified on its own (such as `nginx-web-app`) or it can be prepended with a namespace to group the repository into a category (such as `project-a/nginx-web-app`). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#repository_name EcrRepository#repository_name}

---

##### `repository_policy_text`<sup>Optional</sup> <a name="repository_policy_text" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.repositoryPolicyText"></a>

```python
repository_policy_text: str
```

- *Type:* str

The JSON repository policy text to apply to the repository.

For more information, see [Amazon ECR repository policies](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#repository_policy_text EcrRepository#repository_policy_text}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EcrRepositoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags">EcrRepositoryTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#tags EcrRepository#tags}

---

### EcrRepositoryEncryptionConfiguration <a name="EcrRepositoryEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepositoryEncryptionConfiguration(
  encryption_type: str = None,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration.property.encryptionType">encryption_type</a></code> | <code>str</code> | The encryption type to use. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | If you use the ``KMS`` encryption type, specify the KMS key to use for encryption. |

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

The encryption type to use.

If you use the `KMS` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
If you use the `KMS_DSSE` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the `KMS` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created.
If you use the `AES256` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#encryption_type EcrRepository#encryption_type}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

If you use the ``KMS`` encryption type, specify the KMS key to use for encryption.

The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#kms_key EcrRepository#kms_key}

---

### EcrRepositoryImageScanningConfiguration <a name="EcrRepositoryImageScanningConfiguration" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepositoryImageScanningConfiguration(
  scan_on_push: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration.property.scanOnPush">scan_on_push</a></code> | <code>bool \| cdktn.IResolvable</code> | The setting that determines whether images are scanned after being pushed to a repository. |

---

##### `scan_on_push`<sup>Optional</sup> <a name="scan_on_push" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration.property.scanOnPush"></a>

```python
scan_on_push: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The setting that determines whether images are scanned after being pushed to a repository.

If set to `true`, images will be scanned after being pushed. If this parameter is not specified, it will default to `false` and images will not be scanned unless a scan is manually started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#scan_on_push EcrRepository#scan_on_push}

---

### EcrRepositoryImageTagMutabilityExclusionFilters <a name="EcrRepositoryImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters(
  image_tag_mutability_exclusion_filter_type: str = None,
  image_tag_mutability_exclusion_filter_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterType">image_tag_mutability_exclusion_filter_type</a></code> | <code>str</code> | Specifies the type of filter to use for excluding image tags from the repository's mutability setting. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterValue">image_tag_mutability_exclusion_filter_value</a></code> | <code>str</code> | The value to use when filtering image tags. |

---

##### `image_tag_mutability_exclusion_filter_type`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filter_type" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterType"></a>

```python
image_tag_mutability_exclusion_filter_type: str
```

- *Type:* str

Specifies the type of filter to use for excluding image tags from the repository's mutability setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#image_tag_mutability_exclusion_filter_type EcrRepository#image_tag_mutability_exclusion_filter_type}

---

##### `image_tag_mutability_exclusion_filter_value`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filter_value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterValue"></a>

```python
image_tag_mutability_exclusion_filter_value: str
```

- *Type:* str

The value to use when filtering image tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#image_tag_mutability_exclusion_filter_value EcrRepository#image_tag_mutability_exclusion_filter_value}

---

### EcrRepositoryLifecyclePolicy <a name="EcrRepositoryLifecyclePolicy" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepositoryLifecyclePolicy(
  lifecycle_policy_text: str = None,
  registry_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy.property.lifecyclePolicyText">lifecycle_policy_text</a></code> | <code>str</code> | The JSON repository policy text to apply to the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy.property.registryId">registry_id</a></code> | <code>str</code> | The AWS account ID associated with the registry that contains the repository. |

---

##### `lifecycle_policy_text`<sup>Optional</sup> <a name="lifecycle_policy_text" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy.property.lifecyclePolicyText"></a>

```python
lifecycle_policy_text: str
```

- *Type:* str

The JSON repository policy text to apply to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#lifecycle_policy_text EcrRepository#lifecycle_policy_text}

---

##### `registry_id`<sup>Optional</sup> <a name="registry_id" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

The AWS account ID associated with the registry that contains the repository.

If you do? not specify a registry, the default registry is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#registry_id EcrRepository#registry_id}

---

### EcrRepositoryTags <a name="EcrRepositoryTags" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepositoryTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags.property.key">key</a></code> | <code>str</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags.property.value">value</a></code> | <code>str</code> | A ``value`` acts as a descriptor within a tag category (key). |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags.property.key"></a>

```python
key: str
```

- *Type:* str

One part of a key-value pair that make up a tag.

A `key` is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#key EcrRepository#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags.property.value"></a>

```python
value: str
```

- *Type:* str

A ``value`` acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#value EcrRepository#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRepositoryEncryptionConfigurationOutputReference <a name="EcrRepositoryEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrRepositoryEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>

---


### EcrRepositoryImageScanningConfigurationOutputReference <a name="EcrRepositoryImageScanningConfigurationOutputReference" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.resetScanOnPush">reset_scan_on_push</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scan_on_push` <a name="reset_scan_on_push" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.resetScanOnPush"></a>

```python
def reset_scan_on_push() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.scanOnPushInput">scan_on_push_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.scanOnPush">scan_on_push</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scan_on_push_input`<sup>Optional</sup> <a name="scan_on_push_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.scanOnPushInput"></a>

```python
scan_on_push_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `scan_on_push`<sup>Required</sup> <a name="scan_on_push" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.scanOnPush"></a>

```python
scan_on_push: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrRepositoryImageScanningConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a>

---


### EcrRepositoryImageTagMutabilityExclusionFiltersList <a name="EcrRepositoryImageTagMutabilityExclusionFiltersList" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters">EcrRepositoryImageTagMutabilityExclusionFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcrRepositoryImageTagMutabilityExclusionFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters">EcrRepositoryImageTagMutabilityExclusionFilters</a>]

---


### EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference <a name="EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterType">reset_image_tag_mutability_exclusion_filter_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterValue">reset_image_tag_mutability_exclusion_filter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_tag_mutability_exclusion_filter_type` <a name="reset_image_tag_mutability_exclusion_filter_type" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterType"></a>

```python
def reset_image_tag_mutability_exclusion_filter_type() -> None
```

##### `reset_image_tag_mutability_exclusion_filter_value` <a name="reset_image_tag_mutability_exclusion_filter_value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterValue"></a>

```python
def reset_image_tag_mutability_exclusion_filter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterTypeInput">image_tag_mutability_exclusion_filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValueInput">image_tag_mutability_exclusion_filter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType">image_tag_mutability_exclusion_filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue">image_tag_mutability_exclusion_filter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters">EcrRepositoryImageTagMutabilityExclusionFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_tag_mutability_exclusion_filter_type_input`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filter_type_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterTypeInput"></a>

```python
image_tag_mutability_exclusion_filter_type_input: str
```

- *Type:* str

---

##### `image_tag_mutability_exclusion_filter_value_input`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filter_value_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValueInput"></a>

```python
image_tag_mutability_exclusion_filter_value_input: str
```

- *Type:* str

---

##### `image_tag_mutability_exclusion_filter_type`<sup>Required</sup> <a name="image_tag_mutability_exclusion_filter_type" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType"></a>

```python
image_tag_mutability_exclusion_filter_type: str
```

- *Type:* str

---

##### `image_tag_mutability_exclusion_filter_value`<sup>Required</sup> <a name="image_tag_mutability_exclusion_filter_value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue"></a>

```python
image_tag_mutability_exclusion_filter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrRepositoryImageTagMutabilityExclusionFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters">EcrRepositoryImageTagMutabilityExclusionFilters</a>

---


### EcrRepositoryLifecyclePolicyOutputReference <a name="EcrRepositoryLifecyclePolicyOutputReference" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepositoryLifecyclePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resetLifecyclePolicyText">reset_lifecycle_policy_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resetRegistryId">reset_registry_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lifecycle_policy_text` <a name="reset_lifecycle_policy_text" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resetLifecyclePolicyText"></a>

```python
def reset_lifecycle_policy_text() -> None
```

##### `reset_registry_id` <a name="reset_registry_id" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resetRegistryId"></a>

```python
def reset_registry_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.lifecyclePolicyTextInput">lifecycle_policy_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.registryIdInput">registry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.lifecyclePolicyText">lifecycle_policy_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.registryId">registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy">EcrRepositoryLifecyclePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lifecycle_policy_text_input`<sup>Optional</sup> <a name="lifecycle_policy_text_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.lifecyclePolicyTextInput"></a>

```python
lifecycle_policy_text_input: str
```

- *Type:* str

---

##### `registry_id_input`<sup>Optional</sup> <a name="registry_id_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.registryIdInput"></a>

```python
registry_id_input: str
```

- *Type:* str

---

##### `lifecycle_policy_text`<sup>Required</sup> <a name="lifecycle_policy_text" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.lifecyclePolicyText"></a>

```python
lifecycle_policy_text: str
```

- *Type:* str

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrRepositoryLifecyclePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy">EcrRepositoryLifecyclePolicy</a>

---


### EcrRepositoryTagsList <a name="EcrRepositoryTagsList" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepositoryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrRepositoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags">EcrRepositoryTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcrRepositoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags">EcrRepositoryTags</a>]

---


### EcrRepositoryTagsOutputReference <a name="EcrRepositoryTagsOutputReference" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository

ecrRepository.EcrRepositoryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags">EcrRepositoryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrRepositoryTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags">EcrRepositoryTags</a>

---



