# `appsyncChannelNamespace` Submodule <a name="`appsyncChannelNamespace` Submodule" id="@cdktn/provider-awscc.appsyncChannelNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncChannelNamespace <a name="AppsyncChannelNamespace" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace awscc_appsync_channel_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespace(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_id: str,
  name: str,
  code_handlers: str = None,
  code_s3_location: str = None,
  handler_configs: AppsyncChannelNamespaceHandlerConfigs = None,
  publish_auth_modes: IResolvable | typing.List[AppsyncChannelNamespacePublishAuthModes] = None,
  subscribe_auth_modes: IResolvable | typing.List[AppsyncChannelNamespaceSubscribeAuthModes] = None,
  tags: IResolvable | typing.List[AppsyncChannelNamespaceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | AppSync Api Id that this Channel Namespace belongs to. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.name">name</a></code> | <code>str</code> | Namespace indentifier. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.codeHandlers">code_handlers</a></code> | <code>str</code> | String of APPSYNC_JS code to be used by the handlers. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.codeS3Location">code_s3_location</a></code> | <code>str</code> | The Amazon S3 endpoint where the code is located. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.handlerConfigs">handler_configs</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#handler_configs AppsyncChannelNamespace#handler_configs}. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.publishAuthModes">publish_auth_modes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>]</code> | List of AuthModes supported for Publish operations. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.subscribeAuthModes">subscribe_auth_modes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>]</code> | List of AuthModes supported for Subscribe operations. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this AppSync API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.apiId"></a>

- *Type:* str

AppSync Api Id that this Channel Namespace belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#api_id AppsyncChannelNamespace#api_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.name"></a>

- *Type:* str

Namespace indentifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#name AppsyncChannelNamespace#name}

---

##### `code_handlers`<sup>Optional</sup> <a name="code_handlers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.codeHandlers"></a>

- *Type:* str

String of APPSYNC_JS code to be used by the handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#code_handlers AppsyncChannelNamespace#code_handlers}

---

##### `code_s3_location`<sup>Optional</sup> <a name="code_s3_location" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.codeS3Location"></a>

- *Type:* str

The Amazon S3 endpoint where the code is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#code_s3_location AppsyncChannelNamespace#code_s3_location}

---

##### `handler_configs`<sup>Optional</sup> <a name="handler_configs" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.handlerConfigs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#handler_configs AppsyncChannelNamespace#handler_configs}.

---

##### `publish_auth_modes`<sup>Optional</sup> <a name="publish_auth_modes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.publishAuthModes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>]

List of AuthModes supported for Publish operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#publish_auth_modes AppsyncChannelNamespace#publish_auth_modes}

---

##### `subscribe_auth_modes`<sup>Optional</sup> <a name="subscribe_auth_modes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.subscribeAuthModes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>]

List of AuthModes supported for Subscribe operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#subscribe_auth_modes AppsyncChannelNamespace#subscribe_auth_modes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>]

An arbitrary set of tags (key-value pairs) for this AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#tags AppsyncChannelNamespace#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putHandlerConfigs">put_handler_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putPublishAuthModes">put_publish_auth_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putSubscribeAuthModes">put_subscribe_auth_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetCodeHandlers">reset_code_handlers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetCodeS3Location">reset_code_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetHandlerConfigs">reset_handler_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetPublishAuthModes">reset_publish_auth_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetSubscribeAuthModes">reset_subscribe_auth_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_handler_configs` <a name="put_handler_configs" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putHandlerConfigs"></a>

```python
def put_handler_configs(
  on_publish: AppsyncChannelNamespaceHandlerConfigsOnPublish = None,
  on_subscribe: AppsyncChannelNamespaceHandlerConfigsOnSubscribe = None
) -> None
```

###### `on_publish`<sup>Optional</sup> <a name="on_publish" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putHandlerConfigs.parameter.onPublish"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#on_publish AppsyncChannelNamespace#on_publish}.

---

###### `on_subscribe`<sup>Optional</sup> <a name="on_subscribe" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putHandlerConfigs.parameter.onSubscribe"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#on_subscribe AppsyncChannelNamespace#on_subscribe}.

---

##### `put_publish_auth_modes` <a name="put_publish_auth_modes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putPublishAuthModes"></a>

```python
def put_publish_auth_modes(
  value: IResolvable | typing.List[AppsyncChannelNamespacePublishAuthModes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putPublishAuthModes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>]

---

##### `put_subscribe_auth_modes` <a name="put_subscribe_auth_modes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putSubscribeAuthModes"></a>

```python
def put_subscribe_auth_modes(
  value: IResolvable | typing.List[AppsyncChannelNamespaceSubscribeAuthModes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putSubscribeAuthModes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppsyncChannelNamespaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>]

---

##### `reset_code_handlers` <a name="reset_code_handlers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetCodeHandlers"></a>

```python
def reset_code_handlers() -> None
```

##### `reset_code_s3_location` <a name="reset_code_s3_location" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetCodeS3Location"></a>

```python
def reset_code_s3_location() -> None
```

##### `reset_handler_configs` <a name="reset_handler_configs" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetHandlerConfigs"></a>

```python
def reset_handler_configs() -> None
```

##### `reset_publish_auth_modes` <a name="reset_publish_auth_modes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetPublishAuthModes"></a>

```python
def reset_publish_auth_modes() -> None
```

##### `reset_subscribe_auth_modes` <a name="reset_subscribe_auth_modes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetSubscribeAuthModes"></a>

```python
def reset_subscribe_auth_modes() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppsyncChannelNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isConstruct"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppsyncChannelNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppsyncChannelNamespace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppsyncChannelNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncChannelNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.channelNamespaceArn">channel_namespace_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.handlerConfigs">handler_configs</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference">AppsyncChannelNamespaceHandlerConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.publishAuthModes">publish_auth_modes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList">AppsyncChannelNamespacePublishAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.subscribeAuthModes">subscribe_auth_modes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList">AppsyncChannelNamespaceSubscribeAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList">AppsyncChannelNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeHandlersInput">code_handlers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeS3LocationInput">code_s3_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.handlerConfigsInput">handler_configs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.publishAuthModesInput">publish_auth_modes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.subscribeAuthModesInput">subscribe_auth_modes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeHandlers">code_handlers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeS3Location">code_s3_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_namespace_arn`<sup>Required</sup> <a name="channel_namespace_arn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.channelNamespaceArn"></a>

```python
channel_namespace_arn: str
```

- *Type:* str

---

##### `handler_configs`<sup>Required</sup> <a name="handler_configs" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.handlerConfigs"></a>

```python
handler_configs: AppsyncChannelNamespaceHandlerConfigsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference">AppsyncChannelNamespaceHandlerConfigsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `publish_auth_modes`<sup>Required</sup> <a name="publish_auth_modes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.publishAuthModes"></a>

```python
publish_auth_modes: AppsyncChannelNamespacePublishAuthModesList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList">AppsyncChannelNamespacePublishAuthModesList</a>

---

##### `subscribe_auth_modes`<sup>Required</sup> <a name="subscribe_auth_modes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.subscribeAuthModes"></a>

```python
subscribe_auth_modes: AppsyncChannelNamespaceSubscribeAuthModesList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList">AppsyncChannelNamespaceSubscribeAuthModesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.tags"></a>

```python
tags: AppsyncChannelNamespaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList">AppsyncChannelNamespaceTagsList</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `code_handlers_input`<sup>Optional</sup> <a name="code_handlers_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeHandlersInput"></a>

```python
code_handlers_input: str
```

- *Type:* str

---

##### `code_s3_location_input`<sup>Optional</sup> <a name="code_s3_location_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeS3LocationInput"></a>

```python
code_s3_location_input: str
```

- *Type:* str

---

##### `handler_configs_input`<sup>Optional</sup> <a name="handler_configs_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.handlerConfigsInput"></a>

```python
handler_configs_input: IResolvable | AppsyncChannelNamespaceHandlerConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `publish_auth_modes_input`<sup>Optional</sup> <a name="publish_auth_modes_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.publishAuthModesInput"></a>

```python
publish_auth_modes_input: IResolvable | typing.List[AppsyncChannelNamespacePublishAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>]

---

##### `subscribe_auth_modes_input`<sup>Optional</sup> <a name="subscribe_auth_modes_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.subscribeAuthModesInput"></a>

```python
subscribe_auth_modes_input: IResolvable | typing.List[AppsyncChannelNamespaceSubscribeAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppsyncChannelNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `code_handlers`<sup>Required</sup> <a name="code_handlers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeHandlers"></a>

```python
code_handlers: str
```

- *Type:* str

---

##### `code_s3_location`<sup>Required</sup> <a name="code_s3_location" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeS3Location"></a>

```python
code_s3_location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncChannelNamespaceConfig <a name="AppsyncChannelNamespaceConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_id: str,
  name: str,
  code_handlers: str = None,
  code_s3_location: str = None,
  handler_configs: AppsyncChannelNamespaceHandlerConfigs = None,
  publish_auth_modes: IResolvable | typing.List[AppsyncChannelNamespacePublishAuthModes] = None,
  subscribe_auth_modes: IResolvable | typing.List[AppsyncChannelNamespaceSubscribeAuthModes] = None,
  tags: IResolvable | typing.List[AppsyncChannelNamespaceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.apiId">api_id</a></code> | <code>str</code> | AppSync Api Id that this Channel Namespace belongs to. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.name">name</a></code> | <code>str</code> | Namespace indentifier. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.codeHandlers">code_handlers</a></code> | <code>str</code> | String of APPSYNC_JS code to be used by the handlers. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.codeS3Location">code_s3_location</a></code> | <code>str</code> | The Amazon S3 endpoint where the code is located. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.handlerConfigs">handler_configs</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#handler_configs AppsyncChannelNamespace#handler_configs}. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.publishAuthModes">publish_auth_modes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>]</code> | List of AuthModes supported for Publish operations. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.subscribeAuthModes">subscribe_auth_modes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>]</code> | List of AuthModes supported for Subscribe operations. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this AppSync API. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

AppSync Api Id that this Channel Namespace belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#api_id AppsyncChannelNamespace#api_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Namespace indentifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#name AppsyncChannelNamespace#name}

---

##### `code_handlers`<sup>Optional</sup> <a name="code_handlers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.codeHandlers"></a>

```python
code_handlers: str
```

- *Type:* str

String of APPSYNC_JS code to be used by the handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#code_handlers AppsyncChannelNamespace#code_handlers}

---

##### `code_s3_location`<sup>Optional</sup> <a name="code_s3_location" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.codeS3Location"></a>

```python
code_s3_location: str
```

- *Type:* str

The Amazon S3 endpoint where the code is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#code_s3_location AppsyncChannelNamespace#code_s3_location}

---

##### `handler_configs`<sup>Optional</sup> <a name="handler_configs" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.handlerConfigs"></a>

```python
handler_configs: AppsyncChannelNamespaceHandlerConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#handler_configs AppsyncChannelNamespace#handler_configs}.

---

##### `publish_auth_modes`<sup>Optional</sup> <a name="publish_auth_modes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.publishAuthModes"></a>

```python
publish_auth_modes: IResolvable | typing.List[AppsyncChannelNamespacePublishAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>]

List of AuthModes supported for Publish operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#publish_auth_modes AppsyncChannelNamespace#publish_auth_modes}

---

##### `subscribe_auth_modes`<sup>Optional</sup> <a name="subscribe_auth_modes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.subscribeAuthModes"></a>

```python
subscribe_auth_modes: IResolvable | typing.List[AppsyncChannelNamespaceSubscribeAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>]

List of AuthModes supported for Subscribe operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#subscribe_auth_modes AppsyncChannelNamespace#subscribe_auth_modes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppsyncChannelNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>]

An arbitrary set of tags (key-value pairs) for this AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#tags AppsyncChannelNamespace#tags}

---

### AppsyncChannelNamespaceHandlerConfigs <a name="AppsyncChannelNamespaceHandlerConfigs" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs(
  on_publish: AppsyncChannelNamespaceHandlerConfigsOnPublish = None,
  on_subscribe: AppsyncChannelNamespaceHandlerConfigsOnSubscribe = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.property.onPublish">on_publish</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#on_publish AppsyncChannelNamespace#on_publish}. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.property.onSubscribe">on_subscribe</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#on_subscribe AppsyncChannelNamespace#on_subscribe}. |

---

##### `on_publish`<sup>Optional</sup> <a name="on_publish" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.property.onPublish"></a>

```python
on_publish: AppsyncChannelNamespaceHandlerConfigsOnPublish
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#on_publish AppsyncChannelNamespace#on_publish}.

---

##### `on_subscribe`<sup>Optional</sup> <a name="on_subscribe" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.property.onSubscribe"></a>

```python
on_subscribe: AppsyncChannelNamespaceHandlerConfigsOnSubscribe
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#on_subscribe AppsyncChannelNamespace#on_subscribe}.

---

### AppsyncChannelNamespaceHandlerConfigsOnPublish <a name="AppsyncChannelNamespaceHandlerConfigsOnPublish" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish(
  behavior: str = None,
  integration: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.property.behavior">behavior</a></code> | <code>str</code> | Integration behavior for a handler configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

Integration behavior for a handler configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.property.integration"></a>

```python
integration: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}.

---

### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration(
  data_source_name: str = None,
  lambda_config: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.property.dataSourceName">data_source_name</a></code> | <code>str</code> | Data source to invoke for this integration. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}. |

---

##### `data_source_name`<sup>Optional</sup> <a name="data_source_name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.property.dataSourceName"></a>

```python
data_source_name: str
```

- *Type:* str

Data source to invoke for this integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}

---

##### `lambda_config`<sup>Optional</sup> <a name="lambda_config" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.property.lambdaConfig"></a>

```python
lambda_config: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}.

---

### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig(
  invoke_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.property.invokeType">invoke_type</a></code> | <code>str</code> | Invocation type for direct lambda integrations. |

---

##### `invoke_type`<sup>Optional</sup> <a name="invoke_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.property.invokeType"></a>

```python
invoke_type: str
```

- *Type:* str

Invocation type for direct lambda integrations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}

---

### AppsyncChannelNamespaceHandlerConfigsOnSubscribe <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribe" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe(
  behavior: str = None,
  integration: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.property.behavior">behavior</a></code> | <code>str</code> | Integration behavior for a handler configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

Integration behavior for a handler configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.property.integration"></a>

```python
integration: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}.

---

### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration(
  data_source_name: str = None,
  lambda_config: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.property.dataSourceName">data_source_name</a></code> | <code>str</code> | Data source to invoke for this integration. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}. |

---

##### `data_source_name`<sup>Optional</sup> <a name="data_source_name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.property.dataSourceName"></a>

```python
data_source_name: str
```

- *Type:* str

Data source to invoke for this integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}

---

##### `lambda_config`<sup>Optional</sup> <a name="lambda_config" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.property.lambdaConfig"></a>

```python
lambda_config: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}.

---

### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig(
  invoke_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.property.invokeType">invoke_type</a></code> | <code>str</code> | Invocation type for direct lambda integrations. |

---

##### `invoke_type`<sup>Optional</sup> <a name="invoke_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.property.invokeType"></a>

```python
invoke_type: str
```

- *Type:* str

Invocation type for direct lambda integrations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}

---

### AppsyncChannelNamespacePublishAuthModes <a name="AppsyncChannelNamespacePublishAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes(
  auth_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes.property.authType">auth_type</a></code> | <code>str</code> | Security configuration for your AppSync API. |

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#auth_type AppsyncChannelNamespace#auth_type}

---

### AppsyncChannelNamespaceSubscribeAuthModes <a name="AppsyncChannelNamespaceSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes(
  auth_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes.property.authType">auth_type</a></code> | <code>str</code> | Security configuration for your AppSync API. |

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#auth_type AppsyncChannelNamespace#auth_type}

---

### AppsyncChannelNamespaceTags <a name="AppsyncChannelNamespaceTags" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags.property.key">key</a></code> | <code>str</code> | A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags.property.value">value</a></code> | <code>str</code> | A string containing the value for this tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string used to identify this tag. You can specify a maximum of 128 characters for a tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#key AppsyncChannelNamespace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

A string containing the value for this tag.

You can specify a maximum of 256 characters for a tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#value AppsyncChannelNamespace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resetInvokeType">reset_invoke_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_invoke_type` <a name="reset_invoke_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resetInvokeType"></a>

```python
def reset_invoke_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeTypeInput">invoke_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeType">invoke_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invoke_type_input`<sup>Optional</sup> <a name="invoke_type_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeTypeInput"></a>

```python
invoke_type_input: str
```

- *Type:* str

---

##### `invoke_type`<sup>Required</sup> <a name="invoke_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeType"></a>

```python
invoke_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.putLambdaConfig">put_lambda_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resetDataSourceName">reset_data_source_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resetLambdaConfig">reset_lambda_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda_config` <a name="put_lambda_config" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.putLambdaConfig"></a>

```python
def put_lambda_config(
  invoke_type: str = None
) -> None
```

###### `invoke_type`<sup>Optional</sup> <a name="invoke_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.putLambdaConfig.parameter.invokeType"></a>

- *Type:* str

Invocation type for direct lambda integrations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}

---

##### `reset_data_source_name` <a name="reset_data_source_name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resetDataSourceName"></a>

```python
def reset_data_source_name() -> None
```

##### `reset_lambda_config` <a name="reset_lambda_config" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resetLambdaConfig"></a>

```python
def reset_lambda_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceNameInput">data_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfigInput">lambda_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceName">data_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_config`<sup>Required</sup> <a name="lambda_config" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfig"></a>

```python
lambda_config: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference</a>

---

##### `data_source_name_input`<sup>Optional</sup> <a name="data_source_name_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceNameInput"></a>

```python
data_source_name_input: str
```

- *Type:* str

---

##### `lambda_config_input`<sup>Optional</sup> <a name="lambda_config_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfigInput"></a>

```python
lambda_config_input: IResolvable | AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>

---

##### `data_source_name`<sup>Required</sup> <a name="data_source_name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceName"></a>

```python
data_source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.putIntegration">put_integration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resetBehavior">reset_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resetIntegration">reset_integration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_integration` <a name="put_integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.putIntegration"></a>

```python
def put_integration(
  data_source_name: str = None,
  lambda_config: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig = None
) -> None
```

###### `data_source_name`<sup>Optional</sup> <a name="data_source_name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.putIntegration.parameter.dataSourceName"></a>

- *Type:* str

Data source to invoke for this integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}

---

###### `lambda_config`<sup>Optional</sup> <a name="lambda_config" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.putIntegration.parameter.lambdaConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}.

---

##### `reset_behavior` <a name="reset_behavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resetBehavior"></a>

```python
def reset_behavior() -> None
```

##### `reset_integration` <a name="reset_integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resetIntegration"></a>

```python
def reset_integration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behaviorInput">behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integrationInput">integration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behavior">behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integration"></a>

```python
integration: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference</a>

---

##### `behavior_input`<sup>Optional</sup> <a name="behavior_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behaviorInput"></a>

```python
behavior_input: str
```

- *Type:* str

---

##### `integration_input`<sup>Optional</sup> <a name="integration_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integrationInput"></a>

```python
integration_input: IResolvable | AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncChannelNamespaceHandlerConfigsOnPublish
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resetInvokeType">reset_invoke_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_invoke_type` <a name="reset_invoke_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resetInvokeType"></a>

```python
def reset_invoke_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeTypeInput">invoke_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeType">invoke_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invoke_type_input`<sup>Optional</sup> <a name="invoke_type_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeTypeInput"></a>

```python
invoke_type_input: str
```

- *Type:* str

---

##### `invoke_type`<sup>Required</sup> <a name="invoke_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeType"></a>

```python
invoke_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.putLambdaConfig">put_lambda_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resetDataSourceName">reset_data_source_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resetLambdaConfig">reset_lambda_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda_config` <a name="put_lambda_config" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.putLambdaConfig"></a>

```python
def put_lambda_config(
  invoke_type: str = None
) -> None
```

###### `invoke_type`<sup>Optional</sup> <a name="invoke_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.putLambdaConfig.parameter.invokeType"></a>

- *Type:* str

Invocation type for direct lambda integrations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}

---

##### `reset_data_source_name` <a name="reset_data_source_name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resetDataSourceName"></a>

```python
def reset_data_source_name() -> None
```

##### `reset_lambda_config` <a name="reset_lambda_config" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resetLambdaConfig"></a>

```python
def reset_lambda_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceNameInput">data_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfigInput">lambda_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceName">data_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_config`<sup>Required</sup> <a name="lambda_config" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfig"></a>

```python
lambda_config: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference</a>

---

##### `data_source_name_input`<sup>Optional</sup> <a name="data_source_name_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceNameInput"></a>

```python
data_source_name_input: str
```

- *Type:* str

---

##### `lambda_config_input`<sup>Optional</sup> <a name="lambda_config_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfigInput"></a>

```python
lambda_config_input: IResolvable | AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>

---

##### `data_source_name`<sup>Required</sup> <a name="data_source_name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceName"></a>

```python
data_source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.putIntegration">put_integration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resetBehavior">reset_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resetIntegration">reset_integration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_integration` <a name="put_integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.putIntegration"></a>

```python
def put_integration(
  data_source_name: str = None,
  lambda_config: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig = None
) -> None
```

###### `data_source_name`<sup>Optional</sup> <a name="data_source_name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.putIntegration.parameter.dataSourceName"></a>

- *Type:* str

Data source to invoke for this integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}

---

###### `lambda_config`<sup>Optional</sup> <a name="lambda_config" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.putIntegration.parameter.lambdaConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}.

---

##### `reset_behavior` <a name="reset_behavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resetBehavior"></a>

```python
def reset_behavior() -> None
```

##### `reset_integration` <a name="reset_integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resetIntegration"></a>

```python
def reset_integration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behaviorInput">behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integrationInput">integration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behavior">behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integration"></a>

```python
integration: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference</a>

---

##### `behavior_input`<sup>Optional</sup> <a name="behavior_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behaviorInput"></a>

```python
behavior_input: str
```

- *Type:* str

---

##### `integration_input`<sup>Optional</sup> <a name="integration_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integrationInput"></a>

```python
integration_input: IResolvable | AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncChannelNamespaceHandlerConfigsOnSubscribe
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>

---


### AppsyncChannelNamespaceHandlerConfigsOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnPublish">put_on_publish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnSubscribe">put_on_subscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resetOnPublish">reset_on_publish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resetOnSubscribe">reset_on_subscribe</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_publish` <a name="put_on_publish" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnPublish"></a>

```python
def put_on_publish(
  behavior: str = None,
  integration: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration = None
) -> None
```

###### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnPublish.parameter.behavior"></a>

- *Type:* str

Integration behavior for a handler configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}

---

###### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnPublish.parameter.integration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}.

---

##### `put_on_subscribe` <a name="put_on_subscribe" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnSubscribe"></a>

```python
def put_on_subscribe(
  behavior: str = None,
  integration: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration = None
) -> None
```

###### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnSubscribe.parameter.behavior"></a>

- *Type:* str

Integration behavior for a handler configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}

---

###### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnSubscribe.parameter.integration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}.

---

##### `reset_on_publish` <a name="reset_on_publish" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resetOnPublish"></a>

```python
def reset_on_publish() -> None
```

##### `reset_on_subscribe` <a name="reset_on_subscribe" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resetOnSubscribe"></a>

```python
def reset_on_subscribe() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublish">on_publish</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference">AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribe">on_subscribe</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference">AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublishInput">on_publish_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribeInput">on_subscribe_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_publish`<sup>Required</sup> <a name="on_publish" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublish"></a>

```python
on_publish: AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference">AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference</a>

---

##### `on_subscribe`<sup>Required</sup> <a name="on_subscribe" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribe"></a>

```python
on_subscribe: AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference">AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference</a>

---

##### `on_publish_input`<sup>Optional</sup> <a name="on_publish_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublishInput"></a>

```python
on_publish_input: IResolvable | AppsyncChannelNamespaceHandlerConfigsOnPublish
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>

---

##### `on_subscribe_input`<sup>Optional</sup> <a name="on_subscribe_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribeInput"></a>

```python
on_subscribe_input: IResolvable | AppsyncChannelNamespaceHandlerConfigsOnSubscribe
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncChannelNamespaceHandlerConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>

---


### AppsyncChannelNamespacePublishAuthModesList <a name="AppsyncChannelNamespacePublishAuthModesList" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncChannelNamespacePublishAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppsyncChannelNamespacePublishAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>]

---


### AppsyncChannelNamespacePublishAuthModesOutputReference <a name="AppsyncChannelNamespacePublishAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncChannelNamespacePublishAuthModes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>

---


### AppsyncChannelNamespaceSubscribeAuthModesList <a name="AppsyncChannelNamespaceSubscribeAuthModesList" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncChannelNamespaceSubscribeAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppsyncChannelNamespaceSubscribeAuthModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>]

---


### AppsyncChannelNamespaceSubscribeAuthModesOutputReference <a name="AppsyncChannelNamespaceSubscribeAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncChannelNamespaceSubscribeAuthModes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>

---


### AppsyncChannelNamespaceTagsList <a name="AppsyncChannelNamespaceTagsList" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncChannelNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppsyncChannelNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>]

---


### AppsyncChannelNamespaceTagsOutputReference <a name="AppsyncChannelNamespaceTagsOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_channel_namespace

appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncChannelNamespaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>

---



