# `rtbfabricOutboundExternalLink` Submodule <a name="`rtbfabricOutboundExternalLink` Submodule" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricOutboundExternalLink <a name="RtbfabricOutboundExternalLink" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link awscc_rtbfabric_outbound_external_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink(
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
  link_log_settings: RtbfabricOutboundExternalLinkLinkLogSettings,
  public_endpoint: str,
  link_attributes: RtbfabricOutboundExternalLinkLinkAttributes = None,
  tags: IResolvable | typing.List[RtbfabricOutboundExternalLinkTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#gateway_id RtbfabricOutboundExternalLink#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.linkLogSettings">link_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#link_log_settings RtbfabricOutboundExternalLink#link_log_settings}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.publicEndpoint">public_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#public_endpoint RtbfabricOutboundExternalLink#public_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.linkAttributes">link_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#link_attributes RtbfabricOutboundExternalLink#link_attributes}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>]</code> | Tags to assign to the Link. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.gatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#gateway_id RtbfabricOutboundExternalLink#gateway_id}.

---

##### `link_log_settings`<sup>Required</sup> <a name="link_log_settings" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.linkLogSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#link_log_settings RtbfabricOutboundExternalLink#link_log_settings}.

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.publicEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#public_endpoint RtbfabricOutboundExternalLink#public_endpoint}.

---

##### `link_attributes`<sup>Optional</sup> <a name="link_attributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.linkAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#link_attributes RtbfabricOutboundExternalLink#link_attributes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>]

Tags to assign to the Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#tags RtbfabricOutboundExternalLink#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkAttributes">put_link_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkLogSettings">put_link_log_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetLinkAttributes">reset_link_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_link_attributes` <a name="put_link_attributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkAttributes"></a>

```python
def put_link_attributes(
  customer_provided_id: str = None,
  responder_error_masking: IResolvable | typing.List[RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking] = None
) -> None
```

###### `customer_provided_id`<sup>Optional</sup> <a name="customer_provided_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkAttributes.parameter.customerProvidedId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#customer_provided_id RtbfabricOutboundExternalLink#customer_provided_id}.

---

###### `responder_error_masking`<sup>Optional</sup> <a name="responder_error_masking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkAttributes.parameter.responderErrorMasking"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#responder_error_masking RtbfabricOutboundExternalLink#responder_error_masking}.

---

##### `put_link_log_settings` <a name="put_link_log_settings" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkLogSettings"></a>

```python
def put_link_log_settings(
  application_logs: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs
) -> None
```

###### `application_logs`<sup>Required</sup> <a name="application_logs" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkLogSettings.parameter.applicationLogs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#application_logs RtbfabricOutboundExternalLink#application_logs}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RtbfabricOutboundExternalLinkTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>]

---

##### `reset_link_attributes` <a name="reset_link_attributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetLinkAttributes"></a>

```python
def reset_link_attributes() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RtbfabricOutboundExternalLink resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isConstruct"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RtbfabricOutboundExternalLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RtbfabricOutboundExternalLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RtbfabricOutboundExternalLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricOutboundExternalLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkAttributes">link_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference">RtbfabricOutboundExternalLinkLinkAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkId">link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkLogSettings">link_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkStatus">link_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList">RtbfabricOutboundExternalLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.updatedTimestamp">updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkAttributesInput">link_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkLogSettingsInput">link_log_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.publicEndpointInput">public_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.publicEndpoint">public_endpoint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `link_attributes`<sup>Required</sup> <a name="link_attributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkAttributes"></a>

```python
link_attributes: RtbfabricOutboundExternalLinkLinkAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference">RtbfabricOutboundExternalLinkLinkAttributesOutputReference</a>

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

---

##### `link_log_settings`<sup>Required</sup> <a name="link_log_settings" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkLogSettings"></a>

```python
link_log_settings: RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference</a>

---

##### `link_status`<sup>Required</sup> <a name="link_status" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkStatus"></a>

```python
link_status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tags"></a>

```python
tags: RtbfabricOutboundExternalLinkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList">RtbfabricOutboundExternalLinkTagsList</a>

---

##### `updated_timestamp`<sup>Required</sup> <a name="updated_timestamp" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.updatedTimestamp"></a>

```python
updated_timestamp: str
```

- *Type:* str

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `link_attributes_input`<sup>Optional</sup> <a name="link_attributes_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkAttributesInput"></a>

```python
link_attributes_input: IResolvable | RtbfabricOutboundExternalLinkLinkAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a>

---

##### `link_log_settings_input`<sup>Optional</sup> <a name="link_log_settings_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkLogSettingsInput"></a>

```python
link_log_settings_input: IResolvable | RtbfabricOutboundExternalLinkLinkLogSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a>

---

##### `public_endpoint_input`<sup>Optional</sup> <a name="public_endpoint_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.publicEndpointInput"></a>

```python
public_endpoint_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RtbfabricOutboundExternalLinkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.publicEndpoint"></a>

```python
public_endpoint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricOutboundExternalLinkConfig <a name="RtbfabricOutboundExternalLinkConfig" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gateway_id: str,
  link_log_settings: RtbfabricOutboundExternalLinkLinkLogSettings,
  public_endpoint: str,
  link_attributes: RtbfabricOutboundExternalLinkLinkAttributes = None,
  tags: IResolvable | typing.List[RtbfabricOutboundExternalLinkTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#gateway_id RtbfabricOutboundExternalLink#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.linkLogSettings">link_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#link_log_settings RtbfabricOutboundExternalLink#link_log_settings}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.publicEndpoint">public_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#public_endpoint RtbfabricOutboundExternalLink#public_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.linkAttributes">link_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#link_attributes RtbfabricOutboundExternalLink#link_attributes}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>]</code> | Tags to assign to the Link. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#gateway_id RtbfabricOutboundExternalLink#gateway_id}.

---

##### `link_log_settings`<sup>Required</sup> <a name="link_log_settings" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.linkLogSettings"></a>

```python
link_log_settings: RtbfabricOutboundExternalLinkLinkLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#link_log_settings RtbfabricOutboundExternalLink#link_log_settings}.

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.publicEndpoint"></a>

```python
public_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#public_endpoint RtbfabricOutboundExternalLink#public_endpoint}.

---

##### `link_attributes`<sup>Optional</sup> <a name="link_attributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.linkAttributes"></a>

```python
link_attributes: RtbfabricOutboundExternalLinkLinkAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#link_attributes RtbfabricOutboundExternalLink#link_attributes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RtbfabricOutboundExternalLinkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>]

Tags to assign to the Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#tags RtbfabricOutboundExternalLink#tags}

---

### RtbfabricOutboundExternalLinkLinkAttributes <a name="RtbfabricOutboundExternalLinkLinkAttributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes(
  customer_provided_id: str = None,
  responder_error_masking: IResolvable | typing.List[RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.property.customerProvidedId">customer_provided_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#customer_provided_id RtbfabricOutboundExternalLink#customer_provided_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.property.responderErrorMasking">responder_error_masking</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#responder_error_masking RtbfabricOutboundExternalLink#responder_error_masking}. |

---

##### `customer_provided_id`<sup>Optional</sup> <a name="customer_provided_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.property.customerProvidedId"></a>

```python
customer_provided_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#customer_provided_id RtbfabricOutboundExternalLink#customer_provided_id}.

---

##### `responder_error_masking`<sup>Optional</sup> <a name="responder_error_masking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.property.responderErrorMasking"></a>

```python
responder_error_masking: IResolvable | typing.List[RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#responder_error_masking RtbfabricOutboundExternalLink#responder_error_masking}.

---

### RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking <a name="RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking(
  action: str = None,
  http_code: str = None,
  logging_types: typing.List[str] = None,
  response_logging_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#action RtbfabricOutboundExternalLink#action}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.httpCode">http_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#http_code RtbfabricOutboundExternalLink#http_code}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.loggingTypes">logging_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#logging_types RtbfabricOutboundExternalLink#logging_types}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage">response_logging_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#response_logging_percentage RtbfabricOutboundExternalLink#response_logging_percentage}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#action RtbfabricOutboundExternalLink#action}.

---

##### `http_code`<sup>Optional</sup> <a name="http_code" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.httpCode"></a>

```python
http_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#http_code RtbfabricOutboundExternalLink#http_code}.

---

##### `logging_types`<sup>Optional</sup> <a name="logging_types" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.loggingTypes"></a>

```python
logging_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#logging_types RtbfabricOutboundExternalLink#logging_types}.

---

##### `response_logging_percentage`<sup>Optional</sup> <a name="response_logging_percentage" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage"></a>

```python
response_logging_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#response_logging_percentage RtbfabricOutboundExternalLink#response_logging_percentage}.

---

### RtbfabricOutboundExternalLinkLinkLogSettings <a name="RtbfabricOutboundExternalLinkLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings(
  application_logs: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings.property.applicationLogs">application_logs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#application_logs RtbfabricOutboundExternalLink#application_logs}. |

---

##### `application_logs`<sup>Required</sup> <a name="application_logs" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings.property.applicationLogs"></a>

```python
application_logs: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#application_logs RtbfabricOutboundExternalLink#application_logs}.

---

### RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs <a name="RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs(
  link_application_log_sampling: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling">link_application_log_sampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#link_application_log_sampling RtbfabricOutboundExternalLink#link_application_log_sampling}. |

---

##### `link_application_log_sampling`<sup>Required</sup> <a name="link_application_log_sampling" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling"></a>

```python
link_application_log_sampling: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#link_application_log_sampling RtbfabricOutboundExternalLink#link_application_log_sampling}.

---

### RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling <a name="RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling(
  error_log: typing.Union[int, float],
  filter_log: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog">error_log</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#error_log RtbfabricOutboundExternalLink#error_log}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog">filter_log</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#filter_log RtbfabricOutboundExternalLink#filter_log}. |

---

##### `error_log`<sup>Required</sup> <a name="error_log" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog"></a>

```python
error_log: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#error_log RtbfabricOutboundExternalLink#error_log}.

---

##### `filter_log`<sup>Required</sup> <a name="filter_log" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog"></a>

```python
filter_log: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#filter_log RtbfabricOutboundExternalLink#filter_log}.

---

### RtbfabricOutboundExternalLinkTags <a name="RtbfabricOutboundExternalLinkTags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#key RtbfabricOutboundExternalLink#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#value RtbfabricOutboundExternalLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricOutboundExternalLinkLinkAttributesOutputReference <a name="RtbfabricOutboundExternalLinkLinkAttributesOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking">put_responder_error_masking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resetCustomerProvidedId">reset_customer_provided_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resetResponderErrorMasking">reset_responder_error_masking</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_responder_error_masking` <a name="put_responder_error_masking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking"></a>

```python
def put_responder_error_masking(
  value: IResolvable | typing.List[RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>]

---

##### `reset_customer_provided_id` <a name="reset_customer_provided_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resetCustomerProvidedId"></a>

```python
def reset_customer_provided_id() -> None
```

##### `reset_responder_error_masking` <a name="reset_responder_error_masking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resetResponderErrorMasking"></a>

```python
def reset_responder_error_masking() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking">responder_error_masking</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedIdInput">customer_provided_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMaskingInput">responder_error_masking_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId">customer_provided_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `responder_error_masking`<sup>Required</sup> <a name="responder_error_masking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking"></a>

```python
responder_error_masking: RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList</a>

---

##### `customer_provided_id_input`<sup>Optional</sup> <a name="customer_provided_id_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedIdInput"></a>

```python
customer_provided_id_input: str
```

- *Type:* str

---

##### `responder_error_masking_input`<sup>Optional</sup> <a name="responder_error_masking_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMaskingInput"></a>

```python
responder_error_masking_input: IResolvable | typing.List[RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>]

---

##### `customer_provided_id`<sup>Required</sup> <a name="customer_provided_id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId"></a>

```python
customer_provided_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricOutboundExternalLinkLinkAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a>

---


### RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList <a name="RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>]

---


### RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference <a name="RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode">reset_http_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes">reset_logging_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage">reset_response_logging_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_http_code` <a name="reset_http_code" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode"></a>

```python
def reset_http_code() -> None
```

##### `reset_logging_types` <a name="reset_logging_types" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes"></a>

```python
def reset_logging_types() -> None
```

##### `reset_response_logging_percentage` <a name="reset_response_logging_percentage" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage"></a>

```python
def reset_response_logging_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput">http_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput">logging_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput">response_logging_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode">http_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes">logging_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage">response_logging_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `http_code_input`<sup>Optional</sup> <a name="http_code_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput"></a>

```python
http_code_input: str
```

- *Type:* str

---

##### `logging_types_input`<sup>Optional</sup> <a name="logging_types_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput"></a>

```python
logging_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_logging_percentage_input`<sup>Optional</sup> <a name="response_logging_percentage_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput"></a>

```python
response_logging_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `http_code`<sup>Required</sup> <a name="http_code" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode"></a>

```python
http_code: str
```

- *Type:* str

---

##### `logging_types`<sup>Required</sup> <a name="logging_types" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes"></a>

```python
logging_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_logging_percentage`<sup>Required</sup> <a name="response_logging_percentage" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage"></a>

```python
response_logging_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>

---


### RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference <a name="RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput">error_log_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput">filter_log_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog">error_log</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog">filter_log</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_log_input`<sup>Optional</sup> <a name="error_log_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput"></a>

```python
error_log_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_log_input`<sup>Optional</sup> <a name="filter_log_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput"></a>

```python
filter_log_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_log`<sup>Required</sup> <a name="error_log" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog"></a>

```python
error_log: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_log`<sup>Required</sup> <a name="filter_log" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog"></a>

```python
filter_log: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


### RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference <a name="RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling">put_link_application_log_sampling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_link_application_log_sampling` <a name="put_link_application_log_sampling" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling"></a>

```python
def put_link_application_log_sampling(
  error_log: typing.Union[int, float],
  filter_log: typing.Union[int, float]
) -> None
```

###### `error_log`<sup>Required</sup> <a name="error_log" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling.parameter.errorLog"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#error_log RtbfabricOutboundExternalLink#error_log}.

---

###### `filter_log`<sup>Required</sup> <a name="filter_log" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling.parameter.filterLog"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#filter_log RtbfabricOutboundExternalLink#filter_log}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling">link_application_log_sampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput">link_application_log_sampling_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `link_application_log_sampling`<sup>Required</sup> <a name="link_application_log_sampling" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling"></a>

```python
link_application_log_sampling: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a>

---

##### `link_application_log_sampling_input`<sup>Optional</sup> <a name="link_application_log_sampling_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput"></a>

```python
link_application_log_sampling_input: IResolvable | RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a>

---


### RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference <a name="RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs">put_application_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_application_logs` <a name="put_application_logs" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs"></a>

```python
def put_application_logs(
  link_application_log_sampling: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
) -> None
```

###### `link_application_log_sampling`<sup>Required</sup> <a name="link_application_log_sampling" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs.parameter.linkApplicationLogSampling"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_outbound_external_link#link_application_log_sampling RtbfabricOutboundExternalLink#link_application_log_sampling}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs">application_logs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogsInput">application_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_logs`<sup>Required</sup> <a name="application_logs" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs"></a>

```python
application_logs: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a>

---

##### `application_logs_input`<sup>Optional</sup> <a name="application_logs_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogsInput"></a>

```python
application_logs_input: IResolvable | RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricOutboundExternalLinkLinkLogSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a>

---


### RtbfabricOutboundExternalLinkTagsList <a name="RtbfabricOutboundExternalLinkTagsList" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RtbfabricOutboundExternalLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RtbfabricOutboundExternalLinkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>]

---


### RtbfabricOutboundExternalLinkTagsOutputReference <a name="RtbfabricOutboundExternalLinkTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_outbound_external_link

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricOutboundExternalLinkTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>

---



