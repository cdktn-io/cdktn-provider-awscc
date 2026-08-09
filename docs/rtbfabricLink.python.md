# `rtbfabricLink` Submodule <a name="`rtbfabricLink` Submodule" id="@cdktn/provider-awscc.rtbfabricLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricLink <a name="RtbfabricLink" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link awscc_rtbfabric_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLink(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gateway_id: str,
  link_log_settings: RtbfabricLinkLinkLogSettings,
  peer_gateway_id: str,
  http_responder_allowed: bool | IResolvable = None,
  link_attributes: RtbfabricLinkLinkAttributes = None,
  module_configuration_list: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListStruct] = None,
  tags: IResolvable | typing.List[RtbfabricLinkTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#gateway_id RtbfabricLink#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.linkLogSettings">link_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#link_log_settings RtbfabricLink#link_log_settings}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.peerGatewayId">peer_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#peer_gateway_id RtbfabricLink#peer_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.httpResponderAllowed">http_responder_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#http_responder_allowed RtbfabricLink#http_responder_allowed}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.linkAttributes">link_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#link_attributes RtbfabricLink#link_attributes}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.moduleConfigurationList">module_configuration_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#module_configuration_list RtbfabricLink#module_configuration_list}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>]</code> | Tags to assign to the Link. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.gatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#gateway_id RtbfabricLink#gateway_id}.

---

##### `link_log_settings`<sup>Required</sup> <a name="link_log_settings" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.linkLogSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#link_log_settings RtbfabricLink#link_log_settings}.

---

##### `peer_gateway_id`<sup>Required</sup> <a name="peer_gateway_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.peerGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#peer_gateway_id RtbfabricLink#peer_gateway_id}.

---

##### `http_responder_allowed`<sup>Optional</sup> <a name="http_responder_allowed" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.httpResponderAllowed"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#http_responder_allowed RtbfabricLink#http_responder_allowed}.

---

##### `link_attributes`<sup>Optional</sup> <a name="link_attributes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.linkAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#link_attributes RtbfabricLink#link_attributes}.

---

##### `module_configuration_list`<sup>Optional</sup> <a name="module_configuration_list" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.moduleConfigurationList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#module_configuration_list RtbfabricLink#module_configuration_list}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>]

Tags to assign to the Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#tags RtbfabricLink#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putLinkAttributes">put_link_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putLinkLogSettings">put_link_log_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putModuleConfigurationList">put_module_configuration_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetHttpResponderAllowed">reset_http_responder_allowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetLinkAttributes">reset_link_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetModuleConfigurationList">reset_module_configuration_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_link_attributes` <a name="put_link_attributes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putLinkAttributes"></a>

```python
def put_link_attributes(
  customer_provided_id: str = None,
  responder_error_masking: IResolvable | typing.List[RtbfabricLinkLinkAttributesResponderErrorMasking] = None
) -> None
```

###### `customer_provided_id`<sup>Optional</sup> <a name="customer_provided_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putLinkAttributes.parameter.customerProvidedId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#customer_provided_id RtbfabricLink#customer_provided_id}.

---

###### `responder_error_masking`<sup>Optional</sup> <a name="responder_error_masking" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putLinkAttributes.parameter.responderErrorMasking"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#responder_error_masking RtbfabricLink#responder_error_masking}.

---

##### `put_link_log_settings` <a name="put_link_log_settings" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putLinkLogSettings"></a>

```python
def put_link_log_settings(
  application_logs: RtbfabricLinkLinkLogSettingsApplicationLogs
) -> None
```

###### `application_logs`<sup>Required</sup> <a name="application_logs" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putLinkLogSettings.parameter.applicationLogs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#application_logs RtbfabricLink#application_logs}.

---

##### `put_module_configuration_list` <a name="put_module_configuration_list" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putModuleConfigurationList"></a>

```python
def put_module_configuration_list(
  value: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putModuleConfigurationList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RtbfabricLinkTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>]

---

##### `reset_http_responder_allowed` <a name="reset_http_responder_allowed" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetHttpResponderAllowed"></a>

```python
def reset_http_responder_allowed() -> None
```

##### `reset_link_attributes` <a name="reset_link_attributes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetLinkAttributes"></a>

```python
def reset_link_attributes() -> None
```

##### `reset_module_configuration_list` <a name="reset_module_configuration_list" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetModuleConfigurationList"></a>

```python
def reset_module_configuration_list() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RtbfabricLink resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isConstruct"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RtbfabricLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RtbfabricLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RtbfabricLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkAttributes">link_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference">RtbfabricLinkLinkAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkDirection">link_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkId">link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkLogSettings">link_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference">RtbfabricLinkLinkLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkStatus">link_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.moduleConfigurationList">module_configuration_list</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList">RtbfabricLinkModuleConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList">RtbfabricLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.updatedTimestamp">updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.httpResponderAllowedInput">http_responder_allowed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkAttributesInput">link_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkLogSettingsInput">link_log_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.moduleConfigurationListInput">module_configuration_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.peerGatewayIdInput">peer_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.httpResponderAllowed">http_responder_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.peerGatewayId">peer_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `link_attributes`<sup>Required</sup> <a name="link_attributes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkAttributes"></a>

```python
link_attributes: RtbfabricLinkLinkAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference">RtbfabricLinkLinkAttributesOutputReference</a>

---

##### `link_direction`<sup>Required</sup> <a name="link_direction" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkDirection"></a>

```python
link_direction: str
```

- *Type:* str

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

---

##### `link_log_settings`<sup>Required</sup> <a name="link_log_settings" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkLogSettings"></a>

```python
link_log_settings: RtbfabricLinkLinkLogSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference">RtbfabricLinkLinkLogSettingsOutputReference</a>

---

##### `link_status`<sup>Required</sup> <a name="link_status" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkStatus"></a>

```python
link_status: str
```

- *Type:* str

---

##### `module_configuration_list`<sup>Required</sup> <a name="module_configuration_list" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.moduleConfigurationList"></a>

```python
module_configuration_list: RtbfabricLinkModuleConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList">RtbfabricLinkModuleConfigurationListStructList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.tags"></a>

```python
tags: RtbfabricLinkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList">RtbfabricLinkTagsList</a>

---

##### `updated_timestamp`<sup>Required</sup> <a name="updated_timestamp" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.updatedTimestamp"></a>

```python
updated_timestamp: str
```

- *Type:* str

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `http_responder_allowed_input`<sup>Optional</sup> <a name="http_responder_allowed_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.httpResponderAllowedInput"></a>

```python
http_responder_allowed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `link_attributes_input`<sup>Optional</sup> <a name="link_attributes_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkAttributesInput"></a>

```python
link_attributes_input: IResolvable | RtbfabricLinkLinkAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a>

---

##### `link_log_settings_input`<sup>Optional</sup> <a name="link_log_settings_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkLogSettingsInput"></a>

```python
link_log_settings_input: IResolvable | RtbfabricLinkLinkLogSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a>

---

##### `module_configuration_list_input`<sup>Optional</sup> <a name="module_configuration_list_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.moduleConfigurationListInput"></a>

```python
module_configuration_list_input: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>]

---

##### `peer_gateway_id_input`<sup>Optional</sup> <a name="peer_gateway_id_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.peerGatewayIdInput"></a>

```python
peer_gateway_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RtbfabricLinkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `http_responder_allowed`<sup>Required</sup> <a name="http_responder_allowed" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.httpResponderAllowed"></a>

```python
http_responder_allowed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `peer_gateway_id`<sup>Required</sup> <a name="peer_gateway_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.peerGatewayId"></a>

```python
peer_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricLinkConfig <a name="RtbfabricLinkConfig" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gateway_id: str,
  link_log_settings: RtbfabricLinkLinkLogSettings,
  peer_gateway_id: str,
  http_responder_allowed: bool | IResolvable = None,
  link_attributes: RtbfabricLinkLinkAttributes = None,
  module_configuration_list: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListStruct] = None,
  tags: IResolvable | typing.List[RtbfabricLinkTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#gateway_id RtbfabricLink#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.linkLogSettings">link_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#link_log_settings RtbfabricLink#link_log_settings}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.peerGatewayId">peer_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#peer_gateway_id RtbfabricLink#peer_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.httpResponderAllowed">http_responder_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#http_responder_allowed RtbfabricLink#http_responder_allowed}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.linkAttributes">link_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#link_attributes RtbfabricLink#link_attributes}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.moduleConfigurationList">module_configuration_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#module_configuration_list RtbfabricLink#module_configuration_list}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>]</code> | Tags to assign to the Link. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#gateway_id RtbfabricLink#gateway_id}.

---

##### `link_log_settings`<sup>Required</sup> <a name="link_log_settings" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.linkLogSettings"></a>

```python
link_log_settings: RtbfabricLinkLinkLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#link_log_settings RtbfabricLink#link_log_settings}.

---

##### `peer_gateway_id`<sup>Required</sup> <a name="peer_gateway_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.peerGatewayId"></a>

```python
peer_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#peer_gateway_id RtbfabricLink#peer_gateway_id}.

---

##### `http_responder_allowed`<sup>Optional</sup> <a name="http_responder_allowed" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.httpResponderAllowed"></a>

```python
http_responder_allowed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#http_responder_allowed RtbfabricLink#http_responder_allowed}.

---

##### `link_attributes`<sup>Optional</sup> <a name="link_attributes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.linkAttributes"></a>

```python
link_attributes: RtbfabricLinkLinkAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#link_attributes RtbfabricLink#link_attributes}.

---

##### `module_configuration_list`<sup>Optional</sup> <a name="module_configuration_list" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.moduleConfigurationList"></a>

```python
module_configuration_list: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#module_configuration_list RtbfabricLink#module_configuration_list}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RtbfabricLinkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>]

Tags to assign to the Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#tags RtbfabricLink#tags}

---

### RtbfabricLinkLinkAttributes <a name="RtbfabricLinkLinkAttributes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkLinkAttributes(
  customer_provided_id: str = None,
  responder_error_masking: IResolvable | typing.List[RtbfabricLinkLinkAttributesResponderErrorMasking] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes.property.customerProvidedId">customer_provided_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#customer_provided_id RtbfabricLink#customer_provided_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes.property.responderErrorMasking">responder_error_masking</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#responder_error_masking RtbfabricLink#responder_error_masking}. |

---

##### `customer_provided_id`<sup>Optional</sup> <a name="customer_provided_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes.property.customerProvidedId"></a>

```python
customer_provided_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#customer_provided_id RtbfabricLink#customer_provided_id}.

---

##### `responder_error_masking`<sup>Optional</sup> <a name="responder_error_masking" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes.property.responderErrorMasking"></a>

```python
responder_error_masking: IResolvable | typing.List[RtbfabricLinkLinkAttributesResponderErrorMasking]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#responder_error_masking RtbfabricLink#responder_error_masking}.

---

### RtbfabricLinkLinkAttributesResponderErrorMasking <a name="RtbfabricLinkLinkAttributesResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking(
  action: str = None,
  http_code: str = None,
  logging_types: typing.List[str] = None,
  response_logging_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#action RtbfabricLink#action}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.httpCode">http_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#http_code RtbfabricLink#http_code}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.loggingTypes">logging_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#logging_types RtbfabricLink#logging_types}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage">response_logging_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#response_logging_percentage RtbfabricLink#response_logging_percentage}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#action RtbfabricLink#action}.

---

##### `http_code`<sup>Optional</sup> <a name="http_code" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.httpCode"></a>

```python
http_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#http_code RtbfabricLink#http_code}.

---

##### `logging_types`<sup>Optional</sup> <a name="logging_types" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.loggingTypes"></a>

```python
logging_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#logging_types RtbfabricLink#logging_types}.

---

##### `response_logging_percentage`<sup>Optional</sup> <a name="response_logging_percentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage"></a>

```python
response_logging_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#response_logging_percentage RtbfabricLink#response_logging_percentage}.

---

### RtbfabricLinkLinkLogSettings <a name="RtbfabricLinkLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkLinkLogSettings(
  application_logs: RtbfabricLinkLinkLogSettingsApplicationLogs
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings.property.applicationLogs">application_logs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#application_logs RtbfabricLink#application_logs}. |

---

##### `application_logs`<sup>Required</sup> <a name="application_logs" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings.property.applicationLogs"></a>

```python
application_logs: RtbfabricLinkLinkLogSettingsApplicationLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#application_logs RtbfabricLink#application_logs}.

---

### RtbfabricLinkLinkLogSettingsApplicationLogs <a name="RtbfabricLinkLinkLogSettingsApplicationLogs" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs(
  link_application_log_sampling: RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling">link_application_log_sampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#link_application_log_sampling RtbfabricLink#link_application_log_sampling}. |

---

##### `link_application_log_sampling`<sup>Required</sup> <a name="link_application_log_sampling" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling"></a>

```python
link_application_log_sampling: RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#link_application_log_sampling RtbfabricLink#link_application_log_sampling}.

---

### RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling <a name="RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling(
  error_log: typing.Union[int, float],
  filter_log: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog">error_log</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#error_log RtbfabricLink#error_log}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog">filter_log</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#filter_log RtbfabricLink#filter_log}. |

---

##### `error_log`<sup>Required</sup> <a name="error_log" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog"></a>

```python
error_log: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#error_log RtbfabricLink#error_log}.

---

##### `filter_log`<sup>Required</sup> <a name="filter_log" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog"></a>

```python
filter_log: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#filter_log RtbfabricLink#filter_log}.

---

### RtbfabricLinkModuleConfigurationListModuleParameters <a name="RtbfabricLinkModuleConfigurationListModuleParameters" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters(
  no_bid: RtbfabricLinkModuleConfigurationListModuleParametersNoBid = None,
  open_rtb_attribute: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters.property.noBid">no_bid</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#no_bid RtbfabricLink#no_bid}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters.property.openRtbAttribute">open_rtb_attribute</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#open_rtb_attribute RtbfabricLink#open_rtb_attribute}. |

---

##### `no_bid`<sup>Optional</sup> <a name="no_bid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters.property.noBid"></a>

```python
no_bid: RtbfabricLinkModuleConfigurationListModuleParametersNoBid
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#no_bid RtbfabricLink#no_bid}.

---

##### `open_rtb_attribute`<sup>Optional</sup> <a name="open_rtb_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters.property.openRtbAttribute"></a>

```python
open_rtb_attribute: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#open_rtb_attribute RtbfabricLink#open_rtb_attribute}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersNoBid <a name="RtbfabricLinkModuleConfigurationListModuleParametersNoBid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid(
  pass_through_percentage: typing.Union[int, float] = None,
  reason: str = None,
  reason_code: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.property.passThroughPercentage">pass_through_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#pass_through_percentage RtbfabricLink#pass_through_percentage}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.property.reason">reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#reason RtbfabricLink#reason}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.property.reasonCode">reason_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#reason_code RtbfabricLink#reason_code}. |

---

##### `pass_through_percentage`<sup>Optional</sup> <a name="pass_through_percentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.property.passThroughPercentage"></a>

```python
pass_through_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#pass_through_percentage RtbfabricLink#pass_through_percentage}.

---

##### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.property.reason"></a>

```python
reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#reason RtbfabricLink#reason}.

---

##### `reason_code`<sup>Optional</sup> <a name="reason_code" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.property.reasonCode"></a>

```python
reason_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#reason_code RtbfabricLink#reason_code}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute(
  action: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction = None,
  filter_configuration: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration] = None,
  filter_type: str = None,
  holdback_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#action RtbfabricLink#action}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.filterConfiguration">filter_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#filter_configuration RtbfabricLink#filter_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.filterType">filter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#filter_type RtbfabricLink#filter_type}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.holdbackPercentage">holdback_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#holdback_percentage RtbfabricLink#holdback_percentage}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.action"></a>

```python
action: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#action RtbfabricLink#action}.

---

##### `filter_configuration`<sup>Optional</sup> <a name="filter_configuration" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.filterConfiguration"></a>

```python
filter_configuration: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#filter_configuration RtbfabricLink#filter_configuration}.

---

##### `filter_type`<sup>Optional</sup> <a name="filter_type" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#filter_type RtbfabricLink#filter_type}.

---

##### `holdback_percentage`<sup>Optional</sup> <a name="holdback_percentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.holdbackPercentage"></a>

```python
holdback_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#holdback_percentage RtbfabricLink#holdback_percentage}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction(
  header_tag: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag = None,
  no_bid: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction.property.headerTag">header_tag</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#header_tag RtbfabricLink#header_tag}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction.property.noBid">no_bid</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#no_bid RtbfabricLink#no_bid}. |

---

##### `header_tag`<sup>Optional</sup> <a name="header_tag" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction.property.headerTag"></a>

```python
header_tag: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#header_tag RtbfabricLink#header_tag}.

---

##### `no_bid`<sup>Optional</sup> <a name="no_bid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction.property.noBid"></a>

```python
no_bid: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#no_bid RtbfabricLink#no_bid}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#name RtbfabricLink#name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#value RtbfabricLink#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#name RtbfabricLink#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#value RtbfabricLink#value}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid(
  no_bid_reason_code: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid.property.noBidReasonCode">no_bid_reason_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#no_bid_reason_code RtbfabricLink#no_bid_reason_code}. |

---

##### `no_bid_reason_code`<sup>Optional</sup> <a name="no_bid_reason_code" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid.property.noBidReasonCode"></a>

```python
no_bid_reason_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#no_bid_reason_code RtbfabricLink#no_bid_reason_code}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration(
  criteria: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration.property.criteria">criteria</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#criteria RtbfabricLink#criteria}. |

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration.property.criteria"></a>

```python
criteria: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#criteria RtbfabricLink#criteria}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria(
  path: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#path RtbfabricLink#path}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#values RtbfabricLink#values}. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#path RtbfabricLink#path}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#values RtbfabricLink#values}.

---

### RtbfabricLinkModuleConfigurationListStruct <a name="RtbfabricLinkModuleConfigurationListStruct" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct(
  depends_on: typing.List[str] = None,
  module_parameters: RtbfabricLinkModuleConfigurationListModuleParameters = None,
  name: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#depends_on RtbfabricLink#depends_on}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.moduleParameters">module_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters">RtbfabricLinkModuleConfigurationListModuleParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#module_parameters RtbfabricLink#module_parameters}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#name RtbfabricLink#name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#version RtbfabricLink#version}. |

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#depends_on RtbfabricLink#depends_on}.

---

##### `module_parameters`<sup>Optional</sup> <a name="module_parameters" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.moduleParameters"></a>

```python
module_parameters: RtbfabricLinkModuleConfigurationListModuleParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters">RtbfabricLinkModuleConfigurationListModuleParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#module_parameters RtbfabricLink#module_parameters}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#name RtbfabricLink#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#version RtbfabricLink#version}.

---

### RtbfabricLinkTags <a name="RtbfabricLinkTags" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#key RtbfabricLink#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#value RtbfabricLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricLinkLinkAttributesOutputReference <a name="RtbfabricLinkLinkAttributesOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.putResponderErrorMasking">put_responder_error_masking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resetCustomerProvidedId">reset_customer_provided_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resetResponderErrorMasking">reset_responder_error_masking</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_responder_error_masking` <a name="put_responder_error_masking" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.putResponderErrorMasking"></a>

```python
def put_responder_error_masking(
  value: IResolvable | typing.List[RtbfabricLinkLinkAttributesResponderErrorMasking]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.putResponderErrorMasking.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>]

---

##### `reset_customer_provided_id` <a name="reset_customer_provided_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resetCustomerProvidedId"></a>

```python
def reset_customer_provided_id() -> None
```

##### `reset_responder_error_masking` <a name="reset_responder_error_masking" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resetResponderErrorMasking"></a>

```python
def reset_responder_error_masking() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.responderErrorMasking">responder_error_masking</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList">RtbfabricLinkLinkAttributesResponderErrorMaskingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.customerProvidedIdInput">customer_provided_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.responderErrorMaskingInput">responder_error_masking_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.customerProvidedId">customer_provided_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `responder_error_masking`<sup>Required</sup> <a name="responder_error_masking" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.responderErrorMasking"></a>

```python
responder_error_masking: RtbfabricLinkLinkAttributesResponderErrorMaskingList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList">RtbfabricLinkLinkAttributesResponderErrorMaskingList</a>

---

##### `customer_provided_id_input`<sup>Optional</sup> <a name="customer_provided_id_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.customerProvidedIdInput"></a>

```python
customer_provided_id_input: str
```

- *Type:* str

---

##### `responder_error_masking_input`<sup>Optional</sup> <a name="responder_error_masking_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.responderErrorMaskingInput"></a>

```python
responder_error_masking_input: IResolvable | typing.List[RtbfabricLinkLinkAttributesResponderErrorMasking]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>]

---

##### `customer_provided_id`<sup>Required</sup> <a name="customer_provided_id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.customerProvidedId"></a>

```python
customer_provided_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkLinkAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a>

---


### RtbfabricLinkLinkAttributesResponderErrorMaskingList <a name="RtbfabricLinkLinkAttributesResponderErrorMaskingList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RtbfabricLinkLinkAttributesResponderErrorMasking]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>]

---


### RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference <a name="RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode">reset_http_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes">reset_logging_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage">reset_response_logging_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_http_code` <a name="reset_http_code" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode"></a>

```python
def reset_http_code() -> None
```

##### `reset_logging_types` <a name="reset_logging_types" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes"></a>

```python
def reset_logging_types() -> None
```

##### `reset_response_logging_percentage` <a name="reset_response_logging_percentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage"></a>

```python
def reset_response_logging_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput">http_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput">logging_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput">response_logging_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode">http_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes">logging_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage">response_logging_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `http_code_input`<sup>Optional</sup> <a name="http_code_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput"></a>

```python
http_code_input: str
```

- *Type:* str

---

##### `logging_types_input`<sup>Optional</sup> <a name="logging_types_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput"></a>

```python
logging_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_logging_percentage_input`<sup>Optional</sup> <a name="response_logging_percentage_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput"></a>

```python
response_logging_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `http_code`<sup>Required</sup> <a name="http_code" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode"></a>

```python
http_code: str
```

- *Type:* str

---

##### `logging_types`<sup>Required</sup> <a name="logging_types" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes"></a>

```python
logging_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_logging_percentage`<sup>Required</sup> <a name="response_logging_percentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage"></a>

```python
response_logging_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkLinkAttributesResponderErrorMasking
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>

---


### RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference <a name="RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput">error_log_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput">filter_log_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog">error_log</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog">filter_log</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_log_input`<sup>Optional</sup> <a name="error_log_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput"></a>

```python
error_log_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_log_input`<sup>Optional</sup> <a name="filter_log_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput"></a>

```python
filter_log_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_log`<sup>Required</sup> <a name="error_log" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog"></a>

```python
error_log: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_log`<sup>Required</sup> <a name="filter_log" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog"></a>

```python
filter_log: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


### RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference <a name="RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling">put_link_application_log_sampling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_link_application_log_sampling` <a name="put_link_application_log_sampling" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling"></a>

```python
def put_link_application_log_sampling(
  error_log: typing.Union[int, float],
  filter_log: typing.Union[int, float]
) -> None
```

###### `error_log`<sup>Required</sup> <a name="error_log" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling.parameter.errorLog"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#error_log RtbfabricLink#error_log}.

---

###### `filter_log`<sup>Required</sup> <a name="filter_log" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling.parameter.filterLog"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#filter_log RtbfabricLink#filter_log}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling">link_application_log_sampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput">link_application_log_sampling_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `link_application_log_sampling`<sup>Required</sup> <a name="link_application_log_sampling" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling"></a>

```python
link_application_log_sampling: RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a>

---

##### `link_application_log_sampling_input`<sup>Optional</sup> <a name="link_application_log_sampling_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput"></a>

```python
link_application_log_sampling_input: IResolvable | RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkLinkLogSettingsApplicationLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a>

---


### RtbfabricLinkLinkLogSettingsOutputReference <a name="RtbfabricLinkLinkLogSettingsOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.putApplicationLogs">put_application_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_application_logs` <a name="put_application_logs" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.putApplicationLogs"></a>

```python
def put_application_logs(
  link_application_log_sampling: RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
) -> None
```

###### `link_application_log_sampling`<sup>Required</sup> <a name="link_application_log_sampling" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.putApplicationLogs.parameter.linkApplicationLogSampling"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#link_application_log_sampling RtbfabricLink#link_application_log_sampling}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.applicationLogs">application_logs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.applicationLogsInput">application_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_logs`<sup>Required</sup> <a name="application_logs" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.applicationLogs"></a>

```python
application_logs: RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference</a>

---

##### `application_logs_input`<sup>Optional</sup> <a name="application_logs_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.applicationLogsInput"></a>

```python
application_logs_input: IResolvable | RtbfabricLinkLinkLogSettingsApplicationLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkLinkLogSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resetPassThroughPercentage">reset_pass_through_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resetReason">reset_reason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resetReasonCode">reset_reason_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pass_through_percentage` <a name="reset_pass_through_percentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resetPassThroughPercentage"></a>

```python
def reset_pass_through_percentage() -> None
```

##### `reset_reason` <a name="reset_reason" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resetReason"></a>

```python
def reset_reason() -> None
```

##### `reset_reason_code` <a name="reset_reason_code" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resetReasonCode"></a>

```python
def reset_reason_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.passThroughPercentageInput">pass_through_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonCodeInput">reason_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonInput">reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.passThroughPercentage">pass_through_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonCode">reason_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pass_through_percentage_input`<sup>Optional</sup> <a name="pass_through_percentage_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.passThroughPercentageInput"></a>

```python
pass_through_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reason_code_input`<sup>Optional</sup> <a name="reason_code_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonCodeInput"></a>

```python
reason_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reason_input`<sup>Optional</sup> <a name="reason_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonInput"></a>

```python
reason_input: str
```

- *Type:* str

---

##### `pass_through_percentage`<sup>Required</sup> <a name="pass_through_percentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.passThroughPercentage"></a>

```python
pass_through_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `reason_code`<sup>Required</sup> <a name="reason_code" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonCode"></a>

```python
reason_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkModuleConfigurationListModuleParametersNoBid
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resetNoBidReasonCode">reset_no_bid_reason_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_no_bid_reason_code` <a name="reset_no_bid_reason_code" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resetNoBidReasonCode"></a>

```python
def reset_no_bid_reason_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.noBidReasonCodeInput">no_bid_reason_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.noBidReasonCode">no_bid_reason_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `no_bid_reason_code_input`<sup>Optional</sup> <a name="no_bid_reason_code_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.noBidReasonCodeInput"></a>

```python
no_bid_reason_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_bid_reason_code`<sup>Required</sup> <a name="no_bid_reason_code" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.noBidReasonCode"></a>

```python
no_bid_reason_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.putHeaderTag">put_header_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.putNoBid">put_no_bid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resetHeaderTag">reset_header_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resetNoBid">reset_no_bid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header_tag` <a name="put_header_tag" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.putHeaderTag"></a>

```python
def put_header_tag(
  name: str = None,
  value: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.putHeaderTag.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#name RtbfabricLink#name}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.putHeaderTag.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#value RtbfabricLink#value}.

---

##### `put_no_bid` <a name="put_no_bid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.putNoBid"></a>

```python
def put_no_bid(
  no_bid_reason_code: typing.Union[int, float] = None
) -> None
```

###### `no_bid_reason_code`<sup>Optional</sup> <a name="no_bid_reason_code" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.putNoBid.parameter.noBidReasonCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#no_bid_reason_code RtbfabricLink#no_bid_reason_code}.

---

##### `reset_header_tag` <a name="reset_header_tag" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resetHeaderTag"></a>

```python
def reset_header_tag() -> None
```

##### `reset_no_bid` <a name="reset_no_bid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resetNoBid"></a>

```python
def reset_no_bid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.headerTag">header_tag</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.noBid">no_bid</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.headerTagInput">header_tag_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.noBidInput">no_bid_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_tag`<sup>Required</sup> <a name="header_tag" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.headerTag"></a>

```python
header_tag: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference</a>

---

##### `no_bid`<sup>Required</sup> <a name="no_bid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.noBid"></a>

```python
no_bid: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference</a>

---

##### `header_tag_input`<sup>Optional</sup> <a name="header_tag_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.headerTagInput"></a>

```python
header_tag_input: IResolvable | RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a>

---

##### `no_bid_input`<sup>Optional</sup> <a name="no_bid_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.noBidInput"></a>

```python
no_bid_input: IResolvable | RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>]

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>]

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resetCriteria">reset_criteria</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_criteria` <a name="put_criteria" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.putCriteria"></a>

```python
def put_criteria(
  value: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.putCriteria.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>]

---

##### `reset_criteria` <a name="reset_criteria" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resetCriteria"></a>

```python
def reset_criteria() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.criteriaInput">criteria_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.criteria"></a>

```python
criteria: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList</a>

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.criteriaInput"></a>

```python
criteria_input: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.putFilterConfiguration">put_filter_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetFilterConfiguration">reset_filter_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetFilterType">reset_filter_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetHoldbackPercentage">reset_holdback_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.putAction"></a>

```python
def put_action(
  header_tag: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag = None,
  no_bid: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid = None
) -> None
```

###### `header_tag`<sup>Optional</sup> <a name="header_tag" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.putAction.parameter.headerTag"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#header_tag RtbfabricLink#header_tag}.

---

###### `no_bid`<sup>Optional</sup> <a name="no_bid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.putAction.parameter.noBid"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#no_bid RtbfabricLink#no_bid}.

---

##### `put_filter_configuration` <a name="put_filter_configuration" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.putFilterConfiguration"></a>

```python
def put_filter_configuration(
  value: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.putFilterConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>]

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_filter_configuration` <a name="reset_filter_configuration" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetFilterConfiguration"></a>

```python
def reset_filter_configuration() -> None
```

##### `reset_filter_type` <a name="reset_filter_type" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetFilterType"></a>

```python
def reset_filter_type() -> None
```

##### `reset_holdback_percentage` <a name="reset_holdback_percentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetHoldbackPercentage"></a>

```python
def reset_holdback_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterConfiguration">filter_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.actionInput">action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterConfigurationInput">filter_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.holdbackPercentageInput">holdback_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.holdbackPercentage">holdback_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.action"></a>

```python
action: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference</a>

---

##### `filter_configuration`<sup>Required</sup> <a name="filter_configuration" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterConfiguration"></a>

```python
filter_configuration: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.actionInput"></a>

```python
action_input: IResolvable | RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a>

---

##### `filter_configuration_input`<sup>Optional</sup> <a name="filter_configuration_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterConfigurationInput"></a>

```python
filter_configuration_input: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>]

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `holdback_percentage_input`<sup>Optional</sup> <a name="holdback_percentage_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.holdbackPercentageInput"></a>

```python
holdback_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `holdback_percentage`<sup>Required</sup> <a name="holdback_percentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.holdbackPercentage"></a>

```python
holdback_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putNoBid">put_no_bid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putOpenRtbAttribute">put_open_rtb_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resetNoBid">reset_no_bid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resetOpenRtbAttribute">reset_open_rtb_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_no_bid` <a name="put_no_bid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putNoBid"></a>

```python
def put_no_bid(
  pass_through_percentage: typing.Union[int, float] = None,
  reason: str = None,
  reason_code: typing.Union[int, float] = None
) -> None
```

###### `pass_through_percentage`<sup>Optional</sup> <a name="pass_through_percentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putNoBid.parameter.passThroughPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#pass_through_percentage RtbfabricLink#pass_through_percentage}.

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putNoBid.parameter.reason"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#reason RtbfabricLink#reason}.

---

###### `reason_code`<sup>Optional</sup> <a name="reason_code" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putNoBid.parameter.reasonCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#reason_code RtbfabricLink#reason_code}.

---

##### `put_open_rtb_attribute` <a name="put_open_rtb_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putOpenRtbAttribute"></a>

```python
def put_open_rtb_attribute(
  action: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction = None,
  filter_configuration: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration] = None,
  filter_type: str = None,
  holdback_percentage: typing.Union[int, float] = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putOpenRtbAttribute.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#action RtbfabricLink#action}.

---

###### `filter_configuration`<sup>Optional</sup> <a name="filter_configuration" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putOpenRtbAttribute.parameter.filterConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#filter_configuration RtbfabricLink#filter_configuration}.

---

###### `filter_type`<sup>Optional</sup> <a name="filter_type" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putOpenRtbAttribute.parameter.filterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#filter_type RtbfabricLink#filter_type}.

---

###### `holdback_percentage`<sup>Optional</sup> <a name="holdback_percentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putOpenRtbAttribute.parameter.holdbackPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#holdback_percentage RtbfabricLink#holdback_percentage}.

---

##### `reset_no_bid` <a name="reset_no_bid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resetNoBid"></a>

```python
def reset_no_bid() -> None
```

##### `reset_open_rtb_attribute` <a name="reset_open_rtb_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resetOpenRtbAttribute"></a>

```python
def reset_open_rtb_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.noBid">no_bid</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.openRtbAttribute">open_rtb_attribute</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.noBidInput">no_bid_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.openRtbAttributeInput">open_rtb_attribute_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters">RtbfabricLinkModuleConfigurationListModuleParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `no_bid`<sup>Required</sup> <a name="no_bid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.noBid"></a>

```python
no_bid: RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference</a>

---

##### `open_rtb_attribute`<sup>Required</sup> <a name="open_rtb_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.openRtbAttribute"></a>

```python
open_rtb_attribute: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference</a>

---

##### `no_bid_input`<sup>Optional</sup> <a name="no_bid_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.noBidInput"></a>

```python
no_bid_input: IResolvable | RtbfabricLinkModuleConfigurationListModuleParametersNoBid
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a>

---

##### `open_rtb_attribute_input`<sup>Optional</sup> <a name="open_rtb_attribute_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.openRtbAttributeInput"></a>

```python
open_rtb_attribute_input: IResolvable | RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkModuleConfigurationListModuleParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters">RtbfabricLinkModuleConfigurationListModuleParameters</a>

---


### RtbfabricLinkModuleConfigurationListStructList <a name="RtbfabricLinkModuleConfigurationListStructList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RtbfabricLinkModuleConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RtbfabricLinkModuleConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>]

---


### RtbfabricLinkModuleConfigurationListStructOutputReference <a name="RtbfabricLinkModuleConfigurationListStructOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.putModuleParameters">put_module_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetDependsOn">reset_depends_on</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetModuleParameters">reset_module_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_module_parameters` <a name="put_module_parameters" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.putModuleParameters"></a>

```python
def put_module_parameters(
  no_bid: RtbfabricLinkModuleConfigurationListModuleParametersNoBid = None,
  open_rtb_attribute: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute = None
) -> None
```

###### `no_bid`<sup>Optional</sup> <a name="no_bid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.putModuleParameters.parameter.noBid"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#no_bid RtbfabricLink#no_bid}.

---

###### `open_rtb_attribute`<sup>Optional</sup> <a name="open_rtb_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.putModuleParameters.parameter.openRtbAttribute"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link#open_rtb_attribute RtbfabricLink#open_rtb_attribute}.

---

##### `reset_depends_on` <a name="reset_depends_on" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetDependsOn"></a>

```python
def reset_depends_on() -> None
```

##### `reset_module_parameters` <a name="reset_module_parameters" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetModuleParameters"></a>

```python
def reset_module_parameters() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.moduleParameters">module_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.dependsOnInput">depends_on_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.moduleParametersInput">module_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters">RtbfabricLinkModuleConfigurationListModuleParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_parameters`<sup>Required</sup> <a name="module_parameters" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.moduleParameters"></a>

```python
module_parameters: RtbfabricLinkModuleConfigurationListModuleParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOutputReference</a>

---

##### `depends_on_input`<sup>Optional</sup> <a name="depends_on_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.dependsOnInput"></a>

```python
depends_on_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `module_parameters_input`<sup>Optional</sup> <a name="module_parameters_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.moduleParametersInput"></a>

```python
module_parameters_input: IResolvable | RtbfabricLinkModuleConfigurationListModuleParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters">RtbfabricLinkModuleConfigurationListModuleParameters</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `depends_on`<sup>Required</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkModuleConfigurationListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>

---


### RtbfabricLinkTagsList <a name="RtbfabricLinkTagsList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RtbfabricLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RtbfabricLinkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>]

---


### RtbfabricLinkTagsOutputReference <a name="RtbfabricLinkTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link

rtbfabricLink.RtbfabricLinkTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>

---



