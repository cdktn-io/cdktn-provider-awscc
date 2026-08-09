# `appsyncApi` Submodule <a name="`appsyncApi` Submodule" id="@cdktn/provider-awscc.appsyncApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncApi <a name="AppsyncApi" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api awscc_appsync_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApi(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  event_config: AppsyncApiEventConfig = None,
  owner_contact: str = None,
  tags: IResolvable | typing.List[AppsyncApiTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.eventConfig">event_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a></code> | The configuration for an Event Api. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.ownerContact">owner_contact</a></code> | <code>str</code> | The owner contact information for an API resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this AppSync API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.name"></a>

- *Type:* str

The name of the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#name AppsyncApi#name}

---

##### `event_config`<sup>Optional</sup> <a name="event_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.eventConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

The configuration for an Event Api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#event_config AppsyncApi#event_config}

---

##### `owner_contact`<sup>Optional</sup> <a name="owner_contact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.ownerContact"></a>

- *Type:* str

The owner contact information for an API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>]

An arbitrary set of tags (key-value pairs) for this AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#tags AppsyncApi#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig">put_event_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetEventConfig">reset_event_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOwnerContact">reset_owner_contact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_config` <a name="put_event_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig"></a>

```python
def put_event_config(
  auth_providers: IResolvable | typing.List[AppsyncApiEventConfigAuthProviders] = None,
  connection_auth_modes: IResolvable | typing.List[AppsyncApiEventConfigConnectionAuthModes] = None,
  default_publish_auth_modes: IResolvable | typing.List[AppsyncApiEventConfigDefaultPublishAuthModes] = None,
  default_subscribe_auth_modes: IResolvable | typing.List[AppsyncApiEventConfigDefaultSubscribeAuthModes] = None,
  log_config: AppsyncApiEventConfigLogConfig = None
) -> None
```

###### `auth_providers`<sup>Optional</sup> <a name="auth_providers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig.parameter.authProviders"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>]

A list of auth providers for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#auth_providers AppsyncApi#auth_providers}

---

###### `connection_auth_modes`<sup>Optional</sup> <a name="connection_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig.parameter.connectionAuthModes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>]

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#connection_auth_modes AppsyncApi#connection_auth_modes}

---

###### `default_publish_auth_modes`<sup>Optional</sup> <a name="default_publish_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig.parameter.defaultPublishAuthModes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>]

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#default_publish_auth_modes AppsyncApi#default_publish_auth_modes}

---

###### `default_subscribe_auth_modes`<sup>Optional</sup> <a name="default_subscribe_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig.parameter.defaultSubscribeAuthModes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>]

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#default_subscribe_auth_modes AppsyncApi#default_subscribe_auth_modes}

---

###### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig.parameter.logConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

The log config for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#log_config AppsyncApi#log_config}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppsyncApiTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>]

---

##### `reset_event_config` <a name="reset_event_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetEventConfig"></a>

```python
def reset_event_config() -> None
```

##### `reset_owner_contact` <a name="reset_owner_contact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOwnerContact"></a>

```python
def reset_owner_contact() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppsyncApi resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isConstruct"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApi.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppsyncApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppsyncApi to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppsyncApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiArn">api_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dns">dns</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference">AppsyncApiDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfig">event_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference">AppsyncApiEventConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList">AppsyncApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfigInput">event_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContactInput">owner_contact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContact">owner_contact</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_arn`<sup>Required</sup> <a name="api_arn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiArn"></a>

```python
api_arn: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dns"></a>

```python
dns: AppsyncApiDnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference">AppsyncApiDnsOutputReference</a>

---

##### `event_config`<sup>Required</sup> <a name="event_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfig"></a>

```python
event_config: AppsyncApiEventConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference">AppsyncApiEventConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tags"></a>

```python
tags: AppsyncApiTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList">AppsyncApiTagsList</a>

---

##### `event_config_input`<sup>Optional</sup> <a name="event_config_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfigInput"></a>

```python
event_config_input: IResolvable | AppsyncApiEventConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_contact_input`<sup>Optional</sup> <a name="owner_contact_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContactInput"></a>

```python
owner_contact_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppsyncApiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner_contact`<sup>Required</sup> <a name="owner_contact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContact"></a>

```python
owner_contact: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncApiConfig <a name="AppsyncApiConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  event_config: AppsyncApiEventConfig = None,
  owner_contact: str = None,
  tags: IResolvable | typing.List[AppsyncApiTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.name">name</a></code> | <code>str</code> | The name of the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.eventConfig">event_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a></code> | The configuration for an Event Api. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.ownerContact">owner_contact</a></code> | <code>str</code> | The owner contact information for an API resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this AppSync API. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#name AppsyncApi#name}

---

##### `event_config`<sup>Optional</sup> <a name="event_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.eventConfig"></a>

```python
event_config: AppsyncApiEventConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

The configuration for an Event Api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#event_config AppsyncApi#event_config}

---

##### `owner_contact`<sup>Optional</sup> <a name="owner_contact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.ownerContact"></a>

```python
owner_contact: str
```

- *Type:* str

The owner contact information for an API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppsyncApiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>]

An arbitrary set of tags (key-value pairs) for this AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#tags AppsyncApi#tags}

---

### AppsyncApiDns <a name="AppsyncApiDns" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDns.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiDns()
```


### AppsyncApiEventConfig <a name="AppsyncApiEventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfig(
  auth_providers: IResolvable | typing.List[AppsyncApiEventConfigAuthProviders] = None,
  connection_auth_modes: IResolvable | typing.List[AppsyncApiEventConfigConnectionAuthModes] = None,
  default_publish_auth_modes: IResolvable | typing.List[AppsyncApiEventConfigDefaultPublishAuthModes] = None,
  default_subscribe_auth_modes: IResolvable | typing.List[AppsyncApiEventConfigDefaultSubscribeAuthModes] = None,
  log_config: AppsyncApiEventConfigLogConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.authProviders">auth_providers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>]</code> | A list of auth providers for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.connectionAuthModes">connection_auth_modes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>]</code> | A list of auth modes for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultPublishAuthModes">default_publish_auth_modes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>]</code> | A list of auth modes for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultSubscribeAuthModes">default_subscribe_auth_modes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>]</code> | A list of auth modes for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a></code> | The log config for the AppSync API. |

---

##### `auth_providers`<sup>Optional</sup> <a name="auth_providers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.authProviders"></a>

```python
auth_providers: IResolvable | typing.List[AppsyncApiEventConfigAuthProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>]

A list of auth providers for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#auth_providers AppsyncApi#auth_providers}

---

##### `connection_auth_modes`<sup>Optional</sup> <a name="connection_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.connectionAuthModes"></a>

```python
connection_auth_modes: IResolvable | typing.List[AppsyncApiEventConfigConnectionAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>]

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#connection_auth_modes AppsyncApi#connection_auth_modes}

---

##### `default_publish_auth_modes`<sup>Optional</sup> <a name="default_publish_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultPublishAuthModes"></a>

```python
default_publish_auth_modes: IResolvable | typing.List[AppsyncApiEventConfigDefaultPublishAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>]

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#default_publish_auth_modes AppsyncApi#default_publish_auth_modes}

---

##### `default_subscribe_auth_modes`<sup>Optional</sup> <a name="default_subscribe_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultSubscribeAuthModes"></a>

```python
default_subscribe_auth_modes: IResolvable | typing.List[AppsyncApiEventConfigDefaultSubscribeAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>]

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#default_subscribe_auth_modes AppsyncApi#default_subscribe_auth_modes}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.logConfig"></a>

```python
log_config: AppsyncApiEventConfigLogConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

The log config for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#log_config AppsyncApi#log_config}

---

### AppsyncApiEventConfigAuthProviders <a name="AppsyncApiEventConfigAuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProviders(
  auth_type: str = None,
  cognito_config: AppsyncApiEventConfigAuthProvidersCognitoConfig = None,
  lambda_authorizer_config: AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig = None,
  open_id_connect_config: AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.authType">auth_type</a></code> | <code>str</code> | Security configuration for your AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.cognitoConfig">cognito_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a></code> | Optional authorization configuration for using Amazon Cognito user pools with your API endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a></code> | A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.openIdConnectConfig">open_id_connect_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a></code> | The OpenID Connect configuration. |

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

##### `cognito_config`<sup>Optional</sup> <a name="cognito_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.cognitoConfig"></a>

```python
cognito_config: AppsyncApiEventConfigAuthProvidersCognitoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a>

Optional authorization configuration for using Amazon Cognito user pools with your API endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#cognito_config AppsyncApi#cognito_config}

---

##### `lambda_authorizer_config`<sup>Optional</sup> <a name="lambda_authorizer_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a>

A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode.

Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#lambda_authorizer_config AppsyncApi#lambda_authorizer_config}

---

##### `open_id_connect_config`<sup>Optional</sup> <a name="open_id_connect_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.openIdConnectConfig"></a>

```python
open_id_connect_config: AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a>

The OpenID Connect configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#open_id_connect_config AppsyncApi#open_id_connect_config}

---

### AppsyncApiEventConfigAuthProvidersCognitoConfig <a name="AppsyncApiEventConfigAuthProvidersCognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig(
  app_id_client_regex: str = None,
  aws_region: str = None,
  user_pool_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}. |

---

##### `app_id_client_regex`<sup>Optional</sup> <a name="app_id_client_regex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}.

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}.

---

##### `user_pool_id`<sup>Optional</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}.

---

### AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig <a name="AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig(
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  authorizer_uri: str = None,
  identity_validation_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}. |

---

##### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}.

---

##### `authorizer_uri`<sup>Optional</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}.

---

##### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}.

---

### AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig <a name="AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig(
  auth_ttl: typing.Union[int, float] = None,
  client_id: str = None,
  iat_ttl: typing.Union[int, float] = None,
  issuer: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}. |

---

##### `auth_ttl`<sup>Optional</sup> <a name="auth_ttl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}.

---

##### `iat_ttl`<sup>Optional</sup> <a name="iat_ttl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}.

---

### AppsyncApiEventConfigConnectionAuthModes <a name="AppsyncApiEventConfigConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigConnectionAuthModes(
  auth_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes.property.authType">auth_type</a></code> | <code>str</code> | Security configuration for your AppSync API. |

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

### AppsyncApiEventConfigDefaultPublishAuthModes <a name="AppsyncApiEventConfigDefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes(
  auth_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes.property.authType">auth_type</a></code> | <code>str</code> | Security configuration for your AppSync API. |

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

### AppsyncApiEventConfigDefaultSubscribeAuthModes <a name="AppsyncApiEventConfigDefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes(
  auth_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes.property.authType">auth_type</a></code> | <code>str</code> | Security configuration for your AppSync API. |

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

### AppsyncApiEventConfigLogConfig <a name="AppsyncApiEventConfigLogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigLogConfig(
  cloudwatch_logs_role_arn: str = None,
  log_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.cloudwatchLogsRoleArn">cloudwatch_logs_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.logLevel">log_level</a></code> | <code>str</code> | Logging level for the AppSync API. |

---

##### `cloudwatch_logs_role_arn`<sup>Optional</sup> <a name="cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.cloudwatchLogsRoleArn"></a>

```python
cloudwatch_logs_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Logging level for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#log_level AppsyncApi#log_level}

---

### AppsyncApiTags <a name="AppsyncApiTags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.key">key</a></code> | <code>str</code> | A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.value">value</a></code> | <code>str</code> | A string containing the value for this tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string used to identify this tag. You can specify a maximum of 128 characters for a tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#key AppsyncApi#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.value"></a>

```python
value: str
```

- *Type:* str

A string containing the value for this tag.

You can specify a maximum of 256 characters for a tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#value AppsyncApi#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncApiDnsOutputReference <a name="AppsyncApiDnsOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.http">http</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.realtime">realtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDns">AppsyncApiDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.http"></a>

```python
http: str
```

- *Type:* str

---

##### `realtime`<sup>Required</sup> <a name="realtime" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.realtime"></a>

```python
realtime: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncApiDns
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDns">AppsyncApiDns</a>

---


### AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference <a name="AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAppIdClientRegex">reset_app_id_client_regex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAwsRegion">reset_aws_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetUserPoolId">reset_user_pool_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_id_client_regex` <a name="reset_app_id_client_regex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAppIdClientRegex"></a>

```python
def reset_app_id_client_regex() -> None
```

##### `reset_aws_region` <a name="reset_aws_region" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAwsRegion"></a>

```python
def reset_aws_region() -> None
```

##### `reset_user_pool_id` <a name="reset_user_pool_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetUserPoolId"></a>

```python
def reset_user_pool_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegexInput">app_id_client_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_client_regex_input`<sup>Optional</sup> <a name="app_id_client_regex_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegexInput"></a>

```python
app_id_client_regex_input: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `app_id_client_regex`<sup>Required</sup> <a name="app_id_client_regex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncApiEventConfigAuthProvidersCognitoConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a>

---


### AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference <a name="AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">reset_authorizer_result_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">reset_authorizer_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">reset_identity_validation_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorizer_result_ttl_in_seconds` <a name="reset_authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```python
def reset_authorizer_result_ttl_in_seconds() -> None
```

##### `reset_authorizer_uri` <a name="reset_authorizer_uri" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```python
def reset_authorizer_uri() -> None
```

##### `reset_identity_validation_expression` <a name="reset_identity_validation_expression" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```python
def reset_identity_validation_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizer_result_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identity_validation_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds_input`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```python
authorizer_result_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri_input`<sup>Optional</sup> <a name="authorizer_uri_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```python
authorizer_uri_input: str
```

- *Type:* str

---

##### `identity_validation_expression_input`<sup>Optional</sup> <a name="identity_validation_expression_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```python
identity_validation_expression_input: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds`<sup>Required</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

---

##### `identity_validation_expression`<sup>Required</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a>

---


### AppsyncApiEventConfigAuthProvidersList <a name="AppsyncApiEventConfigAuthProvidersList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiEventConfigAuthProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppsyncApiEventConfigAuthProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>]

---


### AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference <a name="AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetAuthTtl">reset_auth_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIatTtl">reset_iat_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_ttl` <a name="reset_auth_ttl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```python
def reset_auth_ttl() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_iat_ttl` <a name="reset_iat_ttl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```python
def reset_iat_ttl() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtlInput">auth_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput">iat_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_ttl_input`<sup>Optional</sup> <a name="auth_ttl_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```python
auth_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `iat_ttl_input`<sup>Optional</sup> <a name="iat_ttl_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```python
iat_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `auth_ttl`<sup>Required</sup> <a name="auth_ttl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `iat_ttl`<sup>Required</sup> <a name="iat_ttl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a>

---


### AppsyncApiEventConfigAuthProvidersOutputReference <a name="AppsyncApiEventConfigAuthProvidersOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig">put_cognito_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig">put_lambda_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig">put_open_id_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetCognitoConfig">reset_cognito_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetLambdaAuthorizerConfig">reset_lambda_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetOpenIdConnectConfig">reset_open_id_connect_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cognito_config` <a name="put_cognito_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig"></a>

```python
def put_cognito_config(
  app_id_client_regex: str = None,
  aws_region: str = None,
  user_pool_id: str = None
) -> None
```

###### `app_id_client_regex`<sup>Optional</sup> <a name="app_id_client_regex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig.parameter.appIdClientRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}.

---

###### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig.parameter.awsRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}.

---

###### `user_pool_id`<sup>Optional</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}.

---

##### `put_lambda_authorizer_config` <a name="put_lambda_authorizer_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig"></a>

```python
def put_lambda_authorizer_config(
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  authorizer_uri: str = None,
  identity_validation_expression: str = None
) -> None
```

###### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig.parameter.authorizerResultTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}.

---

###### `authorizer_uri`<sup>Optional</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig.parameter.authorizerUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}.

---

###### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig.parameter.identityValidationExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}.

---

##### `put_open_id_connect_config` <a name="put_open_id_connect_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig"></a>

```python
def put_open_id_connect_config(
  auth_ttl: typing.Union[int, float] = None,
  client_id: str = None,
  iat_ttl: typing.Union[int, float] = None,
  issuer: str = None
) -> None
```

###### `auth_ttl`<sup>Optional</sup> <a name="auth_ttl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig.parameter.authTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}.

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}.

---

###### `iat_ttl`<sup>Optional</sup> <a name="iat_ttl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig.parameter.iatTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}.

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}.

---

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_cognito_config` <a name="reset_cognito_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetCognitoConfig"></a>

```python
def reset_cognito_config() -> None
```

##### `reset_lambda_authorizer_config` <a name="reset_lambda_authorizer_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetLambdaAuthorizerConfig"></a>

```python
def reset_lambda_authorizer_config() -> None
```

##### `reset_open_id_connect_config` <a name="reset_open_id_connect_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetOpenIdConnectConfig"></a>

```python
def reset_open_id_connect_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfig">cognito_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference">AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfig">open_id_connect_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfigInput">cognito_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfigInput">lambda_authorizer_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfigInput">open_id_connect_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cognito_config`<sup>Required</sup> <a name="cognito_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfig"></a>

```python
cognito_config: AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference">AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference</a>

---

##### `lambda_authorizer_config`<sup>Required</sup> <a name="lambda_authorizer_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference</a>

---

##### `open_id_connect_config`<sup>Required</sup> <a name="open_id_connect_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfig"></a>

```python
open_id_connect_config: AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference</a>

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `cognito_config_input`<sup>Optional</sup> <a name="cognito_config_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfigInput"></a>

```python
cognito_config_input: IResolvable | AppsyncApiEventConfigAuthProvidersCognitoConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a>

---

##### `lambda_authorizer_config_input`<sup>Optional</sup> <a name="lambda_authorizer_config_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfigInput"></a>

```python
lambda_authorizer_config_input: IResolvable | AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a>

---

##### `open_id_connect_config_input`<sup>Optional</sup> <a name="open_id_connect_config_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfigInput"></a>

```python
open_id_connect_config_input: IResolvable | AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a>

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncApiEventConfigAuthProviders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>

---


### AppsyncApiEventConfigConnectionAuthModesList <a name="AppsyncApiEventConfigConnectionAuthModesList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigConnectionAuthModesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiEventConfigConnectionAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppsyncApiEventConfigConnectionAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>]

---


### AppsyncApiEventConfigConnectionAuthModesOutputReference <a name="AppsyncApiEventConfigConnectionAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncApiEventConfigConnectionAuthModes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>

---


### AppsyncApiEventConfigDefaultPublishAuthModesList <a name="AppsyncApiEventConfigDefaultPublishAuthModesList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiEventConfigDefaultPublishAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppsyncApiEventConfigDefaultPublishAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>]

---


### AppsyncApiEventConfigDefaultPublishAuthModesOutputReference <a name="AppsyncApiEventConfigDefaultPublishAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncApiEventConfigDefaultPublishAuthModes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>

---


### AppsyncApiEventConfigDefaultSubscribeAuthModesList <a name="AppsyncApiEventConfigDefaultSubscribeAuthModesList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppsyncApiEventConfigDefaultSubscribeAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>]

---


### AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference <a name="AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncApiEventConfigDefaultSubscribeAuthModes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>

---


### AppsyncApiEventConfigLogConfigOutputReference <a name="AppsyncApiEventConfigLogConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetCloudwatchLogsRoleArn">reset_cloudwatch_logs_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetLogLevel">reset_log_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloudwatch_logs_role_arn` <a name="reset_cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetCloudwatchLogsRoleArn"></a>

```python
def reset_cloudwatch_logs_role_arn() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetLogLevel"></a>

```python
def reset_log_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">cloudwatch_logs_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArn">cloudwatch_logs_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_role_arn_input`<sup>Optional</sup> <a name="cloudwatch_logs_role_arn_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```python
cloudwatch_logs_role_arn_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `cloudwatch_logs_role_arn`<sup>Required</sup> <a name="cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```python
cloudwatch_logs_role_arn: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncApiEventConfigLogConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

---


### AppsyncApiEventConfigOutputReference <a name="AppsyncApiEventConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiEventConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProviders">put_auth_providers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthModes">put_connection_auth_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthModes">put_default_publish_auth_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthModes">put_default_subscribe_auth_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetAuthProviders">reset_auth_providers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetConnectionAuthModes">reset_connection_auth_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultPublishAuthModes">reset_default_publish_auth_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultSubscribeAuthModes">reset_default_subscribe_auth_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetLogConfig">reset_log_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auth_providers` <a name="put_auth_providers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProviders"></a>

```python
def put_auth_providers(
  value: IResolvable | typing.List[AppsyncApiEventConfigAuthProviders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProviders.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>]

---

##### `put_connection_auth_modes` <a name="put_connection_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthModes"></a>

```python
def put_connection_auth_modes(
  value: IResolvable | typing.List[AppsyncApiEventConfigConnectionAuthModes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthModes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>]

---

##### `put_default_publish_auth_modes` <a name="put_default_publish_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthModes"></a>

```python
def put_default_publish_auth_modes(
  value: IResolvable | typing.List[AppsyncApiEventConfigDefaultPublishAuthModes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthModes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>]

---

##### `put_default_subscribe_auth_modes` <a name="put_default_subscribe_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthModes"></a>

```python
def put_default_subscribe_auth_modes(
  value: IResolvable | typing.List[AppsyncApiEventConfigDefaultSubscribeAuthModes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthModes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>]

---

##### `put_log_config` <a name="put_log_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig"></a>

```python
def put_log_config(
  cloudwatch_logs_role_arn: str = None,
  log_level: str = None
) -> None
```

###### `cloudwatch_logs_role_arn`<sup>Optional</sup> <a name="cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig.parameter.cloudwatchLogsRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}.

---

###### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig.parameter.logLevel"></a>

- *Type:* str

Logging level for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_api#log_level AppsyncApi#log_level}

---

##### `reset_auth_providers` <a name="reset_auth_providers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetAuthProviders"></a>

```python
def reset_auth_providers() -> None
```

##### `reset_connection_auth_modes` <a name="reset_connection_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetConnectionAuthModes"></a>

```python
def reset_connection_auth_modes() -> None
```

##### `reset_default_publish_auth_modes` <a name="reset_default_publish_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultPublishAuthModes"></a>

```python
def reset_default_publish_auth_modes() -> None
```

##### `reset_default_subscribe_auth_modes` <a name="reset_default_subscribe_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultSubscribeAuthModes"></a>

```python
def reset_default_subscribe_auth_modes() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetLogConfig"></a>

```python
def reset_log_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProviders">auth_providers</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList">AppsyncApiEventConfigAuthProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModes">connection_auth_modes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList">AppsyncApiEventConfigConnectionAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModes">default_publish_auth_modes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList">AppsyncApiEventConfigDefaultPublishAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModes">default_subscribe_auth_modes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList">AppsyncApiEventConfigDefaultSubscribeAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference">AppsyncApiEventConfigLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProvidersInput">auth_providers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModesInput">connection_auth_modes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModesInput">default_publish_auth_modes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModesInput">default_subscribe_auth_modes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfigInput">log_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_providers`<sup>Required</sup> <a name="auth_providers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProviders"></a>

```python
auth_providers: AppsyncApiEventConfigAuthProvidersList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList">AppsyncApiEventConfigAuthProvidersList</a>

---

##### `connection_auth_modes`<sup>Required</sup> <a name="connection_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModes"></a>

```python
connection_auth_modes: AppsyncApiEventConfigConnectionAuthModesList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList">AppsyncApiEventConfigConnectionAuthModesList</a>

---

##### `default_publish_auth_modes`<sup>Required</sup> <a name="default_publish_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModes"></a>

```python
default_publish_auth_modes: AppsyncApiEventConfigDefaultPublishAuthModesList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList">AppsyncApiEventConfigDefaultPublishAuthModesList</a>

---

##### `default_subscribe_auth_modes`<sup>Required</sup> <a name="default_subscribe_auth_modes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModes"></a>

```python
default_subscribe_auth_modes: AppsyncApiEventConfigDefaultSubscribeAuthModesList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList">AppsyncApiEventConfigDefaultSubscribeAuthModesList</a>

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfig"></a>

```python
log_config: AppsyncApiEventConfigLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference">AppsyncApiEventConfigLogConfigOutputReference</a>

---

##### `auth_providers_input`<sup>Optional</sup> <a name="auth_providers_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProvidersInput"></a>

```python
auth_providers_input: IResolvable | typing.List[AppsyncApiEventConfigAuthProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>]

---

##### `connection_auth_modes_input`<sup>Optional</sup> <a name="connection_auth_modes_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModesInput"></a>

```python
connection_auth_modes_input: IResolvable | typing.List[AppsyncApiEventConfigConnectionAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>]

---

##### `default_publish_auth_modes_input`<sup>Optional</sup> <a name="default_publish_auth_modes_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModesInput"></a>

```python
default_publish_auth_modes_input: IResolvable | typing.List[AppsyncApiEventConfigDefaultPublishAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>]

---

##### `default_subscribe_auth_modes_input`<sup>Optional</sup> <a name="default_subscribe_auth_modes_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModesInput"></a>

```python
default_subscribe_auth_modes_input: IResolvable | typing.List[AppsyncApiEventConfigDefaultSubscribeAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>]

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfigInput"></a>

```python
log_config_input: IResolvable | AppsyncApiEventConfigLogConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncApiEventConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

---


### AppsyncApiTagsList <a name="AppsyncApiTagsList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppsyncApiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>]

---


### AppsyncApiTagsOutputReference <a name="AppsyncApiTagsOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_api

appsyncApi.AppsyncApiTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncApiTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>

---



