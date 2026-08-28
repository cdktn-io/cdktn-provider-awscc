# `rbinRule` Submodule <a name="`rbinRule` Submodule" id="@cdktn/provider-awscc.rbinRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RbinRule <a name="RbinRule" id="@cdktn/provider-awscc.rbinRule.RbinRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule awscc_rbin_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_type: str,
  retention_period: RbinRuleRetentionPeriod,
  description: str = None,
  exclude_resource_tags: IResolvable | typing.List[RbinRuleExcludeResourceTags] = None,
  lock_configuration: RbinRuleLockConfiguration = None,
  resource_tags: IResolvable | typing.List[RbinRuleResourceTags] = None,
  status: str = None,
  tags: IResolvable | typing.List[RbinRuleTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | The resource type retained by the retention rule. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.retentionPeriod">retention_period</a></code> | <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod">RbinRuleRetentionPeriod</a></code> | Information about the retention period for which the retention rule is to retain resources. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the retention rule. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.excludeResourceTags">exclude_resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags">RbinRuleExcludeResourceTags</a>]</code> | Information about the exclude resource tags used to identify resources that are excluded by the retention rule. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.lockConfiguration">lock_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration">RbinRuleLockConfiguration</a></code> | Information about the retention rule lock configuration. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.resourceTags">resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags">RbinRuleResourceTags</a>]</code> | Information about the resource tags used to identify resources that are retained by the retention rule. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.status">status</a></code> | <code>str</code> | The state of the retention rule. Only retention rules that are in the available state retain resources. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTags">RbinRuleTags</a>]</code> | Information about the tags assigned to the retention rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.resourceType"></a>

- *Type:* str

The resource type retained by the retention rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#resource_type RbinRule#resource_type}

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.retentionPeriod"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod">RbinRuleRetentionPeriod</a>

Information about the retention period for which the retention rule is to retain resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#retention_period RbinRule#retention_period}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.description"></a>

- *Type:* str

The description of the retention rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#description RbinRule#description}

---

##### `exclude_resource_tags`<sup>Optional</sup> <a name="exclude_resource_tags" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.excludeResourceTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags">RbinRuleExcludeResourceTags</a>]

Information about the exclude resource tags used to identify resources that are excluded by the retention rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#exclude_resource_tags RbinRule#exclude_resource_tags}

---

##### `lock_configuration`<sup>Optional</sup> <a name="lock_configuration" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.lockConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration">RbinRuleLockConfiguration</a>

Information about the retention rule lock configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#lock_configuration RbinRule#lock_configuration}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.resourceTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags">RbinRuleResourceTags</a>]

Information about the resource tags used to identify resources that are retained by the retention rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#resource_tags RbinRule#resource_tags}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.status"></a>

- *Type:* str

The state of the retention rule. Only retention rules that are in the available state retain resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#status RbinRule#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rbinRule.RbinRule.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTags">RbinRuleTags</a>]

Information about the tags assigned to the retention rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#tags RbinRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.putExcludeResourceTags">put_exclude_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.putLockConfiguration">put_lock_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.putResourceTags">put_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.putRetentionPeriod">put_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.resetExcludeResourceTags">reset_exclude_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.resetLockConfiguration">reset_lock_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.resetResourceTags">reset_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rbinRule.RbinRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rbinRule.RbinRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rbinRule.RbinRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rbinRule.RbinRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rbinRule.RbinRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rbinRule.RbinRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rbinRule.RbinRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rbinRule.RbinRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rbinRule.RbinRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rbinRule.RbinRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rbinRule.RbinRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rbinRule.RbinRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rbinRule.RbinRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rbinRule.RbinRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rbinRule.RbinRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rbinRule.RbinRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rbinRule.RbinRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rbinRule.RbinRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rbinRule.RbinRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rbinRule.RbinRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rbinRule.RbinRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rbinRule.RbinRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rbinRule.RbinRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rbinRule.RbinRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rbinRule.RbinRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_exclude_resource_tags` <a name="put_exclude_resource_tags" id="@cdktn/provider-awscc.rbinRule.RbinRule.putExcludeResourceTags"></a>

```python
def put_exclude_resource_tags(
  value: IResolvable | typing.List[RbinRuleExcludeResourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rbinRule.RbinRule.putExcludeResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags">RbinRuleExcludeResourceTags</a>]

---

##### `put_lock_configuration` <a name="put_lock_configuration" id="@cdktn/provider-awscc.rbinRule.RbinRule.putLockConfiguration"></a>

```python
def put_lock_configuration(
  unlock_delay_unit: str = None,
  unlock_delay_value: typing.Union[int, float] = None
) -> None
```

###### `unlock_delay_unit`<sup>Optional</sup> <a name="unlock_delay_unit" id="@cdktn/provider-awscc.rbinRule.RbinRule.putLockConfiguration.parameter.unlockDelayUnit"></a>

- *Type:* str

The unit of time in which to measure the unlock delay.

Currently, the unlock delay can be measure only in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#unlock_delay_unit RbinRule#unlock_delay_unit}

---

###### `unlock_delay_value`<sup>Optional</sup> <a name="unlock_delay_value" id="@cdktn/provider-awscc.rbinRule.RbinRule.putLockConfiguration.parameter.unlockDelayValue"></a>

- *Type:* typing.Union[int, float]

The unlock delay period, measured in the unit specified for UnlockDelayUnit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#unlock_delay_value RbinRule#unlock_delay_value}

---

##### `put_resource_tags` <a name="put_resource_tags" id="@cdktn/provider-awscc.rbinRule.RbinRule.putResourceTags"></a>

```python
def put_resource_tags(
  value: IResolvable | typing.List[RbinRuleResourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rbinRule.RbinRule.putResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags">RbinRuleResourceTags</a>]

---

##### `put_retention_period` <a name="put_retention_period" id="@cdktn/provider-awscc.rbinRule.RbinRule.putRetentionPeriod"></a>

```python
def put_retention_period(
  retention_period_unit: str,
  retention_period_value: typing.Union[int, float]
) -> None
```

###### `retention_period_unit`<sup>Required</sup> <a name="retention_period_unit" id="@cdktn/provider-awscc.rbinRule.RbinRule.putRetentionPeriod.parameter.retentionPeriodUnit"></a>

- *Type:* str

The retention period unit of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#retention_period_unit RbinRule#retention_period_unit}

---

###### `retention_period_value`<sup>Required</sup> <a name="retention_period_value" id="@cdktn/provider-awscc.rbinRule.RbinRule.putRetentionPeriod.parameter.retentionPeriodValue"></a>

- *Type:* typing.Union[int, float]

The retention period value of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#retention_period_value RbinRule#retention_period_value}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rbinRule.RbinRule.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RbinRuleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rbinRule.RbinRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTags">RbinRuleTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.rbinRule.RbinRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_exclude_resource_tags` <a name="reset_exclude_resource_tags" id="@cdktn/provider-awscc.rbinRule.RbinRule.resetExcludeResourceTags"></a>

```python
def reset_exclude_resource_tags() -> None
```

##### `reset_lock_configuration` <a name="reset_lock_configuration" id="@cdktn/provider-awscc.rbinRule.RbinRule.resetLockConfiguration"></a>

```python
def reset_lock_configuration() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktn/provider-awscc.rbinRule.RbinRule.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.rbinRule.RbinRule.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rbinRule.RbinRule.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RbinRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rbinRule.RbinRule.isConstruct"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rbinRule.RbinRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rbinRule.RbinRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rbinRule.RbinRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rbinRule.RbinRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rbinRule.RbinRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rbinRule.RbinRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RbinRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rbinRule.RbinRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rbinRule.RbinRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RbinRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rbinRule.RbinRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RbinRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rbinRule.RbinRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RbinRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.excludeResourceTags">exclude_resource_tags</a></code> | <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList">RbinRuleExcludeResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.lockConfiguration">lock_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference">RbinRuleLockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.lockState">lock_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.resourceTags">resource_tags</a></code> | <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList">RbinRuleResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.retentionPeriod">retention_period</a></code> | <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference">RbinRuleRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsList">RbinRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.excludeResourceTagsInput">exclude_resource_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags">RbinRuleExcludeResourceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.lockConfigurationInput">lock_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration">RbinRuleLockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.resourceTagsInput">resource_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags">RbinRuleResourceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.retentionPeriodInput">retention_period_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod">RbinRuleRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTags">RbinRuleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `exclude_resource_tags`<sup>Required</sup> <a name="exclude_resource_tags" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.excludeResourceTags"></a>

```python
exclude_resource_tags: RbinRuleExcludeResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList">RbinRuleExcludeResourceTagsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `lock_configuration`<sup>Required</sup> <a name="lock_configuration" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.lockConfiguration"></a>

```python
lock_configuration: RbinRuleLockConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference">RbinRuleLockConfigurationOutputReference</a>

---

##### `lock_state`<sup>Required</sup> <a name="lock_state" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.lockState"></a>

```python
lock_state: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.resourceTags"></a>

```python
resource_tags: RbinRuleResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList">RbinRuleResourceTagsList</a>

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.retentionPeriod"></a>

```python
retention_period: RbinRuleRetentionPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference">RbinRuleRetentionPeriodOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.tags"></a>

```python
tags: RbinRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsList">RbinRuleTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `exclude_resource_tags_input`<sup>Optional</sup> <a name="exclude_resource_tags_input" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.excludeResourceTagsInput"></a>

```python
exclude_resource_tags_input: IResolvable | typing.List[RbinRuleExcludeResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags">RbinRuleExcludeResourceTags</a>]

---

##### `lock_configuration_input`<sup>Optional</sup> <a name="lock_configuration_input" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.lockConfigurationInput"></a>

```python
lock_configuration_input: IResolvable | RbinRuleLockConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration">RbinRuleLockConfiguration</a>

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.resourceTagsInput"></a>

```python
resource_tags_input: IResolvable | typing.List[RbinRuleResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags">RbinRuleResourceTags</a>]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.retentionPeriodInput"></a>

```python
retention_period_input: IResolvable | RbinRuleRetentionPeriod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod">RbinRuleRetentionPeriod</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RbinRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTags">RbinRuleTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rbinRule.RbinRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RbinRuleConfig <a name="RbinRuleConfig" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_type: str,
  retention_period: RbinRuleRetentionPeriod,
  description: str = None,
  exclude_resource_tags: IResolvable | typing.List[RbinRuleExcludeResourceTags] = None,
  lock_configuration: RbinRuleLockConfiguration = None,
  resource_tags: IResolvable | typing.List[RbinRuleResourceTags] = None,
  status: str = None,
  tags: IResolvable | typing.List[RbinRuleTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.resourceType">resource_type</a></code> | <code>str</code> | The resource type retained by the retention rule. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.retentionPeriod">retention_period</a></code> | <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod">RbinRuleRetentionPeriod</a></code> | Information about the retention period for which the retention rule is to retain resources. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.description">description</a></code> | <code>str</code> | The description of the retention rule. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.excludeResourceTags">exclude_resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags">RbinRuleExcludeResourceTags</a>]</code> | Information about the exclude resource tags used to identify resources that are excluded by the retention rule. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.lockConfiguration">lock_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration">RbinRuleLockConfiguration</a></code> | Information about the retention rule lock configuration. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.resourceTags">resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags">RbinRuleResourceTags</a>]</code> | Information about the resource tags used to identify resources that are retained by the retention rule. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.status">status</a></code> | <code>str</code> | The state of the retention rule. Only retention rules that are in the available state retain resources. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTags">RbinRuleTags</a>]</code> | Information about the tags assigned to the retention rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The resource type retained by the retention rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#resource_type RbinRule#resource_type}

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.retentionPeriod"></a>

```python
retention_period: RbinRuleRetentionPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod">RbinRuleRetentionPeriod</a>

Information about the retention period for which the retention rule is to retain resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#retention_period RbinRule#retention_period}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the retention rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#description RbinRule#description}

---

##### `exclude_resource_tags`<sup>Optional</sup> <a name="exclude_resource_tags" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.excludeResourceTags"></a>

```python
exclude_resource_tags: IResolvable | typing.List[RbinRuleExcludeResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags">RbinRuleExcludeResourceTags</a>]

Information about the exclude resource tags used to identify resources that are excluded by the retention rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#exclude_resource_tags RbinRule#exclude_resource_tags}

---

##### `lock_configuration`<sup>Optional</sup> <a name="lock_configuration" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.lockConfiguration"></a>

```python
lock_configuration: RbinRuleLockConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration">RbinRuleLockConfiguration</a>

Information about the retention rule lock configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#lock_configuration RbinRule#lock_configuration}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.resourceTags"></a>

```python
resource_tags: IResolvable | typing.List[RbinRuleResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags">RbinRuleResourceTags</a>]

Information about the resource tags used to identify resources that are retained by the retention rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#resource_tags RbinRule#resource_tags}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The state of the retention rule. Only retention rules that are in the available state retain resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#status RbinRule#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rbinRule.RbinRuleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RbinRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTags">RbinRuleTags</a>]

Information about the tags assigned to the retention rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#tags RbinRule#tags}

---

### RbinRuleExcludeResourceTags <a name="RbinRuleExcludeResourceTags" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleExcludeResourceTags(
  resource_tag_key: str = None,
  resource_tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags.property.resourceTagKey">resource_tag_key</a></code> | <code>str</code> | The tag key of the resource. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags.property.resourceTagValue">resource_tag_value</a></code> | <code>str</code> | The tag value of the resource. |

---

##### `resource_tag_key`<sup>Optional</sup> <a name="resource_tag_key" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags.property.resourceTagKey"></a>

```python
resource_tag_key: str
```

- *Type:* str

The tag key of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#resource_tag_key RbinRule#resource_tag_key}

---

##### `resource_tag_value`<sup>Optional</sup> <a name="resource_tag_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags.property.resourceTagValue"></a>

```python
resource_tag_value: str
```

- *Type:* str

The tag value of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#resource_tag_value RbinRule#resource_tag_value}

---

### RbinRuleLockConfiguration <a name="RbinRuleLockConfiguration" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleLockConfiguration(
  unlock_delay_unit: str = None,
  unlock_delay_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration.property.unlockDelayUnit">unlock_delay_unit</a></code> | <code>str</code> | The unit of time in which to measure the unlock delay. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration.property.unlockDelayValue">unlock_delay_value</a></code> | <code>typing.Union[int, float]</code> | The unlock delay period, measured in the unit specified for UnlockDelayUnit. |

---

##### `unlock_delay_unit`<sup>Optional</sup> <a name="unlock_delay_unit" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration.property.unlockDelayUnit"></a>

```python
unlock_delay_unit: str
```

- *Type:* str

The unit of time in which to measure the unlock delay.

Currently, the unlock delay can be measure only in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#unlock_delay_unit RbinRule#unlock_delay_unit}

---

##### `unlock_delay_value`<sup>Optional</sup> <a name="unlock_delay_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration.property.unlockDelayValue"></a>

```python
unlock_delay_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The unlock delay period, measured in the unit specified for UnlockDelayUnit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#unlock_delay_value RbinRule#unlock_delay_value}

---

### RbinRuleResourceTags <a name="RbinRuleResourceTags" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleResourceTags(
  resource_tag_key: str = None,
  resource_tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags.property.resourceTagKey">resource_tag_key</a></code> | <code>str</code> | The tag key of the resource. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags.property.resourceTagValue">resource_tag_value</a></code> | <code>str</code> | The tag value of the resource. |

---

##### `resource_tag_key`<sup>Optional</sup> <a name="resource_tag_key" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags.property.resourceTagKey"></a>

```python
resource_tag_key: str
```

- *Type:* str

The tag key of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#resource_tag_key RbinRule#resource_tag_key}

---

##### `resource_tag_value`<sup>Optional</sup> <a name="resource_tag_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags.property.resourceTagValue"></a>

```python
resource_tag_value: str
```

- *Type:* str

The tag value of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#resource_tag_value RbinRule#resource_tag_value}

---

### RbinRuleRetentionPeriod <a name="RbinRuleRetentionPeriod" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleRetentionPeriod(
  retention_period_unit: str,
  retention_period_value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod.property.retentionPeriodUnit">retention_period_unit</a></code> | <code>str</code> | The retention period unit of the rule. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod.property.retentionPeriodValue">retention_period_value</a></code> | <code>typing.Union[int, float]</code> | The retention period value of the rule. |

---

##### `retention_period_unit`<sup>Required</sup> <a name="retention_period_unit" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod.property.retentionPeriodUnit"></a>

```python
retention_period_unit: str
```

- *Type:* str

The retention period unit of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#retention_period_unit RbinRule#retention_period_unit}

---

##### `retention_period_value`<sup>Required</sup> <a name="retention_period_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod.property.retentionPeriodValue"></a>

```python
retention_period_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention period value of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#retention_period_value RbinRule#retention_period_value}

---

### RbinRuleTags <a name="RbinRuleTags" id="@cdktn/provider-awscc.rbinRule.RbinRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rbinRule.RbinRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTags.property.key">key</a></code> | <code>str</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTags.property.value">value</a></code> | <code>str</code> | String which you can use to describe or define the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rbinRule.RbinRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

A unique identifier for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#key RbinRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rbinRule.RbinRuleTags.property.value"></a>

```python
value: str
```

- *Type:* str

String which you can use to describe or define the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rbin_rule#value RbinRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RbinRuleExcludeResourceTagsList <a name="RbinRuleExcludeResourceTagsList" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleExcludeResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RbinRuleExcludeResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags">RbinRuleExcludeResourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RbinRuleExcludeResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags">RbinRuleExcludeResourceTags</a>]

---


### RbinRuleExcludeResourceTagsOutputReference <a name="RbinRuleExcludeResourceTagsOutputReference" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleExcludeResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.resetResourceTagKey">reset_resource_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.resetResourceTagValue">reset_resource_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_tag_key` <a name="reset_resource_tag_key" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.resetResourceTagKey"></a>

```python
def reset_resource_tag_key() -> None
```

##### `reset_resource_tag_value` <a name="reset_resource_tag_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.resetResourceTagValue"></a>

```python
def reset_resource_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.resourceTagKeyInput">resource_tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.resourceTagValueInput">resource_tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.resourceTagKey">resource_tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.resourceTagValue">resource_tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags">RbinRuleExcludeResourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_tag_key_input`<sup>Optional</sup> <a name="resource_tag_key_input" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.resourceTagKeyInput"></a>

```python
resource_tag_key_input: str
```

- *Type:* str

---

##### `resource_tag_value_input`<sup>Optional</sup> <a name="resource_tag_value_input" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.resourceTagValueInput"></a>

```python
resource_tag_value_input: str
```

- *Type:* str

---

##### `resource_tag_key`<sup>Required</sup> <a name="resource_tag_key" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.resourceTagKey"></a>

```python
resource_tag_key: str
```

- *Type:* str

---

##### `resource_tag_value`<sup>Required</sup> <a name="resource_tag_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.resourceTagValue"></a>

```python
resource_tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RbinRuleExcludeResourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleExcludeResourceTags">RbinRuleExcludeResourceTags</a>

---


### RbinRuleLockConfigurationOutputReference <a name="RbinRuleLockConfigurationOutputReference" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleLockConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.resetUnlockDelayUnit">reset_unlock_delay_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.resetUnlockDelayValue">reset_unlock_delay_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_unlock_delay_unit` <a name="reset_unlock_delay_unit" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.resetUnlockDelayUnit"></a>

```python
def reset_unlock_delay_unit() -> None
```

##### `reset_unlock_delay_value` <a name="reset_unlock_delay_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.resetUnlockDelayValue"></a>

```python
def reset_unlock_delay_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.unlockDelayUnitInput">unlock_delay_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.unlockDelayValueInput">unlock_delay_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.unlockDelayUnit">unlock_delay_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.unlockDelayValue">unlock_delay_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration">RbinRuleLockConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unlock_delay_unit_input`<sup>Optional</sup> <a name="unlock_delay_unit_input" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.unlockDelayUnitInput"></a>

```python
unlock_delay_unit_input: str
```

- *Type:* str

---

##### `unlock_delay_value_input`<sup>Optional</sup> <a name="unlock_delay_value_input" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.unlockDelayValueInput"></a>

```python
unlock_delay_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlock_delay_unit`<sup>Required</sup> <a name="unlock_delay_unit" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.unlockDelayUnit"></a>

```python
unlock_delay_unit: str
```

- *Type:* str

---

##### `unlock_delay_value`<sup>Required</sup> <a name="unlock_delay_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.unlockDelayValue"></a>

```python
unlock_delay_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleLockConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RbinRuleLockConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleLockConfiguration">RbinRuleLockConfiguration</a>

---


### RbinRuleResourceTagsList <a name="RbinRuleResourceTagsList" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RbinRuleResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags">RbinRuleResourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RbinRuleResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags">RbinRuleResourceTags</a>]

---


### RbinRuleResourceTagsOutputReference <a name="RbinRuleResourceTagsOutputReference" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.resetResourceTagKey">reset_resource_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.resetResourceTagValue">reset_resource_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_tag_key` <a name="reset_resource_tag_key" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.resetResourceTagKey"></a>

```python
def reset_resource_tag_key() -> None
```

##### `reset_resource_tag_value` <a name="reset_resource_tag_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.resetResourceTagValue"></a>

```python
def reset_resource_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.resourceTagKeyInput">resource_tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.resourceTagValueInput">resource_tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.resourceTagKey">resource_tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.resourceTagValue">resource_tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags">RbinRuleResourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_tag_key_input`<sup>Optional</sup> <a name="resource_tag_key_input" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.resourceTagKeyInput"></a>

```python
resource_tag_key_input: str
```

- *Type:* str

---

##### `resource_tag_value_input`<sup>Optional</sup> <a name="resource_tag_value_input" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.resourceTagValueInput"></a>

```python
resource_tag_value_input: str
```

- *Type:* str

---

##### `resource_tag_key`<sup>Required</sup> <a name="resource_tag_key" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.resourceTagKey"></a>

```python
resource_tag_key: str
```

- *Type:* str

---

##### `resource_tag_value`<sup>Required</sup> <a name="resource_tag_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.resourceTagValue"></a>

```python
resource_tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RbinRuleResourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleResourceTags">RbinRuleResourceTags</a>

---


### RbinRuleRetentionPeriodOutputReference <a name="RbinRuleRetentionPeriodOutputReference" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleRetentionPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.retentionPeriodUnitInput">retention_period_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.retentionPeriodValueInput">retention_period_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.retentionPeriodUnit">retention_period_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.retentionPeriodValue">retention_period_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod">RbinRuleRetentionPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_period_unit_input`<sup>Optional</sup> <a name="retention_period_unit_input" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.retentionPeriodUnitInput"></a>

```python
retention_period_unit_input: str
```

- *Type:* str

---

##### `retention_period_value_input`<sup>Optional</sup> <a name="retention_period_value_input" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.retentionPeriodValueInput"></a>

```python
retention_period_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_period_unit`<sup>Required</sup> <a name="retention_period_unit" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.retentionPeriodUnit"></a>

```python
retention_period_unit: str
```

- *Type:* str

---

##### `retention_period_value`<sup>Required</sup> <a name="retention_period_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.retentionPeriodValue"></a>

```python
retention_period_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriodOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RbinRuleRetentionPeriod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleRetentionPeriod">RbinRuleRetentionPeriod</a>

---


### RbinRuleTagsList <a name="RbinRuleTagsList" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RbinRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTags">RbinRuleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RbinRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTags">RbinRuleTags</a>]

---


### RbinRuleTagsOutputReference <a name="RbinRuleTagsOutputReference" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rbin_rule

rbinRule.RbinRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTags">RbinRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rbinRule.RbinRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RbinRuleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rbinRule.RbinRuleTags">RbinRuleTags</a>

---



