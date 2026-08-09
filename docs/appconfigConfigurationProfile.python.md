# `appconfigConfigurationProfile` Submodule <a name="`appconfigConfigurationProfile` Submodule" id="@cdktn/provider-awscc.appconfigConfigurationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigConfigurationProfile <a name="AppconfigConfigurationProfile" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile awscc_appconfig_configuration_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  location_uri: str,
  name: str,
  deletion_protection_check: str = None,
  description: str = None,
  kms_key_identifier: str = None,
  retrieval_role_arn: str = None,
  tags: IResolvable | typing.List[AppconfigConfigurationProfileTags] = None,
  type: str = None,
  validators: IResolvable | typing.List[AppconfigConfigurationProfileValidators] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.locationUri">location_uri</a></code> | <code>str</code> | A URI to locate the configuration. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | A name for the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.deletionProtectionCheck">deletion_protection_check</a></code> | <code>str</code> | On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.retrievalRoleArn">retrieval_role_arn</a></code> | <code>str</code> | The ARN of an IAM role with permission to access the configuration at the specified LocationUri. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>]</code> | Metadata to assign to the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of configurations contained in the profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.validators">validators</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>]</code> | A list of methods for validating the configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.applicationId"></a>

- *Type:* str

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#application_id AppconfigConfigurationProfile#application_id}

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.locationUri"></a>

- *Type:* str

A URI to locate the configuration.

You can specify the AWS AppConfig hosted configuration store, Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#location_uri AppconfigConfigurationProfile#location_uri}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.name"></a>

- *Type:* str

A name for the configuration profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#name AppconfigConfigurationProfile#name}

---

##### `deletion_protection_check`<sup>Optional</sup> <a name="deletion_protection_check" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.deletionProtectionCheck"></a>

- *Type:* str

On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting.

See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#deletion_protection_check AppconfigConfigurationProfile#deletion_protection_check}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.description"></a>

- *Type:* str

A description of the configuration profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#description AppconfigConfigurationProfile#description}

---

##### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.kmsKeyIdentifier"></a>

- *Type:* str

The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#kms_key_identifier AppconfigConfigurationProfile#kms_key_identifier}

---

##### `retrieval_role_arn`<sup>Optional</sup> <a name="retrieval_role_arn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.retrievalRoleArn"></a>

- *Type:* str

The ARN of an IAM role with permission to access the configuration at the specified LocationUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>]

Metadata to assign to the configuration profile.

Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#tags AppconfigConfigurationProfile#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.type"></a>

- *Type:* str

The type of configurations contained in the profile.

When calling this API, enter one of the following values for Type: AWS.AppConfig.FeatureFlags, AWS.Freeform

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}

---

##### `validators`<sup>Optional</sup> <a name="validators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.validators"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>]

A list of methods for validating the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#validators AppconfigConfigurationProfile#validators}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidators">put_validators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDeletionProtectionCheck">reset_deletion_protection_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetKmsKeyIdentifier">reset_kms_key_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetRetrievalRoleArn">reset_retrieval_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetValidators">reset_validators</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppconfigConfigurationProfileTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>]

---

##### `put_validators` <a name="put_validators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidators"></a>

```python
def put_validators(
  value: IResolvable | typing.List[AppconfigConfigurationProfileValidators]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidators.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>]

---

##### `reset_deletion_protection_check` <a name="reset_deletion_protection_check" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDeletionProtectionCheck"></a>

```python
def reset_deletion_protection_check() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_identifier` <a name="reset_kms_key_identifier" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetKmsKeyIdentifier"></a>

```python
def reset_kms_key_identifier() -> None
```

##### `reset_retrieval_role_arn` <a name="reset_retrieval_role_arn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetRetrievalRoleArn"></a>

```python
def reset_retrieval_role_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_validators` <a name="reset_validators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetValidators"></a>

```python
def reset_validators() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppconfigConfigurationProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppconfigConfigurationProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppconfigConfigurationProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppconfigConfigurationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigConfigurationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList">AppconfigConfigurationProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validators">validators</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList">AppconfigConfigurationProfileValidatorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.deletionProtectionCheckInput">deletion_protection_check_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyIdentifierInput">kms_key_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUriInput">location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArnInput">retrieval_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validatorsInput">validators_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.deletionProtectionCheck">deletion_protection_check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArn">retrieval_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.configurationProfileId"></a>

```python
configuration_profile_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tags"></a>

```python
tags: AppconfigConfigurationProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList">AppconfigConfigurationProfileTagsList</a>

---

##### `validators`<sup>Required</sup> <a name="validators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validators"></a>

```python
validators: AppconfigConfigurationProfileValidatorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList">AppconfigConfigurationProfileValidatorsList</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `deletion_protection_check_input`<sup>Optional</sup> <a name="deletion_protection_check_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.deletionProtectionCheckInput"></a>

```python
deletion_protection_check_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `kms_key_identifier_input`<sup>Optional</sup> <a name="kms_key_identifier_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyIdentifierInput"></a>

```python
kms_key_identifier_input: str
```

- *Type:* str

---

##### `location_uri_input`<sup>Optional</sup> <a name="location_uri_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUriInput"></a>

```python
location_uri_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retrieval_role_arn_input`<sup>Optional</sup> <a name="retrieval_role_arn_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArnInput"></a>

```python
retrieval_role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppconfigConfigurationProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `validators_input`<sup>Optional</sup> <a name="validators_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validatorsInput"></a>

```python
validators_input: IResolvable | typing.List[AppconfigConfigurationProfileValidators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `deletion_protection_check`<sup>Required</sup> <a name="deletion_protection_check" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.deletionProtectionCheck"></a>

```python
deletion_protection_check: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_identifier`<sup>Required</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retrieval_role_arn`<sup>Required</sup> <a name="retrieval_role_arn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArn"></a>

```python
retrieval_role_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigConfigurationProfileConfig <a name="AppconfigConfigurationProfileConfig" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  location_uri: str,
  name: str,
  deletion_protection_check: str = None,
  description: str = None,
  kms_key_identifier: str = None,
  retrieval_role_arn: str = None,
  tags: IResolvable | typing.List[AppconfigConfigurationProfileTags] = None,
  type: str = None,
  validators: IResolvable | typing.List[AppconfigConfigurationProfileValidators] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.applicationId">application_id</a></code> | <code>str</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.locationUri">location_uri</a></code> | <code>str</code> | A URI to locate the configuration. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.name">name</a></code> | <code>str</code> | A name for the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.deletionProtectionCheck">deletion_protection_check</a></code> | <code>str</code> | On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.description">description</a></code> | <code>str</code> | A description of the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.retrievalRoleArn">retrieval_role_arn</a></code> | <code>str</code> | The ARN of an IAM role with permission to access the configuration at the specified LocationUri. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>]</code> | Metadata to assign to the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.type">type</a></code> | <code>str</code> | The type of configurations contained in the profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.validators">validators</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>]</code> | A list of methods for validating the configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#application_id AppconfigConfigurationProfile#application_id}

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

A URI to locate the configuration.

You can specify the AWS AppConfig hosted configuration store, Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#location_uri AppconfigConfigurationProfile#location_uri}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the configuration profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#name AppconfigConfigurationProfile#name}

---

##### `deletion_protection_check`<sup>Optional</sup> <a name="deletion_protection_check" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.deletionProtectionCheck"></a>

```python
deletion_protection_check: str
```

- *Type:* str

On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting.

See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#deletion_protection_check AppconfigConfigurationProfile#deletion_protection_check}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the configuration profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#description AppconfigConfigurationProfile#description}

---

##### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#kms_key_identifier AppconfigConfigurationProfile#kms_key_identifier}

---

##### `retrieval_role_arn`<sup>Optional</sup> <a name="retrieval_role_arn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.retrievalRoleArn"></a>

```python
retrieval_role_arn: str
```

- *Type:* str

The ARN of an IAM role with permission to access the configuration at the specified LocationUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppconfigConfigurationProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>]

Metadata to assign to the configuration profile.

Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#tags AppconfigConfigurationProfile#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of configurations contained in the profile.

When calling this API, enter one of the following values for Type: AWS.AppConfig.FeatureFlags, AWS.Freeform

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}

---

##### `validators`<sup>Optional</sup> <a name="validators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.validators"></a>

```python
validators: IResolvable | typing.List[AppconfigConfigurationProfileValidators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>]

A list of methods for validating the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#validators AppconfigConfigurationProfile#validators}

---

### AppconfigConfigurationProfileTags <a name="AppconfigConfigurationProfileTags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfileTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.property.key">key</a></code> | <code>str</code> | The key-value string map. The tag key can be up to 128 characters and must not start with aws:. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.property.value">value</a></code> | <code>str</code> | The tag value can be up to 256 characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key-value string map. The tag key can be up to 128 characters and must not start with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#key AppconfigConfigurationProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value can be up to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#value AppconfigConfigurationProfile#value}

---

### AppconfigConfigurationProfileValidators <a name="AppconfigConfigurationProfileValidators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfileValidators(
  content: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.property.content">content</a></code> | <code>str</code> | Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.property.type">type</a></code> | <code>str</code> | AWS AppConfig supports validators of type JSON_SCHEMA and LAMBDA. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.property.content"></a>

```python
content: str
```

- *Type:* str

Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#content AppconfigConfigurationProfile#content}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.property.type"></a>

```python
type: str
```

- *Type:* str

AWS AppConfig supports validators of type JSON_SCHEMA and LAMBDA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigConfigurationProfileTagsList <a name="AppconfigConfigurationProfileTagsList" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppconfigConfigurationProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppconfigConfigurationProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>]

---


### AppconfigConfigurationProfileTagsOutputReference <a name="AppconfigConfigurationProfileTagsOutputReference" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigConfigurationProfileTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>

---


### AppconfigConfigurationProfileValidatorsList <a name="AppconfigConfigurationProfileValidatorsList" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppconfigConfigurationProfileValidatorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppconfigConfigurationProfileValidators]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>]

---


### AppconfigConfigurationProfileValidatorsOutputReference <a name="AppconfigConfigurationProfileValidatorsOutputReference" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_configuration_profile

appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigConfigurationProfileValidators
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>

---



