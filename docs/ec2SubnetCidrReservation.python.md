# `ec2SubnetCidrReservation` Submodule <a name="`ec2SubnetCidrReservation` Submodule" id="@cdktn/provider-awscc.ec2SubnetCidrReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SubnetCidrReservation <a name="Ec2SubnetCidrReservation" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation awscc_ec2_subnet_cidr_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_reservation

ec2SubnetCidrReservation.Ec2SubnetCidrReservation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cidr: str,
  reservation_type: str,
  subnet_id: str,
  description: str = None,
  tags: IResolvable | typing.List[Ec2SubnetCidrReservationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.cidr">cidr</a></code> | <code>str</code> | The IPv4 or IPv6 CIDR range to reserve. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.reservationType">reservation_type</a></code> | <code>str</code> | The type of reservation. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | The identifier of the subnet the CIDR range is reserved in. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the subnet CIDR reservation. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>]</code> | The tags assigned to the subnet CIDR reservation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.cidr"></a>

- *Type:* str

The IPv4 or IPv6 CIDR range to reserve.

Must lie inside the subnet's CIDR block and must not overlap an existing reservation. Supply an IPv6 range exactly as the service returns it: Amazon EC2 stores an IPv6 CIDR in RFC 5952 compressed form, and a noncanonical spelling of the same range is reported as drift because this property is create-only and read back.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#cidr Ec2SubnetCidrReservation#cidr}

---

##### `reservation_type`<sup>Required</sup> <a name="reservation_type" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.reservationType"></a>

- *Type:* str

The type of reservation.

A prefix reservation is used for an IPv6 prefix delegated to a network interface; an explicit reservation is used for a range that Amazon EC2 must not assign automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#reservation_type Ec2SubnetCidrReservation#reservation_type}

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.subnetId"></a>

- *Type:* str

The identifier of the subnet the CIDR range is reserved in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#subnet_id Ec2SubnetCidrReservation#subnet_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.description"></a>

- *Type:* str

The description of the subnet CIDR reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#description Ec2SubnetCidrReservation#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>]

The tags assigned to the subnet CIDR reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#tags Ec2SubnetCidrReservation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2SubnetCidrReservationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2SubnetCidrReservation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_reservation

ec2SubnetCidrReservation.Ec2SubnetCidrReservation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_reservation

ec2SubnetCidrReservation.Ec2SubnetCidrReservation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_reservation

ec2SubnetCidrReservation.Ec2SubnetCidrReservation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_reservation

ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2SubnetCidrReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2SubnetCidrReservation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2SubnetCidrReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SubnetCidrReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetCidrReservationId">subnet_cidr_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList">Ec2SubnetCidrReservationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.reservationTypeInput">reservation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.reservationType">reservation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `subnet_cidr_reservation_id`<sup>Required</sup> <a name="subnet_cidr_reservation_id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetCidrReservationId"></a>

```python
subnet_cidr_reservation_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tags"></a>

```python
tags: Ec2SubnetCidrReservationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList">Ec2SubnetCidrReservationTagsList</a>

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `reservation_type_input`<sup>Optional</sup> <a name="reservation_type_input" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.reservationTypeInput"></a>

```python
reservation_type_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2SubnetCidrReservationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `reservation_type`<sup>Required</sup> <a name="reservation_type" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.reservationType"></a>

```python
reservation_type: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SubnetCidrReservationConfig <a name="Ec2SubnetCidrReservationConfig" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_reservation

ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cidr: str,
  reservation_type: str,
  subnet_id: str,
  description: str = None,
  tags: IResolvable | typing.List[Ec2SubnetCidrReservationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.cidr">cidr</a></code> | <code>str</code> | The IPv4 or IPv6 CIDR range to reserve. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.reservationType">reservation_type</a></code> | <code>str</code> | The type of reservation. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | The identifier of the subnet the CIDR range is reserved in. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.description">description</a></code> | <code>str</code> | The description of the subnet CIDR reservation. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>]</code> | The tags assigned to the subnet CIDR reservation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

The IPv4 or IPv6 CIDR range to reserve.

Must lie inside the subnet's CIDR block and must not overlap an existing reservation. Supply an IPv6 range exactly as the service returns it: Amazon EC2 stores an IPv6 CIDR in RFC 5952 compressed form, and a noncanonical spelling of the same range is reported as drift because this property is create-only and read back.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#cidr Ec2SubnetCidrReservation#cidr}

---

##### `reservation_type`<sup>Required</sup> <a name="reservation_type" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.reservationType"></a>

```python
reservation_type: str
```

- *Type:* str

The type of reservation.

A prefix reservation is used for an IPv6 prefix delegated to a network interface; an explicit reservation is used for a range that Amazon EC2 must not assign automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#reservation_type Ec2SubnetCidrReservation#reservation_type}

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The identifier of the subnet the CIDR range is reserved in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#subnet_id Ec2SubnetCidrReservation#subnet_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the subnet CIDR reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#description Ec2SubnetCidrReservation#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2SubnetCidrReservationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>]

The tags assigned to the subnet CIDR reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#tags Ec2SubnetCidrReservation#tags}

---

### Ec2SubnetCidrReservationTags <a name="Ec2SubnetCidrReservationTags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_reservation

ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.property.value">value</a></code> | <code>str</code> | The value of the tag. Amazon EC2 accepts a maximum of 256 Unicode characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Amazon EC2 reserves keys beginning with 'aws:' for internal use and rejects them for this resource. Amazon EC2 accepts a maximum of 128 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#key Ec2SubnetCidrReservation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag. Amazon EC2 accepts a maximum of 256 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#value Ec2SubnetCidrReservation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2SubnetCidrReservationTagsList <a name="Ec2SubnetCidrReservationTagsList" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_reservation

ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2SubnetCidrReservationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2SubnetCidrReservationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>]

---


### Ec2SubnetCidrReservationTagsOutputReference <a name="Ec2SubnetCidrReservationTagsOutputReference" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_reservation

ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2SubnetCidrReservationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>

---



