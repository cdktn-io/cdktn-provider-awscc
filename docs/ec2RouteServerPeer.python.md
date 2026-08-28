# `ec2RouteServerPeer` Submodule <a name="`ec2RouteServerPeer` Submodule" id="@cdktn/provider-awscc.ec2RouteServerPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2RouteServerPeer <a name="Ec2RouteServerPeer" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer awscc_ec2_route_server_peer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_route_server_peer

ec2RouteServerPeer.Ec2RouteServerPeer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bgp_options: Ec2RouteServerPeerBgpOptions,
  peer_address: str,
  route_server_endpoint_id: str,
  tags: IResolvable | typing.List[Ec2RouteServerPeerTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.bgpOptions">bgp_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a></code> | BGP Options. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.peerAddress">peer_address</a></code> | <code>str</code> | IP address of the Route Server Peer. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.routeServerEndpointId">route_server_endpoint_id</a></code> | <code>str</code> | Route Server Endpoint ID. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bgp_options`<sup>Required</sup> <a name="bgp_options" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.bgpOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a>

BGP Options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#bgp_options Ec2RouteServerPeer#bgp_options}

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.peerAddress"></a>

- *Type:* str

IP address of the Route Server Peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#peer_address Ec2RouteServerPeer#peer_address}

---

##### `route_server_endpoint_id`<sup>Required</sup> <a name="route_server_endpoint_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.routeServerEndpointId"></a>

- *Type:* str

Route Server Endpoint ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#route_server_endpoint_id Ec2RouteServerPeer#route_server_endpoint_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#tags Ec2RouteServerPeer#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putBgpOptions">put_bgp_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bgp_options` <a name="put_bgp_options" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putBgpOptions"></a>

```python
def put_bgp_options(
  peer_asn: typing.Union[int, float] = None,
  peer_liveness_detection: str = None
) -> None
```

###### `peer_asn`<sup>Optional</sup> <a name="peer_asn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putBgpOptions.parameter.peerAsn"></a>

- *Type:* typing.Union[int, float]

BGP ASN of the Route Server Peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#peer_asn Ec2RouteServerPeer#peer_asn}

---

###### `peer_liveness_detection`<sup>Optional</sup> <a name="peer_liveness_detection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putBgpOptions.parameter.peerLivenessDetection"></a>

- *Type:* str

BGP Liveness Detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#peer_liveness_detection Ec2RouteServerPeer#peer_liveness_detection}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2RouteServerPeerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2RouteServerPeer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_route_server_peer

ec2RouteServerPeer.Ec2RouteServerPeer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_route_server_peer

ec2RouteServerPeer.Ec2RouteServerPeer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_route_server_peer

ec2RouteServerPeer.Ec2RouteServerPeer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_route_server_peer

ec2RouteServerPeer.Ec2RouteServerPeer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2RouteServerPeer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2RouteServerPeer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2RouteServerPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2RouteServerPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.bgpOptions">bgp_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference">Ec2RouteServerPeerBgpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.endpointEniAddress">endpoint_eni_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.endpointEniId">endpoint_eni_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerId">route_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerPeerId">route_server_peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList">Ec2RouteServerPeerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.bgpOptionsInput">bgp_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.peerAddressInput">peer_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerEndpointIdInput">route_server_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.peerAddress">peer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerEndpointId">route_server_endpoint_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bgp_options`<sup>Required</sup> <a name="bgp_options" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.bgpOptions"></a>

```python
bgp_options: Ec2RouteServerPeerBgpOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference">Ec2RouteServerPeerBgpOptionsOutputReference</a>

---

##### `endpoint_eni_address`<sup>Required</sup> <a name="endpoint_eni_address" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.endpointEniAddress"></a>

```python
endpoint_eni_address: str
```

- *Type:* str

---

##### `endpoint_eni_id`<sup>Required</sup> <a name="endpoint_eni_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.endpointEniId"></a>

```python
endpoint_eni_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `route_server_id`<sup>Required</sup> <a name="route_server_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerId"></a>

```python
route_server_id: str
```

- *Type:* str

---

##### `route_server_peer_id`<sup>Required</sup> <a name="route_server_peer_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerPeerId"></a>

```python
route_server_peer_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tags"></a>

```python
tags: Ec2RouteServerPeerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList">Ec2RouteServerPeerTagsList</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `bgp_options_input`<sup>Optional</sup> <a name="bgp_options_input" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.bgpOptionsInput"></a>

```python
bgp_options_input: IResolvable | Ec2RouteServerPeerBgpOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a>

---

##### `peer_address_input`<sup>Optional</sup> <a name="peer_address_input" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.peerAddressInput"></a>

```python
peer_address_input: str
```

- *Type:* str

---

##### `route_server_endpoint_id_input`<sup>Optional</sup> <a name="route_server_endpoint_id_input" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerEndpointIdInput"></a>

```python
route_server_endpoint_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2RouteServerPeerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>]

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.peerAddress"></a>

```python
peer_address: str
```

- *Type:* str

---

##### `route_server_endpoint_id`<sup>Required</sup> <a name="route_server_endpoint_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerEndpointId"></a>

```python
route_server_endpoint_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2RouteServerPeerBgpOptions <a name="Ec2RouteServerPeerBgpOptions" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_route_server_peer

ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions(
  peer_asn: typing.Union[int, float] = None,
  peer_liveness_detection: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.property.peerAsn">peer_asn</a></code> | <code>typing.Union[int, float]</code> | BGP ASN of the Route Server Peer. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.property.peerLivenessDetection">peer_liveness_detection</a></code> | <code>str</code> | BGP Liveness Detection. |

---

##### `peer_asn`<sup>Optional</sup> <a name="peer_asn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.property.peerAsn"></a>

```python
peer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

BGP ASN of the Route Server Peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#peer_asn Ec2RouteServerPeer#peer_asn}

---

##### `peer_liveness_detection`<sup>Optional</sup> <a name="peer_liveness_detection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.property.peerLivenessDetection"></a>

```python
peer_liveness_detection: str
```

- *Type:* str

BGP Liveness Detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#peer_liveness_detection Ec2RouteServerPeer#peer_liveness_detection}

---

### Ec2RouteServerPeerConfig <a name="Ec2RouteServerPeerConfig" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_route_server_peer

ec2RouteServerPeer.Ec2RouteServerPeerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bgp_options: Ec2RouteServerPeerBgpOptions,
  peer_address: str,
  route_server_endpoint_id: str,
  tags: IResolvable | typing.List[Ec2RouteServerPeerTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.bgpOptions">bgp_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a></code> | BGP Options. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.peerAddress">peer_address</a></code> | <code>str</code> | IP address of the Route Server Peer. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.routeServerEndpointId">route_server_endpoint_id</a></code> | <code>str</code> | Route Server Endpoint ID. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bgp_options`<sup>Required</sup> <a name="bgp_options" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.bgpOptions"></a>

```python
bgp_options: Ec2RouteServerPeerBgpOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a>

BGP Options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#bgp_options Ec2RouteServerPeer#bgp_options}

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.peerAddress"></a>

```python
peer_address: str
```

- *Type:* str

IP address of the Route Server Peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#peer_address Ec2RouteServerPeer#peer_address}

---

##### `route_server_endpoint_id`<sup>Required</sup> <a name="route_server_endpoint_id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.routeServerEndpointId"></a>

```python
route_server_endpoint_id: str
```

- *Type:* str

Route Server Endpoint ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#route_server_endpoint_id Ec2RouteServerPeer#route_server_endpoint_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2RouteServerPeerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#tags Ec2RouteServerPeer#tags}

---

### Ec2RouteServerPeerTags <a name="Ec2RouteServerPeerTags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_route_server_peer

ec2RouteServerPeer.Ec2RouteServerPeerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#key Ec2RouteServerPeer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#value Ec2RouteServerPeer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2RouteServerPeerBgpOptionsOutputReference <a name="Ec2RouteServerPeerBgpOptionsOutputReference" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_route_server_peer

ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resetPeerAsn">reset_peer_asn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resetPeerLivenessDetection">reset_peer_liveness_detection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_peer_asn` <a name="reset_peer_asn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resetPeerAsn"></a>

```python
def reset_peer_asn() -> None
```

##### `reset_peer_liveness_detection` <a name="reset_peer_liveness_detection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resetPeerLivenessDetection"></a>

```python
def reset_peer_liveness_detection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerAsnInput">peer_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetectionInput">peer_liveness_detection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerAsn">peer_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetection">peer_liveness_detection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `peer_asn_input`<sup>Optional</sup> <a name="peer_asn_input" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerAsnInput"></a>

```python
peer_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_liveness_detection_input`<sup>Optional</sup> <a name="peer_liveness_detection_input" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetectionInput"></a>

```python
peer_liveness_detection_input: str
```

- *Type:* str

---

##### `peer_asn`<sup>Required</sup> <a name="peer_asn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerAsn"></a>

```python
peer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_liveness_detection`<sup>Required</sup> <a name="peer_liveness_detection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetection"></a>

```python
peer_liveness_detection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2RouteServerPeerBgpOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a>

---


### Ec2RouteServerPeerTagsList <a name="Ec2RouteServerPeerTagsList" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_route_server_peer

ec2RouteServerPeer.Ec2RouteServerPeerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2RouteServerPeerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2RouteServerPeerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>]

---


### Ec2RouteServerPeerTagsOutputReference <a name="Ec2RouteServerPeerTagsOutputReference" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_route_server_peer

ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2RouteServerPeerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>

---



