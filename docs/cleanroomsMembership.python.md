# `cleanroomsMembership` Submodule <a name="`cleanroomsMembership` Submodule" id="@cdktn/provider-awscc.cleanroomsMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsMembership <a name="CleanroomsMembership" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership awscc_cleanrooms_membership}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembership(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collaboration_identifier: str,
  query_log_status: str,
  default_job_result_configuration: CleanroomsMembershipDefaultJobResultConfiguration = None,
  default_result_configuration: CleanroomsMembershipDefaultResultConfiguration = None,
  is_metrics_enabled: bool | IResolvable = None,
  job_log_status: str = None,
  payment_configuration: CleanroomsMembershipPaymentConfiguration = None,
  tags: IResolvable | typing.List[CleanroomsMembershipTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.collaborationIdentifier">collaboration_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#collaboration_identifier CleanroomsMembership#collaboration_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.queryLogStatus">query_log_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.defaultJobResultConfiguration">default_job_result_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#default_job_result_configuration CleanroomsMembership#default_job_result_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.defaultResultConfiguration">default_result_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#default_result_configuration CleanroomsMembership#default_result_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.isMetricsEnabled">is_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_metrics_enabled CleanroomsMembership#is_metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.jobLogStatus">job_log_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#job_log_status CleanroomsMembership#job_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.paymentConfiguration">payment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#payment_configuration CleanroomsMembership#payment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms membership. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collaboration_identifier`<sup>Required</sup> <a name="collaboration_identifier" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.collaborationIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#collaboration_identifier CleanroomsMembership#collaboration_identifier}.

---

##### `query_log_status`<sup>Required</sup> <a name="query_log_status" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.queryLogStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}.

---

##### `default_job_result_configuration`<sup>Optional</sup> <a name="default_job_result_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.defaultJobResultConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#default_job_result_configuration CleanroomsMembership#default_job_result_configuration}.

---

##### `default_result_configuration`<sup>Optional</sup> <a name="default_result_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.defaultResultConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#default_result_configuration CleanroomsMembership#default_result_configuration}.

---

##### `is_metrics_enabled`<sup>Optional</sup> <a name="is_metrics_enabled" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.isMetricsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_metrics_enabled CleanroomsMembership#is_metrics_enabled}.

---

##### `job_log_status`<sup>Optional</sup> <a name="job_log_status" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.jobLogStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#job_log_status CleanroomsMembership#job_log_status}.

---

##### `payment_configuration`<sup>Optional</sup> <a name="payment_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.paymentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#payment_configuration CleanroomsMembership#payment_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#tags CleanroomsMembership#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultJobResultConfiguration">put_default_job_result_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration">put_default_result_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration">put_payment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetDefaultJobResultConfiguration">reset_default_job_result_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetDefaultResultConfiguration">reset_default_result_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetIsMetricsEnabled">reset_is_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetJobLogStatus">reset_job_log_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetPaymentConfiguration">reset_payment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_job_result_configuration` <a name="put_default_job_result_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultJobResultConfiguration"></a>

```python
def put_default_job_result_configuration(
  output_configuration: CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration = None,
  role_arn: str = None
) -> None
```

###### `output_configuration`<sup>Optional</sup> <a name="output_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultJobResultConfiguration.parameter.outputConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultJobResultConfiguration.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}.

---

##### `put_default_result_configuration` <a name="put_default_result_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration"></a>

```python
def put_default_result_configuration(
  output_configuration: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration = None,
  role_arn: str = None
) -> None
```

###### `output_configuration`<sup>Optional</sup> <a name="output_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration.parameter.outputConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}.

---

##### `put_payment_configuration` <a name="put_payment_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration"></a>

```python
def put_payment_configuration(
  job_compute: CleanroomsMembershipPaymentConfigurationJobCompute = None,
  machine_learning: CleanroomsMembershipPaymentConfigurationMachineLearning = None,
  query_compute: CleanroomsMembershipPaymentConfigurationQueryCompute = None
) -> None
```

###### `job_compute`<sup>Optional</sup> <a name="job_compute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration.parameter.jobCompute"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#job_compute CleanroomsMembership#job_compute}.

---

###### `machine_learning`<sup>Optional</sup> <a name="machine_learning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration.parameter.machineLearning"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#machine_learning CleanroomsMembership#machine_learning}.

---

###### `query_compute`<sup>Optional</sup> <a name="query_compute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration.parameter.queryCompute"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#query_compute CleanroomsMembership#query_compute}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CleanroomsMembershipTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>]

---

##### `reset_default_job_result_configuration` <a name="reset_default_job_result_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetDefaultJobResultConfiguration"></a>

```python
def reset_default_job_result_configuration() -> None
```

##### `reset_default_result_configuration` <a name="reset_default_result_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetDefaultResultConfiguration"></a>

```python
def reset_default_result_configuration() -> None
```

##### `reset_is_metrics_enabled` <a name="reset_is_metrics_enabled" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetIsMetricsEnabled"></a>

```python
def reset_is_metrics_enabled() -> None
```

##### `reset_job_log_status` <a name="reset_job_log_status" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetJobLogStatus"></a>

```python
def reset_job_log_status() -> None
```

##### `reset_payment_configuration` <a name="reset_payment_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetPaymentConfiguration"></a>

```python
def reset_payment_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CleanroomsMembership resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isConstruct"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembership.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembership.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembership.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembership.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CleanroomsMembership resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CleanroomsMembership to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CleanroomsMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationArn">collaboration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorAccountId">collaboration_creator_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultJobResultConfiguration">default_job_result_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfiguration">default_result_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference">CleanroomsMembershipDefaultResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.paymentConfiguration">payment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference">CleanroomsMembershipPaymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList">CleanroomsMembershipTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationIdentifierInput">collaboration_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultJobResultConfigurationInput">default_job_result_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfigurationInput">default_result_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.isMetricsEnabledInput">is_metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.jobLogStatusInput">job_log_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.paymentConfigurationInput">payment_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.queryLogStatusInput">query_log_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationIdentifier">collaboration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.isMetricsEnabled">is_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.jobLogStatus">job_log_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.queryLogStatus">query_log_status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `collaboration_arn`<sup>Required</sup> <a name="collaboration_arn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationArn"></a>

```python
collaboration_arn: str
```

- *Type:* str

---

##### `collaboration_creator_account_id`<sup>Required</sup> <a name="collaboration_creator_account_id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorAccountId"></a>

```python
collaboration_creator_account_id: str
```

- *Type:* str

---

##### `default_job_result_configuration`<sup>Required</sup> <a name="default_job_result_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultJobResultConfiguration"></a>

```python
default_job_result_configuration: CleanroomsMembershipDefaultJobResultConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputReference</a>

---

##### `default_result_configuration`<sup>Required</sup> <a name="default_result_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfiguration"></a>

```python
default_result_configuration: CleanroomsMembershipDefaultResultConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference">CleanroomsMembershipDefaultResultConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

---

##### `payment_configuration`<sup>Required</sup> <a name="payment_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.paymentConfiguration"></a>

```python
payment_configuration: CleanroomsMembershipPaymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference">CleanroomsMembershipPaymentConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tags"></a>

```python
tags: CleanroomsMembershipTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList">CleanroomsMembershipTagsList</a>

---

##### `collaboration_identifier_input`<sup>Optional</sup> <a name="collaboration_identifier_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationIdentifierInput"></a>

```python
collaboration_identifier_input: str
```

- *Type:* str

---

##### `default_job_result_configuration_input`<sup>Optional</sup> <a name="default_job_result_configuration_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultJobResultConfigurationInput"></a>

```python
default_job_result_configuration_input: IResolvable | CleanroomsMembershipDefaultJobResultConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a>

---

##### `default_result_configuration_input`<sup>Optional</sup> <a name="default_result_configuration_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfigurationInput"></a>

```python
default_result_configuration_input: IResolvable | CleanroomsMembershipDefaultResultConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>

---

##### `is_metrics_enabled_input`<sup>Optional</sup> <a name="is_metrics_enabled_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.isMetricsEnabledInput"></a>

```python
is_metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `job_log_status_input`<sup>Optional</sup> <a name="job_log_status_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.jobLogStatusInput"></a>

```python
job_log_status_input: str
```

- *Type:* str

---

##### `payment_configuration_input`<sup>Optional</sup> <a name="payment_configuration_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.paymentConfigurationInput"></a>

```python
payment_configuration_input: IResolvable | CleanroomsMembershipPaymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>

---

##### `query_log_status_input`<sup>Optional</sup> <a name="query_log_status_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.queryLogStatusInput"></a>

```python
query_log_status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CleanroomsMembershipTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>]

---

##### `collaboration_identifier`<sup>Required</sup> <a name="collaboration_identifier" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationIdentifier"></a>

```python
collaboration_identifier: str
```

- *Type:* str

---

##### `is_metrics_enabled`<sup>Required</sup> <a name="is_metrics_enabled" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.isMetricsEnabled"></a>

```python
is_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `job_log_status`<sup>Required</sup> <a name="job_log_status" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.jobLogStatus"></a>

```python
job_log_status: str
```

- *Type:* str

---

##### `query_log_status`<sup>Required</sup> <a name="query_log_status" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.queryLogStatus"></a>

```python
query_log_status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsMembershipConfig <a name="CleanroomsMembershipConfig" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collaboration_identifier: str,
  query_log_status: str,
  default_job_result_configuration: CleanroomsMembershipDefaultJobResultConfiguration = None,
  default_result_configuration: CleanroomsMembershipDefaultResultConfiguration = None,
  is_metrics_enabled: bool | IResolvable = None,
  job_log_status: str = None,
  payment_configuration: CleanroomsMembershipPaymentConfiguration = None,
  tags: IResolvable | typing.List[CleanroomsMembershipTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.collaborationIdentifier">collaboration_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#collaboration_identifier CleanroomsMembership#collaboration_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.queryLogStatus">query_log_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultJobResultConfiguration">default_job_result_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#default_job_result_configuration CleanroomsMembership#default_job_result_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultResultConfiguration">default_result_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#default_result_configuration CleanroomsMembership#default_result_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.isMetricsEnabled">is_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_metrics_enabled CleanroomsMembership#is_metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.jobLogStatus">job_log_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#job_log_status CleanroomsMembership#job_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.paymentConfiguration">payment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#payment_configuration CleanroomsMembership#payment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms membership. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collaboration_identifier`<sup>Required</sup> <a name="collaboration_identifier" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.collaborationIdentifier"></a>

```python
collaboration_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#collaboration_identifier CleanroomsMembership#collaboration_identifier}.

---

##### `query_log_status`<sup>Required</sup> <a name="query_log_status" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.queryLogStatus"></a>

```python
query_log_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}.

---

##### `default_job_result_configuration`<sup>Optional</sup> <a name="default_job_result_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultJobResultConfiguration"></a>

```python
default_job_result_configuration: CleanroomsMembershipDefaultJobResultConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#default_job_result_configuration CleanroomsMembership#default_job_result_configuration}.

---

##### `default_result_configuration`<sup>Optional</sup> <a name="default_result_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultResultConfiguration"></a>

```python
default_result_configuration: CleanroomsMembershipDefaultResultConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#default_result_configuration CleanroomsMembership#default_result_configuration}.

---

##### `is_metrics_enabled`<sup>Optional</sup> <a name="is_metrics_enabled" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.isMetricsEnabled"></a>

```python
is_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_metrics_enabled CleanroomsMembership#is_metrics_enabled}.

---

##### `job_log_status`<sup>Optional</sup> <a name="job_log_status" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.jobLogStatus"></a>

```python
job_log_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#job_log_status CleanroomsMembership#job_log_status}.

---

##### `payment_configuration`<sup>Optional</sup> <a name="payment_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.paymentConfiguration"></a>

```python
payment_configuration: CleanroomsMembershipPaymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#payment_configuration CleanroomsMembership#payment_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CleanroomsMembershipTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#tags CleanroomsMembership#tags}

---

### CleanroomsMembershipDefaultJobResultConfiguration <a name="CleanroomsMembershipDefaultJobResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration(
  output_configuration: CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.property.outputConfiguration">output_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}. |

---

##### `output_configuration`<sup>Optional</sup> <a name="output_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.property.outputConfiguration"></a>

```python
output_configuration: CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}.

---

### CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration(
  s3: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration.property.s3"></a>

```python
s3: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}.

---

### CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3(
  bucket: str = None,
  key_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.property.keyPrefix">key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}.

---

##### `key_prefix`<sup>Optional</sup> <a name="key_prefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}.

---

### CleanroomsMembershipDefaultResultConfiguration <a name="CleanroomsMembershipDefaultResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration(
  output_configuration: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.outputConfiguration">output_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}. |

---

##### `output_configuration`<sup>Optional</sup> <a name="output_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.outputConfiguration"></a>

```python
output_configuration: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}.

---

### CleanroomsMembershipDefaultResultConfigurationOutputConfiguration <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration(
  s3: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.property.s3"></a>

```python
s3: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}.

---

### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3(
  bucket: str = None,
  key_prefix: str = None,
  result_format: str = None,
  single_file_output: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.keyPrefix">key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.resultFormat">result_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.singleFileOutput">single_file_output</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#single_file_output CleanroomsMembership#single_file_output}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}.

---

##### `key_prefix`<sup>Optional</sup> <a name="key_prefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}.

---

##### `result_format`<sup>Optional</sup> <a name="result_format" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.resultFormat"></a>

```python
result_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}.

---

##### `single_file_output`<sup>Optional</sup> <a name="single_file_output" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.singleFileOutput"></a>

```python
single_file_output: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#single_file_output CleanroomsMembership#single_file_output}.

---

### CleanroomsMembershipPaymentConfiguration <a name="CleanroomsMembershipPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfiguration(
  job_compute: CleanroomsMembershipPaymentConfigurationJobCompute = None,
  machine_learning: CleanroomsMembershipPaymentConfigurationMachineLearning = None,
  query_compute: CleanroomsMembershipPaymentConfigurationQueryCompute = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.jobCompute">job_compute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#job_compute CleanroomsMembership#job_compute}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.machineLearning">machine_learning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#machine_learning CleanroomsMembership#machine_learning}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.queryCompute">query_compute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#query_compute CleanroomsMembership#query_compute}. |

---

##### `job_compute`<sup>Optional</sup> <a name="job_compute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.jobCompute"></a>

```python
job_compute: CleanroomsMembershipPaymentConfigurationJobCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#job_compute CleanroomsMembership#job_compute}.

---

##### `machine_learning`<sup>Optional</sup> <a name="machine_learning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.machineLearning"></a>

```python
machine_learning: CleanroomsMembershipPaymentConfigurationMachineLearning
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#machine_learning CleanroomsMembership#machine_learning}.

---

##### `query_compute`<sup>Optional</sup> <a name="query_compute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.queryCompute"></a>

```python
query_compute: CleanroomsMembershipPaymentConfigurationQueryCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#query_compute CleanroomsMembership#query_compute}.

---

### CleanroomsMembershipPaymentConfigurationJobCompute <a name="CleanroomsMembershipPaymentConfigurationJobCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipPaymentConfigurationMachineLearning <a name="CleanroomsMembershipPaymentConfigurationMachineLearning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning(
  model_inference: CleanroomsMembershipPaymentConfigurationMachineLearningModelInference = None,
  model_training: CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining = None,
  synthetic_data_generation: CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.modelInference">model_inference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#model_inference CleanroomsMembership#model_inference}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.modelTraining">model_training</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#model_training CleanroomsMembership#model_training}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.syntheticDataGeneration">synthetic_data_generation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#synthetic_data_generation CleanroomsMembership#synthetic_data_generation}. |

---

##### `model_inference`<sup>Optional</sup> <a name="model_inference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.modelInference"></a>

```python
model_inference: CleanroomsMembershipPaymentConfigurationMachineLearningModelInference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#model_inference CleanroomsMembership#model_inference}.

---

##### `model_training`<sup>Optional</sup> <a name="model_training" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.modelTraining"></a>

```python
model_training: CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#model_training CleanroomsMembership#model_training}.

---

##### `synthetic_data_generation`<sup>Optional</sup> <a name="synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.syntheticDataGeneration"></a>

```python
synthetic_data_generation: CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#synthetic_data_generation CleanroomsMembership#synthetic_data_generation}.

---

### CleanroomsMembershipPaymentConfigurationMachineLearningModelInference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningModelInference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining <a name="CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration <a name="CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipPaymentConfigurationQueryCompute <a name="CleanroomsMembershipPaymentConfigurationQueryCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute(
  is_responsible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipTags <a name="CleanroomsMembershipTags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#key CleanroomsMembership#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#value CleanroomsMembership#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#key CleanroomsMembership#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#value CleanroomsMembership#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.putS3"></a>

```python
def put_s3(
  bucket: str = None,
  key_prefix: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.putS3.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}.

---

###### `key_prefix`<sup>Optional</sup> <a name="key_prefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.putS3.parameter.keyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}.

---

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3"></a>

```python
s3: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a>

---


### CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix">reset_key_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key_prefix` <a name="reset_key_prefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix"></a>

```python
def reset_key_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput">key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_prefix_input`<sup>Optional</sup> <a name="key_prefix_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput"></a>

```python
key_prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a>

---


### CleanroomsMembershipDefaultJobResultConfigurationOutputReference <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.putOutputConfiguration">put_output_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resetOutputConfiguration">reset_output_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_output_configuration` <a name="put_output_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.putOutputConfiguration"></a>

```python
def put_output_configuration(
  s3: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 = None
) -> None
```

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.putOutputConfiguration.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}.

---

##### `reset_output_configuration` <a name="reset_output_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resetOutputConfiguration"></a>

```python
def reset_output_configuration() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfiguration">output_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfigurationInput">output_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_configuration`<sup>Required</sup> <a name="output_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfiguration"></a>

```python
output_configuration: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference</a>

---

##### `output_configuration_input`<sup>Optional</sup> <a name="output_configuration_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfigurationInput"></a>

```python
output_configuration_input: IResolvable | CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipDefaultJobResultConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a>

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3"></a>

```python
def put_s3(
  bucket: str = None,
  key_prefix: str = None,
  result_format: str = None,
  single_file_output: bool | IResolvable = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}.

---

###### `key_prefix`<sup>Optional</sup> <a name="key_prefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3.parameter.keyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}.

---

###### `result_format`<sup>Optional</sup> <a name="result_format" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3.parameter.resultFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}.

---

###### `single_file_output`<sup>Optional</sup> <a name="single_file_output" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3.parameter.singleFileOutput"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#single_file_output CleanroomsMembership#single_file_output}.

---

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3"></a>

```python
s3: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix">reset_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetResultFormat">reset_result_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetSingleFileOutput">reset_single_file_output</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key_prefix` <a name="reset_key_prefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix"></a>

```python
def reset_key_prefix() -> None
```

##### `reset_result_format` <a name="reset_result_format" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetResultFormat"></a>

```python
def reset_result_format() -> None
```

##### `reset_single_file_output` <a name="reset_single_file_output" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetSingleFileOutput"></a>

```python
def reset_single_file_output() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput">key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormatInput">result_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutputInput">single_file_output_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormat">result_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutput">single_file_output</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_prefix_input`<sup>Optional</sup> <a name="key_prefix_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput"></a>

```python
key_prefix_input: str
```

- *Type:* str

---

##### `result_format_input`<sup>Optional</sup> <a name="result_format_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormatInput"></a>

```python
result_format_input: str
```

- *Type:* str

---

##### `single_file_output_input`<sup>Optional</sup> <a name="single_file_output_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutputInput"></a>

```python
single_file_output_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `result_format`<sup>Required</sup> <a name="result_format" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormat"></a>

```python
result_format: str
```

- *Type:* str

---

##### `single_file_output`<sup>Required</sup> <a name="single_file_output" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutput"></a>

```python
single_file_output: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>

---


### CleanroomsMembershipDefaultResultConfigurationOutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration">put_output_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetOutputConfiguration">reset_output_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_output_configuration` <a name="put_output_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration"></a>

```python
def put_output_configuration(
  s3: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 = None
) -> None
```

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}.

---

##### `reset_output_configuration` <a name="reset_output_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetOutputConfiguration"></a>

```python
def reset_output_configuration() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfiguration">output_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfigurationInput">output_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_configuration`<sup>Required</sup> <a name="output_configuration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfiguration"></a>

```python
output_configuration: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference</a>

---

##### `output_configuration_input`<sup>Optional</sup> <a name="output_configuration_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfigurationInput"></a>

```python
output_configuration_input: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipDefaultResultConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>

---


### CleanroomsMembershipPaymentConfigurationJobComputeOutputReference <a name="CleanroomsMembershipPaymentConfigurationJobComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipPaymentConfigurationJobCompute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a>

---


### CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearningModelInference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a>

---


### CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a>

---


### CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelInference">put_model_inference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelTraining">put_model_training</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration">put_synthetic_data_generation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetModelInference">reset_model_inference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetModelTraining">reset_model_training</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration">reset_synthetic_data_generation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_model_inference` <a name="put_model_inference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelInference"></a>

```python
def put_model_inference(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelInference.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

##### `put_model_training` <a name="put_model_training" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelTraining"></a>

```python
def put_model_training(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelTraining.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

##### `put_synthetic_data_generation` <a name="put_synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration"></a>

```python
def put_synthetic_data_generation(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

##### `reset_model_inference` <a name="reset_model_inference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetModelInference"></a>

```python
def reset_model_inference() -> None
```

##### `reset_model_training` <a name="reset_model_training" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetModelTraining"></a>

```python
def reset_model_training() -> None
```

##### `reset_synthetic_data_generation` <a name="reset_synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration"></a>

```python
def reset_synthetic_data_generation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInference">model_inference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTraining">model_training</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration">synthetic_data_generation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput">model_inference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput">model_training_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput">synthetic_data_generation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_inference`<sup>Required</sup> <a name="model_inference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInference"></a>

```python
model_inference: CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference</a>

---

##### `model_training`<sup>Required</sup> <a name="model_training" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTraining"></a>

```python
model_training: CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference</a>

---

##### `synthetic_data_generation`<sup>Required</sup> <a name="synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration"></a>

```python
synthetic_data_generation: CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a>

---

##### `model_inference_input`<sup>Optional</sup> <a name="model_inference_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput"></a>

```python
model_inference_input: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearningModelInference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a>

---

##### `model_training_input`<sup>Optional</sup> <a name="model_training_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput"></a>

```python
model_training_input: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a>

---

##### `synthetic_data_generation_input`<sup>Optional</sup> <a name="synthetic_data_generation_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput"></a>

```python
synthetic_data_generation_input: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearning
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a>

---


### CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---


### CleanroomsMembershipPaymentConfigurationOutputReference <a name="CleanroomsMembershipPaymentConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putJobCompute">put_job_compute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putMachineLearning">put_machine_learning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute">put_query_compute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetJobCompute">reset_job_compute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetMachineLearning">reset_machine_learning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetQueryCompute">reset_query_compute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_job_compute` <a name="put_job_compute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putJobCompute"></a>

```python
def put_job_compute(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putJobCompute.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

##### `put_machine_learning` <a name="put_machine_learning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putMachineLearning"></a>

```python
def put_machine_learning(
  model_inference: CleanroomsMembershipPaymentConfigurationMachineLearningModelInference = None,
  model_training: CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining = None,
  synthetic_data_generation: CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration = None
) -> None
```

###### `model_inference`<sup>Optional</sup> <a name="model_inference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putMachineLearning.parameter.modelInference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#model_inference CleanroomsMembership#model_inference}.

---

###### `model_training`<sup>Optional</sup> <a name="model_training" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putMachineLearning.parameter.modelTraining"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#model_training CleanroomsMembership#model_training}.

---

###### `synthetic_data_generation`<sup>Optional</sup> <a name="synthetic_data_generation" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putMachineLearning.parameter.syntheticDataGeneration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#synthetic_data_generation CleanroomsMembership#synthetic_data_generation}.

---

##### `put_query_compute` <a name="put_query_compute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute"></a>

```python
def put_query_compute(
  is_responsible: bool | IResolvable = None
) -> None
```

###### `is_responsible`<sup>Optional</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute.parameter.isResponsible"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

##### `reset_job_compute` <a name="reset_job_compute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetJobCompute"></a>

```python
def reset_job_compute() -> None
```

##### `reset_machine_learning` <a name="reset_machine_learning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetMachineLearning"></a>

```python
def reset_machine_learning() -> None
```

##### `reset_query_compute` <a name="reset_query_compute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetQueryCompute"></a>

```python
def reset_query_compute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.jobCompute">job_compute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference">CleanroomsMembershipPaymentConfigurationJobComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearning">machine_learning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryCompute">query_compute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference">CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.jobComputeInput">job_compute_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearningInput">machine_learning_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryComputeInput">query_compute_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_compute`<sup>Required</sup> <a name="job_compute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.jobCompute"></a>

```python
job_compute: CleanroomsMembershipPaymentConfigurationJobComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference">CleanroomsMembershipPaymentConfigurationJobComputeOutputReference</a>

---

##### `machine_learning`<sup>Required</sup> <a name="machine_learning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearning"></a>

```python
machine_learning: CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference</a>

---

##### `query_compute`<sup>Required</sup> <a name="query_compute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryCompute"></a>

```python
query_compute: CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference">CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference</a>

---

##### `job_compute_input`<sup>Optional</sup> <a name="job_compute_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.jobComputeInput"></a>

```python
job_compute_input: IResolvable | CleanroomsMembershipPaymentConfigurationJobCompute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a>

---

##### `machine_learning_input`<sup>Optional</sup> <a name="machine_learning_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearningInput"></a>

```python
machine_learning_input: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearning
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a>

---

##### `query_compute_input`<sup>Optional</sup> <a name="query_compute_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryComputeInput"></a>

```python
query_compute_input: IResolvable | CleanroomsMembershipPaymentConfigurationQueryCompute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipPaymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>

---


### CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference <a name="CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resetIsResponsible">reset_is_responsible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_responsible` <a name="reset_is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resetIsResponsible"></a>

```python
def reset_is_responsible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput">is_responsible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsible">is_responsible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible_input`<sup>Optional</sup> <a name="is_responsible_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput"></a>

```python
is_responsible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```python
is_responsible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipPaymentConfigurationQueryCompute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>

---


### CleanroomsMembershipTagsList <a name="CleanroomsMembershipTagsList" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsMembershipTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsMembershipTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>]

---


### CleanroomsMembershipTagsOutputReference <a name="CleanroomsMembershipTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_membership

cleanroomsMembership.CleanroomsMembershipTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsMembershipTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>

---



