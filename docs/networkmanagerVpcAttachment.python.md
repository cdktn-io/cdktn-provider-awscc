# `networkmanagerVpcAttachment` Submodule <a name="`networkmanagerVpcAttachment` Submodule" id="@cdktn/provider-awscc.networkmanagerVpcAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerVpcAttachment <a name="NetworkmanagerVpcAttachment" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment awscc_networkmanager_vpc_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachment(
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
  subnet_arns: typing.List[str],
  vpc_arn: str,
  options: NetworkmanagerVpcAttachmentOptions = None,
  proposed_network_function_group_change: NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange = None,
  proposed_segment_change: NetworkmanagerVpcAttachmentProposedSegmentChange = None,
  routing_policy_label: str = None,
  tags: IResolvable | typing.List[NetworkmanagerVpcAttachmentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.coreNetworkId">core_network_id</a></code> | <code>str</code> | The ID of a core network for the VPC attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.subnetArns">subnet_arns</a></code> | <code>typing.List[str]</code> | Subnet Arn list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.vpcArn">vpc_arn</a></code> | <code>str</code> | The ARN of the VPC. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | Vpc options of the attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.proposedNetworkFunctionGroupChange">proposed_network_function_group_change</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a></code> | The attachment to move from one network function group to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.proposedSegmentChange">proposed_segment_change</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a></code> | The attachment to move from one segment to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.routingPolicyLabel">routing_policy_label</a></code> | <code>str</code> | Routing policy label. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>]</code> | Tags for the attachment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.coreNetworkId"></a>

- *Type:* str

The ID of a core network for the VPC attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}

---

##### `subnet_arns`<sup>Required</sup> <a name="subnet_arns" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.subnetArns"></a>

- *Type:* typing.List[str]

Subnet Arn list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}

---

##### `vpc_arn`<sup>Required</sup> <a name="vpc_arn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.vpcArn"></a>

- *Type:* str

The ARN of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

Vpc options of the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#options NetworkmanagerVpcAttachment#options}

---

##### `proposed_network_function_group_change`<sup>Optional</sup> <a name="proposed_network_function_group_change" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.proposedNetworkFunctionGroupChange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

The attachment to move from one network function group to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#proposed_network_function_group_change NetworkmanagerVpcAttachment#proposed_network_function_group_change}

---

##### `proposed_segment_change`<sup>Optional</sup> <a name="proposed_segment_change" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.proposedSegmentChange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a>

The attachment to move from one segment to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#proposed_segment_change NetworkmanagerVpcAttachment#proposed_segment_change}

---

##### `routing_policy_label`<sup>Optional</sup> <a name="routing_policy_label" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.routingPolicyLabel"></a>

- *Type:* str

Routing policy label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#routing_policy_label NetworkmanagerVpcAttachment#routing_policy_label}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>]

Tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedNetworkFunctionGroupChange">put_proposed_network_function_group_change</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedSegmentChange">put_proposed_segment_change</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetProposedNetworkFunctionGroupChange">reset_proposed_network_function_group_change</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetProposedSegmentChange">reset_proposed_segment_change</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetRoutingPolicyLabel">reset_routing_policy_label</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_options` <a name="put_options" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions"></a>

```python
def put_options(
  appliance_mode_support: bool | IResolvable = None,
  dns_support: bool | IResolvable = None,
  ipv6_support: bool | IResolvable = None,
  security_group_referencing_support: bool | IResolvable = None
) -> None
```

###### `appliance_mode_support`<sup>Optional</sup> <a name="appliance_mode_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions.parameter.applianceModeSupport"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable ApplianceModeSupport Support for Vpc Attachment. Valid Values: true | false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#appliance_mode_support NetworkmanagerVpcAttachment#appliance_mode_support}

---

###### `dns_support`<sup>Optional</sup> <a name="dns_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions.parameter.dnsSupport"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable private DNS Support for Vpc Attachment. Valid Values: true | false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#dns_support NetworkmanagerVpcAttachment#dns_support}

---

###### `ipv6_support`<sup>Optional</sup> <a name="ipv6_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions.parameter.ipv6Support"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#ipv_6_support NetworkmanagerVpcAttachment#ipv_6_support}

---

###### `security_group_referencing_support`<sup>Optional</sup> <a name="security_group_referencing_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions.parameter.securityGroupReferencingSupport"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable Security Group Referencing Support for Vpc Attachment. Valid Values: true | false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#security_group_referencing_support NetworkmanagerVpcAttachment#security_group_referencing_support}

---

##### `put_proposed_network_function_group_change` <a name="put_proposed_network_function_group_change" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedNetworkFunctionGroupChange"></a>

```python
def put_proposed_network_function_group_change(
  attachment_policy_rule_number: typing.Union[int, float] = None,
  network_function_group_name: str = None,
  tags: IResolvable | typing.List[NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags] = None
) -> None
```

###### `attachment_policy_rule_number`<sup>Optional</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedNetworkFunctionGroupChange.parameter.attachmentPolicyRuleNumber"></a>

- *Type:* typing.Union[int, float]

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#attachment_policy_rule_number NetworkmanagerVpcAttachment#attachment_policy_rule_number}

---

###### `network_function_group_name`<sup>Optional</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedNetworkFunctionGroupChange.parameter.networkFunctionGroupName"></a>

- *Type:* str

The name of the network function group to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#network_function_group_name NetworkmanagerVpcAttachment#network_function_group_name}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedNetworkFunctionGroupChange.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>]

The key-value tags that changed for the network function group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}

---

##### `put_proposed_segment_change` <a name="put_proposed_segment_change" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedSegmentChange"></a>

```python
def put_proposed_segment_change(
  attachment_policy_rule_number: typing.Union[int, float] = None,
  segment_name: str = None,
  tags: IResolvable | typing.List[NetworkmanagerVpcAttachmentProposedSegmentChangeTags] = None
) -> None
```

###### `attachment_policy_rule_number`<sup>Optional</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedSegmentChange.parameter.attachmentPolicyRuleNumber"></a>

- *Type:* typing.Union[int, float]

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#attachment_policy_rule_number NetworkmanagerVpcAttachment#attachment_policy_rule_number}

---

###### `segment_name`<sup>Optional</sup> <a name="segment_name" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedSegmentChange.parameter.segmentName"></a>

- *Type:* str

The name of the segment to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#segment_name NetworkmanagerVpcAttachment#segment_name}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedSegmentChange.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>]

The key-value tags that changed for the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkmanagerVpcAttachmentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>]

---

##### `reset_options` <a name="reset_options" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_proposed_network_function_group_change` <a name="reset_proposed_network_function_group_change" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetProposedNetworkFunctionGroupChange"></a>

```python
def reset_proposed_network_function_group_change() -> None
```

##### `reset_proposed_segment_change` <a name="reset_proposed_segment_change" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetProposedSegmentChange"></a>

```python
def reset_proposed_segment_change() -> None
```

##### `reset_routing_policy_label` <a name="reset_routing_policy_label" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetRoutingPolicyLabel"></a>

```python
def reset_routing_policy_label() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkmanagerVpcAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkmanagerVpcAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkmanagerVpcAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkmanagerVpcAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerVpcAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentId">attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.edgeLocation">edge_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lastModificationErrors">last_modification_errors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.networkFunctionGroupName">network_function_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference">NetworkmanagerVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChange">proposed_network_function_group_change</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedSegmentChange">proposed_segment_change</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference">NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.segmentName">segment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList">NetworkmanagerVpcAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkIdInput">core_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.optionsInput">options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChangeInput">proposed_network_function_group_change_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedSegmentChangeInput">proposed_segment_change_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabelInput">routing_policy_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArnsInput">subnet_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArnInput">vpc_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabel">routing_policy_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArns">subnet_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArn">vpc_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

---

##### `attachment_policy_rule_number`<sup>Required</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `edge_location`<sup>Required</sup> <a name="edge_location" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.edgeLocation"></a>

```python
edge_location: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modification_errors`<sup>Required</sup> <a name="last_modification_errors" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lastModificationErrors"></a>

```python
last_modification_errors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_function_group_name`<sup>Required</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.networkFunctionGroupName"></a>

```python
network_function_group_name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.options"></a>

```python
options: NetworkmanagerVpcAttachmentOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference">NetworkmanagerVpcAttachmentOptionsOutputReference</a>

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `proposed_network_function_group_change`<sup>Required</sup> <a name="proposed_network_function_group_change" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChange"></a>

```python
proposed_network_function_group_change: NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `proposed_segment_change`<sup>Required</sup> <a name="proposed_segment_change" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedSegmentChange"></a>

```python
proposed_segment_change: NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference">NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference</a>

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `segment_name`<sup>Required</sup> <a name="segment_name" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.segmentName"></a>

```python
segment_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tags"></a>

```python
tags: NetworkmanagerVpcAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList">NetworkmanagerVpcAttachmentTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `core_network_id_input`<sup>Optional</sup> <a name="core_network_id_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkIdInput"></a>

```python
core_network_id_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.optionsInput"></a>

```python
options_input: IResolvable | NetworkmanagerVpcAttachmentOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---

##### `proposed_network_function_group_change_input`<sup>Optional</sup> <a name="proposed_network_function_group_change_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChangeInput"></a>

```python
proposed_network_function_group_change_input: IResolvable | NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `proposed_segment_change_input`<sup>Optional</sup> <a name="proposed_segment_change_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedSegmentChangeInput"></a>

```python
proposed_segment_change_input: IResolvable | NetworkmanagerVpcAttachmentProposedSegmentChange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a>

---

##### `routing_policy_label_input`<sup>Optional</sup> <a name="routing_policy_label_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabelInput"></a>

```python
routing_policy_label_input: str
```

- *Type:* str

---

##### `subnet_arns_input`<sup>Optional</sup> <a name="subnet_arns_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArnsInput"></a>

```python
subnet_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkmanagerVpcAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>]

---

##### `vpc_arn_input`<sup>Optional</sup> <a name="vpc_arn_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArnInput"></a>

```python
vpc_arn_input: str
```

- *Type:* str

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

---

##### `routing_policy_label`<sup>Required</sup> <a name="routing_policy_label" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabel"></a>

```python
routing_policy_label: str
```

- *Type:* str

---

##### `subnet_arns`<sup>Required</sup> <a name="subnet_arns" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArns"></a>

```python
subnet_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_arn`<sup>Required</sup> <a name="vpc_arn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArn"></a>

```python
vpc_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerVpcAttachmentConfig <a name="NetworkmanagerVpcAttachmentConfig" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  core_network_id: str,
  subnet_arns: typing.List[str],
  vpc_arn: str,
  options: NetworkmanagerVpcAttachmentOptions = None,
  proposed_network_function_group_change: NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange = None,
  proposed_segment_change: NetworkmanagerVpcAttachmentProposedSegmentChange = None,
  routing_policy_label: str = None,
  tags: IResolvable | typing.List[NetworkmanagerVpcAttachmentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | The ID of a core network for the VPC attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.subnetArns">subnet_arns</a></code> | <code>typing.List[str]</code> | Subnet Arn list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.vpcArn">vpc_arn</a></code> | <code>str</code> | The ARN of the VPC. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | Vpc options of the attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.proposedNetworkFunctionGroupChange">proposed_network_function_group_change</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a></code> | The attachment to move from one network function group to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.proposedSegmentChange">proposed_segment_change</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a></code> | The attachment to move from one segment to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.routingPolicyLabel">routing_policy_label</a></code> | <code>str</code> | Routing policy label. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>]</code> | Tags for the attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

The ID of a core network for the VPC attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}

---

##### `subnet_arns`<sup>Required</sup> <a name="subnet_arns" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.subnetArns"></a>

```python
subnet_arns: typing.List[str]
```

- *Type:* typing.List[str]

Subnet Arn list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}

---

##### `vpc_arn`<sup>Required</sup> <a name="vpc_arn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.vpcArn"></a>

```python
vpc_arn: str
```

- *Type:* str

The ARN of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.options"></a>

```python
options: NetworkmanagerVpcAttachmentOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

Vpc options of the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#options NetworkmanagerVpcAttachment#options}

---

##### `proposed_network_function_group_change`<sup>Optional</sup> <a name="proposed_network_function_group_change" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.proposedNetworkFunctionGroupChange"></a>

```python
proposed_network_function_group_change: NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

The attachment to move from one network function group to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#proposed_network_function_group_change NetworkmanagerVpcAttachment#proposed_network_function_group_change}

---

##### `proposed_segment_change`<sup>Optional</sup> <a name="proposed_segment_change" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.proposedSegmentChange"></a>

```python
proposed_segment_change: NetworkmanagerVpcAttachmentProposedSegmentChange
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a>

The attachment to move from one segment to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#proposed_segment_change NetworkmanagerVpcAttachment#proposed_segment_change}

---

##### `routing_policy_label`<sup>Optional</sup> <a name="routing_policy_label" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.routingPolicyLabel"></a>

```python
routing_policy_label: str
```

- *Type:* str

Routing policy label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#routing_policy_label NetworkmanagerVpcAttachment#routing_policy_label}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkmanagerVpcAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>]

Tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}

---

### NetworkmanagerVpcAttachmentOptions <a name="NetworkmanagerVpcAttachmentOptions" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions(
  appliance_mode_support: bool | IResolvable = None,
  dns_support: bool | IResolvable = None,
  ipv6_support: bool | IResolvable = None,
  security_group_referencing_support: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.applianceModeSupport">appliance_mode_support</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable ApplianceModeSupport Support for Vpc Attachment. Valid Values: true \| false. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.dnsSupport">dns_support</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable private DNS Support for Vpc Attachment. Valid Values: true \| false. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.ipv6Support">ipv6_support</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable \| disable. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.securityGroupReferencingSupport">security_group_referencing_support</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable Security Group Referencing Support for Vpc Attachment. Valid Values: true \| false. |

---

##### `appliance_mode_support`<sup>Optional</sup> <a name="appliance_mode_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.applianceModeSupport"></a>

```python
appliance_mode_support: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable ApplianceModeSupport Support for Vpc Attachment. Valid Values: true | false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#appliance_mode_support NetworkmanagerVpcAttachment#appliance_mode_support}

---

##### `dns_support`<sup>Optional</sup> <a name="dns_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.dnsSupport"></a>

```python
dns_support: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable private DNS Support for Vpc Attachment. Valid Values: true | false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#dns_support NetworkmanagerVpcAttachment#dns_support}

---

##### `ipv6_support`<sup>Optional</sup> <a name="ipv6_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.ipv6Support"></a>

```python
ipv6_support: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#ipv_6_support NetworkmanagerVpcAttachment#ipv_6_support}

---

##### `security_group_referencing_support`<sup>Optional</sup> <a name="security_group_referencing_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.securityGroupReferencingSupport"></a>

```python
security_group_referencing_support: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable Security Group Referencing Support for Vpc Attachment. Valid Values: true | false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#security_group_referencing_support NetworkmanagerVpcAttachment#security_group_referencing_support}

---

### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange(
  attachment_policy_rule_number: typing.Union[int, float] = None,
  network_function_group_name: str = None,
  tags: IResolvable | typing.List[NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName">network_function_group_name</a></code> | <code>str</code> | The name of the network function group to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>]</code> | The key-value tags that changed for the network function group. |

---

##### `attachment_policy_rule_number`<sup>Optional</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#attachment_policy_rule_number NetworkmanagerVpcAttachment#attachment_policy_rule_number}

---

##### `network_function_group_name`<sup>Optional</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName"></a>

```python
network_function_group_name: str
```

- *Type:* str

The name of the network function group to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#network_function_group_name NetworkmanagerVpcAttachment#network_function_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>]

The key-value tags that changed for the network function group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}

---

### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#key NetworkmanagerVpcAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#value NetworkmanagerVpcAttachment#value}

---

### NetworkmanagerVpcAttachmentProposedSegmentChange <a name="NetworkmanagerVpcAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange(
  attachment_policy_rule_number: typing.Union[int, float] = None,
  segment_name: str = None,
  tags: IResolvable | typing.List[NetworkmanagerVpcAttachmentProposedSegmentChangeTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.segmentName">segment_name</a></code> | <code>str</code> | The name of the segment to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>]</code> | The key-value tags that changed for the segment. |

---

##### `attachment_policy_rule_number`<sup>Optional</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#attachment_policy_rule_number NetworkmanagerVpcAttachment#attachment_policy_rule_number}

---

##### `segment_name`<sup>Optional</sup> <a name="segment_name" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.segmentName"></a>

```python
segment_name: str
```

- *Type:* str

The name of the segment to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#segment_name NetworkmanagerVpcAttachment#segment_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkmanagerVpcAttachmentProposedSegmentChangeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>]

The key-value tags that changed for the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}

---

### NetworkmanagerVpcAttachmentProposedSegmentChangeTags <a name="NetworkmanagerVpcAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#key NetworkmanagerVpcAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#value NetworkmanagerVpcAttachment#value}

---

### NetworkmanagerVpcAttachmentTags <a name="NetworkmanagerVpcAttachmentTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#key NetworkmanagerVpcAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#value NetworkmanagerVpcAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerVpcAttachmentOptionsOutputReference <a name="NetworkmanagerVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetApplianceModeSupport">reset_appliance_mode_support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetDnsSupport">reset_dns_support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetIpv6Support">reset_ipv6_support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport">reset_security_group_referencing_support</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_appliance_mode_support` <a name="reset_appliance_mode_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetApplianceModeSupport"></a>

```python
def reset_appliance_mode_support() -> None
```

##### `reset_dns_support` <a name="reset_dns_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetDnsSupport"></a>

```python
def reset_dns_support() -> None
```

##### `reset_ipv6_support` <a name="reset_ipv6_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetIpv6Support"></a>

```python
def reset_ipv6_support() -> None
```

##### `reset_security_group_referencing_support` <a name="reset_security_group_referencing_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport"></a>

```python
def reset_security_group_referencing_support() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput">appliance_mode_support_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupportInput">dns_support_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6SupportInput">ipv6_support_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput">security_group_referencing_support_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport">appliance_mode_support</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupport">dns_support</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support">ipv6_support</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport">security_group_referencing_support</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `appliance_mode_support_input`<sup>Optional</sup> <a name="appliance_mode_support_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput"></a>

```python
appliance_mode_support_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dns_support_input`<sup>Optional</sup> <a name="dns_support_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupportInput"></a>

```python
dns_support_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ipv6_support_input`<sup>Optional</sup> <a name="ipv6_support_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6SupportInput"></a>

```python
ipv6_support_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_referencing_support_input`<sup>Optional</sup> <a name="security_group_referencing_support_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput"></a>

```python
security_group_referencing_support_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `appliance_mode_support`<sup>Required</sup> <a name="appliance_mode_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport"></a>

```python
appliance_mode_support: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dns_support`<sup>Required</sup> <a name="dns_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupport"></a>

```python
dns_support: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ipv6_support`<sup>Required</sup> <a name="ipv6_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support"></a>

```python
ipv6_support: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_referencing_support`<sup>Required</sup> <a name="security_group_referencing_support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport"></a>

```python
security_group_referencing_support: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerVpcAttachmentOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---


### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber">reset_attachment_policy_rule_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName">reset_network_function_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>]

---

##### `reset_attachment_policy_rule_number` <a name="reset_attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```python
def reset_attachment_policy_rule_number() -> None
```

##### `reset_network_function_group_name` <a name="reset_network_function_group_name" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName"></a>

```python
def reset_network_function_group_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachment_policy_rule_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput">network_function_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">network_function_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```python
tags: NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `attachment_policy_rule_number_input`<sup>Optional</sup> <a name="attachment_policy_rule_number_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```python
attachment_policy_rule_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_function_group_name_input`<sup>Optional</sup> <a name="network_function_group_name_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput"></a>

```python
network_function_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>]

---

##### `attachment_policy_rule_number`<sup>Required</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_function_group_name`<sup>Required</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```python
network_function_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

---


### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>]

---


### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference <a name="NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber">reset_attachment_policy_rule_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetSegmentName">reset_segment_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkmanagerVpcAttachmentProposedSegmentChangeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>]

---

##### `reset_attachment_policy_rule_number` <a name="reset_attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```python
def reset_attachment_policy_rule_number() -> None
```

##### `reset_segment_name` <a name="reset_segment_name" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetSegmentName"></a>

```python
def reset_segment_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList">NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachment_policy_rule_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput">segment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentName">segment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```python
tags: NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList">NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList</a>

---

##### `attachment_policy_rule_number_input`<sup>Optional</sup> <a name="attachment_policy_rule_number_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```python
attachment_policy_rule_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_name_input`<sup>Optional</sup> <a name="segment_name_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput"></a>

```python
segment_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkmanagerVpcAttachmentProposedSegmentChangeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>]

---

##### `attachment_policy_rule_number`<sup>Required</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_name`<sup>Required</sup> <a name="segment_name" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```python
segment_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerVpcAttachmentProposedSegmentChange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a>

---


### NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList <a name="NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkmanagerVpcAttachmentProposedSegmentChangeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>]

---


### NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference <a name="NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerVpcAttachmentProposedSegmentChangeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>

---


### NetworkmanagerVpcAttachmentTagsList <a name="NetworkmanagerVpcAttachmentTagsList" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkmanagerVpcAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkmanagerVpcAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>]

---


### NetworkmanagerVpcAttachmentTagsOutputReference <a name="NetworkmanagerVpcAttachmentTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerVpcAttachmentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>

---



