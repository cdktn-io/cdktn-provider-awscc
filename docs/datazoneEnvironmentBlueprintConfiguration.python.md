# `datazoneEnvironmentBlueprintConfiguration` Submodule <a name="`datazoneEnvironmentBlueprintConfiguration` Submodule" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironmentBlueprintConfiguration <a name="DatazoneEnvironmentBlueprintConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration awscc_datazone_environment_blueprint_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_identifier: str,
  enabled_regions: typing.List[str],
  environment_blueprint_identifier: str,
  environment_role_permission_boundary: str = None,
  global_parameters: typing.Mapping[str] = None,
  manage_access_role_arn: str = None,
  provisioning_configurations: IResolvable | typing.List[DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations] = None,
  provisioning_role_arn: str = None,
  regional_parameters: IResolvable | typing.List[DatazoneEnvironmentBlueprintConfigurationRegionalParameters] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.domainIdentifier">domain_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#domain_identifier DatazoneEnvironmentBlueprintConfiguration#domain_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.enabledRegions">enabled_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.environmentBlueprintIdentifier">environment_blueprint_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_identifier DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.environmentRolePermissionBoundary">environment_role_permission_boundary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#environment_role_permission_boundary DatazoneEnvironmentBlueprintConfiguration#environment_role_permission_boundary}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.globalParameters">global_parameters</a></code> | <code>typing.Mapping[str]</code> | Region-agnostic environment blueprint parameters. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.manageAccessRoleArn">manage_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provisioningConfigurations">provisioning_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_configurations DatazoneEnvironmentBlueprintConfiguration#provisioning_configurations}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provisioningRoleArn">provisioning_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.regionalParameters">regional_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.domainIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#domain_identifier DatazoneEnvironmentBlueprintConfiguration#domain_identifier}.

---

##### `enabled_regions`<sup>Required</sup> <a name="enabled_regions" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.enabledRegions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}.

---

##### `environment_blueprint_identifier`<sup>Required</sup> <a name="environment_blueprint_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.environmentBlueprintIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_identifier DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_identifier}.

---

##### `environment_role_permission_boundary`<sup>Optional</sup> <a name="environment_role_permission_boundary" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.environmentRolePermissionBoundary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#environment_role_permission_boundary DatazoneEnvironmentBlueprintConfiguration#environment_role_permission_boundary}.

---

##### `global_parameters`<sup>Optional</sup> <a name="global_parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.globalParameters"></a>

- *Type:* typing.Mapping[str]

Region-agnostic environment blueprint parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#global_parameters DatazoneEnvironmentBlueprintConfiguration#global_parameters}

---

##### `manage_access_role_arn`<sup>Optional</sup> <a name="manage_access_role_arn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.manageAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}.

---

##### `provisioning_configurations`<sup>Optional</sup> <a name="provisioning_configurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provisioningConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_configurations DatazoneEnvironmentBlueprintConfiguration#provisioning_configurations}.

---

##### `provisioning_role_arn`<sup>Optional</sup> <a name="provisioning_role_arn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provisioningRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}.

---

##### `regional_parameters`<sup>Optional</sup> <a name="regional_parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.regionalParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putProvisioningConfigurations">put_provisioning_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putRegionalParameters">put_regional_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetEnvironmentRolePermissionBoundary">reset_environment_role_permission_boundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetGlobalParameters">reset_global_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetManageAccessRoleArn">reset_manage_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningConfigurations">reset_provisioning_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningRoleArn">reset_provisioning_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetRegionalParameters">reset_regional_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provisioning_configurations` <a name="put_provisioning_configurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putProvisioningConfigurations"></a>

```python
def put_provisioning_configurations(
  value: IResolvable | typing.List[DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putProvisioningConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>]

---

##### `put_regional_parameters` <a name="put_regional_parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putRegionalParameters"></a>

```python
def put_regional_parameters(
  value: IResolvable | typing.List[DatazoneEnvironmentBlueprintConfigurationRegionalParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putRegionalParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>]

---

##### `reset_environment_role_permission_boundary` <a name="reset_environment_role_permission_boundary" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetEnvironmentRolePermissionBoundary"></a>

```python
def reset_environment_role_permission_boundary() -> None
```

##### `reset_global_parameters` <a name="reset_global_parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetGlobalParameters"></a>

```python
def reset_global_parameters() -> None
```

##### `reset_manage_access_role_arn` <a name="reset_manage_access_role_arn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetManageAccessRoleArn"></a>

```python
def reset_manage_access_role_arn() -> None
```

##### `reset_provisioning_configurations` <a name="reset_provisioning_configurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningConfigurations"></a>

```python
def reset_provisioning_configurations() -> None
```

##### `reset_provisioning_role_arn` <a name="reset_provisioning_role_arn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningRoleArn"></a>

```python
def reset_provisioning_role_arn() -> None
```

##### `reset_regional_parameters` <a name="reset_regional_parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetRegionalParameters"></a>

```python
def reset_regional_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatazoneEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatazoneEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatazoneEnvironmentBlueprintConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatazoneEnvironmentBlueprintConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironmentBlueprintConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId">environment_blueprint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurations">provisioning_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParameters">regional_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList">DatazoneEnvironmentBlueprintConfigurationRegionalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifierInput">domain_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegionsInput">enabled_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifierInput">environment_blueprint_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundaryInput">environment_role_permission_boundary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParametersInput">global_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArnInput">manage_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurationsInput">provisioning_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArnInput">provisioning_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParametersInput">regional_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegions">enabled_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifier">environment_blueprint_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundary">environment_role_permission_boundary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParameters">global_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn">manage_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn">provisioning_role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `environment_blueprint_id`<sup>Required</sup> <a name="environment_blueprint_id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId"></a>

```python
environment_blueprint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provisioning_configurations`<sup>Required</sup> <a name="provisioning_configurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurations"></a>

```python
provisioning_configurations: DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList</a>

---

##### `regional_parameters`<sup>Required</sup> <a name="regional_parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParameters"></a>

```python
regional_parameters: DatazoneEnvironmentBlueprintConfigurationRegionalParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList">DatazoneEnvironmentBlueprintConfigurationRegionalParametersList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `domain_identifier_input`<sup>Optional</sup> <a name="domain_identifier_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifierInput"></a>

```python
domain_identifier_input: str
```

- *Type:* str

---

##### `enabled_regions_input`<sup>Optional</sup> <a name="enabled_regions_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegionsInput"></a>

```python
enabled_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_blueprint_identifier_input`<sup>Optional</sup> <a name="environment_blueprint_identifier_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifierInput"></a>

```python
environment_blueprint_identifier_input: str
```

- *Type:* str

---

##### `environment_role_permission_boundary_input`<sup>Optional</sup> <a name="environment_role_permission_boundary_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundaryInput"></a>

```python
environment_role_permission_boundary_input: str
```

- *Type:* str

---

##### `global_parameters_input`<sup>Optional</sup> <a name="global_parameters_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParametersInput"></a>

```python
global_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `manage_access_role_arn_input`<sup>Optional</sup> <a name="manage_access_role_arn_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArnInput"></a>

```python
manage_access_role_arn_input: str
```

- *Type:* str

---

##### `provisioning_configurations_input`<sup>Optional</sup> <a name="provisioning_configurations_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurationsInput"></a>

```python
provisioning_configurations_input: IResolvable | typing.List[DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>]

---

##### `provisioning_role_arn_input`<sup>Optional</sup> <a name="provisioning_role_arn_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArnInput"></a>

```python
provisioning_role_arn_input: str
```

- *Type:* str

---

##### `regional_parameters_input`<sup>Optional</sup> <a name="regional_parameters_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParametersInput"></a>

```python
regional_parameters_input: IResolvable | typing.List[DatazoneEnvironmentBlueprintConfigurationRegionalParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `enabled_regions`<sup>Required</sup> <a name="enabled_regions" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegions"></a>

```python
enabled_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_blueprint_identifier`<sup>Required</sup> <a name="environment_blueprint_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifier"></a>

```python
environment_blueprint_identifier: str
```

- *Type:* str

---

##### `environment_role_permission_boundary`<sup>Required</sup> <a name="environment_role_permission_boundary" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundary"></a>

```python
environment_role_permission_boundary: str
```

- *Type:* str

---

##### `global_parameters`<sup>Required</sup> <a name="global_parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParameters"></a>

```python
global_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `manage_access_role_arn`<sup>Required</sup> <a name="manage_access_role_arn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn"></a>

```python
manage_access_role_arn: str
```

- *Type:* str

---

##### `provisioning_role_arn`<sup>Required</sup> <a name="provisioning_role_arn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn"></a>

```python
provisioning_role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentBlueprintConfigurationConfig <a name="DatazoneEnvironmentBlueprintConfigurationConfig" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_identifier: str,
  enabled_regions: typing.List[str],
  environment_blueprint_identifier: str,
  environment_role_permission_boundary: str = None,
  global_parameters: typing.Mapping[str] = None,
  manage_access_role_arn: str = None,
  provisioning_configurations: IResolvable | typing.List[DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations] = None,
  provisioning_role_arn: str = None,
  regional_parameters: IResolvable | typing.List[DatazoneEnvironmentBlueprintConfigurationRegionalParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#domain_identifier DatazoneEnvironmentBlueprintConfiguration#domain_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.enabledRegions">enabled_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentBlueprintIdentifier">environment_blueprint_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_identifier DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentRolePermissionBoundary">environment_role_permission_boundary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#environment_role_permission_boundary DatazoneEnvironmentBlueprintConfiguration#environment_role_permission_boundary}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.globalParameters">global_parameters</a></code> | <code>typing.Mapping[str]</code> | Region-agnostic environment blueprint parameters. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.manageAccessRoleArn">manage_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningConfigurations">provisioning_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_configurations DatazoneEnvironmentBlueprintConfiguration#provisioning_configurations}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningRoleArn">provisioning_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.regionalParameters">regional_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#domain_identifier DatazoneEnvironmentBlueprintConfiguration#domain_identifier}.

---

##### `enabled_regions`<sup>Required</sup> <a name="enabled_regions" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.enabledRegions"></a>

```python
enabled_regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}.

---

##### `environment_blueprint_identifier`<sup>Required</sup> <a name="environment_blueprint_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentBlueprintIdentifier"></a>

```python
environment_blueprint_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_identifier DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_identifier}.

---

##### `environment_role_permission_boundary`<sup>Optional</sup> <a name="environment_role_permission_boundary" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentRolePermissionBoundary"></a>

```python
environment_role_permission_boundary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#environment_role_permission_boundary DatazoneEnvironmentBlueprintConfiguration#environment_role_permission_boundary}.

---

##### `global_parameters`<sup>Optional</sup> <a name="global_parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.globalParameters"></a>

```python
global_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Region-agnostic environment blueprint parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#global_parameters DatazoneEnvironmentBlueprintConfiguration#global_parameters}

---

##### `manage_access_role_arn`<sup>Optional</sup> <a name="manage_access_role_arn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.manageAccessRoleArn"></a>

```python
manage_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}.

---

##### `provisioning_configurations`<sup>Optional</sup> <a name="provisioning_configurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningConfigurations"></a>

```python
provisioning_configurations: IResolvable | typing.List[DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_configurations DatazoneEnvironmentBlueprintConfiguration#provisioning_configurations}.

---

##### `provisioning_role_arn`<sup>Optional</sup> <a name="provisioning_role_arn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningRoleArn"></a>

```python
provisioning_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}.

---

##### `regional_parameters`<sup>Optional</sup> <a name="regional_parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.regionalParameters"></a>

```python
regional_parameters: IResolvable | typing.List[DatazoneEnvironmentBlueprintConfigurationRegionalParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}.

---

### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations(
  lake_formation_configuration: DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.property.lakeFormationConfiguration">lake_formation_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#lake_formation_configuration DatazoneEnvironmentBlueprintConfiguration#lake_formation_configuration}. |

---

##### `lake_formation_configuration`<sup>Optional</sup> <a name="lake_formation_configuration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.property.lakeFormationConfiguration"></a>

```python
lake_formation_configuration: DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#lake_formation_configuration DatazoneEnvironmentBlueprintConfiguration#lake_formation_configuration}.

---

### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration(
  location_registration_exclude_s3_locations: typing.List[str] = None,
  location_registration_role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationExcludeS3Locations">location_registration_exclude_s3_locations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_exclude_s3_locations DatazoneEnvironmentBlueprintConfiguration#location_registration_exclude_s3_locations}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationRole">location_registration_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_role DatazoneEnvironmentBlueprintConfiguration#location_registration_role}. |

---

##### `location_registration_exclude_s3_locations`<sup>Optional</sup> <a name="location_registration_exclude_s3_locations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationExcludeS3Locations"></a>

```python
location_registration_exclude_s3_locations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_exclude_s3_locations DatazoneEnvironmentBlueprintConfiguration#location_registration_exclude_s3_locations}.

---

##### `location_registration_role`<sup>Optional</sup> <a name="location_registration_role" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationRole"></a>

```python
location_registration_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_role DatazoneEnvironmentBlueprintConfiguration#location_registration_role}.

---

### DatazoneEnvironmentBlueprintConfigurationRegionalParameters <a name="DatazoneEnvironmentBlueprintConfigurationRegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters(
  parameters: typing.Mapping[str] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#parameters DatazoneEnvironmentBlueprintConfiguration#parameters}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#region DatazoneEnvironmentBlueprintConfiguration#region}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#parameters DatazoneEnvironmentBlueprintConfiguration#parameters}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#region DatazoneEnvironmentBlueprintConfiguration#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationExcludeS3Locations">reset_location_registration_exclude_s3_locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationRole">reset_location_registration_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_location_registration_exclude_s3_locations` <a name="reset_location_registration_exclude_s3_locations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationExcludeS3Locations"></a>

```python
def reset_location_registration_exclude_s3_locations() -> None
```

##### `reset_location_registration_role` <a name="reset_location_registration_role" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationRole"></a>

```python
def reset_location_registration_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3LocationsInput">location_registration_exclude_s3_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRoleInput">location_registration_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3Locations">location_registration_exclude_s3_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRole">location_registration_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_registration_exclude_s3_locations_input`<sup>Optional</sup> <a name="location_registration_exclude_s3_locations_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3LocationsInput"></a>

```python
location_registration_exclude_s3_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_registration_role_input`<sup>Optional</sup> <a name="location_registration_role_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRoleInput"></a>

```python
location_registration_role_input: str
```

- *Type:* str

---

##### `location_registration_exclude_s3_locations`<sup>Required</sup> <a name="location_registration_exclude_s3_locations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3Locations"></a>

```python
location_registration_exclude_s3_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_registration_role`<sup>Required</sup> <a name="location_registration_role" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRole"></a>

```python
location_registration_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

---


### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>]

---


### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.putLakeFormationConfiguration">put_lake_formation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resetLakeFormationConfiguration">reset_lake_formation_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lake_formation_configuration` <a name="put_lake_formation_configuration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.putLakeFormationConfiguration"></a>

```python
def put_lake_formation_configuration(
  location_registration_exclude_s3_locations: typing.List[str] = None,
  location_registration_role: str = None
) -> None
```

###### `location_registration_exclude_s3_locations`<sup>Optional</sup> <a name="location_registration_exclude_s3_locations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.putLakeFormationConfiguration.parameter.locationRegistrationExcludeS3Locations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_exclude_s3_locations DatazoneEnvironmentBlueprintConfiguration#location_registration_exclude_s3_locations}.

---

###### `location_registration_role`<sup>Optional</sup> <a name="location_registration_role" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.putLakeFormationConfiguration.parameter.locationRegistrationRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_role DatazoneEnvironmentBlueprintConfiguration#location_registration_role}.

---

##### `reset_lake_formation_configuration` <a name="reset_lake_formation_configuration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resetLakeFormationConfiguration"></a>

```python
def reset_lake_formation_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfiguration">lake_formation_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfigurationInput">lake_formation_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lake_formation_configuration`<sup>Required</sup> <a name="lake_formation_configuration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfiguration"></a>

```python
lake_formation_configuration: DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference</a>

---

##### `lake_formation_configuration_input`<sup>Optional</sup> <a name="lake_formation_configuration_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfigurationInput"></a>

```python
lake_formation_configuration_input: IResolvable | DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>

---


### DatazoneEnvironmentBlueprintConfigurationRegionalParametersList <a name="DatazoneEnvironmentBlueprintConfigurationRegionalParametersList" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneEnvironmentBlueprintConfigurationRegionalParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>]

---


### DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference <a name="DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneEnvironmentBlueprintConfigurationRegionalParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>

---



