# `codepipelineWebhook` Submodule <a name="`codepipelineWebhook` Submodule" id="@cdktn/provider-awscc.codepipelineWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodepipelineWebhook <a name="CodepipelineWebhook" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook awscc_codepipeline_webhook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhook(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication: str,
  authentication_configuration: CodepipelineWebhookAuthenticationConfiguration,
  filters: IResolvable | typing.List[CodepipelineWebhookFilters],
  target_action: str,
  target_pipeline: str,
  name: str = None,
  register_with_third_party: bool | IResolvable = None,
  tags: IResolvable | typing.List[CodepipelineWebhookTags] = None,
  target_pipeline_version: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.authentication">authentication</a></code> | <code>str</code> | Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | Properties that configure the authentication applied to incoming webhook trigger requests. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>]</code> | A list of rules applied to the body/payload sent in the POST request to a webhook URL. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetAction">target_action</a></code> | <code>str</code> | The name of the action in a pipeline you want to connect to the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetPipeline">target_pipeline</a></code> | <code>str</code> | The name of the pipeline you want to connect to the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.registerWithThirdParty">register_with_third_party</a></code> | <code>bool \| cdktn.IResolvable</code> | Configures a connection between the webhook that was created and the external tool with events to be detected. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetPipelineVersion">target_pipeline_version</a></code> | <code>typing.Union[int, float]</code> | The version number of the pipeline to be connected to the trigger request. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.authentication"></a>

- *Type:* str

Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#authentication CodepipelineWebhook#authentication}

---

##### `authentication_configuration`<sup>Required</sup> <a name="authentication_configuration" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.authenticationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

Properties that configure the authentication applied to incoming webhook trigger requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#authentication_configuration CodepipelineWebhook#authentication_configuration}

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.filters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>]

A list of rules applied to the body/payload sent in the POST request to a webhook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#filters CodepipelineWebhook#filters}

---

##### `target_action`<sup>Required</sup> <a name="target_action" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetAction"></a>

- *Type:* str

The name of the action in a pipeline you want to connect to the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#target_action CodepipelineWebhook#target_action}

---

##### `target_pipeline`<sup>Required</sup> <a name="target_pipeline" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetPipeline"></a>

- *Type:* str

The name of the pipeline you want to connect to the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.name"></a>

- *Type:* str

The name of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#name CodepipelineWebhook#name}

---

##### `register_with_third_party`<sup>Optional</sup> <a name="register_with_third_party" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.registerWithThirdParty"></a>

- *Type:* bool | cdktn.IResolvable

Configures a connection between the webhook that was created and the external tool with events to be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#register_with_third_party CodepipelineWebhook#register_with_third_party}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#tags CodepipelineWebhook#tags}

---

##### `target_pipeline_version`<sup>Optional</sup> <a name="target_pipeline_version" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetPipelineVersion"></a>

- *Type:* typing.Union[int, float]

The version number of the pipeline to be connected to the trigger request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#target_pipeline_version CodepipelineWebhook#target_pipeline_version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration">put_authentication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetRegisterWithThirdParty">reset_register_with_third_party</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetTargetPipelineVersion">reset_target_pipeline_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authentication_configuration` <a name="put_authentication_configuration" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration"></a>

```python
def put_authentication_configuration(
  allowed_ip_range: str = None,
  secret_token: str = None
) -> None
```

###### `allowed_ip_range`<sup>Optional</sup> <a name="allowed_ip_range" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration.parameter.allowedIpRange"></a>

- *Type:* str

The property used to configure acceptance of webhooks in an IP address range.

For IP, only the AllowedIPRange property must be set. This property must be set to a valid CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#allowed_ip_range CodepipelineWebhook#allowed_ip_range}

---

###### `secret_token`<sup>Optional</sup> <a name="secret_token" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration.parameter.secretToken"></a>

- *Type:* str

The property used to configure GitHub authentication. For GITHUB_HMAC, only the SecretToken property must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#secret_token CodepipelineWebhook#secret_token}

---

##### `put_filters` <a name="put_filters" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putFilters"></a>

```python
def put_filters(
  value: IResolvable | typing.List[CodepipelineWebhookFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CodepipelineWebhookTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>]

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_register_with_third_party` <a name="reset_register_with_third_party" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetRegisterWithThirdParty"></a>

```python
def reset_register_with_third_party() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_pipeline_version` <a name="reset_target_pipeline_version" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.resetTargetPipelineVersion"></a>

```python
def reset_target_pipeline_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CodepipelineWebhook resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isConstruct"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformElement"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformResource"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CodepipelineWebhook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodepipelineWebhook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodepipelineWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodepipelineWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference">CodepipelineWebhookAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList">CodepipelineWebhookFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList">CodepipelineWebhookTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.webhookId">webhook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfigurationInput">authentication_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationInput">authentication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.filtersInput">filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.registerWithThirdPartyInput">register_with_third_party_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetActionInput">target_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineInput">target_pipeline_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineVersionInput">target_pipeline_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authentication">authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.registerWithThirdParty">register_with_third_party</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetAction">target_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipeline">target_pipeline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineVersion">target_pipeline_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication_configuration`<sup>Required</sup> <a name="authentication_configuration" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfiguration"></a>

```python
authentication_configuration: CodepipelineWebhookAuthenticationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference">CodepipelineWebhookAuthenticationConfigurationOutputReference</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.filters"></a>

```python
filters: CodepipelineWebhookFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList">CodepipelineWebhookFiltersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tags"></a>

```python
tags: CodepipelineWebhookTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList">CodepipelineWebhookTagsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `webhook_id`<sup>Required</sup> <a name="webhook_id" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.webhookId"></a>

```python
webhook_id: str
```

- *Type:* str

---

##### `authentication_configuration_input`<sup>Optional</sup> <a name="authentication_configuration_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfigurationInput"></a>

```python
authentication_configuration_input: IResolvable | CodepipelineWebhookAuthenticationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authenticationInput"></a>

```python
authentication_input: str
```

- *Type:* str

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.filtersInput"></a>

```python
filters_input: IResolvable | typing.List[CodepipelineWebhookFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `register_with_third_party_input`<sup>Optional</sup> <a name="register_with_third_party_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.registerWithThirdPartyInput"></a>

```python
register_with_third_party_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CodepipelineWebhookTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>]

---

##### `target_action_input`<sup>Optional</sup> <a name="target_action_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetActionInput"></a>

```python
target_action_input: str
```

- *Type:* str

---

##### `target_pipeline_input`<sup>Optional</sup> <a name="target_pipeline_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineInput"></a>

```python
target_pipeline_input: str
```

- *Type:* str

---

##### `target_pipeline_version_input`<sup>Optional</sup> <a name="target_pipeline_version_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineVersionInput"></a>

```python
target_pipeline_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.authentication"></a>

```python
authentication: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `register_with_third_party`<sup>Required</sup> <a name="register_with_third_party" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.registerWithThirdParty"></a>

```python
register_with_third_party: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `target_action`<sup>Required</sup> <a name="target_action" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetAction"></a>

```python
target_action: str
```

- *Type:* str

---

##### `target_pipeline`<sup>Required</sup> <a name="target_pipeline" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipeline"></a>

```python
target_pipeline: str
```

- *Type:* str

---

##### `target_pipeline_version`<sup>Required</sup> <a name="target_pipeline_version" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineVersion"></a>

```python
target_pipeline_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineWebhookAuthenticationConfiguration <a name="CodepipelineWebhookAuthenticationConfiguration" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration(
  allowed_ip_range: str = None,
  secret_token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.allowedIpRange">allowed_ip_range</a></code> | <code>str</code> | The property used to configure acceptance of webhooks in an IP address range. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.secretToken">secret_token</a></code> | <code>str</code> | The property used to configure GitHub authentication. For GITHUB_HMAC, only the SecretToken property must be set. |

---

##### `allowed_ip_range`<sup>Optional</sup> <a name="allowed_ip_range" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.allowedIpRange"></a>

```python
allowed_ip_range: str
```

- *Type:* str

The property used to configure acceptance of webhooks in an IP address range.

For IP, only the AllowedIPRange property must be set. This property must be set to a valid CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#allowed_ip_range CodepipelineWebhook#allowed_ip_range}

---

##### `secret_token`<sup>Optional</sup> <a name="secret_token" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.secretToken"></a>

```python
secret_token: str
```

- *Type:* str

The property used to configure GitHub authentication. For GITHUB_HMAC, only the SecretToken property must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#secret_token CodepipelineWebhook#secret_token}

---

### CodepipelineWebhookConfig <a name="CodepipelineWebhookConfig" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication: str,
  authentication_configuration: CodepipelineWebhookAuthenticationConfiguration,
  filters: IResolvable | typing.List[CodepipelineWebhookFilters],
  target_action: str,
  target_pipeline: str,
  name: str = None,
  register_with_third_party: bool | IResolvable = None,
  tags: IResolvable | typing.List[CodepipelineWebhookTags] = None,
  target_pipeline_version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.authentication">authentication</a></code> | <code>str</code> | Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | Properties that configure the authentication applied to incoming webhook trigger requests. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>]</code> | A list of rules applied to the body/payload sent in the POST request to a webhook URL. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetAction">target_action</a></code> | <code>str</code> | The name of the action in a pipeline you want to connect to the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipeline">target_pipeline</a></code> | <code>str</code> | The name of the pipeline you want to connect to the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.name">name</a></code> | <code>str</code> | The name of the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.registerWithThirdParty">register_with_third_party</a></code> | <code>bool \| cdktn.IResolvable</code> | Configures a connection between the webhook that was created and the external tool with events to be detected. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipelineVersion">target_pipeline_version</a></code> | <code>typing.Union[int, float]</code> | The version number of the pipeline to be connected to the trigger request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.authentication"></a>

```python
authentication: str
```

- *Type:* str

Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#authentication CodepipelineWebhook#authentication}

---

##### `authentication_configuration`<sup>Required</sup> <a name="authentication_configuration" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.authenticationConfiguration"></a>

```python
authentication_configuration: CodepipelineWebhookAuthenticationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

Properties that configure the authentication applied to incoming webhook trigger requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#authentication_configuration CodepipelineWebhook#authentication_configuration}

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.filters"></a>

```python
filters: IResolvable | typing.List[CodepipelineWebhookFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>]

A list of rules applied to the body/payload sent in the POST request to a webhook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#filters CodepipelineWebhook#filters}

---

##### `target_action`<sup>Required</sup> <a name="target_action" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetAction"></a>

```python
target_action: str
```

- *Type:* str

The name of the action in a pipeline you want to connect to the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#target_action CodepipelineWebhook#target_action}

---

##### `target_pipeline`<sup>Required</sup> <a name="target_pipeline" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipeline"></a>

```python
target_pipeline: str
```

- *Type:* str

The name of the pipeline you want to connect to the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#name CodepipelineWebhook#name}

---

##### `register_with_third_party`<sup>Optional</sup> <a name="register_with_third_party" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.registerWithThirdParty"></a>

```python
register_with_third_party: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Configures a connection between the webhook that was created and the external tool with events to be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#register_with_third_party CodepipelineWebhook#register_with_third_party}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CodepipelineWebhookTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#tags CodepipelineWebhook#tags}

---

##### `target_pipeline_version`<sup>Optional</sup> <a name="target_pipeline_version" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipelineVersion"></a>

```python
target_pipeline_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The version number of the pipeline to be connected to the trigger request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#target_pipeline_version CodepipelineWebhook#target_pipeline_version}

---

### CodepipelineWebhookFilters <a name="CodepipelineWebhookFilters" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookFilters(
  json_path: str,
  match_equals: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.property.jsonPath">json_path</a></code> | <code>str</code> | A JsonPath expression that is applied to the body/payload of the webhook. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.property.matchEquals">match_equals</a></code> | <code>str</code> | The value selected by the JsonPath expression must match what is supplied in the MatchEquals field. |

---

##### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

A JsonPath expression that is applied to the body/payload of the webhook.

The value selected by the JsonPath expression must match the value specified in the MatchEquals field. Otherwise, the request is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#json_path CodepipelineWebhook#json_path}

---

##### `match_equals`<sup>Optional</sup> <a name="match_equals" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters.property.matchEquals"></a>

```python
match_equals: str
```

- *Type:* str

The value selected by the JsonPath expression must match what is supplied in the MatchEquals field.

Otherwise, the request is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#match_equals CodepipelineWebhook#match_equals}

---

### CodepipelineWebhookTags <a name="CodepipelineWebhookTags" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#key CodepipelineWebhook#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codepipeline_webhook#value CodepipelineWebhook#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineWebhookAuthenticationConfigurationOutputReference <a name="CodepipelineWebhookAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetAllowedIpRange">reset_allowed_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetSecretToken">reset_secret_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_ip_range` <a name="reset_allowed_ip_range" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetAllowedIpRange"></a>

```python
def reset_allowed_ip_range() -> None
```

##### `reset_secret_token` <a name="reset_secret_token" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetSecretToken"></a>

```python
def reset_secret_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRangeInput">allowed_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretTokenInput">secret_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRange">allowed_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretToken">secret_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_ip_range_input`<sup>Optional</sup> <a name="allowed_ip_range_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRangeInput"></a>

```python
allowed_ip_range_input: str
```

- *Type:* str

---

##### `secret_token_input`<sup>Optional</sup> <a name="secret_token_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretTokenInput"></a>

```python
secret_token_input: str
```

- *Type:* str

---

##### `allowed_ip_range`<sup>Required</sup> <a name="allowed_ip_range" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRange"></a>

```python
allowed_ip_range: str
```

- *Type:* str

---

##### `secret_token`<sup>Required</sup> <a name="secret_token" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretToken"></a>

```python
secret_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodepipelineWebhookAuthenticationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---


### CodepipelineWebhookFiltersList <a name="CodepipelineWebhookFiltersList" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineWebhookFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodepipelineWebhookFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>]

---


### CodepipelineWebhookFiltersOutputReference <a name="CodepipelineWebhookFiltersOutputReference" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resetMatchEquals">reset_match_equals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_match_equals` <a name="reset_match_equals" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.resetMatchEquals"></a>

```python
def reset_match_equals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.jsonPathInput">json_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.matchEqualsInput">match_equals_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.jsonPath">json_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.matchEquals">match_equals</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_path_input`<sup>Optional</sup> <a name="json_path_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.jsonPathInput"></a>

```python
json_path_input: str
```

- *Type:* str

---

##### `match_equals_input`<sup>Optional</sup> <a name="match_equals_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.matchEqualsInput"></a>

```python
match_equals_input: str
```

- *Type:* str

---

##### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

---

##### `match_equals`<sup>Required</sup> <a name="match_equals" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.matchEquals"></a>

```python
match_equals: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodepipelineWebhookFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookFilters">CodepipelineWebhookFilters</a>

---


### CodepipelineWebhookTagsList <a name="CodepipelineWebhookTagsList" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineWebhookTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodepipelineWebhookTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>]

---


### CodepipelineWebhookTagsOutputReference <a name="CodepipelineWebhookTagsOutputReference" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodepipelineWebhookTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineWebhook.CodepipelineWebhookTags">CodepipelineWebhookTags</a>

---



