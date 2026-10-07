# `networksecuritymanagerPolicy` Submodule <a name="`networksecuritymanagerPolicy` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerPolicy <a name="NetworksecuritymanagerPolicy" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy awscc_networksecuritymanager_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firewall_type: str,
  policy_configuration: NetworksecuritymanagerPolicyPolicyConfiguration,
  policy_name: str,
  priority: typing.Union[int, float],
  associated_template_and_rule_list: IResolvable | typing.List[NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct] = None,
  policy_description: str = None,
  tags: IResolvable | typing.List[NetworksecuritymanagerPolicyTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.firewallType">firewall_type</a></code> | <code>str</code> | The type of firewall. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.policyConfiguration">policy_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | Configuration settings for policy behavior. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.policyName">policy_name</a></code> | <code>str</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.associatedTemplateAndRuleList">associated_template_and_rule_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>]</code> | List of templates and rules associated with this policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.policyDescription">policy_description</a></code> | <code>str</code> | A description of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>]</code> | The tags associated with the policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firewall_type`<sup>Required</sup> <a name="firewall_type" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.firewallType"></a>

- *Type:* str

The type of firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}

---

##### `policy_configuration`<sup>Required</sup> <a name="policy_configuration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.policyConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

Configuration settings for policy behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_configuration NetworksecuritymanagerPolicy#policy_configuration}

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.policyName"></a>

- *Type:* str

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_name NetworksecuritymanagerPolicy#policy_name}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}

---

##### `associated_template_and_rule_list`<sup>Optional</sup> <a name="associated_template_and_rule_list" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.associatedTemplateAndRuleList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>]

List of templates and rules associated with this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#associated_template_and_rule_list NetworksecuritymanagerPolicy#associated_template_and_rule_list}

---

##### `policy_description`<sup>Optional</sup> <a name="policy_description" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.policyDescription"></a>

- *Type:* str

A description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_description NetworksecuritymanagerPolicy#policy_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>]

The tags associated with the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList">put_associated_template_and_rule_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration">put_policy_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetAssociatedTemplateAndRuleList">reset_associated_template_and_rule_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetPolicyDescription">reset_policy_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_associated_template_and_rule_list` <a name="put_associated_template_and_rule_list" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList"></a>

```python
def put_associated_template_and_rule_list(
  value: IResolvable | typing.List[NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>]

---

##### `put_policy_configuration` <a name="put_policy_configuration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration"></a>

```python
def put_policy_configuration(
  remediation_enabled: bool | IResolvable = None,
  resources_clean_up: bool | IResolvable = None,
  waf_config: NetworksecuritymanagerPolicyPolicyConfigurationWafConfig = None
) -> None
```

###### `remediation_enabled`<sup>Optional</sup> <a name="remediation_enabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration.parameter.remediationEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Controls automatic remediation of non-compliant resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#remediation_enabled NetworksecuritymanagerPolicy#remediation_enabled}

---

###### `resources_clean_up`<sup>Optional</sup> <a name="resources_clean_up" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration.parameter.resourcesCleanUp"></a>

- *Type:* bool | cdktn.IResolvable

Controls automatic cleanup of unused resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#resources_clean_up NetworksecuritymanagerPolicy#resources_clean_up}

---

###### `waf_config`<sup>Optional</sup> <a name="waf_config" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration.parameter.wafConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

WAF-specific policy settings. Populated only for WAF firewall type policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#waf_config NetworksecuritymanagerPolicy#waf_config}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworksecuritymanagerPolicyTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>]

---

##### `reset_associated_template_and_rule_list` <a name="reset_associated_template_and_rule_list" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetAssociatedTemplateAndRuleList"></a>

```python
def reset_associated_template_and_rule_list() -> None
```

##### `reset_policy_description` <a name="reset_policy_description" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetPolicyDescription"></a>

```python
def reset_policy_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworksecuritymanagerPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworksecuritymanagerPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleList">associated_template_and_rule_list</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfiguration">policy_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList">NetworksecuritymanagerPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleListInput">associated_template_and_rule_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput">firewall_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfigurationInput">policy_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescriptionInput">policy_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType">firewall_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescription">policy_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_template_and_rule_list`<sup>Required</sup> <a name="associated_template_and_rule_list" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleList"></a>

```python
associated_template_and_rule_list: NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `policy_configuration`<sup>Required</sup> <a name="policy_configuration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfiguration"></a>

```python
policy_configuration: NetworksecuritymanagerPolicyPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationOutputReference</a>

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags"></a>

```python
tags: NetworksecuritymanagerPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList">NetworksecuritymanagerPolicyTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `associated_template_and_rule_list_input`<sup>Optional</sup> <a name="associated_template_and_rule_list_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleListInput"></a>

```python
associated_template_and_rule_list_input: IResolvable | typing.List[NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>]

---

##### `firewall_type_input`<sup>Optional</sup> <a name="firewall_type_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput"></a>

```python
firewall_type_input: str
```

- *Type:* str

---

##### `policy_configuration_input`<sup>Optional</sup> <a name="policy_configuration_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfigurationInput"></a>

```python
policy_configuration_input: IResolvable | NetworksecuritymanagerPolicyPolicyConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

---

##### `policy_description_input`<sup>Optional</sup> <a name="policy_description_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescriptionInput"></a>

```python
policy_description_input: str
```

- *Type:* str

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworksecuritymanagerPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>]

---

##### `firewall_type`<sup>Required</sup> <a name="firewall_type" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType"></a>

```python
firewall_type: str
```

- *Type:* str

---

##### `policy_description`<sup>Required</sup> <a name="policy_description" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescription"></a>

```python
policy_description: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct(
  rule_arn: str = None,
  template_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.ruleArn">rule_arn</a></code> | <code>str</code> | ARN of the associated rule. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.templateArn">template_arn</a></code> | <code>str</code> | ARN of the associated template. |

---

##### `rule_arn`<sup>Optional</sup> <a name="rule_arn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

ARN of the associated rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#rule_arn NetworksecuritymanagerPolicy#rule_arn}

---

##### `template_arn`<sup>Optional</sup> <a name="template_arn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.templateArn"></a>

```python
template_arn: str
```

- *Type:* str

ARN of the associated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#template_arn NetworksecuritymanagerPolicy#template_arn}

---

### NetworksecuritymanagerPolicyConfig <a name="NetworksecuritymanagerPolicyConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firewall_type: str,
  policy_configuration: NetworksecuritymanagerPolicyPolicyConfiguration,
  policy_name: str,
  priority: typing.Union[int, float],
  associated_template_and_rule_list: IResolvable | typing.List[NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct] = None,
  policy_description: str = None,
  tags: IResolvable | typing.List[NetworksecuritymanagerPolicyTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType">firewall_type</a></code> | <code>str</code> | The type of firewall. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyConfiguration">policy_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | Configuration settings for policy behavior. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyName">policy_name</a></code> | <code>str</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.associatedTemplateAndRuleList">associated_template_and_rule_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>]</code> | List of templates and rules associated with this policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyDescription">policy_description</a></code> | <code>str</code> | A description of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>]</code> | The tags associated with the policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firewall_type`<sup>Required</sup> <a name="firewall_type" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType"></a>

```python
firewall_type: str
```

- *Type:* str

The type of firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}

---

##### `policy_configuration`<sup>Required</sup> <a name="policy_configuration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyConfiguration"></a>

```python
policy_configuration: NetworksecuritymanagerPolicyPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

Configuration settings for policy behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_configuration NetworksecuritymanagerPolicy#policy_configuration}

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_name NetworksecuritymanagerPolicy#policy_name}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}

---

##### `associated_template_and_rule_list`<sup>Optional</sup> <a name="associated_template_and_rule_list" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.associatedTemplateAndRuleList"></a>

```python
associated_template_and_rule_list: IResolvable | typing.List[NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>]

List of templates and rules associated with this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#associated_template_and_rule_list NetworksecuritymanagerPolicy#associated_template_and_rule_list}

---

##### `policy_description`<sup>Optional</sup> <a name="policy_description" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyDescription"></a>

```python
policy_description: str
```

- *Type:* str

A description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_description NetworksecuritymanagerPolicy#policy_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworksecuritymanagerPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>]

The tags associated with the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}

---

### NetworksecuritymanagerPolicyPolicyConfiguration <a name="NetworksecuritymanagerPolicyPolicyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration(
  remediation_enabled: bool | IResolvable = None,
  resources_clean_up: bool | IResolvable = None,
  waf_config: NetworksecuritymanagerPolicyPolicyConfigurationWafConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.remediationEnabled">remediation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Controls automatic remediation of non-compliant resources. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.resourcesCleanUp">resources_clean_up</a></code> | <code>bool \| cdktn.IResolvable</code> | Controls automatic cleanup of unused resources. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.wafConfig">waf_config</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | WAF-specific policy settings. Populated only for WAF firewall type policies. |

---

##### `remediation_enabled`<sup>Optional</sup> <a name="remediation_enabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.remediationEnabled"></a>

```python
remediation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Controls automatic remediation of non-compliant resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#remediation_enabled NetworksecuritymanagerPolicy#remediation_enabled}

---

##### `resources_clean_up`<sup>Optional</sup> <a name="resources_clean_up" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.resourcesCleanUp"></a>

```python
resources_clean_up: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Controls automatic cleanup of unused resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#resources_clean_up NetworksecuritymanagerPolicy#resources_clean_up}

---

##### `waf_config`<sup>Optional</sup> <a name="waf_config" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.wafConfig"></a>

```python
waf_config: NetworksecuritymanagerPolicyPolicyConfigurationWafConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

WAF-specific policy settings. Populated only for WAF firewall type policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#waf_config NetworksecuritymanagerPolicy#waf_config}

---

### NetworksecuritymanagerPolicyPolicyConfigurationWafConfig <a name="NetworksecuritymanagerPolicyPolicyConfigurationWafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig(
  conflict_resolution: str = None,
  existing_customer_web_acl_resolution: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.conflictResolution">conflict_resolution</a></code> | <code>str</code> | Conflict-resolution strategy applied to AWS WAF policies. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution">existing_customer_web_acl_resolution</a></code> | <code>str</code> | Controls how Network Security Manager handles remediation when a resource already has a customer-created WebACL. |

---

##### `conflict_resolution`<sup>Optional</sup> <a name="conflict_resolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.conflictResolution"></a>

```python
conflict_resolution: str
```

- *Type:* str

Conflict-resolution strategy applied to AWS WAF policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#conflict_resolution NetworksecuritymanagerPolicy#conflict_resolution}

---

##### `existing_customer_web_acl_resolution`<sup>Optional</sup> <a name="existing_customer_web_acl_resolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution"></a>

```python
existing_customer_web_acl_resolution: str
```

- *Type:* str

Controls how Network Security Manager handles remediation when a resource already has a customer-created WebACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution NetworksecuritymanagerPolicy#existing_customer_web_acl_resolution}

---

### NetworksecuritymanagerPolicyTags <a name="NetworksecuritymanagerPolicyTags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#key NetworksecuritymanagerPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#value NetworksecuritymanagerPolicy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#key NetworksecuritymanagerPolicy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#value NetworksecuritymanagerPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>]

---


### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetRuleArn">reset_rule_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetTemplateArn">reset_template_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rule_arn` <a name="reset_rule_arn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetRuleArn"></a>

```python
def reset_rule_arn() -> None
```

##### `reset_template_arn` <a name="reset_template_arn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetTemplateArn"></a>

```python
def reset_template_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArnInput">rule_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArnInput">template_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArn">template_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_arn_input`<sup>Optional</sup> <a name="rule_arn_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArnInput"></a>

```python
rule_arn_input: str
```

- *Type:* str

---

##### `template_arn_input`<sup>Optional</sup> <a name="template_arn_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArnInput"></a>

```python
template_arn_input: str
```

- *Type:* str

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `template_arn`<sup>Required</sup> <a name="template_arn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArn"></a>

```python
template_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>

---


### NetworksecuritymanagerPolicyPolicyConfigurationOutputReference <a name="NetworksecuritymanagerPolicyPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig">put_waf_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetRemediationEnabled">reset_remediation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetResourcesCleanUp">reset_resources_clean_up</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetWafConfig">reset_waf_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_waf_config` <a name="put_waf_config" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig"></a>

```python
def put_waf_config(
  conflict_resolution: str = None,
  existing_customer_web_acl_resolution: str = None
) -> None
```

###### `conflict_resolution`<sup>Optional</sup> <a name="conflict_resolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig.parameter.conflictResolution"></a>

- *Type:* str

Conflict-resolution strategy applied to AWS WAF policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#conflict_resolution NetworksecuritymanagerPolicy#conflict_resolution}

---

###### `existing_customer_web_acl_resolution`<sup>Optional</sup> <a name="existing_customer_web_acl_resolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig.parameter.existingCustomerWebAclResolution"></a>

- *Type:* str

Controls how Network Security Manager handles remediation when a resource already has a customer-created WebACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution NetworksecuritymanagerPolicy#existing_customer_web_acl_resolution}

---

##### `reset_remediation_enabled` <a name="reset_remediation_enabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetRemediationEnabled"></a>

```python
def reset_remediation_enabled() -> None
```

##### `reset_resources_clean_up` <a name="reset_resources_clean_up" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetResourcesCleanUp"></a>

```python
def reset_resources_clean_up() -> None
```

##### `reset_waf_config` <a name="reset_waf_config" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetWafConfig"></a>

```python
def reset_waf_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfig">waf_config</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabledInput">remediation_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUpInput">resources_clean_up_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfigInput">waf_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabled">remediation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUp">resources_clean_up</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `waf_config`<sup>Required</sup> <a name="waf_config" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfig"></a>

```python
waf_config: NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference</a>

---

##### `remediation_enabled_input`<sup>Optional</sup> <a name="remediation_enabled_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabledInput"></a>

```python
remediation_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resources_clean_up_input`<sup>Optional</sup> <a name="resources_clean_up_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUpInput"></a>

```python
resources_clean_up_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `waf_config_input`<sup>Optional</sup> <a name="waf_config_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfigInput"></a>

```python
waf_config_input: IResolvable | NetworksecuritymanagerPolicyPolicyConfigurationWafConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

---

##### `remediation_enabled`<sup>Required</sup> <a name="remediation_enabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabled"></a>

```python
remediation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resources_clean_up`<sup>Required</sup> <a name="resources_clean_up" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUp"></a>

```python
resources_clean_up: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerPolicyPolicyConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

---


### NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference <a name="NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetConflictResolution">reset_conflict_resolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetExistingCustomerWebAclResolution">reset_existing_customer_web_acl_resolution</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_conflict_resolution` <a name="reset_conflict_resolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetConflictResolution"></a>

```python
def reset_conflict_resolution() -> None
```

##### `reset_existing_customer_web_acl_resolution` <a name="reset_existing_customer_web_acl_resolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetExistingCustomerWebAclResolution"></a>

```python
def reset_existing_customer_web_acl_resolution() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput">conflict_resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput">existing_customer_web_acl_resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolution">conflict_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution">existing_customer_web_acl_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conflict_resolution_input`<sup>Optional</sup> <a name="conflict_resolution_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput"></a>

```python
conflict_resolution_input: str
```

- *Type:* str

---

##### `existing_customer_web_acl_resolution_input`<sup>Optional</sup> <a name="existing_customer_web_acl_resolution_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput"></a>

```python
existing_customer_web_acl_resolution_input: str
```

- *Type:* str

---

##### `conflict_resolution`<sup>Required</sup> <a name="conflict_resolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolution"></a>

```python
conflict_resolution: str
```

- *Type:* str

---

##### `existing_customer_web_acl_resolution`<sup>Required</sup> <a name="existing_customer_web_acl_resolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution"></a>

```python
existing_customer_web_acl_resolution: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerPolicyPolicyConfigurationWafConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

---


### NetworksecuritymanagerPolicyTagsList <a name="NetworksecuritymanagerPolicyTagsList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>]

---


### NetworksecuritymanagerPolicyTagsOutputReference <a name="NetworksecuritymanagerPolicyTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_policy

networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerPolicyTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>

---



