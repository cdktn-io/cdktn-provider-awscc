# `networkfirewallFirewallPolicy` Submodule <a name="`networkfirewallFirewallPolicy` Submodule" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallFirewallPolicy <a name="NetworkfirewallFirewallPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy awscc_networkfirewall_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firewall_policy: NetworkfirewallFirewallPolicyFirewallPolicy,
  firewall_policy_name: str,
  description: str = None,
  tags: IResolvable | typing.List[NetworkfirewallFirewallPolicyTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.firewallPolicy">firewall_policy</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.firewallPolicyName">firewall_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy_name NetworkfirewallFirewallPolicy#firewall_policy_name}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#description NetworkfirewallFirewallPolicy#description}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tags NetworkfirewallFirewallPolicy#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.firewallPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}.

---

##### `firewall_policy_name`<sup>Required</sup> <a name="firewall_policy_name" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.firewallPolicyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy_name NetworkfirewallFirewallPolicy#firewall_policy_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#description NetworkfirewallFirewallPolicy#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tags NetworkfirewallFirewallPolicy#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy">put_firewall_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_firewall_policy` <a name="put_firewall_policy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy"></a>

```python
def put_firewall_policy(
  stateless_default_actions: typing.List[str],
  stateless_fragment_default_actions: typing.List[str],
  enable_tls_session_holding: bool | IResolvable = None,
  policy_variables: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables = None,
  stateful_default_actions: typing.List[str] = None,
  stateful_engine_options: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions = None,
  stateful_rule_group_references: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences] = None,
  stateless_custom_actions: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions] = None,
  stateless_rule_group_references: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences] = None,
  tls_inspection_configuration_arn: str = None
) -> None
```

###### `stateless_default_actions`<sup>Required</sup> <a name="stateless_default_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy.parameter.statelessDefaultActions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_default_actions NetworkfirewallFirewallPolicy#stateless_default_actions}.

---

###### `stateless_fragment_default_actions`<sup>Required</sup> <a name="stateless_fragment_default_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy.parameter.statelessFragmentDefaultActions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_fragment_default_actions NetworkfirewallFirewallPolicy#stateless_fragment_default_actions}.

---

###### `enable_tls_session_holding`<sup>Optional</sup> <a name="enable_tls_session_holding" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy.parameter.enableTlsSessionHolding"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#enable_tls_session_holding NetworkfirewallFirewallPolicy#enable_tls_session_holding}.

---

###### `policy_variables`<sup>Optional</sup> <a name="policy_variables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy.parameter.policyVariables"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#policy_variables NetworkfirewallFirewallPolicy#policy_variables}.

---

###### `stateful_default_actions`<sup>Optional</sup> <a name="stateful_default_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy.parameter.statefulDefaultActions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_default_actions NetworkfirewallFirewallPolicy#stateful_default_actions}.

---

###### `stateful_engine_options`<sup>Optional</sup> <a name="stateful_engine_options" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy.parameter.statefulEngineOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_engine_options NetworkfirewallFirewallPolicy#stateful_engine_options}.

---

###### `stateful_rule_group_references`<sup>Optional</sup> <a name="stateful_rule_group_references" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy.parameter.statefulRuleGroupReferences"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_rule_group_references NetworkfirewallFirewallPolicy#stateful_rule_group_references}.

---

###### `stateless_custom_actions`<sup>Optional</sup> <a name="stateless_custom_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy.parameter.statelessCustomActions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_custom_actions NetworkfirewallFirewallPolicy#stateless_custom_actions}.

---

###### `stateless_rule_group_references`<sup>Optional</sup> <a name="stateless_rule_group_references" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy.parameter.statelessRuleGroupReferences"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_rule_group_references NetworkfirewallFirewallPolicy#stateless_rule_group_references}.

---

###### `tls_inspection_configuration_arn`<sup>Optional</sup> <a name="tls_inspection_configuration_arn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy.parameter.tlsInspectionConfigurationArn"></a>

- *Type:* str

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tls_inspection_configuration_arn NetworkfirewallFirewallPolicy#tls_inspection_configuration_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkfirewallFirewallPolicyTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkfirewallFirewallPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkfirewallFirewallPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkfirewallFirewallPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkfirewallFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicy">firewall_policy</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyArn">firewall_policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyId">firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList">NetworkfirewallFirewallPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyInput">firewall_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyNameInput">firewall_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyName">firewall_policy_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicy"></a>

```python
firewall_policy: NetworkfirewallFirewallPolicyFirewallPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyOutputReference</a>

---

##### `firewall_policy_arn`<sup>Required</sup> <a name="firewall_policy_arn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyArn"></a>

```python
firewall_policy_arn: str
```

- *Type:* str

---

##### `firewall_policy_id`<sup>Required</sup> <a name="firewall_policy_id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyId"></a>

```python
firewall_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tags"></a>

```python
tags: NetworkfirewallFirewallPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList">NetworkfirewallFirewallPolicyTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `firewall_policy_input`<sup>Optional</sup> <a name="firewall_policy_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyInput"></a>

```python
firewall_policy_input: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a>

---

##### `firewall_policy_name_input`<sup>Optional</sup> <a name="firewall_policy_name_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyNameInput"></a>

```python
firewall_policy_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkfirewallFirewallPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `firewall_policy_name`<sup>Required</sup> <a name="firewall_policy_name" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyName"></a>

```python
firewall_policy_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallFirewallPolicyConfig <a name="NetworkfirewallFirewallPolicyConfig" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firewall_policy: NetworkfirewallFirewallPolicyFirewallPolicy,
  firewall_policy_name: str,
  description: str = None,
  tags: IResolvable | typing.List[NetworkfirewallFirewallPolicyTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.firewallPolicy">firewall_policy</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.firewallPolicyName">firewall_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy_name NetworkfirewallFirewallPolicy#firewall_policy_name}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#description NetworkfirewallFirewallPolicy#description}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tags NetworkfirewallFirewallPolicy#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.firewallPolicy"></a>

```python
firewall_policy: NetworkfirewallFirewallPolicyFirewallPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}.

---

##### `firewall_policy_name`<sup>Required</sup> <a name="firewall_policy_name" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.firewallPolicyName"></a>

```python
firewall_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy_name NetworkfirewallFirewallPolicy#firewall_policy_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#description NetworkfirewallFirewallPolicy#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkfirewallFirewallPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tags NetworkfirewallFirewallPolicy#tags}.

---

### NetworkfirewallFirewallPolicyFirewallPolicy <a name="NetworkfirewallFirewallPolicyFirewallPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy(
  stateless_default_actions: typing.List[str],
  stateless_fragment_default_actions: typing.List[str],
  enable_tls_session_holding: bool | IResolvable = None,
  policy_variables: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables = None,
  stateful_default_actions: typing.List[str] = None,
  stateful_engine_options: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions = None,
  stateful_rule_group_references: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences] = None,
  stateless_custom_actions: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions] = None,
  stateless_rule_group_references: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences] = None,
  tls_inspection_configuration_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessDefaultActions">stateless_default_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_default_actions NetworkfirewallFirewallPolicy#stateless_default_actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessFragmentDefaultActions">stateless_fragment_default_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_fragment_default_actions NetworkfirewallFirewallPolicy#stateless_fragment_default_actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.enableTlsSessionHolding">enable_tls_session_holding</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#enable_tls_session_holding NetworkfirewallFirewallPolicy#enable_tls_session_holding}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.policyVariables">policy_variables</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#policy_variables NetworkfirewallFirewallPolicy#policy_variables}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulDefaultActions">stateful_default_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_default_actions NetworkfirewallFirewallPolicy#stateful_default_actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulEngineOptions">stateful_engine_options</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_engine_options NetworkfirewallFirewallPolicy#stateful_engine_options}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulRuleGroupReferences">stateful_rule_group_references</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_rule_group_references NetworkfirewallFirewallPolicy#stateful_rule_group_references}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessCustomActions">stateless_custom_actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_custom_actions NetworkfirewallFirewallPolicy#stateless_custom_actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessRuleGroupReferences">stateless_rule_group_references</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_rule_group_references NetworkfirewallFirewallPolicy#stateless_rule_group_references}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.tlsInspectionConfigurationArn">tls_inspection_configuration_arn</a></code> | <code>str</code> | A resource ARN. |

---

##### `stateless_default_actions`<sup>Required</sup> <a name="stateless_default_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessDefaultActions"></a>

```python
stateless_default_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_default_actions NetworkfirewallFirewallPolicy#stateless_default_actions}.

---

##### `stateless_fragment_default_actions`<sup>Required</sup> <a name="stateless_fragment_default_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessFragmentDefaultActions"></a>

```python
stateless_fragment_default_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_fragment_default_actions NetworkfirewallFirewallPolicy#stateless_fragment_default_actions}.

---

##### `enable_tls_session_holding`<sup>Optional</sup> <a name="enable_tls_session_holding" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.enableTlsSessionHolding"></a>

```python
enable_tls_session_holding: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#enable_tls_session_holding NetworkfirewallFirewallPolicy#enable_tls_session_holding}.

---

##### `policy_variables`<sup>Optional</sup> <a name="policy_variables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.policyVariables"></a>

```python
policy_variables: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#policy_variables NetworkfirewallFirewallPolicy#policy_variables}.

---

##### `stateful_default_actions`<sup>Optional</sup> <a name="stateful_default_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulDefaultActions"></a>

```python
stateful_default_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_default_actions NetworkfirewallFirewallPolicy#stateful_default_actions}.

---

##### `stateful_engine_options`<sup>Optional</sup> <a name="stateful_engine_options" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulEngineOptions"></a>

```python
stateful_engine_options: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_engine_options NetworkfirewallFirewallPolicy#stateful_engine_options}.

---

##### `stateful_rule_group_references`<sup>Optional</sup> <a name="stateful_rule_group_references" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulRuleGroupReferences"></a>

```python
stateful_rule_group_references: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_rule_group_references NetworkfirewallFirewallPolicy#stateful_rule_group_references}.

---

##### `stateless_custom_actions`<sup>Optional</sup> <a name="stateless_custom_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessCustomActions"></a>

```python
stateless_custom_actions: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_custom_actions NetworkfirewallFirewallPolicy#stateless_custom_actions}.

---

##### `stateless_rule_group_references`<sup>Optional</sup> <a name="stateless_rule_group_references" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessRuleGroupReferences"></a>

```python
stateless_rule_group_references: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_rule_group_references NetworkfirewallFirewallPolicy#stateless_rule_group_references}.

---

##### `tls_inspection_configuration_arn`<sup>Optional</sup> <a name="tls_inspection_configuration_arn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.tlsInspectionConfigurationArn"></a>

```python
tls_inspection_configuration_arn: str
```

- *Type:* str

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tls_inspection_configuration_arn NetworkfirewallFirewallPolicy#tls_inspection_configuration_arn}

---

### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables(
  rule_variables: IResolvable | typing.Mapping[NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables.property.ruleVariables">rule_variables</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_variables NetworkfirewallFirewallPolicy#rule_variables}. |

---

##### `rule_variables`<sup>Optional</sup> <a name="rule_variables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables.property.ruleVariables"></a>

```python
rule_variables: IResolvable | typing.Mapping[NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_variables NetworkfirewallFirewallPolicy#rule_variables}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables(
  definition: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables.property.definition">definition</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#definition NetworkfirewallFirewallPolicy#definition}. |

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables.property.definition"></a>

```python
definition: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#definition NetworkfirewallFirewallPolicy#definition}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions(
  flow_timeouts: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts = None,
  rule_order: str = None,
  stream_exception_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.flowTimeouts">flow_timeouts</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#flow_timeouts NetworkfirewallFirewallPolicy#flow_timeouts}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.ruleOrder">rule_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_order NetworkfirewallFirewallPolicy#rule_order}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.streamExceptionPolicy">stream_exception_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stream_exception_policy NetworkfirewallFirewallPolicy#stream_exception_policy}. |

---

##### `flow_timeouts`<sup>Optional</sup> <a name="flow_timeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.flowTimeouts"></a>

```python
flow_timeouts: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#flow_timeouts NetworkfirewallFirewallPolicy#flow_timeouts}.

---

##### `rule_order`<sup>Optional</sup> <a name="rule_order" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.ruleOrder"></a>

```python
rule_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_order NetworkfirewallFirewallPolicy#rule_order}.

---

##### `stream_exception_policy`<sup>Optional</sup> <a name="stream_exception_policy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.streamExceptionPolicy"></a>

```python
stream_exception_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stream_exception_policy NetworkfirewallFirewallPolicy#stream_exception_policy}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts(
  tcp_idle_timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts.property.tcpIdleTimeoutSeconds">tcp_idle_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tcp_idle_timeout_seconds NetworkfirewallFirewallPolicy#tcp_idle_timeout_seconds}. |

---

##### `tcp_idle_timeout_seconds`<sup>Optional</sup> <a name="tcp_idle_timeout_seconds" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts.property.tcpIdleTimeoutSeconds"></a>

```python
tcp_idle_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tcp_idle_timeout_seconds NetworkfirewallFirewallPolicy#tcp_idle_timeout_seconds}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences(
  deep_threat_inspection: bool | IResolvable = None,
  override: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride = None,
  priority: typing.Union[int, float] = None,
  resource_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.deepThreatInspection">deep_threat_inspection</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#deep_threat_inspection NetworkfirewallFirewallPolicy#deep_threat_inspection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.override">override</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#override NetworkfirewallFirewallPolicy#override}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.resourceArn">resource_arn</a></code> | <code>str</code> | A resource ARN. |

---

##### `deep_threat_inspection`<sup>Optional</sup> <a name="deep_threat_inspection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.deepThreatInspection"></a>

```python
deep_threat_inspection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#deep_threat_inspection NetworkfirewallFirewallPolicy#deep_threat_inspection}.

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.override"></a>

```python
override: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#override NetworkfirewallFirewallPolicy#override}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}.

---

##### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#resource_arn NetworkfirewallFirewallPolicy#resource_arn}

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride(
  action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action NetworkfirewallFirewallPolicy#action}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action NetworkfirewallFirewallPolicy#action}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions(
  action_definition: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition = None,
  action_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.property.actionDefinition">action_definition</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action_definition NetworkfirewallFirewallPolicy#action_definition}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.property.actionName">action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action_name NetworkfirewallFirewallPolicy#action_name}. |

---

##### `action_definition`<sup>Optional</sup> <a name="action_definition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.property.actionDefinition"></a>

```python
action_definition: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action_definition NetworkfirewallFirewallPolicy#action_definition}.

---

##### `action_name`<sup>Optional</sup> <a name="action_name" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action_name NetworkfirewallFirewallPolicy#action_name}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition(
  publish_metric_action: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition.property.publishMetricAction">publish_metric_action</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}. |

---

##### `publish_metric_action`<sup>Optional</sup> <a name="publish_metric_action" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition.property.publishMetricAction"></a>

```python
publish_metric_action: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction(
  dimensions: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#dimensions NetworkfirewallFirewallPolicy#dimensions}. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction.property.dimensions"></a>

```python
dimensions: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#dimensions NetworkfirewallFirewallPolicy#dimensions}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#value NetworkfirewallFirewallPolicy#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#value NetworkfirewallFirewallPolicy#value}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences(
  priority: typing.Union[int, float] = None,
  resource_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.property.resourceArn">resource_arn</a></code> | <code>str</code> | A resource ARN. |

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}.

---

##### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#resource_arn NetworkfirewallFirewallPolicy#resource_arn}

---

### NetworkfirewallFirewallPolicyTags <a name="NetworkfirewallFirewallPolicyTags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#key NetworkfirewallFirewallPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#value NetworkfirewallFirewallPolicy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#key NetworkfirewallFirewallPolicy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#value NetworkfirewallFirewallPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallFirewallPolicyFirewallPolicyOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putPolicyVariables">put_policy_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulEngineOptions">put_stateful_engine_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulRuleGroupReferences">put_stateful_rule_group_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessCustomActions">put_stateless_custom_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessRuleGroupReferences">put_stateless_rule_group_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetEnableTlsSessionHolding">reset_enable_tls_session_holding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetPolicyVariables">reset_policy_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulDefaultActions">reset_stateful_default_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulEngineOptions">reset_stateful_engine_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulRuleGroupReferences">reset_stateful_rule_group_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatelessCustomActions">reset_stateless_custom_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatelessRuleGroupReferences">reset_stateless_rule_group_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetTlsInspectionConfigurationArn">reset_tls_inspection_configuration_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_policy_variables` <a name="put_policy_variables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putPolicyVariables"></a>

```python
def put_policy_variables(
  rule_variables: IResolvable | typing.Mapping[NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables] = None
) -> None
```

###### `rule_variables`<sup>Optional</sup> <a name="rule_variables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putPolicyVariables.parameter.ruleVariables"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_variables NetworkfirewallFirewallPolicy#rule_variables}.

---

##### `put_stateful_engine_options` <a name="put_stateful_engine_options" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulEngineOptions"></a>

```python
def put_stateful_engine_options(
  flow_timeouts: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts = None,
  rule_order: str = None,
  stream_exception_policy: str = None
) -> None
```

###### `flow_timeouts`<sup>Optional</sup> <a name="flow_timeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulEngineOptions.parameter.flowTimeouts"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#flow_timeouts NetworkfirewallFirewallPolicy#flow_timeouts}.

---

###### `rule_order`<sup>Optional</sup> <a name="rule_order" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulEngineOptions.parameter.ruleOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_order NetworkfirewallFirewallPolicy#rule_order}.

---

###### `stream_exception_policy`<sup>Optional</sup> <a name="stream_exception_policy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulEngineOptions.parameter.streamExceptionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stream_exception_policy NetworkfirewallFirewallPolicy#stream_exception_policy}.

---

##### `put_stateful_rule_group_references` <a name="put_stateful_rule_group_references" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulRuleGroupReferences"></a>

```python
def put_stateful_rule_group_references(
  value: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulRuleGroupReferences.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>]

---

##### `put_stateless_custom_actions` <a name="put_stateless_custom_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessCustomActions"></a>

```python
def put_stateless_custom_actions(
  value: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessCustomActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>]

---

##### `put_stateless_rule_group_references` <a name="put_stateless_rule_group_references" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessRuleGroupReferences"></a>

```python
def put_stateless_rule_group_references(
  value: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessRuleGroupReferences.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>]

---

##### `reset_enable_tls_session_holding` <a name="reset_enable_tls_session_holding" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetEnableTlsSessionHolding"></a>

```python
def reset_enable_tls_session_holding() -> None
```

##### `reset_policy_variables` <a name="reset_policy_variables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetPolicyVariables"></a>

```python
def reset_policy_variables() -> None
```

##### `reset_stateful_default_actions` <a name="reset_stateful_default_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulDefaultActions"></a>

```python
def reset_stateful_default_actions() -> None
```

##### `reset_stateful_engine_options` <a name="reset_stateful_engine_options" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulEngineOptions"></a>

```python
def reset_stateful_engine_options() -> None
```

##### `reset_stateful_rule_group_references` <a name="reset_stateful_rule_group_references" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulRuleGroupReferences"></a>

```python
def reset_stateful_rule_group_references() -> None
```

##### `reset_stateless_custom_actions` <a name="reset_stateless_custom_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatelessCustomActions"></a>

```python
def reset_stateless_custom_actions() -> None
```

##### `reset_stateless_rule_group_references` <a name="reset_stateless_rule_group_references" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatelessRuleGroupReferences"></a>

```python
def reset_stateless_rule_group_references() -> None
```

##### `reset_tls_inspection_configuration_arn` <a name="reset_tls_inspection_configuration_arn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetTlsInspectionConfigurationArn"></a>

```python
def reset_tls_inspection_configuration_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariables">policy_variables</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptions">stateful_engine_options</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferences">stateful_rule_group_references</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActions">stateless_custom_actions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferences">stateless_rule_group_references</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHoldingInput">enable_tls_session_holding_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariablesInput">policy_variables_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActionsInput">stateful_default_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptionsInput">stateful_engine_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferencesInput">stateful_rule_group_references_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActionsInput">stateless_custom_actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActionsInput">stateless_default_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActionsInput">stateless_fragment_default_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferencesInput">stateless_rule_group_references_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArnInput">tls_inspection_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHolding">enable_tls_session_holding</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActions">stateful_default_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActions">stateless_default_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActions">stateless_fragment_default_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArn">tls_inspection_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_variables`<sup>Required</sup> <a name="policy_variables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariables"></a>

```python
policy_variables: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference</a>

---

##### `stateful_engine_options`<sup>Required</sup> <a name="stateful_engine_options" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptions"></a>

```python
stateful_engine_options: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference</a>

---

##### `stateful_rule_group_references`<sup>Required</sup> <a name="stateful_rule_group_references" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferences"></a>

```python
stateful_rule_group_references: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList</a>

---

##### `stateless_custom_actions`<sup>Required</sup> <a name="stateless_custom_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActions"></a>

```python
stateless_custom_actions: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList</a>

---

##### `stateless_rule_group_references`<sup>Required</sup> <a name="stateless_rule_group_references" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferences"></a>

```python
stateless_rule_group_references: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList</a>

---

##### `enable_tls_session_holding_input`<sup>Optional</sup> <a name="enable_tls_session_holding_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHoldingInput"></a>

```python
enable_tls_session_holding_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `policy_variables_input`<sup>Optional</sup> <a name="policy_variables_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariablesInput"></a>

```python
policy_variables_input: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a>

---

##### `stateful_default_actions_input`<sup>Optional</sup> <a name="stateful_default_actions_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActionsInput"></a>

```python
stateful_default_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stateful_engine_options_input`<sup>Optional</sup> <a name="stateful_engine_options_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptionsInput"></a>

```python
stateful_engine_options_input: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a>

---

##### `stateful_rule_group_references_input`<sup>Optional</sup> <a name="stateful_rule_group_references_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferencesInput"></a>

```python
stateful_rule_group_references_input: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>]

---

##### `stateless_custom_actions_input`<sup>Optional</sup> <a name="stateless_custom_actions_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActionsInput"></a>

```python
stateless_custom_actions_input: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>]

---

##### `stateless_default_actions_input`<sup>Optional</sup> <a name="stateless_default_actions_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActionsInput"></a>

```python
stateless_default_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stateless_fragment_default_actions_input`<sup>Optional</sup> <a name="stateless_fragment_default_actions_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActionsInput"></a>

```python
stateless_fragment_default_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stateless_rule_group_references_input`<sup>Optional</sup> <a name="stateless_rule_group_references_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferencesInput"></a>

```python
stateless_rule_group_references_input: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>]

---

##### `tls_inspection_configuration_arn_input`<sup>Optional</sup> <a name="tls_inspection_configuration_arn_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArnInput"></a>

```python
tls_inspection_configuration_arn_input: str
```

- *Type:* str

---

##### `enable_tls_session_holding`<sup>Required</sup> <a name="enable_tls_session_holding" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHolding"></a>

```python
enable_tls_session_holding: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `stateful_default_actions`<sup>Required</sup> <a name="stateful_default_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActions"></a>

```python
stateful_default_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stateless_default_actions`<sup>Required</sup> <a name="stateless_default_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActions"></a>

```python
stateless_default_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stateless_fragment_default_actions`<sup>Required</sup> <a name="stateless_fragment_default_actions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActions"></a>

```python
stateless_fragment_default_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_inspection_configuration_arn`<sup>Required</sup> <a name="tls_inspection_configuration_arn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArn"></a>

```python
tls_inspection_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.putRuleVariables">put_rule_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resetRuleVariables">reset_rule_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule_variables` <a name="put_rule_variables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.putRuleVariables"></a>

```python
def put_rule_variables(
  value: IResolvable | typing.Mapping[NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.putRuleVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>]

---

##### `reset_rule_variables` <a name="reset_rule_variables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resetRuleVariables"></a>

```python
def reset_rule_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariables">rule_variables</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariablesInput">rule_variables_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_variables`<sup>Required</sup> <a name="rule_variables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariables"></a>

```python
rule_variables: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap</a>

---

##### `rule_variables_input`<sup>Optional</sup> <a name="rule_variables_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariablesInput"></a>

```python
rule_variables_input: IResolvable | typing.Mapping[NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.get"></a>

```python
def get(
  key: str
) -> NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>]

---


### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resetDefinition">reset_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_definition` <a name="reset_definition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resetDefinition"></a>

```python
def reset_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definitionInput">definition_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definition">definition</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definitionInput"></a>

```python
definition_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definition"></a>

```python
definition: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resetTcpIdleTimeoutSeconds">reset_tcp_idle_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tcp_idle_timeout_seconds` <a name="reset_tcp_idle_timeout_seconds" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resetTcpIdleTimeoutSeconds"></a>

```python
def reset_tcp_idle_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSecondsInput">tcp_idle_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSeconds">tcp_idle_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tcp_idle_timeout_seconds_input`<sup>Optional</sup> <a name="tcp_idle_timeout_seconds_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSecondsInput"></a>

```python
tcp_idle_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_idle_timeout_seconds`<sup>Required</sup> <a name="tcp_idle_timeout_seconds" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSeconds"></a>

```python
tcp_idle_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.putFlowTimeouts">put_flow_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetFlowTimeouts">reset_flow_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetRuleOrder">reset_rule_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetStreamExceptionPolicy">reset_stream_exception_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_flow_timeouts` <a name="put_flow_timeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.putFlowTimeouts"></a>

```python
def put_flow_timeouts(
  tcp_idle_timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `tcp_idle_timeout_seconds`<sup>Optional</sup> <a name="tcp_idle_timeout_seconds" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.putFlowTimeouts.parameter.tcpIdleTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tcp_idle_timeout_seconds NetworkfirewallFirewallPolicy#tcp_idle_timeout_seconds}.

---

##### `reset_flow_timeouts` <a name="reset_flow_timeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetFlowTimeouts"></a>

```python
def reset_flow_timeouts() -> None
```

##### `reset_rule_order` <a name="reset_rule_order" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetRuleOrder"></a>

```python
def reset_rule_order() -> None
```

##### `reset_stream_exception_policy` <a name="reset_stream_exception_policy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetStreamExceptionPolicy"></a>

```python
def reset_stream_exception_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeouts">flow_timeouts</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeoutsInput">flow_timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrderInput">rule_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicyInput">stream_exception_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrder">rule_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicy">stream_exception_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_timeouts`<sup>Required</sup> <a name="flow_timeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeouts"></a>

```python
flow_timeouts: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference</a>

---

##### `flow_timeouts_input`<sup>Optional</sup> <a name="flow_timeouts_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeoutsInput"></a>

```python
flow_timeouts_input: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a>

---

##### `rule_order_input`<sup>Optional</sup> <a name="rule_order_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrderInput"></a>

```python
rule_order_input: str
```

- *Type:* str

---

##### `stream_exception_policy_input`<sup>Optional</sup> <a name="stream_exception_policy_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicyInput"></a>

```python
stream_exception_policy_input: str
```

- *Type:* str

---

##### `rule_order`<sup>Required</sup> <a name="rule_order" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrder"></a>

```python
rule_order: str
```

- *Type:* str

---

##### `stream_exception_policy`<sup>Required</sup> <a name="stream_exception_policy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicy"></a>

```python
stream_exception_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>]

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.putOverride">put_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetDeepThreatInspection">reset_deep_threat_inspection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetOverride">reset_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetResourceArn">reset_resource_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_override` <a name="put_override" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.putOverride"></a>

```python
def put_override(
  action: str = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.putOverride.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action NetworkfirewallFirewallPolicy#action}.

---

##### `reset_deep_threat_inspection` <a name="reset_deep_threat_inspection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetDeepThreatInspection"></a>

```python
def reset_deep_threat_inspection() -> None
```

##### `reset_override` <a name="reset_override" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetOverride"></a>

```python
def reset_override() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_resource_arn` <a name="reset_resource_arn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetResourceArn"></a>

```python
def reset_resource_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.override">override</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspectionInput">deep_threat_inspection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.overrideInput">override_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspection">deep_threat_inspection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.override"></a>

```python
override: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference</a>

---

##### `deep_threat_inspection_input`<sup>Optional</sup> <a name="deep_threat_inspection_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspectionInput"></a>

```python
deep_threat_inspection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `override_input`<sup>Optional</sup> <a name="override_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.overrideInput"></a>

```python
override_input: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `deep_threat_inspection`<sup>Required</sup> <a name="deep_threat_inspection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspection"></a>

```python
deep_threat_inspection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resetAction">reset_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resetAction"></a>

```python
def reset_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.putPublishMetricAction">put_publish_metric_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resetPublishMetricAction">reset_publish_metric_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_publish_metric_action` <a name="put_publish_metric_action" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.putPublishMetricAction"></a>

```python
def put_publish_metric_action(
  dimensions: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions] = None
) -> None
```

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.putPublishMetricAction.parameter.dimensions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#dimensions NetworkfirewallFirewallPolicy#dimensions}.

---

##### `reset_publish_metric_action` <a name="reset_publish_metric_action" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resetPublishMetricAction"></a>

```python
def reset_publish_metric_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricAction">publish_metric_action</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricActionInput">publish_metric_action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `publish_metric_action`<sup>Required</sup> <a name="publish_metric_action" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricAction"></a>

```python
publish_metric_action: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference</a>

---

##### `publish_metric_action_input`<sup>Optional</sup> <a name="publish_metric_action_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricActionInput"></a>

```python
publish_metric_action_input: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>]

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>]

---

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions"></a>

```python
dimensions: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>]

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.putActionDefinition">put_action_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resetActionDefinition">reset_action_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resetActionName">reset_action_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action_definition` <a name="put_action_definition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.putActionDefinition"></a>

```python
def put_action_definition(
  publish_metric_action: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction = None
) -> None
```

###### `publish_metric_action`<sup>Optional</sup> <a name="publish_metric_action" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.putActionDefinition.parameter.publishMetricAction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}.

---

##### `reset_action_definition` <a name="reset_action_definition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resetActionDefinition"></a>

```python
def reset_action_definition() -> None
```

##### `reset_action_name` <a name="reset_action_name" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resetActionName"></a>

```python
def reset_action_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinition">action_definition</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinitionInput">action_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionNameInput">action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_definition`<sup>Required</sup> <a name="action_definition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinition"></a>

```python
action_definition: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference</a>

---

##### `action_definition_input`<sup>Optional</sup> <a name="action_definition_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinitionInput"></a>

```python
action_definition_input: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a>

---

##### `action_name_input`<sup>Optional</sup> <a name="action_name_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionNameInput"></a>

```python
action_name_input: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions</a>

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>]

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resetResourceArn">reset_resource_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_resource_arn` <a name="reset_resource_arn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resetResourceArn"></a>

```python
def reset_resource_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences</a>

---


### NetworkfirewallFirewallPolicyTagsList <a name="NetworkfirewallFirewallPolicyTagsList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallFirewallPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallFirewallPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>]

---


### NetworkfirewallFirewallPolicyTagsOutputReference <a name="NetworkfirewallFirewallPolicyTagsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall_policy

networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallPolicyTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags">NetworkfirewallFirewallPolicyTags</a>

---



