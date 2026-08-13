# `ssmincidentsResponsePlan` Submodule <a name="`ssmincidentsResponsePlan` Submodule" id="@cdktn/provider-awscc.ssmincidentsResponsePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmincidentsResponsePlan <a name="SsmincidentsResponsePlan" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan awscc_ssmincidents_response_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlan(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  incident_template: SsmincidentsResponsePlanIncidentTemplate,
  name: str,
  actions: IResolvable | typing.List[SsmincidentsResponsePlanActions] = None,
  chat_channel: SsmincidentsResponsePlanChatChannel = None,
  display_name: str = None,
  engagements: typing.List[str] = None,
  integrations: IResolvable | typing.List[SsmincidentsResponsePlanIntegrations] = None,
  tags: IResolvable | typing.List[SsmincidentsResponsePlanTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.incidentTemplate">incident_template</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | The incident template configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the response plan. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>]</code> | The list of actions. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.chatChannel">chat_channel</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a></code> | The chat channel configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the response plan. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.engagements">engagements</a></code> | <code>typing.List[str]</code> | The list of engagements to use. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.integrations">integrations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>]</code> | The list of integrations. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>]</code> | The tags to apply to the response plan. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `incident_template`<sup>Required</sup> <a name="incident_template" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.incidentTemplate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

The incident template configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#incident_template SsmincidentsResponsePlan#incident_template}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.name"></a>

- *Type:* str

The name of the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.actions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>]

The list of actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#actions SsmincidentsResponsePlan#actions}

---

##### `chat_channel`<sup>Optional</sup> <a name="chat_channel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.chatChannel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

The chat channel configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}

---

##### `engagements`<sup>Optional</sup> <a name="engagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.engagements"></a>

- *Type:* typing.List[str]

The list of engagements to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}

---

##### `integrations`<sup>Optional</sup> <a name="integrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.integrations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>]

The list of integrations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#integrations SsmincidentsResponsePlan#integrations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>]

The tags to apply to the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putChatChannel">put_chat_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate">put_incident_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegrations">put_integrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel">reset_chat_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements">reset_engagements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegrations">reset_integrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putActions"></a>

```python
def put_actions(
  value: IResolvable | typing.List[SsmincidentsResponsePlanActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>]

---

##### `put_chat_channel` <a name="put_chat_channel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putChatChannel"></a>

```python
def put_chat_channel(
  chatbot_sns: typing.List[str] = None
) -> None
```

###### `chatbot_sns`<sup>Optional</sup> <a name="chatbot_sns" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putChatChannel.parameter.chatbotSns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#chatbot_sns SsmincidentsResponsePlan#chatbot_sns}.

---

##### `put_incident_template` <a name="put_incident_template" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate"></a>

```python
def put_incident_template(
  impact: typing.Union[int, float],
  title: str,
  dedupe_string: str = None,
  incident_tags: IResolvable | typing.List[SsmincidentsResponsePlanIncidentTemplateIncidentTags] = None,
  notification_targets: IResolvable | typing.List[SsmincidentsResponsePlanIncidentTemplateNotificationTargets] = None,
  summary: str = None
) -> None
```

###### `impact`<sup>Required</sup> <a name="impact" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.impact"></a>

- *Type:* typing.Union[int, float]

The impact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.title"></a>

- *Type:* str

The title string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}

---

###### `dedupe_string`<sup>Optional</sup> <a name="dedupe_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.dedupeString"></a>

- *Type:* str

The deduplication string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}

---

###### `incident_tags`<sup>Optional</sup> <a name="incident_tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.incidentTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>]

Tags that get applied to incidents created by the StartIncident API action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}

---

###### `notification_targets`<sup>Optional</sup> <a name="notification_targets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.notificationTargets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>]

The list of notification targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#notification_targets SsmincidentsResponsePlan#notification_targets}

---

###### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.summary"></a>

- *Type:* str

The summary string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}

---

##### `put_integrations` <a name="put_integrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegrations"></a>

```python
def put_integrations(
  value: IResolvable | typing.List[SsmincidentsResponsePlanIntegrations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegrations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SsmincidentsResponsePlanTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>]

---

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_chat_channel` <a name="reset_chat_channel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel"></a>

```python
def reset_chat_channel() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_engagements` <a name="reset_engagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements"></a>

```python
def reset_engagements() -> None
```

##### `reset_integrations` <a name="reset_integrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegrations"></a>

```python
def reset_integrations() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmincidentsResponsePlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmincidentsResponsePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmincidentsResponsePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList">SsmincidentsResponsePlanActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel">chat_channel</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference">SsmincidentsResponsePlanChatChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate">incident_template</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrations">integrations</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList">SsmincidentsResponsePlanIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList">SsmincidentsResponsePlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput">chat_channel_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput">engagements_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput">incident_template_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationsInput">integrations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements">engagements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actions"></a>

```python
actions: SsmincidentsResponsePlanActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList">SsmincidentsResponsePlanActionsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `chat_channel`<sup>Required</sup> <a name="chat_channel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel"></a>

```python
chat_channel: SsmincidentsResponsePlanChatChannelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference">SsmincidentsResponsePlanChatChannelOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `incident_template`<sup>Required</sup> <a name="incident_template" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate"></a>

```python
incident_template: SsmincidentsResponsePlanIncidentTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a>

---

##### `integrations`<sup>Required</sup> <a name="integrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrations"></a>

```python
integrations: SsmincidentsResponsePlanIntegrationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList">SsmincidentsResponsePlanIntegrationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags"></a>

```python
tags: SsmincidentsResponsePlanTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList">SsmincidentsResponsePlanTagsList</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionsInput"></a>

```python
actions_input: IResolvable | typing.List[SsmincidentsResponsePlanActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>]

---

##### `chat_channel_input`<sup>Optional</sup> <a name="chat_channel_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput"></a>

```python
chat_channel_input: IResolvable | SsmincidentsResponsePlanChatChannel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `engagements_input`<sup>Optional</sup> <a name="engagements_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput"></a>

```python
engagements_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `incident_template_input`<sup>Optional</sup> <a name="incident_template_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput"></a>

```python
incident_template_input: IResolvable | SsmincidentsResponsePlanIncidentTemplate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---

##### `integrations_input`<sup>Optional</sup> <a name="integrations_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationsInput"></a>

```python
integrations_input: IResolvable | typing.List[SsmincidentsResponsePlanIntegrations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SsmincidentsResponsePlanTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `engagements`<sup>Required</sup> <a name="engagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements"></a>

```python
engagements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmincidentsResponsePlanActions <a name="SsmincidentsResponsePlanActions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActions(
  ssm_automation: SsmincidentsResponsePlanActionsSsmAutomation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions.property.ssmAutomation">ssm_automation</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a></code> | The configuration to use when starting the SSM automation document. |

---

##### `ssm_automation`<sup>Optional</sup> <a name="ssm_automation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions.property.ssmAutomation"></a>

```python
ssm_automation: SsmincidentsResponsePlanActionsSsmAutomation
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a>

The configuration to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#ssm_automation SsmincidentsResponsePlan#ssm_automation}

---

### SsmincidentsResponsePlanActionsSsmAutomation <a name="SsmincidentsResponsePlanActionsSsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation(
  document_name: str = None,
  document_version: str = None,
  dynamic_parameters: IResolvable | typing.List[SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters] = None,
  parameters: IResolvable | typing.List[SsmincidentsResponsePlanActionsSsmAutomationParameters] = None,
  role_arn: str = None,
  target_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentName">document_name</a></code> | <code>str</code> | The document name to use when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentVersion">document_version</a></code> | <code>str</code> | The version of the document to use when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.dynamicParameters">dynamic_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>]</code> | The parameters with dynamic values to set when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>]</code> | The parameters to set when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.roleArn">role_arn</a></code> | <code>str</code> | The role ARN to use when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.targetAccount">target_account</a></code> | <code>str</code> | The account type to use when starting the SSM automation document. |

---

##### `document_name`<sup>Optional</sup> <a name="document_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentName"></a>

```python
document_name: str
```

- *Type:* str

The document name to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}

---

##### `document_version`<sup>Optional</sup> <a name="document_version" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

The version of the document to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}

---

##### `dynamic_parameters`<sup>Optional</sup> <a name="dynamic_parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.dynamicParameters"></a>

```python
dynamic_parameters: IResolvable | typing.List[SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>]

The parameters with dynamic values to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.parameters"></a>

```python
parameters: IResolvable | typing.List[SsmincidentsResponsePlanActionsSsmAutomationParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>]

The parameters to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#parameters SsmincidentsResponsePlan#parameters}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The role ARN to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}

---

##### `target_account`<sup>Optional</sup> <a name="target_account" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.targetAccount"></a>

```python
target_account: str
```

- *Type:* str

The account type to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}

---

### SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters(
  key: str = None,
  value: SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a></code> | Value of the dynamic parameter to set when starting the SSM automation document. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.value"></a>

```python
value: SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

Value of the dynamic parameter to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}

---

### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue(
  variable: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.property.variable">variable</a></code> | <code>str</code> | The variable types used as dynamic parameter value when starting the SSM automation document. |

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.property.variable"></a>

```python
variable: str
```

- *Type:* str

The variable types used as dynamic parameter value when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#variable SsmincidentsResponsePlan#variable}

---

### SsmincidentsResponsePlanActionsSsmAutomationParameters <a name="SsmincidentsResponsePlanActionsSsmAutomationParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters(
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}.

---

### SsmincidentsResponsePlanChatChannel <a name="SsmincidentsResponsePlanChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel(
  chatbot_sns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel.property.chatbotSns">chatbot_sns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#chatbot_sns SsmincidentsResponsePlan#chatbot_sns}. |

---

##### `chatbot_sns`<sup>Optional</sup> <a name="chatbot_sns" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel.property.chatbotSns"></a>

```python
chatbot_sns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#chatbot_sns SsmincidentsResponsePlan#chatbot_sns}.

---

### SsmincidentsResponsePlanConfig <a name="SsmincidentsResponsePlanConfig" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  incident_template: SsmincidentsResponsePlanIncidentTemplate,
  name: str,
  actions: IResolvable | typing.List[SsmincidentsResponsePlanActions] = None,
  chat_channel: SsmincidentsResponsePlanChatChannel = None,
  display_name: str = None,
  engagements: typing.List[str] = None,
  integrations: IResolvable | typing.List[SsmincidentsResponsePlanIntegrations] = None,
  tags: IResolvable | typing.List[SsmincidentsResponsePlanTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate">incident_template</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | The incident template configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name">name</a></code> | <code>str</code> | The name of the response plan. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>]</code> | The list of actions. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel">chat_channel</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a></code> | The chat channel configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the response plan. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements">engagements</a></code> | <code>typing.List[str]</code> | The list of engagements to use. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integrations">integrations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>]</code> | The list of integrations. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>]</code> | The tags to apply to the response plan. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `incident_template`<sup>Required</sup> <a name="incident_template" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate"></a>

```python
incident_template: SsmincidentsResponsePlanIncidentTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

The incident template configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#incident_template SsmincidentsResponsePlan#incident_template}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.actions"></a>

```python
actions: IResolvable | typing.List[SsmincidentsResponsePlanActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>]

The list of actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#actions SsmincidentsResponsePlan#actions}

---

##### `chat_channel`<sup>Optional</sup> <a name="chat_channel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel"></a>

```python
chat_channel: SsmincidentsResponsePlanChatChannel
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

The chat channel configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}

---

##### `engagements`<sup>Optional</sup> <a name="engagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements"></a>

```python
engagements: typing.List[str]
```

- *Type:* typing.List[str]

The list of engagements to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}

---

##### `integrations`<sup>Optional</sup> <a name="integrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integrations"></a>

```python
integrations: IResolvable | typing.List[SsmincidentsResponsePlanIntegrations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>]

The list of integrations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#integrations SsmincidentsResponsePlan#integrations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SsmincidentsResponsePlanTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>]

The tags to apply to the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}

---

### SsmincidentsResponsePlanIncidentTemplate <a name="SsmincidentsResponsePlanIncidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate(
  impact: typing.Union[int, float],
  title: str,
  dedupe_string: str = None,
  incident_tags: IResolvable | typing.List[SsmincidentsResponsePlanIncidentTemplateIncidentTags] = None,
  notification_targets: IResolvable | typing.List[SsmincidentsResponsePlanIncidentTemplateNotificationTargets] = None,
  summary: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact">impact</a></code> | <code>typing.Union[int, float]</code> | The impact value. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title">title</a></code> | <code>str</code> | The title string. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString">dedupe_string</a></code> | <code>str</code> | The deduplication string. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags">incident_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>]</code> | Tags that get applied to incidents created by the StartIncident API action. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTargets">notification_targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>]</code> | The list of notification targets. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary">summary</a></code> | <code>str</code> | The summary string. |

---

##### `impact`<sup>Required</sup> <a name="impact" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact"></a>

```python
impact: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The impact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title"></a>

```python
title: str
```

- *Type:* str

The title string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}

---

##### `dedupe_string`<sup>Optional</sup> <a name="dedupe_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString"></a>

```python
dedupe_string: str
```

- *Type:* str

The deduplication string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}

---

##### `incident_tags`<sup>Optional</sup> <a name="incident_tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags"></a>

```python
incident_tags: IResolvable | typing.List[SsmincidentsResponsePlanIncidentTemplateIncidentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>]

Tags that get applied to incidents created by the StartIncident API action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}

---

##### `notification_targets`<sup>Optional</sup> <a name="notification_targets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTargets"></a>

```python
notification_targets: IResolvable | typing.List[SsmincidentsResponsePlanIncidentTemplateNotificationTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>]

The list of notification targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#notification_targets SsmincidentsResponsePlan#notification_targets}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary"></a>

```python
summary: str
```

- *Type:* str

The summary string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}

---

### SsmincidentsResponsePlanIncidentTemplateIncidentTags <a name="SsmincidentsResponsePlanIncidentTemplateIncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}.

---

### SsmincidentsResponsePlanIncidentTemplateNotificationTargets <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets(
  sns_topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | The ARN of the Chatbot SNS topic. |

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

The ARN of the Chatbot SNS topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}

---

### SsmincidentsResponsePlanIntegrations <a name="SsmincidentsResponsePlanIntegrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations(
  pager_duty_configuration: SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations.property.pagerDutyConfiguration">pager_duty_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a></code> | The pagerDuty configuration to use when starting the incident. |

---

##### `pager_duty_configuration`<sup>Optional</sup> <a name="pager_duty_configuration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations.property.pagerDutyConfiguration"></a>

```python
pager_duty_configuration: SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

The pagerDuty configuration to use when starting the incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#pager_duty_configuration SsmincidentsResponsePlan#pager_duty_configuration}

---

### SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration(
  name: str = None,
  pager_duty_incident_configuration: SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration = None,
  secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.name">name</a></code> | <code>str</code> | The name of the pagerDuty configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.pagerDutyIncidentConfiguration">pager_duty_incident_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a></code> | The pagerDuty incident configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.secretId">secret_id</a></code> | <code>str</code> | The AWS secrets manager secretId storing the pagerDuty token. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the pagerDuty configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}

---

##### `pager_duty_incident_configuration`<sup>Optional</sup> <a name="pager_duty_incident_configuration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.pagerDutyIncidentConfiguration"></a>

```python
pager_duty_incident_configuration: SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

The pagerDuty incident configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#pager_duty_incident_configuration SsmincidentsResponsePlan#pager_duty_incident_configuration}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

The AWS secrets manager secretId storing the pagerDuty token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}

---

### SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration(
  service_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.property.serviceId">service_id</a></code> | <code>str</code> | The pagerDuty serviceId. |

---

##### `service_id`<sup>Optional</sup> <a name="service_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

The pagerDuty serviceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}

---

### SsmincidentsResponsePlanTags <a name="SsmincidentsResponsePlanTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmincidentsResponsePlanActionsList <a name="SsmincidentsResponsePlanActionsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmincidentsResponsePlanActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmincidentsResponsePlanActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>]

---


### SsmincidentsResponsePlanActionsOutputReference <a name="SsmincidentsResponsePlanActionsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation">put_ssm_automation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resetSsmAutomation">reset_ssm_automation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssm_automation` <a name="put_ssm_automation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation"></a>

```python
def put_ssm_automation(
  document_name: str = None,
  document_version: str = None,
  dynamic_parameters: IResolvable | typing.List[SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters] = None,
  parameters: IResolvable | typing.List[SsmincidentsResponsePlanActionsSsmAutomationParameters] = None,
  role_arn: str = None,
  target_account: str = None
) -> None
```

###### `document_name`<sup>Optional</sup> <a name="document_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation.parameter.documentName"></a>

- *Type:* str

The document name to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}

---

###### `document_version`<sup>Optional</sup> <a name="document_version" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation.parameter.documentVersion"></a>

- *Type:* str

The version of the document to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}

---

###### `dynamic_parameters`<sup>Optional</sup> <a name="dynamic_parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation.parameter.dynamicParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>]

The parameters with dynamic values to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation.parameter.parameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>]

The parameters to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#parameters SsmincidentsResponsePlan#parameters}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation.parameter.roleArn"></a>

- *Type:* str

The role ARN to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}

---

###### `target_account`<sup>Optional</sup> <a name="target_account" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation.parameter.targetAccount"></a>

- *Type:* str

The account type to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}

---

##### `reset_ssm_automation` <a name="reset_ssm_automation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resetSsmAutomation"></a>

```python
def reset_ssm_automation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomation">ssm_automation</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference">SsmincidentsResponsePlanActionsSsmAutomationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomationInput">ssm_automation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssm_automation`<sup>Required</sup> <a name="ssm_automation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomation"></a>

```python
ssm_automation: SsmincidentsResponsePlanActionsSsmAutomationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference">SsmincidentsResponsePlanActionsSsmAutomationOutputReference</a>

---

##### `ssm_automation_input`<sup>Optional</sup> <a name="ssm_automation_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomationInput"></a>

```python
ssm_automation_input: IResolvable | SsmincidentsResponsePlanActionsSsmAutomation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmincidentsResponsePlanActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>

---


### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>]

---


### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.putValue"></a>

```python
def put_value(
  variable: str = None
) -> None
```

###### `variable`<sup>Optional</sup> <a name="variable" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.putValue.parameter.variable"></a>

- *Type:* str

The variable types used as dynamic parameter value when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#variable SsmincidentsResponsePlan#variable}

---

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.valueInput">value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.value"></a>

```python
value: SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.valueInput"></a>

```python
value_input: IResolvable | SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>

---


### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resetVariable">reset_variable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_variable` <a name="reset_variable" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resetVariable"></a>

```python
def reset_variable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variableInput">variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variableInput"></a>

```python
variable_input: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

---


### SsmincidentsResponsePlanActionsSsmAutomationOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putDynamicParameters">put_dynamic_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentName">reset_document_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentVersion">reset_document_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDynamicParameters">reset_dynamic_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetTargetAccount">reset_target_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dynamic_parameters` <a name="put_dynamic_parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putDynamicParameters"></a>

```python
def put_dynamic_parameters(
  value: IResolvable | typing.List[SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putDynamicParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>]

---

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[SsmincidentsResponsePlanActionsSsmAutomationParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>]

---

##### `reset_document_name` <a name="reset_document_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentName"></a>

```python
def reset_document_name() -> None
```

##### `reset_document_version` <a name="reset_document_version" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentVersion"></a>

```python
def reset_document_version() -> None
```

##### `reset_dynamic_parameters` <a name="reset_dynamic_parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDynamicParameters"></a>

```python
def reset_dynamic_parameters() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_target_account` <a name="reset_target_account" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetTargetAccount"></a>

```python
def reset_target_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParameters">dynamic_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList">SsmincidentsResponsePlanActionsSsmAutomationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentNameInput">document_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersionInput">document_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParametersInput">dynamic_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccountInput">target_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentName">document_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersion">document_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccount">target_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_parameters`<sup>Required</sup> <a name="dynamic_parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParameters"></a>

```python
dynamic_parameters: SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parameters"></a>

```python
parameters: SsmincidentsResponsePlanActionsSsmAutomationParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList">SsmincidentsResponsePlanActionsSsmAutomationParametersList</a>

---

##### `document_name_input`<sup>Optional</sup> <a name="document_name_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentNameInput"></a>

```python
document_name_input: str
```

- *Type:* str

---

##### `document_version_input`<sup>Optional</sup> <a name="document_version_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersionInput"></a>

```python
document_version_input: str
```

- *Type:* str

---

##### `dynamic_parameters_input`<sup>Optional</sup> <a name="dynamic_parameters_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParametersInput"></a>

```python
dynamic_parameters_input: IResolvable | typing.List[SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[SsmincidentsResponsePlanActionsSsmAutomationParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `target_account_input`<sup>Optional</sup> <a name="target_account_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccountInput"></a>

```python
target_account_input: str
```

- *Type:* str

---

##### `document_name`<sup>Required</sup> <a name="document_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentName"></a>

```python
document_name: str
```

- *Type:* str

---

##### `document_version`<sup>Required</sup> <a name="document_version" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `target_account`<sup>Required</sup> <a name="target_account" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccount"></a>

```python
target_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmincidentsResponsePlanActionsSsmAutomation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a>

---


### SsmincidentsResponsePlanActionsSsmAutomationParametersList <a name="SsmincidentsResponsePlanActionsSsmAutomationParametersList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmincidentsResponsePlanActionsSsmAutomationParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>]

---


### SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmincidentsResponsePlanActionsSsmAutomationParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>

---


### SsmincidentsResponsePlanChatChannelOutputReference <a name="SsmincidentsResponsePlanChatChannelOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resetChatbotSns">reset_chatbot_sns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_chatbot_sns` <a name="reset_chatbot_sns" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resetChatbotSns"></a>

```python
def reset_chatbot_sns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSnsInput">chatbot_sns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSns">chatbot_sns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chatbot_sns_input`<sup>Optional</sup> <a name="chatbot_sns_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSnsInput"></a>

```python
chatbot_sns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `chatbot_sns`<sup>Required</sup> <a name="chatbot_sns" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSns"></a>

```python
chatbot_sns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmincidentsResponsePlanChatChannel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

---


### SsmincidentsResponsePlanIncidentTemplateIncidentTagsList <a name="SsmincidentsResponsePlanIncidentTemplateIncidentTagsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmincidentsResponsePlanIncidentTemplateIncidentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>]

---


### SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmincidentsResponsePlanIncidentTemplateIncidentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmincidentsResponsePlanIncidentTemplateNotificationTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>]

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmincidentsResponsePlanIncidentTemplateNotificationTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>

---


### SsmincidentsResponsePlanIncidentTemplateOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putIncidentTags">put_incident_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTargets">put_notification_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString">reset_dedupe_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags">reset_incident_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTargets">reset_notification_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary">reset_summary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_incident_tags` <a name="put_incident_tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putIncidentTags"></a>

```python
def put_incident_tags(
  value: IResolvable | typing.List[SsmincidentsResponsePlanIncidentTemplateIncidentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putIncidentTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>]

---

##### `put_notification_targets` <a name="put_notification_targets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTargets"></a>

```python
def put_notification_targets(
  value: IResolvable | typing.List[SsmincidentsResponsePlanIncidentTemplateNotificationTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>]

---

##### `reset_dedupe_string` <a name="reset_dedupe_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString"></a>

```python
def reset_dedupe_string() -> None
```

##### `reset_incident_tags` <a name="reset_incident_tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags"></a>

```python
def reset_incident_tags() -> None
```

##### `reset_notification_targets` <a name="reset_notification_targets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTargets"></a>

```python
def reset_notification_targets() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags">incident_tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList">SsmincidentsResponsePlanIncidentTemplateIncidentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargets">notification_targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput">dedupe_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput">impact_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput">incident_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetsInput">notification_targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString">dedupe_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact">impact</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `incident_tags`<sup>Required</sup> <a name="incident_tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags"></a>

```python
incident_tags: SsmincidentsResponsePlanIncidentTemplateIncidentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList">SsmincidentsResponsePlanIncidentTemplateIncidentTagsList</a>

---

##### `notification_targets`<sup>Required</sup> <a name="notification_targets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargets"></a>

```python
notification_targets: SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList</a>

---

##### `dedupe_string_input`<sup>Optional</sup> <a name="dedupe_string_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput"></a>

```python
dedupe_string_input: str
```

- *Type:* str

---

##### `impact_input`<sup>Optional</sup> <a name="impact_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput"></a>

```python
impact_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `incident_tags_input`<sup>Optional</sup> <a name="incident_tags_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput"></a>

```python
incident_tags_input: IResolvable | typing.List[SsmincidentsResponsePlanIncidentTemplateIncidentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>]

---

##### `notification_targets_input`<sup>Optional</sup> <a name="notification_targets_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetsInput"></a>

```python
notification_targets_input: IResolvable | typing.List[SsmincidentsResponsePlanIncidentTemplateNotificationTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>]

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `dedupe_string`<sup>Required</sup> <a name="dedupe_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString"></a>

```python
dedupe_string: str
```

- *Type:* str

---

##### `impact`<sup>Required</sup> <a name="impact" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact"></a>

```python
impact: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmincidentsResponsePlanIncidentTemplate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---


### SsmincidentsResponsePlanIntegrationsList <a name="SsmincidentsResponsePlanIntegrationsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmincidentsResponsePlanIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmincidentsResponsePlanIntegrations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>]

---


### SsmincidentsResponsePlanIntegrationsOutputReference <a name="SsmincidentsResponsePlanIntegrationsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration">put_pager_duty_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resetPagerDutyConfiguration">reset_pager_duty_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pager_duty_configuration` <a name="put_pager_duty_configuration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration"></a>

```python
def put_pager_duty_configuration(
  name: str = None,
  pager_duty_incident_configuration: SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration = None,
  secret_id: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration.parameter.name"></a>

- *Type:* str

The name of the pagerDuty configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}

---

###### `pager_duty_incident_configuration`<sup>Optional</sup> <a name="pager_duty_incident_configuration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration.parameter.pagerDutyIncidentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

The pagerDuty incident configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#pager_duty_incident_configuration SsmincidentsResponsePlan#pager_duty_incident_configuration}

---

###### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration.parameter.secretId"></a>

- *Type:* str

The AWS secrets manager secretId storing the pagerDuty token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}

---

##### `reset_pager_duty_configuration` <a name="reset_pager_duty_configuration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resetPagerDutyConfiguration"></a>

```python
def reset_pager_duty_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfiguration">pager_duty_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfigurationInput">pager_duty_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pager_duty_configuration`<sup>Required</sup> <a name="pager_duty_configuration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfiguration"></a>

```python
pager_duty_configuration: SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference</a>

---

##### `pager_duty_configuration_input`<sup>Optional</sup> <a name="pager_duty_configuration_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfigurationInput"></a>

```python
pager_duty_configuration_input: IResolvable | SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmincidentsResponsePlanIntegrations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>

---


### SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.putPagerDutyIncidentConfiguration">put_pager_duty_incident_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetPagerDutyIncidentConfiguration">reset_pager_duty_incident_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetSecretId">reset_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pager_duty_incident_configuration` <a name="put_pager_duty_incident_configuration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.putPagerDutyIncidentConfiguration"></a>

```python
def put_pager_duty_incident_configuration(
  service_id: str = None
) -> None
```

###### `service_id`<sup>Optional</sup> <a name="service_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.putPagerDutyIncidentConfiguration.parameter.serviceId"></a>

- *Type:* str

The pagerDuty serviceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_pager_duty_incident_configuration` <a name="reset_pager_duty_incident_configuration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetPagerDutyIncidentConfiguration"></a>

```python
def reset_pager_duty_incident_configuration() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetSecretId"></a>

```python
def reset_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfiguration">pager_duty_incident_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfigurationInput">pager_duty_incident_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pager_duty_incident_configuration`<sup>Required</sup> <a name="pager_duty_incident_configuration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfiguration"></a>

```python
pager_duty_incident_configuration: SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pager_duty_incident_configuration_input`<sup>Optional</sup> <a name="pager_duty_incident_configuration_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfigurationInput"></a>

```python
pager_duty_incident_configuration_input: IResolvable | SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

---


### SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resetServiceId">reset_service_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_id` <a name="reset_service_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resetServiceId"></a>

```python
def reset_service_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

---


### SsmincidentsResponsePlanTagsList <a name="SsmincidentsResponsePlanTagsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmincidentsResponsePlanTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmincidentsResponsePlanTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>]

---


### SsmincidentsResponsePlanTagsOutputReference <a name="SsmincidentsResponsePlanTagsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmincidents_response_plan

ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmincidentsResponsePlanTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>

---



