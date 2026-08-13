# `ec2NetworkInterfaceAttachment` Submodule <a name="`ec2NetworkInterfaceAttachment` Submodule" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInterfaceAttachment <a name="Ec2NetworkInterfaceAttachment" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment awscc_ec2_network_interface_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface_attachment

ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  device_index: str,
  instance_id: str,
  network_interface_id: str,
  delete_on_termination: bool | IResolvable = None,
  ena_queue_count: typing.Union[int, float] = None,
  ena_srd_specification: Ec2NetworkInterfaceAttachmentEnaSrdSpecification = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.deviceIndex">device_index</a></code> | <code>str</code> | The network interface's position in the attachment order. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The ID of the instance to which you will attach the ENI. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | The ID of the ENI that you want to attach. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.deleteOnTermination">delete_on_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to delete the network interface when the instance terminates. By default, this value is set to ``true``. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.enaQueueCount">ena_queue_count</a></code> | <code>typing.Union[int, float]</code> | The number of ENA queues created with the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.enaSrdSpecification">ena_srd_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a></code> | Configures ENA Express for the network interface that this action attaches to the instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.deviceIndex"></a>

- *Type:* str

The network interface's position in the attachment order.

For example, the first attached network interface has a `DeviceIndex` of 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#device_index Ec2NetworkInterfaceAttachment#device_index}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.instanceId"></a>

- *Type:* str

The ID of the instance to which you will attach the ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#instance_id Ec2NetworkInterfaceAttachment#instance_id}

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.networkInterfaceId"></a>

- *Type:* str

The ID of the ENI that you want to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#network_interface_id Ec2NetworkInterfaceAttachment#network_interface_id}

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.deleteOnTermination"></a>

- *Type:* bool | cdktn.IResolvable

Whether to delete the network interface when the instance terminates. By default, this value is set to ``true``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#delete_on_termination Ec2NetworkInterfaceAttachment#delete_on_termination}

---

##### `ena_queue_count`<sup>Optional</sup> <a name="ena_queue_count" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.enaQueueCount"></a>

- *Type:* typing.Union[int, float]

The number of ENA queues created with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_queue_count Ec2NetworkInterfaceAttachment#ena_queue_count}

---

##### `ena_srd_specification`<sup>Optional</sup> <a name="ena_srd_specification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.enaSrdSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a>

Configures ENA Express for the network interface that this action attaches to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_specification Ec2NetworkInterfaceAttachment#ena_srd_specification}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.putEnaSrdSpecification">put_ena_srd_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetEnaQueueCount">reset_ena_queue_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetEnaSrdSpecification">reset_ena_srd_specification</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ena_srd_specification` <a name="put_ena_srd_specification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.putEnaSrdSpecification"></a>

```python
def put_ena_srd_specification(
  ena_srd_enabled: bool | IResolvable = None,
  ena_srd_udp_specification: Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification = None
) -> None
```

###### `ena_srd_enabled`<sup>Optional</sup> <a name="ena_srd_enabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.putEnaSrdSpecification.parameter.enaSrdEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether ENA Express is enabled for the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_enabled Ec2NetworkInterfaceAttachment#ena_srd_enabled}

---

###### `ena_srd_udp_specification`<sup>Optional</sup> <a name="ena_srd_udp_specification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.putEnaSrdSpecification.parameter.enaSrdUdpSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a>

Configures ENA Express for UDP network traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_udp_specification Ec2NetworkInterfaceAttachment#ena_srd_udp_specification}

---

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_ena_queue_count` <a name="reset_ena_queue_count" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetEnaQueueCount"></a>

```python
def reset_ena_queue_count() -> None
```

##### `reset_ena_srd_specification` <a name="reset_ena_srd_specification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetEnaSrdSpecification"></a>

```python
def reset_ena_srd_specification() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2NetworkInterfaceAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_network_interface_attachment

ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_network_interface_attachment

ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_network_interface_attachment

ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_network_interface_attachment

ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2NetworkInterfaceAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2NetworkInterfaceAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2NetworkInterfaceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NetworkInterfaceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.attachmentId">attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaSrdSpecification">ena_srd_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deviceIndexInput">device_index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaQueueCountInput">ena_queue_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaSrdSpecificationInput">ena_srd_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deleteOnTermination">delete_on_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deviceIndex">device_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaQueueCount">ena_queue_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

---

##### `ena_srd_specification`<sup>Required</sup> <a name="ena_srd_specification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaSrdSpecification"></a>

```python
ena_srd_specification: Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `device_index_input`<sup>Optional</sup> <a name="device_index_input" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deviceIndexInput"></a>

```python
device_index_input: str
```

- *Type:* str

---

##### `ena_queue_count_input`<sup>Optional</sup> <a name="ena_queue_count_input" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaQueueCountInput"></a>

```python
ena_queue_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ena_srd_specification_input`<sup>Optional</sup> <a name="ena_srd_specification_input" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaSrdSpecificationInput"></a>

```python
ena_srd_specification_input: IResolvable | Ec2NetworkInterfaceAttachmentEnaSrdSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a>

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deleteOnTermination"></a>

```python
delete_on_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deviceIndex"></a>

```python
device_index: str
```

- *Type:* str

---

##### `ena_queue_count`<sup>Required</sup> <a name="ena_queue_count" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaQueueCount"></a>

```python
ena_queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInterfaceAttachmentConfig <a name="Ec2NetworkInterfaceAttachmentConfig" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface_attachment

ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  device_index: str,
  instance_id: str,
  network_interface_id: str,
  delete_on_termination: bool | IResolvable = None,
  ena_queue_count: typing.Union[int, float] = None,
  ena_srd_specification: Ec2NetworkInterfaceAttachmentEnaSrdSpecification = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.deviceIndex">device_index</a></code> | <code>str</code> | The network interface's position in the attachment order. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The ID of the instance to which you will attach the ENI. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | The ID of the ENI that you want to attach. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.deleteOnTermination">delete_on_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to delete the network interface when the instance terminates. By default, this value is set to ``true``. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.enaQueueCount">ena_queue_count</a></code> | <code>typing.Union[int, float]</code> | The number of ENA queues created with the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.enaSrdSpecification">ena_srd_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a></code> | Configures ENA Express for the network interface that this action attaches to the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.deviceIndex"></a>

```python
device_index: str
```

- *Type:* str

The network interface's position in the attachment order.

For example, the first attached network interface has a `DeviceIndex` of 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#device_index Ec2NetworkInterfaceAttachment#device_index}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The ID of the instance to which you will attach the ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#instance_id Ec2NetworkInterfaceAttachment#instance_id}

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

The ID of the ENI that you want to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#network_interface_id Ec2NetworkInterfaceAttachment#network_interface_id}

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.deleteOnTermination"></a>

```python
delete_on_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to delete the network interface when the instance terminates. By default, this value is set to ``true``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#delete_on_termination Ec2NetworkInterfaceAttachment#delete_on_termination}

---

##### `ena_queue_count`<sup>Optional</sup> <a name="ena_queue_count" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.enaQueueCount"></a>

```python
ena_queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of ENA queues created with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_queue_count Ec2NetworkInterfaceAttachment#ena_queue_count}

---

##### `ena_srd_specification`<sup>Optional</sup> <a name="ena_srd_specification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.enaSrdSpecification"></a>

```python
ena_srd_specification: Ec2NetworkInterfaceAttachmentEnaSrdSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a>

Configures ENA Express for the network interface that this action attaches to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_specification Ec2NetworkInterfaceAttachment#ena_srd_specification}

---

### Ec2NetworkInterfaceAttachmentEnaSrdSpecification <a name="Ec2NetworkInterfaceAttachmentEnaSrdSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface_attachment

ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification(
  ena_srd_enabled: bool | IResolvable = None,
  ena_srd_udp_specification: Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.property.enaSrdEnabled">ena_srd_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether ENA Express is enabled for the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.property.enaSrdUdpSpecification">ena_srd_udp_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | Configures ENA Express for UDP network traffic. |

---

##### `ena_srd_enabled`<sup>Optional</sup> <a name="ena_srd_enabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.property.enaSrdEnabled"></a>

```python
ena_srd_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether ENA Express is enabled for the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_enabled Ec2NetworkInterfaceAttachment#ena_srd_enabled}

---

##### `ena_srd_udp_specification`<sup>Optional</sup> <a name="ena_srd_udp_specification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.property.enaSrdUdpSpecification"></a>

```python
ena_srd_udp_specification: Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a>

Configures ENA Express for UDP network traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_udp_specification Ec2NetworkInterfaceAttachment#ena_srd_udp_specification}

---

### Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification <a name="Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface_attachment

ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification(
  ena_srd_udp_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled">ena_srd_udp_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_udp_enabled Ec2NetworkInterfaceAttachment#ena_srd_udp_enabled}. |

---

##### `ena_srd_udp_enabled`<sup>Optional</sup> <a name="ena_srd_udp_enabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled"></a>

```python
ena_srd_udp_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_udp_enabled Ec2NetworkInterfaceAttachment#ena_srd_udp_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface_attachment

ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled">reset_ena_srd_udp_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ena_srd_udp_enabled` <a name="reset_ena_srd_udp_enabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled"></a>

```python
def reset_ena_srd_udp_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput">ena_srd_udp_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">ena_srd_udp_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ena_srd_udp_enabled_input`<sup>Optional</sup> <a name="ena_srd_udp_enabled_input" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput"></a>

```python
ena_srd_udp_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ena_srd_udp_enabled`<sup>Required</sup> <a name="ena_srd_udp_enabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```python
ena_srd_udp_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference <a name="Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface_attachment

ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification">put_ena_srd_udp_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resetEnaSrdEnabled">reset_ena_srd_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification">reset_ena_srd_udp_specification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ena_srd_udp_specification` <a name="put_ena_srd_udp_specification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification"></a>

```python
def put_ena_srd_udp_specification(
  ena_srd_udp_enabled: bool | IResolvable = None
) -> None
```

###### `ena_srd_udp_enabled`<sup>Optional</sup> <a name="ena_srd_udp_enabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification.parameter.enaSrdUdpEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_udp_enabled Ec2NetworkInterfaceAttachment#ena_srd_udp_enabled}.

---

##### `reset_ena_srd_enabled` <a name="reset_ena_srd_enabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resetEnaSrdEnabled"></a>

```python
def reset_ena_srd_enabled() -> None
```

##### `reset_ena_srd_udp_specification` <a name="reset_ena_srd_udp_specification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification"></a>

```python
def reset_ena_srd_udp_specification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">ena_srd_udp_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput">ena_srd_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput">ena_srd_udp_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabled">ena_srd_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ena_srd_udp_specification`<sup>Required</sup> <a name="ena_srd_udp_specification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```python
ena_srd_udp_specification: Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `ena_srd_enabled_input`<sup>Optional</sup> <a name="ena_srd_enabled_input" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput"></a>

```python
ena_srd_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ena_srd_udp_specification_input`<sup>Optional</sup> <a name="ena_srd_udp_specification_input" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput"></a>

```python
ena_srd_udp_specification_input: IResolvable | Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `ena_srd_enabled`<sup>Required</sup> <a name="ena_srd_enabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```python
ena_srd_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2NetworkInterfaceAttachmentEnaSrdSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a>

---



