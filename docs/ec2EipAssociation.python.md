# `ec2EipAssociation` Submodule <a name="`ec2EipAssociation` Submodule" id="@cdktn/provider-awscc.ec2EipAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2EipAssociation <a name="Ec2EipAssociation" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association awscc_ec2_eip_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_eip_association

ec2EipAssociation.Ec2EipAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allocation_id: str = None,
  eip: str = None,
  instance_id: str = None,
  network_interface_id: str = None,
  private_ip_address: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.allocationId">allocation_id</a></code> | <code>str</code> | The allocation ID. This is required. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.eip">eip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#eip Ec2EipAssociation#eip}. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The ID of the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | The ID of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.privateIpAddress">private_ip_address</a></code> | <code>str</code> | The primary or secondary private IP address to associate with the Elastic IP address. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocation_id`<sup>Optional</sup> <a name="allocation_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.allocationId"></a>

- *Type:* str

The allocation ID. This is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#allocation_id Ec2EipAssociation#allocation_id}

---

##### `eip`<sup>Optional</sup> <a name="eip" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.eip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#eip Ec2EipAssociation#eip}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.instanceId"></a>

- *Type:* str

The ID of the instance.

The instance must have exactly one attached network interface. You can specify either the instance ID or the network interface ID, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#instance_id Ec2EipAssociation#instance_id}

---

##### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.networkInterfaceId"></a>

- *Type:* str

The ID of the network interface.

If the instance has more than one network interface, you must specify a network interface ID.
You can specify either the instance ID or the network interface ID, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#network_interface_id Ec2EipAssociation#network_interface_id}

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.Initializer.parameter.privateIpAddress"></a>

- *Type:* str

The primary or secondary private IP address to associate with the Elastic IP address.

If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#private_ip_address Ec2EipAssociation#private_ip_address}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetAllocationId">reset_allocation_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetEip">reset_eip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetNetworkInterfaceId">reset_network_interface_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetPrivateIpAddress">reset_private_ip_address</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allocation_id` <a name="reset_allocation_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetAllocationId"></a>

```python
def reset_allocation_id() -> None
```

##### `reset_eip` <a name="reset_eip" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetEip"></a>

```python
def reset_eip() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_network_interface_id` <a name="reset_network_interface_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetNetworkInterfaceId"></a>

```python
def reset_network_interface_id() -> None
```

##### `reset_private_ip_address` <a name="reset_private_ip_address" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.resetPrivateIpAddress"></a>

```python
def reset_private_ip_address() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2EipAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_eip_association

ec2EipAssociation.Ec2EipAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_eip_association

ec2EipAssociation.Ec2EipAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_eip_association

ec2EipAssociation.Ec2EipAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_eip_association

ec2EipAssociation.Ec2EipAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2EipAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2EipAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2EipAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2EipAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.eipAssociationId">eip_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.allocationIdInput">allocation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.eipInput">eip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.privateIpAddressInput">private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.allocationId">allocation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.eip">eip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `eip_association_id`<sup>Required</sup> <a name="eip_association_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.eipAssociationId"></a>

```python
eip_association_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `allocation_id_input`<sup>Optional</sup> <a name="allocation_id_input" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.allocationIdInput"></a>

```python
allocation_id_input: str
```

- *Type:* str

---

##### `eip_input`<sup>Optional</sup> <a name="eip_input" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.eipInput"></a>

```python
eip_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `private_ip_address_input`<sup>Optional</sup> <a name="private_ip_address_input" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.privateIpAddressInput"></a>

```python
private_ip_address_input: str
```

- *Type:* str

---

##### `allocation_id`<sup>Required</sup> <a name="allocation_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.allocationId"></a>

```python
allocation_id: str
```

- *Type:* str

---

##### `eip`<sup>Required</sup> <a name="eip" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.eip"></a>

```python
eip: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2EipAssociationConfig <a name="Ec2EipAssociationConfig" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_eip_association

ec2EipAssociation.Ec2EipAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allocation_id: str = None,
  eip: str = None,
  instance_id: str = None,
  network_interface_id: str = None,
  private_ip_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.allocationId">allocation_id</a></code> | <code>str</code> | The allocation ID. This is required. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.eip">eip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#eip Ec2EipAssociation#eip}. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The ID of the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | The ID of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | The primary or secondary private IP address to associate with the Elastic IP address. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocation_id`<sup>Optional</sup> <a name="allocation_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.allocationId"></a>

```python
allocation_id: str
```

- *Type:* str

The allocation ID. This is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#allocation_id Ec2EipAssociation#allocation_id}

---

##### `eip`<sup>Optional</sup> <a name="eip" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.eip"></a>

```python
eip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#eip Ec2EipAssociation#eip}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The ID of the instance.

The instance must have exactly one attached network interface. You can specify either the instance ID or the network interface ID, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#instance_id Ec2EipAssociation#instance_id}

---

##### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

The ID of the network interface.

If the instance has more than one network interface, you must specify a network interface ID.
You can specify either the instance ID or the network interface ID, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#network_interface_id Ec2EipAssociation#network_interface_id}

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2EipAssociation.Ec2EipAssociationConfig.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

The primary or secondary private IP address to associate with the Elastic IP address.

If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip_association#private_ip_address Ec2EipAssociation#private_ip_address}

---



