# `cloudformationLambdaHook` Submodule <a name="`cloudformationLambdaHook` Submodule" id="@cdktn/provider-awscc.cloudformationLambdaHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationLambdaHook <a name="CloudformationLambdaHook" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook awscc_cloudformation_lambda_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHook(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alias: str,
  execution_role: str,
  failure_mode: str,
  lambda_function: str,
  target_operations: typing.List[str],
  auto_update: bool | IResolvable = None,
  hook_status: str = None,
  logging_config: CloudformationLambdaHookLoggingConfig = None,
  stack_filters: CloudformationLambdaHookStackFilters = None,
  target_filters: CloudformationLambdaHookTargetFilters = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.alias">alias</a></code> | <code>str</code> | The typename alias for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.executionRole">execution_role</a></code> | <code>str</code> | The execution role ARN assumed by Hooks to invoke Lambda. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.failureMode">failure_mode</a></code> | <code>str</code> | Attribute to specify CloudFormation behavior on hook failure. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.lambdaFunction">lambda_function</a></code> | <code>str</code> | Amazon Resource Name (ARN), Partial ARN, name, version, or alias of the Lambda function to invoke with this hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.targetOperations">target_operations</a></code> | <code>typing.List[str]</code> | Which operations should this Hook run against? Resource changes, stacks or change sets. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.autoUpdate">auto_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to automatically update the extension in this account and Region when a new minor version is published by the extension publisher. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.hookStatus">hook_status</a></code> | <code>str</code> | Attribute to specify which stacks this hook applies to or should get invoked for. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a></code> | Contains logging configuration information for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.stackFilters">stack_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a></code> | Filters to allow hooks to target specific stack attributes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.targetFilters">target_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a></code> | Attribute to specify which targets should invoke the hook. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.alias"></a>

- *Type:* str

The typename alias for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#alias CloudformationLambdaHook#alias}

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.executionRole"></a>

- *Type:* str

The execution role ARN assumed by Hooks to invoke Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#execution_role CloudformationLambdaHook#execution_role}

---

##### `failure_mode`<sup>Required</sup> <a name="failure_mode" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.failureMode"></a>

- *Type:* str

Attribute to specify CloudFormation behavior on hook failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#failure_mode CloudformationLambdaHook#failure_mode}

---

##### `lambda_function`<sup>Required</sup> <a name="lambda_function" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.lambdaFunction"></a>

- *Type:* str

Amazon Resource Name (ARN), Partial ARN, name, version, or alias of the Lambda function to invoke with this hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#lambda_function CloudformationLambdaHook#lambda_function}

---

##### `target_operations`<sup>Required</sup> <a name="target_operations" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.targetOperations"></a>

- *Type:* typing.List[str]

Which operations should this Hook run against? Resource changes, stacks or change sets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#target_operations CloudformationLambdaHook#target_operations}

---

##### `auto_update`<sup>Optional</sup> <a name="auto_update" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.autoUpdate"></a>

- *Type:* bool | cdktn.IResolvable

Whether to automatically update the extension in this account and Region when a new minor version is published by the extension publisher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#auto_update CloudformationLambdaHook#auto_update}

---

##### `hook_status`<sup>Optional</sup> <a name="hook_status" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.hookStatus"></a>

- *Type:* str

Attribute to specify which stacks this hook applies to or should get invoked for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#hook_status CloudformationLambdaHook#hook_status}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a>

Contains logging configuration information for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#logging_config CloudformationLambdaHook#logging_config}

---

##### `stack_filters`<sup>Optional</sup> <a name="stack_filters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.stackFilters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a>

Filters to allow hooks to target specific stack attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#stack_filters CloudformationLambdaHook#stack_filters}

---

##### `target_filters`<sup>Optional</sup> <a name="target_filters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.targetFilters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a>

Attribute to specify which targets should invoke the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#target_filters CloudformationLambdaHook#target_filters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putStackFilters">put_stack_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putTargetFilters">put_target_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetAutoUpdate">reset_auto_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetHookStatus">reset_hook_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetStackFilters">reset_stack_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetTargetFilters">reset_target_filters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putLoggingConfig"></a>

```python
def put_logging_config(
  log_group_name: str = None,
  log_role_arn: str = None
) -> None
```

###### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putLoggingConfig.parameter.logGroupName"></a>

- *Type:* str

The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#log_group_name CloudformationLambdaHook#log_group_name}

---

###### `log_role_arn`<sup>Optional</sup> <a name="log_role_arn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putLoggingConfig.parameter.logRoleArn"></a>

- *Type:* str

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#log_role_arn CloudformationLambdaHook#log_role_arn}

---

##### `put_stack_filters` <a name="put_stack_filters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putStackFilters"></a>

```python
def put_stack_filters(
  filtering_criteria: str = None,
  stack_names: CloudformationLambdaHookStackFiltersStackNames = None,
  stack_roles: CloudformationLambdaHookStackFiltersStackRoles = None
) -> None
```

###### `filtering_criteria`<sup>Optional</sup> <a name="filtering_criteria" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putStackFilters.parameter.filteringCriteria"></a>

- *Type:* str

Attribute to specify the filtering behavior.

ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#filtering_criteria CloudformationLambdaHook#filtering_criteria}

---

###### `stack_names`<sup>Optional</sup> <a name="stack_names" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putStackFilters.parameter.stackNames"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a>

List of stack names as filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#stack_names CloudformationLambdaHook#stack_names}

---

###### `stack_roles`<sup>Optional</sup> <a name="stack_roles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putStackFilters.parameter.stackRoles"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a>

List of stack roles that are performing the stack operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#stack_roles CloudformationLambdaHook#stack_roles}

---

##### `put_target_filters` <a name="put_target_filters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putTargetFilters"></a>

```python
def put_target_filters(
  actions: typing.List[str] = None,
  invocation_points: typing.List[str] = None,
  target_names: typing.List[str] = None,
  targets: IResolvable | typing.List[CloudformationLambdaHookTargetFiltersTargets] = None
) -> None
```

###### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putTargetFilters.parameter.actions"></a>

- *Type:* typing.List[str]

List of actions that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#actions CloudformationLambdaHook#actions}

---

###### `invocation_points`<sup>Optional</sup> <a name="invocation_points" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putTargetFilters.parameter.invocationPoints"></a>

- *Type:* typing.List[str]

List of invocation points that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#invocation_points CloudformationLambdaHook#invocation_points}

---

###### `target_names`<sup>Optional</sup> <a name="target_names" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putTargetFilters.parameter.targetNames"></a>

- *Type:* typing.List[str]

List of type names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#target_names CloudformationLambdaHook#target_names}

---

###### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putTargetFilters.parameter.targets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>]

List of hook targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#targets CloudformationLambdaHook#targets}

---

##### `reset_auto_update` <a name="reset_auto_update" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetAutoUpdate"></a>

```python
def reset_auto_update() -> None
```

##### `reset_hook_status` <a name="reset_hook_status" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetHookStatus"></a>

```python
def reset_hook_status() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_stack_filters` <a name="reset_stack_filters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetStackFilters"></a>

```python
def reset_stack_filters() -> None
```

##### `reset_target_filters` <a name="reset_target_filters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetTargetFilters"></a>

```python
def reset_target_filters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudformationLambdaHook resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudformationLambdaHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudformationLambdaHook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudformationLambdaHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationLambdaHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookArn">hook_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference">CloudformationLambdaHookLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.stackFilters">stack_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference">CloudformationLambdaHookStackFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetFilters">target_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference">CloudformationLambdaHookTargetFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.autoUpdateInput">auto_update_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.failureModeInput">failure_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookStatusInput">hook_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lambdaFunctionInput">lambda_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.loggingConfigInput">logging_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.stackFiltersInput">stack_filters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetFiltersInput">target_filters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetOperationsInput">target_operations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.autoUpdate">auto_update</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.failureMode">failure_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookStatus">hook_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lambdaFunction">lambda_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetOperations">target_operations</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hook_arn`<sup>Required</sup> <a name="hook_arn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookArn"></a>

```python
hook_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.loggingConfig"></a>

```python
logging_config: CloudformationLambdaHookLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference">CloudformationLambdaHookLoggingConfigOutputReference</a>

---

##### `stack_filters`<sup>Required</sup> <a name="stack_filters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.stackFilters"></a>

```python
stack_filters: CloudformationLambdaHookStackFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference">CloudformationLambdaHookStackFiltersOutputReference</a>

---

##### `target_filters`<sup>Required</sup> <a name="target_filters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetFilters"></a>

```python
target_filters: CloudformationLambdaHookTargetFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference">CloudformationLambdaHookTargetFiltersOutputReference</a>

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `auto_update_input`<sup>Optional</sup> <a name="auto_update_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.autoUpdateInput"></a>

```python
auto_update_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `failure_mode_input`<sup>Optional</sup> <a name="failure_mode_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.failureModeInput"></a>

```python
failure_mode_input: str
```

- *Type:* str

---

##### `hook_status_input`<sup>Optional</sup> <a name="hook_status_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookStatusInput"></a>

```python
hook_status_input: str
```

- *Type:* str

---

##### `lambda_function_input`<sup>Optional</sup> <a name="lambda_function_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lambdaFunctionInput"></a>

```python
lambda_function_input: str
```

- *Type:* str

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.loggingConfigInput"></a>

```python
logging_config_input: IResolvable | CloudformationLambdaHookLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a>

---

##### `stack_filters_input`<sup>Optional</sup> <a name="stack_filters_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.stackFiltersInput"></a>

```python
stack_filters_input: IResolvable | CloudformationLambdaHookStackFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a>

---

##### `target_filters_input`<sup>Optional</sup> <a name="target_filters_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetFiltersInput"></a>

```python
target_filters_input: IResolvable | CloudformationLambdaHookTargetFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a>

---

##### `target_operations_input`<sup>Optional</sup> <a name="target_operations_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetOperationsInput"></a>

```python
target_operations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `auto_update`<sup>Required</sup> <a name="auto_update" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.autoUpdate"></a>

```python
auto_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `failure_mode`<sup>Required</sup> <a name="failure_mode" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.failureMode"></a>

```python
failure_mode: str
```

- *Type:* str

---

##### `hook_status`<sup>Required</sup> <a name="hook_status" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookStatus"></a>

```python
hook_status: str
```

- *Type:* str

---

##### `lambda_function`<sup>Required</sup> <a name="lambda_function" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lambdaFunction"></a>

```python
lambda_function: str
```

- *Type:* str

---

##### `target_operations`<sup>Required</sup> <a name="target_operations" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetOperations"></a>

```python
target_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationLambdaHookConfig <a name="CloudformationLambdaHookConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alias: str,
  execution_role: str,
  failure_mode: str,
  lambda_function: str,
  target_operations: typing.List[str],
  auto_update: bool | IResolvable = None,
  hook_status: str = None,
  logging_config: CloudformationLambdaHookLoggingConfig = None,
  stack_filters: CloudformationLambdaHookStackFilters = None,
  target_filters: CloudformationLambdaHookTargetFilters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.alias">alias</a></code> | <code>str</code> | The typename alias for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.executionRole">execution_role</a></code> | <code>str</code> | The execution role ARN assumed by Hooks to invoke Lambda. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.failureMode">failure_mode</a></code> | <code>str</code> | Attribute to specify CloudFormation behavior on hook failure. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.lambdaFunction">lambda_function</a></code> | <code>str</code> | Amazon Resource Name (ARN), Partial ARN, name, version, or alias of the Lambda function to invoke with this hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.targetOperations">target_operations</a></code> | <code>typing.List[str]</code> | Which operations should this Hook run against? Resource changes, stacks or change sets. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.autoUpdate">auto_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to automatically update the extension in this account and Region when a new minor version is published by the extension publisher. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.hookStatus">hook_status</a></code> | <code>str</code> | Attribute to specify which stacks this hook applies to or should get invoked for. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a></code> | Contains logging configuration information for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.stackFilters">stack_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a></code> | Filters to allow hooks to target specific stack attributes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.targetFilters">target_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a></code> | Attribute to specify which targets should invoke the hook. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

The typename alias for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#alias CloudformationLambdaHook#alias}

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

The execution role ARN assumed by Hooks to invoke Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#execution_role CloudformationLambdaHook#execution_role}

---

##### `failure_mode`<sup>Required</sup> <a name="failure_mode" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.failureMode"></a>

```python
failure_mode: str
```

- *Type:* str

Attribute to specify CloudFormation behavior on hook failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#failure_mode CloudformationLambdaHook#failure_mode}

---

##### `lambda_function`<sup>Required</sup> <a name="lambda_function" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.lambdaFunction"></a>

```python
lambda_function: str
```

- *Type:* str

Amazon Resource Name (ARN), Partial ARN, name, version, or alias of the Lambda function to invoke with this hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#lambda_function CloudformationLambdaHook#lambda_function}

---

##### `target_operations`<sup>Required</sup> <a name="target_operations" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.targetOperations"></a>

```python
target_operations: typing.List[str]
```

- *Type:* typing.List[str]

Which operations should this Hook run against? Resource changes, stacks or change sets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#target_operations CloudformationLambdaHook#target_operations}

---

##### `auto_update`<sup>Optional</sup> <a name="auto_update" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.autoUpdate"></a>

```python
auto_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to automatically update the extension in this account and Region when a new minor version is published by the extension publisher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#auto_update CloudformationLambdaHook#auto_update}

---

##### `hook_status`<sup>Optional</sup> <a name="hook_status" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.hookStatus"></a>

```python
hook_status: str
```

- *Type:* str

Attribute to specify which stacks this hook applies to or should get invoked for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#hook_status CloudformationLambdaHook#hook_status}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.loggingConfig"></a>

```python
logging_config: CloudformationLambdaHookLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a>

Contains logging configuration information for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#logging_config CloudformationLambdaHook#logging_config}

---

##### `stack_filters`<sup>Optional</sup> <a name="stack_filters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.stackFilters"></a>

```python
stack_filters: CloudformationLambdaHookStackFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a>

Filters to allow hooks to target specific stack attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#stack_filters CloudformationLambdaHook#stack_filters}

---

##### `target_filters`<sup>Optional</sup> <a name="target_filters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.targetFilters"></a>

```python
target_filters: CloudformationLambdaHookTargetFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a>

Attribute to specify which targets should invoke the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#target_filters CloudformationLambdaHook#target_filters}

---

### CloudformationLambdaHookLoggingConfig <a name="CloudformationLambdaHookLoggingConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig(
  log_group_name: str = None,
  log_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.property.logGroupName">log_group_name</a></code> | <code>str</code> | The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.property.logRoleArn">log_role_arn</a></code> | <code>str</code> | The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch Logs. |

---

##### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#log_group_name CloudformationLambdaHook#log_group_name}

---

##### `log_role_arn`<sup>Optional</sup> <a name="log_role_arn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.property.logRoleArn"></a>

```python
log_role_arn: str
```

- *Type:* str

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#log_role_arn CloudformationLambdaHook#log_role_arn}

---

### CloudformationLambdaHookStackFilters <a name="CloudformationLambdaHookStackFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookStackFilters(
  filtering_criteria: str = None,
  stack_names: CloudformationLambdaHookStackFiltersStackNames = None,
  stack_roles: CloudformationLambdaHookStackFiltersStackRoles = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.filteringCriteria">filtering_criteria</a></code> | <code>str</code> | Attribute to specify the filtering behavior. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.stackNames">stack_names</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a></code> | List of stack names as filters. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.stackRoles">stack_roles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a></code> | List of stack roles that are performing the stack operations. |

---

##### `filtering_criteria`<sup>Optional</sup> <a name="filtering_criteria" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.filteringCriteria"></a>

```python
filtering_criteria: str
```

- *Type:* str

Attribute to specify the filtering behavior.

ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#filtering_criteria CloudformationLambdaHook#filtering_criteria}

---

##### `stack_names`<sup>Optional</sup> <a name="stack_names" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.stackNames"></a>

```python
stack_names: CloudformationLambdaHookStackFiltersStackNames
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a>

List of stack names as filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#stack_names CloudformationLambdaHook#stack_names}

---

##### `stack_roles`<sup>Optional</sup> <a name="stack_roles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.stackRoles"></a>

```python
stack_roles: CloudformationLambdaHookStackFiltersStackRoles
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a>

List of stack roles that are performing the stack operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#stack_roles CloudformationLambdaHook#stack_roles}

---

### CloudformationLambdaHookStackFiltersStackNames <a name="CloudformationLambdaHookStackFiltersStackNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | List of stack names that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.property.include">include</a></code> | <code>typing.List[str]</code> | List of stack names that the hook is going to target. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

List of stack names that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#exclude CloudformationLambdaHook#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

List of stack names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#include CloudformationLambdaHook#include}

---

### CloudformationLambdaHookStackFiltersStackRoles <a name="CloudformationLambdaHookStackFiltersStackRoles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | List of stack roles that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.property.include">include</a></code> | <code>typing.List[str]</code> | List of stack roles that the hook is going to target. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

List of stack roles that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#exclude CloudformationLambdaHook#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

List of stack roles that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#include CloudformationLambdaHook#include}

---

### CloudformationLambdaHookTargetFilters <a name="CloudformationLambdaHookTargetFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookTargetFilters(
  actions: typing.List[str] = None,
  invocation_points: typing.List[str] = None,
  target_names: typing.List[str] = None,
  targets: IResolvable | typing.List[CloudformationLambdaHookTargetFiltersTargets] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.actions">actions</a></code> | <code>typing.List[str]</code> | List of actions that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.invocationPoints">invocation_points</a></code> | <code>typing.List[str]</code> | List of invocation points that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.targetNames">target_names</a></code> | <code>typing.List[str]</code> | List of type names that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>]</code> | List of hook targets. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

List of actions that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#actions CloudformationLambdaHook#actions}

---

##### `invocation_points`<sup>Optional</sup> <a name="invocation_points" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.invocationPoints"></a>

```python
invocation_points: typing.List[str]
```

- *Type:* typing.List[str]

List of invocation points that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#invocation_points CloudformationLambdaHook#invocation_points}

---

##### `target_names`<sup>Optional</sup> <a name="target_names" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.targetNames"></a>

```python
target_names: typing.List[str]
```

- *Type:* typing.List[str]

List of type names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#target_names CloudformationLambdaHook#target_names}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.targets"></a>

```python
targets: IResolvable | typing.List[CloudformationLambdaHookTargetFiltersTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>]

List of hook targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#targets CloudformationLambdaHook#targets}

---

### CloudformationLambdaHookTargetFiltersTargets <a name="CloudformationLambdaHookTargetFiltersTargets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets(
  action: str = None,
  invocation_point: str = None,
  target_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.action">action</a></code> | <code>str</code> | Target actions are the type of operation hooks will be executed at. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.invocationPoint">invocation_point</a></code> | <code>str</code> | Invocation points are the point in provisioning workflow where hooks will be executed. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.targetName">target_name</a></code> | <code>str</code> | Type name of hook target. Hook targets are the destination where hooks will be invoked against. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.action"></a>

```python
action: str
```

- *Type:* str

Target actions are the type of operation hooks will be executed at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#action CloudformationLambdaHook#action}

---

##### `invocation_point`<sup>Optional</sup> <a name="invocation_point" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.invocationPoint"></a>

```python
invocation_point: str
```

- *Type:* str

Invocation points are the point in provisioning workflow where hooks will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#invocation_point CloudformationLambdaHook#invocation_point}

---

##### `target_name`<sup>Optional</sup> <a name="target_name" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

Type name of hook target. Hook targets are the destination where hooks will be invoked against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#target_name CloudformationLambdaHook#target_name}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationLambdaHookLoggingConfigOutputReference <a name="CloudformationLambdaHookLoggingConfigOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resetLogGroupName">reset_log_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resetLogRoleArn">reset_log_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group_name` <a name="reset_log_group_name" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resetLogGroupName"></a>

```python
def reset_log_group_name() -> None
```

##### `reset_log_role_arn` <a name="reset_log_role_arn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resetLogRoleArn"></a>

```python
def reset_log_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArnInput">log_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArn">log_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `log_role_arn_input`<sup>Optional</sup> <a name="log_role_arn_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArnInput"></a>

```python
log_role_arn_input: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `log_role_arn`<sup>Required</sup> <a name="log_role_arn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArn"></a>

```python
log_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationLambdaHookLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a>

---


### CloudformationLambdaHookStackFiltersOutputReference <a name="CloudformationLambdaHookStackFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackNames">put_stack_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackRoles">put_stack_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetFilteringCriteria">reset_filtering_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetStackNames">reset_stack_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetStackRoles">reset_stack_roles</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_stack_names` <a name="put_stack_names" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackNames"></a>

```python
def put_stack_names(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
) -> None
```

###### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackNames.parameter.exclude"></a>

- *Type:* typing.List[str]

List of stack names that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#exclude CloudformationLambdaHook#exclude}

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackNames.parameter.include"></a>

- *Type:* typing.List[str]

List of stack names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#include CloudformationLambdaHook#include}

---

##### `put_stack_roles` <a name="put_stack_roles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackRoles"></a>

```python
def put_stack_roles(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
) -> None
```

###### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackRoles.parameter.exclude"></a>

- *Type:* typing.List[str]

List of stack roles that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#exclude CloudformationLambdaHook#exclude}

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackRoles.parameter.include"></a>

- *Type:* typing.List[str]

List of stack roles that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_lambda_hook#include CloudformationLambdaHook#include}

---

##### `reset_filtering_criteria` <a name="reset_filtering_criteria" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetFilteringCriteria"></a>

```python
def reset_filtering_criteria() -> None
```

##### `reset_stack_names` <a name="reset_stack_names" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetStackNames"></a>

```python
def reset_stack_names() -> None
```

##### `reset_stack_roles` <a name="reset_stack_roles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetStackRoles"></a>

```python
def reset_stack_roles() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackNames">stack_names</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference">CloudformationLambdaHookStackFiltersStackNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackRoles">stack_roles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference">CloudformationLambdaHookStackFiltersStackRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteriaInput">filtering_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackNamesInput">stack_names_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackRolesInput">stack_roles_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteria">filtering_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stack_names`<sup>Required</sup> <a name="stack_names" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackNames"></a>

```python
stack_names: CloudformationLambdaHookStackFiltersStackNamesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference">CloudformationLambdaHookStackFiltersStackNamesOutputReference</a>

---

##### `stack_roles`<sup>Required</sup> <a name="stack_roles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackRoles"></a>

```python
stack_roles: CloudformationLambdaHookStackFiltersStackRolesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference">CloudformationLambdaHookStackFiltersStackRolesOutputReference</a>

---

##### `filtering_criteria_input`<sup>Optional</sup> <a name="filtering_criteria_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteriaInput"></a>

```python
filtering_criteria_input: str
```

- *Type:* str

---

##### `stack_names_input`<sup>Optional</sup> <a name="stack_names_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackNamesInput"></a>

```python
stack_names_input: IResolvable | CloudformationLambdaHookStackFiltersStackNames
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a>

---

##### `stack_roles_input`<sup>Optional</sup> <a name="stack_roles_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackRolesInput"></a>

```python
stack_roles_input: IResolvable | CloudformationLambdaHookStackFiltersStackRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a>

---

##### `filtering_criteria`<sup>Required</sup> <a name="filtering_criteria" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteria"></a>

```python
filtering_criteria: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationLambdaHookStackFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a>

---


### CloudformationLambdaHookStackFiltersStackNamesOutputReference <a name="CloudformationLambdaHookStackFiltersStackNamesOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude` <a name="reset_exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.excludeInput">exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.excludeInput"></a>

```python
exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationLambdaHookStackFiltersStackNames
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a>

---


### CloudformationLambdaHookStackFiltersStackRolesOutputReference <a name="CloudformationLambdaHookStackFiltersStackRolesOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude` <a name="reset_exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.excludeInput">exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.excludeInput"></a>

```python
exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationLambdaHookStackFiltersStackRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a>

---


### CloudformationLambdaHookTargetFiltersOutputReference <a name="CloudformationLambdaHookTargetFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetInvocationPoints">reset_invocation_points</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetTargetNames">reset_target_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetTargets">reset_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_targets` <a name="put_targets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.List[CloudformationLambdaHookTargetFiltersTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>]

---

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_invocation_points` <a name="reset_invocation_points" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetInvocationPoints"></a>

```python
def reset_invocation_points() -> None
```

##### `reset_target_names` <a name="reset_target_names" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetTargetNames"></a>

```python
def reset_target_names() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetTargets"></a>

```python
def reset_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList">CloudformationLambdaHookTargetFiltersTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.invocationPointsInput">invocation_points_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetNamesInput">target_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.invocationPoints">invocation_points</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetNames">target_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targets"></a>

```python
targets: CloudformationLambdaHookTargetFiltersTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList">CloudformationLambdaHookTargetFiltersTargetsList</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `invocation_points_input`<sup>Optional</sup> <a name="invocation_points_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.invocationPointsInput"></a>

```python
invocation_points_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_names_input`<sup>Optional</sup> <a name="target_names_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetNamesInput"></a>

```python
target_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.List[CloudformationLambdaHookTargetFiltersTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `invocation_points`<sup>Required</sup> <a name="invocation_points" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.invocationPoints"></a>

```python
invocation_points: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_names`<sup>Required</sup> <a name="target_names" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetNames"></a>

```python
target_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationLambdaHookTargetFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a>

---


### CloudformationLambdaHookTargetFiltersTargetsList <a name="CloudformationLambdaHookTargetFiltersTargetsList" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudformationLambdaHookTargetFiltersTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudformationLambdaHookTargetFiltersTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>]

---


### CloudformationLambdaHookTargetFiltersTargetsOutputReference <a name="CloudformationLambdaHookTargetFiltersTargetsOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_lambda_hook

cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetInvocationPoint">reset_invocation_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetTargetName">reset_target_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_invocation_point` <a name="reset_invocation_point" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetInvocationPoint"></a>

```python
def reset_invocation_point() -> None
```

##### `reset_target_name` <a name="reset_target_name" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetTargetName"></a>

```python
def reset_target_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPointInput">invocation_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetNameInput">target_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPoint">invocation_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetName">target_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `invocation_point_input`<sup>Optional</sup> <a name="invocation_point_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPointInput"></a>

```python
invocation_point_input: str
```

- *Type:* str

---

##### `target_name_input`<sup>Optional</sup> <a name="target_name_input" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetNameInput"></a>

```python
target_name_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `invocation_point`<sup>Required</sup> <a name="invocation_point" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPoint"></a>

```python
invocation_point: str
```

- *Type:* str

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationLambdaHookTargetFiltersTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>

---



