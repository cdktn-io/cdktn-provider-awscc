# `iotSecurityProfile` Submodule <a name="`iotSecurityProfile` Submodule" id="@cdktn/provider-awscc.iotSecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSecurityProfile <a name="IotSecurityProfile" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile awscc_iot_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_metrics_to_retain_v2: IResolvable | typing.List[IotSecurityProfileAdditionalMetricsToRetainV2] = None,
  alert_targets: IResolvable | typing.Mapping[IotSecurityProfileAlertTargets] = None,
  behaviors: IResolvable | typing.List[IotSecurityProfileBehaviors] = None,
  metrics_export_config: IotSecurityProfileMetricsExportConfig = None,
  security_profile_description: str = None,
  security_profile_name: str = None,
  tags: IResolvable | typing.List[IotSecurityProfileTags] = None,
  target_arns: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.additionalMetricsToRetainV2">additional_metrics_to_retain_v2</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>]</code> | A list of metrics whose data is retained (stored). |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.alertTargets">alert_targets</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>]</code> | Specifies the destinations to which alerts are sent. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.behaviors">behaviors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>]</code> | Specifies the behaviors that, when violated by a device (thing), cause an alert. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.metricsExportConfig">metrics_export_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a></code> | A structure containing the mqtt topic for metrics export. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.securityProfileDescription">security_profile_description</a></code> | <code>str</code> | A description of the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.securityProfileName">security_profile_name</a></code> | <code>str</code> | A unique identifier for the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>]</code> | Metadata that can be used to manage the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.targetArns">target_arns</a></code> | <code>typing.List[str]</code> | A set of target ARNs that the security profile is attached to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_metrics_to_retain_v2`<sup>Optional</sup> <a name="additional_metrics_to_retain_v2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.additionalMetricsToRetainV2"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>]

A list of metrics whose data is retained (stored).

By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#additional_metrics_to_retain_v2 IotSecurityProfile#additional_metrics_to_retain_v2}

---

##### `alert_targets`<sup>Optional</sup> <a name="alert_targets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.alertTargets"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>]

Specifies the destinations to which alerts are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#alert_targets IotSecurityProfile#alert_targets}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.behaviors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>]

Specifies the behaviors that, when violated by a device (thing), cause an alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#behaviors IotSecurityProfile#behaviors}

---

##### `metrics_export_config`<sup>Optional</sup> <a name="metrics_export_config" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.metricsExportConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

A structure containing the mqtt topic for metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#metrics_export_config IotSecurityProfile#metrics_export_config}

---

##### `security_profile_description`<sup>Optional</sup> <a name="security_profile_description" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.securityProfileDescription"></a>

- *Type:* str

A description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#security_profile_description IotSecurityProfile#security_profile_description}

---

##### `security_profile_name`<sup>Optional</sup> <a name="security_profile_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.securityProfileName"></a>

- *Type:* str

A unique identifier for the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#security_profile_name IotSecurityProfile#security_profile_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>]

Metadata that can be used to manage the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#tags IotSecurityProfile#tags}

---

##### `target_arns`<sup>Optional</sup> <a name="target_arns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.targetArns"></a>

- *Type:* typing.List[str]

A set of target ARNs that the security profile is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#target_arns IotSecurityProfile#target_arns}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAdditionalMetricsToRetainV2">put_additional_metrics_to_retain_v2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAlertTargets">put_alert_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putBehaviors">put_behaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putMetricsExportConfig">put_metrics_export_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAdditionalMetricsToRetainV2">reset_additional_metrics_to_retain_v2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAlertTargets">reset_alert_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetBehaviors">reset_behaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetMetricsExportConfig">reset_metrics_export_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileDescription">reset_security_profile_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileName">reset_security_profile_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTargetArns">reset_target_arns</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_additional_metrics_to_retain_v2` <a name="put_additional_metrics_to_retain_v2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAdditionalMetricsToRetainV2"></a>

```python
def put_additional_metrics_to_retain_v2(
  value: IResolvable | typing.List[IotSecurityProfileAdditionalMetricsToRetainV2]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAdditionalMetricsToRetainV2.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>]

---

##### `put_alert_targets` <a name="put_alert_targets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAlertTargets"></a>

```python
def put_alert_targets(
  value: IResolvable | typing.Mapping[IotSecurityProfileAlertTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAlertTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>]

---

##### `put_behaviors` <a name="put_behaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putBehaviors"></a>

```python
def put_behaviors(
  value: IResolvable | typing.List[IotSecurityProfileBehaviors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putBehaviors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>]

---

##### `put_metrics_export_config` <a name="put_metrics_export_config" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putMetricsExportConfig"></a>

```python
def put_metrics_export_config(
  mqtt_topic: str = None,
  role_arn: str = None
) -> None
```

###### `mqtt_topic`<sup>Optional</sup> <a name="mqtt_topic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putMetricsExportConfig.parameter.mqttTopic"></a>

- *Type:* str

The topic for metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#mqtt_topic IotSecurityProfile#mqtt_topic}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putMetricsExportConfig.parameter.roleArn"></a>

- *Type:* str

The ARN of the role that grants permission to publish to mqtt topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#role_arn IotSecurityProfile#role_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotSecurityProfileTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>]

---

##### `reset_additional_metrics_to_retain_v2` <a name="reset_additional_metrics_to_retain_v2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAdditionalMetricsToRetainV2"></a>

```python
def reset_additional_metrics_to_retain_v2() -> None
```

##### `reset_alert_targets` <a name="reset_alert_targets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAlertTargets"></a>

```python
def reset_alert_targets() -> None
```

##### `reset_behaviors` <a name="reset_behaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetBehaviors"></a>

```python
def reset_behaviors() -> None
```

##### `reset_metrics_export_config` <a name="reset_metrics_export_config" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetMetricsExportConfig"></a>

```python
def reset_metrics_export_config() -> None
```

##### `reset_security_profile_description` <a name="reset_security_profile_description" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileDescription"></a>

```python
def reset_security_profile_description() -> None
```

##### `reset_security_profile_name` <a name="reset_security_profile_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileName"></a>

```python
def reset_security_profile_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_arns` <a name="reset_target_arns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTargetArns"></a>

```python
def reset_target_arns() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotSecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotSecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotSecurityProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotSecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotSecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2">additional_metrics_to_retain_v2</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List">IotSecurityProfileAdditionalMetricsToRetainV2List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargets">alert_targets</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap">IotSecurityProfileAlertTargetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviors">behaviors</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList">IotSecurityProfileBehaviorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfig">metrics_export_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference">IotSecurityProfileMetricsExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileArn">security_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList">IotSecurityProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2Input">additional_metrics_to_retain_v2_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargetsInput">alert_targets_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviorsInput">behaviors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfigInput">metrics_export_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescriptionInput">security_profile_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileNameInput">security_profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArnsInput">target_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescription">security_profile_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileName">security_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArns">target_arns</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_metrics_to_retain_v2`<sup>Required</sup> <a name="additional_metrics_to_retain_v2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2"></a>

```python
additional_metrics_to_retain_v2: IotSecurityProfileAdditionalMetricsToRetainV2List
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List">IotSecurityProfileAdditionalMetricsToRetainV2List</a>

---

##### `alert_targets`<sup>Required</sup> <a name="alert_targets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargets"></a>

```python
alert_targets: IotSecurityProfileAlertTargetsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap">IotSecurityProfileAlertTargetsMap</a>

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviors"></a>

```python
behaviors: IotSecurityProfileBehaviorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList">IotSecurityProfileBehaviorsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metrics_export_config`<sup>Required</sup> <a name="metrics_export_config" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfig"></a>

```python
metrics_export_config: IotSecurityProfileMetricsExportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference">IotSecurityProfileMetricsExportConfigOutputReference</a>

---

##### `security_profile_arn`<sup>Required</sup> <a name="security_profile_arn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileArn"></a>

```python
security_profile_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tags"></a>

```python
tags: IotSecurityProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList">IotSecurityProfileTagsList</a>

---

##### `additional_metrics_to_retain_v2_input`<sup>Optional</sup> <a name="additional_metrics_to_retain_v2_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2Input"></a>

```python
additional_metrics_to_retain_v2_input: IResolvable | typing.List[IotSecurityProfileAdditionalMetricsToRetainV2]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>]

---

##### `alert_targets_input`<sup>Optional</sup> <a name="alert_targets_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargetsInput"></a>

```python
alert_targets_input: IResolvable | typing.Mapping[IotSecurityProfileAlertTargets]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>]

---

##### `behaviors_input`<sup>Optional</sup> <a name="behaviors_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviorsInput"></a>

```python
behaviors_input: IResolvable | typing.List[IotSecurityProfileBehaviors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>]

---

##### `metrics_export_config_input`<sup>Optional</sup> <a name="metrics_export_config_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfigInput"></a>

```python
metrics_export_config_input: IResolvable | IotSecurityProfileMetricsExportConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

---

##### `security_profile_description_input`<sup>Optional</sup> <a name="security_profile_description_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescriptionInput"></a>

```python
security_profile_description_input: str
```

- *Type:* str

---

##### `security_profile_name_input`<sup>Optional</sup> <a name="security_profile_name_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileNameInput"></a>

```python
security_profile_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotSecurityProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>]

---

##### `target_arns_input`<sup>Optional</sup> <a name="target_arns_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArnsInput"></a>

```python
target_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_profile_description`<sup>Required</sup> <a name="security_profile_description" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescription"></a>

```python
security_profile_description: str
```

- *Type:* str

---

##### `security_profile_name`<sup>Required</sup> <a name="security_profile_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileName"></a>

```python
security_profile_name: str
```

- *Type:* str

---

##### `target_arns`<sup>Required</sup> <a name="target_arns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArns"></a>

```python
target_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotSecurityProfileAdditionalMetricsToRetainV2 <a name="IotSecurityProfileAdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2(
  export_metric: bool | IResolvable = None,
  metric: str = None,
  metric_dimension: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.exportMetric">export_metric</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to enable/disable metrics export for metric to be retained. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metric">metric</a></code> | <code>str</code> | What is measured by the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metricDimension">metric_dimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a></code> | The dimension of a metric. |

---

##### `export_metric`<sup>Optional</sup> <a name="export_metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.exportMetric"></a>

```python
export_metric: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Flag to enable/disable metrics export for metric to be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#export_metric IotSecurityProfile#export_metric}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metric"></a>

```python
metric: str
```

- *Type:* str

What is measured by the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#metric IotSecurityProfile#metric}

---

##### `metric_dimension`<sup>Optional</sup> <a name="metric_dimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metricDimension"></a>

```python
metric_dimension: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

The dimension of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#metric_dimension IotSecurityProfile#metric_dimension}

---

### IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension <a name="IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension(
  dimension_name: str = None,
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.dimensionName">dimension_name</a></code> | <code>str</code> | A unique identifier for the dimension. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.operator">operator</a></code> | <code>str</code> | Defines how the dimensionValues of a dimension are interpreted. |

---

##### `dimension_name`<sup>Optional</sup> <a name="dimension_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

A unique identifier for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#dimension_name IotSecurityProfile#dimension_name}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.operator"></a>

```python
operator: str
```

- *Type:* str

Defines how the dimensionValues of a dimension are interpreted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#operator IotSecurityProfile#operator}

---

### IotSecurityProfileAlertTargets <a name="IotSecurityProfileAlertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileAlertTargets(
  alert_target_arn: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.alertTargetArn">alert_target_arn</a></code> | <code>str</code> | The ARN of the notification target to which alerts are sent. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the role that grants permission to send alerts to the notification target. |

---

##### `alert_target_arn`<sup>Optional</sup> <a name="alert_target_arn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.alertTargetArn"></a>

```python
alert_target_arn: str
```

- *Type:* str

The ARN of the notification target to which alerts are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#alert_target_arn IotSecurityProfile#alert_target_arn}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the role that grants permission to send alerts to the notification target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#role_arn IotSecurityProfile#role_arn}

---

### IotSecurityProfileBehaviors <a name="IotSecurityProfileBehaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileBehaviors(
  criteria: IotSecurityProfileBehaviorsCriteria = None,
  export_metric: bool | IResolvable = None,
  metric: str = None,
  metric_dimension: IotSecurityProfileBehaviorsMetricDimension = None,
  name: str = None,
  suppress_alerts: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a></code> | The criteria by which the behavior is determined to be normal. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.exportMetric">export_metric</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to enable/disable metrics export for metric to be retained. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metric">metric</a></code> | <code>str</code> | What is measured by the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metricDimension">metric_dimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a></code> | The dimension of a metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.name">name</a></code> | <code>str</code> | The name for the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.suppressAlerts">suppress_alerts</a></code> | <code>bool \| cdktn.IResolvable</code> | Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed. |

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.criteria"></a>

```python
criteria: IotSecurityProfileBehaviorsCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a>

The criteria by which the behavior is determined to be normal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#criteria IotSecurityProfile#criteria}

---

##### `export_metric`<sup>Optional</sup> <a name="export_metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.exportMetric"></a>

```python
export_metric: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Flag to enable/disable metrics export for metric to be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#export_metric IotSecurityProfile#export_metric}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metric"></a>

```python
metric: str
```

- *Type:* str

What is measured by the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#metric IotSecurityProfile#metric}

---

##### `metric_dimension`<sup>Optional</sup> <a name="metric_dimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metricDimension"></a>

```python
metric_dimension: IotSecurityProfileBehaviorsMetricDimension
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a>

The dimension of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#metric_dimension IotSecurityProfile#metric_dimension}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#name IotSecurityProfile#name}

---

##### `suppress_alerts`<sup>Optional</sup> <a name="suppress_alerts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.suppressAlerts"></a>

```python
suppress_alerts: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed.

Detect will continue to performing device behavior evaluations. However, suppressed alarms wouldn't be forwarded for SNS notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#suppress_alerts IotSecurityProfile#suppress_alerts}

---

### IotSecurityProfileBehaviorsCriteria <a name="IotSecurityProfileBehaviorsCriteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileBehaviorsCriteria(
  comparison_operator: str = None,
  consecutive_datapoints_to_alarm: typing.Union[int, float] = None,
  consecutive_datapoints_to_clear: typing.Union[int, float] = None,
  duration_seconds: typing.Union[int, float] = None,
  ml_detection_config: IotSecurityProfileBehaviorsCriteriaMlDetectionConfig = None,
  statistical_threshold: IotSecurityProfileBehaviorsCriteriaStatisticalThreshold = None,
  value: IotSecurityProfileBehaviorsCriteriaValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold). |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToAlarm">consecutive_datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToClear">consecutive_datapoints_to_clear</a></code> | <code>typing.Union[int, float]</code> | If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Use this to specify the time duration over which the behavior is evaluated. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.mlDetectionConfig">ml_detection_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a></code> | The configuration of an ML Detect Security Profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.statisticalThreshold">statistical_threshold</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a></code> | A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a></code> | The value to be compared with the metric. |

---

##### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#comparison_operator IotSecurityProfile#comparison_operator}

---

##### `consecutive_datapoints_to_alarm`<sup>Optional</sup> <a name="consecutive_datapoints_to_alarm" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToAlarm"></a>

```python
consecutive_datapoints_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs.

If not specified, the default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#consecutive_datapoints_to_alarm IotSecurityProfile#consecutive_datapoints_to_alarm}

---

##### `consecutive_datapoints_to_clear`<sup>Optional</sup> <a name="consecutive_datapoints_to_clear" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToClear"></a>

```python
consecutive_datapoints_to_clear: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared.

If not specified, the default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#consecutive_datapoints_to_clear IotSecurityProfile#consecutive_datapoints_to_clear}

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Use this to specify the time duration over which the behavior is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#duration_seconds IotSecurityProfile#duration_seconds}

---

##### `ml_detection_config`<sup>Optional</sup> <a name="ml_detection_config" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.mlDetectionConfig"></a>

```python
ml_detection_config: IotSecurityProfileBehaviorsCriteriaMlDetectionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

The configuration of an ML Detect Security Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#ml_detection_config IotSecurityProfile#ml_detection_config}

---

##### `statistical_threshold`<sup>Optional</sup> <a name="statistical_threshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.statisticalThreshold"></a>

```python
statistical_threshold: IotSecurityProfileBehaviorsCriteriaStatisticalThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#statistical_threshold IotSecurityProfile#statistical_threshold}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.value"></a>

```python
value: IotSecurityProfileBehaviorsCriteriaValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

The value to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#value IotSecurityProfile#value}

---

### IotSecurityProfileBehaviorsCriteriaMlDetectionConfig <a name="IotSecurityProfileBehaviorsCriteriaMlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig(
  confidence_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High. |

---

##### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#confidence_level IotSecurityProfile#confidence_level}

---

### IotSecurityProfileBehaviorsCriteriaStatisticalThreshold <a name="IotSecurityProfileBehaviorsCriteriaStatisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold(
  statistic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold.property.statistic">statistic</a></code> | <code>str</code> | The percentile which resolves to a threshold value by which compliance with a behavior is determined. |

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

The percentile which resolves to a threshold value by which compliance with a behavior is determined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#statistic IotSecurityProfile#statistic}

---

### IotSecurityProfileBehaviorsCriteriaValue <a name="IotSecurityProfileBehaviorsCriteriaValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue(
  cidrs: typing.List[str] = None,
  count: str = None,
  number: typing.Union[int, float] = None,
  numbers: typing.List[typing.Union[int, float]] = None,
  ports: typing.List[typing.Union[int, float]] = None,
  strings: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.cidrs">cidrs</a></code> | <code>typing.List[str]</code> | If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.count">count</a></code> | <code>str</code> | If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.number">number</a></code> | <code>typing.Union[int, float]</code> | The numeral value of a metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.numbers">numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The numeral values of a metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.strings">strings</a></code> | <code>typing.List[str]</code> | The string values of a metric. |

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.cidrs"></a>

```python
cidrs: typing.List[str]
```

- *Type:* typing.List[str]

If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#cidrs IotSecurityProfile#cidrs}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.count"></a>

```python
count: str
```

- *Type:* str

If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#count IotSecurityProfile#count}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The numeral value of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#number IotSecurityProfile#number}

---

##### `numbers`<sup>Optional</sup> <a name="numbers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.numbers"></a>

```python
numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The numeral values of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#numbers IotSecurityProfile#numbers}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#ports IotSecurityProfile#ports}

---

##### `strings`<sup>Optional</sup> <a name="strings" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.strings"></a>

```python
strings: typing.List[str]
```

- *Type:* typing.List[str]

The string values of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#strings IotSecurityProfile#strings}

---

### IotSecurityProfileBehaviorsMetricDimension <a name="IotSecurityProfileBehaviorsMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension(
  dimension_name: str = None,
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.dimensionName">dimension_name</a></code> | <code>str</code> | A unique identifier for the dimension. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.operator">operator</a></code> | <code>str</code> | Defines how the dimensionValues of a dimension are interpreted. |

---

##### `dimension_name`<sup>Optional</sup> <a name="dimension_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

A unique identifier for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#dimension_name IotSecurityProfile#dimension_name}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.operator"></a>

```python
operator: str
```

- *Type:* str

Defines how the dimensionValues of a dimension are interpreted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#operator IotSecurityProfile#operator}

---

### IotSecurityProfileConfig <a name="IotSecurityProfileConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_metrics_to_retain_v2: IResolvable | typing.List[IotSecurityProfileAdditionalMetricsToRetainV2] = None,
  alert_targets: IResolvable | typing.Mapping[IotSecurityProfileAlertTargets] = None,
  behaviors: IResolvable | typing.List[IotSecurityProfileBehaviors] = None,
  metrics_export_config: IotSecurityProfileMetricsExportConfig = None,
  security_profile_description: str = None,
  security_profile_name: str = None,
  tags: IResolvable | typing.List[IotSecurityProfileTags] = None,
  target_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.additionalMetricsToRetainV2">additional_metrics_to_retain_v2</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>]</code> | A list of metrics whose data is retained (stored). |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.alertTargets">alert_targets</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>]</code> | Specifies the destinations to which alerts are sent. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.behaviors">behaviors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>]</code> | Specifies the behaviors that, when violated by a device (thing), cause an alert. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.metricsExportConfig">metrics_export_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a></code> | A structure containing the mqtt topic for metrics export. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileDescription">security_profile_description</a></code> | <code>str</code> | A description of the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileName">security_profile_name</a></code> | <code>str</code> | A unique identifier for the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>]</code> | Metadata that can be used to manage the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.targetArns">target_arns</a></code> | <code>typing.List[str]</code> | A set of target ARNs that the security profile is attached to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_metrics_to_retain_v2`<sup>Optional</sup> <a name="additional_metrics_to_retain_v2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.additionalMetricsToRetainV2"></a>

```python
additional_metrics_to_retain_v2: IResolvable | typing.List[IotSecurityProfileAdditionalMetricsToRetainV2]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>]

A list of metrics whose data is retained (stored).

By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#additional_metrics_to_retain_v2 IotSecurityProfile#additional_metrics_to_retain_v2}

---

##### `alert_targets`<sup>Optional</sup> <a name="alert_targets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.alertTargets"></a>

```python
alert_targets: IResolvable | typing.Mapping[IotSecurityProfileAlertTargets]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>]

Specifies the destinations to which alerts are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#alert_targets IotSecurityProfile#alert_targets}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.behaviors"></a>

```python
behaviors: IResolvable | typing.List[IotSecurityProfileBehaviors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>]

Specifies the behaviors that, when violated by a device (thing), cause an alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#behaviors IotSecurityProfile#behaviors}

---

##### `metrics_export_config`<sup>Optional</sup> <a name="metrics_export_config" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.metricsExportConfig"></a>

```python
metrics_export_config: IotSecurityProfileMetricsExportConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

A structure containing the mqtt topic for metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#metrics_export_config IotSecurityProfile#metrics_export_config}

---

##### `security_profile_description`<sup>Optional</sup> <a name="security_profile_description" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileDescription"></a>

```python
security_profile_description: str
```

- *Type:* str

A description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#security_profile_description IotSecurityProfile#security_profile_description}

---

##### `security_profile_name`<sup>Optional</sup> <a name="security_profile_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileName"></a>

```python
security_profile_name: str
```

- *Type:* str

A unique identifier for the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#security_profile_name IotSecurityProfile#security_profile_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotSecurityProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>]

Metadata that can be used to manage the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#tags IotSecurityProfile#tags}

---

##### `target_arns`<sup>Optional</sup> <a name="target_arns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.targetArns"></a>

```python
target_arns: typing.List[str]
```

- *Type:* typing.List[str]

A set of target ARNs that the security profile is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#target_arns IotSecurityProfile#target_arns}

---

### IotSecurityProfileMetricsExportConfig <a name="IotSecurityProfileMetricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileMetricsExportConfig(
  mqtt_topic: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.mqttTopic">mqtt_topic</a></code> | <code>str</code> | The topic for metrics export. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the role that grants permission to publish to mqtt topic. |

---

##### `mqtt_topic`<sup>Optional</sup> <a name="mqtt_topic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.mqttTopic"></a>

```python
mqtt_topic: str
```

- *Type:* str

The topic for metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#mqtt_topic IotSecurityProfile#mqtt_topic}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the role that grants permission to publish to mqtt topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#role_arn IotSecurityProfile#role_arn}

---

### IotSecurityProfileTags <a name="IotSecurityProfileTags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.key">key</a></code> | <code>str</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.value">value</a></code> | <code>str</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#key IotSecurityProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#value IotSecurityProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotSecurityProfileAdditionalMetricsToRetainV2List <a name="IotSecurityProfileAdditionalMetricsToRetainV2List" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotSecurityProfileAdditionalMetricsToRetainV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotSecurityProfileAdditionalMetricsToRetainV2]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>]

---


### IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference <a name="IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetDimensionName">reset_dimension_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dimension_name` <a name="reset_dimension_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetDimensionName"></a>

```python
def reset_dimension_name() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionNameInput">dimension_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName">dimension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_name_input`<sup>Optional</sup> <a name="dimension_name_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionNameInput"></a>

```python
dimension_name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

---


### IotSecurityProfileAdditionalMetricsToRetainV2OutputReference <a name="IotSecurityProfileAdditionalMetricsToRetainV2OutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.putMetricDimension">put_metric_dimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetExportMetric">reset_export_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetricDimension">reset_metric_dimension</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_dimension` <a name="put_metric_dimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.putMetricDimension"></a>

```python
def put_metric_dimension(
  dimension_name: str = None,
  operator: str = None
) -> None
```

###### `dimension_name`<sup>Optional</sup> <a name="dimension_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.putMetricDimension.parameter.dimensionName"></a>

- *Type:* str

A unique identifier for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#dimension_name IotSecurityProfile#dimension_name}

---

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.putMetricDimension.parameter.operator"></a>

- *Type:* str

Defines how the dimensionValues of a dimension are interpreted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#operator IotSecurityProfile#operator}

---

##### `reset_export_metric` <a name="reset_export_metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetExportMetric"></a>

```python
def reset_export_metric() -> None
```

##### `reset_metric` <a name="reset_metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_metric_dimension` <a name="reset_metric_dimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetricDimension"></a>

```python
def reset_metric_dimension() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension">metric_dimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetricInput">export_metric_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimensionInput">metric_dimension_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric">export_metric</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_dimension`<sup>Required</sup> <a name="metric_dimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension"></a>

```python
metric_dimension: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a>

---

##### `export_metric_input`<sup>Optional</sup> <a name="export_metric_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetricInput"></a>

```python
export_metric_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `metric_dimension_input`<sup>Optional</sup> <a name="metric_dimension_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimensionInput"></a>

```python
metric_dimension_input: IResolvable | IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `export_metric`<sup>Required</sup> <a name="export_metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric"></a>

```python
export_metric: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSecurityProfileAdditionalMetricsToRetainV2
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>

---


### IotSecurityProfileAlertTargetsMap <a name="IotSecurityProfileAlertTargetsMap" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileAlertTargetsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.get"></a>

```python
def get(
  key: str
) -> IotSecurityProfileAlertTargetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[IotSecurityProfileAlertTargets]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>]

---


### IotSecurityProfileAlertTargetsOutputReference <a name="IotSecurityProfileAlertTargetsOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetAlertTargetArn">reset_alert_target_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alert_target_arn` <a name="reset_alert_target_arn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetAlertTargetArn"></a>

```python
def reset_alert_target_arn() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArnInput">alert_target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn">alert_target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alert_target_arn_input`<sup>Optional</sup> <a name="alert_target_arn_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArnInput"></a>

```python
alert_target_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `alert_target_arn`<sup>Required</sup> <a name="alert_target_arn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn"></a>

```python
alert_target_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSecurityProfileAlertTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>

---


### IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference <a name="IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resetConfidenceLevel">reset_confidence_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_confidence_level` <a name="reset_confidence_level" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resetConfidenceLevel"></a>

```python
def reset_confidence_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevelInput">confidence_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_level_input`<sup>Optional</sup> <a name="confidence_level_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevelInput"></a>

```python
confidence_level_input: str
```

- *Type:* str

---

##### `confidence_level`<sup>Required</sup> <a name="confidence_level" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSecurityProfileBehaviorsCriteriaMlDetectionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

---


### IotSecurityProfileBehaviorsCriteriaOutputReference <a name="IotSecurityProfileBehaviorsCriteriaOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putMlDetectionConfig">put_ml_detection_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putStatisticalThreshold">put_statistical_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetComparisonOperator">reset_comparison_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToAlarm">reset_consecutive_datapoints_to_alarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToClear">reset_consecutive_datapoints_to_clear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetDurationSeconds">reset_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetMlDetectionConfig">reset_ml_detection_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetStatisticalThreshold">reset_statistical_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ml_detection_config` <a name="put_ml_detection_config" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putMlDetectionConfig"></a>

```python
def put_ml_detection_config(
  confidence_level: str = None
) -> None
```

###### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putMlDetectionConfig.parameter.confidenceLevel"></a>

- *Type:* str

The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#confidence_level IotSecurityProfile#confidence_level}

---

##### `put_statistical_threshold` <a name="put_statistical_threshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putStatisticalThreshold"></a>

```python
def put_statistical_threshold(
  statistic: str = None
) -> None
```

###### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putStatisticalThreshold.parameter.statistic"></a>

- *Type:* str

The percentile which resolves to a threshold value by which compliance with a behavior is determined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#statistic IotSecurityProfile#statistic}

---

##### `put_value` <a name="put_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue"></a>

```python
def put_value(
  cidrs: typing.List[str] = None,
  count: str = None,
  number: typing.Union[int, float] = None,
  numbers: typing.List[typing.Union[int, float]] = None,
  ports: typing.List[typing.Union[int, float]] = None,
  strings: typing.List[str] = None
) -> None
```

###### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue.parameter.cidrs"></a>

- *Type:* typing.List[str]

If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#cidrs IotSecurityProfile#cidrs}

---

###### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue.parameter.count"></a>

- *Type:* str

If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#count IotSecurityProfile#count}

---

###### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue.parameter.number"></a>

- *Type:* typing.Union[int, float]

The numeral value of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#number IotSecurityProfile#number}

---

###### `numbers`<sup>Optional</sup> <a name="numbers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue.parameter.numbers"></a>

- *Type:* typing.List[typing.Union[int, float]]

The numeral values of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#numbers IotSecurityProfile#numbers}

---

###### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue.parameter.ports"></a>

- *Type:* typing.List[typing.Union[int, float]]

If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#ports IotSecurityProfile#ports}

---

###### `strings`<sup>Optional</sup> <a name="strings" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue.parameter.strings"></a>

- *Type:* typing.List[str]

The string values of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#strings IotSecurityProfile#strings}

---

##### `reset_comparison_operator` <a name="reset_comparison_operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetComparisonOperator"></a>

```python
def reset_comparison_operator() -> None
```

##### `reset_consecutive_datapoints_to_alarm` <a name="reset_consecutive_datapoints_to_alarm" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToAlarm"></a>

```python
def reset_consecutive_datapoints_to_alarm() -> None
```

##### `reset_consecutive_datapoints_to_clear` <a name="reset_consecutive_datapoints_to_clear" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToClear"></a>

```python
def reset_consecutive_datapoints_to_clear() -> None
```

##### `reset_duration_seconds` <a name="reset_duration_seconds" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetDurationSeconds"></a>

```python
def reset_duration_seconds() -> None
```

##### `reset_ml_detection_config` <a name="reset_ml_detection_config" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetMlDetectionConfig"></a>

```python
def reset_ml_detection_config() -> None
```

##### `reset_statistical_threshold` <a name="reset_statistical_threshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetStatisticalThreshold"></a>

```python
def reset_statistical_threshold() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig">ml_detection_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold">statistical_threshold</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference">IotSecurityProfileBehaviorsCriteriaValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarmInput">consecutive_datapoints_to_alarm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClearInput">consecutive_datapoints_to_clear_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSecondsInput">duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfigInput">ml_detection_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThresholdInput">statistical_threshold_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.valueInput">value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm">consecutive_datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear">consecutive_datapoints_to_clear</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ml_detection_config`<sup>Required</sup> <a name="ml_detection_config" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig"></a>

```python
ml_detection_config: IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a>

---

##### `statistical_threshold`<sup>Required</sup> <a name="statistical_threshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold"></a>

```python
statistical_threshold: IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.value"></a>

```python
value: IotSecurityProfileBehaviorsCriteriaValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference">IotSecurityProfileBehaviorsCriteriaValueOutputReference</a>

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `consecutive_datapoints_to_alarm_input`<sup>Optional</sup> <a name="consecutive_datapoints_to_alarm_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarmInput"></a>

```python
consecutive_datapoints_to_alarm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consecutive_datapoints_to_clear_input`<sup>Optional</sup> <a name="consecutive_datapoints_to_clear_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClearInput"></a>

```python
consecutive_datapoints_to_clear_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration_seconds_input`<sup>Optional</sup> <a name="duration_seconds_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSecondsInput"></a>

```python
duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ml_detection_config_input`<sup>Optional</sup> <a name="ml_detection_config_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfigInput"></a>

```python
ml_detection_config_input: IResolvable | IotSecurityProfileBehaviorsCriteriaMlDetectionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

---

##### `statistical_threshold_input`<sup>Optional</sup> <a name="statistical_threshold_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThresholdInput"></a>

```python
statistical_threshold_input: IResolvable | IotSecurityProfileBehaviorsCriteriaStatisticalThreshold
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.valueInput"></a>

```python
value_input: IResolvable | IotSecurityProfileBehaviorsCriteriaValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `consecutive_datapoints_to_alarm`<sup>Required</sup> <a name="consecutive_datapoints_to_alarm" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm"></a>

```python
consecutive_datapoints_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consecutive_datapoints_to_clear`<sup>Required</sup> <a name="consecutive_datapoints_to_clear" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear"></a>

```python
consecutive_datapoints_to_clear: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSecurityProfileBehaviorsCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a>

---


### IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference <a name="IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_statistic` <a name="reset_statistic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSecurityProfileBehaviorsCriteriaStatisticalThreshold
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

---


### IotSecurityProfileBehaviorsCriteriaValueOutputReference <a name="IotSecurityProfileBehaviorsCriteriaValueOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCidrs">reset_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumber">reset_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumbers">reset_numbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetStrings">reset_strings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidrs` <a name="reset_cidrs" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCidrs"></a>

```python
def reset_cidrs() -> None
```

##### `reset_count` <a name="reset_count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_number` <a name="reset_number" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumber"></a>

```python
def reset_number() -> None
```

##### `reset_numbers` <a name="reset_numbers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumbers"></a>

```python
def reset_numbers() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_strings` <a name="reset_strings" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetStrings"></a>

```python
def reset_strings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrsInput">cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.countInput">count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numberInput">number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbersInput">numbers_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.stringsInput">strings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs">cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count">count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers">numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings">strings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidrs_input`<sup>Optional</sup> <a name="cidrs_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrsInput"></a>

```python
cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.countInput"></a>

```python
count_input: str
```

- *Type:* str

---

##### `number_input`<sup>Optional</sup> <a name="number_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numberInput"></a>

```python
number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `numbers_input`<sup>Optional</sup> <a name="numbers_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbersInput"></a>

```python
numbers_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `strings_input`<sup>Optional</sup> <a name="strings_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.stringsInput"></a>

```python
strings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs"></a>

```python
cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count"></a>

```python
count: str
```

- *Type:* str

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `numbers`<sup>Required</sup> <a name="numbers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers"></a>

```python
numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `strings`<sup>Required</sup> <a name="strings" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings"></a>

```python
strings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSecurityProfileBehaviorsCriteriaValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

---


### IotSecurityProfileBehaviorsList <a name="IotSecurityProfileBehaviorsList" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileBehaviorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotSecurityProfileBehaviorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotSecurityProfileBehaviors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>]

---


### IotSecurityProfileBehaviorsMetricDimensionOutputReference <a name="IotSecurityProfileBehaviorsMetricDimensionOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetDimensionName">reset_dimension_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dimension_name` <a name="reset_dimension_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetDimensionName"></a>

```python
def reset_dimension_name() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionNameInput">dimension_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName">dimension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_name_input`<sup>Optional</sup> <a name="dimension_name_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionNameInput"></a>

```python
dimension_name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSecurityProfileBehaviorsMetricDimension
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a>

---


### IotSecurityProfileBehaviorsOutputReference <a name="IotSecurityProfileBehaviorsOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putMetricDimension">put_metric_dimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetCriteria">reset_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetExportMetric">reset_export_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetricDimension">reset_metric_dimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetSuppressAlerts">reset_suppress_alerts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_criteria` <a name="put_criteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria"></a>

```python
def put_criteria(
  comparison_operator: str = None,
  consecutive_datapoints_to_alarm: typing.Union[int, float] = None,
  consecutive_datapoints_to_clear: typing.Union[int, float] = None,
  duration_seconds: typing.Union[int, float] = None,
  ml_detection_config: IotSecurityProfileBehaviorsCriteriaMlDetectionConfig = None,
  statistical_threshold: IotSecurityProfileBehaviorsCriteriaStatisticalThreshold = None,
  value: IotSecurityProfileBehaviorsCriteriaValue = None
) -> None
```

###### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria.parameter.comparisonOperator"></a>

- *Type:* str

The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#comparison_operator IotSecurityProfile#comparison_operator}

---

###### `consecutive_datapoints_to_alarm`<sup>Optional</sup> <a name="consecutive_datapoints_to_alarm" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria.parameter.consecutiveDatapointsToAlarm"></a>

- *Type:* typing.Union[int, float]

If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs.

If not specified, the default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#consecutive_datapoints_to_alarm IotSecurityProfile#consecutive_datapoints_to_alarm}

---

###### `consecutive_datapoints_to_clear`<sup>Optional</sup> <a name="consecutive_datapoints_to_clear" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria.parameter.consecutiveDatapointsToClear"></a>

- *Type:* typing.Union[int, float]

If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared.

If not specified, the default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#consecutive_datapoints_to_clear IotSecurityProfile#consecutive_datapoints_to_clear}

---

###### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria.parameter.durationSeconds"></a>

- *Type:* typing.Union[int, float]

Use this to specify the time duration over which the behavior is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#duration_seconds IotSecurityProfile#duration_seconds}

---

###### `ml_detection_config`<sup>Optional</sup> <a name="ml_detection_config" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria.parameter.mlDetectionConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

The configuration of an ML Detect Security Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#ml_detection_config IotSecurityProfile#ml_detection_config}

---

###### `statistical_threshold`<sup>Optional</sup> <a name="statistical_threshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria.parameter.statisticalThreshold"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#statistical_threshold IotSecurityProfile#statistical_threshold}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

The value to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#value IotSecurityProfile#value}

---

##### `put_metric_dimension` <a name="put_metric_dimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putMetricDimension"></a>

```python
def put_metric_dimension(
  dimension_name: str = None,
  operator: str = None
) -> None
```

###### `dimension_name`<sup>Optional</sup> <a name="dimension_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putMetricDimension.parameter.dimensionName"></a>

- *Type:* str

A unique identifier for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#dimension_name IotSecurityProfile#dimension_name}

---

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putMetricDimension.parameter.operator"></a>

- *Type:* str

Defines how the dimensionValues of a dimension are interpreted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_security_profile#operator IotSecurityProfile#operator}

---

##### `reset_criteria` <a name="reset_criteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetCriteria"></a>

```python
def reset_criteria() -> None
```

##### `reset_export_metric` <a name="reset_export_metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetExportMetric"></a>

```python
def reset_export_metric() -> None
```

##### `reset_metric` <a name="reset_metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_metric_dimension` <a name="reset_metric_dimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetricDimension"></a>

```python
def reset_metric_dimension() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_suppress_alerts` <a name="reset_suppress_alerts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetSuppressAlerts"></a>

```python
def reset_suppress_alerts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference">IotSecurityProfileBehaviorsCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimension">metric_dimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference">IotSecurityProfileBehaviorsMetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteriaInput">criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetricInput">export_metric_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimensionInput">metric_dimension_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlertsInput">suppress_alerts_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetric">export_metric</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlerts">suppress_alerts</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteria"></a>

```python
criteria: IotSecurityProfileBehaviorsCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference">IotSecurityProfileBehaviorsCriteriaOutputReference</a>

---

##### `metric_dimension`<sup>Required</sup> <a name="metric_dimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimension"></a>

```python
metric_dimension: IotSecurityProfileBehaviorsMetricDimensionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference">IotSecurityProfileBehaviorsMetricDimensionOutputReference</a>

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteriaInput"></a>

```python
criteria_input: IResolvable | IotSecurityProfileBehaviorsCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a>

---

##### `export_metric_input`<sup>Optional</sup> <a name="export_metric_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetricInput"></a>

```python
export_metric_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `metric_dimension_input`<sup>Optional</sup> <a name="metric_dimension_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimensionInput"></a>

```python
metric_dimension_input: IResolvable | IotSecurityProfileBehaviorsMetricDimension
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a>

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `suppress_alerts_input`<sup>Optional</sup> <a name="suppress_alerts_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlertsInput"></a>

```python
suppress_alerts_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `export_metric`<sup>Required</sup> <a name="export_metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetric"></a>

```python
export_metric: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `suppress_alerts`<sup>Required</sup> <a name="suppress_alerts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlerts"></a>

```python
suppress_alerts: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSecurityProfileBehaviors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>

---


### IotSecurityProfileMetricsExportConfigOutputReference <a name="IotSecurityProfileMetricsExportConfigOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetMqttTopic">reset_mqtt_topic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mqtt_topic` <a name="reset_mqtt_topic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetMqttTopic"></a>

```python
def reset_mqtt_topic() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopicInput">mqtt_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic">mqtt_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mqtt_topic_input`<sup>Optional</sup> <a name="mqtt_topic_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopicInput"></a>

```python
mqtt_topic_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `mqtt_topic`<sup>Required</sup> <a name="mqtt_topic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic"></a>

```python
mqtt_topic: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSecurityProfileMetricsExportConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

---


### IotSecurityProfileTagsList <a name="IotSecurityProfileTagsList" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotSecurityProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotSecurityProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>]

---


### IotSecurityProfileTagsOutputReference <a name="IotSecurityProfileTagsOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_security_profile

iotSecurityProfile.IotSecurityProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSecurityProfileTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>

---



