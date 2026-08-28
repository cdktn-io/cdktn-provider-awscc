# `wafv2LoggingConfiguration` Submodule <a name="`wafv2LoggingConfiguration` Submodule" id="@cdktn/provider-awscc.wafv2LoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2LoggingConfiguration <a name="Wafv2LoggingConfiguration" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration awscc_wafv2_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  log_destination_configs: typing.List[str],
  resource_arn: str,
  logging_filter: Wafv2LoggingConfigurationLoggingFilter = None,
  redacted_fields: IResolvable | typing.List[Wafv2LoggingConfigurationRedactedFields] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.logDestinationConfigs">log_destination_configs</a></code> | <code>typing.List[str]</code> | The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.resourceArn">resource_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.loggingFilter">logging_filter</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a></code> | Filtering that specifies which web requests are kept in the logs and which are dropped. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.redactedFields">redacted_fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>]</code> | The parts of the request that you want to keep out of the logs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `log_destination_configs`<sup>Required</sup> <a name="log_destination_configs" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.logDestinationConfigs"></a>

- *Type:* typing.List[str]

The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#log_destination_configs Wafv2LoggingConfiguration#log_destination_configs}

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.resourceArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#resource_arn Wafv2LoggingConfiguration#resource_arn}

---

##### `logging_filter`<sup>Optional</sup> <a name="logging_filter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.loggingFilter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a>

Filtering that specifies which web requests are kept in the logs and which are dropped.

You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#logging_filter Wafv2LoggingConfiguration#logging_filter}

---

##### `redacted_fields`<sup>Optional</sup> <a name="redacted_fields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.redactedFields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>]

The parts of the request that you want to keep out of the logs.

For example, if you redact the HEADER field, the HEADER field in the firehose will be xxx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#redacted_fields Wafv2LoggingConfiguration#redacted_fields}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putLoggingFilter">put_logging_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putRedactedFields">put_redacted_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetLoggingFilter">reset_logging_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetRedactedFields">reset_redacted_fields</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_logging_filter` <a name="put_logging_filter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putLoggingFilter"></a>

```python
def put_logging_filter(
  default_behavior: str = None,
  filters: IResolvable | typing.List[Wafv2LoggingConfigurationLoggingFilterFilters] = None
) -> None
```

###### `default_behavior`<sup>Optional</sup> <a name="default_behavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putLoggingFilter.parameter.defaultBehavior"></a>

- *Type:* str

Default handling for logs that don't match any of the specified filtering conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#default_behavior Wafv2LoggingConfiguration#default_behavior}

---

###### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putLoggingFilter.parameter.filters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>]

The filters that you want to apply to the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#filters Wafv2LoggingConfiguration#filters}

---

##### `put_redacted_fields` <a name="put_redacted_fields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putRedactedFields"></a>

```python
def put_redacted_fields(
  value: IResolvable | typing.List[Wafv2LoggingConfigurationRedactedFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putRedactedFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>]

---

##### `reset_logging_filter` <a name="reset_logging_filter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetLoggingFilter"></a>

```python
def reset_logging_filter() -> None
```

##### `reset_redacted_fields` <a name="reset_redacted_fields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetRedactedFields"></a>

```python
def reset_redacted_fields() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Wafv2LoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Wafv2LoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Wafv2LoggingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Wafv2LoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Wafv2LoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.loggingFilter">logging_filter</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference">Wafv2LoggingConfigurationLoggingFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.managedByFirewallManager">managed_by_firewall_manager</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.redactedFields">redacted_fields</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList">Wafv2LoggingConfigurationRedactedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.logDestinationConfigsInput">log_destination_configs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.loggingFilterInput">logging_filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.redactedFieldsInput">redacted_fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.logDestinationConfigs">log_destination_configs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logging_filter`<sup>Required</sup> <a name="logging_filter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.loggingFilter"></a>

```python
logging_filter: Wafv2LoggingConfigurationLoggingFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference">Wafv2LoggingConfigurationLoggingFilterOutputReference</a>

---

##### `managed_by_firewall_manager`<sup>Required</sup> <a name="managed_by_firewall_manager" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.managedByFirewallManager"></a>

```python
managed_by_firewall_manager: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `redacted_fields`<sup>Required</sup> <a name="redacted_fields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.redactedFields"></a>

```python
redacted_fields: Wafv2LoggingConfigurationRedactedFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList">Wafv2LoggingConfigurationRedactedFieldsList</a>

---

##### `log_destination_configs_input`<sup>Optional</sup> <a name="log_destination_configs_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.logDestinationConfigsInput"></a>

```python
log_destination_configs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_filter_input`<sup>Optional</sup> <a name="logging_filter_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.loggingFilterInput"></a>

```python
logging_filter_input: IResolvable | Wafv2LoggingConfigurationLoggingFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a>

---

##### `redacted_fields_input`<sup>Optional</sup> <a name="redacted_fields_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.redactedFieldsInput"></a>

```python
redacted_fields_input: IResolvable | typing.List[Wafv2LoggingConfigurationRedactedFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>]

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `log_destination_configs`<sup>Required</sup> <a name="log_destination_configs" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.logDestinationConfigs"></a>

```python
log_destination_configs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2LoggingConfigurationConfig <a name="Wafv2LoggingConfigurationConfig" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  log_destination_configs: typing.List[str],
  resource_arn: str,
  logging_filter: Wafv2LoggingConfigurationLoggingFilter = None,
  redacted_fields: IResolvable | typing.List[Wafv2LoggingConfigurationRedactedFields] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.logDestinationConfigs">log_destination_configs</a></code> | <code>typing.List[str]</code> | The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.resourceArn">resource_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.loggingFilter">logging_filter</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a></code> | Filtering that specifies which web requests are kept in the logs and which are dropped. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.redactedFields">redacted_fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>]</code> | The parts of the request that you want to keep out of the logs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `log_destination_configs`<sup>Required</sup> <a name="log_destination_configs" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.logDestinationConfigs"></a>

```python
log_destination_configs: typing.List[str]
```

- *Type:* typing.List[str]

The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#log_destination_configs Wafv2LoggingConfiguration#log_destination_configs}

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#resource_arn Wafv2LoggingConfiguration#resource_arn}

---

##### `logging_filter`<sup>Optional</sup> <a name="logging_filter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.loggingFilter"></a>

```python
logging_filter: Wafv2LoggingConfigurationLoggingFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a>

Filtering that specifies which web requests are kept in the logs and which are dropped.

You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#logging_filter Wafv2LoggingConfiguration#logging_filter}

---

##### `redacted_fields`<sup>Optional</sup> <a name="redacted_fields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.redactedFields"></a>

```python
redacted_fields: IResolvable | typing.List[Wafv2LoggingConfigurationRedactedFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>]

The parts of the request that you want to keep out of the logs.

For example, if you redact the HEADER field, the HEADER field in the firehose will be xxx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#redacted_fields Wafv2LoggingConfiguration#redacted_fields}

---

### Wafv2LoggingConfigurationLoggingFilter <a name="Wafv2LoggingConfigurationLoggingFilter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter(
  default_behavior: str = None,
  filters: IResolvable | typing.List[Wafv2LoggingConfigurationLoggingFilterFilters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.property.defaultBehavior">default_behavior</a></code> | <code>str</code> | Default handling for logs that don't match any of the specified filtering conditions. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.property.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>]</code> | The filters that you want to apply to the logs. |

---

##### `default_behavior`<sup>Optional</sup> <a name="default_behavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.property.defaultBehavior"></a>

```python
default_behavior: str
```

- *Type:* str

Default handling for logs that don't match any of the specified filtering conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#default_behavior Wafv2LoggingConfiguration#default_behavior}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.property.filters"></a>

```python
filters: IResolvable | typing.List[Wafv2LoggingConfigurationLoggingFilterFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>]

The filters that you want to apply to the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#filters Wafv2LoggingConfiguration#filters}

---

### Wafv2LoggingConfigurationLoggingFilterFilters <a name="Wafv2LoggingConfigurationLoggingFilterFilters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters(
  behavior: str = None,
  conditions: IResolvable | typing.List[Wafv2LoggingConfigurationLoggingFilterFiltersConditions] = None,
  requirement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.behavior">behavior</a></code> | <code>str</code> | How to handle logs that satisfy the filter's conditions and requirement. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>]</code> | Match conditions for the filter. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.requirement">requirement</a></code> | <code>str</code> | Logic to apply to the filtering conditions. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

How to handle logs that satisfy the filter's conditions and requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#behavior Wafv2LoggingConfiguration#behavior}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.conditions"></a>

```python
conditions: IResolvable | typing.List[Wafv2LoggingConfigurationLoggingFilterFiltersConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>]

Match conditions for the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#conditions Wafv2LoggingConfiguration#conditions}

---

##### `requirement`<sup>Optional</sup> <a name="requirement" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.requirement"></a>

```python
requirement: str
```

- *Type:* str

Logic to apply to the filtering conditions.

You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#requirement Wafv2LoggingConfiguration#requirement}

---

### Wafv2LoggingConfigurationLoggingFilterFiltersConditions <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions(
  action_condition: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition = None,
  label_name_condition: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.property.actionCondition">action_condition</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a></code> | A single action condition. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.property.labelNameCondition">label_name_condition</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a></code> | A single label name condition. |

---

##### `action_condition`<sup>Optional</sup> <a name="action_condition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.property.actionCondition"></a>

```python
action_condition: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a>

A single action condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#action_condition Wafv2LoggingConfiguration#action_condition}

---

##### `label_name_condition`<sup>Optional</sup> <a name="label_name_condition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.property.labelNameCondition"></a>

```python
label_name_condition: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a>

A single label name condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#label_name_condition Wafv2LoggingConfiguration#label_name_condition}

---

### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition(
  action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition.property.action">action</a></code> | <code>str</code> | Logic to apply to the filtering conditions. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition.property.action"></a>

```python
action: str
```

- *Type:* str

Logic to apply to the filtering conditions.

You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#action Wafv2LoggingConfiguration#action}

---

### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition(
  label_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition.property.labelName">label_name</a></code> | <code>str</code> | The label name that a log record must contain in order to meet the condition. |

---

##### `label_name`<sup>Optional</sup> <a name="label_name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition.property.labelName"></a>

```python
label_name: str
```

- *Type:* str

The label name that a log record must contain in order to meet the condition.

This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#label_name Wafv2LoggingConfiguration#label_name}

---

### Wafv2LoggingConfigurationRedactedFields <a name="Wafv2LoggingConfigurationRedactedFields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields(
  method: str = None,
  query_string: str = None,
  single_header: Wafv2LoggingConfigurationRedactedFieldsSingleHeader = None,
  uri_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.method">method</a></code> | <code>str</code> | Inspect the HTTP method. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.queryString">query_string</a></code> | <code>str</code> | Inspect the query string. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.singleHeader">single_header</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a></code> | Inspect a single header. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.uriPath">uri_path</a></code> | <code>str</code> | Inspect the request URI path. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.method"></a>

```python
method: str
```

- *Type:* str

Inspect the HTTP method.

The method indicates the type of operation that the request is asking the origin to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#method Wafv2LoggingConfiguration#method}

---

##### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

Inspect the query string.

This is the part of a URL that appears after a ? character, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#query_string Wafv2LoggingConfiguration#query_string}

---

##### `single_header`<sup>Optional</sup> <a name="single_header" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.singleHeader"></a>

```python
single_header: Wafv2LoggingConfigurationRedactedFieldsSingleHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a>

Inspect a single header.

Provide the name of the header to inspect, for example, User-Agent or Referer. This setting isn't case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#single_header Wafv2LoggingConfiguration#single_header}

---

##### `uri_path`<sup>Optional</sup> <a name="uri_path" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.uriPath"></a>

```python
uri_path: str
```

- *Type:* str

Inspect the request URI path.

This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#uri_path Wafv2LoggingConfiguration#uri_path}

---

### Wafv2LoggingConfigurationRedactedFieldsSingleHeader <a name="Wafv2LoggingConfigurationRedactedFieldsSingleHeader" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader.property.name">name</a></code> | <code>str</code> | The name of the query header to inspect. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the query header to inspect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#name Wafv2LoggingConfiguration#name}

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resetAction">reset_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a>

---


### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resetLabelName">reset_label_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_label_name` <a name="reset_label_name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resetLabelName"></a>

```python
def reset_label_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelNameInput">label_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName">label_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_name_input`<sup>Optional</sup> <a name="label_name_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelNameInput"></a>

```python
label_name_input: str
```

- *Type:* str

---

##### `label_name`<sup>Required</sup> <a name="label_name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName"></a>

```python
label_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a>

---


### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Wafv2LoggingConfigurationLoggingFilterFiltersConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>]

---


### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putActionCondition">put_action_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition">put_label_name_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resetActionCondition">reset_action_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resetLabelNameCondition">reset_label_name_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action_condition` <a name="put_action_condition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putActionCondition"></a>

```python
def put_action_condition(
  action: str = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putActionCondition.parameter.action"></a>

- *Type:* str

Logic to apply to the filtering conditions.

You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#action Wafv2LoggingConfiguration#action}

---

##### `put_label_name_condition` <a name="put_label_name_condition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition"></a>

```python
def put_label_name_condition(
  label_name: str = None
) -> None
```

###### `label_name`<sup>Optional</sup> <a name="label_name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition.parameter.labelName"></a>

- *Type:* str

The label name that a log record must contain in order to meet the condition.

This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#label_name Wafv2LoggingConfiguration#label_name}

---

##### `reset_action_condition` <a name="reset_action_condition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resetActionCondition"></a>

```python
def reset_action_condition() -> None
```

##### `reset_label_name_condition` <a name="reset_label_name_condition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resetLabelNameCondition"></a>

```python
def reset_label_name_condition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionCondition">action_condition</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition">label_name_condition</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionConditionInput">action_condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameConditionInput">label_name_condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_condition`<sup>Required</sup> <a name="action_condition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionCondition"></a>

```python
action_condition: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference</a>

---

##### `label_name_condition`<sup>Required</sup> <a name="label_name_condition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition"></a>

```python
label_name_condition: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a>

---

##### `action_condition_input`<sup>Optional</sup> <a name="action_condition_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionConditionInput"></a>

```python
action_condition_input: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a>

---

##### `label_name_condition_input`<sup>Optional</sup> <a name="label_name_condition_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameConditionInput"></a>

```python
label_name_condition_input: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>

---


### Wafv2LoggingConfigurationLoggingFilterFiltersList <a name="Wafv2LoggingConfigurationLoggingFilterFiltersList" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Wafv2LoggingConfigurationLoggingFilterFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>]

---


### Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetBehavior">reset_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetRequirement">reset_requirement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[Wafv2LoggingConfigurationLoggingFilterFiltersConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>]

---

##### `reset_behavior` <a name="reset_behavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetBehavior"></a>

```python
def reset_behavior() -> None
```

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_requirement` <a name="reset_requirement" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetRequirement"></a>

```python
def reset_requirement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behaviorInput">behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirementInput">requirement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behavior">behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirement">requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditions"></a>

```python
conditions: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList</a>

---

##### `behavior_input`<sup>Optional</sup> <a name="behavior_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behaviorInput"></a>

```python
behavior_input: str
```

- *Type:* str

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[Wafv2LoggingConfigurationLoggingFilterFiltersConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>]

---

##### `requirement_input`<sup>Optional</sup> <a name="requirement_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirementInput"></a>

```python
requirement_input: str
```

- *Type:* str

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirement"></a>

```python
requirement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Wafv2LoggingConfigurationLoggingFilterFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>

---


### Wafv2LoggingConfigurationLoggingFilterOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resetDefaultBehavior">reset_default_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resetFilters">reset_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filters` <a name="put_filters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.putFilters"></a>

```python
def put_filters(
  value: IResolvable | typing.List[Wafv2LoggingConfigurationLoggingFilterFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>]

---

##### `reset_default_behavior` <a name="reset_default_behavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resetDefaultBehavior"></a>

```python
def reset_default_behavior() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resetFilters"></a>

```python
def reset_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList">Wafv2LoggingConfigurationLoggingFilterFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehaviorInput">default_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.filtersInput">filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehavior">default_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.filters"></a>

```python
filters: Wafv2LoggingConfigurationLoggingFilterFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList">Wafv2LoggingConfigurationLoggingFilterFiltersList</a>

---

##### `default_behavior_input`<sup>Optional</sup> <a name="default_behavior_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehaviorInput"></a>

```python
default_behavior_input: str
```

- *Type:* str

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.filtersInput"></a>

```python
filters_input: IResolvable | typing.List[Wafv2LoggingConfigurationLoggingFilterFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>]

---

##### `default_behavior`<sup>Required</sup> <a name="default_behavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehavior"></a>

```python
default_behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Wafv2LoggingConfigurationLoggingFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a>

---


### Wafv2LoggingConfigurationRedactedFieldsList <a name="Wafv2LoggingConfigurationRedactedFieldsList" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2LoggingConfigurationRedactedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Wafv2LoggingConfigurationRedactedFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>]

---


### Wafv2LoggingConfigurationRedactedFieldsOutputReference <a name="Wafv2LoggingConfigurationRedactedFieldsOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.putSingleHeader">put_single_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetQueryString">reset_query_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetSingleHeader">reset_single_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetUriPath">reset_uri_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_single_header` <a name="put_single_header" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.putSingleHeader"></a>

```python
def put_single_header(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.putSingleHeader.parameter.name"></a>

- *Type:* str

The name of the query header to inspect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wafv2_logging_configuration#name Wafv2LoggingConfiguration#name}

---

##### `reset_method` <a name="reset_method" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_query_string` <a name="reset_query_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetQueryString"></a>

```python
def reset_query_string() -> None
```

##### `reset_single_header` <a name="reset_single_header" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetSingleHeader"></a>

```python
def reset_single_header() -> None
```

##### `reset_uri_path` <a name="reset_uri_path" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetUriPath"></a>

```python
def reset_uri_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeader">single_header</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference">Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryStringInput">query_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeaderInput">single_header_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPathInput">uri_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPath">uri_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `single_header`<sup>Required</sup> <a name="single_header" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeader"></a>

```python
single_header: Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference">Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference</a>

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryStringInput"></a>

```python
query_string_input: str
```

- *Type:* str

---

##### `single_header_input`<sup>Optional</sup> <a name="single_header_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeaderInput"></a>

```python
single_header_input: IResolvable | Wafv2LoggingConfigurationRedactedFieldsSingleHeader
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a>

---

##### `uri_path_input`<sup>Optional</sup> <a name="uri_path_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPathInput"></a>

```python
uri_path_input: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `uri_path`<sup>Required</sup> <a name="uri_path" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPath"></a>

```python
uri_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Wafv2LoggingConfigurationRedactedFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>

---


### Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference <a name="Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_logging_configuration

wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Wafv2LoggingConfigurationRedactedFieldsSingleHeader
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a>

---



