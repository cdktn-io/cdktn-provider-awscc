# `mediaconnectFlowEntitlement` Submodule <a name="`mediaconnectFlowEntitlement` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowEntitlement <a name="MediaconnectFlowEntitlement" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement awscc_mediaconnect_flow_entitlement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_entitlement

mediaconnectFlowEntitlement.MediaconnectFlowEntitlement(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  flow_arn: str,
  name: str,
  subscribers: typing.List[str],
  data_transfer_subscriber_fee_percent: typing.Union[int, float] = None,
  encryption: MediaconnectFlowEntitlementEncryption = None,
  entitlement_status: str = None,
  tags: IResolvable | typing.List[MediaconnectFlowEntitlementTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.flowArn">flow_arn</a></code> | <code>str</code> | The ARN of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.subscribers">subscribers</a></code> | <code>typing.List[str]</code> | The AWS account IDs that you want to share your content with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.dataTransferSubscriberFeePercent">data_transfer_subscriber_fee_percent</a></code> | <code>typing.Union[int, float]</code> | Percentage from 0-100 of the data transfer cost to be billed to the subscriber. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a></code> | The type of encryption that will be used on the output that is associated with this entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.entitlementStatus">entitlement_status</a></code> | <code>str</code> | An indication of whether the entitlement is enabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>]</code> | Key-value pairs that can be used to tag and organize this flow entitlement. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.description"></a>

- *Type:* str

A description of the entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#description MediaconnectFlowEntitlement#description}

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.flowArn"></a>

- *Type:* str

The ARN of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#flow_arn MediaconnectFlowEntitlement#flow_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.name"></a>

- *Type:* str

The name of the entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#name MediaconnectFlowEntitlement#name}

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.subscribers"></a>

- *Type:* typing.List[str]

The AWS account IDs that you want to share your content with.

The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#subscribers MediaconnectFlowEntitlement#subscribers}

---

##### `data_transfer_subscriber_fee_percent`<sup>Optional</sup> <a name="data_transfer_subscriber_fee_percent" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.dataTransferSubscriberFeePercent"></a>

- *Type:* typing.Union[int, float]

Percentage from 0-100 of the data transfer cost to be billed to the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#data_transfer_subscriber_fee_percent MediaconnectFlowEntitlement#data_transfer_subscriber_fee_percent}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

The type of encryption that will be used on the output that is associated with this entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#encryption MediaconnectFlowEntitlement#encryption}

---

##### `entitlement_status`<sup>Optional</sup> <a name="entitlement_status" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.entitlementStatus"></a>

- *Type:* str

An indication of whether the entitlement is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#entitlement_status MediaconnectFlowEntitlement#entitlement_status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>]

Key-value pairs that can be used to tag and organize this flow entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#tags MediaconnectFlowEntitlement#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetDataTransferSubscriberFeePercent">reset_data_transfer_subscriber_fee_percent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEntitlementStatus">reset_entitlement_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption"></a>

```python
def put_encryption(
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

###### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption.parameter.algorithm"></a>

- *Type:* str

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#algorithm MediaconnectFlowEntitlement#algorithm}

---

###### `constant_initialization_vector`<sup>Optional</sup> <a name="constant_initialization_vector" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption.parameter.constantInitializationVector"></a>

- *Type:* str

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#constant_initialization_vector MediaconnectFlowEntitlement#constant_initialization_vector}

---

###### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption.parameter.deviceId"></a>

- *Type:* str

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#device_id MediaconnectFlowEntitlement#device_id}

---

###### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption.parameter.keyType"></a>

- *Type:* str

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#key_type MediaconnectFlowEntitlement#key_type}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption.parameter.region"></a>

- *Type:* str

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#region MediaconnectFlowEntitlement#region}

---

###### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption.parameter.resourceId"></a>

- *Type:* str

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#resource_id MediaconnectFlowEntitlement#resource_id}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption.parameter.roleArn"></a>

- *Type:* str

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#role_arn MediaconnectFlowEntitlement#role_arn}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption.parameter.secretArn"></a>

- *Type:* str

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#secret_arn MediaconnectFlowEntitlement#secret_arn}

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption.parameter.url"></a>

- *Type:* str

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#url MediaconnectFlowEntitlement#url}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MediaconnectFlowEntitlementTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>]

---

##### `reset_data_transfer_subscriber_fee_percent` <a name="reset_data_transfer_subscriber_fee_percent" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetDataTransferSubscriberFeePercent"></a>

```python
def reset_data_transfer_subscriber_fee_percent() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_entitlement_status` <a name="reset_entitlement_status" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEntitlementStatus"></a>

```python
def reset_entitlement_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediaconnectFlowEntitlement resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isConstruct"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_entitlement

mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_entitlement

mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_entitlement

mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_entitlement

mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediaconnectFlowEntitlement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaconnectFlowEntitlement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaconnectFlowEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference">MediaconnectFlowEntitlementEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementArn">entitlement_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList">MediaconnectFlowEntitlementTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercentInput">data_transfer_subscriber_fee_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryptionInput">encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatusInput">entitlement_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArnInput">flow_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribersInput">subscribers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercent">data_transfer_subscriber_fee_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatus">entitlement_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArn">flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribers">subscribers</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryption"></a>

```python
encryption: MediaconnectFlowEntitlementEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference">MediaconnectFlowEntitlementEncryptionOutputReference</a>

---

##### `entitlement_arn`<sup>Required</sup> <a name="entitlement_arn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementArn"></a>

```python
entitlement_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tags"></a>

```python
tags: MediaconnectFlowEntitlementTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList">MediaconnectFlowEntitlementTagsList</a>

---

##### `data_transfer_subscriber_fee_percent_input`<sup>Optional</sup> <a name="data_transfer_subscriber_fee_percent_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercentInput"></a>

```python
data_transfer_subscriber_fee_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryptionInput"></a>

```python
encryption_input: IResolvable | MediaconnectFlowEntitlementEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

---

##### `entitlement_status_input`<sup>Optional</sup> <a name="entitlement_status_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatusInput"></a>

```python
entitlement_status_input: str
```

- *Type:* str

---

##### `flow_arn_input`<sup>Optional</sup> <a name="flow_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArnInput"></a>

```python
flow_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `subscribers_input`<sup>Optional</sup> <a name="subscribers_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribersInput"></a>

```python
subscribers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MediaconnectFlowEntitlementTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>]

---

##### `data_transfer_subscriber_fee_percent`<sup>Required</sup> <a name="data_transfer_subscriber_fee_percent" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercent"></a>

```python
data_transfer_subscriber_fee_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `entitlement_status`<sup>Required</sup> <a name="entitlement_status" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatus"></a>

```python
entitlement_status: str
```

- *Type:* str

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribers"></a>

```python
subscribers: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowEntitlementConfig <a name="MediaconnectFlowEntitlementConfig" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_entitlement

mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  flow_arn: str,
  name: str,
  subscribers: typing.List[str],
  data_transfer_subscriber_fee_percent: typing.Union[int, float] = None,
  encryption: MediaconnectFlowEntitlementEncryption = None,
  entitlement_status: str = None,
  tags: IResolvable | typing.List[MediaconnectFlowEntitlementTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.description">description</a></code> | <code>str</code> | A description of the entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.flowArn">flow_arn</a></code> | <code>str</code> | The ARN of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.name">name</a></code> | <code>str</code> | The name of the entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.subscribers">subscribers</a></code> | <code>typing.List[str]</code> | The AWS account IDs that you want to share your content with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dataTransferSubscriberFeePercent">data_transfer_subscriber_fee_percent</a></code> | <code>typing.Union[int, float]</code> | Percentage from 0-100 of the data transfer cost to be billed to the subscriber. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a></code> | The type of encryption that will be used on the output that is associated with this entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.entitlementStatus">entitlement_status</a></code> | <code>str</code> | An indication of whether the entitlement is enabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>]</code> | Key-value pairs that can be used to tag and organize this flow entitlement. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#description MediaconnectFlowEntitlement#description}

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

The ARN of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#flow_arn MediaconnectFlowEntitlement#flow_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#name MediaconnectFlowEntitlement#name}

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.subscribers"></a>

```python
subscribers: typing.List[str]
```

- *Type:* typing.List[str]

The AWS account IDs that you want to share your content with.

The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#subscribers MediaconnectFlowEntitlement#subscribers}

---

##### `data_transfer_subscriber_fee_percent`<sup>Optional</sup> <a name="data_transfer_subscriber_fee_percent" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dataTransferSubscriberFeePercent"></a>

```python
data_transfer_subscriber_fee_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Percentage from 0-100 of the data transfer cost to be billed to the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#data_transfer_subscriber_fee_percent MediaconnectFlowEntitlement#data_transfer_subscriber_fee_percent}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.encryption"></a>

```python
encryption: MediaconnectFlowEntitlementEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

The type of encryption that will be used on the output that is associated with this entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#encryption MediaconnectFlowEntitlement#encryption}

---

##### `entitlement_status`<sup>Optional</sup> <a name="entitlement_status" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.entitlementStatus"></a>

```python
entitlement_status: str
```

- *Type:* str

An indication of whether the entitlement is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#entitlement_status MediaconnectFlowEntitlement#entitlement_status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MediaconnectFlowEntitlementTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>]

Key-value pairs that can be used to tag and organize this flow entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#tags MediaconnectFlowEntitlement#tags}

---

### MediaconnectFlowEntitlementEncryption <a name="MediaconnectFlowEntitlementEncryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_entitlement

mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption(
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
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.algorithm">algorithm</a></code> | <code>str</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.constantInitializationVector">constant_initialization_vector</a></code> | <code>str</code> | A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.deviceId">device_id</a></code> | <code>str</code> | The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.keyType">key_type</a></code> | <code>str</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.region">region</a></code> | <code>str</code> | The AWS Region that the API Gateway proxy endpoint was created in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.resourceId">resource_id</a></code> | <code>str</code> | An identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.secretArn">secret_arn</a></code> | <code>str</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.url">url</a></code> | <code>str</code> | The URL from the API Gateway proxy that you set up to talk to your key server. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#algorithm MediaconnectFlowEntitlement#algorithm}

---

##### `constant_initialization_vector`<sup>Optional</sup> <a name="constant_initialization_vector" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.constantInitializationVector"></a>

```python
constant_initialization_vector: str
```

- *Type:* str

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#constant_initialization_vector MediaconnectFlowEntitlement#constant_initialization_vector}

---

##### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#device_id MediaconnectFlowEntitlement#device_id}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#key_type MediaconnectFlowEntitlement#key_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.region"></a>

```python
region: str
```

- *Type:* str

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#region MediaconnectFlowEntitlement#region}

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#resource_id MediaconnectFlowEntitlement#resource_id}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#role_arn MediaconnectFlowEntitlement#role_arn}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#secret_arn MediaconnectFlowEntitlement#secret_arn}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.url"></a>

```python
url: str
```

- *Type:* str

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#url MediaconnectFlowEntitlement#url}

---

### MediaconnectFlowEntitlementTags <a name="MediaconnectFlowEntitlementTags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_entitlement

mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#key MediaconnectFlowEntitlement#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#value MediaconnectFlowEntitlement#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#key MediaconnectFlowEntitlement#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#value MediaconnectFlowEntitlement#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowEntitlementEncryptionOutputReference <a name="MediaconnectFlowEntitlementEncryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_entitlement

mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetConstantInitializationVector">reset_constant_initialization_vector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetDeviceId">reset_device_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_constant_initialization_vector` <a name="reset_constant_initialization_vector" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetConstantInitializationVector"></a>

```python
def reset_constant_initialization_vector() -> None
```

##### `reset_device_id` <a name="reset_device_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetDeviceId"></a>

```python
def reset_device_id() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVectorInput">constant_initialization_vector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceIdInput">device_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVector">constant_initialization_vector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceId">device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `constant_initialization_vector_input`<sup>Optional</sup> <a name="constant_initialization_vector_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVectorInput"></a>

```python
constant_initialization_vector_input: str
```

- *Type:* str

---

##### `device_id_input`<sup>Optional</sup> <a name="device_id_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceIdInput"></a>

```python
device_id_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `constant_initialization_vector`<sup>Required</sup> <a name="constant_initialization_vector" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVector"></a>

```python
constant_initialization_vector: str
```

- *Type:* str

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowEntitlementEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

---


### MediaconnectFlowEntitlementTagsList <a name="MediaconnectFlowEntitlementTagsList" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_entitlement

mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectFlowEntitlementTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectFlowEntitlementTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>]

---


### MediaconnectFlowEntitlementTagsOutputReference <a name="MediaconnectFlowEntitlementTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_entitlement

mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowEntitlementTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>

---



