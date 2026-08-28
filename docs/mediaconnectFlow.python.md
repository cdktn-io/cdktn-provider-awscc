# `mediaconnectFlow` Submodule <a name="`mediaconnectFlow` Submodule" id="@cdktn/provider-awscc.mediaconnectFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlow <a name="MediaconnectFlow" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow awscc_mediaconnect_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlow(
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
  source: MediaconnectFlowSource,
  availability_zone: str = None,
  maintenance: MediaconnectFlowMaintenance = None,
  media_streams: IResolvable | typing.List[MediaconnectFlowMediaStreams] = None,
  source_failover_config: MediaconnectFlowSourceFailoverConfig = None,
  source_monitoring_config: MediaconnectFlowSourceMonitoringConfig = None,
  vpc_interfaces: IResolvable | typing.List[MediaconnectFlowVpcInterfaces] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a></code> | The source of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone that you want to create the flow in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.maintenance">maintenance</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a></code> | The maintenance settings you want to use for the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.mediaStreams">media_streams</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>]</code> | The media streams associated with the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.sourceFailoverConfig">source_failover_config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a></code> | The source failover config of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.sourceMonitoringConfig">source_monitoring_config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a></code> | The source monitoring config of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.vpcInterfaces">vpc_interfaces</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>]</code> | The VPC interfaces that you added to this flow. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.name"></a>

- *Type:* str

The name of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

The source of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source MediaconnectFlow#source}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The Availability Zone that you want to create the flow in.

These options are limited to the Availability Zones within the current AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#availability_zone MediaconnectFlow#availability_zone}

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.maintenance"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

The maintenance settings you want to use for the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#maintenance MediaconnectFlow#maintenance}

---

##### `media_streams`<sup>Optional</sup> <a name="media_streams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.mediaStreams"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>]

The media streams associated with the flow.

You can associate any of these media streams with sources and outputs on the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_streams MediaconnectFlow#media_streams}

---

##### `source_failover_config`<sup>Optional</sup> <a name="source_failover_config" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.sourceFailoverConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

The source failover config of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_failover_config MediaconnectFlow#source_failover_config}

---

##### `source_monitoring_config`<sup>Optional</sup> <a name="source_monitoring_config" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.sourceMonitoringConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

The source monitoring config of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_monitoring_config MediaconnectFlow#source_monitoring_config}

---

##### `vpc_interfaces`<sup>Optional</sup> <a name="vpc_interfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.vpcInterfaces"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>]

The VPC interfaces that you added to this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#vpc_interfaces MediaconnectFlow#vpc_interfaces}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMaintenance">put_maintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMediaStreams">put_media_streams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig">put_source_failover_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig">put_source_monitoring_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putVpcInterfaces">put_vpc_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMaintenance">reset_maintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMediaStreams">reset_media_streams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceFailoverConfig">reset_source_failover_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceMonitoringConfig">reset_source_monitoring_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetVpcInterfaces">reset_vpc_interfaces</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_maintenance` <a name="put_maintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMaintenance"></a>

```python
def put_maintenance(
  maintenance_day: str = None,
  maintenance_start_hour: str = None
) -> None
```

###### `maintenance_day`<sup>Optional</sup> <a name="maintenance_day" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMaintenance.parameter.maintenanceDay"></a>

- *Type:* str

A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#maintenance_day MediaconnectFlow#maintenance_day}

---

###### `maintenance_start_hour`<sup>Optional</sup> <a name="maintenance_start_hour" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMaintenance.parameter.maintenanceStartHour"></a>

- *Type:* str

UTC time when the maintenance will happen.

Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#maintenance_start_hour MediaconnectFlow#maintenance_start_hour}

---

##### `put_media_streams` <a name="put_media_streams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMediaStreams"></a>

```python
def put_media_streams(
  value: IResolvable | typing.List[MediaconnectFlowMediaStreams]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMediaStreams.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>]

---

##### `put_source` <a name="put_source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource"></a>

```python
def put_source(
  decryption: MediaconnectFlowSourceDecryption = None,
  description: str = None,
  entitlement_arn: str = None,
  gateway_bridge_source: MediaconnectFlowSourceGatewayBridgeSource = None,
  ingest_port: typing.Union[int, float] = None,
  max_bitrate: typing.Union[int, float] = None,
  max_latency: typing.Union[int, float] = None,
  max_sync_buffer: typing.Union[int, float] = None,
  media_stream_source_configurations: IResolvable | typing.List[MediaconnectFlowSourceMediaStreamSourceConfigurations] = None,
  min_latency: typing.Union[int, float] = None,
  name: str = None,
  protocol: str = None,
  sender_control_port: typing.Union[int, float] = None,
  sender_ip_address: str = None,
  source_listener_address: str = None,
  source_listener_port: typing.Union[int, float] = None,
  stream_id: str = None,
  vpc_interface_name: str = None,
  whitelist_cidr: str = None
) -> None
```

###### `decryption`<sup>Optional</sup> <a name="decryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.decryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

The type of decryption that is used on the content ingested from this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#decryption MediaconnectFlow#decryption}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.description"></a>

- *Type:* str

A description for the source.

This value is not used or seen outside of the current AWS Elemental MediaConnect account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#description MediaconnectFlow#description}

---

###### `entitlement_arn`<sup>Optional</sup> <a name="entitlement_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.entitlementArn"></a>

- *Type:* str

The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account.

The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#entitlement_arn MediaconnectFlow#entitlement_arn}

---

###### `gateway_bridge_source`<sup>Optional</sup> <a name="gateway_bridge_source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.gatewayBridgeSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

The source configuration for cloud flows receiving a stream from a bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#gateway_bridge_source MediaconnectFlow#gateway_bridge_source}

---

###### `ingest_port`<sup>Optional</sup> <a name="ingest_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.ingestPort"></a>

- *Type:* typing.Union[int, float]

The port that the flow will be listening on for incoming content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#ingest_port MediaconnectFlow#ingest_port}

---

###### `max_bitrate`<sup>Optional</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.maxBitrate"></a>

- *Type:* typing.Union[int, float]

The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#max_bitrate MediaconnectFlow#max_bitrate}

---

###### `max_latency`<sup>Optional</sup> <a name="max_latency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.maxLatency"></a>

- *Type:* typing.Union[int, float]

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#max_latency MediaconnectFlow#max_latency}

---

###### `max_sync_buffer`<sup>Optional</sup> <a name="max_sync_buffer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.maxSyncBuffer"></a>

- *Type:* typing.Union[int, float]

The size of the buffer (in milliseconds) to use to sync incoming source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#max_sync_buffer MediaconnectFlow#max_sync_buffer}

---

###### `media_stream_source_configurations`<sup>Optional</sup> <a name="media_stream_source_configurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.mediaStreamSourceConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>]

The media stream that is associated with the source, and the parameters for that association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_stream_source_configurations MediaconnectFlow#media_stream_source_configurations}

---

###### `min_latency`<sup>Optional</sup> <a name="min_latency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.minLatency"></a>

- *Type:* typing.Union[int, float]

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#min_latency MediaconnectFlow#min_latency}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.name"></a>

- *Type:* str

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.protocol"></a>

- *Type:* str

The protocol that is used by the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#protocol MediaconnectFlow#protocol}

---

###### `sender_control_port`<sup>Optional</sup> <a name="sender_control_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.senderControlPort"></a>

- *Type:* typing.Union[int, float]

The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#sender_control_port MediaconnectFlow#sender_control_port}

---

###### `sender_ip_address`<sup>Optional</sup> <a name="sender_ip_address" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.senderIpAddress"></a>

- *Type:* str

The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#sender_ip_address MediaconnectFlow#sender_ip_address}

---

###### `source_listener_address`<sup>Optional</sup> <a name="source_listener_address" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.sourceListenerAddress"></a>

- *Type:* str

Source IP or domain name for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_listener_address MediaconnectFlow#source_listener_address}

---

###### `source_listener_port`<sup>Optional</sup> <a name="source_listener_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.sourceListenerPort"></a>

- *Type:* typing.Union[int, float]

Source port for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_listener_port MediaconnectFlow#source_listener_port}

---

###### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.streamId"></a>

- *Type:* str

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#stream_id MediaconnectFlow#stream_id}

---

###### `vpc_interface_name`<sup>Optional</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.vpcInterfaceName"></a>

- *Type:* str

The name of the VPC Interface this Source is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#vpc_interface_name MediaconnectFlow#vpc_interface_name}

---

###### `whitelist_cidr`<sup>Optional</sup> <a name="whitelist_cidr" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.whitelistCidr"></a>

- *Type:* str

The range of IP addresses that should be allowed to contribute content to your source.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#whitelist_cidr MediaconnectFlow#whitelist_cidr}

---

##### `put_source_failover_config` <a name="put_source_failover_config" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig"></a>

```python
def put_source_failover_config(
  failover_mode: str = None,
  recovery_window: typing.Union[int, float] = None,
  source_priority: MediaconnectFlowSourceFailoverConfigSourcePriority = None,
  state: str = None
) -> None
```

###### `failover_mode`<sup>Optional</sup> <a name="failover_mode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig.parameter.failoverMode"></a>

- *Type:* str

The type of failover you choose for this flow.

MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#failover_mode MediaconnectFlow#failover_mode}

---

###### `recovery_window`<sup>Optional</sup> <a name="recovery_window" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig.parameter.recoveryWindow"></a>

- *Type:* typing.Union[int, float]

Search window time to look for dash-7 packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#recovery_window MediaconnectFlow#recovery_window}

---

###### `source_priority`<sup>Optional</sup> <a name="source_priority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig.parameter.sourcePriority"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

The priority you want to assign to a source.

You can have a primary stream and a backup stream or two equally prioritized streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_priority MediaconnectFlow#source_priority}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}.

---

##### `put_source_monitoring_config` <a name="put_source_monitoring_config" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig"></a>

```python
def put_source_monitoring_config(
  audio_monitoring_settings: IResolvable | typing.List[MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings] = None,
  content_quality_analysis_state: str = None,
  thumbnail_state: str = None,
  video_monitoring_settings: IResolvable | typing.List[MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings] = None
) -> None
```

###### `audio_monitoring_settings`<sup>Optional</sup> <a name="audio_monitoring_settings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig.parameter.audioMonitoringSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>]

Contains the settings for audio stream metrics monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#audio_monitoring_settings MediaconnectFlow#audio_monitoring_settings}

---

###### `content_quality_analysis_state`<sup>Optional</sup> <a name="content_quality_analysis_state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig.parameter.contentQualityAnalysisState"></a>

- *Type:* str

Indicates whether content quality analysis is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#content_quality_analysis_state MediaconnectFlow#content_quality_analysis_state}

---

###### `thumbnail_state`<sup>Optional</sup> <a name="thumbnail_state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig.parameter.thumbnailState"></a>

- *Type:* str

The state of thumbnail monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#thumbnail_state MediaconnectFlow#thumbnail_state}

---

###### `video_monitoring_settings`<sup>Optional</sup> <a name="video_monitoring_settings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig.parameter.videoMonitoringSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>]

Contains the settings for video stream metrics monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#video_monitoring_settings MediaconnectFlow#video_monitoring_settings}

---

##### `put_vpc_interfaces` <a name="put_vpc_interfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putVpcInterfaces"></a>

```python
def put_vpc_interfaces(
  value: IResolvable | typing.List[MediaconnectFlowVpcInterfaces]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putVpcInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>]

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_maintenance` <a name="reset_maintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMaintenance"></a>

```python
def reset_maintenance() -> None
```

##### `reset_media_streams` <a name="reset_media_streams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMediaStreams"></a>

```python
def reset_media_streams() -> None
```

##### `reset_source_failover_config` <a name="reset_source_failover_config" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceFailoverConfig"></a>

```python
def reset_source_failover_config() -> None
```

##### `reset_source_monitoring_config` <a name="reset_source_monitoring_config" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceMonitoringConfig"></a>

```python
def reset_source_monitoring_config() -> None
```

##### `reset_vpc_interfaces` <a name="reset_vpc_interfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetVpcInterfaces"></a>

```python
def reset_vpc_interfaces() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediaconnectFlow resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isConstruct"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediaconnectFlow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaconnectFlow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaconnectFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.egressIp">egress_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowArn">flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowAvailabilityZone">flow_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenance">maintenance</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference">MediaconnectFlowMaintenanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreams">media_streams</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList">MediaconnectFlowMediaStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference">MediaconnectFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfig">source_failover_config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference">MediaconnectFlowSourceFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfig">source_monitoring_config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference">MediaconnectFlowSourceMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfaces">vpc_interfaces</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList">MediaconnectFlowVpcInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenanceInput">maintenance_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreamsInput">media_streams_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfigInput">source_failover_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceInput">source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfigInput">source_monitoring_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfacesInput">vpc_interfaces_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `egress_ip`<sup>Required</sup> <a name="egress_ip" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.egressIp"></a>

```python
egress_ip: str
```

- *Type:* str

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

---

##### `flow_availability_zone`<sup>Required</sup> <a name="flow_availability_zone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowAvailabilityZone"></a>

```python
flow_availability_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenance"></a>

```python
maintenance: MediaconnectFlowMaintenanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference">MediaconnectFlowMaintenanceOutputReference</a>

---

##### `media_streams`<sup>Required</sup> <a name="media_streams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreams"></a>

```python
media_streams: MediaconnectFlowMediaStreamsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList">MediaconnectFlowMediaStreamsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.source"></a>

```python
source: MediaconnectFlowSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference">MediaconnectFlowSourceOutputReference</a>

---

##### `source_failover_config`<sup>Required</sup> <a name="source_failover_config" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfig"></a>

```python
source_failover_config: MediaconnectFlowSourceFailoverConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference">MediaconnectFlowSourceFailoverConfigOutputReference</a>

---

##### `source_monitoring_config`<sup>Required</sup> <a name="source_monitoring_config" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfig"></a>

```python
source_monitoring_config: MediaconnectFlowSourceMonitoringConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference">MediaconnectFlowSourceMonitoringConfigOutputReference</a>

---

##### `vpc_interfaces`<sup>Required</sup> <a name="vpc_interfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfaces"></a>

```python
vpc_interfaces: MediaconnectFlowVpcInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList">MediaconnectFlowVpcInterfacesList</a>

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `maintenance_input`<sup>Optional</sup> <a name="maintenance_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenanceInput"></a>

```python
maintenance_input: IResolvable | MediaconnectFlowMaintenance
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

---

##### `media_streams_input`<sup>Optional</sup> <a name="media_streams_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreamsInput"></a>

```python
media_streams_input: IResolvable | typing.List[MediaconnectFlowMediaStreams]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_failover_config_input`<sup>Optional</sup> <a name="source_failover_config_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfigInput"></a>

```python
source_failover_config_input: IResolvable | MediaconnectFlowSourceFailoverConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceInput"></a>

```python
source_input: IResolvable | MediaconnectFlowSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

---

##### `source_monitoring_config_input`<sup>Optional</sup> <a name="source_monitoring_config_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfigInput"></a>

```python
source_monitoring_config_input: IResolvable | MediaconnectFlowSourceMonitoringConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

---

##### `vpc_interfaces_input`<sup>Optional</sup> <a name="vpc_interfaces_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfacesInput"></a>

```python
vpc_interfaces_input: IResolvable | typing.List[MediaconnectFlowVpcInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowConfig <a name="MediaconnectFlowConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  source: MediaconnectFlowSource,
  availability_zone: str = None,
  maintenance: MediaconnectFlowMaintenance = None,
  media_streams: IResolvable | typing.List[MediaconnectFlowMediaStreams] = None,
  source_failover_config: MediaconnectFlowSourceFailoverConfig = None,
  source_monitoring_config: MediaconnectFlowSourceMonitoringConfig = None,
  vpc_interfaces: IResolvable | typing.List[MediaconnectFlowVpcInterfaces] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.name">name</a></code> | <code>str</code> | The name of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a></code> | The source of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone that you want to create the flow in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.maintenance">maintenance</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a></code> | The maintenance settings you want to use for the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.mediaStreams">media_streams</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>]</code> | The media streams associated with the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceFailoverConfig">source_failover_config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a></code> | The source failover config of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceMonitoringConfig">source_monitoring_config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a></code> | The source monitoring config of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.vpcInterfaces">vpc_interfaces</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>]</code> | The VPC interfaces that you added to this flow. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.source"></a>

```python
source: MediaconnectFlowSource
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

The source of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source MediaconnectFlow#source}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The Availability Zone that you want to create the flow in.

These options are limited to the Availability Zones within the current AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#availability_zone MediaconnectFlow#availability_zone}

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.maintenance"></a>

```python
maintenance: MediaconnectFlowMaintenance
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

The maintenance settings you want to use for the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#maintenance MediaconnectFlow#maintenance}

---

##### `media_streams`<sup>Optional</sup> <a name="media_streams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.mediaStreams"></a>

```python
media_streams: IResolvable | typing.List[MediaconnectFlowMediaStreams]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>]

The media streams associated with the flow.

You can associate any of these media streams with sources and outputs on the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_streams MediaconnectFlow#media_streams}

---

##### `source_failover_config`<sup>Optional</sup> <a name="source_failover_config" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceFailoverConfig"></a>

```python
source_failover_config: MediaconnectFlowSourceFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

The source failover config of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_failover_config MediaconnectFlow#source_failover_config}

---

##### `source_monitoring_config`<sup>Optional</sup> <a name="source_monitoring_config" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceMonitoringConfig"></a>

```python
source_monitoring_config: MediaconnectFlowSourceMonitoringConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

The source monitoring config of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_monitoring_config MediaconnectFlow#source_monitoring_config}

---

##### `vpc_interfaces`<sup>Optional</sup> <a name="vpc_interfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.vpcInterfaces"></a>

```python
vpc_interfaces: IResolvable | typing.List[MediaconnectFlowVpcInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>]

The VPC interfaces that you added to this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#vpc_interfaces MediaconnectFlow#vpc_interfaces}

---

### MediaconnectFlowMaintenance <a name="MediaconnectFlowMaintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowMaintenance(
  maintenance_day: str = None,
  maintenance_start_hour: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceDay">maintenance_day</a></code> | <code>str</code> | A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceStartHour">maintenance_start_hour</a></code> | <code>str</code> | UTC time when the maintenance will happen. |

---

##### `maintenance_day`<sup>Optional</sup> <a name="maintenance_day" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceDay"></a>

```python
maintenance_day: str
```

- *Type:* str

A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#maintenance_day MediaconnectFlow#maintenance_day}

---

##### `maintenance_start_hour`<sup>Optional</sup> <a name="maintenance_start_hour" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceStartHour"></a>

```python
maintenance_start_hour: str
```

- *Type:* str

UTC time when the maintenance will happen.

Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#maintenance_start_hour MediaconnectFlow#maintenance_start_hour}

---

### MediaconnectFlowMediaStreams <a name="MediaconnectFlowMediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowMediaStreams(
  attributes: MediaconnectFlowMediaStreamsAttributes = None,
  clock_rate: typing.Union[int, float] = None,
  description: str = None,
  fmt: typing.Union[int, float] = None,
  media_stream_id: typing.Union[int, float] = None,
  media_stream_name: str = None,
  media_stream_type: str = None,
  video_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a></code> | Attributes that are related to the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.clockRate">clock_rate</a></code> | <code>typing.Union[int, float]</code> | The sample rate for the stream. This value in measured in kHz. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.description">description</a></code> | <code>str</code> | A description that can help you quickly identify what your media stream is used for. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.fmt">fmt</a></code> | <code>typing.Union[int, float]</code> | The format type number (sometimes referred to as RTP payload type) of the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamId">media_stream_id</a></code> | <code>typing.Union[int, float]</code> | A unique identifier for the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamName">media_stream_name</a></code> | <code>str</code> | A name that helps you distinguish one media stream from another. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamType">media_stream_type</a></code> | <code>str</code> | The type of media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.videoFormat">video_format</a></code> | <code>str</code> | The resolution of the video. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.attributes"></a>

```python
attributes: MediaconnectFlowMediaStreamsAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a>

Attributes that are related to the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#attributes MediaconnectFlow#attributes}

---

##### `clock_rate`<sup>Optional</sup> <a name="clock_rate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.clockRate"></a>

```python
clock_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sample rate for the stream. This value in measured in kHz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#clock_rate MediaconnectFlow#clock_rate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.description"></a>

```python
description: str
```

- *Type:* str

A description that can help you quickly identify what your media stream is used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#description MediaconnectFlow#description}

---

##### `fmt`<sup>Optional</sup> <a name="fmt" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.fmt"></a>

```python
fmt: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The format type number (sometimes referred to as RTP payload type) of the media stream.

MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#fmt MediaconnectFlow#fmt}

---

##### `media_stream_id`<sup>Optional</sup> <a name="media_stream_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamId"></a>

```python
media_stream_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A unique identifier for the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_stream_id MediaconnectFlow#media_stream_id}

---

##### `media_stream_name`<sup>Optional</sup> <a name="media_stream_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamName"></a>

```python
media_stream_name: str
```

- *Type:* str

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_stream_name MediaconnectFlow#media_stream_name}

---

##### `media_stream_type`<sup>Optional</sup> <a name="media_stream_type" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamType"></a>

```python
media_stream_type: str
```

- *Type:* str

The type of media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_stream_type MediaconnectFlow#media_stream_type}

---

##### `video_format`<sup>Optional</sup> <a name="video_format" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.videoFormat"></a>

```python
video_format: str
```

- *Type:* str

The resolution of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#video_format MediaconnectFlow#video_format}

---

### MediaconnectFlowMediaStreamsAttributes <a name="MediaconnectFlowMediaStreamsAttributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes(
  fmtp: MediaconnectFlowMediaStreamsAttributesFmtp = None,
  lang: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.fmtp">fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a></code> | A set of parameters that define the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.lang">lang</a></code> | <code>str</code> | The audio language, in a format that is recognized by the receiver. |

---

##### `fmtp`<sup>Optional</sup> <a name="fmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.fmtp"></a>

```python
fmtp: MediaconnectFlowMediaStreamsAttributesFmtp
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

A set of parameters that define the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#fmtp MediaconnectFlow#fmtp}

---

##### `lang`<sup>Optional</sup> <a name="lang" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.lang"></a>

```python
lang: str
```

- *Type:* str

The audio language, in a format that is recognized by the receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#lang MediaconnectFlow#lang}

---

### MediaconnectFlowMediaStreamsAttributesFmtp <a name="MediaconnectFlowMediaStreamsAttributesFmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp(
  channel_order: str = None,
  colorimetry: str = None,
  exact_framerate: str = None,
  par: str = None,
  range: str = None,
  scan_mode: str = None,
  tcs: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.channelOrder">channel_order</a></code> | <code>str</code> | The format of the audio channel. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.colorimetry">colorimetry</a></code> | <code>str</code> | The format used for the representation of color. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.exactFramerate">exact_framerate</a></code> | <code>str</code> | The frame rate for the video stream, in frames/second. For example: 60000/1001. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.par">par</a></code> | <code>str</code> | The pixel aspect ratio (PAR) of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.range">range</a></code> | <code>str</code> | The encoding range of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.scanMode">scan_mode</a></code> | <code>str</code> | The type of compression that was used to smooth the video's appearance. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.tcs">tcs</a></code> | <code>str</code> | The transfer characteristic system (TCS) that is used in the video. |

---

##### `channel_order`<sup>Optional</sup> <a name="channel_order" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.channelOrder"></a>

```python
channel_order: str
```

- *Type:* str

The format of the audio channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#channel_order MediaconnectFlow#channel_order}

---

##### `colorimetry`<sup>Optional</sup> <a name="colorimetry" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.colorimetry"></a>

```python
colorimetry: str
```

- *Type:* str

The format used for the representation of color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#colorimetry MediaconnectFlow#colorimetry}

---

##### `exact_framerate`<sup>Optional</sup> <a name="exact_framerate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.exactFramerate"></a>

```python
exact_framerate: str
```

- *Type:* str

The frame rate for the video stream, in frames/second. For example: 60000/1001.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#exact_framerate MediaconnectFlow#exact_framerate}

---

##### `par`<sup>Optional</sup> <a name="par" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.par"></a>

```python
par: str
```

- *Type:* str

The pixel aspect ratio (PAR) of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#par MediaconnectFlow#par}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.range"></a>

```python
range: str
```

- *Type:* str

The encoding range of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#range MediaconnectFlow#range}

---

##### `scan_mode`<sup>Optional</sup> <a name="scan_mode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.scanMode"></a>

```python
scan_mode: str
```

- *Type:* str

The type of compression that was used to smooth the video's appearance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#scan_mode MediaconnectFlow#scan_mode}

---

##### `tcs`<sup>Optional</sup> <a name="tcs" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.tcs"></a>

```python
tcs: str
```

- *Type:* str

The transfer characteristic system (TCS) that is used in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#tcs MediaconnectFlow#tcs}

---

### MediaconnectFlowSource <a name="MediaconnectFlowSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSource(
  decryption: MediaconnectFlowSourceDecryption = None,
  description: str = None,
  entitlement_arn: str = None,
  gateway_bridge_source: MediaconnectFlowSourceGatewayBridgeSource = None,
  ingest_port: typing.Union[int, float] = None,
  max_bitrate: typing.Union[int, float] = None,
  max_latency: typing.Union[int, float] = None,
  max_sync_buffer: typing.Union[int, float] = None,
  media_stream_source_configurations: IResolvable | typing.List[MediaconnectFlowSourceMediaStreamSourceConfigurations] = None,
  min_latency: typing.Union[int, float] = None,
  name: str = None,
  protocol: str = None,
  sender_control_port: typing.Union[int, float] = None,
  sender_ip_address: str = None,
  source_listener_address: str = None,
  source_listener_port: typing.Union[int, float] = None,
  stream_id: str = None,
  vpc_interface_name: str = None,
  whitelist_cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a></code> | The type of decryption that is used on the content ingested from this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.description">description</a></code> | <code>str</code> | A description for the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.entitlementArn">entitlement_arn</a></code> | <code>str</code> | The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.gatewayBridgeSource">gateway_bridge_source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a></code> | The source configuration for cloud flows receiving a stream from a bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.ingestPort">ingest_port</a></code> | <code>typing.Union[int, float]</code> | The port that the flow will be listening on for incoming content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxBitrate">max_bitrate</a></code> | <code>typing.Union[int, float]</code> | The smoothing max bitrate for RIST, RTP, and RTP-FEC streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxLatency">max_latency</a></code> | <code>typing.Union[int, float]</code> | The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxSyncBuffer">max_sync_buffer</a></code> | <code>typing.Union[int, float]</code> | The size of the buffer (in milliseconds) to use to sync incoming source data. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.mediaStreamSourceConfigurations">media_stream_source_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>]</code> | The media stream that is associated with the source, and the parameters for that association. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.minLatency">min_latency</a></code> | <code>typing.Union[int, float]</code> | The minimum latency in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.name">name</a></code> | <code>str</code> | The name of the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.protocol">protocol</a></code> | <code>str</code> | The protocol that is used by the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderControlPort">sender_control_port</a></code> | <code>typing.Union[int, float]</code> | The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderIpAddress">sender_ip_address</a></code> | <code>str</code> | The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerAddress">source_listener_address</a></code> | <code>str</code> | Source IP or domain name for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerPort">source_listener_port</a></code> | <code>typing.Union[int, float]</code> | Source port for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.streamId">stream_id</a></code> | <code>str</code> | The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | The name of the VPC Interface this Source is configured with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.whitelistCidr">whitelist_cidr</a></code> | <code>str</code> | The range of IP addresses that should be allowed to contribute content to your source. |

---

##### `decryption`<sup>Optional</sup> <a name="decryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.decryption"></a>

```python
decryption: MediaconnectFlowSourceDecryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

The type of decryption that is used on the content ingested from this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#decryption MediaconnectFlow#decryption}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the source.

This value is not used or seen outside of the current AWS Elemental MediaConnect account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#description MediaconnectFlow#description}

---

##### `entitlement_arn`<sup>Optional</sup> <a name="entitlement_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.entitlementArn"></a>

```python
entitlement_arn: str
```

- *Type:* str

The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account.

The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#entitlement_arn MediaconnectFlow#entitlement_arn}

---

##### `gateway_bridge_source`<sup>Optional</sup> <a name="gateway_bridge_source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.gatewayBridgeSource"></a>

```python
gateway_bridge_source: MediaconnectFlowSourceGatewayBridgeSource
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

The source configuration for cloud flows receiving a stream from a bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#gateway_bridge_source MediaconnectFlow#gateway_bridge_source}

---

##### `ingest_port`<sup>Optional</sup> <a name="ingest_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.ingestPort"></a>

```python
ingest_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port that the flow will be listening on for incoming content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#ingest_port MediaconnectFlow#ingest_port}

---

##### `max_bitrate`<sup>Optional</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxBitrate"></a>

```python
max_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#max_bitrate MediaconnectFlow#max_bitrate}

---

##### `max_latency`<sup>Optional</sup> <a name="max_latency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxLatency"></a>

```python
max_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#max_latency MediaconnectFlow#max_latency}

---

##### `max_sync_buffer`<sup>Optional</sup> <a name="max_sync_buffer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxSyncBuffer"></a>

```python
max_sync_buffer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the buffer (in milliseconds) to use to sync incoming source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#max_sync_buffer MediaconnectFlow#max_sync_buffer}

---

##### `media_stream_source_configurations`<sup>Optional</sup> <a name="media_stream_source_configurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.mediaStreamSourceConfigurations"></a>

```python
media_stream_source_configurations: IResolvable | typing.List[MediaconnectFlowSourceMediaStreamSourceConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>]

The media stream that is associated with the source, and the parameters for that association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_stream_source_configurations MediaconnectFlow#media_stream_source_configurations}

---

##### `min_latency`<sup>Optional</sup> <a name="min_latency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.minLatency"></a>

```python
min_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#min_latency MediaconnectFlow#min_latency}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The protocol that is used by the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#protocol MediaconnectFlow#protocol}

---

##### `sender_control_port`<sup>Optional</sup> <a name="sender_control_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderControlPort"></a>

```python
sender_control_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#sender_control_port MediaconnectFlow#sender_control_port}

---

##### `sender_ip_address`<sup>Optional</sup> <a name="sender_ip_address" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderIpAddress"></a>

```python
sender_ip_address: str
```

- *Type:* str

The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#sender_ip_address MediaconnectFlow#sender_ip_address}

---

##### `source_listener_address`<sup>Optional</sup> <a name="source_listener_address" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerAddress"></a>

```python
source_listener_address: str
```

- *Type:* str

Source IP or domain name for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_listener_address MediaconnectFlow#source_listener_address}

---

##### `source_listener_port`<sup>Optional</sup> <a name="source_listener_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerPort"></a>

```python
source_listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Source port for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_listener_port MediaconnectFlow#source_listener_port}

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#stream_id MediaconnectFlow#stream_id}

---

##### `vpc_interface_name`<sup>Optional</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

The name of the VPC Interface this Source is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#vpc_interface_name MediaconnectFlow#vpc_interface_name}

---

##### `whitelist_cidr`<sup>Optional</sup> <a name="whitelist_cidr" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.whitelistCidr"></a>

```python
whitelist_cidr: str
```

- *Type:* str

The range of IP addresses that should be allowed to contribute content to your source.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#whitelist_cidr MediaconnectFlow#whitelist_cidr}

---

### MediaconnectFlowSourceDecryption <a name="MediaconnectFlowSourceDecryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceDecryption(
  algorithm: str = None,
  constant_initialization_vector: str = None,
  device_id: str = None,
  key_type: str = None,
  region: str = None,
  resource_id: str = None,
  role_arn: str = None,
  secret_arn: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.algorithm">algorithm</a></code> | <code>str</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.constantInitializationVector">constant_initialization_vector</a></code> | <code>str</code> | A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.deviceId">device_id</a></code> | <code>str</code> | The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.keyType">key_type</a></code> | <code>str</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.region">region</a></code> | <code>str</code> | The AWS Region that the API Gateway proxy endpoint was created in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.resourceId">resource_id</a></code> | <code>str</code> | An identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.secretArn">secret_arn</a></code> | <code>str</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.url">url</a></code> | <code>str</code> | The URL from the API Gateway proxy that you set up to talk to your key server. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#algorithm MediaconnectFlow#algorithm}

---

##### `constant_initialization_vector`<sup>Optional</sup> <a name="constant_initialization_vector" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.constantInitializationVector"></a>

```python
constant_initialization_vector: str
```

- *Type:* str

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#constant_initialization_vector MediaconnectFlow#constant_initialization_vector}

---

##### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#device_id MediaconnectFlow#device_id}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#key_type MediaconnectFlow#key_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.region"></a>

```python
region: str
```

- *Type:* str

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#region MediaconnectFlow#region}

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#resource_id MediaconnectFlow#resource_id}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#role_arn MediaconnectFlow#role_arn}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#secret_arn MediaconnectFlow#secret_arn}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.url"></a>

```python
url: str
```

- *Type:* str

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#url MediaconnectFlow#url}

---

### MediaconnectFlowSourceFailoverConfig <a name="MediaconnectFlowSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceFailoverConfig(
  failover_mode: str = None,
  recovery_window: typing.Union[int, float] = None,
  source_priority: MediaconnectFlowSourceFailoverConfigSourcePriority = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.failoverMode">failover_mode</a></code> | <code>str</code> | The type of failover you choose for this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.recoveryWindow">recovery_window</a></code> | <code>typing.Union[int, float]</code> | Search window time to look for dash-7 packets. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.sourcePriority">source_priority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a></code> | The priority you want to assign to a source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}. |

---

##### `failover_mode`<sup>Optional</sup> <a name="failover_mode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.failoverMode"></a>

```python
failover_mode: str
```

- *Type:* str

The type of failover you choose for this flow.

MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#failover_mode MediaconnectFlow#failover_mode}

---

##### `recovery_window`<sup>Optional</sup> <a name="recovery_window" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.recoveryWindow"></a>

```python
recovery_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Search window time to look for dash-7 packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#recovery_window MediaconnectFlow#recovery_window}

---

##### `source_priority`<sup>Optional</sup> <a name="source_priority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.sourcePriority"></a>

```python
source_priority: MediaconnectFlowSourceFailoverConfigSourcePriority
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

The priority you want to assign to a source.

You can have a primary stream and a backup stream or two equally prioritized streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_priority MediaconnectFlow#source_priority}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}.

---

### MediaconnectFlowSourceFailoverConfigSourcePriority <a name="MediaconnectFlowSourceFailoverConfigSourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority(
  primary_source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority.property.primarySource">primary_source</a></code> | <code>str</code> | The name of the source you choose as the primary source for this flow. |

---

##### `primary_source`<sup>Optional</sup> <a name="primary_source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority.property.primarySource"></a>

```python
primary_source: str
```

- *Type:* str

The name of the source you choose as the primary source for this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#primary_source MediaconnectFlow#primary_source}

---

### MediaconnectFlowSourceGatewayBridgeSource <a name="MediaconnectFlowSourceGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource(
  bridge_arn: str = None,
  vpc_interface_attachment: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.bridgeArn">bridge_arn</a></code> | <code>str</code> | The ARN of the bridge feeding this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.vpcInterfaceAttachment">vpc_interface_attachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this bridge source. |

---

##### `bridge_arn`<sup>Optional</sup> <a name="bridge_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.bridgeArn"></a>

```python
bridge_arn: str
```

- *Type:* str

The ARN of the bridge feeding this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#bridge_arn MediaconnectFlow#bridge_arn}

---

##### `vpc_interface_attachment`<sup>Optional</sup> <a name="vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.vpcInterfaceAttachment"></a>

```python
vpc_interface_attachment: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this bridge source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#vpc_interface_attachment MediaconnectFlow#vpc_interface_attachment}

---

### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment(
  vpc_interface_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | The name of the VPC interface to use for this resource. |

---

##### `vpc_interface_name`<sup>Optional</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#vpc_interface_name MediaconnectFlow#vpc_interface_name}

---

### MediaconnectFlowSourceMediaStreamSourceConfigurations <a name="MediaconnectFlowSourceMediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations(
  encoding_name: str = None,
  input_configurations: IResolvable | typing.List[MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations] = None,
  media_stream_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.encodingName">encoding_name</a></code> | <code>str</code> | The format that was used to encode the data. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.inputConfigurations">input_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>]</code> | The media streams that you want to associate with the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.mediaStreamName">media_stream_name</a></code> | <code>str</code> | A name that helps you distinguish one media stream from another. |

---

##### `encoding_name`<sup>Optional</sup> <a name="encoding_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.encodingName"></a>

```python
encoding_name: str
```

- *Type:* str

The format that was used to encode the data.

For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#encoding_name MediaconnectFlow#encoding_name}

---

##### `input_configurations`<sup>Optional</sup> <a name="input_configurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.inputConfigurations"></a>

```python
input_configurations: IResolvable | typing.List[MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>]

The media streams that you want to associate with the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#input_configurations MediaconnectFlow#input_configurations}

---

##### `media_stream_name`<sup>Optional</sup> <a name="media_stream_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.mediaStreamName"></a>

```python
media_stream_name: str
```

- *Type:* str

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_stream_name MediaconnectFlow#media_stream_name}

---

### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations(
  input_port: typing.Union[int, float] = None,
  interface: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.inputPort">input_port</a></code> | <code>typing.Union[int, float]</code> | The port that the flow listens on for an incoming media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.interface">interface</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a></code> | The VPC interface where the media stream comes in from. |

---

##### `input_port`<sup>Optional</sup> <a name="input_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.inputPort"></a>

```python
input_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port that the flow listens on for an incoming media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#input_port MediaconnectFlow#input_port}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.interface"></a>

```python
interface: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

The VPC interface where the media stream comes in from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#interface MediaconnectFlow#interface}

---

### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface.property.name">name</a></code> | <code>str</code> | The name of the VPC interface that you want to use for the media stream associated with the output. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the VPC interface that you want to use for the media stream associated with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

### MediaconnectFlowSourceMonitoringConfig <a name="MediaconnectFlowSourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig(
  audio_monitoring_settings: IResolvable | typing.List[MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings] = None,
  content_quality_analysis_state: str = None,
  thumbnail_state: str = None,
  video_monitoring_settings: IResolvable | typing.List[MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.audioMonitoringSettings">audio_monitoring_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>]</code> | Contains the settings for audio stream metrics monitoring. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.contentQualityAnalysisState">content_quality_analysis_state</a></code> | <code>str</code> | Indicates whether content quality analysis is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.thumbnailState">thumbnail_state</a></code> | <code>str</code> | The state of thumbnail monitoring. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.videoMonitoringSettings">video_monitoring_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>]</code> | Contains the settings for video stream metrics monitoring. |

---

##### `audio_monitoring_settings`<sup>Optional</sup> <a name="audio_monitoring_settings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.audioMonitoringSettings"></a>

```python
audio_monitoring_settings: IResolvable | typing.List[MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>]

Contains the settings for audio stream metrics monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#audio_monitoring_settings MediaconnectFlow#audio_monitoring_settings}

---

##### `content_quality_analysis_state`<sup>Optional</sup> <a name="content_quality_analysis_state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.contentQualityAnalysisState"></a>

```python
content_quality_analysis_state: str
```

- *Type:* str

Indicates whether content quality analysis is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#content_quality_analysis_state MediaconnectFlow#content_quality_analysis_state}

---

##### `thumbnail_state`<sup>Optional</sup> <a name="thumbnail_state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.thumbnailState"></a>

```python
thumbnail_state: str
```

- *Type:* str

The state of thumbnail monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#thumbnail_state MediaconnectFlow#thumbnail_state}

---

##### `video_monitoring_settings`<sup>Optional</sup> <a name="video_monitoring_settings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.videoMonitoringSettings"></a>

```python
video_monitoring_settings: IResolvable | typing.List[MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>]

Contains the settings for video stream metrics monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#video_monitoring_settings MediaconnectFlow#video_monitoring_settings}

---

### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings(
  silent_audio: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings.property.silentAudio">silent_audio</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a></code> | Configures settings for the SilentAudio metric. |

---

##### `silent_audio`<sup>Optional</sup> <a name="silent_audio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings.property.silentAudio"></a>

```python
silent_audio: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

Configures settings for the SilentAudio metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#silent_audio MediaconnectFlow#silent_audio}

---

### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio(
  state: str = None,
  threshold_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.state">state</a></code> | <code>str</code> | Indicates whether the SilentAudio metric is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.thresholdSeconds">threshold_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of consecutive seconds of silence that triggers an event or alert. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.state"></a>

```python
state: str
```

- *Type:* str

Indicates whether the SilentAudio metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

##### `threshold_seconds`<sup>Optional</sup> <a name="threshold_seconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.thresholdSeconds"></a>

```python
threshold_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of consecutive seconds of silence that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings(
  black_frames: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames = None,
  frozen_frames: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.blackFrames">black_frames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a></code> | Configures settings for the BlackFrames metric. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.frozenFrames">frozen_frames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a></code> | Configures settings for the FrozenFrames metric. |

---

##### `black_frames`<sup>Optional</sup> <a name="black_frames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.blackFrames"></a>

```python
black_frames: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

Configures settings for the BlackFrames metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#black_frames MediaconnectFlow#black_frames}

---

##### `frozen_frames`<sup>Optional</sup> <a name="frozen_frames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.frozenFrames"></a>

```python
frozen_frames: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

Configures settings for the FrozenFrames metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#frozen_frames MediaconnectFlow#frozen_frames}

---

### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames(
  state: str = None,
  threshold_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.state">state</a></code> | <code>str</code> | Indicates whether the BlackFrames metric is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.thresholdSeconds">threshold_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of consecutive seconds of black frames that triggers an event or alert. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.state"></a>

```python
state: str
```

- *Type:* str

Indicates whether the BlackFrames metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

##### `threshold_seconds`<sup>Optional</sup> <a name="threshold_seconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.thresholdSeconds"></a>

```python
threshold_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of consecutive seconds of black frames that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames(
  state: str = None,
  threshold_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.state">state</a></code> | <code>str</code> | Indicates whether the FrozenFrames metric is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.thresholdSeconds">threshold_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of consecutive seconds of a static image that triggers an event or alert. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.state"></a>

```python
state: str
```

- *Type:* str

Indicates whether the FrozenFrames metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

##### `threshold_seconds`<sup>Optional</sup> <a name="threshold_seconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.thresholdSeconds"></a>

```python
threshold_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of consecutive seconds of a static image that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

### MediaconnectFlowVpcInterfaces <a name="MediaconnectFlowVpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowVpcInterfaces(
  name: str = None,
  network_interface_ids: typing.List[str] = None,
  network_interface_type: str = None,
  role_arn: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.name">name</a></code> | <code>str</code> | Immutable and has to be a unique against other VpcInterfaces in this Flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | IDs of the network interfaces created in customer's account by MediaConnect. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceType">network_interface_type</a></code> | <code>str</code> | The type of network adapter that you want MediaConnect to use on this interface. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.roleArn">role_arn</a></code> | <code>str</code> | Role Arn MediaConnect can assume to create ENIs in customer's account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Security Group IDs to be used on ENI. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.subnetId">subnet_id</a></code> | <code>str</code> | Subnet must be in the AZ of the Flow. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.name"></a>

```python
name: str
```

- *Type:* str

Immutable and has to be a unique against other VpcInterfaces in this Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `network_interface_ids`<sup>Optional</sup> <a name="network_interface_ids" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceIds"></a>

```python
network_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

IDs of the network interfaces created in customer's account by MediaConnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#network_interface_ids MediaconnectFlow#network_interface_ids}

---

##### `network_interface_type`<sup>Optional</sup> <a name="network_interface_type" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceType"></a>

```python
network_interface_type: str
```

- *Type:* str

The type of network adapter that you want MediaConnect to use on this interface.

If you don't set this value, it defaults to ENA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#network_interface_type MediaconnectFlow#network_interface_type}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Role Arn MediaConnect can assume to create ENIs in customer's account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#role_arn MediaconnectFlow#role_arn}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Security Group IDs to be used on ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#security_group_ids MediaconnectFlow#security_group_ids}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Subnet must be in the AZ of the Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#subnet_id MediaconnectFlow#subnet_id}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowMaintenanceOutputReference <a name="MediaconnectFlowMaintenanceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceDay">reset_maintenance_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceStartHour">reset_maintenance_start_hour</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maintenance_day` <a name="reset_maintenance_day" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceDay"></a>

```python
def reset_maintenance_day() -> None
```

##### `reset_maintenance_start_hour` <a name="reset_maintenance_start_hour" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceStartHour"></a>

```python
def reset_maintenance_start_hour() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDayInput">maintenance_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHourInput">maintenance_start_hour_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDay">maintenance_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHour">maintenance_start_hour</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maintenance_day_input`<sup>Optional</sup> <a name="maintenance_day_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDayInput"></a>

```python
maintenance_day_input: str
```

- *Type:* str

---

##### `maintenance_start_hour_input`<sup>Optional</sup> <a name="maintenance_start_hour_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHourInput"></a>

```python
maintenance_start_hour_input: str
```

- *Type:* str

---

##### `maintenance_day`<sup>Required</sup> <a name="maintenance_day" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDay"></a>

```python
maintenance_day: str
```

- *Type:* str

---

##### `maintenance_start_hour`<sup>Required</sup> <a name="maintenance_start_hour" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHour"></a>

```python
maintenance_start_hour: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowMaintenance
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

---


### MediaconnectFlowMediaStreamsAttributesFmtpOutputReference <a name="MediaconnectFlowMediaStreamsAttributesFmtpOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetChannelOrder">reset_channel_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetColorimetry">reset_colorimetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetExactFramerate">reset_exact_framerate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetPar">reset_par</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetRange">reset_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetScanMode">reset_scan_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetTcs">reset_tcs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel_order` <a name="reset_channel_order" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetChannelOrder"></a>

```python
def reset_channel_order() -> None
```

##### `reset_colorimetry` <a name="reset_colorimetry" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetColorimetry"></a>

```python
def reset_colorimetry() -> None
```

##### `reset_exact_framerate` <a name="reset_exact_framerate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetExactFramerate"></a>

```python
def reset_exact_framerate() -> None
```

##### `reset_par` <a name="reset_par" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetPar"></a>

```python
def reset_par() -> None
```

##### `reset_range` <a name="reset_range" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetRange"></a>

```python
def reset_range() -> None
```

##### `reset_scan_mode` <a name="reset_scan_mode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetScanMode"></a>

```python
def reset_scan_mode() -> None
```

##### `reset_tcs` <a name="reset_tcs" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetTcs"></a>

```python
def reset_tcs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrderInput">channel_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetryInput">colorimetry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerateInput">exact_framerate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.parInput">par_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.rangeInput">range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanModeInput">scan_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcsInput">tcs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrder">channel_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetry">colorimetry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerate">exact_framerate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.par">par</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.range">range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanMode">scan_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcs">tcs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_order_input`<sup>Optional</sup> <a name="channel_order_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrderInput"></a>

```python
channel_order_input: str
```

- *Type:* str

---

##### `colorimetry_input`<sup>Optional</sup> <a name="colorimetry_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetryInput"></a>

```python
colorimetry_input: str
```

- *Type:* str

---

##### `exact_framerate_input`<sup>Optional</sup> <a name="exact_framerate_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerateInput"></a>

```python
exact_framerate_input: str
```

- *Type:* str

---

##### `par_input`<sup>Optional</sup> <a name="par_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.parInput"></a>

```python
par_input: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.rangeInput"></a>

```python
range_input: str
```

- *Type:* str

---

##### `scan_mode_input`<sup>Optional</sup> <a name="scan_mode_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanModeInput"></a>

```python
scan_mode_input: str
```

- *Type:* str

---

##### `tcs_input`<sup>Optional</sup> <a name="tcs_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcsInput"></a>

```python
tcs_input: str
```

- *Type:* str

---

##### `channel_order`<sup>Required</sup> <a name="channel_order" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrder"></a>

```python
channel_order: str
```

- *Type:* str

---

##### `colorimetry`<sup>Required</sup> <a name="colorimetry" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetry"></a>

```python
colorimetry: str
```

- *Type:* str

---

##### `exact_framerate`<sup>Required</sup> <a name="exact_framerate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerate"></a>

```python
exact_framerate: str
```

- *Type:* str

---

##### `par`<sup>Required</sup> <a name="par" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.par"></a>

```python
par: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.range"></a>

```python
range: str
```

- *Type:* str

---

##### `scan_mode`<sup>Required</sup> <a name="scan_mode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanMode"></a>

```python
scan_mode: str
```

- *Type:* str

---

##### `tcs`<sup>Required</sup> <a name="tcs" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcs"></a>

```python
tcs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowMediaStreamsAttributesFmtp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

---


### MediaconnectFlowMediaStreamsAttributesOutputReference <a name="MediaconnectFlowMediaStreamsAttributesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp">put_fmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetFmtp">reset_fmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetLang">reset_lang</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fmtp` <a name="put_fmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp"></a>

```python
def put_fmtp(
  channel_order: str = None,
  colorimetry: str = None,
  exact_framerate: str = None,
  par: str = None,
  range: str = None,
  scan_mode: str = None,
  tcs: str = None
) -> None
```

###### `channel_order`<sup>Optional</sup> <a name="channel_order" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp.parameter.channelOrder"></a>

- *Type:* str

The format of the audio channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#channel_order MediaconnectFlow#channel_order}

---

###### `colorimetry`<sup>Optional</sup> <a name="colorimetry" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp.parameter.colorimetry"></a>

- *Type:* str

The format used for the representation of color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#colorimetry MediaconnectFlow#colorimetry}

---

###### `exact_framerate`<sup>Optional</sup> <a name="exact_framerate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp.parameter.exactFramerate"></a>

- *Type:* str

The frame rate for the video stream, in frames/second. For example: 60000/1001.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#exact_framerate MediaconnectFlow#exact_framerate}

---

###### `par`<sup>Optional</sup> <a name="par" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp.parameter.par"></a>

- *Type:* str

The pixel aspect ratio (PAR) of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#par MediaconnectFlow#par}

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp.parameter.range"></a>

- *Type:* str

The encoding range of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#range MediaconnectFlow#range}

---

###### `scan_mode`<sup>Optional</sup> <a name="scan_mode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp.parameter.scanMode"></a>

- *Type:* str

The type of compression that was used to smooth the video's appearance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#scan_mode MediaconnectFlow#scan_mode}

---

###### `tcs`<sup>Optional</sup> <a name="tcs" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp.parameter.tcs"></a>

- *Type:* str

The transfer characteristic system (TCS) that is used in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#tcs MediaconnectFlow#tcs}

---

##### `reset_fmtp` <a name="reset_fmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetFmtp"></a>

```python
def reset_fmtp() -> None
```

##### `reset_lang` <a name="reset_lang" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetLang"></a>

```python
def reset_lang() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtp">fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference">MediaconnectFlowMediaStreamsAttributesFmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtpInput">fmtp_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.langInput">lang_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.lang">lang</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fmtp`<sup>Required</sup> <a name="fmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtp"></a>

```python
fmtp: MediaconnectFlowMediaStreamsAttributesFmtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference">MediaconnectFlowMediaStreamsAttributesFmtpOutputReference</a>

---

##### `fmtp_input`<sup>Optional</sup> <a name="fmtp_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtpInput"></a>

```python
fmtp_input: IResolvable | MediaconnectFlowMediaStreamsAttributesFmtp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

---

##### `lang_input`<sup>Optional</sup> <a name="lang_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.langInput"></a>

```python
lang_input: str
```

- *Type:* str

---

##### `lang`<sup>Required</sup> <a name="lang" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.lang"></a>

```python
lang: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowMediaStreamsAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a>

---


### MediaconnectFlowMediaStreamsList <a name="MediaconnectFlowMediaStreamsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowMediaStreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectFlowMediaStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectFlowMediaStreams]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>]

---


### MediaconnectFlowMediaStreamsOutputReference <a name="MediaconnectFlowMediaStreamsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetClockRate">reset_clock_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetFmt">reset_fmt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamId">reset_media_stream_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamName">reset_media_stream_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamType">reset_media_stream_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetVideoFormat">reset_video_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attributes` <a name="put_attributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.putAttributes"></a>

```python
def put_attributes(
  fmtp: MediaconnectFlowMediaStreamsAttributesFmtp = None,
  lang: str = None
) -> None
```

###### `fmtp`<sup>Optional</sup> <a name="fmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.putAttributes.parameter.fmtp"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

A set of parameters that define the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#fmtp MediaconnectFlow#fmtp}

---

###### `lang`<sup>Optional</sup> <a name="lang" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.putAttributes.parameter.lang"></a>

- *Type:* str

The audio language, in a format that is recognized by the receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#lang MediaconnectFlow#lang}

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_clock_rate` <a name="reset_clock_rate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetClockRate"></a>

```python
def reset_clock_rate() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_fmt` <a name="reset_fmt" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetFmt"></a>

```python
def reset_fmt() -> None
```

##### `reset_media_stream_id` <a name="reset_media_stream_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamId"></a>

```python
def reset_media_stream_id() -> None
```

##### `reset_media_stream_name` <a name="reset_media_stream_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamName"></a>

```python
def reset_media_stream_name() -> None
```

##### `reset_media_stream_type` <a name="reset_media_stream_type" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamType"></a>

```python
def reset_media_stream_type() -> None
```

##### `reset_video_format` <a name="reset_video_format" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetVideoFormat"></a>

```python
def reset_video_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference">MediaconnectFlowMediaStreamsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributesInput">attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRateInput">clock_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmtInput">fmt_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamIdInput">media_stream_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamNameInput">media_stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamTypeInput">media_stream_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormatInput">video_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRate">clock_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmt">fmt</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamId">media_stream_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamName">media_stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamType">media_stream_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormat">video_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributes"></a>

```python
attributes: MediaconnectFlowMediaStreamsAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference">MediaconnectFlowMediaStreamsAttributesOutputReference</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributesInput"></a>

```python
attributes_input: IResolvable | MediaconnectFlowMediaStreamsAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a>

---

##### `clock_rate_input`<sup>Optional</sup> <a name="clock_rate_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRateInput"></a>

```python
clock_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fmt_input`<sup>Optional</sup> <a name="fmt_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmtInput"></a>

```python
fmt_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_stream_id_input`<sup>Optional</sup> <a name="media_stream_id_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamIdInput"></a>

```python
media_stream_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_stream_name_input`<sup>Optional</sup> <a name="media_stream_name_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamNameInput"></a>

```python
media_stream_name_input: str
```

- *Type:* str

---

##### `media_stream_type_input`<sup>Optional</sup> <a name="media_stream_type_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamTypeInput"></a>

```python
media_stream_type_input: str
```

- *Type:* str

---

##### `video_format_input`<sup>Optional</sup> <a name="video_format_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormatInput"></a>

```python
video_format_input: str
```

- *Type:* str

---

##### `clock_rate`<sup>Required</sup> <a name="clock_rate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRate"></a>

```python
clock_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fmt`<sup>Required</sup> <a name="fmt" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmt"></a>

```python
fmt: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_stream_id`<sup>Required</sup> <a name="media_stream_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamId"></a>

```python
media_stream_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_stream_name`<sup>Required</sup> <a name="media_stream_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamName"></a>

```python
media_stream_name: str
```

- *Type:* str

---

##### `media_stream_type`<sup>Required</sup> <a name="media_stream_type" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamType"></a>

```python
media_stream_type: str
```

- *Type:* str

---

##### `video_format`<sup>Required</sup> <a name="video_format" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormat"></a>

```python
video_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowMediaStreams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>

---


### MediaconnectFlowSourceDecryptionOutputReference <a name="MediaconnectFlowSourceDecryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetConstantInitializationVector">reset_constant_initialization_vector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetDeviceId">reset_device_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_constant_initialization_vector` <a name="reset_constant_initialization_vector" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetConstantInitializationVector"></a>

```python
def reset_constant_initialization_vector() -> None
```

##### `reset_device_id` <a name="reset_device_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetDeviceId"></a>

```python
def reset_device_id() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVectorInput">constant_initialization_vector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceIdInput">device_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVector">constant_initialization_vector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceId">device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `constant_initialization_vector_input`<sup>Optional</sup> <a name="constant_initialization_vector_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVectorInput"></a>

```python
constant_initialization_vector_input: str
```

- *Type:* str

---

##### `device_id_input`<sup>Optional</sup> <a name="device_id_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceIdInput"></a>

```python
device_id_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `constant_initialization_vector`<sup>Required</sup> <a name="constant_initialization_vector" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVector"></a>

```python
constant_initialization_vector: str
```

- *Type:* str

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceDecryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

---


### MediaconnectFlowSourceFailoverConfigOutputReference <a name="MediaconnectFlowSourceFailoverConfigOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.putSourcePriority">put_source_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetFailoverMode">reset_failover_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetRecoveryWindow">reset_recovery_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetSourcePriority">reset_source_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_priority` <a name="put_source_priority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.putSourcePriority"></a>

```python
def put_source_priority(
  primary_source: str = None
) -> None
```

###### `primary_source`<sup>Optional</sup> <a name="primary_source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.putSourcePriority.parameter.primarySource"></a>

- *Type:* str

The name of the source you choose as the primary source for this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#primary_source MediaconnectFlow#primary_source}

---

##### `reset_failover_mode` <a name="reset_failover_mode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetFailoverMode"></a>

```python
def reset_failover_mode() -> None
```

##### `reset_recovery_window` <a name="reset_recovery_window" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetRecoveryWindow"></a>

```python
def reset_recovery_window() -> None
```

##### `reset_source_priority` <a name="reset_source_priority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetSourcePriority"></a>

```python
def reset_source_priority() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriority">source_priority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference">MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverModeInput">failover_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindowInput">recovery_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriorityInput">source_priority_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverMode">failover_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindow">recovery_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_priority`<sup>Required</sup> <a name="source_priority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriority"></a>

```python
source_priority: MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference">MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference</a>

---

##### `failover_mode_input`<sup>Optional</sup> <a name="failover_mode_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverModeInput"></a>

```python
failover_mode_input: str
```

- *Type:* str

---

##### `recovery_window_input`<sup>Optional</sup> <a name="recovery_window_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindowInput"></a>

```python
recovery_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_priority_input`<sup>Optional</sup> <a name="source_priority_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriorityInput"></a>

```python
source_priority_input: IResolvable | MediaconnectFlowSourceFailoverConfigSourcePriority
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `failover_mode`<sup>Required</sup> <a name="failover_mode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverMode"></a>

```python
failover_mode: str
```

- *Type:* str

---

##### `recovery_window`<sup>Required</sup> <a name="recovery_window" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindow"></a>

```python
recovery_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceFailoverConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

---


### MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference <a name="MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource">reset_primary_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_primary_source` <a name="reset_primary_source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource"></a>

```python
def reset_primary_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput">primary_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySource">primary_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_source_input`<sup>Optional</sup> <a name="primary_source_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput"></a>

```python
primary_source_input: str
```

- *Type:* str

---

##### `primary_source`<sup>Required</sup> <a name="primary_source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySource"></a>

```python
primary_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceFailoverConfigSourcePriority
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

---


### MediaconnectFlowSourceGatewayBridgeSourceOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.putVpcInterfaceAttachment">put_vpc_interface_attachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetBridgeArn">reset_bridge_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetVpcInterfaceAttachment">reset_vpc_interface_attachment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_interface_attachment` <a name="put_vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.putVpcInterfaceAttachment"></a>

```python
def put_vpc_interface_attachment(
  vpc_interface_name: str = None
) -> None
```

###### `vpc_interface_name`<sup>Optional</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.putVpcInterfaceAttachment.parameter.vpcInterfaceName"></a>

- *Type:* str

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#vpc_interface_name MediaconnectFlow#vpc_interface_name}

---

##### `reset_bridge_arn` <a name="reset_bridge_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetBridgeArn"></a>

```python
def reset_bridge_arn() -> None
```

##### `reset_vpc_interface_attachment` <a name="reset_vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetVpcInterfaceAttachment"></a>

```python
def reset_vpc_interface_attachment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachment">vpc_interface_attachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArnInput">bridge_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachmentInput">vpc_interface_attachment_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArn">bridge_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_interface_attachment`<sup>Required</sup> <a name="vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachment"></a>

```python
vpc_interface_attachment: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference</a>

---

##### `bridge_arn_input`<sup>Optional</sup> <a name="bridge_arn_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArnInput"></a>

```python
bridge_arn_input: str
```

- *Type:* str

---

##### `vpc_interface_attachment_input`<sup>Optional</sup> <a name="vpc_interface_attachment_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachmentInput"></a>

```python
vpc_interface_attachment_input: IResolvable | MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

---

##### `bridge_arn`<sup>Required</sup> <a name="bridge_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArn"></a>

```python
bridge_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceGatewayBridgeSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

---


### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName">reset_vpc_interface_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_interface_name` <a name="reset_vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName"></a>

```python
def reset_vpc_interface_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput">vpc_interface_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_interface_name_input`<sup>Optional</sup> <a name="vpc_interface_name_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput"></a>

```python
vpc_interface_name_input: str
```

- *Type:* str

---

##### `vpc_interface_name`<sup>Required</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>]

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.putInterface">put_interface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInputPort">reset_input_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInterface">reset_interface</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_interface` <a name="put_interface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.putInterface"></a>

```python
def put_interface(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.putInterface.parameter.name"></a>

- *Type:* str

The name of the VPC interface that you want to use for the media stream associated with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `reset_input_port` <a name="reset_input_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInputPort"></a>

```python
def reset_input_port() -> None
```

##### `reset_interface` <a name="reset_interface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInterface"></a>

```python
def reset_interface() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interface">interface</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPortInput">input_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interfaceInput">interface_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPort">input_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interface"></a>

```python
interface: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference</a>

---

##### `input_port_input`<sup>Optional</sup> <a name="input_port_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPortInput"></a>

```python
input_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interface_input`<sup>Optional</sup> <a name="interface_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interfaceInput"></a>

```python
interface_input: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

---

##### `input_port`<sup>Required</sup> <a name="input_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPort"></a>

```python
input_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsList <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectFlowSourceMediaStreamSourceConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>]

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.putInputConfigurations">put_input_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetEncodingName">reset_encoding_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetInputConfigurations">reset_input_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetMediaStreamName">reset_media_stream_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input_configurations` <a name="put_input_configurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.putInputConfigurations"></a>

```python
def put_input_configurations(
  value: IResolvable | typing.List[MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.putInputConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>]

---

##### `reset_encoding_name` <a name="reset_encoding_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetEncodingName"></a>

```python
def reset_encoding_name() -> None
```

##### `reset_input_configurations` <a name="reset_input_configurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetInputConfigurations"></a>

```python
def reset_input_configurations() -> None
```

##### `reset_media_stream_name` <a name="reset_media_stream_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetMediaStreamName"></a>

```python
def reset_media_stream_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurations">input_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingNameInput">encoding_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurationsInput">input_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamNameInput">media_stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingName">encoding_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamName">media_stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_configurations`<sup>Required</sup> <a name="input_configurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurations"></a>

```python
input_configurations: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList</a>

---

##### `encoding_name_input`<sup>Optional</sup> <a name="encoding_name_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingNameInput"></a>

```python
encoding_name_input: str
```

- *Type:* str

---

##### `input_configurations_input`<sup>Optional</sup> <a name="input_configurations_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurationsInput"></a>

```python
input_configurations_input: IResolvable | typing.List[MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>]

---

##### `media_stream_name_input`<sup>Optional</sup> <a name="media_stream_name_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamNameInput"></a>

```python
media_stream_name_input: str
```

- *Type:* str

---

##### `encoding_name`<sup>Required</sup> <a name="encoding_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingName"></a>

```python
encoding_name: str
```

- *Type:* str

---

##### `media_stream_name`<sup>Required</sup> <a name="media_stream_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamName"></a>

```python
media_stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>

---


### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>]

---


### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.putSilentAudio">put_silent_audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resetSilentAudio">reset_silent_audio</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_silent_audio` <a name="put_silent_audio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.putSilentAudio"></a>

```python
def put_silent_audio(
  state: str = None,
  threshold_seconds: typing.Union[int, float] = None
) -> None
```

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.putSilentAudio.parameter.state"></a>

- *Type:* str

Indicates whether the SilentAudio metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

###### `threshold_seconds`<sup>Optional</sup> <a name="threshold_seconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.putSilentAudio.parameter.thresholdSeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the number of consecutive seconds of silence that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

##### `reset_silent_audio` <a name="reset_silent_audio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resetSilentAudio"></a>

```python
def reset_silent_audio() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudio">silent_audio</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudioInput">silent_audio_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `silent_audio`<sup>Required</sup> <a name="silent_audio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudio"></a>

```python
silent_audio: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference</a>

---

##### `silent_audio_input`<sup>Optional</sup> <a name="silent_audio_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudioInput"></a>

```python
silent_audio_input: IResolvable | MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>

---


### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetThresholdSeconds">reset_threshold_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_threshold_seconds` <a name="reset_threshold_seconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetThresholdSeconds"></a>

```python
def reset_threshold_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSecondsInput">threshold_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSeconds">threshold_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `threshold_seconds_input`<sup>Optional</sup> <a name="threshold_seconds_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSecondsInput"></a>

```python
threshold_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `threshold_seconds`<sup>Required</sup> <a name="threshold_seconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSeconds"></a>

```python
threshold_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

---


### MediaconnectFlowSourceMonitoringConfigOutputReference <a name="MediaconnectFlowSourceMonitoringConfigOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putAudioMonitoringSettings">put_audio_monitoring_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putVideoMonitoringSettings">put_video_monitoring_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetAudioMonitoringSettings">reset_audio_monitoring_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetContentQualityAnalysisState">reset_content_quality_analysis_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetThumbnailState">reset_thumbnail_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetVideoMonitoringSettings">reset_video_monitoring_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audio_monitoring_settings` <a name="put_audio_monitoring_settings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putAudioMonitoringSettings"></a>

```python
def put_audio_monitoring_settings(
  value: IResolvable | typing.List[MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putAudioMonitoringSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>]

---

##### `put_video_monitoring_settings` <a name="put_video_monitoring_settings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putVideoMonitoringSettings"></a>

```python
def put_video_monitoring_settings(
  value: IResolvable | typing.List[MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putVideoMonitoringSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>]

---

##### `reset_audio_monitoring_settings` <a name="reset_audio_monitoring_settings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetAudioMonitoringSettings"></a>

```python
def reset_audio_monitoring_settings() -> None
```

##### `reset_content_quality_analysis_state` <a name="reset_content_quality_analysis_state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetContentQualityAnalysisState"></a>

```python
def reset_content_quality_analysis_state() -> None
```

##### `reset_thumbnail_state` <a name="reset_thumbnail_state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetThumbnailState"></a>

```python
def reset_thumbnail_state() -> None
```

##### `reset_video_monitoring_settings` <a name="reset_video_monitoring_settings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetVideoMonitoringSettings"></a>

```python
def reset_video_monitoring_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettings">audio_monitoring_settings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettings">video_monitoring_settings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettingsInput">audio_monitoring_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisStateInput">content_quality_analysis_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailStateInput">thumbnail_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettingsInput">video_monitoring_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisState">content_quality_analysis_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailState">thumbnail_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_monitoring_settings`<sup>Required</sup> <a name="audio_monitoring_settings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettings"></a>

```python
audio_monitoring_settings: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList</a>

---

##### `video_monitoring_settings`<sup>Required</sup> <a name="video_monitoring_settings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettings"></a>

```python
video_monitoring_settings: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList</a>

---

##### `audio_monitoring_settings_input`<sup>Optional</sup> <a name="audio_monitoring_settings_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettingsInput"></a>

```python
audio_monitoring_settings_input: IResolvable | typing.List[MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>]

---

##### `content_quality_analysis_state_input`<sup>Optional</sup> <a name="content_quality_analysis_state_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisStateInput"></a>

```python
content_quality_analysis_state_input: str
```

- *Type:* str

---

##### `thumbnail_state_input`<sup>Optional</sup> <a name="thumbnail_state_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailStateInput"></a>

```python
thumbnail_state_input: str
```

- *Type:* str

---

##### `video_monitoring_settings_input`<sup>Optional</sup> <a name="video_monitoring_settings_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettingsInput"></a>

```python
video_monitoring_settings_input: IResolvable | typing.List[MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>]

---

##### `content_quality_analysis_state`<sup>Required</sup> <a name="content_quality_analysis_state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisState"></a>

```python
content_quality_analysis_state: str
```

- *Type:* str

---

##### `thumbnail_state`<sup>Required</sup> <a name="thumbnail_state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailState"></a>

```python
thumbnail_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceMonitoringConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetThresholdSeconds">reset_threshold_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_threshold_seconds` <a name="reset_threshold_seconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetThresholdSeconds"></a>

```python
def reset_threshold_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSecondsInput">threshold_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSeconds">threshold_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `threshold_seconds_input`<sup>Optional</sup> <a name="threshold_seconds_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSecondsInput"></a>

```python
threshold_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `threshold_seconds`<sup>Required</sup> <a name="threshold_seconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSeconds"></a>

```python
threshold_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetThresholdSeconds">reset_threshold_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_threshold_seconds` <a name="reset_threshold_seconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetThresholdSeconds"></a>

```python
def reset_threshold_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSecondsInput">threshold_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSeconds">threshold_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `threshold_seconds_input`<sup>Optional</sup> <a name="threshold_seconds_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSecondsInput"></a>

```python
threshold_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `threshold_seconds`<sup>Required</sup> <a name="threshold_seconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSeconds"></a>

```python
threshold_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>]

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putBlackFrames">put_black_frames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putFrozenFrames">put_frozen_frames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetBlackFrames">reset_black_frames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetFrozenFrames">reset_frozen_frames</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_black_frames` <a name="put_black_frames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putBlackFrames"></a>

```python
def put_black_frames(
  state: str = None,
  threshold_seconds: typing.Union[int, float] = None
) -> None
```

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putBlackFrames.parameter.state"></a>

- *Type:* str

Indicates whether the BlackFrames metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

###### `threshold_seconds`<sup>Optional</sup> <a name="threshold_seconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putBlackFrames.parameter.thresholdSeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the number of consecutive seconds of black frames that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

##### `put_frozen_frames` <a name="put_frozen_frames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putFrozenFrames"></a>

```python
def put_frozen_frames(
  state: str = None,
  threshold_seconds: typing.Union[int, float] = None
) -> None
```

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putFrozenFrames.parameter.state"></a>

- *Type:* str

Indicates whether the FrozenFrames metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

###### `threshold_seconds`<sup>Optional</sup> <a name="threshold_seconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putFrozenFrames.parameter.thresholdSeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the number of consecutive seconds of a static image that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

##### `reset_black_frames` <a name="reset_black_frames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetBlackFrames"></a>

```python
def reset_black_frames() -> None
```

##### `reset_frozen_frames` <a name="reset_frozen_frames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetFrozenFrames"></a>

```python
def reset_frozen_frames() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFrames">black_frames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFrames">frozen_frames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFramesInput">black_frames_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFramesInput">frozen_frames_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `black_frames`<sup>Required</sup> <a name="black_frames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFrames"></a>

```python
black_frames: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference</a>

---

##### `frozen_frames`<sup>Required</sup> <a name="frozen_frames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFrames"></a>

```python
frozen_frames: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference</a>

---

##### `black_frames_input`<sup>Optional</sup> <a name="black_frames_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFramesInput"></a>

```python
black_frames_input: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

---

##### `frozen_frames_input`<sup>Optional</sup> <a name="frozen_frames_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFramesInput"></a>

```python
frozen_frames_input: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>

---


### MediaconnectFlowSourceOutputReference <a name="MediaconnectFlowSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption">put_decryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putGatewayBridgeSource">put_gateway_bridge_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putMediaStreamSourceConfigurations">put_media_stream_source_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDecryption">reset_decryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetEntitlementArn">reset_entitlement_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetGatewayBridgeSource">reset_gateway_bridge_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetIngestPort">reset_ingest_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxBitrate">reset_max_bitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxLatency">reset_max_latency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxSyncBuffer">reset_max_sync_buffer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMediaStreamSourceConfigurations">reset_media_stream_source_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMinLatency">reset_min_latency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderControlPort">reset_sender_control_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderIpAddress">reset_sender_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerAddress">reset_source_listener_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerPort">reset_source_listener_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetStreamId">reset_stream_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetVpcInterfaceName">reset_vpc_interface_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetWhitelistCidr">reset_whitelist_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_decryption` <a name="put_decryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption"></a>

```python
def put_decryption(
  algorithm: str = None,
  constant_initialization_vector: str = None,
  device_id: str = None,
  key_type: str = None,
  region: str = None,
  resource_id: str = None,
  role_arn: str = None,
  secret_arn: str = None,
  url: str = None
) -> None
```

###### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption.parameter.algorithm"></a>

- *Type:* str

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#algorithm MediaconnectFlow#algorithm}

---

###### `constant_initialization_vector`<sup>Optional</sup> <a name="constant_initialization_vector" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption.parameter.constantInitializationVector"></a>

- *Type:* str

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#constant_initialization_vector MediaconnectFlow#constant_initialization_vector}

---

###### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption.parameter.deviceId"></a>

- *Type:* str

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#device_id MediaconnectFlow#device_id}

---

###### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption.parameter.keyType"></a>

- *Type:* str

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#key_type MediaconnectFlow#key_type}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption.parameter.region"></a>

- *Type:* str

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#region MediaconnectFlow#region}

---

###### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption.parameter.resourceId"></a>

- *Type:* str

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#resource_id MediaconnectFlow#resource_id}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption.parameter.roleArn"></a>

- *Type:* str

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#role_arn MediaconnectFlow#role_arn}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption.parameter.secretArn"></a>

- *Type:* str

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#secret_arn MediaconnectFlow#secret_arn}

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption.parameter.url"></a>

- *Type:* str

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#url MediaconnectFlow#url}

---

##### `put_gateway_bridge_source` <a name="put_gateway_bridge_source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putGatewayBridgeSource"></a>

```python
def put_gateway_bridge_source(
  bridge_arn: str = None,
  vpc_interface_attachment: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment = None
) -> None
```

###### `bridge_arn`<sup>Optional</sup> <a name="bridge_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putGatewayBridgeSource.parameter.bridgeArn"></a>

- *Type:* str

The ARN of the bridge feeding this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#bridge_arn MediaconnectFlow#bridge_arn}

---

###### `vpc_interface_attachment`<sup>Optional</sup> <a name="vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putGatewayBridgeSource.parameter.vpcInterfaceAttachment"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this bridge source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#vpc_interface_attachment MediaconnectFlow#vpc_interface_attachment}

---

##### `put_media_stream_source_configurations` <a name="put_media_stream_source_configurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putMediaStreamSourceConfigurations"></a>

```python
def put_media_stream_source_configurations(
  value: IResolvable | typing.List[MediaconnectFlowSourceMediaStreamSourceConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putMediaStreamSourceConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>]

---

##### `reset_decryption` <a name="reset_decryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDecryption"></a>

```python
def reset_decryption() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_entitlement_arn` <a name="reset_entitlement_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetEntitlementArn"></a>

```python
def reset_entitlement_arn() -> None
```

##### `reset_gateway_bridge_source` <a name="reset_gateway_bridge_source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetGatewayBridgeSource"></a>

```python
def reset_gateway_bridge_source() -> None
```

##### `reset_ingest_port` <a name="reset_ingest_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetIngestPort"></a>

```python
def reset_ingest_port() -> None
```

##### `reset_max_bitrate` <a name="reset_max_bitrate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxBitrate"></a>

```python
def reset_max_bitrate() -> None
```

##### `reset_max_latency` <a name="reset_max_latency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxLatency"></a>

```python
def reset_max_latency() -> None
```

##### `reset_max_sync_buffer` <a name="reset_max_sync_buffer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxSyncBuffer"></a>

```python
def reset_max_sync_buffer() -> None
```

##### `reset_media_stream_source_configurations` <a name="reset_media_stream_source_configurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMediaStreamSourceConfigurations"></a>

```python
def reset_media_stream_source_configurations() -> None
```

##### `reset_min_latency` <a name="reset_min_latency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMinLatency"></a>

```python
def reset_min_latency() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_sender_control_port` <a name="reset_sender_control_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderControlPort"></a>

```python
def reset_sender_control_port() -> None
```

##### `reset_sender_ip_address` <a name="reset_sender_ip_address" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderIpAddress"></a>

```python
def reset_sender_ip_address() -> None
```

##### `reset_source_listener_address` <a name="reset_source_listener_address" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerAddress"></a>

```python
def reset_source_listener_address() -> None
```

##### `reset_source_listener_port` <a name="reset_source_listener_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerPort"></a>

```python
def reset_source_listener_port() -> None
```

##### `reset_stream_id` <a name="reset_stream_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetStreamId"></a>

```python
def reset_stream_id() -> None
```

##### `reset_vpc_interface_name` <a name="reset_vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetVpcInterfaceName"></a>

```python
def reset_vpc_interface_name() -> None
```

##### `reset_whitelist_cidr` <a name="reset_whitelist_cidr" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetWhitelistCidr"></a>

```python
def reset_whitelist_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference">MediaconnectFlowSourceDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSource">gateway_bridge_source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference">MediaconnectFlowSourceGatewayBridgeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestIp">ingest_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurations">media_stream_source_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceIngestPort">source_ingest_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryptionInput">decryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArnInput">entitlement_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSourceInput">gateway_bridge_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPortInput">ingest_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrateInput">max_bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatencyInput">max_latency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBufferInput">max_sync_buffer_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurationsInput">media_stream_source_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatencyInput">min_latency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPortInput">sender_control_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddressInput">sender_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddressInput">source_listener_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPortInput">source_listener_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamIdInput">stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceNameInput">vpc_interface_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidrInput">whitelist_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArn">entitlement_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPort">ingest_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrate">max_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatency">max_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBuffer">max_sync_buffer</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatency">min_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPort">sender_control_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddress">sender_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddress">source_listener_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPort">source_listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidr">whitelist_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `decryption`<sup>Required</sup> <a name="decryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryption"></a>

```python
decryption: MediaconnectFlowSourceDecryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference">MediaconnectFlowSourceDecryptionOutputReference</a>

---

##### `gateway_bridge_source`<sup>Required</sup> <a name="gateway_bridge_source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSource"></a>

```python
gateway_bridge_source: MediaconnectFlowSourceGatewayBridgeSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference">MediaconnectFlowSourceGatewayBridgeSourceOutputReference</a>

---

##### `ingest_ip`<sup>Required</sup> <a name="ingest_ip" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestIp"></a>

```python
ingest_ip: str
```

- *Type:* str

---

##### `media_stream_source_configurations`<sup>Required</sup> <a name="media_stream_source_configurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurations"></a>

```python
media_stream_source_configurations: MediaconnectFlowSourceMediaStreamSourceConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsList</a>

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

##### `source_ingest_port`<sup>Required</sup> <a name="source_ingest_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceIngestPort"></a>

```python
source_ingest_port: str
```

- *Type:* str

---

##### `decryption_input`<sup>Optional</sup> <a name="decryption_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryptionInput"></a>

```python
decryption_input: IResolvable | MediaconnectFlowSourceDecryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `entitlement_arn_input`<sup>Optional</sup> <a name="entitlement_arn_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArnInput"></a>

```python
entitlement_arn_input: str
```

- *Type:* str

---

##### `gateway_bridge_source_input`<sup>Optional</sup> <a name="gateway_bridge_source_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSourceInput"></a>

```python
gateway_bridge_source_input: IResolvable | MediaconnectFlowSourceGatewayBridgeSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

---

##### `ingest_port_input`<sup>Optional</sup> <a name="ingest_port_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPortInput"></a>

```python
ingest_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_bitrate_input`<sup>Optional</sup> <a name="max_bitrate_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrateInput"></a>

```python
max_bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_latency_input`<sup>Optional</sup> <a name="max_latency_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatencyInput"></a>

```python
max_latency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_sync_buffer_input`<sup>Optional</sup> <a name="max_sync_buffer_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBufferInput"></a>

```python
max_sync_buffer_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_stream_source_configurations_input`<sup>Optional</sup> <a name="media_stream_source_configurations_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurationsInput"></a>

```python
media_stream_source_configurations_input: IResolvable | typing.List[MediaconnectFlowSourceMediaStreamSourceConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>]

---

##### `min_latency_input`<sup>Optional</sup> <a name="min_latency_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatencyInput"></a>

```python
min_latency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `sender_control_port_input`<sup>Optional</sup> <a name="sender_control_port_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPortInput"></a>

```python
sender_control_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sender_ip_address_input`<sup>Optional</sup> <a name="sender_ip_address_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddressInput"></a>

```python
sender_ip_address_input: str
```

- *Type:* str

---

##### `source_listener_address_input`<sup>Optional</sup> <a name="source_listener_address_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddressInput"></a>

```python
source_listener_address_input: str
```

- *Type:* str

---

##### `source_listener_port_input`<sup>Optional</sup> <a name="source_listener_port_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPortInput"></a>

```python
source_listener_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id_input`<sup>Optional</sup> <a name="stream_id_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamIdInput"></a>

```python
stream_id_input: str
```

- *Type:* str

---

##### `vpc_interface_name_input`<sup>Optional</sup> <a name="vpc_interface_name_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceNameInput"></a>

```python
vpc_interface_name_input: str
```

- *Type:* str

---

##### `whitelist_cidr_input`<sup>Optional</sup> <a name="whitelist_cidr_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidrInput"></a>

```python
whitelist_cidr_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `entitlement_arn`<sup>Required</sup> <a name="entitlement_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArn"></a>

```python
entitlement_arn: str
```

- *Type:* str

---

##### `ingest_port`<sup>Required</sup> <a name="ingest_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPort"></a>

```python
ingest_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_bitrate`<sup>Required</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrate"></a>

```python
max_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_latency`<sup>Required</sup> <a name="max_latency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatency"></a>

```python
max_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_sync_buffer`<sup>Required</sup> <a name="max_sync_buffer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBuffer"></a>

```python
max_sync_buffer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_latency`<sup>Required</sup> <a name="min_latency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatency"></a>

```python
min_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `sender_control_port`<sup>Required</sup> <a name="sender_control_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPort"></a>

```python
sender_control_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sender_ip_address`<sup>Required</sup> <a name="sender_ip_address" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddress"></a>

```python
sender_ip_address: str
```

- *Type:* str

---

##### `source_listener_address`<sup>Required</sup> <a name="source_listener_address" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddress"></a>

```python
source_listener_address: str
```

- *Type:* str

---

##### `source_listener_port`<sup>Required</sup> <a name="source_listener_port" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPort"></a>

```python
source_listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `vpc_interface_name`<sup>Required</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

---

##### `whitelist_cidr`<sup>Required</sup> <a name="whitelist_cidr" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidr"></a>

```python
whitelist_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

---


### MediaconnectFlowVpcInterfacesList <a name="MediaconnectFlowVpcInterfacesList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowVpcInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectFlowVpcInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectFlowVpcInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>]

---


### MediaconnectFlowVpcInterfacesOutputReference <a name="MediaconnectFlowVpcInterfacesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow

mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceIds">reset_network_interface_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceType">reset_network_interface_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_interface_ids` <a name="reset_network_interface_ids" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceIds"></a>

```python
def reset_network_interface_ids() -> None
```

##### `reset_network_interface_type` <a name="reset_network_interface_type" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceType"></a>

```python
def reset_network_interface_type() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIdsInput">network_interface_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceTypeInput">network_interface_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceType">network_interface_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_interface_ids_input`<sup>Optional</sup> <a name="network_interface_ids_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIdsInput"></a>

```python
network_interface_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_interface_type_input`<sup>Optional</sup> <a name="network_interface_type_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceTypeInput"></a>

```python
network_interface_type_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_interface_ids`<sup>Required</sup> <a name="network_interface_ids" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIds"></a>

```python
network_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_interface_type`<sup>Required</sup> <a name="network_interface_type" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceType"></a>

```python
network_interface_type: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowVpcInterfaces
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>

---



