# `route53ResolverFirewallRuleGroup` Submodule <a name="`route53ResolverFirewallRuleGroup` Submodule" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRuleGroup <a name="Route53ResolverFirewallRuleGroup" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group awscc_route53resolver_firewall_rule_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firewall_rules: IResolvable | typing.List[Route53ResolverFirewallRuleGroupFirewallRules] = None,
  name: str = None,
  tags: IResolvable | typing.List[Route53ResolverFirewallRuleGroupTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.firewallRules">firewall_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>]</code> | FirewallRules. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | FirewallRuleGroupName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>]</code> | Tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firewall_rules`<sup>Optional</sup> <a name="firewall_rules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.firewallRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>]

FirewallRules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_rules Route53ResolverFirewallRuleGroup#firewall_rules}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.name"></a>

- *Type:* str

FirewallRuleGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#name Route53ResolverFirewallRuleGroup#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>]

Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#tags Route53ResolverFirewallRuleGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules">put_firewall_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetFirewallRules">reset_firewall_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_firewall_rules` <a name="put_firewall_rules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules"></a>

```python
def put_firewall_rules(
  value: IResolvable | typing.List[Route53ResolverFirewallRuleGroupFirewallRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Route53ResolverFirewallRuleGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>]

---

##### `reset_firewall_rules` <a name="reset_firewall_rules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetFirewallRules"></a>

```python
def reset_firewall_rules() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53ResolverFirewallRuleGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53ResolverFirewallRuleGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53ResolverFirewallRuleGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53ResolverFirewallRuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverFirewallRuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creatorRequestId">creator_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRuleGroupId">firewall_rule_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRules">firewall_rules</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList">Route53ResolverFirewallRuleGroupFirewallRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.modificationTime">modification_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ruleCount">rule_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.shareStatus">share_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList">Route53ResolverFirewallRuleGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRulesInput">firewall_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `creator_request_id`<sup>Required</sup> <a name="creator_request_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creatorRequestId"></a>

```python
creator_request_id: str
```

- *Type:* str

---

##### `firewall_rule_group_id`<sup>Required</sup> <a name="firewall_rule_group_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRuleGroupId"></a>

```python
firewall_rule_group_id: str
```

- *Type:* str

---

##### `firewall_rules`<sup>Required</sup> <a name="firewall_rules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRules"></a>

```python
firewall_rules: Route53ResolverFirewallRuleGroupFirewallRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList">Route53ResolverFirewallRuleGroupFirewallRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modification_time`<sup>Required</sup> <a name="modification_time" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.modificationTime"></a>

```python
modification_time: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `rule_count`<sup>Required</sup> <a name="rule_count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ruleCount"></a>

```python
rule_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `share_status`<sup>Required</sup> <a name="share_status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.shareStatus"></a>

```python
share_status: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tags"></a>

```python
tags: Route53ResolverFirewallRuleGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList">Route53ResolverFirewallRuleGroupTagsList</a>

---

##### `firewall_rules_input`<sup>Optional</sup> <a name="firewall_rules_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRulesInput"></a>

```python
firewall_rules_input: IResolvable | typing.List[Route53ResolverFirewallRuleGroupFirewallRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Route53ResolverFirewallRuleGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleGroupConfig <a name="Route53ResolverFirewallRuleGroupConfig" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firewall_rules: IResolvable | typing.List[Route53ResolverFirewallRuleGroupFirewallRules] = None,
  name: str = None,
  tags: IResolvable | typing.List[Route53ResolverFirewallRuleGroupTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.firewallRules">firewall_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>]</code> | FirewallRules. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.name">name</a></code> | <code>str</code> | FirewallRuleGroupName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>]</code> | Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firewall_rules`<sup>Optional</sup> <a name="firewall_rules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.firewallRules"></a>

```python
firewall_rules: IResolvable | typing.List[Route53ResolverFirewallRuleGroupFirewallRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>]

FirewallRules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_rules Route53ResolverFirewallRuleGroup#firewall_rules}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

FirewallRuleGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#name Route53ResolverFirewallRuleGroup#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Route53ResolverFirewallRuleGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>]

Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#tags Route53ResolverFirewallRuleGroup#tags}

---

### Route53ResolverFirewallRuleGroupFirewallRules <a name="Route53ResolverFirewallRuleGroupFirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules(
  action: str = None,
  block_override_dns_type: str = None,
  block_override_domain: str = None,
  block_override_ttl: typing.Union[int, float] = None,
  block_response: str = None,
  confidence_threshold: str = None,
  dns_threat_protection: str = None,
  firewall_domain_list_id: str = None,
  firewall_domain_redirection_action: str = None,
  firewall_rule_type: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType = None,
  firewall_threat_protection_id: str = None,
  priority: typing.Union[int, float] = None,
  qtype: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.action">action</a></code> | <code>str</code> | Rule Action. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDnsType">block_override_dns_type</a></code> | <code>str</code> | BlockOverrideDnsType. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDomain">block_override_domain</a></code> | <code>str</code> | BlockOverrideDomain. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideTtl">block_override_ttl</a></code> | <code>typing.Union[int, float]</code> | BlockOverrideTtl. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockResponse">block_response</a></code> | <code>str</code> | BlockResponse. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.confidenceThreshold">confidence_threshold</a></code> | <code>str</code> | ConfidenceThreshold. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.dnsThreatProtection">dns_threat_protection</a></code> | <code>str</code> | DnsThreatProtection. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainListId">firewall_domain_list_id</a></code> | <code>str</code> | ResourceId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainRedirectionAction">firewall_domain_redirection_action</a></code> | <code>str</code> | FirewallDomainRedirectionAction. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallRuleType">firewall_rule_type</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a></code> | Advanced firewall rule type. Mutually exclusive with FirewallDomainListId and DnsThreatProtection/ConfidenceThreshold. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallThreatProtectionId">firewall_threat_protection_id</a></code> | <code>str</code> | ResourceId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Rule Priority. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.qtype">qtype</a></code> | <code>str</code> | Qtype. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.status">status</a></code> | <code>str</code> | The status of the firewall rule. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.action"></a>

```python
action: str
```

- *Type:* str

Rule Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#action Route53ResolverFirewallRuleGroup#action}

---

##### `block_override_dns_type`<sup>Optional</sup> <a name="block_override_dns_type" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDnsType"></a>

```python
block_override_dns_type: str
```

- *Type:* str

BlockOverrideDnsType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#block_override_dns_type Route53ResolverFirewallRuleGroup#block_override_dns_type}

---

##### `block_override_domain`<sup>Optional</sup> <a name="block_override_domain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDomain"></a>

```python
block_override_domain: str
```

- *Type:* str

BlockOverrideDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#block_override_domain Route53ResolverFirewallRuleGroup#block_override_domain}

---

##### `block_override_ttl`<sup>Optional</sup> <a name="block_override_ttl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideTtl"></a>

```python
block_override_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

BlockOverrideTtl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#block_override_ttl Route53ResolverFirewallRuleGroup#block_override_ttl}

---

##### `block_response`<sup>Optional</sup> <a name="block_response" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockResponse"></a>

```python
block_response: str
```

- *Type:* str

BlockResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#block_response Route53ResolverFirewallRuleGroup#block_response}

---

##### `confidence_threshold`<sup>Optional</sup> <a name="confidence_threshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.confidenceThreshold"></a>

```python
confidence_threshold: str
```

- *Type:* str

ConfidenceThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#confidence_threshold Route53ResolverFirewallRuleGroup#confidence_threshold}

---

##### `dns_threat_protection`<sup>Optional</sup> <a name="dns_threat_protection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.dnsThreatProtection"></a>

```python
dns_threat_protection: str
```

- *Type:* str

DnsThreatProtection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#dns_threat_protection Route53ResolverFirewallRuleGroup#dns_threat_protection}

---

##### `firewall_domain_list_id`<sup>Optional</sup> <a name="firewall_domain_list_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainListId"></a>

```python
firewall_domain_list_id: str
```

- *Type:* str

ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_domain_list_id Route53ResolverFirewallRuleGroup#firewall_domain_list_id}

---

##### `firewall_domain_redirection_action`<sup>Optional</sup> <a name="firewall_domain_redirection_action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainRedirectionAction"></a>

```python
firewall_domain_redirection_action: str
```

- *Type:* str

FirewallDomainRedirectionAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_domain_redirection_action Route53ResolverFirewallRuleGroup#firewall_domain_redirection_action}

---

##### `firewall_rule_type`<sup>Optional</sup> <a name="firewall_rule_type" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallRuleType"></a>

```python
firewall_rule_type: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

Advanced firewall rule type. Mutually exclusive with FirewallDomainListId and DnsThreatProtection/ConfidenceThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_rule_type Route53ResolverFirewallRuleGroup#firewall_rule_type}

---

##### `firewall_threat_protection_id`<sup>Optional</sup> <a name="firewall_threat_protection_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallThreatProtectionId"></a>

```python
firewall_threat_protection_id: str
```

- *Type:* str

ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_threat_protection_id Route53ResolverFirewallRuleGroup#firewall_threat_protection_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Rule Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#priority Route53ResolverFirewallRuleGroup#priority}

---

##### `qtype`<sup>Optional</sup> <a name="qtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.qtype"></a>

```python
qtype: str
```

- *Type:* str

Qtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#qtype Route53ResolverFirewallRuleGroup#qtype}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the firewall rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#status Route53ResolverFirewallRuleGroup#status}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType(
  firewall_advanced_content_category: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory = None,
  firewall_advanced_threat_category: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory = None,
  partner_threat_protection: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedContentCategory">firewall_advanced_content_category</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a></code> | Configuration for an advanced content category rule type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedThreatCategory">firewall_advanced_threat_category</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a></code> | Configuration for an advanced threat category rule type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.partnerThreatProtection">partner_threat_protection</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a></code> | Configuration for a partner threat protection rule type. |

---

##### `firewall_advanced_content_category`<sup>Optional</sup> <a name="firewall_advanced_content_category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedContentCategory"></a>

```python
firewall_advanced_content_category: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

Configuration for an advanced content category rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_content_category Route53ResolverFirewallRuleGroup#firewall_advanced_content_category}

---

##### `firewall_advanced_threat_category`<sup>Optional</sup> <a name="firewall_advanced_threat_category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedThreatCategory"></a>

```python
firewall_advanced_threat_category: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

Configuration for an advanced threat category rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_threat_category Route53ResolverFirewallRuleGroup#firewall_advanced_threat_category}

---

##### `partner_threat_protection`<sup>Optional</sup> <a name="partner_threat_protection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.partnerThreatProtection"></a>

```python
partner_threat_protection: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

Configuration for a partner threat protection rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#partner_threat_protection Route53ResolverFirewallRuleGroup#partner_threat_protection}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory(
  category: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.property.category">category</a></code> | <code>str</code> | The content category value. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.property.category"></a>

```python
category: str
```

- *Type:* str

The content category value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#category Route53ResolverFirewallRuleGroup#category}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory(
  category: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.property.category">category</a></code> | <code>str</code> | The threat category value. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.property.category"></a>

```python
category: str
```

- *Type:* str

The threat category value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#category Route53ResolverFirewallRuleGroup#category}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection(
  partner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.property.partner">partner</a></code> | <code>str</code> | The partner identifier value. |

---

##### `partner`<sup>Optional</sup> <a name="partner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.property.partner"></a>

```python
partner: str
```

- *Type:* str

The partner identifier value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#partner Route53ResolverFirewallRuleGroup#partner}

---

### Route53ResolverFirewallRuleGroupTags <a name="Route53ResolverFirewallRuleGroupTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#key Route53ResolverFirewallRuleGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#value Route53ResolverFirewallRuleGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resetCategory">reset_category</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_category` <a name="reset_category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resetCategory"></a>

```python
def reset_category() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resetCategory">reset_category</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_category` <a name="reset_category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resetCategory"></a>

```python
def reset_category() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory">put_firewall_advanced_content_category</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory">put_firewall_advanced_threat_category</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection">put_partner_threat_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedContentCategory">reset_firewall_advanced_content_category</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedThreatCategory">reset_firewall_advanced_threat_category</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetPartnerThreatProtection">reset_partner_threat_protection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_firewall_advanced_content_category` <a name="put_firewall_advanced_content_category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory"></a>

```python
def put_firewall_advanced_content_category(
  category: str = None
) -> None
```

###### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory.parameter.category"></a>

- *Type:* str

The content category value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#category Route53ResolverFirewallRuleGroup#category}

---

##### `put_firewall_advanced_threat_category` <a name="put_firewall_advanced_threat_category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory"></a>

```python
def put_firewall_advanced_threat_category(
  category: str = None
) -> None
```

###### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory.parameter.category"></a>

- *Type:* str

The threat category value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#category Route53ResolverFirewallRuleGroup#category}

---

##### `put_partner_threat_protection` <a name="put_partner_threat_protection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection"></a>

```python
def put_partner_threat_protection(
  partner: str = None
) -> None
```

###### `partner`<sup>Optional</sup> <a name="partner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection.parameter.partner"></a>

- *Type:* str

The partner identifier value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#partner Route53ResolverFirewallRuleGroup#partner}

---

##### `reset_firewall_advanced_content_category` <a name="reset_firewall_advanced_content_category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedContentCategory"></a>

```python
def reset_firewall_advanced_content_category() -> None
```

##### `reset_firewall_advanced_threat_category` <a name="reset_firewall_advanced_threat_category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedThreatCategory"></a>

```python
def reset_firewall_advanced_threat_category() -> None
```

##### `reset_partner_threat_protection` <a name="reset_partner_threat_protection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetPartnerThreatProtection"></a>

```python
def reset_partner_threat_protection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategory">firewall_advanced_content_category</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategory">firewall_advanced_threat_category</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtection">partner_threat_protection</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategoryInput">firewall_advanced_content_category_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategoryInput">firewall_advanced_threat_category_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtectionInput">partner_threat_protection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `firewall_advanced_content_category`<sup>Required</sup> <a name="firewall_advanced_content_category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategory"></a>

```python
firewall_advanced_content_category: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference</a>

---

##### `firewall_advanced_threat_category`<sup>Required</sup> <a name="firewall_advanced_threat_category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategory"></a>

```python
firewall_advanced_threat_category: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference</a>

---

##### `partner_threat_protection`<sup>Required</sup> <a name="partner_threat_protection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtection"></a>

```python
partner_threat_protection: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference</a>

---

##### `firewall_advanced_content_category_input`<sup>Optional</sup> <a name="firewall_advanced_content_category_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategoryInput"></a>

```python
firewall_advanced_content_category_input: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

---

##### `firewall_advanced_threat_category_input`<sup>Optional</sup> <a name="firewall_advanced_threat_category_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategoryInput"></a>

```python
firewall_advanced_threat_category_input: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

---

##### `partner_threat_protection_input`<sup>Optional</sup> <a name="partner_threat_protection_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtectionInput"></a>

```python
partner_threat_protection_input: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resetPartner">reset_partner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_partner` <a name="reset_partner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resetPartner"></a>

```python
def reset_partner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partnerInput">partner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partner">partner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partner_input`<sup>Optional</sup> <a name="partner_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partnerInput"></a>

```python
partner_input: str
```

- *Type:* str

---

##### `partner`<sup>Required</sup> <a name="partner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partner"></a>

```python
partner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesList <a name="Route53ResolverFirewallRuleGroupFirewallRulesList" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53ResolverFirewallRuleGroupFirewallRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53ResolverFirewallRuleGroupFirewallRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>]

---


### Route53ResolverFirewallRuleGroupFirewallRulesOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType">put_firewall_rule_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDnsType">reset_block_override_dns_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDomain">reset_block_override_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideTtl">reset_block_override_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockResponse">reset_block_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetConfidenceThreshold">reset_confidence_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetDnsThreatProtection">reset_dns_threat_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainListId">reset_firewall_domain_list_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainRedirectionAction">reset_firewall_domain_redirection_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallRuleType">reset_firewall_rule_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallThreatProtectionId">reset_firewall_threat_protection_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetQtype">reset_qtype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_firewall_rule_type` <a name="put_firewall_rule_type" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType"></a>

```python
def put_firewall_rule_type(
  firewall_advanced_content_category: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory = None,
  firewall_advanced_threat_category: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory = None,
  partner_threat_protection: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection = None
) -> None
```

###### `firewall_advanced_content_category`<sup>Optional</sup> <a name="firewall_advanced_content_category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType.parameter.firewallAdvancedContentCategory"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

Configuration for an advanced content category rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_content_category Route53ResolverFirewallRuleGroup#firewall_advanced_content_category}

---

###### `firewall_advanced_threat_category`<sup>Optional</sup> <a name="firewall_advanced_threat_category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType.parameter.firewallAdvancedThreatCategory"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

Configuration for an advanced threat category rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_threat_category Route53ResolverFirewallRuleGroup#firewall_advanced_threat_category}

---

###### `partner_threat_protection`<sup>Optional</sup> <a name="partner_threat_protection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType.parameter.partnerThreatProtection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

Configuration for a partner threat protection rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#partner_threat_protection Route53ResolverFirewallRuleGroup#partner_threat_protection}

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_block_override_dns_type` <a name="reset_block_override_dns_type" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDnsType"></a>

```python
def reset_block_override_dns_type() -> None
```

##### `reset_block_override_domain` <a name="reset_block_override_domain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDomain"></a>

```python
def reset_block_override_domain() -> None
```

##### `reset_block_override_ttl` <a name="reset_block_override_ttl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideTtl"></a>

```python
def reset_block_override_ttl() -> None
```

##### `reset_block_response` <a name="reset_block_response" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockResponse"></a>

```python
def reset_block_response() -> None
```

##### `reset_confidence_threshold` <a name="reset_confidence_threshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetConfidenceThreshold"></a>

```python
def reset_confidence_threshold() -> None
```

##### `reset_dns_threat_protection` <a name="reset_dns_threat_protection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetDnsThreatProtection"></a>

```python
def reset_dns_threat_protection() -> None
```

##### `reset_firewall_domain_list_id` <a name="reset_firewall_domain_list_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainListId"></a>

```python
def reset_firewall_domain_list_id() -> None
```

##### `reset_firewall_domain_redirection_action` <a name="reset_firewall_domain_redirection_action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainRedirectionAction"></a>

```python
def reset_firewall_domain_redirection_action() -> None
```

##### `reset_firewall_rule_type` <a name="reset_firewall_rule_type" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallRuleType"></a>

```python
def reset_firewall_rule_type() -> None
```

##### `reset_firewall_threat_protection_id` <a name="reset_firewall_threat_protection_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallThreatProtectionId"></a>

```python
def reset_firewall_threat_protection_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_qtype` <a name="reset_qtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetQtype"></a>

```python
def reset_qtype() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleType">firewall_rule_type</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsTypeInput">block_override_dns_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomainInput">block_override_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtlInput">block_override_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponseInput">block_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThresholdInput">confidence_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtectionInput">dns_threat_protection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListIdInput">firewall_domain_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionActionInput">firewall_domain_redirection_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleTypeInput">firewall_rule_type_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionIdInput">firewall_threat_protection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtypeInput">qtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsType">block_override_dns_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomain">block_override_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtl">block_override_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponse">block_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThreshold">confidence_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtection">dns_threat_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListId">firewall_domain_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionAction">firewall_domain_redirection_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionId">firewall_threat_protection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtype">qtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `firewall_rule_type`<sup>Required</sup> <a name="firewall_rule_type" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleType"></a>

```python
firewall_rule_type: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `block_override_dns_type_input`<sup>Optional</sup> <a name="block_override_dns_type_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsTypeInput"></a>

```python
block_override_dns_type_input: str
```

- *Type:* str

---

##### `block_override_domain_input`<sup>Optional</sup> <a name="block_override_domain_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomainInput"></a>

```python
block_override_domain_input: str
```

- *Type:* str

---

##### `block_override_ttl_input`<sup>Optional</sup> <a name="block_override_ttl_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtlInput"></a>

```python
block_override_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `block_response_input`<sup>Optional</sup> <a name="block_response_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponseInput"></a>

```python
block_response_input: str
```

- *Type:* str

---

##### `confidence_threshold_input`<sup>Optional</sup> <a name="confidence_threshold_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThresholdInput"></a>

```python
confidence_threshold_input: str
```

- *Type:* str

---

##### `dns_threat_protection_input`<sup>Optional</sup> <a name="dns_threat_protection_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtectionInput"></a>

```python
dns_threat_protection_input: str
```

- *Type:* str

---

##### `firewall_domain_list_id_input`<sup>Optional</sup> <a name="firewall_domain_list_id_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListIdInput"></a>

```python
firewall_domain_list_id_input: str
```

- *Type:* str

---

##### `firewall_domain_redirection_action_input`<sup>Optional</sup> <a name="firewall_domain_redirection_action_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionActionInput"></a>

```python
firewall_domain_redirection_action_input: str
```

- *Type:* str

---

##### `firewall_rule_type_input`<sup>Optional</sup> <a name="firewall_rule_type_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleTypeInput"></a>

```python
firewall_rule_type_input: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

---

##### `firewall_threat_protection_id_input`<sup>Optional</sup> <a name="firewall_threat_protection_id_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionIdInput"></a>

```python
firewall_threat_protection_id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qtype_input`<sup>Optional</sup> <a name="qtype_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtypeInput"></a>

```python
qtype_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `block_override_dns_type`<sup>Required</sup> <a name="block_override_dns_type" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsType"></a>

```python
block_override_dns_type: str
```

- *Type:* str

---

##### `block_override_domain`<sup>Required</sup> <a name="block_override_domain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomain"></a>

```python
block_override_domain: str
```

- *Type:* str

---

##### `block_override_ttl`<sup>Required</sup> <a name="block_override_ttl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtl"></a>

```python
block_override_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `block_response`<sup>Required</sup> <a name="block_response" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponse"></a>

```python
block_response: str
```

- *Type:* str

---

##### `confidence_threshold`<sup>Required</sup> <a name="confidence_threshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThreshold"></a>

```python
confidence_threshold: str
```

- *Type:* str

---

##### `dns_threat_protection`<sup>Required</sup> <a name="dns_threat_protection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtection"></a>

```python
dns_threat_protection: str
```

- *Type:* str

---

##### `firewall_domain_list_id`<sup>Required</sup> <a name="firewall_domain_list_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListId"></a>

```python
firewall_domain_list_id: str
```

- *Type:* str

---

##### `firewall_domain_redirection_action`<sup>Required</sup> <a name="firewall_domain_redirection_action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionAction"></a>

```python
firewall_domain_redirection_action: str
```

- *Type:* str

---

##### `firewall_threat_protection_id`<sup>Required</sup> <a name="firewall_threat_protection_id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionId"></a>

```python
firewall_threat_protection_id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qtype`<sup>Required</sup> <a name="qtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtype"></a>

```python
qtype: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53ResolverFirewallRuleGroupFirewallRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>

---


### Route53ResolverFirewallRuleGroupTagsList <a name="Route53ResolverFirewallRuleGroupTagsList" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53ResolverFirewallRuleGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53ResolverFirewallRuleGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>]

---


### Route53ResolverFirewallRuleGroupTagsOutputReference <a name="Route53ResolverFirewallRuleGroupTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_rule_group

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53ResolverFirewallRuleGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>

---



