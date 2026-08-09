# `appconfigDeployment` Submodule <a name="`appconfigDeployment` Submodule" id="@cdktn/provider-awscc.appconfigDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigDeployment <a name="AppconfigDeployment" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment awscc_appconfig_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_deployment

appconfigDeployment.AppconfigDeployment(
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
  configuration_profile_id: str,
  configuration_version: str,
  deployment_strategy_id: str,
  environment_id: str,
  description: str = None,
  dynamic_extension_parameters: IResolvable | typing.List[AppconfigDeploymentDynamicExtensionParameters] = None,
  kms_key_identifier: str = None,
  tags: IResolvable | typing.List[AppconfigDeploymentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | The configuration profile ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.configurationVersion">configuration_version</a></code> | <code>str</code> | The configuration version to deploy. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.deploymentStrategyId">deployment_strategy_id</a></code> | <code>str</code> | The deployment strategy ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.environmentId">environment_id</a></code> | <code>str</code> | The environment ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.dynamicExtensionParameters">dynamic_extension_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#dynamic_extension_parameters AppconfigDeployment#dynamic_extension_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.applicationId"></a>

- *Type:* str

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#application_id AppconfigDeployment#application_id}

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.configurationProfileId"></a>

- *Type:* str

The configuration profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#configuration_profile_id AppconfigDeployment#configuration_profile_id}

---

##### `configuration_version`<sup>Required</sup> <a name="configuration_version" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.configurationVersion"></a>

- *Type:* str

The configuration version to deploy.

If deploying an AWS AppConfig hosted configuration version, you can specify either the version number or version label. For all other configurations, you must specify the version number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#configuration_version AppconfigDeployment#configuration_version}

---

##### `deployment_strategy_id`<sup>Required</sup> <a name="deployment_strategy_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.deploymentStrategyId"></a>

- *Type:* str

The deployment strategy ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#deployment_strategy_id AppconfigDeployment#deployment_strategy_id}

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.environmentId"></a>

- *Type:* str

The environment ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#environment_id AppconfigDeployment#environment_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.description"></a>

- *Type:* str

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#description AppconfigDeployment#description}

---

##### `dynamic_extension_parameters`<sup>Optional</sup> <a name="dynamic_extension_parameters" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.dynamicExtensionParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#dynamic_extension_parameters AppconfigDeployment#dynamic_extension_parameters}.

---

##### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.kmsKeyIdentifier"></a>

- *Type:* str

The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#kms_key_identifier AppconfigDeployment#kms_key_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#tags AppconfigDeployment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.putDynamicExtensionParameters">put_dynamic_extension_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetDynamicExtensionParameters">reset_dynamic_extension_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetKmsKeyIdentifier">reset_kms_key_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dynamic_extension_parameters` <a name="put_dynamic_extension_parameters" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.putDynamicExtensionParameters"></a>

```python
def put_dynamic_extension_parameters(
  value: IResolvable | typing.List[AppconfigDeploymentDynamicExtensionParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.putDynamicExtensionParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppconfigDeploymentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dynamic_extension_parameters` <a name="reset_dynamic_extension_parameters" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetDynamicExtensionParameters"></a>

```python
def reset_dynamic_extension_parameters() -> None
```

##### `reset_kms_key_identifier` <a name="reset_kms_key_identifier" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetKmsKeyIdentifier"></a>

```python
def reset_kms_key_identifier() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppconfigDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isConstruct"></a>

```python
from cdktn_provider_awscc import appconfig_deployment

appconfigDeployment.AppconfigDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appconfig_deployment

appconfigDeployment.AppconfigDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appconfig_deployment

appconfigDeployment.AppconfigDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appconfig_deployment

appconfigDeployment.AppconfigDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppconfigDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppconfigDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppconfigDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.deploymentNumber">deployment_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.dynamicExtensionParameters">dynamic_extension_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList">AppconfigDeploymentDynamicExtensionParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList">AppconfigDeploymentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationProfileIdInput">configuration_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationVersionInput">configuration_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.deploymentStrategyIdInput">deployment_strategy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.dynamicExtensionParametersInput">dynamic_extension_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.kmsKeyIdentifierInput">kms_key_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationVersion">configuration_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.deploymentStrategyId">deployment_strategy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deployment_number`<sup>Required</sup> <a name="deployment_number" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.deploymentNumber"></a>

```python
deployment_number: str
```

- *Type:* str

---

##### `dynamic_extension_parameters`<sup>Required</sup> <a name="dynamic_extension_parameters" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.dynamicExtensionParameters"></a>

```python
dynamic_extension_parameters: AppconfigDeploymentDynamicExtensionParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList">AppconfigDeploymentDynamicExtensionParametersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.tags"></a>

```python
tags: AppconfigDeploymentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList">AppconfigDeploymentTagsList</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `configuration_profile_id_input`<sup>Optional</sup> <a name="configuration_profile_id_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationProfileIdInput"></a>

```python
configuration_profile_id_input: str
```

- *Type:* str

---

##### `configuration_version_input`<sup>Optional</sup> <a name="configuration_version_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationVersionInput"></a>

```python
configuration_version_input: str
```

- *Type:* str

---

##### `deployment_strategy_id_input`<sup>Optional</sup> <a name="deployment_strategy_id_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.deploymentStrategyIdInput"></a>

```python
deployment_strategy_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dynamic_extension_parameters_input`<sup>Optional</sup> <a name="dynamic_extension_parameters_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.dynamicExtensionParametersInput"></a>

```python
dynamic_extension_parameters_input: IResolvable | typing.List[AppconfigDeploymentDynamicExtensionParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>]

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `kms_key_identifier_input`<sup>Optional</sup> <a name="kms_key_identifier_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.kmsKeyIdentifierInput"></a>

```python
kms_key_identifier_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppconfigDeploymentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationProfileId"></a>

```python
configuration_profile_id: str
```

- *Type:* str

---

##### `configuration_version`<sup>Required</sup> <a name="configuration_version" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationVersion"></a>

```python
configuration_version: str
```

- *Type:* str

---

##### `deployment_strategy_id`<sup>Required</sup> <a name="deployment_strategy_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.deploymentStrategyId"></a>

```python
deployment_strategy_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `kms_key_identifier`<sup>Required</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigDeploymentConfig <a name="AppconfigDeploymentConfig" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_deployment

appconfigDeployment.AppconfigDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  configuration_profile_id: str,
  configuration_version: str,
  deployment_strategy_id: str,
  environment_id: str,
  description: str = None,
  dynamic_extension_parameters: IResolvable | typing.List[AppconfigDeploymentDynamicExtensionParameters] = None,
  kms_key_identifier: str = None,
  tags: IResolvable | typing.List[AppconfigDeploymentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.applicationId">application_id</a></code> | <code>str</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | The configuration profile ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.configurationVersion">configuration_version</a></code> | <code>str</code> | The configuration version to deploy. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.deploymentStrategyId">deployment_strategy_id</a></code> | <code>str</code> | The deployment strategy ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.environmentId">environment_id</a></code> | <code>str</code> | The environment ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.description">description</a></code> | <code>str</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.dynamicExtensionParameters">dynamic_extension_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#dynamic_extension_parameters AppconfigDeployment#dynamic_extension_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#application_id AppconfigDeployment#application_id}

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.configurationProfileId"></a>

```python
configuration_profile_id: str
```

- *Type:* str

The configuration profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#configuration_profile_id AppconfigDeployment#configuration_profile_id}

---

##### `configuration_version`<sup>Required</sup> <a name="configuration_version" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.configurationVersion"></a>

```python
configuration_version: str
```

- *Type:* str

The configuration version to deploy.

If deploying an AWS AppConfig hosted configuration version, you can specify either the version number or version label. For all other configurations, you must specify the version number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#configuration_version AppconfigDeployment#configuration_version}

---

##### `deployment_strategy_id`<sup>Required</sup> <a name="deployment_strategy_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.deploymentStrategyId"></a>

```python
deployment_strategy_id: str
```

- *Type:* str

The deployment strategy ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#deployment_strategy_id AppconfigDeployment#deployment_strategy_id}

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

The environment ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#environment_id AppconfigDeployment#environment_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#description AppconfigDeployment#description}

---

##### `dynamic_extension_parameters`<sup>Optional</sup> <a name="dynamic_extension_parameters" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.dynamicExtensionParameters"></a>

```python
dynamic_extension_parameters: IResolvable | typing.List[AppconfigDeploymentDynamicExtensionParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#dynamic_extension_parameters AppconfigDeployment#dynamic_extension_parameters}.

---

##### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#kms_key_identifier AppconfigDeployment#kms_key_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppconfigDeploymentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#tags AppconfigDeployment#tags}

---

### AppconfigDeploymentDynamicExtensionParameters <a name="AppconfigDeploymentDynamicExtensionParameters" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_deployment

appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters(
  extension_reference: str = None,
  parameter_name: str = None,
  parameter_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.property.extensionReference">extension_reference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#extension_reference AppconfigDeployment#extension_reference}. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.property.parameterName">parameter_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#parameter_name AppconfigDeployment#parameter_name}. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.property.parameterValue">parameter_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#parameter_value AppconfigDeployment#parameter_value}. |

---

##### `extension_reference`<sup>Optional</sup> <a name="extension_reference" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.property.extensionReference"></a>

```python
extension_reference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#extension_reference AppconfigDeployment#extension_reference}.

---

##### `parameter_name`<sup>Optional</sup> <a name="parameter_name" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#parameter_name AppconfigDeployment#parameter_name}.

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#parameter_value AppconfigDeployment#parameter_value}.

---

### AppconfigDeploymentTags <a name="AppconfigDeploymentTags" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_deployment

appconfigDeployment.AppconfigDeploymentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags.property.key">key</a></code> | <code>str</code> | The key-value string map. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags.property.value">value</a></code> | <code>str</code> | The tag value can be up to 256 characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key-value string map.

The valid character set is [a-zA-Z1-9+-=._:/]. The tag key can be up to 128 characters and must not start with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#key AppconfigDeployment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value can be up to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#value AppconfigDeployment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigDeploymentDynamicExtensionParametersList <a name="AppconfigDeploymentDynamicExtensionParametersList" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_deployment

appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppconfigDeploymentDynamicExtensionParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppconfigDeploymentDynamicExtensionParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>]

---


### AppconfigDeploymentDynamicExtensionParametersOutputReference <a name="AppconfigDeploymentDynamicExtensionParametersOutputReference" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_deployment

appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resetExtensionReference">reset_extension_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resetParameterName">reset_parameter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_extension_reference` <a name="reset_extension_reference" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resetExtensionReference"></a>

```python
def reset_extension_reference() -> None
```

##### `reset_parameter_name` <a name="reset_parameter_name" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resetParameterName"></a>

```python
def reset_parameter_name() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.extensionReferenceInput">extension_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.extensionReference">extension_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extension_reference_input`<sup>Optional</sup> <a name="extension_reference_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.extensionReferenceInput"></a>

```python
extension_reference_input: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `extension_reference`<sup>Required</sup> <a name="extension_reference" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.extensionReference"></a>

```python
extension_reference: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigDeploymentDynamicExtensionParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>

---


### AppconfigDeploymentTagsList <a name="AppconfigDeploymentTagsList" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_deployment

appconfigDeployment.AppconfigDeploymentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppconfigDeploymentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppconfigDeploymentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>]

---


### AppconfigDeploymentTagsOutputReference <a name="AppconfigDeploymentTagsOutputReference" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_deployment

appconfigDeployment.AppconfigDeploymentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigDeploymentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>

---



