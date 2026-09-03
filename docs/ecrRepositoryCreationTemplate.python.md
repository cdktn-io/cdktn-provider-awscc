# `ecrRepositoryCreationTemplate` Submodule <a name="`ecrRepositoryCreationTemplate` Submodule" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRepositoryCreationTemplate <a name="EcrRepositoryCreationTemplate" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template awscc_ecr_repository_creation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  applied_for: typing.List[str],
  prefix: str,
  custom_role_arn: str = None,
  description: str = None,
  encryption_configuration: EcrRepositoryCreationTemplateEncryptionConfiguration = None,
  image_tag_mutability: str = None,
  image_tag_mutability_exclusion_filters: IResolvable | typing.List[EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters] = None,
  lifecycle_policy: str = None,
  repository_policy: str = None,
  resource_tags: IResolvable | typing.List[EcrRepositoryCreationTemplateResourceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.appliedFor">applied_for</a></code> | <code>typing.List[str]</code> | A list of enumerable Strings representing the repository creation scenarios that this template will apply towards. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | The repository namespace prefix associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.customRoleArn">custom_role_arn</a></code> | <code>str</code> | The ARN of the role to be assumed by Amazon ECR. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | The description associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | The encryption configuration associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.imageTagMutability">image_tag_mutability</a></code> | <code>str</code> | The tag mutability setting for the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.imageTagMutabilityExclusionFilters">image_tag_mutability_exclusion_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>]</code> | A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.lifecyclePolicy">lifecycle_policy</a></code> | <code>str</code> | The lifecycle policy to use for repositories created using the template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.repositoryPolicy">repository_policy</a></code> | <code>str</code> | The repository policy to apply to repositories created using the template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.resourceTags">resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>]</code> | The metadata to apply to the repository to help you categorize and organize. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `applied_for`<sup>Required</sup> <a name="applied_for" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.appliedFor"></a>

- *Type:* typing.List[str]

A list of enumerable Strings representing the repository creation scenarios that this template will apply towards.

The supported scenarios are PULL_THROUGH_CACHE, REPLICATION, and CREATE_ON_PUSH

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#applied_for EcrRepositoryCreationTemplate#applied_for}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.prefix"></a>

- *Type:* str

The repository namespace prefix associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#prefix EcrRepositoryCreationTemplate#prefix}

---

##### `custom_role_arn`<sup>Optional</sup> <a name="custom_role_arn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.customRoleArn"></a>

- *Type:* str

The ARN of the role to be assumed by Amazon ECR.

Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#custom_role_arn EcrRepositoryCreationTemplate#custom_role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.description"></a>

- *Type:* str

The description associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#description EcrRepositoryCreationTemplate#description}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

The encryption configuration associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#encryption_configuration EcrRepositoryCreationTemplate#encryption_configuration}

---

##### `image_tag_mutability`<sup>Optional</sup> <a name="image_tag_mutability" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.imageTagMutability"></a>

- *Type:* str

The tag mutability setting for the repository.

If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability EcrRepositoryCreationTemplate#image_tag_mutability}

---

##### `image_tag_mutability_exclusion_filters`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.imageTagMutabilityExclusionFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>]

A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filters EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filters}

---

##### `lifecycle_policy`<sup>Optional</sup> <a name="lifecycle_policy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.lifecyclePolicy"></a>

- *Type:* str

The lifecycle policy to use for repositories created using the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#lifecycle_policy EcrRepositoryCreationTemplate#lifecycle_policy}

---

##### `repository_policy`<sup>Optional</sup> <a name="repository_policy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.repositoryPolicy"></a>

- *Type:* str

The repository policy to apply to repositories created using the template.

A repository policy is a permissions policy associated with a repository to control access permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#repository_policy EcrRepositoryCreationTemplate#repository_policy}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.resourceTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>]

The metadata to apply to the repository to help you categorize and organize.

Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#resource_tags EcrRepositoryCreationTemplate#resource_tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putImageTagMutabilityExclusionFilters">put_image_tag_mutability_exclusion_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putResourceTags">put_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetCustomRoleArn">reset_custom_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutability">reset_image_tag_mutability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutabilityExclusionFilters">reset_image_tag_mutability_exclusion_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetLifecyclePolicy">reset_lifecycle_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetRepositoryPolicy">reset_repository_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetResourceTags">reset_resource_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  encryption_type: str = None,
  kms_key: str = None
) -> None
```

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration.parameter.encryptionType"></a>

- *Type:* str

The encryption type to use.

If you use the `KMS` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
If you use the `KMS_DSSE` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the `KMS` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created.
If you use the `AES256` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#encryption_type EcrRepositoryCreationTemplate#encryption_type}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration.parameter.kmsKey"></a>

- *Type:* str

If you use the ``KMS`` encryption type, specify the KMS key to use for encryption.

The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#kms_key EcrRepositoryCreationTemplate#kms_key}

---

##### `put_image_tag_mutability_exclusion_filters` <a name="put_image_tag_mutability_exclusion_filters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putImageTagMutabilityExclusionFilters"></a>

```python
def put_image_tag_mutability_exclusion_filters(
  value: IResolvable | typing.List[EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putImageTagMutabilityExclusionFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>]

---

##### `put_resource_tags` <a name="put_resource_tags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putResourceTags"></a>

```python
def put_resource_tags(
  value: IResolvable | typing.List[EcrRepositoryCreationTemplateResourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>]

---

##### `reset_custom_role_arn` <a name="reset_custom_role_arn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetCustomRoleArn"></a>

```python
def reset_custom_role_arn() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_image_tag_mutability` <a name="reset_image_tag_mutability" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutability"></a>

```python
def reset_image_tag_mutability() -> None
```

##### `reset_image_tag_mutability_exclusion_filters` <a name="reset_image_tag_mutability_exclusion_filters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutabilityExclusionFilters"></a>

```python
def reset_image_tag_mutability_exclusion_filters() -> None
```

##### `reset_lifecycle_policy` <a name="reset_lifecycle_policy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetLifecyclePolicy"></a>

```python
def reset_lifecycle_policy() -> None
```

##### `reset_repository_policy` <a name="reset_repository_policy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetRepositoryPolicy"></a>

```python
def reset_repository_policy() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EcrRepositoryCreationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EcrRepositoryCreationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EcrRepositoryCreationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference">EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilters">image_tag_mutability_exclusion_filters</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTags">resource_tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList">EcrRepositoryCreationTemplateResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedForInput">applied_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArnInput">custom_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFiltersInput">image_tag_mutability_exclusion_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityInput">image_tag_mutability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicyInput">lifecycle_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicyInput">repository_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTagsInput">resource_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedFor">applied_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArn">custom_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutability">image_tag_mutability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicy">lifecycle_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicy">repository_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfiguration"></a>

```python
encryption_configuration: EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference">EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_tag_mutability_exclusion_filters`<sup>Required</sup> <a name="image_tag_mutability_exclusion_filters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilters"></a>

```python
image_tag_mutability_exclusion_filters: EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList</a>

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTags"></a>

```python
resource_tags: EcrRepositoryCreationTemplateResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList">EcrRepositoryCreationTemplateResourceTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `applied_for_input`<sup>Optional</sup> <a name="applied_for_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedForInput"></a>

```python
applied_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_role_arn_input`<sup>Optional</sup> <a name="custom_role_arn_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArnInput"></a>

```python
custom_role_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | EcrRepositoryCreationTemplateEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

---

##### `image_tag_mutability_exclusion_filters_input`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filters_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFiltersInput"></a>

```python
image_tag_mutability_exclusion_filters_input: IResolvable | typing.List[EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>]

---

##### `image_tag_mutability_input`<sup>Optional</sup> <a name="image_tag_mutability_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityInput"></a>

```python
image_tag_mutability_input: str
```

- *Type:* str

---

##### `lifecycle_policy_input`<sup>Optional</sup> <a name="lifecycle_policy_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicyInput"></a>

```python
lifecycle_policy_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `repository_policy_input`<sup>Optional</sup> <a name="repository_policy_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicyInput"></a>

```python
repository_policy_input: str
```

- *Type:* str

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTagsInput"></a>

```python
resource_tags_input: IResolvable | typing.List[EcrRepositoryCreationTemplateResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>]

---

##### `applied_for`<sup>Required</sup> <a name="applied_for" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedFor"></a>

```python
applied_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_role_arn`<sup>Required</sup> <a name="custom_role_arn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArn"></a>

```python
custom_role_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `image_tag_mutability`<sup>Required</sup> <a name="image_tag_mutability" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutability"></a>

```python
image_tag_mutability: str
```

- *Type:* str

---

##### `lifecycle_policy`<sup>Required</sup> <a name="lifecycle_policy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicy"></a>

```python
lifecycle_policy: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `repository_policy`<sup>Required</sup> <a name="repository_policy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicy"></a>

```python
repository_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRepositoryCreationTemplateConfig <a name="EcrRepositoryCreationTemplateConfig" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  applied_for: typing.List[str],
  prefix: str,
  custom_role_arn: str = None,
  description: str = None,
  encryption_configuration: EcrRepositoryCreationTemplateEncryptionConfiguration = None,
  image_tag_mutability: str = None,
  image_tag_mutability_exclusion_filters: IResolvable | typing.List[EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters] = None,
  lifecycle_policy: str = None,
  repository_policy: str = None,
  resource_tags: IResolvable | typing.List[EcrRepositoryCreationTemplateResourceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.appliedFor">applied_for</a></code> | <code>typing.List[str]</code> | A list of enumerable Strings representing the repository creation scenarios that this template will apply towards. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.prefix">prefix</a></code> | <code>str</code> | The repository namespace prefix associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.customRoleArn">custom_role_arn</a></code> | <code>str</code> | The ARN of the role to be assumed by Amazon ECR. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.description">description</a></code> | <code>str</code> | The description associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | The encryption configuration associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutability">image_tag_mutability</a></code> | <code>str</code> | The tag mutability setting for the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutabilityExclusionFilters">image_tag_mutability_exclusion_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>]</code> | A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecyclePolicy">lifecycle_policy</a></code> | <code>str</code> | The lifecycle policy to use for repositories created using the template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.repositoryPolicy">repository_policy</a></code> | <code>str</code> | The repository policy to apply to repositories created using the template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.resourceTags">resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>]</code> | The metadata to apply to the repository to help you categorize and organize. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `applied_for`<sup>Required</sup> <a name="applied_for" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.appliedFor"></a>

```python
applied_for: typing.List[str]
```

- *Type:* typing.List[str]

A list of enumerable Strings representing the repository creation scenarios that this template will apply towards.

The supported scenarios are PULL_THROUGH_CACHE, REPLICATION, and CREATE_ON_PUSH

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#applied_for EcrRepositoryCreationTemplate#applied_for}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The repository namespace prefix associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#prefix EcrRepositoryCreationTemplate#prefix}

---

##### `custom_role_arn`<sup>Optional</sup> <a name="custom_role_arn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.customRoleArn"></a>

```python
custom_role_arn: str
```

- *Type:* str

The ARN of the role to be assumed by Amazon ECR.

Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#custom_role_arn EcrRepositoryCreationTemplate#custom_role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#description EcrRepositoryCreationTemplate#description}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: EcrRepositoryCreationTemplateEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

The encryption configuration associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#encryption_configuration EcrRepositoryCreationTemplate#encryption_configuration}

---

##### `image_tag_mutability`<sup>Optional</sup> <a name="image_tag_mutability" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutability"></a>

```python
image_tag_mutability: str
```

- *Type:* str

The tag mutability setting for the repository.

If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability EcrRepositoryCreationTemplate#image_tag_mutability}

---

##### `image_tag_mutability_exclusion_filters`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutabilityExclusionFilters"></a>

```python
image_tag_mutability_exclusion_filters: IResolvable | typing.List[EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>]

A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filters EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filters}

---

##### `lifecycle_policy`<sup>Optional</sup> <a name="lifecycle_policy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecyclePolicy"></a>

```python
lifecycle_policy: str
```

- *Type:* str

The lifecycle policy to use for repositories created using the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#lifecycle_policy EcrRepositoryCreationTemplate#lifecycle_policy}

---

##### `repository_policy`<sup>Optional</sup> <a name="repository_policy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.repositoryPolicy"></a>

```python
repository_policy: str
```

- *Type:* str

The repository policy to apply to repositories created using the template.

A repository policy is a permissions policy associated with a repository to control access permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#repository_policy EcrRepositoryCreationTemplate#repository_policy}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.resourceTags"></a>

```python
resource_tags: IResolvable | typing.List[EcrRepositoryCreationTemplateResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>]

The metadata to apply to the repository to help you categorize and organize.

Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#resource_tags EcrRepositoryCreationTemplate#resource_tags}

---

### EcrRepositoryCreationTemplateEncryptionConfiguration <a name="EcrRepositoryCreationTemplateEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration(
  encryption_type: str = None,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.encryptionType">encryption_type</a></code> | <code>str</code> | The encryption type to use. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | If you use the ``KMS`` encryption type, specify the KMS key to use for encryption. |

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

The encryption type to use.

If you use the `KMS` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
If you use the `KMS_DSSE` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the `KMS` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created.
If you use the `AES256` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#encryption_type EcrRepositoryCreationTemplate#encryption_type}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

If you use the ``KMS`` encryption type, specify the KMS key to use for encryption.

The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#kms_key EcrRepositoryCreationTemplate#kms_key}

---

### EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters <a name="EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters(
  image_tag_mutability_exclusion_filter_type: str = None,
  image_tag_mutability_exclusion_filter_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterType">image_tag_mutability_exclusion_filter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_type EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_type}. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterValue">image_tag_mutability_exclusion_filter_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_value EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_value}. |

---

##### `image_tag_mutability_exclusion_filter_type`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filter_type" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterType"></a>

```python
image_tag_mutability_exclusion_filter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_type EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_type}.

---

##### `image_tag_mutability_exclusion_filter_value`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filter_value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterValue"></a>

```python
image_tag_mutability_exclusion_filter_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_value EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_value}.

---

### EcrRepositoryCreationTemplateResourceTags <a name="EcrRepositoryCreationTemplateResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.key">key</a></code> | <code>str</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.value">value</a></code> | <code>str</code> | A ``value`` acts as a descriptor within a tag category (key). |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

One part of a key-value pair that make up a tag.

A `key` is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#key EcrRepositoryCreationTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.value"></a>

```python
value: str
```

- *Type:* str

A ``value`` acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#value EcrRepositoryCreationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference <a name="EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrRepositoryCreationTemplateEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

---


### EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList <a name="EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>]

---


### EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference <a name="EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterType">reset_image_tag_mutability_exclusion_filter_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterValue">reset_image_tag_mutability_exclusion_filter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_tag_mutability_exclusion_filter_type` <a name="reset_image_tag_mutability_exclusion_filter_type" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterType"></a>

```python
def reset_image_tag_mutability_exclusion_filter_type() -> None
```

##### `reset_image_tag_mutability_exclusion_filter_value` <a name="reset_image_tag_mutability_exclusion_filter_value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterValue"></a>

```python
def reset_image_tag_mutability_exclusion_filter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterTypeInput">image_tag_mutability_exclusion_filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValueInput">image_tag_mutability_exclusion_filter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType">image_tag_mutability_exclusion_filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue">image_tag_mutability_exclusion_filter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_tag_mutability_exclusion_filter_type_input`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filter_type_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterTypeInput"></a>

```python
image_tag_mutability_exclusion_filter_type_input: str
```

- *Type:* str

---

##### `image_tag_mutability_exclusion_filter_value_input`<sup>Optional</sup> <a name="image_tag_mutability_exclusion_filter_value_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValueInput"></a>

```python
image_tag_mutability_exclusion_filter_value_input: str
```

- *Type:* str

---

##### `image_tag_mutability_exclusion_filter_type`<sup>Required</sup> <a name="image_tag_mutability_exclusion_filter_type" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType"></a>

```python
image_tag_mutability_exclusion_filter_type: str
```

- *Type:* str

---

##### `image_tag_mutability_exclusion_filter_value`<sup>Required</sup> <a name="image_tag_mutability_exclusion_filter_value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue"></a>

```python
image_tag_mutability_exclusion_filter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>

---


### EcrRepositoryCreationTemplateResourceTagsList <a name="EcrRepositoryCreationTemplateResourceTagsList" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrRepositoryCreationTemplateResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcrRepositoryCreationTemplateResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>]

---


### EcrRepositoryCreationTemplateResourceTagsOutputReference <a name="EcrRepositoryCreationTemplateResourceTagsOutputReference" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrRepositoryCreationTemplateResourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>

---



