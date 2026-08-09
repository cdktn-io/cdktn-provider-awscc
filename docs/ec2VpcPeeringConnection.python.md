# `ec2VpcPeeringConnection` Submodule <a name="`ec2VpcPeeringConnection` Submodule" id="@cdktn/provider-awscc.ec2VpcPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcPeeringConnection <a name="Ec2VpcPeeringConnection" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection awscc_ec2_vpc_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_peering_connection

ec2VpcPeeringConnection.Ec2VpcPeeringConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  peer_vpc_id: str,
  vpc_id: str,
  assume_role_region: str = None,
  peer_owner_id: str = None,
  peer_region: str = None,
  peer_role_arn: str = None,
  tags: IResolvable | typing.List[Ec2VpcPeeringConnectionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | The ID of the VPC with which you are creating the VPC peering connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.assumeRoleRegion">assume_role_region</a></code> | <code>str</code> | The Region code to use when calling Security Token Service (STS) to assume the PeerRoleArn, if provided. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerOwnerId">peer_owner_id</a></code> | <code>str</code> | The AWS account ID of the owner of the accepter VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerRegion">peer_region</a></code> | <code>str</code> | The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerRoleArn">peer_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#tags Ec2VpcPeeringConnection#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `peer_vpc_id`<sup>Required</sup> <a name="peer_vpc_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerVpcId"></a>

- *Type:* str

The ID of the VPC with which you are creating the VPC peering connection.

You must specify this parameter in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_vpc_id Ec2VpcPeeringConnection#peer_vpc_id}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.vpcId"></a>

- *Type:* str

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#vpc_id Ec2VpcPeeringConnection#vpc_id}

---

##### `assume_role_region`<sup>Optional</sup> <a name="assume_role_region" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.assumeRoleRegion"></a>

- *Type:* str

The Region code to use when calling Security Token Service (STS) to assume the PeerRoleArn, if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#assume_role_region Ec2VpcPeeringConnection#assume_role_region}

---

##### `peer_owner_id`<sup>Optional</sup> <a name="peer_owner_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerOwnerId"></a>

- *Type:* str

The AWS account ID of the owner of the accepter VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_owner_id Ec2VpcPeeringConnection#peer_owner_id}

---

##### `peer_region`<sup>Optional</sup> <a name="peer_region" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerRegion"></a>

- *Type:* str

The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_region Ec2VpcPeeringConnection#peer_region}

---

##### `peer_role_arn`<sup>Optional</sup> <a name="peer_role_arn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_role_arn Ec2VpcPeeringConnection#peer_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#tags Ec2VpcPeeringConnection#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetAssumeRoleRegion">reset_assume_role_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetPeerOwnerId">reset_peer_owner_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetPeerRegion">reset_peer_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetPeerRoleArn">reset_peer_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2VpcPeeringConnectionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>]

---

##### `reset_assume_role_region` <a name="reset_assume_role_region" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetAssumeRoleRegion"></a>

```python
def reset_assume_role_region() -> None
```

##### `reset_peer_owner_id` <a name="reset_peer_owner_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetPeerOwnerId"></a>

```python
def reset_peer_owner_id() -> None
```

##### `reset_peer_region` <a name="reset_peer_region" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetPeerRegion"></a>

```python
def reset_peer_region() -> None
```

##### `reset_peer_role_arn` <a name="reset_peer_role_arn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetPeerRoleArn"></a>

```python
def reset_peer_role_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2VpcPeeringConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_vpc_peering_connection

ec2VpcPeeringConnection.Ec2VpcPeeringConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_vpc_peering_connection

ec2VpcPeeringConnection.Ec2VpcPeeringConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_vpc_peering_connection

ec2VpcPeeringConnection.Ec2VpcPeeringConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_vpc_peering_connection

ec2VpcPeeringConnection.Ec2VpcPeeringConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2VpcPeeringConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2VpcPeeringConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2VpcPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList">Ec2VpcPeeringConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.assumeRoleRegionInput">assume_role_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerOwnerIdInput">peer_owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRegionInput">peer_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRoleArnInput">peer_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerVpcIdInput">peer_vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.assumeRoleRegion">assume_role_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerOwnerId">peer_owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRegion">peer_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRoleArn">peer_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.tags"></a>

```python
tags: Ec2VpcPeeringConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList">Ec2VpcPeeringConnectionTagsList</a>

---

##### `vpc_peering_connection_id`<sup>Required</sup> <a name="vpc_peering_connection_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.vpcPeeringConnectionId"></a>

```python
vpc_peering_connection_id: str
```

- *Type:* str

---

##### `assume_role_region_input`<sup>Optional</sup> <a name="assume_role_region_input" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.assumeRoleRegionInput"></a>

```python
assume_role_region_input: str
```

- *Type:* str

---

##### `peer_owner_id_input`<sup>Optional</sup> <a name="peer_owner_id_input" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerOwnerIdInput"></a>

```python
peer_owner_id_input: str
```

- *Type:* str

---

##### `peer_region_input`<sup>Optional</sup> <a name="peer_region_input" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRegionInput"></a>

```python
peer_region_input: str
```

- *Type:* str

---

##### `peer_role_arn_input`<sup>Optional</sup> <a name="peer_role_arn_input" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRoleArnInput"></a>

```python
peer_role_arn_input: str
```

- *Type:* str

---

##### `peer_vpc_id_input`<sup>Optional</sup> <a name="peer_vpc_id_input" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerVpcIdInput"></a>

```python
peer_vpc_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2VpcPeeringConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `assume_role_region`<sup>Required</sup> <a name="assume_role_region" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.assumeRoleRegion"></a>

```python
assume_role_region: str
```

- *Type:* str

---

##### `peer_owner_id`<sup>Required</sup> <a name="peer_owner_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerOwnerId"></a>

```python
peer_owner_id: str
```

- *Type:* str

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

---

##### `peer_role_arn`<sup>Required</sup> <a name="peer_role_arn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRoleArn"></a>

```python
peer_role_arn: str
```

- *Type:* str

---

##### `peer_vpc_id`<sup>Required</sup> <a name="peer_vpc_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerVpcId"></a>

```python
peer_vpc_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcPeeringConnectionConfig <a name="Ec2VpcPeeringConnectionConfig" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_peering_connection

ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  peer_vpc_id: str,
  vpc_id: str,
  assume_role_region: str = None,
  peer_owner_id: str = None,
  peer_region: str = None,
  peer_role_arn: str = None,
  tags: IResolvable | typing.List[Ec2VpcPeeringConnectionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | The ID of the VPC with which you are creating the VPC peering connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.assumeRoleRegion">assume_role_region</a></code> | <code>str</code> | The Region code to use when calling Security Token Service (STS) to assume the PeerRoleArn, if provided. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerOwnerId">peer_owner_id</a></code> | <code>str</code> | The AWS account ID of the owner of the accepter VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerRegion">peer_region</a></code> | <code>str</code> | The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerRoleArn">peer_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#tags Ec2VpcPeeringConnection#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `peer_vpc_id`<sup>Required</sup> <a name="peer_vpc_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerVpcId"></a>

```python
peer_vpc_id: str
```

- *Type:* str

The ID of the VPC with which you are creating the VPC peering connection.

You must specify this parameter in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_vpc_id Ec2VpcPeeringConnection#peer_vpc_id}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#vpc_id Ec2VpcPeeringConnection#vpc_id}

---

##### `assume_role_region`<sup>Optional</sup> <a name="assume_role_region" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.assumeRoleRegion"></a>

```python
assume_role_region: str
```

- *Type:* str

The Region code to use when calling Security Token Service (STS) to assume the PeerRoleArn, if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#assume_role_region Ec2VpcPeeringConnection#assume_role_region}

---

##### `peer_owner_id`<sup>Optional</sup> <a name="peer_owner_id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerOwnerId"></a>

```python
peer_owner_id: str
```

- *Type:* str

The AWS account ID of the owner of the accepter VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_owner_id Ec2VpcPeeringConnection#peer_owner_id}

---

##### `peer_region`<sup>Optional</sup> <a name="peer_region" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_region Ec2VpcPeeringConnection#peer_region}

---

##### `peer_role_arn`<sup>Optional</sup> <a name="peer_role_arn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerRoleArn"></a>

```python
peer_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_role_arn Ec2VpcPeeringConnection#peer_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2VpcPeeringConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#tags Ec2VpcPeeringConnection#tags}.

---

### Ec2VpcPeeringConnectionTags <a name="Ec2VpcPeeringConnectionTags" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_peering_connection

ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#key Ec2VpcPeeringConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#value Ec2VpcPeeringConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcPeeringConnectionTagsList <a name="Ec2VpcPeeringConnectionTagsList" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_peering_connection

ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VpcPeeringConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VpcPeeringConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>]

---


### Ec2VpcPeeringConnectionTagsOutputReference <a name="Ec2VpcPeeringConnectionTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_peering_connection

ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpcPeeringConnectionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>

---



