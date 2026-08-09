# `networkmanagerConnectAttachment` Submodule <a name="`networkmanagerConnectAttachment` Submodule" id="@cdktn/provider-awscc.networkmanagerConnectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerConnectAttachment <a name="NetworkmanagerConnectAttachment" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment awscc_networkmanager_connect_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  core_network_id: str,
  edge_location: str,
  options: NetworkmanagerConnectAttachmentOptions,
  transport_attachment_id: str,
  network_function_group_name: str = None,
  proposed_network_function_group_change: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange = None,
  proposed_segment_change: NetworkmanagerConnectAttachmentProposedSegmentChange = None,
  routing_policy_label: str = None,
  tags: IResolvable | typing.List[NetworkmanagerConnectAttachmentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.coreNetworkId">core_network_id</a></code> | <code>str</code> | ID of the CoreNetwork that the attachment will be attached to. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.edgeLocation">edge_location</a></code> | <code>str</code> | Edge location of the attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | Protocol options for connect attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.transportAttachmentId">transport_attachment_id</a></code> | <code>str</code> | Id of transport attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.networkFunctionGroupName">network_function_group_name</a></code> | <code>str</code> | The name of the network function group attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.proposedNetworkFunctionGroupChange">proposed_network_function_group_change</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a></code> | The attachment to move from one network function group to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.proposedSegmentChange">proposed_segment_change</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a></code> | The attachment to move from one segment to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.routingPolicyLabel">routing_policy_label</a></code> | <code>str</code> | Routing policy label. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>]</code> | Tags for the attachment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.coreNetworkId"></a>

- *Type:* str

ID of the CoreNetwork that the attachment will be attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#core_network_id NetworkmanagerConnectAttachment#core_network_id}

---

##### `edge_location`<sup>Required</sup> <a name="edge_location" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.edgeLocation"></a>

- *Type:* str

Edge location of the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#edge_location NetworkmanagerConnectAttachment#edge_location}

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

Protocol options for connect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#options NetworkmanagerConnectAttachment#options}

---

##### `transport_attachment_id`<sup>Required</sup> <a name="transport_attachment_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.transportAttachmentId"></a>

- *Type:* str

Id of transport attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#transport_attachment_id NetworkmanagerConnectAttachment#transport_attachment_id}

---

##### `network_function_group_name`<sup>Optional</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.networkFunctionGroupName"></a>

- *Type:* str

The name of the network function group attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#network_function_group_name NetworkmanagerConnectAttachment#network_function_group_name}

---

##### `proposed_network_function_group_change`<sup>Optional</sup> <a name="proposed_network_function_group_change" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.proposedNetworkFunctionGroupChange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a>

The attachment to move from one network function group to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#proposed_network_function_group_change NetworkmanagerConnectAttachment#proposed_network_function_group_change}

---

##### `proposed_segment_change`<sup>Optional</sup> <a name="proposed_segment_change" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.proposedSegmentChange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a>

The attachment to move from one segment to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#proposed_segment_change NetworkmanagerConnectAttachment#proposed_segment_change}

---

##### `routing_policy_label`<sup>Optional</sup> <a name="routing_policy_label" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.routingPolicyLabel"></a>

- *Type:* str

Routing policy label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#routing_policy_label NetworkmanagerConnectAttachment#routing_policy_label}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>]

Tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedNetworkFunctionGroupChange">put_proposed_network_function_group_change</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedSegmentChange">put_proposed_segment_change</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetNetworkFunctionGroupName">reset_network_function_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetProposedNetworkFunctionGroupChange">reset_proposed_network_function_group_change</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetProposedSegmentChange">reset_proposed_segment_change</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetRoutingPolicyLabel">reset_routing_policy_label</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_options` <a name="put_options" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions"></a>

```python
def put_options(
  protocol: str = None
) -> None
```

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions.parameter.protocol"></a>

- *Type:* str

Tunnel protocol for connect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#protocol NetworkmanagerConnectAttachment#protocol}

---

##### `put_proposed_network_function_group_change` <a name="put_proposed_network_function_group_change" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedNetworkFunctionGroupChange"></a>

```python
def put_proposed_network_function_group_change(
  attachment_policy_rule_number: typing.Union[int, float] = None,
  network_function_group_name: str = None,
  tags: IResolvable | typing.List[NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags] = None
) -> None
```

###### `attachment_policy_rule_number`<sup>Optional</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedNetworkFunctionGroupChange.parameter.attachmentPolicyRuleNumber"></a>

- *Type:* typing.Union[int, float]

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#attachment_policy_rule_number NetworkmanagerConnectAttachment#attachment_policy_rule_number}

---

###### `network_function_group_name`<sup>Optional</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedNetworkFunctionGroupChange.parameter.networkFunctionGroupName"></a>

- *Type:* str

The name of the network function group to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#network_function_group_name NetworkmanagerConnectAttachment#network_function_group_name}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedNetworkFunctionGroupChange.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>]

The key-value tags that changed for the network function group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}

---

##### `put_proposed_segment_change` <a name="put_proposed_segment_change" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedSegmentChange"></a>

```python
def put_proposed_segment_change(
  attachment_policy_rule_number: typing.Union[int, float] = None,
  segment_name: str = None,
  tags: IResolvable | typing.List[NetworkmanagerConnectAttachmentProposedSegmentChangeTags] = None
) -> None
```

###### `attachment_policy_rule_number`<sup>Optional</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedSegmentChange.parameter.attachmentPolicyRuleNumber"></a>

- *Type:* typing.Union[int, float]

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#attachment_policy_rule_number NetworkmanagerConnectAttachment#attachment_policy_rule_number}

---

###### `segment_name`<sup>Optional</sup> <a name="segment_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedSegmentChange.parameter.segmentName"></a>

- *Type:* str

The name of the segment to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#segment_name NetworkmanagerConnectAttachment#segment_name}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedSegmentChange.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>]

The list of key-value tags that changed for the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkmanagerConnectAttachmentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>]

---

##### `reset_network_function_group_name` <a name="reset_network_function_group_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetNetworkFunctionGroupName"></a>

```python
def reset_network_function_group_name() -> None
```

##### `reset_proposed_network_function_group_change` <a name="reset_proposed_network_function_group_change" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetProposedNetworkFunctionGroupChange"></a>

```python
def reset_proposed_network_function_group_change() -> None
```

##### `reset_proposed_segment_change` <a name="reset_proposed_segment_change" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetProposedSegmentChange"></a>

```python
def reset_proposed_segment_change() -> None
```

##### `reset_routing_policy_label` <a name="reset_routing_policy_label" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetRoutingPolicyLabel"></a>

```python
def reset_routing_policy_label() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkmanagerConnectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkmanagerConnectAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkmanagerConnectAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkmanagerConnectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerConnectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentId">attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lastModificationErrors">last_modification_errors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference">NetworkmanagerConnectAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedNetworkFunctionGroupChange">proposed_network_function_group_change</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedSegmentChange">proposed_segment_change</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference">NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.segmentName">segment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList">NetworkmanagerConnectAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkIdInput">core_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocationInput">edge_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.networkFunctionGroupNameInput">network_function_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.optionsInput">options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedNetworkFunctionGroupChangeInput">proposed_network_function_group_change_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedSegmentChangeInput">proposed_segment_change_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabelInput">routing_policy_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentIdInput">transport_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocation">edge_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.networkFunctionGroupName">network_function_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabel">routing_policy_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentId">transport_attachment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

---

##### `attachment_policy_rule_number`<sup>Required</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modification_errors`<sup>Required</sup> <a name="last_modification_errors" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lastModificationErrors"></a>

```python
last_modification_errors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.options"></a>

```python
options: NetworkmanagerConnectAttachmentOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference">NetworkmanagerConnectAttachmentOptionsOutputReference</a>

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `proposed_network_function_group_change`<sup>Required</sup> <a name="proposed_network_function_group_change" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedNetworkFunctionGroupChange"></a>

```python
proposed_network_function_group_change: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `proposed_segment_change`<sup>Required</sup> <a name="proposed_segment_change" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedSegmentChange"></a>

```python
proposed_segment_change: NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference">NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference</a>

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `segment_name`<sup>Required</sup> <a name="segment_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.segmentName"></a>

```python
segment_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tags"></a>

```python
tags: NetworkmanagerConnectAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList">NetworkmanagerConnectAttachmentTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `core_network_id_input`<sup>Optional</sup> <a name="core_network_id_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkIdInput"></a>

```python
core_network_id_input: str
```

- *Type:* str

---

##### `edge_location_input`<sup>Optional</sup> <a name="edge_location_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocationInput"></a>

```python
edge_location_input: str
```

- *Type:* str

---

##### `network_function_group_name_input`<sup>Optional</sup> <a name="network_function_group_name_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.networkFunctionGroupNameInput"></a>

```python
network_function_group_name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.optionsInput"></a>

```python
options_input: IResolvable | NetworkmanagerConnectAttachmentOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

---

##### `proposed_network_function_group_change_input`<sup>Optional</sup> <a name="proposed_network_function_group_change_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedNetworkFunctionGroupChangeInput"></a>

```python
proposed_network_function_group_change_input: IResolvable | NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `proposed_segment_change_input`<sup>Optional</sup> <a name="proposed_segment_change_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedSegmentChangeInput"></a>

```python
proposed_segment_change_input: IResolvable | NetworkmanagerConnectAttachmentProposedSegmentChange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a>

---

##### `routing_policy_label_input`<sup>Optional</sup> <a name="routing_policy_label_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabelInput"></a>

```python
routing_policy_label_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkmanagerConnectAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>]

---

##### `transport_attachment_id_input`<sup>Optional</sup> <a name="transport_attachment_id_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentIdInput"></a>

```python
transport_attachment_id_input: str
```

- *Type:* str

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

---

##### `edge_location`<sup>Required</sup> <a name="edge_location" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocation"></a>

```python
edge_location: str
```

- *Type:* str

---

##### `network_function_group_name`<sup>Required</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.networkFunctionGroupName"></a>

```python
network_function_group_name: str
```

- *Type:* str

---

##### `routing_policy_label`<sup>Required</sup> <a name="routing_policy_label" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabel"></a>

```python
routing_policy_label: str
```

- *Type:* str

---

##### `transport_attachment_id`<sup>Required</sup> <a name="transport_attachment_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentId"></a>

```python
transport_attachment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerConnectAttachmentConfig <a name="NetworkmanagerConnectAttachmentConfig" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  core_network_id: str,
  edge_location: str,
  options: NetworkmanagerConnectAttachmentOptions,
  transport_attachment_id: str,
  network_function_group_name: str = None,
  proposed_network_function_group_change: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange = None,
  proposed_segment_change: NetworkmanagerConnectAttachmentProposedSegmentChange = None,
  routing_policy_label: str = None,
  tags: IResolvable | typing.List[NetworkmanagerConnectAttachmentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | ID of the CoreNetwork that the attachment will be attached to. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.edgeLocation">edge_location</a></code> | <code>str</code> | Edge location of the attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | Protocol options for connect attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.transportAttachmentId">transport_attachment_id</a></code> | <code>str</code> | Id of transport attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.networkFunctionGroupName">network_function_group_name</a></code> | <code>str</code> | The name of the network function group attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.proposedNetworkFunctionGroupChange">proposed_network_function_group_change</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a></code> | The attachment to move from one network function group to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.proposedSegmentChange">proposed_segment_change</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a></code> | The attachment to move from one segment to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.routingPolicyLabel">routing_policy_label</a></code> | <code>str</code> | Routing policy label. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>]</code> | Tags for the attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

ID of the CoreNetwork that the attachment will be attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#core_network_id NetworkmanagerConnectAttachment#core_network_id}

---

##### `edge_location`<sup>Required</sup> <a name="edge_location" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.edgeLocation"></a>

```python
edge_location: str
```

- *Type:* str

Edge location of the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#edge_location NetworkmanagerConnectAttachment#edge_location}

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.options"></a>

```python
options: NetworkmanagerConnectAttachmentOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

Protocol options for connect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#options NetworkmanagerConnectAttachment#options}

---

##### `transport_attachment_id`<sup>Required</sup> <a name="transport_attachment_id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.transportAttachmentId"></a>

```python
transport_attachment_id: str
```

- *Type:* str

Id of transport attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#transport_attachment_id NetworkmanagerConnectAttachment#transport_attachment_id}

---

##### `network_function_group_name`<sup>Optional</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.networkFunctionGroupName"></a>

```python
network_function_group_name: str
```

- *Type:* str

The name of the network function group attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#network_function_group_name NetworkmanagerConnectAttachment#network_function_group_name}

---

##### `proposed_network_function_group_change`<sup>Optional</sup> <a name="proposed_network_function_group_change" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.proposedNetworkFunctionGroupChange"></a>

```python
proposed_network_function_group_change: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a>

The attachment to move from one network function group to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#proposed_network_function_group_change NetworkmanagerConnectAttachment#proposed_network_function_group_change}

---

##### `proposed_segment_change`<sup>Optional</sup> <a name="proposed_segment_change" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.proposedSegmentChange"></a>

```python
proposed_segment_change: NetworkmanagerConnectAttachmentProposedSegmentChange
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a>

The attachment to move from one segment to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#proposed_segment_change NetworkmanagerConnectAttachment#proposed_segment_change}

---

##### `routing_policy_label`<sup>Optional</sup> <a name="routing_policy_label" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.routingPolicyLabel"></a>

```python
routing_policy_label: str
```

- *Type:* str

Routing policy label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#routing_policy_label NetworkmanagerConnectAttachment#routing_policy_label}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkmanagerConnectAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>]

Tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}

---

### NetworkmanagerConnectAttachmentOptions <a name="NetworkmanagerConnectAttachmentOptions" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions(
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.property.protocol">protocol</a></code> | <code>str</code> | Tunnel protocol for connect attachment. |

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Tunnel protocol for connect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#protocol NetworkmanagerConnectAttachment#protocol}

---

### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange(
  attachment_policy_rule_number: typing.Union[int, float] = None,
  network_function_group_name: str = None,
  tags: IResolvable | typing.List[NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName">network_function_group_name</a></code> | <code>str</code> | The name of the network function group to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>]</code> | The key-value tags that changed for the network function group. |

---

##### `attachment_policy_rule_number`<sup>Optional</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#attachment_policy_rule_number NetworkmanagerConnectAttachment#attachment_policy_rule_number}

---

##### `network_function_group_name`<sup>Optional</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName"></a>

```python
network_function_group_name: str
```

- *Type:* str

The name of the network function group to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#network_function_group_name NetworkmanagerConnectAttachment#network_function_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>]

The key-value tags that changed for the network function group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}

---

### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#key NetworkmanagerConnectAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#value NetworkmanagerConnectAttachment#value}

---

### NetworkmanagerConnectAttachmentProposedSegmentChange <a name="NetworkmanagerConnectAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange(
  attachment_policy_rule_number: typing.Union[int, float] = None,
  segment_name: str = None,
  tags: IResolvable | typing.List[NetworkmanagerConnectAttachmentProposedSegmentChangeTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.segmentName">segment_name</a></code> | <code>str</code> | The name of the segment to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>]</code> | The list of key-value tags that changed for the segment. |

---

##### `attachment_policy_rule_number`<sup>Optional</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#attachment_policy_rule_number NetworkmanagerConnectAttachment#attachment_policy_rule_number}

---

##### `segment_name`<sup>Optional</sup> <a name="segment_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.segmentName"></a>

```python
segment_name: str
```

- *Type:* str

The name of the segment to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#segment_name NetworkmanagerConnectAttachment#segment_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkmanagerConnectAttachmentProposedSegmentChangeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>]

The list of key-value tags that changed for the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}

---

### NetworkmanagerConnectAttachmentProposedSegmentChangeTags <a name="NetworkmanagerConnectAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#key NetworkmanagerConnectAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#value NetworkmanagerConnectAttachment#value}

---

### NetworkmanagerConnectAttachmentTags <a name="NetworkmanagerConnectAttachmentTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#key NetworkmanagerConnectAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_attachment#value NetworkmanagerConnectAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerConnectAttachmentOptionsOutputReference <a name="NetworkmanagerConnectAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerConnectAttachmentOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

---


### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber">reset_attachment_policy_rule_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName">reset_network_function_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>]

---

##### `reset_attachment_policy_rule_number` <a name="reset_attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```python
def reset_attachment_policy_rule_number() -> None
```

##### `reset_network_function_group_name` <a name="reset_network_function_group_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName"></a>

```python
def reset_network_function_group_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachment_policy_rule_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput">network_function_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">network_function_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```python
tags: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `attachment_policy_rule_number_input`<sup>Optional</sup> <a name="attachment_policy_rule_number_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```python
attachment_policy_rule_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_function_group_name_input`<sup>Optional</sup> <a name="network_function_group_name_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput"></a>

```python
network_function_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>]

---

##### `attachment_policy_rule_number`<sup>Required</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_function_group_name`<sup>Required</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```python
network_function_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a>

---


### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>]

---


### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference <a name="NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber">reset_attachment_policy_rule_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetSegmentName">reset_segment_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkmanagerConnectAttachmentProposedSegmentChangeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>]

---

##### `reset_attachment_policy_rule_number` <a name="reset_attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```python
def reset_attachment_policy_rule_number() -> None
```

##### `reset_segment_name` <a name="reset_segment_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetSegmentName"></a>

```python
def reset_segment_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList">NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachment_policy_rule_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput">segment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.segmentName">segment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```python
tags: NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList">NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList</a>

---

##### `attachment_policy_rule_number_input`<sup>Optional</sup> <a name="attachment_policy_rule_number_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```python
attachment_policy_rule_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_name_input`<sup>Optional</sup> <a name="segment_name_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput"></a>

```python
segment_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkmanagerConnectAttachmentProposedSegmentChangeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>]

---

##### `attachment_policy_rule_number`<sup>Required</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_name`<sup>Required</sup> <a name="segment_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```python
segment_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerConnectAttachmentProposedSegmentChange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a>

---


### NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList <a name="NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkmanagerConnectAttachmentProposedSegmentChangeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>]

---


### NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference <a name="NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerConnectAttachmentProposedSegmentChangeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags">NetworkmanagerConnectAttachmentProposedSegmentChangeTags</a>

---


### NetworkmanagerConnectAttachmentTagsList <a name="NetworkmanagerConnectAttachmentTagsList" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkmanagerConnectAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkmanagerConnectAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>]

---


### NetworkmanagerConnectAttachmentTagsOutputReference <a name="NetworkmanagerConnectAttachmentTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_connect_attachment

networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerConnectAttachmentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags">NetworkmanagerConnectAttachmentTags</a>

---



