# `codestarnotificationsNotificationRule` Submodule <a name="`codestarnotificationsNotificationRule` Submodule" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarnotificationsNotificationRule <a name="CodestarnotificationsNotificationRule" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule awscc_codestarnotifications_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer"></a>

```python
from cdktn_provider_awscc import codestarnotifications_notification_rule

codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  detail_type: str,
  event_type_ids: typing.List[str],
  name: str,
  resource: str,
  targets: IResolvable | typing.List[CodestarnotificationsNotificationRuleTargets],
  created_by: str = None,
  event_type_id: str = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  target_address: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.detailType">detail_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.eventTypeIds">event_type_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.resource">resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets">CodestarnotificationsNotificationRuleTargets</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#targets CodestarnotificationsNotificationRule#targets}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#created_by CodestarnotificationsNotificationRule#created_by}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.eventTypeId">event_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#event_type_id CodestarnotificationsNotificationRule#event_type_id}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.targetAddress">target_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_address CodestarnotificationsNotificationRule#target_address}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `detail_type`<sup>Required</sup> <a name="detail_type" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.detailType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}.

---

##### `event_type_ids`<sup>Required</sup> <a name="event_type_ids" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.eventTypeIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.resource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.targets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets">CodestarnotificationsNotificationRuleTargets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#targets CodestarnotificationsNotificationRule#targets}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.createdBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#created_by CodestarnotificationsNotificationRule#created_by}.

---

##### `event_type_id`<sup>Optional</sup> <a name="event_type_id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.eventTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#event_type_id CodestarnotificationsNotificationRule#event_type_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}.

---

##### `target_address`<sup>Optional</sup> <a name="target_address" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.targetAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_address CodestarnotificationsNotificationRule#target_address}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetEventTypeId">reset_event_type_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTargetAddress">reset_target_address</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_targets` <a name="put_targets" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.List[CodestarnotificationsNotificationRuleTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets">CodestarnotificationsNotificationRuleTargets</a>]

---

##### `reset_created_by` <a name="reset_created_by" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_event_type_id` <a name="reset_event_type_id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetEventTypeId"></a>

```python
def reset_event_type_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_address` <a name="reset_target_address" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTargetAddress"></a>

```python
def reset_target_address() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CodestarnotificationsNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct"></a>

```python
from cdktn_provider_awscc import codestarnotifications_notification_rule

codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import codestarnotifications_notification_rule

codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import codestarnotifications_notification_rule

codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import codestarnotifications_notification_rule

codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CodestarnotificationsNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodestarnotificationsNotificationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodestarnotificationsNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodestarnotificationsNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList">CodestarnotificationsNotificationRuleTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailTypeInput">detail_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdInput">event_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdsInput">event_type_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetAddressInput">target_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets">CodestarnotificationsNotificationRuleTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailType">detail_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeId">event_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIds">event_type_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetAddress">target_address</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targets"></a>

```python
targets: CodestarnotificationsNotificationRuleTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList">CodestarnotificationsNotificationRuleTargetsList</a>

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `detail_type_input`<sup>Optional</sup> <a name="detail_type_input" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailTypeInput"></a>

```python
detail_type_input: str
```

- *Type:* str

---

##### `event_type_id_input`<sup>Optional</sup> <a name="event_type_id_input" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdInput"></a>

```python
event_type_id_input: str
```

- *Type:* str

---

##### `event_type_ids_input`<sup>Optional</sup> <a name="event_type_ids_input" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdsInput"></a>

```python
event_type_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_address_input`<sup>Optional</sup> <a name="target_address_input" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetAddressInput"></a>

```python
target_address_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.List[CodestarnotificationsNotificationRuleTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets">CodestarnotificationsNotificationRuleTargets</a>]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `detail_type`<sup>Required</sup> <a name="detail_type" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailType"></a>

```python
detail_type: str
```

- *Type:* str

---

##### `event_type_id`<sup>Required</sup> <a name="event_type_id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeId"></a>

```python
event_type_id: str
```

- *Type:* str

---

##### `event_type_ids`<sup>Required</sup> <a name="event_type_ids" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIds"></a>

```python
event_type_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_address`<sup>Required</sup> <a name="target_address" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetAddress"></a>

```python
target_address: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarnotificationsNotificationRuleConfig <a name="CodestarnotificationsNotificationRuleConfig" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codestarnotifications_notification_rule

codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  detail_type: str,
  event_type_ids: typing.List[str],
  name: str,
  resource: str,
  targets: IResolvable | typing.List[CodestarnotificationsNotificationRuleTargets],
  created_by: str = None,
  event_type_id: str = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  target_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.detailType">detail_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeIds">event_type_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.resource">resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets">CodestarnotificationsNotificationRuleTargets</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#targets CodestarnotificationsNotificationRule#targets}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#created_by CodestarnotificationsNotificationRule#created_by}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeId">event_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#event_type_id CodestarnotificationsNotificationRule#event_type_id}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.targetAddress">target_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_address CodestarnotificationsNotificationRule#target_address}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `detail_type`<sup>Required</sup> <a name="detail_type" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.detailType"></a>

```python
detail_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}.

---

##### `event_type_ids`<sup>Required</sup> <a name="event_type_ids" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeIds"></a>

```python
event_type_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.resource"></a>

```python
resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.targets"></a>

```python
targets: IResolvable | typing.List[CodestarnotificationsNotificationRuleTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets">CodestarnotificationsNotificationRuleTargets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#targets CodestarnotificationsNotificationRule#targets}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#created_by CodestarnotificationsNotificationRule#created_by}.

---

##### `event_type_id`<sup>Optional</sup> <a name="event_type_id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeId"></a>

```python
event_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#event_type_id CodestarnotificationsNotificationRule#event_type_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}.

---

##### `target_address`<sup>Optional</sup> <a name="target_address" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.targetAddress"></a>

```python
target_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_address CodestarnotificationsNotificationRule#target_address}.

---

### CodestarnotificationsNotificationRuleTargets <a name="CodestarnotificationsNotificationRuleTargets" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets.Initializer"></a>

```python
from cdktn_provider_awscc import codestarnotifications_notification_rule

codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets(
  target_address: str,
  target_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets.property.targetAddress">target_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_address CodestarnotificationsNotificationRule#target_address}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets.property.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_type CodestarnotificationsNotificationRule#target_type}. |

---

##### `target_address`<sup>Required</sup> <a name="target_address" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets.property.targetAddress"></a>

```python
target_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_address CodestarnotificationsNotificationRule#target_address}.

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_type CodestarnotificationsNotificationRule#target_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodestarnotificationsNotificationRuleTargetsList <a name="CodestarnotificationsNotificationRuleTargetsList" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import codestarnotifications_notification_rule

codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodestarnotificationsNotificationRuleTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets">CodestarnotificationsNotificationRuleTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodestarnotificationsNotificationRuleTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets">CodestarnotificationsNotificationRuleTargets</a>]

---


### CodestarnotificationsNotificationRuleTargetsOutputReference <a name="CodestarnotificationsNotificationRuleTargetsOutputReference" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codestarnotifications_notification_rule

codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetAddressInput">target_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetTypeInput">target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetAddress">target_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets">CodestarnotificationsNotificationRuleTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_address_input`<sup>Optional</sup> <a name="target_address_input" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetAddressInput"></a>

```python
target_address_input: str
```

- *Type:* str

---

##### `target_type_input`<sup>Optional</sup> <a name="target_type_input" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetTypeInput"></a>

```python
target_type_input: str
```

- *Type:* str

---

##### `target_address`<sup>Required</sup> <a name="target_address" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetAddress"></a>

```python
target_address: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodestarnotificationsNotificationRuleTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets">CodestarnotificationsNotificationRuleTargets</a>

---



