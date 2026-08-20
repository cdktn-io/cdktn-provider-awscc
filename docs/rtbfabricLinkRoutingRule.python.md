# `rtbfabricLinkRoutingRule` Submodule <a name="`rtbfabricLinkRoutingRule` Submodule" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricLinkRoutingRule <a name="RtbfabricLinkRoutingRule" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule awscc_rtbfabric_link_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link_routing_rule

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  conditions: RtbfabricLinkRoutingRuleConditions,
  gateway_id: str,
  link_id: str,
  priority: typing.Union[int, float],
  tags: IResolvable | typing.List[RtbfabricLinkRoutingRuleTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | Conditions for a routing rule. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.linkId">link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>]</code> | Tags to assign to the LinkRoutingRule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.conditions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

Conditions for a routing rule.

All non-null fields must match (AND logic). At least one field must be set. HostHeader and HostHeaderWildcard are mutually exclusive. PathPrefix and PathExact are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#conditions RtbfabricLinkRoutingRule#conditions}

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.gatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}.

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.linkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>]

Tags to assign to the LinkRoutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#tags RtbfabricLinkRoutingRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions"></a>

```python
def put_conditions(
  host_header: str = None,
  host_header_wildcard: str = None,
  path_exact: str = None,
  path_prefix: str = None,
  query_string_equals: RtbfabricLinkRoutingRuleConditionsQueryStringEquals = None,
  query_string_exists: str = None
) -> None
```

###### `host_header`<sup>Optional</sup> <a name="host_header" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions.parameter.hostHeader"></a>

- *Type:* str

Exact host match ? RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#host_header RtbfabricLinkRoutingRule#host_header}

---

###### `host_header_wildcard`<sup>Optional</sup> <a name="host_header_wildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions.parameter.hostHeaderWildcard"></a>

- *Type:* str

Wildcard host pattern (e.g., *.example.com) ? RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#host_header_wildcard RtbfabricLinkRoutingRule#host_header_wildcard}

---

###### `path_exact`<sup>Optional</sup> <a name="path_exact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions.parameter.pathExact"></a>

- *Type:* str

Exact path match ? must start with /. Mutually exclusive with PathPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#path_exact RtbfabricLinkRoutingRule#path_exact}

---

###### `path_prefix`<sup>Optional</sup> <a name="path_prefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions.parameter.pathPrefix"></a>

- *Type:* str

Path prefix matching ? strict starts-with, must start with /. Mutually exclusive with PathExact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#path_prefix RtbfabricLinkRoutingRule#path_prefix}

---

###### `query_string_equals`<sup>Optional</sup> <a name="query_string_equals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions.parameter.queryStringEquals"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

Query string key=value pair match (single pair).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#query_string_equals RtbfabricLinkRoutingRule#query_string_equals}

---

###### `query_string_exists`<sup>Optional</sup> <a name="query_string_exists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions.parameter.queryStringExists"></a>

- *Type:* str

Query string key presence check (any value accepted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#query_string_exists RtbfabricLinkRoutingRule#query_string_exists}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RtbfabricLinkRoutingRuleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RtbfabricLinkRoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct"></a>

```python
from cdktn_provider_awscc import rtbfabric_link_routing_rule

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rtbfabric_link_routing_rule

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rtbfabric_link_routing_rule

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rtbfabric_link_routing_rule

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RtbfabricLinkRoutingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RtbfabricLinkRoutingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RtbfabricLinkRoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricLinkRoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference">RtbfabricLinkRoutingRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList">RtbfabricLinkRoutingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.updatedTimestamp">updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkIdInput">link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkId">link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditions"></a>

```python
conditions: RtbfabricLinkRoutingRuleConditionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference">RtbfabricLinkRoutingRuleConditionsOutputReference</a>

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tags"></a>

```python
tags: RtbfabricLinkRoutingRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList">RtbfabricLinkRoutingRuleTagsList</a>

---

##### `updated_timestamp`<sup>Required</sup> <a name="updated_timestamp" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.updatedTimestamp"></a>

```python
updated_timestamp: str
```

- *Type:* str

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditionsInput"></a>

```python
conditions_input: IResolvable | RtbfabricLinkRoutingRuleConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `link_id_input`<sup>Optional</sup> <a name="link_id_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkIdInput"></a>

```python
link_id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RtbfabricLinkRoutingRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricLinkRoutingRuleConditions <a name="RtbfabricLinkRoutingRuleConditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link_routing_rule

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions(
  host_header: str = None,
  host_header_wildcard: str = None,
  path_exact: str = None,
  path_prefix: str = None,
  query_string_equals: RtbfabricLinkRoutingRuleConditionsQueryStringEquals = None,
  query_string_exists: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeader">host_header</a></code> | <code>str</code> | Exact host match ? RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeaderWildcard">host_header_wildcard</a></code> | <code>str</code> | Wildcard host pattern (e.g., *.example.com) ? RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathExact">path_exact</a></code> | <code>str</code> | Exact path match ? must start with /. Mutually exclusive with PathPrefix. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathPrefix">path_prefix</a></code> | <code>str</code> | Path prefix matching ? strict starts-with, must start with /. Mutually exclusive with PathExact. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringEquals">query_string_equals</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | Query string key=value pair match (single pair). |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringExists">query_string_exists</a></code> | <code>str</code> | Query string key presence check (any value accepted). |

---

##### `host_header`<sup>Optional</sup> <a name="host_header" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeader"></a>

```python
host_header: str
```

- *Type:* str

Exact host match ? RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#host_header RtbfabricLinkRoutingRule#host_header}

---

##### `host_header_wildcard`<sup>Optional</sup> <a name="host_header_wildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeaderWildcard"></a>

```python
host_header_wildcard: str
```

- *Type:* str

Wildcard host pattern (e.g., *.example.com) ? RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#host_header_wildcard RtbfabricLinkRoutingRule#host_header_wildcard}

---

##### `path_exact`<sup>Optional</sup> <a name="path_exact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathExact"></a>

```python
path_exact: str
```

- *Type:* str

Exact path match ? must start with /. Mutually exclusive with PathPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#path_exact RtbfabricLinkRoutingRule#path_exact}

---

##### `path_prefix`<sup>Optional</sup> <a name="path_prefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

Path prefix matching ? strict starts-with, must start with /. Mutually exclusive with PathExact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#path_prefix RtbfabricLinkRoutingRule#path_prefix}

---

##### `query_string_equals`<sup>Optional</sup> <a name="query_string_equals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringEquals"></a>

```python
query_string_equals: RtbfabricLinkRoutingRuleConditionsQueryStringEquals
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

Query string key=value pair match (single pair).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#query_string_equals RtbfabricLinkRoutingRule#query_string_equals}

---

##### `query_string_exists`<sup>Optional</sup> <a name="query_string_exists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringExists"></a>

```python
query_string_exists: str
```

- *Type:* str

Query string key presence check (any value accepted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#query_string_exists RtbfabricLinkRoutingRule#query_string_exists}

---

### RtbfabricLinkRoutingRuleConditionsQueryStringEquals <a name="RtbfabricLinkRoutingRuleConditionsQueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link_routing_rule

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.key">key</a></code> | <code>str</code> | Query string key ? RFC 3986 unreserved characters. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.value">value</a></code> | <code>str</code> | Query string value ? RFC 3986 unreserved characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.key"></a>

```python
key: str
```

- *Type:* str

Query string key ? RFC 3986 unreserved characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#key RtbfabricLinkRoutingRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.value"></a>

```python
value: str
```

- *Type:* str

Query string value ? RFC 3986 unreserved characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#value RtbfabricLinkRoutingRule#value}

---

### RtbfabricLinkRoutingRuleConfig <a name="RtbfabricLinkRoutingRuleConfig" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link_routing_rule

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  conditions: RtbfabricLinkRoutingRuleConditions,
  gateway_id: str,
  link_id: str,
  priority: typing.Union[int, float],
  tags: IResolvable | typing.List[RtbfabricLinkRoutingRuleTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | Conditions for a routing rule. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.linkId">link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>]</code> | Tags to assign to the LinkRoutingRule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.conditions"></a>

```python
conditions: RtbfabricLinkRoutingRuleConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

Conditions for a routing rule.

All non-null fields must match (AND logic). At least one field must be set. HostHeader and HostHeaderWildcard are mutually exclusive. PathPrefix and PathExact are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#conditions RtbfabricLinkRoutingRule#conditions}

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}.

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RtbfabricLinkRoutingRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>]

Tags to assign to the LinkRoutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#tags RtbfabricLinkRoutingRule#tags}

---

### RtbfabricLinkRoutingRuleTags <a name="RtbfabricLinkRoutingRuleTags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link_routing_rule

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#key RtbfabricLinkRoutingRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#value RtbfabricLinkRoutingRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricLinkRoutingRuleConditionsOutputReference <a name="RtbfabricLinkRoutingRuleConditionsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link_routing_rule

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals">put_query_string_equals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeader">reset_host_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeaderWildcard">reset_host_header_wildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathExact">reset_path_exact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathPrefix">reset_path_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringEquals">reset_query_string_equals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringExists">reset_query_string_exists</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_query_string_equals` <a name="put_query_string_equals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals"></a>

```python
def put_query_string_equals(
  key: str = None,
  value: str = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals.parameter.key"></a>

- *Type:* str

Query string key ? RFC 3986 unreserved characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#key RtbfabricLinkRoutingRule#key}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals.parameter.value"></a>

- *Type:* str

Query string value ? RFC 3986 unreserved characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_link_routing_rule#value RtbfabricLinkRoutingRule#value}

---

##### `reset_host_header` <a name="reset_host_header" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeader"></a>

```python
def reset_host_header() -> None
```

##### `reset_host_header_wildcard` <a name="reset_host_header_wildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeaderWildcard"></a>

```python
def reset_host_header_wildcard() -> None
```

##### `reset_path_exact` <a name="reset_path_exact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathExact"></a>

```python
def reset_path_exact() -> None
```

##### `reset_path_prefix` <a name="reset_path_prefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathPrefix"></a>

```python
def reset_path_prefix() -> None
```

##### `reset_query_string_equals` <a name="reset_query_string_equals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringEquals"></a>

```python
def reset_query_string_equals() -> None
```

##### `reset_query_string_exists` <a name="reset_query_string_exists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringExists"></a>

```python
def reset_query_string_exists() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEquals">query_string_equals</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference">RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderInput">host_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcardInput">host_header_wildcard_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExactInput">path_exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefixInput">path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEqualsInput">query_string_equals_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExistsInput">query_string_exists_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeader">host_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcard">host_header_wildcard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExact">path_exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefix">path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExists">query_string_exists</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_string_equals`<sup>Required</sup> <a name="query_string_equals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEquals"></a>

```python
query_string_equals: RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference">RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference</a>

---

##### `host_header_input`<sup>Optional</sup> <a name="host_header_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderInput"></a>

```python
host_header_input: str
```

- *Type:* str

---

##### `host_header_wildcard_input`<sup>Optional</sup> <a name="host_header_wildcard_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcardInput"></a>

```python
host_header_wildcard_input: str
```

- *Type:* str

---

##### `path_exact_input`<sup>Optional</sup> <a name="path_exact_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExactInput"></a>

```python
path_exact_input: str
```

- *Type:* str

---

##### `path_prefix_input`<sup>Optional</sup> <a name="path_prefix_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefixInput"></a>

```python
path_prefix_input: str
```

- *Type:* str

---

##### `query_string_equals_input`<sup>Optional</sup> <a name="query_string_equals_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEqualsInput"></a>

```python
query_string_equals_input: IResolvable | RtbfabricLinkRoutingRuleConditionsQueryStringEquals
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

---

##### `query_string_exists_input`<sup>Optional</sup> <a name="query_string_exists_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExistsInput"></a>

```python
query_string_exists_input: str
```

- *Type:* str

---

##### `host_header`<sup>Required</sup> <a name="host_header" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeader"></a>

```python
host_header: str
```

- *Type:* str

---

##### `host_header_wildcard`<sup>Required</sup> <a name="host_header_wildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcard"></a>

```python
host_header_wildcard: str
```

- *Type:* str

---

##### `path_exact`<sup>Required</sup> <a name="path_exact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExact"></a>

```python
path_exact: str
```

- *Type:* str

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

---

##### `query_string_exists`<sup>Required</sup> <a name="query_string_exists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExists"></a>

```python
query_string_exists: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkRoutingRuleConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

---


### RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference <a name="RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link_routing_rule

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkRoutingRuleConditionsQueryStringEquals
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

---


### RtbfabricLinkRoutingRuleTagsList <a name="RtbfabricLinkRoutingRuleTagsList" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link_routing_rule

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RtbfabricLinkRoutingRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RtbfabricLinkRoutingRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>]

---


### RtbfabricLinkRoutingRuleTagsOutputReference <a name="RtbfabricLinkRoutingRuleTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_link_routing_rule

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricLinkRoutingRuleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>

---



