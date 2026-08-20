# `cloudformationGuardHook` Submodule <a name="`cloudformationGuardHook` Submodule" id="@cdktn/provider-awscc.cloudformationGuardHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationGuardHook <a name="CloudformationGuardHook" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook awscc_cloudformation_guard_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHook(
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
  rule_location: CloudformationGuardHookRuleLocation,
  target_operations: typing.List[str],
  failure_mode: str = None,
  hook_status: str = None,
  log_bucket: str = None,
  options: CloudformationGuardHookOptions = None,
  stack_filters: CloudformationGuardHookStackFilters = None,
  target_filters: CloudformationGuardHookTargetFilters = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.alias">alias</a></code> | <code>str</code> | The typename alias for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.executionRole">execution_role</a></code> | <code>str</code> | The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.ruleLocation">rule_location</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a></code> | S3 Source Location for the Guard files. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.targetOperations">target_operations</a></code> | <code>typing.List[str]</code> | Which operations should this Hook run against? Resource changes, stacks or change sets. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.failureMode">failure_mode</a></code> | <code>str</code> | Attribute to specify CloudFormation behavior on hook failure. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.hookStatus">hook_status</a></code> | <code>str</code> | Attribute to specify which stacks this hook applies to or should get invoked for. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.logBucket">log_bucket</a></code> | <code>str</code> | S3 Bucket where the guard validate report will be uploaded to. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#options CloudformationGuardHook#options}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.stackFilters">stack_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a></code> | Filters to allow hooks to target specific stack attributes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.targetFilters">target_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a></code> | Attribute to specify which targets should invoke the hook. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.alias"></a>

- *Type:* str

The typename alias for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#alias CloudformationGuardHook#alias}

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.executionRole"></a>

- *Type:* str

The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#execution_role CloudformationGuardHook#execution_role}

---

##### `rule_location`<sup>Required</sup> <a name="rule_location" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.ruleLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

S3 Source Location for the Guard files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#rule_location CloudformationGuardHook#rule_location}

---

##### `target_operations`<sup>Required</sup> <a name="target_operations" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.targetOperations"></a>

- *Type:* typing.List[str]

Which operations should this Hook run against? Resource changes, stacks or change sets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_operations CloudformationGuardHook#target_operations}

---

##### `failure_mode`<sup>Optional</sup> <a name="failure_mode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.failureMode"></a>

- *Type:* str

Attribute to specify CloudFormation behavior on hook failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#failure_mode CloudformationGuardHook#failure_mode}

---

##### `hook_status`<sup>Optional</sup> <a name="hook_status" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.hookStatus"></a>

- *Type:* str

Attribute to specify which stacks this hook applies to or should get invoked for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#hook_status CloudformationGuardHook#hook_status}

---

##### `log_bucket`<sup>Optional</sup> <a name="log_bucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.logBucket"></a>

- *Type:* str

S3 Bucket where the guard validate report will be uploaded to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#log_bucket CloudformationGuardHook#log_bucket}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#options CloudformationGuardHook#options}.

---

##### `stack_filters`<sup>Optional</sup> <a name="stack_filters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.stackFilters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

Filters to allow hooks to target specific stack attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#stack_filters CloudformationGuardHook#stack_filters}

---

##### `target_filters`<sup>Optional</sup> <a name="target_filters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.targetFilters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

Attribute to specify which targets should invoke the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_filters CloudformationGuardHook#target_filters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putRuleLocation">put_rule_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters">put_stack_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters">put_target_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetFailureMode">reset_failure_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetHookStatus">reset_hook_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetLogBucket">reset_log_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetStackFilters">reset_stack_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetTargetFilters">reset_target_filters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_options` <a name="put_options" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putOptions"></a>

```python
def put_options(
  input_params: str = None
) -> None
```

###### `input_params`<sup>Optional</sup> <a name="input_params" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putOptions.parameter.inputParams"></a>

- *Type:* str

Specifies the S3 location of input parameter files for your Guard rules.

You can specify either a single S3 location or an array of up to 10 S3 locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#input_params CloudformationGuardHook#input_params}

---

##### `put_rule_location` <a name="put_rule_location" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putRuleLocation"></a>

```python
def put_rule_location(
  uri: str,
  version_id: str = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putRuleLocation.parameter.uri"></a>

- *Type:* str

S3 uri of Guard files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#uri CloudformationGuardHook#uri}

---

###### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putRuleLocation.parameter.versionId"></a>

- *Type:* str

S3 object version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#version_id CloudformationGuardHook#version_id}

---

##### `put_stack_filters` <a name="put_stack_filters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters"></a>

```python
def put_stack_filters(
  filtering_criteria: str = None,
  stack_names: CloudformationGuardHookStackFiltersStackNames = None,
  stack_roles: CloudformationGuardHookStackFiltersStackRoles = None
) -> None
```

###### `filtering_criteria`<sup>Optional</sup> <a name="filtering_criteria" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters.parameter.filteringCriteria"></a>

- *Type:* str

Attribute to specify the filtering behavior.

ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#filtering_criteria CloudformationGuardHook#filtering_criteria}

---

###### `stack_names`<sup>Optional</sup> <a name="stack_names" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters.parameter.stackNames"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

List of stack names as filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#stack_names CloudformationGuardHook#stack_names}

---

###### `stack_roles`<sup>Optional</sup> <a name="stack_roles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters.parameter.stackRoles"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

List of stack roles that are performing the stack operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#stack_roles CloudformationGuardHook#stack_roles}

---

##### `put_target_filters` <a name="put_target_filters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters"></a>

```python
def put_target_filters(
  actions: typing.List[str] = None,
  invocation_points: typing.List[str] = None,
  target_names: typing.List[str] = None,
  targets: IResolvable | typing.List[CloudformationGuardHookTargetFiltersTargets] = None
) -> None
```

###### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters.parameter.actions"></a>

- *Type:* typing.List[str]

List of actions that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#actions CloudformationGuardHook#actions}

---

###### `invocation_points`<sup>Optional</sup> <a name="invocation_points" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters.parameter.invocationPoints"></a>

- *Type:* typing.List[str]

List of invocation points that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#invocation_points CloudformationGuardHook#invocation_points}

---

###### `target_names`<sup>Optional</sup> <a name="target_names" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters.parameter.targetNames"></a>

- *Type:* typing.List[str]

List of type names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_names CloudformationGuardHook#target_names}

---

###### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters.parameter.targets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>]

List of hook targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#targets CloudformationGuardHook#targets}

---

##### `reset_failure_mode` <a name="reset_failure_mode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetFailureMode"></a>

```python
def reset_failure_mode() -> None
```

##### `reset_hook_status` <a name="reset_hook_status" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetHookStatus"></a>

```python
def reset_hook_status() -> None
```

##### `reset_log_bucket` <a name="reset_log_bucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetLogBucket"></a>

```python
def reset_log_bucket() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_stack_filters` <a name="reset_stack_filters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetStackFilters"></a>

```python
def reset_stack_filters() -> None
```

##### `reset_target_filters` <a name="reset_target_filters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetTargetFilters"></a>

```python
def reset_target_filters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudformationGuardHook resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudformationGuardHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudformationGuardHook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudformationGuardHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationGuardHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookArn">hook_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference">CloudformationGuardHookOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocation">rule_location</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference">CloudformationGuardHookRuleLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFilters">stack_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference">CloudformationGuardHookStackFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFilters">target_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference">CloudformationGuardHookTargetFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureModeInput">failure_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatusInput">hook_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucketInput">log_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.optionsInput">options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocationInput">rule_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFiltersInput">stack_filters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFiltersInput">target_filters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperationsInput">target_operations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureMode">failure_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatus">hook_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucket">log_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperations">target_operations</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hook_arn`<sup>Required</sup> <a name="hook_arn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookArn"></a>

```python
hook_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.options"></a>

```python
options: CloudformationGuardHookOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference">CloudformationGuardHookOptionsOutputReference</a>

---

##### `rule_location`<sup>Required</sup> <a name="rule_location" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocation"></a>

```python
rule_location: CloudformationGuardHookRuleLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference">CloudformationGuardHookRuleLocationOutputReference</a>

---

##### `stack_filters`<sup>Required</sup> <a name="stack_filters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFilters"></a>

```python
stack_filters: CloudformationGuardHookStackFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference">CloudformationGuardHookStackFiltersOutputReference</a>

---

##### `target_filters`<sup>Required</sup> <a name="target_filters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFilters"></a>

```python
target_filters: CloudformationGuardHookTargetFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference">CloudformationGuardHookTargetFiltersOutputReference</a>

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `failure_mode_input`<sup>Optional</sup> <a name="failure_mode_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureModeInput"></a>

```python
failure_mode_input: str
```

- *Type:* str

---

##### `hook_status_input`<sup>Optional</sup> <a name="hook_status_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatusInput"></a>

```python
hook_status_input: str
```

- *Type:* str

---

##### `log_bucket_input`<sup>Optional</sup> <a name="log_bucket_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucketInput"></a>

```python
log_bucket_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.optionsInput"></a>

```python
options_input: IResolvable | CloudformationGuardHookOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

---

##### `rule_location_input`<sup>Optional</sup> <a name="rule_location_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocationInput"></a>

```python
rule_location_input: IResolvable | CloudformationGuardHookRuleLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

---

##### `stack_filters_input`<sup>Optional</sup> <a name="stack_filters_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFiltersInput"></a>

```python
stack_filters_input: IResolvable | CloudformationGuardHookStackFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

---

##### `target_filters_input`<sup>Optional</sup> <a name="target_filters_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFiltersInput"></a>

```python
target_filters_input: IResolvable | CloudformationGuardHookTargetFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

---

##### `target_operations_input`<sup>Optional</sup> <a name="target_operations_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperationsInput"></a>

```python
target_operations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `failure_mode`<sup>Required</sup> <a name="failure_mode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureMode"></a>

```python
failure_mode: str
```

- *Type:* str

---

##### `hook_status`<sup>Required</sup> <a name="hook_status" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatus"></a>

```python
hook_status: str
```

- *Type:* str

---

##### `log_bucket`<sup>Required</sup> <a name="log_bucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucket"></a>

```python
log_bucket: str
```

- *Type:* str

---

##### `target_operations`<sup>Required</sup> <a name="target_operations" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperations"></a>

```python
target_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationGuardHookConfig <a name="CloudformationGuardHookConfig" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alias: str,
  execution_role: str,
  rule_location: CloudformationGuardHookRuleLocation,
  target_operations: typing.List[str],
  failure_mode: str = None,
  hook_status: str = None,
  log_bucket: str = None,
  options: CloudformationGuardHookOptions = None,
  stack_filters: CloudformationGuardHookStackFilters = None,
  target_filters: CloudformationGuardHookTargetFilters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.alias">alias</a></code> | <code>str</code> | The typename alias for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.executionRole">execution_role</a></code> | <code>str</code> | The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.ruleLocation">rule_location</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a></code> | S3 Source Location for the Guard files. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetOperations">target_operations</a></code> | <code>typing.List[str]</code> | Which operations should this Hook run against? Resource changes, stacks or change sets. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.failureMode">failure_mode</a></code> | <code>str</code> | Attribute to specify CloudFormation behavior on hook failure. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.hookStatus">hook_status</a></code> | <code>str</code> | Attribute to specify which stacks this hook applies to or should get invoked for. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.logBucket">log_bucket</a></code> | <code>str</code> | S3 Bucket where the guard validate report will be uploaded to. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#options CloudformationGuardHook#options}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.stackFilters">stack_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a></code> | Filters to allow hooks to target specific stack attributes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetFilters">target_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a></code> | Attribute to specify which targets should invoke the hook. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

The typename alias for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#alias CloudformationGuardHook#alias}

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#execution_role CloudformationGuardHook#execution_role}

---

##### `rule_location`<sup>Required</sup> <a name="rule_location" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.ruleLocation"></a>

```python
rule_location: CloudformationGuardHookRuleLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

S3 Source Location for the Guard files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#rule_location CloudformationGuardHook#rule_location}

---

##### `target_operations`<sup>Required</sup> <a name="target_operations" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetOperations"></a>

```python
target_operations: typing.List[str]
```

- *Type:* typing.List[str]

Which operations should this Hook run against? Resource changes, stacks or change sets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_operations CloudformationGuardHook#target_operations}

---

##### `failure_mode`<sup>Optional</sup> <a name="failure_mode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.failureMode"></a>

```python
failure_mode: str
```

- *Type:* str

Attribute to specify CloudFormation behavior on hook failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#failure_mode CloudformationGuardHook#failure_mode}

---

##### `hook_status`<sup>Optional</sup> <a name="hook_status" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.hookStatus"></a>

```python
hook_status: str
```

- *Type:* str

Attribute to specify which stacks this hook applies to or should get invoked for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#hook_status CloudformationGuardHook#hook_status}

---

##### `log_bucket`<sup>Optional</sup> <a name="log_bucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.logBucket"></a>

```python
log_bucket: str
```

- *Type:* str

S3 Bucket where the guard validate report will be uploaded to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#log_bucket CloudformationGuardHook#log_bucket}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.options"></a>

```python
options: CloudformationGuardHookOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#options CloudformationGuardHook#options}.

---

##### `stack_filters`<sup>Optional</sup> <a name="stack_filters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.stackFilters"></a>

```python
stack_filters: CloudformationGuardHookStackFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

Filters to allow hooks to target specific stack attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#stack_filters CloudformationGuardHook#stack_filters}

---

##### `target_filters`<sup>Optional</sup> <a name="target_filters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetFilters"></a>

```python
target_filters: CloudformationGuardHookTargetFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

Attribute to specify which targets should invoke the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_filters CloudformationGuardHook#target_filters}

---

### CloudformationGuardHookOptions <a name="CloudformationGuardHookOptions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookOptions(
  input_params: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions.property.inputParams">input_params</a></code> | <code>str</code> | Specifies the S3 location of input parameter files for your Guard rules. |

---

##### `input_params`<sup>Optional</sup> <a name="input_params" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions.property.inputParams"></a>

```python
input_params: str
```

- *Type:* str

Specifies the S3 location of input parameter files for your Guard rules.

You can specify either a single S3 location or an array of up to 10 S3 locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#input_params CloudformationGuardHook#input_params}

---

### CloudformationGuardHookRuleLocation <a name="CloudformationGuardHookRuleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookRuleLocation(
  uri: str,
  version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.uri">uri</a></code> | <code>str</code> | S3 uri of Guard files. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.versionId">version_id</a></code> | <code>str</code> | S3 object version. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.uri"></a>

```python
uri: str
```

- *Type:* str

S3 uri of Guard files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#uri CloudformationGuardHook#uri}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

S3 object version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#version_id CloudformationGuardHook#version_id}

---

### CloudformationGuardHookStackFilters <a name="CloudformationGuardHookStackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookStackFilters(
  filtering_criteria: str = None,
  stack_names: CloudformationGuardHookStackFiltersStackNames = None,
  stack_roles: CloudformationGuardHookStackFiltersStackRoles = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.filteringCriteria">filtering_criteria</a></code> | <code>str</code> | Attribute to specify the filtering behavior. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackNames">stack_names</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a></code> | List of stack names as filters. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackRoles">stack_roles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a></code> | List of stack roles that are performing the stack operations. |

---

##### `filtering_criteria`<sup>Optional</sup> <a name="filtering_criteria" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.filteringCriteria"></a>

```python
filtering_criteria: str
```

- *Type:* str

Attribute to specify the filtering behavior.

ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#filtering_criteria CloudformationGuardHook#filtering_criteria}

---

##### `stack_names`<sup>Optional</sup> <a name="stack_names" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackNames"></a>

```python
stack_names: CloudformationGuardHookStackFiltersStackNames
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

List of stack names as filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#stack_names CloudformationGuardHook#stack_names}

---

##### `stack_roles`<sup>Optional</sup> <a name="stack_roles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackRoles"></a>

```python
stack_roles: CloudformationGuardHookStackFiltersStackRoles
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

List of stack roles that are performing the stack operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#stack_roles CloudformationGuardHook#stack_roles}

---

### CloudformationGuardHookStackFiltersStackNames <a name="CloudformationGuardHookStackFiltersStackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | List of stack names that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.include">include</a></code> | <code>typing.List[str]</code> | List of stack names that the hook is going to target. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

List of stack names that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#exclude CloudformationGuardHook#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

List of stack names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#include CloudformationGuardHook#include}

---

### CloudformationGuardHookStackFiltersStackRoles <a name="CloudformationGuardHookStackFiltersStackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | List of stack roles that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.include">include</a></code> | <code>typing.List[str]</code> | List of stack roles that the hook is going to target. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

List of stack roles that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#exclude CloudformationGuardHook#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

List of stack roles that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#include CloudformationGuardHook#include}

---

### CloudformationGuardHookTargetFilters <a name="CloudformationGuardHookTargetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookTargetFilters(
  actions: typing.List[str] = None,
  invocation_points: typing.List[str] = None,
  target_names: typing.List[str] = None,
  targets: IResolvable | typing.List[CloudformationGuardHookTargetFiltersTargets] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.actions">actions</a></code> | <code>typing.List[str]</code> | List of actions that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.invocationPoints">invocation_points</a></code> | <code>typing.List[str]</code> | List of invocation points that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targetNames">target_names</a></code> | <code>typing.List[str]</code> | List of type names that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>]</code> | List of hook targets. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

List of actions that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#actions CloudformationGuardHook#actions}

---

##### `invocation_points`<sup>Optional</sup> <a name="invocation_points" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.invocationPoints"></a>

```python
invocation_points: typing.List[str]
```

- *Type:* typing.List[str]

List of invocation points that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#invocation_points CloudformationGuardHook#invocation_points}

---

##### `target_names`<sup>Optional</sup> <a name="target_names" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targetNames"></a>

```python
target_names: typing.List[str]
```

- *Type:* typing.List[str]

List of type names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_names CloudformationGuardHook#target_names}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targets"></a>

```python
targets: IResolvable | typing.List[CloudformationGuardHookTargetFiltersTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>]

List of hook targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#targets CloudformationGuardHook#targets}

---

### CloudformationGuardHookTargetFiltersTargets <a name="CloudformationGuardHookTargetFiltersTargets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets(
  action: str = None,
  invocation_point: str = None,
  target_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.action">action</a></code> | <code>str</code> | Target actions are the type of operation hooks will be executed at. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.invocationPoint">invocation_point</a></code> | <code>str</code> | Invocation points are the point in provisioning workflow where hooks will be executed. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.targetName">target_name</a></code> | <code>str</code> | Type name of hook target. Hook targets are the destination where hooks will be invoked against. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.action"></a>

```python
action: str
```

- *Type:* str

Target actions are the type of operation hooks will be executed at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#action CloudformationGuardHook#action}

---

##### `invocation_point`<sup>Optional</sup> <a name="invocation_point" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.invocationPoint"></a>

```python
invocation_point: str
```

- *Type:* str

Invocation points are the point in provisioning workflow where hooks will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#invocation_point CloudformationGuardHook#invocation_point}

---

##### `target_name`<sup>Optional</sup> <a name="target_name" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

Type name of hook target. Hook targets are the destination where hooks will be invoked against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_name CloudformationGuardHook#target_name}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationGuardHookOptionsOutputReference <a name="CloudformationGuardHookOptionsOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resetInputParams">reset_input_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_params` <a name="reset_input_params" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resetInputParams"></a>

```python
def reset_input_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParamsInput">input_params_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParams">input_params</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_params_input`<sup>Optional</sup> <a name="input_params_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParamsInput"></a>

```python
input_params_input: str
```

- *Type:* str

---

##### `input_params`<sup>Required</sup> <a name="input_params" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParams"></a>

```python
input_params: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationGuardHookOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

---


### CloudformationGuardHookRuleLocationOutputReference <a name="CloudformationGuardHookRuleLocationOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resetVersionId">reset_version_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version_id` <a name="reset_version_id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resetVersionId"></a>

```python
def reset_version_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationGuardHookRuleLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

---


### CloudformationGuardHookStackFiltersOutputReference <a name="CloudformationGuardHookStackFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackNames">put_stack_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackRoles">put_stack_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetFilteringCriteria">reset_filtering_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackNames">reset_stack_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackRoles">reset_stack_roles</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_stack_names` <a name="put_stack_names" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackNames"></a>

```python
def put_stack_names(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
) -> None
```

###### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackNames.parameter.exclude"></a>

- *Type:* typing.List[str]

List of stack names that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#exclude CloudformationGuardHook#exclude}

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackNames.parameter.include"></a>

- *Type:* typing.List[str]

List of stack names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#include CloudformationGuardHook#include}

---

##### `put_stack_roles` <a name="put_stack_roles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackRoles"></a>

```python
def put_stack_roles(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
) -> None
```

###### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackRoles.parameter.exclude"></a>

- *Type:* typing.List[str]

List of stack roles that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#exclude CloudformationGuardHook#exclude}

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackRoles.parameter.include"></a>

- *Type:* typing.List[str]

List of stack roles that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#include CloudformationGuardHook#include}

---

##### `reset_filtering_criteria` <a name="reset_filtering_criteria" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetFilteringCriteria"></a>

```python
def reset_filtering_criteria() -> None
```

##### `reset_stack_names` <a name="reset_stack_names" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackNames"></a>

```python
def reset_stack_names() -> None
```

##### `reset_stack_roles` <a name="reset_stack_roles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackRoles"></a>

```python
def reset_stack_roles() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNames">stack_names</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference">CloudformationGuardHookStackFiltersStackNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRoles">stack_roles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference">CloudformationGuardHookStackFiltersStackRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteriaInput">filtering_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNamesInput">stack_names_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRolesInput">stack_roles_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria">filtering_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stack_names`<sup>Required</sup> <a name="stack_names" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNames"></a>

```python
stack_names: CloudformationGuardHookStackFiltersStackNamesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference">CloudformationGuardHookStackFiltersStackNamesOutputReference</a>

---

##### `stack_roles`<sup>Required</sup> <a name="stack_roles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRoles"></a>

```python
stack_roles: CloudformationGuardHookStackFiltersStackRolesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference">CloudformationGuardHookStackFiltersStackRolesOutputReference</a>

---

##### `filtering_criteria_input`<sup>Optional</sup> <a name="filtering_criteria_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteriaInput"></a>

```python
filtering_criteria_input: str
```

- *Type:* str

---

##### `stack_names_input`<sup>Optional</sup> <a name="stack_names_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNamesInput"></a>

```python
stack_names_input: IResolvable | CloudformationGuardHookStackFiltersStackNames
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

---

##### `stack_roles_input`<sup>Optional</sup> <a name="stack_roles_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRolesInput"></a>

```python
stack_roles_input: IResolvable | CloudformationGuardHookStackFiltersStackRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

---

##### `filtering_criteria`<sup>Required</sup> <a name="filtering_criteria" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria"></a>

```python
filtering_criteria: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationGuardHookStackFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

---


### CloudformationGuardHookStackFiltersStackNamesOutputReference <a name="CloudformationGuardHookStackFiltersStackNamesOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude` <a name="reset_exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.excludeInput">exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.excludeInput"></a>

```python
exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationGuardHookStackFiltersStackNames
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

---


### CloudformationGuardHookStackFiltersStackRolesOutputReference <a name="CloudformationGuardHookStackFiltersStackRolesOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude` <a name="reset_exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.excludeInput">exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.excludeInput"></a>

```python
exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationGuardHookStackFiltersStackRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

---


### CloudformationGuardHookTargetFiltersOutputReference <a name="CloudformationGuardHookTargetFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetInvocationPoints">reset_invocation_points</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargetNames">reset_target_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargets">reset_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_targets` <a name="put_targets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.List[CloudformationGuardHookTargetFiltersTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>]

---

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_invocation_points` <a name="reset_invocation_points" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetInvocationPoints"></a>

```python
def reset_invocation_points() -> None
```

##### `reset_target_names` <a name="reset_target_names" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargetNames"></a>

```python
def reset_target_names() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargets"></a>

```python
def reset_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList">CloudformationGuardHookTargetFiltersTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPointsInput">invocation_points_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNamesInput">target_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints">invocation_points</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNames">target_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targets"></a>

```python
targets: CloudformationGuardHookTargetFiltersTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList">CloudformationGuardHookTargetFiltersTargetsList</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `invocation_points_input`<sup>Optional</sup> <a name="invocation_points_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPointsInput"></a>

```python
invocation_points_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_names_input`<sup>Optional</sup> <a name="target_names_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNamesInput"></a>

```python
target_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.List[CloudformationGuardHookTargetFiltersTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `invocation_points`<sup>Required</sup> <a name="invocation_points" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints"></a>

```python
invocation_points: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_names`<sup>Required</sup> <a name="target_names" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNames"></a>

```python
target_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationGuardHookTargetFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

---


### CloudformationGuardHookTargetFiltersTargetsList <a name="CloudformationGuardHookTargetFiltersTargetsList" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudformationGuardHookTargetFiltersTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudformationGuardHookTargetFiltersTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>]

---


### CloudformationGuardHookTargetFiltersTargetsOutputReference <a name="CloudformationGuardHookTargetFiltersTargetsOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_guard_hook

cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetInvocationPoint">reset_invocation_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetTargetName">reset_target_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_invocation_point` <a name="reset_invocation_point" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetInvocationPoint"></a>

```python
def reset_invocation_point() -> None
```

##### `reset_target_name` <a name="reset_target_name" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetTargetName"></a>

```python
def reset_target_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPointInput">invocation_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetNameInput">target_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint">invocation_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName">target_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `invocation_point_input`<sup>Optional</sup> <a name="invocation_point_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPointInput"></a>

```python
invocation_point_input: str
```

- *Type:* str

---

##### `target_name_input`<sup>Optional</sup> <a name="target_name_input" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetNameInput"></a>

```python
target_name_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `invocation_point`<sup>Required</sup> <a name="invocation_point" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint"></a>

```python
invocation_point: str
```

- *Type:* str

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationGuardHookTargetFiltersTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>

---



