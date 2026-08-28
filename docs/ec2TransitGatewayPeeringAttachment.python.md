# `ec2TransitGatewayPeeringAttachment` Submodule <a name="`ec2TransitGatewayPeeringAttachment` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayPeeringAttachment <a name="Ec2TransitGatewayPeeringAttachment" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment awscc_ec2_transit_gateway_peering_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  peer_account_id: str,
  peer_region: str,
  peer_transit_gateway_id: str,
  transit_gateway_id: str,
  tags: IResolvable | typing.List[Ec2TransitGatewayPeeringAttachmentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerAccountId">peer_account_id</a></code> | <code>str</code> | The ID of the peer account. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerRegion">peer_region</a></code> | <code>str</code> | Peer Region. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerTransitGatewayId">peer_transit_gateway_id</a></code> | <code>str</code> | The ID of the peer transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | The ID of the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>]</code> | The tags for the transit gateway peering attachment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `peer_account_id`<sup>Required</sup> <a name="peer_account_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerAccountId"></a>

- *Type:* str

The ID of the peer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerRegion"></a>

- *Type:* str

Peer Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}

---

##### `peer_transit_gateway_id`<sup>Required</sup> <a name="peer_transit_gateway_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.peerTransitGatewayId"></a>

- *Type:* str

The ID of the peer transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.transitGatewayId"></a>

- *Type:* str

The ID of the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>]

The tags for the transit gateway peering attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2TransitGatewayPeeringAttachmentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayPeeringAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2TransitGatewayPeeringAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2TransitGatewayPeeringAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2TransitGatewayPeeringAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayPeeringAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference">Ec2TransitGatewayPeeringAttachmentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList">Ec2TransitGatewayPeeringAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountIdInput">peer_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegionInput">peer_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayIdInput">peer_transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountId">peer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegion">peer_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayId">peer_transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.status"></a>

```python
status: Ec2TransitGatewayPeeringAttachmentStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference">Ec2TransitGatewayPeeringAttachmentStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tags"></a>

```python
tags: Ec2TransitGatewayPeeringAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList">Ec2TransitGatewayPeeringAttachmentTagsList</a>

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `peer_account_id_input`<sup>Optional</sup> <a name="peer_account_id_input" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountIdInput"></a>

```python
peer_account_id_input: str
```

- *Type:* str

---

##### `peer_region_input`<sup>Optional</sup> <a name="peer_region_input" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegionInput"></a>

```python
peer_region_input: str
```

- *Type:* str

---

##### `peer_transit_gateway_id_input`<sup>Optional</sup> <a name="peer_transit_gateway_id_input" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayIdInput"></a>

```python
peer_transit_gateway_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2TransitGatewayPeeringAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>]

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `peer_account_id`<sup>Required</sup> <a name="peer_account_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountId"></a>

```python
peer_account_id: str
```

- *Type:* str

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

---

##### `peer_transit_gateway_id`<sup>Required</sup> <a name="peer_transit_gateway_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayId"></a>

```python
peer_transit_gateway_id: str
```

- *Type:* str

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayPeeringAttachmentConfig <a name="Ec2TransitGatewayPeeringAttachmentConfig" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  peer_account_id: str,
  peer_region: str,
  peer_transit_gateway_id: str,
  transit_gateway_id: str,
  tags: IResolvable | typing.List[Ec2TransitGatewayPeeringAttachmentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerAccountId">peer_account_id</a></code> | <code>str</code> | The ID of the peer account. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerRegion">peer_region</a></code> | <code>str</code> | Peer Region. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerTransitGatewayId">peer_transit_gateway_id</a></code> | <code>str</code> | The ID of the peer transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | The ID of the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>]</code> | The tags for the transit gateway peering attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `peer_account_id`<sup>Required</sup> <a name="peer_account_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerAccountId"></a>

```python
peer_account_id: str
```

- *Type:* str

The ID of the peer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

Peer Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}

---

##### `peer_transit_gateway_id`<sup>Required</sup> <a name="peer_transit_gateway_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerTransitGatewayId"></a>

```python
peer_transit_gateway_id: str
```

- *Type:* str

The ID of the peer transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

The ID of the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2TransitGatewayPeeringAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>]

The tags for the transit gateway peering attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}

---

### Ec2TransitGatewayPeeringAttachmentStatus <a name="Ec2TransitGatewayPeeringAttachmentStatus" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatus.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatus()
```


### Ec2TransitGatewayPeeringAttachmentTags <a name="Ec2TransitGatewayPeeringAttachmentTags" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags.property.value">value</a></code> | <code>str</code> | The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment#key Ec2TransitGatewayPeeringAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_peering_attachment#value Ec2TransitGatewayPeeringAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayPeeringAttachmentStatusOutputReference <a name="Ec2TransitGatewayPeeringAttachmentStatusOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatus">Ec2TransitGatewayPeeringAttachmentStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.internalValue"></a>

```python
internal_value: Ec2TransitGatewayPeeringAttachmentStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatus">Ec2TransitGatewayPeeringAttachmentStatus</a>

---


### Ec2TransitGatewayPeeringAttachmentTagsList <a name="Ec2TransitGatewayPeeringAttachmentTagsList" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2TransitGatewayPeeringAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2TransitGatewayPeeringAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>]

---


### Ec2TransitGatewayPeeringAttachmentTagsOutputReference <a name="Ec2TransitGatewayPeeringAttachmentTagsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway_peering_attachment

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2TransitGatewayPeeringAttachmentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>

---



