# `eventsEventBusPolicy` Submodule <a name="`eventsEventBusPolicy` Submodule" id="@cdktn/provider-awscc.eventsEventBusPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsEventBusPolicy <a name="EventsEventBusPolicy" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy awscc_events_event_bus_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import events_event_bus_policy

eventsEventBusPolicy.EventsEventBusPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  statement_id: str,
  action: str = None,
  condition: EventsEventBusPolicyCondition = None,
  event_bus_name: str = None,
  principal: str = None,
  statement: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.statementId">statement_id</a></code> | <code>str</code> | An identifier string for the external account that you are granting permissions to. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.action">action</a></code> | <code>str</code> | The action that you are enabling the other account to perform. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.eventBusName">event_bus_name</a></code> | <code>str</code> | The name of the event bus associated with the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.principal">principal</a></code> | <code>str</code> | The 12-digit AWS account ID that you are permitting to put events to your default event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.statement">statement</a></code> | <code>str</code> | A JSON string that describes the permission policy statement. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `statement_id`<sup>Required</sup> <a name="statement_id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.statementId"></a>

- *Type:* str

An identifier string for the external account that you are granting permissions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#statement_id EventsEventBusPolicy#statement_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.action"></a>

- *Type:* str

The action that you are enabling the other account to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#action EventsEventBusPolicy#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#condition EventsEventBusPolicy#condition}

---

##### `event_bus_name`<sup>Optional</sup> <a name="event_bus_name" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.eventBusName"></a>

- *Type:* str

The name of the event bus associated with the rule.

If you omit this, the default event bus is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#event_bus_name EventsEventBusPolicy#event_bus_name}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.principal"></a>

- *Type:* str

The 12-digit AWS account ID that you are permitting to put events to your default event bus.

Specify "*" to permit any account to put events to your default event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#principal EventsEventBusPolicy#principal}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.statement"></a>

- *Type:* str

A JSON string that describes the permission policy statement.

You can include a Policy parameter in the request instead of using the StatementId, Action, Principal, or Condition parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#statement EventsEventBusPolicy#statement}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetEventBusName">reset_event_bus_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetPrincipal">reset_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetStatement">reset_statement</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition"></a>

```python
def put_condition(
  key: str = None,
  type: str = None,
  value: str = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition.parameter.key"></a>

- *Type:* str

Specifies the value for the key. Currently, this must be the ID of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#key EventsEventBusPolicy#key}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition.parameter.type"></a>

- *Type:* str

Specifies the type of condition. Currently the only supported value is StringEquals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#type EventsEventBusPolicy#type}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition.parameter.value"></a>

- *Type:* str

Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#value EventsEventBusPolicy#value}

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_event_bus_name` <a name="reset_event_bus_name" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetEventBusName"></a>

```python
def reset_event_bus_name() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetPrincipal"></a>

```python
def reset_principal() -> None
```

##### `reset_statement` <a name="reset_statement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetStatement"></a>

```python
def reset_statement() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EventsEventBusPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import events_event_bus_policy

eventsEventBusPolicy.EventsEventBusPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import events_event_bus_policy

eventsEventBusPolicy.EventsEventBusPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import events_event_bus_policy

eventsEventBusPolicy.EventsEventBusPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import events_event_bus_policy

eventsEventBusPolicy.EventsEventBusPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EventsEventBusPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventsEventBusPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventsEventBusPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EventsEventBusPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference">EventsEventBusPolicyConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.conditionInput">condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusNameInput">event_bus_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementIdInput">statement_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementInput">statement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusName">event_bus_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statement">statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementId">statement_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.condition"></a>

```python
condition: EventsEventBusPolicyConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference">EventsEventBusPolicyConditionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.conditionInput"></a>

```python
condition_input: IResolvable | EventsEventBusPolicyCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

---

##### `event_bus_name_input`<sup>Optional</sup> <a name="event_bus_name_input" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusNameInput"></a>

```python
event_bus_name_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `statement_id_input`<sup>Optional</sup> <a name="statement_id_input" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementIdInput"></a>

```python
statement_id_input: str
```

- *Type:* str

---

##### `statement_input`<sup>Optional</sup> <a name="statement_input" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementInput"></a>

```python
statement_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `event_bus_name`<sup>Required</sup> <a name="event_bus_name" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusName"></a>

```python
event_bus_name: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statement"></a>

```python
statement: str
```

- *Type:* str

---

##### `statement_id`<sup>Required</sup> <a name="statement_id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementId"></a>

```python
statement_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventsEventBusPolicyCondition <a name="EventsEventBusPolicyCondition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.Initializer"></a>

```python
from cdktn_provider_awscc import events_event_bus_policy

eventsEventBusPolicy.EventsEventBusPolicyCondition(
  key: str = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.key">key</a></code> | <code>str</code> | Specifies the value for the key. Currently, this must be the ID of the organization. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.type">type</a></code> | <code>str</code> | Specifies the type of condition. Currently the only supported value is StringEquals. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.value">value</a></code> | <code>str</code> | Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.key"></a>

```python
key: str
```

- *Type:* str

Specifies the value for the key. Currently, this must be the ID of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#key EventsEventBusPolicy#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the type of condition. Currently the only supported value is StringEquals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#type EventsEventBusPolicy#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.value"></a>

```python
value: str
```

- *Type:* str

Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#value EventsEventBusPolicy#value}

---

### EventsEventBusPolicyConfig <a name="EventsEventBusPolicyConfig" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import events_event_bus_policy

eventsEventBusPolicy.EventsEventBusPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  statement_id: str,
  action: str = None,
  condition: EventsEventBusPolicyCondition = None,
  event_bus_name: str = None,
  principal: str = None,
  statement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statementId">statement_id</a></code> | <code>str</code> | An identifier string for the external account that you are granting permissions to. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.action">action</a></code> | <code>str</code> | The action that you are enabling the other account to perform. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.eventBusName">event_bus_name</a></code> | <code>str</code> | The name of the event bus associated with the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.principal">principal</a></code> | <code>str</code> | The 12-digit AWS account ID that you are permitting to put events to your default event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statement">statement</a></code> | <code>str</code> | A JSON string that describes the permission policy statement. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `statement_id`<sup>Required</sup> <a name="statement_id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statementId"></a>

```python
statement_id: str
```

- *Type:* str

An identifier string for the external account that you are granting permissions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#statement_id EventsEventBusPolicy#statement_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The action that you are enabling the other account to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#action EventsEventBusPolicy#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.condition"></a>

```python
condition: EventsEventBusPolicyCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#condition EventsEventBusPolicy#condition}

---

##### `event_bus_name`<sup>Optional</sup> <a name="event_bus_name" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.eventBusName"></a>

```python
event_bus_name: str
```

- *Type:* str

The name of the event bus associated with the rule.

If you omit this, the default event bus is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#event_bus_name EventsEventBusPolicy#event_bus_name}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.principal"></a>

```python
principal: str
```

- *Type:* str

The 12-digit AWS account ID that you are permitting to put events to your default event bus.

Specify "*" to permit any account to put events to your default event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#principal EventsEventBusPolicy#principal}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statement"></a>

```python
statement: str
```

- *Type:* str

A JSON string that describes the permission policy statement.

You can include a Policy parameter in the request instead of using the StatementId, Action, Principal, or Condition parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#statement EventsEventBusPolicy#statement}

---

## Classes <a name="Classes" id="Classes"></a>

### EventsEventBusPolicyConditionOutputReference <a name="EventsEventBusPolicyConditionOutputReference" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_event_bus_policy

eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsEventBusPolicyCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

---



