# `logsDelivery` Submodule <a name="`logsDelivery` Submodule" id="@cdktn/provider-awscc.logsDelivery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsDelivery <a name="LogsDelivery" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery awscc_logs_delivery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer"></a>

```python
from cdktn_provider_awscc import logs_delivery

logsDelivery.LogsDelivery(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  delivery_destination_arn: str,
  delivery_source_name: str,
  field_delimiter: str = None,
  record_fields: typing.List[str] = None,
  s3_enable_hive_compatible_path: bool | IResolvable = None,
  s3_suffix_path: str = None,
  tags: IResolvable | typing.List[LogsDeliveryTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.deliveryDestinationArn">delivery_destination_arn</a></code> | <code>str</code> | The ARN of the delivery destination that is associated with this delivery. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.deliverySourceName">delivery_source_name</a></code> | <code>str</code> | The name of the delivery source that is associated with this delivery. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | The field delimiter to use between record fields when the final output format of a delivery is in Plain , W3C , or Raw format. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.recordFields">record_fields</a></code> | <code>typing.List[str]</code> | The list of record fields to be delivered to the destination, in order. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.s3EnableHiveCompatiblePath">s3_enable_hive_compatible_path</a></code> | <code>bool \| cdktn.IResolvable</code> | This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.s3SuffixPath">s3_suffix_path</a></code> | <code>str</code> | This string allows re-configuring the S3 object prefix to contain either static or variable sections. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>]</code> | The tags that have been assigned to this delivery. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `delivery_destination_arn`<sup>Required</sup> <a name="delivery_destination_arn" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.deliveryDestinationArn"></a>

- *Type:* str

The ARN of the delivery destination that is associated with this delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#delivery_destination_arn LogsDelivery#delivery_destination_arn}

---

##### `delivery_source_name`<sup>Required</sup> <a name="delivery_source_name" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.deliverySourceName"></a>

- *Type:* str

The name of the delivery source that is associated with this delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#delivery_source_name LogsDelivery#delivery_source_name}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.fieldDelimiter"></a>

- *Type:* str

The field delimiter to use between record fields when the final output format of a delivery is in Plain , W3C , or Raw format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#field_delimiter LogsDelivery#field_delimiter}

---

##### `record_fields`<sup>Optional</sup> <a name="record_fields" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.recordFields"></a>

- *Type:* typing.List[str]

The list of record fields to be delivered to the destination, in order.

If the delivery's log source has mandatory fields, they must be included in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#record_fields LogsDelivery#record_fields}

---

##### `s3_enable_hive_compatible_path`<sup>Optional</sup> <a name="s3_enable_hive_compatible_path" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.s3EnableHiveCompatiblePath"></a>

- *Type:* bool | cdktn.IResolvable

This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#s3_enable_hive_compatible_path LogsDelivery#s3_enable_hive_compatible_path}

---

##### `s3_suffix_path`<sup>Optional</sup> <a name="s3_suffix_path" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.s3SuffixPath"></a>

- *Type:* str

This string allows re-configuring the S3 object prefix to contain either static or variable sections.

The valid variables to use in the suffix path will vary by each log source. See ConfigurationTemplate$allowedSuffixPathFields for more info on what values are supported in the suffix path for each log source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#s3_suffix_path LogsDelivery#s3_suffix_path}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>]

The tags that have been assigned to this delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#tags LogsDelivery#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetRecordFields">reset_record_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetS3EnableHiveCompatiblePath">reset_s3_enable_hive_compatible_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetS3SuffixPath">reset_s3_suffix_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LogsDeliveryTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>]

---

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_record_fields` <a name="reset_record_fields" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetRecordFields"></a>

```python
def reset_record_fields() -> None
```

##### `reset_s3_enable_hive_compatible_path` <a name="reset_s3_enable_hive_compatible_path" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetS3EnableHiveCompatiblePath"></a>

```python
def reset_s3_enable_hive_compatible_path() -> None
```

##### `reset_s3_suffix_path` <a name="reset_s3_suffix_path" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetS3SuffixPath"></a>

```python
def reset_s3_suffix_path() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LogsDelivery resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isConstruct"></a>

```python
from cdktn_provider_awscc import logs_delivery

logsDelivery.LogsDelivery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformElement"></a>

```python
from cdktn_provider_awscc import logs_delivery

logsDelivery.LogsDelivery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformResource"></a>

```python
from cdktn_provider_awscc import logs_delivery

logsDelivery.LogsDelivery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import logs_delivery

logsDelivery.LogsDelivery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LogsDelivery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogsDelivery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogsDelivery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogsDelivery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationType">delivery_destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryId">delivery_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList">LogsDeliveryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationArnInput">delivery_destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliverySourceNameInput">delivery_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.recordFieldsInput">record_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3EnableHiveCompatiblePathInput">s3_enable_hive_compatible_path_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3SuffixPathInput">s3_suffix_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationArn">delivery_destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliverySourceName">delivery_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.recordFields">record_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3EnableHiveCompatiblePath">s3_enable_hive_compatible_path</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3SuffixPath">s3_suffix_path</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `delivery_destination_type`<sup>Required</sup> <a name="delivery_destination_type" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationType"></a>

```python
delivery_destination_type: str
```

- *Type:* str

---

##### `delivery_id`<sup>Required</sup> <a name="delivery_id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryId"></a>

```python
delivery_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tags"></a>

```python
tags: LogsDeliveryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList">LogsDeliveryTagsList</a>

---

##### `delivery_destination_arn_input`<sup>Optional</sup> <a name="delivery_destination_arn_input" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationArnInput"></a>

```python
delivery_destination_arn_input: str
```

- *Type:* str

---

##### `delivery_source_name_input`<sup>Optional</sup> <a name="delivery_source_name_input" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliverySourceNameInput"></a>

```python
delivery_source_name_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `record_fields_input`<sup>Optional</sup> <a name="record_fields_input" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.recordFieldsInput"></a>

```python
record_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_enable_hive_compatible_path_input`<sup>Optional</sup> <a name="s3_enable_hive_compatible_path_input" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3EnableHiveCompatiblePathInput"></a>

```python
s3_enable_hive_compatible_path_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `s3_suffix_path_input`<sup>Optional</sup> <a name="s3_suffix_path_input" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3SuffixPathInput"></a>

```python
s3_suffix_path_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LogsDeliveryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>]

---

##### `delivery_destination_arn`<sup>Required</sup> <a name="delivery_destination_arn" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationArn"></a>

```python
delivery_destination_arn: str
```

- *Type:* str

---

##### `delivery_source_name`<sup>Required</sup> <a name="delivery_source_name" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliverySourceName"></a>

```python
delivery_source_name: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `record_fields`<sup>Required</sup> <a name="record_fields" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.recordFields"></a>

```python
record_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_enable_hive_compatible_path`<sup>Required</sup> <a name="s3_enable_hive_compatible_path" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3EnableHiveCompatiblePath"></a>

```python
s3_enable_hive_compatible_path: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `s3_suffix_path`<sup>Required</sup> <a name="s3_suffix_path" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3SuffixPath"></a>

```python
s3_suffix_path: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogsDeliveryConfig <a name="LogsDeliveryConfig" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import logs_delivery

logsDelivery.LogsDeliveryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  delivery_destination_arn: str,
  delivery_source_name: str,
  field_delimiter: str = None,
  record_fields: typing.List[str] = None,
  s3_enable_hive_compatible_path: bool | IResolvable = None,
  s3_suffix_path: str = None,
  tags: IResolvable | typing.List[LogsDeliveryTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.deliveryDestinationArn">delivery_destination_arn</a></code> | <code>str</code> | The ARN of the delivery destination that is associated with this delivery. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.deliverySourceName">delivery_source_name</a></code> | <code>str</code> | The name of the delivery source that is associated with this delivery. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | The field delimiter to use between record fields when the final output format of a delivery is in Plain , W3C , or Raw format. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.recordFields">record_fields</a></code> | <code>typing.List[str]</code> | The list of record fields to be delivered to the destination, in order. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.s3EnableHiveCompatiblePath">s3_enable_hive_compatible_path</a></code> | <code>bool \| cdktn.IResolvable</code> | This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.s3SuffixPath">s3_suffix_path</a></code> | <code>str</code> | This string allows re-configuring the S3 object prefix to contain either static or variable sections. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>]</code> | The tags that have been assigned to this delivery. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `delivery_destination_arn`<sup>Required</sup> <a name="delivery_destination_arn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.deliveryDestinationArn"></a>

```python
delivery_destination_arn: str
```

- *Type:* str

The ARN of the delivery destination that is associated with this delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#delivery_destination_arn LogsDelivery#delivery_destination_arn}

---

##### `delivery_source_name`<sup>Required</sup> <a name="delivery_source_name" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.deliverySourceName"></a>

```python
delivery_source_name: str
```

- *Type:* str

The name of the delivery source that is associated with this delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#delivery_source_name LogsDelivery#delivery_source_name}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

The field delimiter to use between record fields when the final output format of a delivery is in Plain , W3C , or Raw format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#field_delimiter LogsDelivery#field_delimiter}

---

##### `record_fields`<sup>Optional</sup> <a name="record_fields" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.recordFields"></a>

```python
record_fields: typing.List[str]
```

- *Type:* typing.List[str]

The list of record fields to be delivered to the destination, in order.

If the delivery's log source has mandatory fields, they must be included in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#record_fields LogsDelivery#record_fields}

---

##### `s3_enable_hive_compatible_path`<sup>Optional</sup> <a name="s3_enable_hive_compatible_path" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.s3EnableHiveCompatiblePath"></a>

```python
s3_enable_hive_compatible_path: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#s3_enable_hive_compatible_path LogsDelivery#s3_enable_hive_compatible_path}

---

##### `s3_suffix_path`<sup>Optional</sup> <a name="s3_suffix_path" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.s3SuffixPath"></a>

```python
s3_suffix_path: str
```

- *Type:* str

This string allows re-configuring the S3 object prefix to contain either static or variable sections.

The valid variables to use in the suffix path will vary by each log source. See ConfigurationTemplate$allowedSuffixPathFields for more info on what values are supported in the suffix path for each log source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#s3_suffix_path LogsDelivery#s3_suffix_path}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LogsDeliveryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>]

The tags that have been assigned to this delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#tags LogsDelivery#tags}

---

### LogsDeliveryTags <a name="LogsDeliveryTags" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.Initializer"></a>

```python
from cdktn_provider_awscc import logs_delivery

logsDelivery.LogsDeliveryTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. You can specify a value that is 1 to 128 Unicode. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.property.value">value</a></code> | <code>str</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag. You can specify a value that is 1 to 128 Unicode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#key LogsDelivery#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag. You can specify a value that is 0 to 256 Unicode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#value LogsDelivery#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsDeliveryTagsList <a name="LogsDeliveryTagsList" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import logs_delivery

logsDelivery.LogsDeliveryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsDeliveryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LogsDeliveryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>]

---


### LogsDeliveryTagsOutputReference <a name="LogsDeliveryTagsOutputReference" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import logs_delivery

logsDelivery.LogsDeliveryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LogsDeliveryTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>

---



