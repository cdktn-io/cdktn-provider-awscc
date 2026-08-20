# `dataAwsccNotificationsNotificationHub` Submodule <a name="`dataAwsccNotificationsNotificationHub` Submodule" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNotificationsNotificationHub <a name="DataAwsccNotificationsNotificationHub" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/notifications_notification_hub awscc_notifications_notification_hub}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_notifications_notification_hub

dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/notifications_notification_hub#id DataAwsccNotificationsNotificationHub#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccNotificationsNotificationHub resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_notifications_notification_hub

dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_notifications_notification_hub

dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_notifications_notification_hub

dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_notifications_notification_hub

dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccNotificationsNotificationHub resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccNotificationsNotificationHub to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccNotificationsNotificationHub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/notifications_notification_hub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNotificationsNotificationHub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.notificationHubStatusSummary">notification_hub_status_summary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference">DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `notification_hub_status_summary`<sup>Required</sup> <a name="notification_hub_status_summary" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.notificationHubStatusSummary"></a>

```python
notification_hub_status_summary: DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference">DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHub.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNotificationsNotificationHubConfig <a name="DataAwsccNotificationsNotificationHubConfig" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_notifications_notification_hub

dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/notifications_notification_hub#id DataAwsccNotificationsNotificationHub#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNotificationsNotificationHubNotificationHubStatusSummary <a name="DataAwsccNotificationsNotificationHubNotificationHubStatusSummary" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummary.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_notifications_notification_hub

dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummary()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference <a name="DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_notifications_notification_hub

dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.notificationHubStatus">notification_hub_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.notificationHubStatusReason">notification_hub_status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummary">DataAwsccNotificationsNotificationHubNotificationHubStatusSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notification_hub_status`<sup>Required</sup> <a name="notification_hub_status" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.notificationHubStatus"></a>

```python
notification_hub_status: str
```

- *Type:* str

---

##### `notification_hub_status_reason`<sup>Required</sup> <a name="notification_hub_status_reason" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.notificationHubStatusReason"></a>

```python
notification_hub_status_reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNotificationsNotificationHubNotificationHubStatusSummary
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNotificationsNotificationHub.DataAwsccNotificationsNotificationHubNotificationHubStatusSummary">DataAwsccNotificationsNotificationHubNotificationHubStatusSummary</a>

---



