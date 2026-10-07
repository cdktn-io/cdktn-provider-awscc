# `networksecuritymanagerTemplate` Submodule <a name="`networksecuritymanagerTemplate` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerTemplate <a name="NetworksecuritymanagerTemplate" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template awscc_networksecuritymanager_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_template

networksecuritymanagerTemplate.NetworksecuritymanagerTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  template_name: str,
  associated_rule_list: IResolvable | typing.List[NetworksecuritymanagerTemplateAssociatedRuleListStruct] = None,
  firewall_type: str = None,
  tags: IResolvable | typing.List[NetworksecuritymanagerTemplateTags] = None,
  template_description: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.templateName">template_name</a></code> | <code>str</code> | The name of the template. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.associatedRuleList">associated_rule_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>]</code> | List of rules associated with this template. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.firewallType">firewall_type</a></code> | <code>str</code> | The type of firewall. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>]</code> | The tags associated with the template. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.templateDescription">template_description</a></code> | <code>str</code> | A description of the template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.templateName"></a>

- *Type:* str

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#template_name NetworksecuritymanagerTemplate#template_name}

---

##### `associated_rule_list`<sup>Optional</sup> <a name="associated_rule_list" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.associatedRuleList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>]

List of rules associated with this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#associated_rule_list NetworksecuritymanagerTemplate#associated_rule_list}

---

##### `firewall_type`<sup>Optional</sup> <a name="firewall_type" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.firewallType"></a>

- *Type:* str

The type of firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#firewall_type NetworksecuritymanagerTemplate#firewall_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>]

The tags associated with the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#tags NetworksecuritymanagerTemplate#tags}

---

##### `template_description`<sup>Optional</sup> <a name="template_description" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.templateDescription"></a>

- *Type:* str

A description of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#template_description NetworksecuritymanagerTemplate#template_description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putAssociatedRuleList">put_associated_rule_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetAssociatedRuleList">reset_associated_rule_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetFirewallType">reset_firewall_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetTemplateDescription">reset_template_description</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_associated_rule_list` <a name="put_associated_rule_list" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putAssociatedRuleList"></a>

```python
def put_associated_rule_list(
  value: IResolvable | typing.List[NetworksecuritymanagerTemplateAssociatedRuleListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putAssociatedRuleList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworksecuritymanagerTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>]

---

##### `reset_associated_rule_list` <a name="reset_associated_rule_list" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetAssociatedRuleList"></a>

```python
def reset_associated_rule_list() -> None
```

##### `reset_firewall_type` <a name="reset_firewall_type" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetFirewallType"></a>

```python
def reset_firewall_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_description` <a name="reset_template_description" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetTemplateDescription"></a>

```python
def reset_template_description() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_template

networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_template

networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_template

networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_template

networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworksecuritymanagerTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworksecuritymanagerTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworksecuritymanagerTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.associatedRuleList">associated_rule_list</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList">NetworksecuritymanagerTemplateAssociatedRuleListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList">NetworksecuritymanagerTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateArn">template_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.associatedRuleListInput">associated_rule_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.firewallTypeInput">firewall_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateDescriptionInput">template_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateNameInput">template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.firewallType">firewall_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateDescription">template_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_rule_list`<sup>Required</sup> <a name="associated_rule_list" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.associatedRuleList"></a>

```python
associated_rule_list: NetworksecuritymanagerTemplateAssociatedRuleListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList">NetworksecuritymanagerTemplateAssociatedRuleListStructList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tags"></a>

```python
tags: NetworksecuritymanagerTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList">NetworksecuritymanagerTemplateTagsList</a>

---

##### `template_arn`<sup>Required</sup> <a name="template_arn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateArn"></a>

```python
template_arn: str
```

- *Type:* str

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `associated_rule_list_input`<sup>Optional</sup> <a name="associated_rule_list_input" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.associatedRuleListInput"></a>

```python
associated_rule_list_input: IResolvable | typing.List[NetworksecuritymanagerTemplateAssociatedRuleListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>]

---

##### `firewall_type_input`<sup>Optional</sup> <a name="firewall_type_input" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.firewallTypeInput"></a>

```python
firewall_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworksecuritymanagerTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>]

---

##### `template_description_input`<sup>Optional</sup> <a name="template_description_input" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateDescriptionInput"></a>

```python
template_description_input: str
```

- *Type:* str

---

##### `template_name_input`<sup>Optional</sup> <a name="template_name_input" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateNameInput"></a>

```python
template_name_input: str
```

- *Type:* str

---

##### `firewall_type`<sup>Required</sup> <a name="firewall_type" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.firewallType"></a>

```python
firewall_type: str
```

- *Type:* str

---

##### `template_description`<sup>Required</sup> <a name="template_description" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateDescription"></a>

```python
template_description: str
```

- *Type:* str

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerTemplateAssociatedRuleListStruct <a name="NetworksecuritymanagerTemplateAssociatedRuleListStruct" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_template

networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct(
  rule_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct.property.ruleArn">rule_arn</a></code> | <code>str</code> | ARN of the associated rule. |

---

##### `rule_arn`<sup>Optional</sup> <a name="rule_arn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

ARN of the associated rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#rule_arn NetworksecuritymanagerTemplate#rule_arn}

---

### NetworksecuritymanagerTemplateConfig <a name="NetworksecuritymanagerTemplateConfig" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_template

networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  template_name: str,
  associated_rule_list: IResolvable | typing.List[NetworksecuritymanagerTemplateAssociatedRuleListStruct] = None,
  firewall_type: str = None,
  tags: IResolvable | typing.List[NetworksecuritymanagerTemplateTags] = None,
  template_description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.templateName">template_name</a></code> | <code>str</code> | The name of the template. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.associatedRuleList">associated_rule_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>]</code> | List of rules associated with this template. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.firewallType">firewall_type</a></code> | <code>str</code> | The type of firewall. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>]</code> | The tags associated with the template. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.templateDescription">template_description</a></code> | <code>str</code> | A description of the template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#template_name NetworksecuritymanagerTemplate#template_name}

---

##### `associated_rule_list`<sup>Optional</sup> <a name="associated_rule_list" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.associatedRuleList"></a>

```python
associated_rule_list: IResolvable | typing.List[NetworksecuritymanagerTemplateAssociatedRuleListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>]

List of rules associated with this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#associated_rule_list NetworksecuritymanagerTemplate#associated_rule_list}

---

##### `firewall_type`<sup>Optional</sup> <a name="firewall_type" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.firewallType"></a>

```python
firewall_type: str
```

- *Type:* str

The type of firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#firewall_type NetworksecuritymanagerTemplate#firewall_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworksecuritymanagerTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>]

The tags associated with the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#tags NetworksecuritymanagerTemplate#tags}

---

##### `template_description`<sup>Optional</sup> <a name="template_description" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.templateDescription"></a>

```python
template_description: str
```

- *Type:* str

A description of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#template_description NetworksecuritymanagerTemplate#template_description}

---

### NetworksecuritymanagerTemplateTags <a name="NetworksecuritymanagerTemplateTags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_template

networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#key NetworksecuritymanagerTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#value NetworksecuritymanagerTemplate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#key NetworksecuritymanagerTemplate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#value NetworksecuritymanagerTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerTemplateAssociatedRuleListStructList <a name="NetworksecuritymanagerTemplateAssociatedRuleListStructList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_template

networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerTemplateAssociatedRuleListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>]

---


### NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference <a name="NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_template

networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resetRuleArn">reset_rule_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rule_arn` <a name="reset_rule_arn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resetRuleArn"></a>

```python
def reset_rule_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.ruleArnInput">rule_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_arn_input`<sup>Optional</sup> <a name="rule_arn_input" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.ruleArnInput"></a>

```python
rule_arn_input: str
```

- *Type:* str

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerTemplateAssociatedRuleListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>

---


### NetworksecuritymanagerTemplateTagsList <a name="NetworksecuritymanagerTemplateTagsList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_template

networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>]

---


### NetworksecuritymanagerTemplateTagsOutputReference <a name="NetworksecuritymanagerTemplateTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_template

networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>

---



