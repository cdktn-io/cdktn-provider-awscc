# `iotwirelessNetworkAnalyzerConfiguration` Submodule <a name="`iotwirelessNetworkAnalyzerConfiguration` Submodule" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessNetworkAnalyzerConfiguration <a name="IotwirelessNetworkAnalyzerConfiguration" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration awscc_iotwireless_network_analyzer_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_network_analyzer_configuration

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  tags: IResolvable | typing.List[IotwirelessNetworkAnalyzerConfigurationTags] = None,
  trace_content: IotwirelessNetworkAnalyzerConfigurationTraceContent = None,
  wireless_devices: typing.List[str] = None,
  wireless_gateways: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the network analyzer configuration. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the new resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.traceContent">trace_content</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | Trace content for your wireless gateway and wireless device resources. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.wirelessDevices">wireless_devices</a></code> | <code>typing.List[str]</code> | List of wireless gateway resources that have been added to the network analyzer configuration. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.wirelessGateways">wireless_gateways</a></code> | <code>typing.List[str]</code> | List of wireless gateway resources that have been added to the network analyzer configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Name of the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#name IotwirelessNetworkAnalyzerConfiguration#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.description"></a>

- *Type:* str

The description of the new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#description IotwirelessNetworkAnalyzerConfiguration#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#tags IotwirelessNetworkAnalyzerConfiguration#tags}

---

##### `trace_content`<sup>Optional</sup> <a name="trace_content" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.traceContent"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

Trace content for your wireless gateway and wireless device resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#trace_content IotwirelessNetworkAnalyzerConfiguration#trace_content}

---

##### `wireless_devices`<sup>Optional</sup> <a name="wireless_devices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.wirelessDevices"></a>

- *Type:* typing.List[str]

List of wireless gateway resources that have been added to the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_devices IotwirelessNetworkAnalyzerConfiguration#wireless_devices}

---

##### `wireless_gateways`<sup>Optional</sup> <a name="wireless_gateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.wirelessGateways"></a>

- *Type:* typing.List[str]

List of wireless gateway resources that have been added to the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_gateways IotwirelessNetworkAnalyzerConfiguration#wireless_gateways}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTraceContent">put_trace_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTraceContent">reset_trace_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessDevices">reset_wireless_devices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessGateways">reset_wireless_gateways</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotwirelessNetworkAnalyzerConfigurationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>]

---

##### `put_trace_content` <a name="put_trace_content" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTraceContent"></a>

```python
def put_trace_content(
  log_level: str = None,
  wireless_device_frame_info: str = None
) -> None
```

###### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTraceContent.parameter.logLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#log_level IotwirelessNetworkAnalyzerConfiguration#log_level}.

---

###### `wireless_device_frame_info`<sup>Optional</sup> <a name="wireless_device_frame_info" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTraceContent.parameter.wirelessDeviceFrameInfo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_device_frame_info IotwirelessNetworkAnalyzerConfiguration#wireless_device_frame_info}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_trace_content` <a name="reset_trace_content" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTraceContent"></a>

```python
def reset_trace_content() -> None
```

##### `reset_wireless_devices` <a name="reset_wireless_devices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessDevices"></a>

```python
def reset_wireless_devices() -> None
```

##### `reset_wireless_gateways` <a name="reset_wireless_gateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessGateways"></a>

```python
def reset_wireless_gateways() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import iotwireless_network_analyzer_configuration

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotwireless_network_analyzer_configuration

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotwireless_network_analyzer_configuration

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotwireless_network_analyzer_configuration

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotwirelessNetworkAnalyzerConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotwirelessNetworkAnalyzerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessNetworkAnalyzerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList">IotwirelessNetworkAnalyzerConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContent">trace_content</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContentInput">trace_content_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevicesInput">wireless_devices_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGatewaysInput">wireless_gateways_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices">wireless_devices</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways">wireless_gateways</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tags"></a>

```python
tags: IotwirelessNetworkAnalyzerConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList">IotwirelessNetworkAnalyzerConfigurationTagsList</a>

---

##### `trace_content`<sup>Required</sup> <a name="trace_content" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContent"></a>

```python
trace_content: IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotwirelessNetworkAnalyzerConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>]

---

##### `trace_content_input`<sup>Optional</sup> <a name="trace_content_input" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContentInput"></a>

```python
trace_content_input: IResolvable | IotwirelessNetworkAnalyzerConfigurationTraceContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---

##### `wireless_devices_input`<sup>Optional</sup> <a name="wireless_devices_input" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevicesInput"></a>

```python
wireless_devices_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wireless_gateways_input`<sup>Optional</sup> <a name="wireless_gateways_input" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGatewaysInput"></a>

```python
wireless_gateways_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `wireless_devices`<sup>Required</sup> <a name="wireless_devices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices"></a>

```python
wireless_devices: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wireless_gateways`<sup>Required</sup> <a name="wireless_gateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways"></a>

```python
wireless_gateways: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessNetworkAnalyzerConfigurationConfig <a name="IotwirelessNetworkAnalyzerConfigurationConfig" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_network_analyzer_configuration

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  tags: IResolvable | typing.List[IotwirelessNetworkAnalyzerConfigurationTags] = None,
  trace_content: IotwirelessNetworkAnalyzerConfigurationTraceContent = None,
  wireless_devices: typing.List[str] = None,
  wireless_gateways: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.name">name</a></code> | <code>str</code> | Name of the network analyzer configuration. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.description">description</a></code> | <code>str</code> | The description of the new resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.traceContent">trace_content</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | Trace content for your wireless gateway and wireless device resources. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessDevices">wireless_devices</a></code> | <code>typing.List[str]</code> | List of wireless gateway resources that have been added to the network analyzer configuration. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessGateways">wireless_gateways</a></code> | <code>typing.List[str]</code> | List of wireless gateway resources that have been added to the network analyzer configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#name IotwirelessNetworkAnalyzerConfiguration#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#description IotwirelessNetworkAnalyzerConfiguration#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotwirelessNetworkAnalyzerConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#tags IotwirelessNetworkAnalyzerConfiguration#tags}

---

##### `trace_content`<sup>Optional</sup> <a name="trace_content" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.traceContent"></a>

```python
trace_content: IotwirelessNetworkAnalyzerConfigurationTraceContent
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

Trace content for your wireless gateway and wireless device resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#trace_content IotwirelessNetworkAnalyzerConfiguration#trace_content}

---

##### `wireless_devices`<sup>Optional</sup> <a name="wireless_devices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessDevices"></a>

```python
wireless_devices: typing.List[str]
```

- *Type:* typing.List[str]

List of wireless gateway resources that have been added to the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_devices IotwirelessNetworkAnalyzerConfiguration#wireless_devices}

---

##### `wireless_gateways`<sup>Optional</sup> <a name="wireless_gateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessGateways"></a>

```python
wireless_gateways: typing.List[str]
```

- *Type:* typing.List[str]

List of wireless gateway resources that have been added to the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_gateways IotwirelessNetworkAnalyzerConfiguration#wireless_gateways}

---

### IotwirelessNetworkAnalyzerConfigurationTags <a name="IotwirelessNetworkAnalyzerConfigurationTags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_network_analyzer_configuration

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#key IotwirelessNetworkAnalyzerConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#value IotwirelessNetworkAnalyzerConfiguration#value}

---

### IotwirelessNetworkAnalyzerConfigurationTraceContent <a name="IotwirelessNetworkAnalyzerConfigurationTraceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_network_analyzer_configuration

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent(
  log_level: str = None,
  wireless_device_frame_info: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.logLevel">log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#log_level IotwirelessNetworkAnalyzerConfiguration#log_level}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.wirelessDeviceFrameInfo">wireless_device_frame_info</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_device_frame_info IotwirelessNetworkAnalyzerConfiguration#wireless_device_frame_info}. |

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#log_level IotwirelessNetworkAnalyzerConfiguration#log_level}.

---

##### `wireless_device_frame_info`<sup>Optional</sup> <a name="wireless_device_frame_info" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.wirelessDeviceFrameInfo"></a>

```python
wireless_device_frame_info: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_device_frame_info IotwirelessNetworkAnalyzerConfiguration#wireless_device_frame_info}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessNetworkAnalyzerConfigurationTagsList <a name="IotwirelessNetworkAnalyzerConfigurationTagsList" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_network_analyzer_configuration

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotwirelessNetworkAnalyzerConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotwirelessNetworkAnalyzerConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>]

---


### IotwirelessNetworkAnalyzerConfigurationTagsOutputReference <a name="IotwirelessNetworkAnalyzerConfigurationTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_network_analyzer_configuration

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessNetworkAnalyzerConfigurationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>

---


### IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference <a name="IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_network_analyzer_configuration

iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetWirelessDeviceFrameInfo">reset_wireless_device_frame_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_level` <a name="reset_log_level" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_wireless_device_frame_info` <a name="reset_wireless_device_frame_info" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetWirelessDeviceFrameInfo"></a>

```python
def reset_wireless_device_frame_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfoInput">wireless_device_frame_info_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo">wireless_device_frame_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `wireless_device_frame_info_input`<sup>Optional</sup> <a name="wireless_device_frame_info_input" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfoInput"></a>

```python
wireless_device_frame_info_input: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `wireless_device_frame_info`<sup>Required</sup> <a name="wireless_device_frame_info" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo"></a>

```python
wireless_device_frame_info: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessNetworkAnalyzerConfigurationTraceContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---



