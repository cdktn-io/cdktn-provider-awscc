# `smsvoiceNotifyConfiguration` Submodule <a name="`smsvoiceNotifyConfiguration` Submodule" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceNotifyConfiguration <a name="SmsvoiceNotifyConfiguration" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration awscc_smsvoice_notify_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_notify_configuration

smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  enabled_channels: typing.List[str],
  use_case: str,
  default_template_id: str = None,
  deletion_protection_enabled: bool | IResolvable = None,
  enabled_countries: typing.List[str] = None,
  pool_id: str = None,
  tags: IResolvable | typing.List[SmsvoiceNotifyConfigurationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.enabledChannels">enabled_channels</a></code> | <code>typing.List[str]</code> | An array of channels to enable for the notify configuration. Supported values include SMS and VOICE. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.useCase">use_case</a></code> | <code>str</code> | The use case for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.defaultTemplateId">default_template_id</a></code> | <code>str</code> | The default template identifier to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | By default this is set to false. When set to true the notify configuration can't be deleted. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.enabledCountries">enabled_countries</a></code> | <code>typing.List[str]</code> | An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.poolId">pool_id</a></code> | <code>str</code> | The identifier of the pool to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>]</code> | An array of tags (key and value pairs) associated with the notify configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.displayName"></a>

- *Type:* str

The display name to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#display_name SmsvoiceNotifyConfiguration#display_name}

---

##### `enabled_channels`<sup>Required</sup> <a name="enabled_channels" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.enabledChannels"></a>

- *Type:* typing.List[str]

An array of channels to enable for the notify configuration. Supported values include SMS and VOICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_channels SmsvoiceNotifyConfiguration#enabled_channels}

---

##### `use_case`<sup>Required</sup> <a name="use_case" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.useCase"></a>

- *Type:* str

The use case for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#use_case SmsvoiceNotifyConfiguration#use_case}

---

##### `default_template_id`<sup>Optional</sup> <a name="default_template_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.defaultTemplateId"></a>

- *Type:* str

The default template identifier to associate with the notify configuration.

If specified, this template is used when sending messages without an explicit template identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#default_template_id SmsvoiceNotifyConfiguration#default_template_id}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* bool | cdktn.IResolvable

By default this is set to false. When set to true the notify configuration can't be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#deletion_protection_enabled SmsvoiceNotifyConfiguration#deletion_protection_enabled}

---

##### `enabled_countries`<sup>Optional</sup> <a name="enabled_countries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.enabledCountries"></a>

- *Type:* typing.List[str]

An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_countries SmsvoiceNotifyConfiguration#enabled_countries}

---

##### `pool_id`<sup>Optional</sup> <a name="pool_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.poolId"></a>

- *Type:* str

The identifier of the pool to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#pool_id SmsvoiceNotifyConfiguration#pool_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>]

An array of tags (key and value pairs) associated with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#tags SmsvoiceNotifyConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDefaultTemplateId">reset_default_template_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDeletionProtectionEnabled">reset_deletion_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetEnabledCountries">reset_enabled_countries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetPoolId">reset_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SmsvoiceNotifyConfigurationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>]

---

##### `reset_default_template_id` <a name="reset_default_template_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDefaultTemplateId"></a>

```python
def reset_default_template_id() -> None
```

##### `reset_deletion_protection_enabled` <a name="reset_deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDeletionProtectionEnabled"></a>

```python
def reset_deletion_protection_enabled() -> None
```

##### `reset_enabled_countries` <a name="reset_enabled_countries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetEnabledCountries"></a>

```python
def reset_enabled_countries() -> None
```

##### `reset_pool_id` <a name="reset_pool_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetPoolId"></a>

```python
def reset_pool_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SmsvoiceNotifyConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import smsvoice_notify_configuration

smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import smsvoice_notify_configuration

smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import smsvoice_notify_configuration

smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import smsvoice_notify_configuration

smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SmsvoiceNotifyConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SmsvoiceNotifyConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SmsvoiceNotifyConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceNotifyConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationArn">notify_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationId">notify_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList">SmsvoiceNotifyConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tierUpgradeStatus">tier_upgrade_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateIdInput">default_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabledInput">deletion_protection_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannelsInput">enabled_channels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountriesInput">enabled_countries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolIdInput">pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCaseInput">use_case_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateId">default_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannels">enabled_channels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountries">enabled_countries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCase">use_case</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notify_configuration_arn`<sup>Required</sup> <a name="notify_configuration_arn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationArn"></a>

```python
notify_configuration_arn: str
```

- *Type:* str

---

##### `notify_configuration_id`<sup>Required</sup> <a name="notify_configuration_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationId"></a>

```python
notify_configuration_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tags"></a>

```python
tags: SmsvoiceNotifyConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList">SmsvoiceNotifyConfigurationTagsList</a>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `tier_upgrade_status`<sup>Required</sup> <a name="tier_upgrade_status" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tierUpgradeStatus"></a>

```python
tier_upgrade_status: str
```

- *Type:* str

---

##### `default_template_id_input`<sup>Optional</sup> <a name="default_template_id_input" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateIdInput"></a>

```python
default_template_id_input: str
```

- *Type:* str

---

##### `deletion_protection_enabled_input`<sup>Optional</sup> <a name="deletion_protection_enabled_input" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabledInput"></a>

```python
deletion_protection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_channels_input`<sup>Optional</sup> <a name="enabled_channels_input" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannelsInput"></a>

```python
enabled_channels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_countries_input`<sup>Optional</sup> <a name="enabled_countries_input" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountriesInput"></a>

```python
enabled_countries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pool_id_input`<sup>Optional</sup> <a name="pool_id_input" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolIdInput"></a>

```python
pool_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SmsvoiceNotifyConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>]

---

##### `use_case_input`<sup>Optional</sup> <a name="use_case_input" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCaseInput"></a>

```python
use_case_input: str
```

- *Type:* str

---

##### `default_template_id`<sup>Required</sup> <a name="default_template_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateId"></a>

```python
default_template_id: str
```

- *Type:* str

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled_channels`<sup>Required</sup> <a name="enabled_channels" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannels"></a>

```python
enabled_channels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_countries`<sup>Required</sup> <a name="enabled_countries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountries"></a>

```python
enabled_countries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `use_case`<sup>Required</sup> <a name="use_case" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCase"></a>

```python
use_case: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceNotifyConfigurationConfig <a name="SmsvoiceNotifyConfigurationConfig" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_notify_configuration

smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  enabled_channels: typing.List[str],
  use_case: str,
  default_template_id: str = None,
  deletion_protection_enabled: bool | IResolvable = None,
  enabled_countries: typing.List[str] = None,
  pool_id: str = None,
  tags: IResolvable | typing.List[SmsvoiceNotifyConfigurationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledChannels">enabled_channels</a></code> | <code>typing.List[str]</code> | An array of channels to enable for the notify configuration. Supported values include SMS and VOICE. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.useCase">use_case</a></code> | <code>str</code> | The use case for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.defaultTemplateId">default_template_id</a></code> | <code>str</code> | The default template identifier to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | By default this is set to false. When set to true the notify configuration can't be deleted. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledCountries">enabled_countries</a></code> | <code>typing.List[str]</code> | An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.poolId">pool_id</a></code> | <code>str</code> | The identifier of the pool to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>]</code> | An array of tags (key and value pairs) associated with the notify configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#display_name SmsvoiceNotifyConfiguration#display_name}

---

##### `enabled_channels`<sup>Required</sup> <a name="enabled_channels" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledChannels"></a>

```python
enabled_channels: typing.List[str]
```

- *Type:* typing.List[str]

An array of channels to enable for the notify configuration. Supported values include SMS and VOICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_channels SmsvoiceNotifyConfiguration#enabled_channels}

---

##### `use_case`<sup>Required</sup> <a name="use_case" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.useCase"></a>

```python
use_case: str
```

- *Type:* str

The use case for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#use_case SmsvoiceNotifyConfiguration#use_case}

---

##### `default_template_id`<sup>Optional</sup> <a name="default_template_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.defaultTemplateId"></a>

```python
default_template_id: str
```

- *Type:* str

The default template identifier to associate with the notify configuration.

If specified, this template is used when sending messages without an explicit template identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#default_template_id SmsvoiceNotifyConfiguration#default_template_id}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

By default this is set to false. When set to true the notify configuration can't be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#deletion_protection_enabled SmsvoiceNotifyConfiguration#deletion_protection_enabled}

---

##### `enabled_countries`<sup>Optional</sup> <a name="enabled_countries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledCountries"></a>

```python
enabled_countries: typing.List[str]
```

- *Type:* typing.List[str]

An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_countries SmsvoiceNotifyConfiguration#enabled_countries}

---

##### `pool_id`<sup>Optional</sup> <a name="pool_id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

The identifier of the pool to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#pool_id SmsvoiceNotifyConfiguration#pool_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SmsvoiceNotifyConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>]

An array of tags (key and value pairs) associated with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#tags SmsvoiceNotifyConfiguration#tags}

---

### SmsvoiceNotifyConfigurationTags <a name="SmsvoiceNotifyConfigurationTags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_notify_configuration

smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.key">key</a></code> | <code>str</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.value">value</a></code> | <code>str</code> | The string value associated with the key of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#key SmsvoiceNotifyConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The string value associated with the key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#value SmsvoiceNotifyConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceNotifyConfigurationTagsList <a name="SmsvoiceNotifyConfigurationTagsList" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_notify_configuration

smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SmsvoiceNotifyConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SmsvoiceNotifyConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>]

---


### SmsvoiceNotifyConfigurationTagsOutputReference <a name="SmsvoiceNotifyConfigurationTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_notify_configuration

smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoiceNotifyConfigurationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>

---



