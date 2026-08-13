# `eventsConnection` Submodule <a name="`eventsConnection` Submodule" id="@cdktn/provider-awscc.eventsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsConnection <a name="EventsConnection" id="@cdktn/provider-awscc.eventsConnection.EventsConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection awscc_events_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorization_type: str = None,
  auth_parameters: EventsConnectionAuthParameters = None,
  description: str = None,
  invocation_connectivity_parameters: EventsConnectionInvocationConnectivityParameters = None,
  kms_key_identifier: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.authorizationType">authorization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#authorization_type EventsConnection#authorization_type}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.authParameters">auth_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#auth_parameters EventsConnection#auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the connection. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.invocationConnectivityParameters">invocation_connectivity_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a></code> | The private resource the HTTP request will be sent to. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#kms_key_identifier EventsConnection#kms_key_identifier}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the connection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.authorizationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#authorization_type EventsConnection#authorization_type}.

---

##### `auth_parameters`<sup>Optional</sup> <a name="auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.authParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#auth_parameters EventsConnection#auth_parameters}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.description"></a>

- *Type:* str

Description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#description EventsConnection#description}

---

##### `invocation_connectivity_parameters`<sup>Optional</sup> <a name="invocation_connectivity_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.invocationConnectivityParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

The private resource the HTTP request will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#invocation_connectivity_parameters EventsConnection#invocation_connectivity_parameters}

---

##### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.kmsKeyIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#kms_key_identifier EventsConnection#kms_key_identifier}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.name"></a>

- *Type:* str

Name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#name EventsConnection#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters">put_auth_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.putInvocationConnectivityParameters">put_invocation_connectivity_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthorizationType">reset_authorization_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthParameters">reset_auth_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetInvocationConnectivityParameters">reset_invocation_connectivity_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetKmsKeyIdentifier">reset_kms_key_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth_parameters` <a name="put_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters"></a>

```python
def put_auth_parameters(
  api_key_auth_parameters: EventsConnectionAuthParametersApiKeyAuthParameters = None,
  basic_auth_parameters: EventsConnectionAuthParametersBasicAuthParameters = None,
  connectivity_parameters: EventsConnectionAuthParametersConnectivityParameters = None,
  invocation_http_parameters: EventsConnectionAuthParametersInvocationHttpParameters = None,
  o_auth_parameters: EventsConnectionAuthParametersOAuthParameters = None
) -> None
```

###### `api_key_auth_parameters`<sup>Optional</sup> <a name="api_key_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters.parameter.apiKeyAuthParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_auth_parameters EventsConnection#api_key_auth_parameters}.

---

###### `basic_auth_parameters`<sup>Optional</sup> <a name="basic_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters.parameter.basicAuthParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#basic_auth_parameters EventsConnection#basic_auth_parameters}.

---

###### `connectivity_parameters`<sup>Optional</sup> <a name="connectivity_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters.parameter.connectivityParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#connectivity_parameters EventsConnection#connectivity_parameters}.

---

###### `invocation_http_parameters`<sup>Optional</sup> <a name="invocation_http_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters.parameter.invocationHttpParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#invocation_http_parameters EventsConnection#invocation_http_parameters}.

---

###### `o_auth_parameters`<sup>Optional</sup> <a name="o_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters.parameter.oAuthParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#o_auth_parameters EventsConnection#o_auth_parameters}.

---

##### `put_invocation_connectivity_parameters` <a name="put_invocation_connectivity_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putInvocationConnectivityParameters"></a>

```python
def put_invocation_connectivity_parameters(
  resource_parameters: EventsConnectionInvocationConnectivityParametersResourceParameters = None
) -> None
```

###### `resource_parameters`<sup>Optional</sup> <a name="resource_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putInvocationConnectivityParameters.parameter.resourceParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}.

---

##### `reset_authorization_type` <a name="reset_authorization_type" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthorizationType"></a>

```python
def reset_authorization_type() -> None
```

##### `reset_auth_parameters` <a name="reset_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthParameters"></a>

```python
def reset_auth_parameters() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_invocation_connectivity_parameters` <a name="reset_invocation_connectivity_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetInvocationConnectivityParameters"></a>

```python
def reset_invocation_connectivity_parameters() -> None
```

##### `reset_kms_key_identifier` <a name="reset_kms_key_identifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetKmsKeyIdentifier"></a>

```python
def reset_kms_key_identifier() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EventsConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EventsConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventsConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventsConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EventsConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arnForPolicy">arn_for_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParameters">auth_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference">EventsConnectionAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParameters">invocation_connectivity_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference">EventsConnectionInvocationConnectivityParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationTypeInput">authorization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParametersInput">auth_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParametersInput">invocation_connectivity_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifierInput">kms_key_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `arn_for_policy`<sup>Required</sup> <a name="arn_for_policy" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arnForPolicy"></a>

```python
arn_for_policy: str
```

- *Type:* str

---

##### `auth_parameters`<sup>Required</sup> <a name="auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParameters"></a>

```python
auth_parameters: EventsConnectionAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference">EventsConnectionAuthParametersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `invocation_connectivity_parameters`<sup>Required</sup> <a name="invocation_connectivity_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParameters"></a>

```python
invocation_connectivity_parameters: EventsConnectionInvocationConnectivityParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference">EventsConnectionInvocationConnectivityParametersOutputReference</a>

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `authorization_type_input`<sup>Optional</sup> <a name="authorization_type_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationTypeInput"></a>

```python
authorization_type_input: str
```

- *Type:* str

---

##### `auth_parameters_input`<sup>Optional</sup> <a name="auth_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParametersInput"></a>

```python
auth_parameters_input: IResolvable | EventsConnectionAuthParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `invocation_connectivity_parameters_input`<sup>Optional</sup> <a name="invocation_connectivity_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParametersInput"></a>

```python
invocation_connectivity_parameters_input: IResolvable | EventsConnectionInvocationConnectivityParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

---

##### `kms_key_identifier_input`<sup>Optional</sup> <a name="kms_key_identifier_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifierInput"></a>

```python
kms_key_identifier_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_identifier`<sup>Required</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventsConnectionAuthParameters <a name="EventsConnectionAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParameters(
  api_key_auth_parameters: EventsConnectionAuthParametersApiKeyAuthParameters = None,
  basic_auth_parameters: EventsConnectionAuthParametersBasicAuthParameters = None,
  connectivity_parameters: EventsConnectionAuthParametersConnectivityParameters = None,
  invocation_http_parameters: EventsConnectionAuthParametersInvocationHttpParameters = None,
  o_auth_parameters: EventsConnectionAuthParametersOAuthParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.apiKeyAuthParameters">api_key_auth_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_auth_parameters EventsConnection#api_key_auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.basicAuthParameters">basic_auth_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#basic_auth_parameters EventsConnection#basic_auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.connectivityParameters">connectivity_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#connectivity_parameters EventsConnection#connectivity_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.invocationHttpParameters">invocation_http_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#invocation_http_parameters EventsConnection#invocation_http_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.oAuthParameters">o_auth_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#o_auth_parameters EventsConnection#o_auth_parameters}. |

---

##### `api_key_auth_parameters`<sup>Optional</sup> <a name="api_key_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.apiKeyAuthParameters"></a>

```python
api_key_auth_parameters: EventsConnectionAuthParametersApiKeyAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_auth_parameters EventsConnection#api_key_auth_parameters}.

---

##### `basic_auth_parameters`<sup>Optional</sup> <a name="basic_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.basicAuthParameters"></a>

```python
basic_auth_parameters: EventsConnectionAuthParametersBasicAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#basic_auth_parameters EventsConnection#basic_auth_parameters}.

---

##### `connectivity_parameters`<sup>Optional</sup> <a name="connectivity_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.connectivityParameters"></a>

```python
connectivity_parameters: EventsConnectionAuthParametersConnectivityParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#connectivity_parameters EventsConnection#connectivity_parameters}.

---

##### `invocation_http_parameters`<sup>Optional</sup> <a name="invocation_http_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.invocationHttpParameters"></a>

```python
invocation_http_parameters: EventsConnectionAuthParametersInvocationHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#invocation_http_parameters EventsConnection#invocation_http_parameters}.

---

##### `o_auth_parameters`<sup>Optional</sup> <a name="o_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.oAuthParameters"></a>

```python
o_auth_parameters: EventsConnectionAuthParametersOAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#o_auth_parameters EventsConnection#o_auth_parameters}.

---

### EventsConnectionAuthParametersApiKeyAuthParameters <a name="EventsConnectionAuthParametersApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters(
  api_key_name: str = None,
  api_key_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyName">api_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_name EventsConnection#api_key_name}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyValue">api_key_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_value EventsConnection#api_key_value}. |

---

##### `api_key_name`<sup>Optional</sup> <a name="api_key_name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyName"></a>

```python
api_key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_name EventsConnection#api_key_name}.

---

##### `api_key_value`<sup>Optional</sup> <a name="api_key_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyValue"></a>

```python
api_key_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_value EventsConnection#api_key_value}.

---

### EventsConnectionAuthParametersBasicAuthParameters <a name="EventsConnectionAuthParametersBasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersBasicAuthParameters(
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#password EventsConnection#password}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#username EventsConnection#username}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#password EventsConnection#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#username EventsConnection#username}.

---

### EventsConnectionAuthParametersConnectivityParameters <a name="EventsConnectionAuthParametersConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersConnectivityParameters(
  resource_parameters: EventsConnectionAuthParametersConnectivityParametersResourceParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters.property.resourceParameters">resource_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}. |

---

##### `resource_parameters`<sup>Optional</sup> <a name="resource_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters.property.resourceParameters"></a>

```python
resource_parameters: EventsConnectionAuthParametersConnectivityParametersResourceParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}.

---

### EventsConnectionAuthParametersConnectivityParametersResourceParameters <a name="EventsConnectionAuthParametersConnectivityParametersResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters(
  resource_configuration_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters.property.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}. |

---

##### `resource_configuration_arn`<sup>Optional</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters.property.resourceConfigurationArn"></a>

```python
resource_configuration_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}.

---

### EventsConnectionAuthParametersInvocationHttpParameters <a name="EventsConnectionAuthParametersInvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters(
  body_parameters: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersBodyParameters] = None,
  header_parameters: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters] = None,
  query_string_parameters: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.bodyParameters">body_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.headerParameters">header_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.queryStringParameters">query_string_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}. |

---

##### `body_parameters`<sup>Optional</sup> <a name="body_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.bodyParameters"></a>

```python
body_parameters: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersBodyParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}.

---

##### `header_parameters`<sup>Optional</sup> <a name="header_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.headerParameters"></a>

```python
header_parameters: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}.

---

##### `query_string_parameters`<sup>Optional</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.queryStringParameters"></a>

```python
query_string_parameters: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}.

---

### EventsConnectionAuthParametersInvocationHttpParametersBodyParameters <a name="EventsConnectionAuthParametersInvocationHttpParametersBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters(
  is_value_secret: bool | IResolvable = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.isValueSecret">is_value_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `is_value_secret`<sup>Optional</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.isValueSecret"></a>

```python
is_value_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters <a name="EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters(
  is_value_secret: bool | IResolvable = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.isValueSecret">is_value_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `is_value_secret`<sup>Optional</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.isValueSecret"></a>

```python
is_value_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters <a name="EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters(
  is_value_secret: bool | IResolvable = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.isValueSecret">is_value_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `is_value_secret`<sup>Optional</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.isValueSecret"></a>

```python
is_value_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersOAuthParameters <a name="EventsConnectionAuthParametersOAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParameters(
  authorization_endpoint: str = None,
  client_parameters: EventsConnectionAuthParametersOAuthParametersClientParameters = None,
  http_method: str = None,
  o_auth_http_parameters: EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#authorization_endpoint EventsConnection#authorization_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.clientParameters">client_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_parameters EventsConnection#client_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#http_method EventsConnection#http_method}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.oAuthHttpParameters">o_auth_http_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#o_auth_http_parameters EventsConnection#o_auth_http_parameters}. |

---

##### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#authorization_endpoint EventsConnection#authorization_endpoint}.

---

##### `client_parameters`<sup>Optional</sup> <a name="client_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.clientParameters"></a>

```python
client_parameters: EventsConnectionAuthParametersOAuthParametersClientParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_parameters EventsConnection#client_parameters}.

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#http_method EventsConnection#http_method}.

---

##### `o_auth_http_parameters`<sup>Optional</sup> <a name="o_auth_http_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.oAuthHttpParameters"></a>

```python
o_auth_http_parameters: EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#o_auth_http_parameters EventsConnection#o_auth_http_parameters}.

---

### EventsConnectionAuthParametersOAuthParametersClientParameters <a name="EventsConnectionAuthParametersOAuthParametersClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters(
  client_id: str = None,
  client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_id EventsConnection#client_id}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_secret EventsConnection#client_secret}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_id EventsConnection#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_secret EventsConnection#client_secret}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters(
  body_parameters: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters] = None,
  header_parameters: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters] = None,
  query_string_parameters: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.bodyParameters">body_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.headerParameters">header_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.queryStringParameters">query_string_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}. |

---

##### `body_parameters`<sup>Optional</sup> <a name="body_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.bodyParameters"></a>

```python
body_parameters: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}.

---

##### `header_parameters`<sup>Optional</sup> <a name="header_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.headerParameters"></a>

```python
header_parameters: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}.

---

##### `query_string_parameters`<sup>Optional</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.queryStringParameters"></a>

```python
query_string_parameters: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters(
  is_value_secret: bool | IResolvable = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.isValueSecret">is_value_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `is_value_secret`<sup>Optional</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.isValueSecret"></a>

```python
is_value_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters(
  is_value_secret: bool | IResolvable = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.isValueSecret">is_value_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `is_value_secret`<sup>Optional</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.isValueSecret"></a>

```python
is_value_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters(
  is_value_secret: bool | IResolvable = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.isValueSecret">is_value_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `is_value_secret`<sup>Optional</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.isValueSecret"></a>

```python
is_value_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionConfig <a name="EventsConnectionConfig" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorization_type: str = None,
  auth_parameters: EventsConnectionAuthParameters = None,
  description: str = None,
  invocation_connectivity_parameters: EventsConnectionInvocationConnectivityParameters = None,
  kms_key_identifier: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authorizationType">authorization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#authorization_type EventsConnection#authorization_type}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authParameters">auth_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#auth_parameters EventsConnection#auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.description">description</a></code> | <code>str</code> | Description of the connection. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.invocationConnectivityParameters">invocation_connectivity_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a></code> | The private resource the HTTP request will be sent to. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#kms_key_identifier EventsConnection#kms_key_identifier}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.name">name</a></code> | <code>str</code> | Name of the connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#authorization_type EventsConnection#authorization_type}.

---

##### `auth_parameters`<sup>Optional</sup> <a name="auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authParameters"></a>

```python
auth_parameters: EventsConnectionAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#auth_parameters EventsConnection#auth_parameters}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#description EventsConnection#description}

---

##### `invocation_connectivity_parameters`<sup>Optional</sup> <a name="invocation_connectivity_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.invocationConnectivityParameters"></a>

```python
invocation_connectivity_parameters: EventsConnectionInvocationConnectivityParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

The private resource the HTTP request will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#invocation_connectivity_parameters EventsConnection#invocation_connectivity_parameters}

---

##### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#kms_key_identifier EventsConnection#kms_key_identifier}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#name EventsConnection#name}

---

### EventsConnectionInvocationConnectivityParameters <a name="EventsConnectionInvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionInvocationConnectivityParameters(
  resource_parameters: EventsConnectionInvocationConnectivityParametersResourceParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters.property.resourceParameters">resource_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}. |

---

##### `resource_parameters`<sup>Optional</sup> <a name="resource_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters.property.resourceParameters"></a>

```python
resource_parameters: EventsConnectionInvocationConnectivityParametersResourceParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}.

---

### EventsConnectionInvocationConnectivityParametersResourceParameters <a name="EventsConnectionInvocationConnectivityParametersResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters(
  resource_configuration_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters.property.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}. |

---

##### `resource_configuration_arn`<sup>Optional</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters.property.resourceConfigurationArn"></a>

```python
resource_configuration_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventsConnectionAuthParametersApiKeyAuthParametersOutputReference <a name="EventsConnectionAuthParametersApiKeyAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyName">reset_api_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyValue">reset_api_key_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_key_name` <a name="reset_api_key_name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyName"></a>

```python
def reset_api_key_name() -> None
```

##### `reset_api_key_value` <a name="reset_api_key_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyValue"></a>

```python
def reset_api_key_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyNameInput">api_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValueInput">api_key_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyName">api_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValue">api_key_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_name_input`<sup>Optional</sup> <a name="api_key_name_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyNameInput"></a>

```python
api_key_name_input: str
```

- *Type:* str

---

##### `api_key_value_input`<sup>Optional</sup> <a name="api_key_value_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValueInput"></a>

```python
api_key_value_input: str
```

- *Type:* str

---

##### `api_key_name`<sup>Required</sup> <a name="api_key_name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyName"></a>

```python
api_key_name: str
```

- *Type:* str

---

##### `api_key_value`<sup>Required</sup> <a name="api_key_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValue"></a>

```python
api_key_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersApiKeyAuthParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

---


### EventsConnectionAuthParametersBasicAuthParametersOutputReference <a name="EventsConnectionAuthParametersBasicAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersBasicAuthParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

---


### EventsConnectionAuthParametersConnectivityParametersOutputReference <a name="EventsConnectionAuthParametersConnectivityParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.putResourceParameters">put_resource_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resetResourceParameters">reset_resource_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource_parameters` <a name="put_resource_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.putResourceParameters"></a>

```python
def put_resource_parameters(
  resource_configuration_arn: str = None
) -> None
```

###### `resource_configuration_arn`<sup>Optional</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.putResourceParameters.parameter.resourceConfigurationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}.

---

##### `reset_resource_parameters` <a name="reset_resource_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resetResourceParameters"></a>

```python
def reset_resource_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParameters">resource_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParametersInput">resource_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_parameters`<sup>Required</sup> <a name="resource_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParameters"></a>

```python
resource_parameters: EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference</a>

---

##### `resource_parameters_input`<sup>Optional</sup> <a name="resource_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParametersInput"></a>

```python
resource_parameters_input: IResolvable | EventsConnectionAuthParametersConnectivityParametersResourceParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersConnectivityParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

---


### EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference <a name="EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn">reset_resource_configuration_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_configuration_arn` <a name="reset_resource_configuration_arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn"></a>

```python
def reset_resource_configuration_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn">resource_association_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput">resource_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_association_arn`<sup>Required</sup> <a name="resource_association_arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn"></a>

```python
resource_association_arn: str
```

- *Type:* str

---

##### `resource_configuration_arn_input`<sup>Optional</sup> <a name="resource_configuration_arn_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput"></a>

```python
resource_configuration_arn_input: str
```

- *Type:* str

---

##### `resource_configuration_arn`<sup>Required</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn"></a>

```python
resource_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersConnectivityParametersResourceParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

---


### EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList <a name="EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersBodyParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>]

---


### EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetIsValueSecret">reset_is_value_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_value_secret` <a name="reset_is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetIsValueSecret"></a>

```python
def reset_is_value_secret() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecretInput">is_value_secret_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret_input`<sup>Optional</sup> <a name="is_value_secret_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecretInput"></a>

```python
is_value_secret_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecret"></a>

```python
is_value_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersInvocationHttpParametersBodyParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>

---


### EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList <a name="EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>]

---


### EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetIsValueSecret">reset_is_value_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_value_secret` <a name="reset_is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetIsValueSecret"></a>

```python
def reset_is_value_secret() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecretInput">is_value_secret_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret_input`<sup>Optional</sup> <a name="is_value_secret_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecretInput"></a>

```python
is_value_secret_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecret"></a>

```python
is_value_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>

---


### EventsConnectionAuthParametersInvocationHttpParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putBodyParameters">put_body_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putHeaderParameters">put_header_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryStringParameters">put_query_string_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetBodyParameters">reset_body_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeaderParameters">reset_header_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryStringParameters">reset_query_string_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_body_parameters` <a name="put_body_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putBodyParameters"></a>

```python
def put_body_parameters(
  value: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersBodyParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putBodyParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>]

---

##### `put_header_parameters` <a name="put_header_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putHeaderParameters"></a>

```python
def put_header_parameters(
  value: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putHeaderParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>]

---

##### `put_query_string_parameters` <a name="put_query_string_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryStringParameters"></a>

```python
def put_query_string_parameters(
  value: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryStringParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>]

---

##### `reset_body_parameters` <a name="reset_body_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetBodyParameters"></a>

```python
def reset_body_parameters() -> None
```

##### `reset_header_parameters` <a name="reset_header_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeaderParameters"></a>

```python
def reset_header_parameters() -> None
```

##### `reset_query_string_parameters` <a name="reset_query_string_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryStringParameters"></a>

```python
def reset_query_string_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParameters">body_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList">EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParameters">header_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList">EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParameters">query_string_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParametersInput">body_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParametersInput">header_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParametersInput">query_string_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body_parameters`<sup>Required</sup> <a name="body_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParameters"></a>

```python
body_parameters: EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList">EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList</a>

---

##### `header_parameters`<sup>Required</sup> <a name="header_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParameters"></a>

```python
header_parameters: EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList">EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList</a>

---

##### `query_string_parameters`<sup>Required</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParameters"></a>

```python
query_string_parameters: EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList</a>

---

##### `body_parameters_input`<sup>Optional</sup> <a name="body_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParametersInput"></a>

```python
body_parameters_input: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersBodyParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>]

---

##### `header_parameters_input`<sup>Optional</sup> <a name="header_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParametersInput"></a>

```python
header_parameters_input: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>]

---

##### `query_string_parameters_input`<sup>Optional</sup> <a name="query_string_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParametersInput"></a>

```python
query_string_parameters_input: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersInvocationHttpParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

---


### EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList <a name="EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>]

---


### EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetIsValueSecret">reset_is_value_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_value_secret` <a name="reset_is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetIsValueSecret"></a>

```python
def reset_is_value_secret() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput">is_value_secret_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret_input`<sup>Optional</sup> <a name="is_value_secret_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput"></a>

```python
is_value_secret_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecret"></a>

```python
is_value_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersOAuthParametersClientParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>]

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetIsValueSecret">reset_is_value_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_value_secret` <a name="reset_is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetIsValueSecret"></a>

```python
def reset_is_value_secret() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecretInput">is_value_secret_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret_input`<sup>Optional</sup> <a name="is_value_secret_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecretInput"></a>

```python
is_value_secret_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecret"></a>

```python
is_value_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>]

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetIsValueSecret">reset_is_value_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_value_secret` <a name="reset_is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetIsValueSecret"></a>

```python
def reset_is_value_secret() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecretInput">is_value_secret_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret_input`<sup>Optional</sup> <a name="is_value_secret_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecretInput"></a>

```python
is_value_secret_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecret"></a>

```python
is_value_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putBodyParameters">put_body_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putHeaderParameters">put_header_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putQueryStringParameters">put_query_string_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetBodyParameters">reset_body_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetHeaderParameters">reset_header_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetQueryStringParameters">reset_query_string_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_body_parameters` <a name="put_body_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putBodyParameters"></a>

```python
def put_body_parameters(
  value: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putBodyParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>]

---

##### `put_header_parameters` <a name="put_header_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putHeaderParameters"></a>

```python
def put_header_parameters(
  value: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putHeaderParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>]

---

##### `put_query_string_parameters` <a name="put_query_string_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putQueryStringParameters"></a>

```python
def put_query_string_parameters(
  value: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putQueryStringParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>]

---

##### `reset_body_parameters` <a name="reset_body_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetBodyParameters"></a>

```python
def reset_body_parameters() -> None
```

##### `reset_header_parameters` <a name="reset_header_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetHeaderParameters"></a>

```python
def reset_header_parameters() -> None
```

##### `reset_query_string_parameters` <a name="reset_query_string_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetQueryStringParameters"></a>

```python
def reset_query_string_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParameters">body_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParameters">header_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParameters">query_string_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParametersInput">body_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParametersInput">header_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParametersInput">query_string_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body_parameters`<sup>Required</sup> <a name="body_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParameters"></a>

```python
body_parameters: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList</a>

---

##### `header_parameters`<sup>Required</sup> <a name="header_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParameters"></a>

```python
header_parameters: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList</a>

---

##### `query_string_parameters`<sup>Required</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParameters"></a>

```python
query_string_parameters: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList</a>

---

##### `body_parameters_input`<sup>Optional</sup> <a name="body_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParametersInput"></a>

```python
body_parameters_input: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>]

---

##### `header_parameters_input`<sup>Optional</sup> <a name="header_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParametersInput"></a>

```python
header_parameters_input: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>]

---

##### `query_string_parameters_input`<sup>Optional</sup> <a name="query_string_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParametersInput"></a>

```python
query_string_parameters_input: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>]

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetIsValueSecret">reset_is_value_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_value_secret` <a name="reset_is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetIsValueSecret"></a>

```python
def reset_is_value_secret() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput">is_value_secret_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret_input`<sup>Optional</sup> <a name="is_value_secret_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput"></a>

```python
is_value_secret_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecret"></a>

```python
is_value_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>

---


### EventsConnectionAuthParametersOAuthParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putClientParameters">put_client_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters">put_o_auth_http_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetAuthorizationEndpoint">reset_authorization_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetClientParameters">reset_client_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetHttpMethod">reset_http_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetOAuthHttpParameters">reset_o_auth_http_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_parameters` <a name="put_client_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putClientParameters"></a>

```python
def put_client_parameters(
  client_id: str = None,
  client_secret: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putClientParameters.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_id EventsConnection#client_id}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putClientParameters.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_secret EventsConnection#client_secret}.

---

##### `put_o_auth_http_parameters` <a name="put_o_auth_http_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters"></a>

```python
def put_o_auth_http_parameters(
  body_parameters: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters] = None,
  header_parameters: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters] = None,
  query_string_parameters: IResolvable | typing.List[EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters] = None
) -> None
```

###### `body_parameters`<sup>Optional</sup> <a name="body_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters.parameter.bodyParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}.

---

###### `header_parameters`<sup>Optional</sup> <a name="header_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters.parameter.headerParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}.

---

###### `query_string_parameters`<sup>Optional</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters.parameter.queryStringParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}.

---

##### `reset_authorization_endpoint` <a name="reset_authorization_endpoint" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetAuthorizationEndpoint"></a>

```python
def reset_authorization_endpoint() -> None
```

##### `reset_client_parameters` <a name="reset_client_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetClientParameters"></a>

```python
def reset_client_parameters() -> None
```

##### `reset_http_method` <a name="reset_http_method" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetHttpMethod"></a>

```python
def reset_http_method() -> None
```

##### `reset_o_auth_http_parameters` <a name="reset_o_auth_http_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetOAuthHttpParameters"></a>

```python
def reset_o_auth_http_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParameters">client_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference">EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParameters">o_auth_http_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpointInput">authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParametersInput">client_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParametersInput">o_auth_http_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_parameters`<sup>Required</sup> <a name="client_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParameters"></a>

```python
client_parameters: EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference">EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference</a>

---

##### `o_auth_http_parameters`<sup>Required</sup> <a name="o_auth_http_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParameters"></a>

```python
o_auth_http_parameters: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference</a>

---

##### `authorization_endpoint_input`<sup>Optional</sup> <a name="authorization_endpoint_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpointInput"></a>

```python
authorization_endpoint_input: str
```

- *Type:* str

---

##### `client_parameters_input`<sup>Optional</sup> <a name="client_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParametersInput"></a>

```python
client_parameters_input: IResolvable | EventsConnectionAuthParametersOAuthParametersClientParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `o_auth_http_parameters_input`<sup>Optional</sup> <a name="o_auth_http_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParametersInput"></a>

```python
o_auth_http_parameters_input: IResolvable | EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParametersOAuthParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

---


### EventsConnectionAuthParametersOutputReference <a name="EventsConnectionAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionAuthParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putApiKeyAuthParameters">put_api_key_auth_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putBasicAuthParameters">put_basic_auth_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putConnectivityParameters">put_connectivity_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters">put_invocation_http_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters">put_o_auth_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetApiKeyAuthParameters">reset_api_key_auth_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetBasicAuthParameters">reset_basic_auth_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetConnectivityParameters">reset_connectivity_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetInvocationHttpParameters">reset_invocation_http_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetOAuthParameters">reset_o_auth_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_auth_parameters` <a name="put_api_key_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putApiKeyAuthParameters"></a>

```python
def put_api_key_auth_parameters(
  api_key_name: str = None,
  api_key_value: str = None
) -> None
```

###### `api_key_name`<sup>Optional</sup> <a name="api_key_name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putApiKeyAuthParameters.parameter.apiKeyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_name EventsConnection#api_key_name}.

---

###### `api_key_value`<sup>Optional</sup> <a name="api_key_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putApiKeyAuthParameters.parameter.apiKeyValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#api_key_value EventsConnection#api_key_value}.

---

##### `put_basic_auth_parameters` <a name="put_basic_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putBasicAuthParameters"></a>

```python
def put_basic_auth_parameters(
  password: str = None,
  username: str = None
) -> None
```

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putBasicAuthParameters.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#password EventsConnection#password}.

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putBasicAuthParameters.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#username EventsConnection#username}.

---

##### `put_connectivity_parameters` <a name="put_connectivity_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putConnectivityParameters"></a>

```python
def put_connectivity_parameters(
  resource_parameters: EventsConnectionAuthParametersConnectivityParametersResourceParameters = None
) -> None
```

###### `resource_parameters`<sup>Optional</sup> <a name="resource_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putConnectivityParameters.parameter.resourceParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}.

---

##### `put_invocation_http_parameters` <a name="put_invocation_http_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters"></a>

```python
def put_invocation_http_parameters(
  body_parameters: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersBodyParameters] = None,
  header_parameters: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters] = None,
  query_string_parameters: IResolvable | typing.List[EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters] = None
) -> None
```

###### `body_parameters`<sup>Optional</sup> <a name="body_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters.parameter.bodyParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters">EventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}.

---

###### `header_parameters`<sup>Optional</sup> <a name="header_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters.parameter.headerParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}.

---

###### `query_string_parameters`<sup>Optional</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters.parameter.queryStringParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}.

---

##### `put_o_auth_parameters` <a name="put_o_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters"></a>

```python
def put_o_auth_parameters(
  authorization_endpoint: str = None,
  client_parameters: EventsConnectionAuthParametersOAuthParametersClientParameters = None,
  http_method: str = None,
  o_auth_http_parameters: EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters = None
) -> None
```

###### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters.parameter.authorizationEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#authorization_endpoint EventsConnection#authorization_endpoint}.

---

###### `client_parameters`<sup>Optional</sup> <a name="client_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters.parameter.clientParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#client_parameters EventsConnection#client_parameters}.

---

###### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters.parameter.httpMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#http_method EventsConnection#http_method}.

---

###### `o_auth_http_parameters`<sup>Optional</sup> <a name="o_auth_http_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters.parameter.oAuthHttpParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#o_auth_http_parameters EventsConnection#o_auth_http_parameters}.

---

##### `reset_api_key_auth_parameters` <a name="reset_api_key_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetApiKeyAuthParameters"></a>

```python
def reset_api_key_auth_parameters() -> None
```

##### `reset_basic_auth_parameters` <a name="reset_basic_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetBasicAuthParameters"></a>

```python
def reset_basic_auth_parameters() -> None
```

##### `reset_connectivity_parameters` <a name="reset_connectivity_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetConnectivityParameters"></a>

```python
def reset_connectivity_parameters() -> None
```

##### `reset_invocation_http_parameters` <a name="reset_invocation_http_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetInvocationHttpParameters"></a>

```python
def reset_invocation_http_parameters() -> None
```

##### `reset_o_auth_parameters` <a name="reset_o_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetOAuthParameters"></a>

```python
def reset_o_auth_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParameters">api_key_auth_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference">EventsConnectionAuthParametersApiKeyAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParameters">basic_auth_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference">EventsConnectionAuthParametersBasicAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParameters">connectivity_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParameters">invocation_http_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference">EventsConnectionAuthParametersInvocationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParameters">o_auth_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParametersInput">api_key_auth_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParametersInput">basic_auth_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParametersInput">connectivity_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParametersInput">invocation_http_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParametersInput">o_auth_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_auth_parameters`<sup>Required</sup> <a name="api_key_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParameters"></a>

```python
api_key_auth_parameters: EventsConnectionAuthParametersApiKeyAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference">EventsConnectionAuthParametersApiKeyAuthParametersOutputReference</a>

---

##### `basic_auth_parameters`<sup>Required</sup> <a name="basic_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParameters"></a>

```python
basic_auth_parameters: EventsConnectionAuthParametersBasicAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference">EventsConnectionAuthParametersBasicAuthParametersOutputReference</a>

---

##### `connectivity_parameters`<sup>Required</sup> <a name="connectivity_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParameters"></a>

```python
connectivity_parameters: EventsConnectionAuthParametersConnectivityParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersOutputReference</a>

---

##### `invocation_http_parameters`<sup>Required</sup> <a name="invocation_http_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParameters"></a>

```python
invocation_http_parameters: EventsConnectionAuthParametersInvocationHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference">EventsConnectionAuthParametersInvocationHttpParametersOutputReference</a>

---

##### `o_auth_parameters`<sup>Required</sup> <a name="o_auth_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParameters"></a>

```python
o_auth_parameters: EventsConnectionAuthParametersOAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOutputReference</a>

---

##### `api_key_auth_parameters_input`<sup>Optional</sup> <a name="api_key_auth_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParametersInput"></a>

```python
api_key_auth_parameters_input: IResolvable | EventsConnectionAuthParametersApiKeyAuthParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

---

##### `basic_auth_parameters_input`<sup>Optional</sup> <a name="basic_auth_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParametersInput"></a>

```python
basic_auth_parameters_input: IResolvable | EventsConnectionAuthParametersBasicAuthParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

---

##### `connectivity_parameters_input`<sup>Optional</sup> <a name="connectivity_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParametersInput"></a>

```python
connectivity_parameters_input: IResolvable | EventsConnectionAuthParametersConnectivityParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

---

##### `invocation_http_parameters_input`<sup>Optional</sup> <a name="invocation_http_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParametersInput"></a>

```python
invocation_http_parameters_input: IResolvable | EventsConnectionAuthParametersInvocationHttpParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

---

##### `o_auth_parameters_input`<sup>Optional</sup> <a name="o_auth_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParametersInput"></a>

```python
o_auth_parameters_input: IResolvable | EventsConnectionAuthParametersOAuthParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionAuthParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

---


### EventsConnectionInvocationConnectivityParametersOutputReference <a name="EventsConnectionInvocationConnectivityParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.putResourceParameters">put_resource_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resetResourceParameters">reset_resource_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource_parameters` <a name="put_resource_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.putResourceParameters"></a>

```python
def put_resource_parameters(
  resource_configuration_arn: str = None
) -> None
```

###### `resource_configuration_arn`<sup>Optional</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.putResourceParameters.parameter.resourceConfigurationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}.

---

##### `reset_resource_parameters` <a name="reset_resource_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resetResourceParameters"></a>

```python
def reset_resource_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParameters">resource_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference">EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParametersInput">resource_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_parameters`<sup>Required</sup> <a name="resource_parameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParameters"></a>

```python
resource_parameters: EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference">EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference</a>

---

##### `resource_parameters_input`<sup>Optional</sup> <a name="resource_parameters_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParametersInput"></a>

```python
resource_parameters_input: IResolvable | EventsConnectionInvocationConnectivityParametersResourceParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionInvocationConnectivityParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

---


### EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference <a name="EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_connection

eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn">reset_resource_configuration_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_configuration_arn` <a name="reset_resource_configuration_arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn"></a>

```python
def reset_resource_configuration_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn">resource_association_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput">resource_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_association_arn`<sup>Required</sup> <a name="resource_association_arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn"></a>

```python
resource_association_arn: str
```

- *Type:* str

---

##### `resource_configuration_arn_input`<sup>Optional</sup> <a name="resource_configuration_arn_input" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput"></a>

```python
resource_configuration_arn_input: str
```

- *Type:* str

---

##### `resource_configuration_arn`<sup>Required</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn"></a>

```python
resource_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsConnectionInvocationConnectivityParametersResourceParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

---



