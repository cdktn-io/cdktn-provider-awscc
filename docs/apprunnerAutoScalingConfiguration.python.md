# `apprunnerAutoScalingConfiguration` Submodule <a name="`apprunnerAutoScalingConfiguration` Submodule" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerAutoScalingConfiguration <a name="ApprunnerAutoScalingConfiguration" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration awscc_apprunner_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_auto_scaling_configuration

apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_scaling_configuration_name: str = None,
  max_concurrency: typing.Union[int, float] = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[ApprunnerAutoScalingConfigurationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.autoScalingConfigurationName">auto_scaling_configuration_name</a></code> | <code>str</code> | The customer-provided auto scaling configuration name. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.maxConcurrency">max_concurrency</a></code> | <code>typing.Union[int, float]</code> | The maximum number of concurrent requests that an instance processes. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of instances that an App Runner service scales up to. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | The minimum number of instances that App Runner provisions for a service. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>]</code> | A list of metadata items that you can associate with your auto scaling configuration resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_scaling_configuration_name`<sup>Optional</sup> <a name="auto_scaling_configuration_name" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.autoScalingConfigurationName"></a>

- *Type:* str

The customer-provided auto scaling configuration name.

When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration. The auto scaling configuration name can be used in multiple revisions of a configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#auto_scaling_configuration_name ApprunnerAutoScalingConfiguration#auto_scaling_configuration_name}

---

##### `max_concurrency`<sup>Optional</sup> <a name="max_concurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.maxConcurrency"></a>

- *Type:* typing.Union[int, float]

The maximum number of concurrent requests that an instance processes.

If the number of concurrent requests exceeds this limit, App Runner scales the service up to use more instances to process the requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#max_concurrency ApprunnerAutoScalingConfiguration#max_concurrency}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

The maximum number of instances that an App Runner service scales up to.

At most MaxSize instances actively serve traffic for your service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#max_size ApprunnerAutoScalingConfiguration#max_size}

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

The minimum number of instances that App Runner provisions for a service.

The service always has at least MinSize provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#min_size ApprunnerAutoScalingConfiguration#min_size}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>]

A list of metadata items that you can associate with your auto scaling configuration resource.

A tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#tags ApprunnerAutoScalingConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetAutoScalingConfigurationName">reset_auto_scaling_configuration_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxConcurrency">reset_max_concurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxSize">reset_max_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMinSize">reset_min_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApprunnerAutoScalingConfigurationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>]

---

##### `reset_auto_scaling_configuration_name` <a name="reset_auto_scaling_configuration_name" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetAutoScalingConfigurationName"></a>

```python
def reset_auto_scaling_configuration_name() -> None
```

##### `reset_max_concurrency` <a name="reset_max_concurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxConcurrency"></a>

```python
def reset_max_concurrency() -> None
```

##### `reset_max_size` <a name="reset_max_size" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxSize"></a>

```python
def reset_max_size() -> None
```

##### `reset_min_size` <a name="reset_min_size" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMinSize"></a>

```python
def reset_min_size() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApprunnerAutoScalingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import apprunner_auto_scaling_configuration

apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apprunner_auto_scaling_configuration

apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apprunner_auto_scaling_configuration

apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apprunner_auto_scaling_configuration

apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApprunnerAutoScalingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApprunnerAutoScalingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApprunnerAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApprunnerAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationArn">auto_scaling_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationRevision">auto_scaling_configuration_revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.latest">latest</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList">ApprunnerAutoScalingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationNameInput">auto_scaling_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrencyInput">max_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationName">auto_scaling_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrency">max_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_scaling_configuration_arn`<sup>Required</sup> <a name="auto_scaling_configuration_arn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationArn"></a>

```python
auto_scaling_configuration_arn: str
```

- *Type:* str

---

##### `auto_scaling_configuration_revision`<sup>Required</sup> <a name="auto_scaling_configuration_revision" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationRevision"></a>

```python
auto_scaling_configuration_revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.latest"></a>

```python
latest: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tags"></a>

```python
tags: ApprunnerAutoScalingConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList">ApprunnerAutoScalingConfigurationTagsList</a>

---

##### `auto_scaling_configuration_name_input`<sup>Optional</sup> <a name="auto_scaling_configuration_name_input" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationNameInput"></a>

```python
auto_scaling_configuration_name_input: str
```

- *Type:* str

---

##### `max_concurrency_input`<sup>Optional</sup> <a name="max_concurrency_input" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrencyInput"></a>

```python
max_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApprunnerAutoScalingConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>]

---

##### `auto_scaling_configuration_name`<sup>Required</sup> <a name="auto_scaling_configuration_name" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationName"></a>

```python
auto_scaling_configuration_name: str
```

- *Type:* str

---

##### `max_concurrency`<sup>Required</sup> <a name="max_concurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrency"></a>

```python
max_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerAutoScalingConfigurationConfig <a name="ApprunnerAutoScalingConfigurationConfig" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_auto_scaling_configuration

apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_scaling_configuration_name: str = None,
  max_concurrency: typing.Union[int, float] = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[ApprunnerAutoScalingConfigurationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.autoScalingConfigurationName">auto_scaling_configuration_name</a></code> | <code>str</code> | The customer-provided auto scaling configuration name. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxConcurrency">max_concurrency</a></code> | <code>typing.Union[int, float]</code> | The maximum number of concurrent requests that an instance processes. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of instances that an App Runner service scales up to. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | The minimum number of instances that App Runner provisions for a service. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>]</code> | A list of metadata items that you can associate with your auto scaling configuration resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_scaling_configuration_name`<sup>Optional</sup> <a name="auto_scaling_configuration_name" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.autoScalingConfigurationName"></a>

```python
auto_scaling_configuration_name: str
```

- *Type:* str

The customer-provided auto scaling configuration name.

When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration. The auto scaling configuration name can be used in multiple revisions of a configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#auto_scaling_configuration_name ApprunnerAutoScalingConfiguration#auto_scaling_configuration_name}

---

##### `max_concurrency`<sup>Optional</sup> <a name="max_concurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxConcurrency"></a>

```python
max_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of concurrent requests that an instance processes.

If the number of concurrent requests exceeds this limit, App Runner scales the service up to use more instances to process the requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#max_concurrency ApprunnerAutoScalingConfiguration#max_concurrency}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of instances that an App Runner service scales up to.

At most MaxSize instances actively serve traffic for your service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#max_size ApprunnerAutoScalingConfiguration#max_size}

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of instances that App Runner provisions for a service.

The service always has at least MinSize provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#min_size ApprunnerAutoScalingConfiguration#min_size}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApprunnerAutoScalingConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>]

A list of metadata items that you can associate with your auto scaling configuration resource.

A tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#tags ApprunnerAutoScalingConfiguration#tags}

---

### ApprunnerAutoScalingConfigurationTags <a name="ApprunnerAutoScalingConfigurationTags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_auto_scaling_configuration

apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#key ApprunnerAutoScalingConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#value ApprunnerAutoScalingConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#key ApprunnerAutoScalingConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apprunner_auto_scaling_configuration#value ApprunnerAutoScalingConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerAutoScalingConfigurationTagsList <a name="ApprunnerAutoScalingConfigurationTagsList" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_auto_scaling_configuration

apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApprunnerAutoScalingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApprunnerAutoScalingConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>]

---


### ApprunnerAutoScalingConfigurationTagsOutputReference <a name="ApprunnerAutoScalingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_auto_scaling_configuration

apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerAutoScalingConfigurationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>

---



